const fse = require('fs-extra');
const path = require('path');

const igonredDirs = ['locales'];
// 查找@{root-selector} 的内容
const rootSelectorContentRegex = /@{root-selector}\s*{([^}]+)}/;
const componentsDir = path.join(__dirname, '../../packages/bui-core/src');
const outputFilePath = path.join(
  __dirname,
  '../../docs/constants/theme-vars.json',
);

const getComponentsFiles = (directory) => {
  const result = {};
  fse.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fse.statSync(filePath);
    if (stat && stat.isDirectory() && !igonredDirs.includes(file)) {
      result[file] = {
        path: filePath,
      };
    }
  });
  return result;
};

const convertToJson = (str) => {
  const cleanedStr = str
    .replace(/\/\*.*?\*\//g, '') // 去除 /* ... */
    .replace(/\/\/.*?(?=\n|$)/g, '') // 去除 // ...
    .replace(/[\r\n]+/g, '') // 去除换行
    .trim(); // 去除首尾空格

  const regex = /(--[\w-]+):\s*([^;]+);/g;
  const results = {};
  let match;

  while ((match = regex.exec(cleanedStr)) !== null) {
    results[match[1]] = match[2].trim();
  }

  return results;
};

const collectThemeVars = () => {
  const components = getComponentsFiles(componentsDir);
  Object.keys(components).forEach((name) => {
    const componentData = components[name];
    const componentPath = componentData.path;
    delete componentData.path;
    fse.readdirSync(componentPath).forEach((file) => {
      if (file.endsWith('.less')) {
        const filePath = path.join(componentPath, file);
        const lessContent = fse.readFileSync(filePath, 'utf-8');

        const match = rootSelectorContentRegex.exec(lessContent);
        if (match) {
          const rootContent = match[1].trim();
          const cssVars = convertToJson(rootContent);
          if (!componentData.cssVars) {
            componentData.cssVars = cssVars;
          } else {
            componentData.cssVars = {
              ...componentData.cssVars,
              ...cssVars,
            };
          }
        }
      }
    });
  });

  fse.outputFileSync(
    outputFilePath,
    JSON.stringify(components, null, 2),
    'utf8',
  );
};

collectThemeVars();
