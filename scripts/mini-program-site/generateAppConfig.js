const fse = require('fs-extra');
const chalk = require('chalk');
const { FILE_COMMENT } = require('./utils/constants');

/**
 * 生成mini-program/src/app.config.ts 文件
 */
const generateAppConfig = (appConfigPath, subpackages) => {
  try {
    fse.writeFileSync(
      appConfigPath,
      `${FILE_COMMENT}const subPackages = ${JSON.stringify(
        subpackages,
        null,
        2,
      )};\n
export default defineAppConfig ({
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'BUI-React',
    navigationBarTextStyle: 'black'
  }
})
  `,
      'utf8',
    );

    console.log(
      chalk.green(`✅ 生成小程序app.config.ts文件：[${appConfigPath}]`),
    );
  } catch (error) {
    console.log(
      chalk.red(`❌ 生成小程序app.config.ts文件失败！ERROR：`, error),
    );
  }
};

exports.generateAppConfig = generateAppConfig;
