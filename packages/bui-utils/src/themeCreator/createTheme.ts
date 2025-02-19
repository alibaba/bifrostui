import { MountThemeOptions, ThemeCreatorOptions } from './index.types';

const convertToCss = (styles) => {
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

/**
 * 挂载自定义主题
 */
const mountTheme = (options: MountThemeOptions) => {
  const { theme, container } = options || {};
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(theme));
  if (!container) {
    document.head.appendChild(style);
    return;
  }
  container.appendChild(style);
};

/**
 * 创建主题
 */
const createTheme = (options: ThemeCreatorOptions) => {
  const {
    rootSelector = ":root, [data-color-mode='light'][data-theme]",
    cssVars = {},
  } = options || {};
  const rootContent = `${rootSelector} {\n\t${convertToCss(cssVars)} }`;

  return rootContent;
};

export { createTheme, mountTheme };
