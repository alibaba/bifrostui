import fg from 'fast-glob';
import ora from 'ora';
import path from 'path';
import chalk from 'chalk';
import Task from '../task-runner/task.mjs';
import initOpenAI from '../../utils/initOpenAI.mjs';
import getAllComponents from '../../utils/getAllComponents.mjs';
import { systemPrompt, userPrompt } from '../ai-helper/prompt/code-review.mjs';
import { ignoreCssEntryFile } from '../ignore.mjs';

const task = async (componentList = []) => {
  try {
    const components = await getAllComponents();
    const client = initOpenAI();
    const result = {};
    const checkList = [];
    const invalidList = [];
    const isSkip = componentList.some((i) => i === '-i');
    if (isSkip) {
      console.log(`🚀 ${chalk.green('已跳过-[CodeReview任务]')}`);
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
      const spinner = ora(`AI 正在CR ${name} 组件...`).start();

      try {
        const files = await fg([
          path.join(componentPath, '**', '*.*'),
          '!**/__tests__/**',
          '!**.md',
        ]);
        const tsxFiles = files.filter((i) => i.endsWith('.tsx'));
        const typesFiles = files.filter((i) => i.endsWith('.types.ts'));
        const lessFiles = files.filter((i) => i.endsWith('.less'));
        const extraFiles = files.filter(
          (i) =>
            !lessFiles.includes(i) &&
            !typesFiles.includes(i) &&
            !tsxFiles.includes(i),
        );
        const systemContent = systemPrompt();
        const userContent = userPrompt({
          componentName: name,
          componentPath,
          tsxFiles,
          typesFiles,
          lessFiles,
          extraFiles,
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
  name: 'task-code-review',
  desc: 'Code Review',
  inputTips: '请输入需要CR的组件（多个以空格隔开，输入 -i 跳过）',
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
          `🚀 ${chalk.green('[CodeReview任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[CodeReview任务]--本次CR的组件仍有优化空间，请根据报表信息处理！')}`,
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
