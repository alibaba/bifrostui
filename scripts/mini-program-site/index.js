const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

const args = process.argv.slice(2);
const type = args[1];
const events = ['start', 'build'];
const eventType = process.env.npm_lifecycle_event.split(':')?.[0];

if (!events.includes(eventType) || !eventType) {
  console.log(chalk.red('请确认当前命令是否正确！'));
  return;
}

switch (eventType) {
  case 'start':
    execSync('yarn generate:mini:files', {
      cwd: process.cwd(),
      stdio: 'inherit',
    });

    execSync(`yarn start:${type}`, {
      cwd: path.dirname(
        path.resolve(__dirname, '../../websites/mini-program/package.json'),
      ),
      stdio: 'inherit',
    });
    break;
  case 'build':
    execSync(`yarn build:${type}`, {
      cwd: path.dirname(
        path.resolve(__dirname, '../../websites/mini-program/package.json'),
      ),
      stdio: 'inherit',
    });
    break;
  default:
    console.log(chalk.red('无法执行当前命令！'));
    break;
}
