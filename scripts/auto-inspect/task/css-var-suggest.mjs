import fg from 'fast-glob';
import ora from 'ora';
import path from 'path';
import fse from 'fs-extra';
import chalk from 'chalk';
import Task from '../task-runner/task.mjs';
import initOpenAI from '../../utils/initOpenAI.mjs';
import getAllComponents from '../../utils/getAllComponents.mjs';
import {
  systemPrompt,
  userPrompt,
} from '../ai-helper/prompt/css-var-suggest.mjs';
import { ignoreCssEntryFile } from '../ignore.mjs';

const defaultLightPath = path.resolve(
  import.meta.dirname,
  '../../../packages/bui-styles/registry/default-light.mjs',
);

const task = async (componentList = []) => {
  try {
    const components = await getAllComponents();
    const client = initOpenAI();
    const result = {};
    const checkList = [];
    const invalidList = [];
    const isSkip = componentList.some((i) => i === '-i');
    if (isSkip) {
      console.log(`🚀 ${chalk.green('已跳过-[css变量应用审查任务]')}`);
      result.isSkip = isSkip;
      return result;
    }

    componentList.forEach((i) => {
      const isValid = components.some((c) => c.name === i);
      if (isValid) {
        checkList.push(i);
      } else {
        invalidList.push(i);
      }
    });

    if (invalidList.length) {
      console.log(
        `${chalk.red('Tips')} 你输入的以下组件名不存在：${invalidList}`,
      );
    }

    const defaultLight = fse.readFileSync(defaultLightPath, 'utf-8');
    // 提取 cssVars 对象的内容（包括注释和换行）
    const cssVarsReg = /cssVars:\s*({[\s\S]*?}),/;
    const cssVarsMatch = defaultLight.match(cssVarsReg);
    if (!cssVarsMatch) {
      throw new Error('css变量数据源有误，请检查！');
    }
    // 一定要包含注释和换行内容，便于AI理解
    const cssVars = cssVarsMatch[1].trim();

    for (const component of components) {
      const { name, path: componentPath } = component;
      // 传入需要检查的组件白名单则只检查白名单内的组件，否则不检查任何组件
      const needCheck = checkList.length && checkList.includes(name);
      if (!checkList.length) {
        console.log(chalk.red('请输入需要检查的正确组件名！'));
        return;
      }
      if (ignoreCssEntryFile.includes(name) || !needCheck) continue;

      if (!result[name]) {
        result[name] = [];
      }
      const spinner = ora(`AI 正在审查 ${name} 组件的样式代码...`).start();

      try {
        const lessFiles = await fg(path.join(componentPath, '**', '*.less'));
        const systemContent = systemPrompt();

        for (const lessPath of lessFiles) {
          const lessContent = fse.readFileSync(lessPath, 'utf-8');
          const userContent = userPrompt({
            componentName: name,
            cssContent: lessContent,
            cssPath: lessPath,
            componentPath,
            cssVars,
          });

          const response = await client.chat.completions.create({
            model: 'claude37_sonnet',
            messages: [
              {
                role: 'system',
                content: systemContent,
              },
              {
                role: 'user',
                content: userContent,
              },
            ],
            stream: false,
          });

          const suggestContent = response.choices[0].message.content;
          const regex = /<answer>\s*([\s\S]*?)\s*<\/answer>/;
          const match = suggestContent.match(regex);

          if (!match || !match[1]) {
            throw new Error('未找到有效的 <answer> 标签内容');
          }

          const jsonString = match[1].trim();
          const curRes = JSON.parse(jsonString);
          result[name].push(curRes);
        }
      } finally {
        spinner.stop();
      }
    }

    const res = {};
    Object.entries(result).forEach(([component, resList]) => {
      const validRes = resList.filter((item) => item?.suggestions?.length);
      if (validRes.length) {
        res[component] = validRes;
      }
    });

    return res;
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};

export default new Task({
  name: 'task-css-var-suggest',
  desc: '组件less中的样式属性是否存在可替换为css变量的值',
  inputTips:
    '请输入需要检查css变量应用是否合理的组件（多个以空格隔开，输入 -i 跳过）',
  aiWarning: 'AI审查结果，请谨慎参考',
  task: async (checkList = []) => {
    let result = {
      // 任务执行是否异常
      taskException: false,
      // 任务是否通过
      pass: true,
      // 任务不通过的数据
      data: null,
    };
    try {
      const data = await task(checkList);
      if (data.isSkip) {
        delete data.isSkip;
        return result;
      }

      if (!Object.keys(data).length) {
        console.log(
          `🚀 ${chalk.green('[css变量应用审查任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[css变量应用审查任务]--本次审查的组件样式仍有优化空间，请根据报表信息处理！')}`,
        );
        result.pass = false;
        result.data = data;
      }
    } catch (error) {
      result.taskException = true;
      result.pass = false;
      result.error = error;
    }
    return result;
  },
});
