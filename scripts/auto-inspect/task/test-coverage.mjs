import ora from 'ora';
import path from 'node:path';
import chalk from 'chalk';
import { execSync } from 'node:child_process';
import Task from '../task-runner/task.mjs';
import { ignoreTestCoverage } from '../ignore.mjs';

// 各覆盖率最低标准
const rules = {
  // 状态覆盖率
  // Stmts: 90,
  // 分支覆盖率
  // Branch: 80,
  // 函数覆盖率
  // Funcs: 75,
  // 行覆盖率
  Lines: 90,
};

const updateFilePath = (lines) => {
  let currentDirectory = '';
  return lines.map((line) => {
    const columns = line.split('|').filter((item) => item.trim());
    const path = columns[0].trim();
    if (path.includes('/') && !path.includes('.')) {
      currentDirectory = path;
    } else {
      const fullPath = `${currentDirectory}/${path}`;
      line = line.replace(
        /(\S+?)(\s+\|)/,
        (_, _filename, suffix) => `${fullPath}${suffix}`,
      );
    }
    return line;
  });
};

const formatCoverageData = (input) => {
  try {
    // 去除无用的头部和尾部信息，只保留表格部分
    const lines = input
      .split('\n')
      .filter((line) => line.trim() !== '')
      .filter((line) => !line.includes('---'));
    const headerIndex = lines.findIndex((line) => line.includes('File'));

    if (headerIndex === -1) {
      throw new Error('未找到有效的表格内容');
    }

    // 提取表格内容
    const tempLines = lines.slice(headerIndex + 1);
    // 不包含All files
    const noAllTableLines = tempLines.slice(1);
    const tableLines = updateFilePath(noAllTableLines);
    // 将All files行补充回来
    tableLines.unshift(tempLines[0]);

    // 解析每一行数据
    const result = tableLines.map((line) => {
      // 使用正则表达式匹配列数据
      const regex =
        /^\s*(.*?)\s+\|\s+([\d.]+)\s+\|\s+([\d.]+)\s+\|\s+([\d.]+)\s+\|\s+([\d.]+)\s+\|\s*(.*)$/;
      const match = line.match(regex);

      if (!match) {
        throw new Error(`无法解析行: ${line}`);
      }

      return {
        File: match[1].trim(),
        Stmts: parseFloat(match[2]),
        Branch: parseFloat(match[3]),
        Funcs: parseFloat(match[4]),
        Lines: parseFloat(match[5]),
        Uncovered_Line: match[6].trim() || null,
      };
    });

    return result;
  } catch (error) {
    console.error('解析失败:', error.message);
    return null;
  }
};

const task = () => {
  const spinner = ora(`正在审查单元测试覆盖率...`).start();
  try {
    const output = execSync('pnpm test', {
      cwd: path.dirname(
        path.resolve(import.meta.dirname, '../../../package.json'),
      ),
      stdio: 'pipe',
    });
    const testRes = output.toString('utf-8');
    const coverageData = formatCoverageData(testRes);
    const result = coverageData.filter((item) => {
      const {
        Stmts: minStmts,
        Branch: minBranch,
        Funcs: minFuncs,
        Lines: minLines,
      } = rules;
      const { File, Stmts, Branch, Funcs, Lines } = item;
      let message = '';
      if (!ignoreTestCoverage.some((filePath) => File.includes(filePath))) {
        if (minStmts && Stmts < minStmts) {
          message += `状态覆盖率不足${minStmts}%，`;
        }
        if (minBranch && Branch < minBranch) {
          message += `分支覆盖率不足${minBranch}%，`;
        }
        if (minFuncs && Funcs < minFuncs) {
          message += `函数覆盖率不足${minFuncs}%，`;
        }
        if (minLines && Lines < minLines) {
          message += `行覆盖率不足${minLines}%。`;
        }
      }
      item.message = message;

      return !!item.message;
    });
    return {
      notReachCoverages: result,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  } finally {
    spinner.stop();
  }
};

export default new Task({
  name: 'task-test-coverage',
  desc: '单测行覆盖率是否达90%',
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
          `🚀 ${chalk.green('[单测行覆盖率是否达90%任务]--执行成功，未发现异常！')}`,
        );
      } else {
        console.log(
          `⚠️ ${chalk.yellow('[单测行覆盖率是否达90%任务]--存在文件单元测试不达标，请根据报表信息处理！')}`,
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
