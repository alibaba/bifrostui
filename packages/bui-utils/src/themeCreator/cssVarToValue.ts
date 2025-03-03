import { defaultLight } from '@bifrostui/styles/registry';
import { CssVarToValueOptions } from './index.types';

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
