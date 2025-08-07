import {
  defaultLight,
  dmLight,
  pioneerLight,
} from '@bifrostui/styles/registry';

// 选用主题模式
export enum THEME_MODE {
  // 使用内置主题
  BUILTIN = 'builtin',
  // 自定义主题
  CUSTOM = 'custom',
}

// css 变量类型
export enum VARS_TYPE {
  // 通用变量
  COMMON = 'common',
  // 组件变量
  COMPONENT = 'component',
}

/**
 * 内置主题
 */
export enum BUILTIN_THEME {
  // 默认主题
  DEFAULT = 'default',
  // 大麦主题
  DM = 'dm',
  // 活力橙主题
  PIONEER = 'pioneer',
}

/**
 * 自定义主题存储 key
 */
export const CUSTOM_THEME_STORAGE_KEY = '__BUI_CUSTOM_THEME_RESULT__';

/**
 * 挂载主题变量的根选择器
 */
export const THEME_ROOT_SELECTOR =
  ":root, [data-color-mode='light'][data-theme]";

export const builtinThemes = [
  {
    text: '默认',
    value: BUILTIN_THEME.DEFAULT,
    themeData: defaultLight,
  },
  { text: '大麦', value: BUILTIN_THEME.DM, themeData: dmLight },
  {
    text: '活力橙',
    value: BUILTIN_THEME.PIONEER,
    themeData: pioneerLight,
  },
];

export const tabList = [
  { title: '选中的Tab', index: 'tab0' },
  { title: 'Tab 1', index: 'tab1' },
  { title: 'Tab 2', index: 'tab2' },
];
