const chalk = require('chalk');
const dayjs = require('dayjs');
const path = require('path');
const chokidar = require('chokidar');
const fse = require('fs-extra');
const shelljs = require('shelljs');

class MdWatcher {
  watcher;
  constructor() {
    this.watcher = null;

    const rootPath = path.resolve(process.cwd(), '../../packages/bui-core/src');
    const svgIconMdPath = path.resolve(
      process.cwd(),
      '../../packages/bui-icons/src',
    );
    const dirs = fse.readdirSync(rootPath);
    const mdPathList = [svgIconMdPath];
    dirs.forEach((dir) => {
      const componentPath = path.resolve(rootPath, dir);
      if (fse.lstatSync(componentPath).isDirectory()) {
        const files = fse.readdirSync(componentPath);
        files.forEach((file) => {
          // 原来的 '.md' 改为 'zh-CN.md'
          if (file.split('.').slice(1).join('.') === 'zh-CN.md') {
            mdPathList.push(path.resolve(componentPath, file));
          }
        });
      }
    });

    this.watcher = chokidar.watch(mdPathList, {
      persistent: true,
      awaitWriteFinish: true,
    });
  }
  watch() {
    this.watcher.on('change', (changePath) => {
      console.log(
        chalk.blue(`bui markdown file changed! change path: ${changePath}`),
      );
      const scriptPath = path.resolve(
        process.cwd(),
        '../../scripts/mini-program-site/generateMiniFiles.js',
      );
      shelljs.exec(`node ${scriptPath}`, (code, stdout, stderr) => {
        if (code === 0) {
          console.log(
            chalk.green(
              `✅  小程序代码生成成功！`,
              dayjs().format('YYYY-MM-DD hh:mm:ss'),
            ),
          );
        } else {
          console.log(chalk.red(`❌  小程序代码生成失败！`, stderr));
        }
      });
    });
  }
}

const mdWatcher = new MdWatcher();
mdWatcher.watch();
