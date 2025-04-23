/**
 * 不需要声明css变量的组件
 */
export const ignoreCssVarDeclare = [
  'Collapse',
  'Drawer',
  'Modal',
  'ScrollView',
  'Stack',
];

/**
 * 不需要css入口文件的组件
 */
export const ignoreCssEntryFile = [
  'Fade',
  'Portal',
  'Slide',
  'ThemeProvider',
  'Transition',
];

/**
 * 不需要在线主题定制的组件
 */
export const ignoreThemeDesignOnline = [
  ...ignoreCssVarDeclare,
  ...ignoreCssEntryFile,
];

/**
 * 单测覆盖率不需要告警的组件或目录
 */
export const ignoreTestCoverage = ['TextArea'];
