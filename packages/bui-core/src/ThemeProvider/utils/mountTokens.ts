import React from 'react';
import { isMini } from '@bifrostui/utils';
import { breakpoints as defaultBreakpoints, rootSelector } from './constants';
import {
  ThemeProps,
  UpdateTokensOptions,
  MountResponsiveTokenOptions,
  MountComponentsTokenOptions,
  BuiltInThemesTokenOptions,
} from '../ThemeProvider.types';

/**
 * 更新 Design Tokens
 */
const updateTokens = (options: UpdateTokensOptions) => {
  const { isRoot, rootString, container, containerId } = options || {};
  if (isMini) return;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(rootString));

  let containerNode;

  if (isRoot) {
    // 挂载到根节点
    containerNode = document.head;
  } else if (containerId && container && React.isValidElement(container)) {
    // 挂载到组件节点
    containerNode = document.querySelector(`.${containerId}`);
  }

  if (containerNode) {
    containerNode.appendChild(style);
  }
};

/**
 * 挂载响应式自定义Tokens
 * 响应式相关的Tokens挂载在全局根节点上，暗黑模式或大麦高亮主题下可自定义额外Toekns复写响应式Tokens
 */
export const mountResponsiveTokens = (options: MountResponsiveTokenOptions) => {
  const { responsive, breakpoints = defaultBreakpoints } = options || {};
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
  updateTokens({ isRoot: true, rootString });
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

      updateTokens({ isRoot: true, rootString });
    }
  });
};

/**
 * 挂载组件的自定义Tokens
 * **!SECTION 注意：只有自定义Tokens才会挂载到指定容器中
 */
const mountComponentsTokens = (options: MountComponentsTokenOptions) => {
  const { isRoot = false, token, container, containerId } = options || {};
  if (!token) return;

  // 嵌套的ThemeProvider将css变量挂载到指定容器
  const modeSelector = isRoot ? rootSelector.defaultLight : [`.${containerId}`];
  let rootString = `${modeSelector.join(',')} { `;
  const cssVariablesString = Object.entries(token).reduce(
    (acc, [key, value]) => {
      return `${acc} ${key}: ${value};`;
    },
    '',
  );
  rootString = `${rootString} ${cssVariablesString} }`;

  updateTokens({ isRoot, rootString, container, containerId });
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
export const mountTokens = (tokenOptions?: ThemeProps) => {
  if (isMini) return;
  // 复写内置主题Tokens
  overrideBuiltInThemes(tokenOptions);
  // 挂载响应式自定义Tokens
  mountResponsiveTokens(tokenOptions);
  // 挂载组件的自定义Tokens
  mountComponentsTokens(tokenOptions);
};
