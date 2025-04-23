import path from 'path';
import fse from 'fs-extra';
import { rootSelectorContentRegex, convertToJson } from '../utils/index.mjs';

const igonredDirs = ['locales'];
const componentsDir = path.join(
  import.meta.dirname,
  '../../packages/bui-core/src',
);
const outputFilePath = path.join(
  import.meta.dirname,
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
