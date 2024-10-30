/**
 * 响应式屏幕断点配置
 */
export interface ResponsiveProps {
  /**
   * 超小屏幕 (小于 576px，实际为了处理临界值，断点值为 575.98px)
   */
  xsToken?: Record<string, string>;
  /**
   * 小屏幕 (≥ 576px)
   */
  smToken?: Record<string, string>;
  /**
   * 中等屏幕 (≥ 768px)
   */
  mdToken?: Record<string, string>;
  /**
   * 大屏幕 (≥ 992px)
   */
  lgToken?: Record<string, string>;
  /**
   * 超大屏幕 (≥ 1200px)
   */
  xlToken?: Record<string, string>;
}

export interface ThemeProps {
  /**
   * 语言
   * TODO 换成枚举
   */
  locale?: string;
  /**
   * 响应式屏幕断点配置
   */
  responsive?: ResponsiveProps;
  /**
   * 默认高亮主题Token
   */
  lightToken?: Record<string, string>;
  /**
   * 默认暗黑主题Token
   */
  darkToken?: Record<string, string>;
  /**
   * 大麦高亮主题Token
   */
  dmLightToken?: Record<string, string>;
  /**
   * 大麦暗黑主题Token
   */
  dmDarkToken?: Record<string, string>;
  /**
   * 组件全局Token
   */
  token?: Record<string, string>;
}
