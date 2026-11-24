import fg from 'fast-glob';
import path from 'node:path';
import fse from 'fs-extra';
import chalk from 'chalk';
import Task from '../task-runner/task.mjs';
import { ignoreThemeDesignOnline } from '../ignore.mjs';
import getAllComponents from '../../utils/getAllComponents.mjs';
import { rootSelectorContentRegex, convertToJson } from '../../utils/index.mjs';

const themeVarsPath = path.join(
  import.meta.dirname,
  '../../../docs/constants/theme-vars.json',
);

const task = async () => {
  const components = await getAllComponents();
  const themeVarsStr = fse.readFileSync(themeVarsPath, 'utf-8');
  const themeVars = JSON.parse(themeVarsStr);

  const invalidData = {};
  for (const component of components) {
    const { name, path: componentPath } = component;
    if (ignoreThemeDesignOnline.includes(name)) continue;

    const files = await fg(path.join(componentPath, '**', '*.less'));
    invalidData[name] = {
      name,
      path: componentPath,
    };
    if (files.length) {
      for (const lessFile of files) {
        const lessContent = fse.readFileSync(lessFile, 'utf-8');
        const match = rootSelectorContentRegex.exec(lessContent);
        if (match) {
          const rootContent = match[1].trim();
          const cssVars = convertToJson(rootContent);
          const targetVars = themeVars[name].cssVars;
          if (!invalidData?.[name]?.errCssVars) {
            // 缺失或值错误的css变量
            invalidData[name].errCssVars = [];
          }
          Object.entries(cssVars).forEach(([key, value]) => {
            if (value !== targetVars[key]) {
              invalidData[name].errCssVars.push(key);
              invalidData[name].message =
                `${name} 组件自定义主题变量未存在于theme-vars.json中或变量值不一致，请执行pnpm theme:less2js更正`;
            }
          });
        }
      }
    }
  }
  Object.keys(invalidData).forEach((key) => {
    if (!invalidData[key].errCssVars.length) {
      delete invalidData[key];
    }
  });

  return invalidData;
};

export default new Task({
  name: 'theme-design-online',
  desc: '组件是否支持在线定制主题任务',
  task: async () => {
    let result = {
      // 任务执行是否异常
      taskException: false,
      // 任务是否通过
      pass: true,
      // 任务不通过的数据
      data: null,
    };
    try {
      const data = await task();
      if (!Object.keys(data).length) {
        console.log(
          `🚀 ${chalk.green('[组件是否支持在线定制主题任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[组件是否支持在线定制主题任务]--存在组件未支持在线主题定制，请根据报表信息处理！')}`,
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
