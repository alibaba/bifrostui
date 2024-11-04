const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { formatMarkdown } = require('./utils/index');
const { FILE_COMMENT } = require('./utils/constants');
const { generateAppConfig } = require('./generateAppConfig');
const { generateComponentIndex } = require('./generateComponentIndex');

const coreDir = path.resolve(__dirname, '../../packages/bui-core/src');
const iconsDir = path.resolve(__dirname, '../../packages/bui-icons/src');
const targetDir = path.resolve(__dirname, '../../websites/mini-program');
const subPackageDir = `${targetDir}/src/subpackages`;
const appConfigPath = `${targetDir}/src/app.config.ts`;
const routeConfigPath = `${targetDir}/src/route.config.ts`;
let subpackages = [],
  groupList = [];

const generateMiniPages = () => {
  try {
    subpackages = [];
    groupList = [];
    const dirs = fse.readdirSync(coreDir);

    dirs.forEach((dir) => {
      const componentDir = path.resolve(coreDir, dir);
      if (fse.lstatSync(componentDir).isDirectory()) {
        const files = fse.readdirSync(componentDir);
        files.forEach((file) => {
          // 原来的 '.md' 改为 'zh-CN.md'
          if (file.split('.').slice(1).join('.') === 'zh-CN.md') {
            handleMdFile(componentDir, file);
          }
        });
      }
    });

    // 处理bui-icons
    const iconMd = (fse.readdirSync(iconsDir) || []).find(
      (item) => path.extname(item) === '.md',
    );
    handleMdFile(iconsDir, iconMd);

    console.log(chalk.green(`✅ 生成小程序页面：[${targetDir}/src/pages/*]`));

    generateAppConfig(appConfigPath, subpackages);
    generateRouteConfig();

    console.log(
      chalk.green(`✅ 小程序代码生成完毕！请在 [${targetDir}] 目录下查看`),
    );
  } catch (error) {
    console.log(chalk.red(`❌ 小程序代码生成失败！ERROR：`, error));
  }
};

const handleMdFile = (componentDir, file) => {
  const mdPath = path.resolve(componentDir, file);
  const mdFile = formatMarkdown(mdPath);
  const demoComponentDir = `${subPackageDir}/${
    mdFile.theme.groupEnName
  }/${mdFile.theme?.enName.toLowerCase()}`;
  collectPages(mdFile.theme, { demoComponentDir });
  generatePagesFile(mdFile, demoComponentDir);
};

/**
 * 生成mini-program/pages/* 目录文件
 */
const generatePagesFile = ({ codeModules, theme }, componentDir) => {
  // if (theme.enName === 'Tabs') {
  //   debugger;
  // }

  codeModules.forEach((codeModule) => {
    if (!fse.pathExistsSync(componentDir)) {
      fse.mkdirSync(componentDir, { recursive: true });
    }
    const targetFilePath = `${componentDir}/${codeModule?.componentName}.tsx`;

    fse.writeFileSync(targetFilePath, codeModule.code);
  });

  const indexPath = `${componentDir}/index`;
  generateComponentIndex({ theme, codeModules }, indexPath);
};

/**
 * 生成mini-program/src/route.config.ts 文件
 * 用于pages/index/index展示各组件入口
 */
const generateRouteConfig = () => {
  try {
    fse.writeFileSync(
      routeConfigPath,
      `${FILE_COMMENT}export default ${JSON.stringify(groupList, null, 2)}`,
      'utf8',
    );

    console.log(
      chalk.green(
        `✅ 生成小程序路由配置文件：[${targetDir}/src/route.config.ts]`,
      ),
    );
  } catch (error) {
    console.log(
      chalk.red(
        `❌ 生成小程序路由配置文件（route.config.ts）失败！ERROR：`,
        error,
      ),
    );
  }
};

/**
 * 收集页面
 */
const collectPages = (theme, { demoComponentDir }) => {
  // if (theme.enName === 'Progress') {
  //   debugger;
  // }
  const routePath = `${demoComponentDir}/index`.split(
    `${theme.groupEnName}/`,
  )[1];
  const { groupName, groupEnName, ...componentInfo } = theme;
  const root = `subpackages/${theme.groupEnName}`;
  const componentItem = {
    ...componentInfo,
    path: `${root}/${routePath}`,
  };
  const item = subpackages.find((it) => it.root === root);
  const group = groupList.find((it) => it.groupEnName === theme.groupEnName);

  if (!item) {
    const subpackageItem = {
      root,
      pages: [routePath],
    };
    subpackages.push(subpackageItem);
  } else {
    item.pages.push(routePath);
  }

  if (!group) {
    const groupItem = {
      groupName,
      groupEnName,
      components: [componentItem],
    };
    groupList.push(groupItem);
  } else {
    group.components.push(componentItem);
  }
};

generateMiniPages();
