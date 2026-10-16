import { defaultLight } from '@bifrostui/styles/registry';
import { VARS_TYPE, CUSTOM_THEME_STORAGE_KEY } from './constants';

export const setStorage = (options: {
  name: string;
  varsType: string;
  value: Record<string, string>;
}) => {
  const { name, varsType, value = {} } = options || {};
  const result: any = getStorage() || {};
  if (varsType === VARS_TYPE.COMMON) {
    result[name] = {
      ...defaultLight.cssVars,
      ...value,
    };
  } else {
    result[name] = value;
  }
  localStorage.setItem(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(result));
};

export const getStorage = (name?: string) => {
  const result = JSON.parse(
    localStorage.getItem(CUSTOM_THEME_STORAGE_KEY) || 'null',
  );
  return name ? result?.[name] : result;
};

export const clearStorage = () => {
  localStorage.removeItem(CUSTOM_THEME_STORAGE_KEY);
};

/**
 * ActionSheet -> action-sheet
 */
export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])/g, '$1')
    .toLowerCase();
};
