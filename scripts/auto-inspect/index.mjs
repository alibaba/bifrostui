/**
 * 自动巡检，协助CR
 * 可插拔的巡检任务，将任务分为脚本任务和AI任务两类，特点如下：
 * 1. 脚本任务：快、准，适用于规则固定的规范检查，可巡检覆盖面较窄
 * 2. AI任务：慢，适用于规则不固定的规范检查，可巡检覆盖面广
 */
import fse from 'fs-extra';
import chalk from 'chalk';
import ora from 'ora';
import createResult from './ai-helper/create-result/index.mjs';
import TaskRunner from './task-runner/index.mjs';
import cssVarDeclareTask from './task/css-var-declare.mjs';
import cssEntryFileTask from './task/css-entry-file.mjs';
import themeDesignOnline from './task/theme-design-online.mjs';
import cssVarSuggestTask from './task/css-var-suggest.mjs';
import testCoverageTask from './task/test-coverage.mjs';
import codeReviewTask from './task/code-review.mjs';

const args = process.argv.slice(2);
const arg = args[0];
const isRetry = arg === 'retry';

// 生成巡检结果报表
const generateReport = async (dataList) => {
  let results = dataList;
  const resPath = `${process.cwd()}/inspect`;
  if (isRetry) {
    results = fse.readJSONSync(`${resPath}.json`);
    if (!results?.length) {
      console.log(chalk.red('没有可用于生成报表的数据源，请重新执行巡检任务'));
      return;
    }
  }
  const spinner = ora(
    `✨ AI正在${isRetry ? '尝试重新' : ''}为您生成巡检报告...`,
  ).start();

  try {
    const resFilePath = `${resPath}.html`;
    await createResult({ result: results, resPath: resFilePath });
    console.log(
      chalk.green(`🚀🚀 巡检报告已生成，请前往 ${resFilePath} 查看结果。`),
    );
  } catch (error) {
    console.log(error);
    const resultFilePath = `${resPath}.json`;
    fse.outputJSONSync(resultFilePath, results, {
      spaces: 2,
    });
    console.log(
      chalk.red(
        `AI生成报表失败，降级为JSON报表，请前往 ${resultFilePath} 查看结果，或执行 pnpm inspect retry 尝试重新生成报表`,
      ),
    );
  } finally {
    spinner.stop();
  }
};

const main = async () => {
  if (isRetry) {
    generateReport();
    return;
  }
  const taskRunner = new TaskRunner();
  // 1. 脚本任务（快、准，适用于规则固定的规范检查，覆盖面较窄）
  // 2. AI任务（慢，适用于规则不固定的规范检查，覆盖面广）
  const tasks = [
    cssVarDeclareTask,
    cssEntryFileTask,
    themeDesignOnline,
    testCoverageTask,
    cssVarSuggestTask,
    codeReviewTask,
  ];
  tasks.forEach((task) => taskRunner.addTask(task));

  let results = await taskRunner.run();
  results = results.filter((item) => !item.pass);
  console.log(chalk.green(`🚀🚀 所有巡检任务已执行完成！`));

  // 生成巡检结果报表
  generateReport(results);
};

main();
