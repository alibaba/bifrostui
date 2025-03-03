/**
 * 挂载自定义主题选项
 */
export interface MountThemeVarsOptions {
  // 自定义主题内容
  theme: string;
  // 自定义主题挂载容器
  container?: HTMLElement;
}

export interface ThemeCreatorOptions {
  /**
   * 主题所挂在的根选择器
   * @default `:root, [data-color-mode='light'][data-theme]`
   */
  rootSelector?: string;
  /**
   * 主题全局变量
   */
  cssVars: Record<string, string>;
}

/**
 * css变量转值
 */
export interface CssVarToValueOptions {
  /**
   * 当前主题
   */
  cssVar: string;
  /**
   * 当前主题模式
   * @default defaultLight
   */
  themeVars?: Record<string, string>;
}
