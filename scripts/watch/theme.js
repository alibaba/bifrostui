const chalk = require('chalk');
const path = require('path');
const chokidar = require('chokidar');
const fse = require('fs-extra');
const shelljs = require('shelljs');

class FileWatcher {
  watcher;
  constructor() {
    this.watcher = null;

    const rootPath = path.resolve(
      __dirname,
      '../../packages/bui-styles/registry',
    );

    const dirs = fse.readdirSync(rootPath);
    const pathList = [];
    dirs.forEach((dir) => {
      const absPath = path.resolve(rootPath, dir);
      if (fse.lstatSync(absPath).isDirectory()) {
        const files = fse.readdirSync(absPath);
        files.forEach((file) => {
          pathList.push(path.resolve(absPath, file));
        });
      } else {
        pathList.push(path.resolve(absPath));
      }
    });

    this.watcher = chokidar.watch(pathList, {
      persistent: true,
      awaitWriteFinish: true,
    });
  }
  watch() {
    this.watcher.on('change', (changePath) => {
      console.log(
        chalk.blue(`bui theme file changed! change path: ${changePath}`),
      );
      const scriptPath = path.resolve(
        __dirname,
        '../../packages/bui-styles/scripts/create-theme.mjs',
      );
      shelljs.exec(`node ${scriptPath}`, (code, stdout, stderr) => {
        if (code === 0) {
          console.log(chalk.green(`🚀 主题样式文件更新成功...`));
        } else {
          console.log(chalk.red(`❌ 主题样式文件更新失败！！`, stderr));
        }
      });
    });
  }
}

const fileWatcher = new FileWatcher();
fileWatcher.watch();
