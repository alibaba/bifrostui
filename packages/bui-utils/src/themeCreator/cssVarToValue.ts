import { defaultLight } from '@bifrostui/styles/registry';
import { CssVarToValueOptions } from './index.types';

/**
 * 全局默认主题变量配置
 * 用户可以通过 setDefaultThemeVars 方法设置
 */
let globalDefaultThemeVars: Record<string, string> | undefined;

/**
 * 设置全局默认主题变量
 * 建议在小程序入口文件(app.ts)中调用，设置后所有组件都会使用该主题
 * 支持主题继承：如果设置的主题中某个变量不存在，会自动从 defaultLight 继承
 * @param themeVars 主题CSS变量对象
 * @example
 * import { setDefaultThemeVars } from '@bifrostui/utils';
 * import { pioneerLight } from '@bifrostui/styles/registry';
 * setDefaultThemeVars(pioneerLight.cssVars);
 */
export const setDefaultThemeVars = (
  themeVars: Record<string, string> | undefined,
): void => {
  globalDefaultThemeVars = themeVars;
};

/**
 * 获取当前全局默认主题变量
 * 返回合并后的主题变量（自定义主题 + defaultLight 基础主题）
 */
export const getDefaultThemeVars = (): Record<string, string> | undefined => {
  if (!globalDefaultThemeVars) {
    return defaultLight?.cssVars;
  }

  // 合并主题
  return {
    ...defaultLight?.cssVars,
    ...globalDefaultThemeVars,
  };
};

/**
 * css变量转值
 */
export const cssVarToValue = (
  options: CssVarToValueOptions,
): string | undefined => {
  const {
    cssVar,
    themeVars = getDefaultThemeVars(),
    _visitedKeys = new Set<string>(),
  } = options || {};
  if (!cssVar) return '';

  const variableKey = cssVar.replace(/^var\(/, '').replace(/\)$/, '');
  const variableValue = themeVars?.[variableKey];

  if (_visitedKeys.has(variableKey)) {
    // eslint-disable-next-line no-console
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
