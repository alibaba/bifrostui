import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import fse from 'fs-extra';
import prettier from 'prettier';
import { defaultLight } from '../registry/default-light.mjs';
import { defaultDark } from '../registry/default-dark.mjs';
import { dmLight } from '../registry/dm-light.mjs';
import { pioneerLight } from '../registry/pioneer-light.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const themes = [defaultLight, defaultDark, dmLight, pioneerLight];
const comments =
  '/** 此文件由脚本自动生成，请勿直接修改，若有变更请维护bui-styles/registry/*.mjs，再执行`pnpm theme:js2less`更新主题 */\n';

const convertToLess = (styles) => {
  let result = '';
  const cssVarKeys = Object.keys(styles);

  cssVarKeys.forEach((key, index) => {
    const value = styles[key];
    if (value.includes('PX')) {
      result += '/* prettier-ignore */\n  ';
    }
    result += `${key}: ${value};\n${index === cssVarKeys.length - 1 ? '' : '  '}`;
  });

  return result;
};

const generateTheme = async () => {
  let entryContent = '';
  for (const theme of themes) {
    const { mixinName, cssVars } = theme;
    const filePath = path.join(__dirname, `../themes/${mixinName}.less`);
    const rawContent = `${comments}.${mixinName}() {\n  ${convertToLess(cssVars)}}\n`;
    const formatted = await prettier.format(rawContent, {
      filepath: filePath,
      singleQuote: true,
    });
    entryContent += `@import "./${mixinName}.less";\n`;
    fse.outputFileSync(filePath, formatted, 'utf8');
  }
};

generateTheme();
