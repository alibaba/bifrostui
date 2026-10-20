import fg from 'fast-glob';
import path from 'node:path';
import fse from 'fs-extra';
import chalk from 'chalk';
import Task from '../task-runner/task.mjs';
import getAllComponents from '../../utils/getAllComponents.mjs';
import { rootSelectorContentRegex } from '../../utils/index.mjs';
import { ignoreCssVarDeclare } from '../ignore.mjs';

const task = async () => {
  const components = await getAllComponents();
  const invalidData = {};
  for (const component of components) {
    const { name, path: componentPath } = component;
    if (ignoreCssVarDeclare.includes(name)) continue;

    const files = await fg(path.join(componentPath, '**', '*.less'));
    if (files.length) {
      let declared = true;
      let lessContent = '';
      for (const lessFile of files) {
        lessContent += fse.readFileSync(lessFile, 'utf-8');
      }
      const match = rootSelectorContentRegex.exec(lessContent);
      if (match) {
        const rootContent = match[1].trim();
        if (!rootContent.includes('--bui-')) {
          declared = false;
        }
      } else {
        declared = false;
      }
      if (!declared) {
        invalidData[name] = {
          name,
          path: componentPath,
          message: `${name} 组件样式文件未声明自定义主题变量，请检查！`,
        };
      }
    }
  }
  return invalidData;
};

export default new Task({
  name: 'task-css-var-declare',
  desc: '组件是否声明主题定制css变量任务',
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
          `🚀 ${chalk.green('[组件是否声明主题定制变量任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[组件是否声明主题定制变量任务]--存在组件未声明主题定制变量，请根据报表信息处理！')}`,
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
