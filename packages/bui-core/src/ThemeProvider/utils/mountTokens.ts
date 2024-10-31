import { breakpoints, rootSelector } from './constants';
import {
  ThemeProps,
  ResponsiveTokenOptions,
  componentsTokenOptions,
  BuiltInThemesTokenOptions,
} from '../ThemeProvider.types';

/**
 * 更新 Design Tokens
 */
export const updateTokens = (rootString: string) => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(rootString));

  document.head.appendChild(style);
};

/**
 * 挂载响应式自定义Tokens
 * 响应式相关的Tokens挂载在全局根节点上，暗黑模式或大麦高亮主题下可自定义额外Toekns复写响应式Tokens
 */
export const mountResponsiveTokens = (responsive: ResponsiveTokenOptions) => {
  if (!responsive) return;

  const modeSelector = rootSelector.defaultLight;
  let rootString = `${modeSelector.join(',')} { `;

  Object.entries(responsive).forEach((config) => {
    const [size, tokenConfig] = config || [];
    if (!size || !tokenConfig) return;

    const cssVariablesString = Object.entries(tokenConfig || {}).reduce(
      (acc, [key, value]) => {
        return `${acc} ${key}: ${value};`;
      },
      '',
    );

    const mediaQuery = size === 'xs' ? 'max-width' : 'min-width';
    rootString += `@media (${mediaQuery}: ${breakpoints[size]}) { ${cssVariablesString} }`;
  });
  rootString = `${rootString} }`;
  updateTokens(rootString);
};

/**
 * 复写内置主题Tokens，复写的自定义token应为对应主题css变量的子集
 * BUI内置主题包括以下4种：
 * 1. 默认高亮模式（defaultLightToken 复写 default-light.less）
 * 2. 默认暗黑模式（defaultDarkToken 复写 default-dark.less）
 * 3. 大麦高亮模式（dmLightToken 复写 dm-light.less）
 * 4. 大麦暗黑模式（dmDarkToken 复写 dm-dark.less）
 */
export const overrideBuiltInThemes = (
  tokenOptions: BuiltInThemesTokenOptions,
) => {
  if (!tokenOptions) return;

  Object.keys(rootSelector).forEach((selectorKey) => {
    const modeSelector = rootSelector[selectorKey];
    const token = tokenOptions[`${selectorKey}Token`];

    if (token) {
      let rootString = `${modeSelector.join(',')} { `;
      const cssVariablesString = Object.entries(token).reduce(
        (acc, [key, value]) => {
          return `${acc} ${key}: ${value};`;
        },
        '',
      );
      rootString = `${rootString} ${cssVariablesString} }`;

      updateTokens(rootString);
    }
  });
};

/**
 * 挂载组件的自定义Tokens
 */
export const mountComponentsTokens = (token: componentsTokenOptions) => {
  if (!token) return;

  const modeSelector = rootSelector.defaultLight;
  let rootString = `${modeSelector.join(',')} { `;
  const cssVariablesString = Object.entries(token).reduce(
    (acc, [key, value]) => {
      return `${acc} ${key}: ${value};`;
    },
    '',
  );
  rootString = `${rootString} ${cssVariablesString} }`;

  updateTokens(rootString);
};

/**
 * 挂载Design Tokens
 * Tokens的优先级：
 * 1. 通常情况：组件的Tokens > 响应式Tokens > BUI内置Tokens（挂载顺序控制）
 * 2. 暗黑模式：组件的Tokens > BUI内置的两种暗黑模式Tokens > 响应式Tokens (选择器权重控制)
 *
 * - 挂载顺序决定BUI内置Tokens（暗黑模式除外）和响应式Tokens的优先级
 * - 选择器权重决定暗黑模式的Tokens和响应式Tokens的优先级
 * - 命名规则决定组件的Tokens（如：--bui-button-xxx）
 */
export default function mountTokens(tokenOptions?: ThemeProps) {
  const { token, responsive } = tokenOptions || {};
  // 复写内置主题Tokens
  overrideBuiltInThemes(tokenOptions);
  // 挂载响应式自定义Tokens
  mountResponsiveTokens(responsive);
  // 挂载组件的自定义Tokens
  mountComponentsTokens(token);
}
