/**
 * 组件配置类型
 */
export interface ComponentItemOption {
  // 组件状态
  state?: string[];
  // 组件内部dom选择器
  selector?: string;
  // 组件css变量
  cssVars?: Record<string, string>;
  // 组件css属性
  cssProps?: Record<string, string>;
}

/**
 * 挂载自定义主题选项
 */
export interface MountThemeOptions {
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
