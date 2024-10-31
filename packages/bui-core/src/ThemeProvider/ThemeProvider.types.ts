import { BaseLang } from '../locales/base';
/**
 * 响应式屏幕断点配置
 */
export interface ResponsiveTokenOptions {
  /**
   * 超小屏幕 (小于 576px，实际为了处理临界值，断点值为 575.98px)
   */
  xs?: Record<string, string>;
  /**
   * 小屏幕 (≥ 576px)
   */
  sm?: Record<string, string>;
  /**
   * 中等屏幕 (≥ 768px)
   */
  md?: Record<string, string>;
  /**
   * 大屏幕 (≥ 992px)
   */
  lg?: Record<string, string>;
  /**
   * 超大屏幕 (≥ 1200px)
   */
  xl?: Record<string, string>;
}

export interface ThemeProps {
  /**
   * 语言
   */
  locale?: BaseLang;
  /**
   * 响应式屏幕断点配置
   */
  responsive?: ResponsiveTokenOptions;
  /**
   * 默认高亮主题Token
   */
  defaultLightToken?: Record<string, string>;
  /**
   * 默认暗黑主题Token
   */
  defaultDarkToken?: Record<string, string>;
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

/**
 * 内置主题Tokens
 */
export type BuiltInThemesTokenOptions = Pick<
  ThemeProps,
  'defaultLightToken' | 'defaultDarkToken' | 'dmLightToken' | 'dmDarkToken'
>;

/**
 * 组件自定义Tokens
 */
export type componentsTokenOptions = Pick<ThemeProps, 'token'>;
