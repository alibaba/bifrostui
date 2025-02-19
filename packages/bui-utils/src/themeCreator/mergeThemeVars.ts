import {
  defaultLight,
  defaultDark,
  dmLight,
  pioneerLight,
} from '@bifrostui/styles/registry';
import { MergeThemeVarsOptions, CssVarToValueOptions } from './index.types';

/**
 * 合并主题css变量
 */
export const mergeThemeVars = (options: MergeThemeVarsOptions) => {
  const { theme = 'default', mode = 'light' } = options || {};
  const cssVarMap = {
    defaultLight,
    defaultDark,
    dmLight,
    pioneerLight,
  };
  const upperCaseMode = mode.replace(/^./, (char) => char.toUpperCase());
  const currentThemeMode = `${theme}${upperCaseMode}`;

  if (!cssVarMap[currentThemeMode]) {
    return cssVarMap.defaultLight.cssVars;
  }
  if (currentThemeMode !== 'defaultLight') {
    return {
      ...cssVarMap.defaultLight.cssVars,
      ...cssVarMap[currentThemeMode].cssVars,
    };
  }

  return cssVarMap.defaultLight.cssVars;
};

/**
 * css变量转值
 */
export const cssVarToValue = (options: CssVarToValueOptions) => {
  const { cssVar, themeVars = defaultLight.cssVars } = options || {};
  if (!cssVar) {
    return '';
  }

  const variableKey = cssVar.replace(/^var\(/, '').replace(/\)$/, '');
  const variableValue = themeVars[variableKey];
  if (variableValue && variableValue.startsWith('var(')) {
    return cssVarToValue({ cssVar: variableValue, themeVars });
  }

  return variableValue;
};
