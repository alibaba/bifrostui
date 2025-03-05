import { defaultLight } from '@bifrostui/styles/registry';
import { CssVarToValueOptions } from './index.types';

/**
 * css变量转值
 */
export const cssVarToValue = (
  options: CssVarToValueOptions,
): string | undefined => {
  const {
    cssVar,
    themeVars = defaultLight.cssVars,
    _visitedKeys = new Set<string>(),
  } = options || {};
  if (!cssVar) return '';

  const variableKey = cssVar.replace(/^var\(/, '').replace(/\)$/, '');
  const variableValue = themeVars[variableKey];

  if (_visitedKeys.has(variableKey)) {
    console.warn(`检测到CSS变量循环引用: ${variableKey}`);
    return variableValue;
  }

  const nextVisited = new Set(_visitedKeys).add(variableKey);
  if (variableValue && variableValue.startsWith('var(')) {
    return cssVarToValue({
      cssVar: variableValue,
      themeVars,
      _visitedKeys: nextVisited,
    });
  }

  return variableValue;
};
