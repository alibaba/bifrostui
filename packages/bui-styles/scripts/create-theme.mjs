import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fse from 'fs-extra';
import { defaultLight } from '../registry/default-light.mjs';
import { defaultDark } from '../registry/default-dark.mjs';
import { dmLight } from '../registry/dm-light.mjs';
import { pioneerLight } from '../registry/pioneer-light.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const themes = [defaultLight, defaultDark, dmLight, pioneerLight];
const commemt =
  '/** 此文件由脚本自动生成，请勿直接修改，若有变更请维护bui-styles/registry/*.mjs，再执行`pnpm theme:js2less`更新主题 */\n';

const convertToLess = (styles) => {
  let result = '';
  const cssVarKeys = Object.keys(styles);

  cssVarKeys.forEach((key, index) => {
    const value = styles[key];
    if (value.includes('PX')) {
      result += '/* prettier-ignore */\n\t';
    }
    result += `${key}: ${value};\n${index === cssVarKeys.length - 1 ? '' : '\t'}`;
  });

  return result;
};

const generateTheme = () => {
  let entryContent = '';
  themes.forEach((theme) => {
    const { mixinName, cssVars } = theme;
    const filePath = path.join(__dirname, `../themes/${mixinName}.less`);
    const fileContent = `${commemt}.${mixinName}() {\n\t${convertToLess(cssVars)}}`;
    entryContent += `@import "./${mixinName}.less";\n`;
    fse.outputFileSync(filePath, fileContent, 'utf8');
  });

  const indexPath = path.join(__dirname, '../themes/index.less');
  // 添加 pioneer-light-components.less 特殊逻辑
  entryContent += "@import './pioneer-light-components.less';";
  fse.outputFileSync(indexPath, `${commemt}${entryContent}`, 'utf8');
};

generateTheme();
