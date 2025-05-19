import fg from 'fast-glob';
import path from 'path';
import chalk from 'chalk';
import Task from '../task-runner/task.mjs';
import { ignoreCssEntryFile } from '../ignore.mjs';
import getAllComponents from '../../utils/getAllComponents.mjs';

const task = async () => {
  const components = await getAllComponents();
  const invalidData = {};
  for (const component of components) {
    const { name, path: componentPath } = component;
    if (ignoreCssEntryFile.includes(name)) continue;

    const files = await fg(path.join(componentPath, 'index.less'));
    if (!files.length) {
      invalidData[name] = {
        name,
        path: componentPath,
        message: `${name} 组件样式入口文件名不正确，应为index.less，请检查！`,
      };
    }
  }
  return invalidData;
};

export default new Task({
  name: 'task-css-entry-file',
  desc: '组件样式入口文件名是否正确，用于规范独立导出组件样式',
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
          `🚀 ${chalk.green('[样式入口文件名审查任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[样式入口文件名审查任务]--存在样式入口文件不合规，请根据报表信息处理！')}`,
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
