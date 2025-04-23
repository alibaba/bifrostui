/**
 * 自动巡检，协助CR
 * 可插拔的巡检任务，将任务分为脚本任务和AI任务两类，特点如下：
 * 1. 脚本任务：快、准，适用于规则固定的规范检查，可巡检覆盖面较窄
 * 2. AI任务：慢，适用于规则不固定的规范检查，可巡检覆盖面广
 */
import fse from 'fs-extra';
import chalk from 'chalk';
import { input } from '@inquirer/prompts';
import cssVarDeclareTask from './task/css-var-declare.mjs';
import cssEntryFileTask from './task/css-entry-file.mjs';
import themeDesignOnline from './task/theme-design-online.mjs';
import cssVarSuggestTask from './task/css-var-suggest.mjs';
import testCoverageTask from './task/test-coverage.mjs';

const getInputComponents = async (message) => {
  let componentName = '';
  while (!componentName) {
    componentName = await input({ message });
  }
  return componentName.split(' ').filter((i) => i);
};

const main = async () => {
  // 1. 脚本任务（快、准，适用于规则固定的规范检查，覆盖面较窄）
  const scriptTasks = [
    cssVarDeclareTask,
    cssEntryFileTask,
    themeDesignOnline,
    testCoverageTask,
  ];
  // 2. AI任务（慢，适用于规则不固定的规范检查，覆盖面广）
  const aiTasks = [cssVarSuggestTask];

  // 执行巡检任务（异步）
  // 脚本任务所有组件全量执行
  const scriptTaskResults = await Promise.all(
    scriptTasks.map((task) => task.run()),
  );
  // AI任务按输入组件范围执行，输入 -i 跳过当前任务
  const aiTaskResults = await Promise.all(
    aiTasks.map(async (task) => {
      let inputComponents;
      if (task.options.inputTips) {
        inputComponents = await getInputComponents(task.options.inputTips);
      }
      return task.run(inputComponents);
    }),
  );

  // 生成巡检结果报表
  const resultFilePath = `${process.cwd()}/inspect.json`;
  const totalResult = [...scriptTaskResults, ...aiTaskResults].filter(
    (item) => !item.pass,
  );
  fse.outputJSONSync(resultFilePath, totalResult, {
    spaces: 2,
  });
  console.log(
    chalk.green(`🚀🚀🚀 巡检任务已完成，请前往 ${resultFilePath} 查看结果。`),
  );
};

main();
