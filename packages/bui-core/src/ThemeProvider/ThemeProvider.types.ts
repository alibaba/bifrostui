import { ReactNode } from 'react';
import { OverrideProps } from '@bifrostui/types';
import { BaseLang } from '../locales/base';

export interface Breakpoints {
  /**
   * 超小屏幕 (小于 576px，实际为了处理临界值，断点值为 575.98px)
   * @default '575.98px'
   */
  xs?: string;
  /**
   * 小屏幕
   * @default '576px'
   */
  sm?: string;
  /**
   * 中等屏幕
   * @default '768px'
   */
  md?: string;
  /**
   * 大屏幕
   * @default '992px'
   */
  lg?: string;
  /**
   * 超大屏幕
   * @default '1200px'
   */
  xl?: string;
}

/**
 * 响应式屏幕断点配置
 */
interface ResponsiveTokenOptions {
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

interface ThemeProps {
  /**
   * 当前ThemeProvider是否为最顶层
   * 若当前应用会出现嵌套的ThemeProvider，则需要将最外层的ThemeProvider isRoot属性设置为true
   * @default false
   */
  isRoot?: boolean;
  /**
   * 挂载的容器
   * @default root
   */
  container?: ReactNode;
  /**
   * 挂载容器的id
   */
  containerId?: string;
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
   * 先锋版高亮主题Token
   */
  pioneerLightToken?: Record<string, string>;
  /**
   * 组件Token
   */
  token?: Record<string, string>;
}

/**
 * 复写内置主题Tokens
 */
type BuiltInThemesTokenOptions = Pick<
  ThemeProps,
  | 'defaultLightToken'
  | 'defaultDarkToken'
  | 'dmLightToken'
  | 'pioneerLightToken'
>;

/**
 * 挂载组件自定义Tokens参数
 */
export type MountComponentsTokenOptions = Pick<
  ThemeProps,
  'isRoot' | 'container' | 'containerId' | 'token'
>;

export type MountResponsiveTokenOptions = Pick<ThemeProps, 'responsive'> & {
  // 屏幕断点配置
  breakpoints?: Breakpoints;
};

/**
 * 更新Tokens
 */
export type UpdateTokensOptions = Pick<
  ThemeProps,
  'isRoot' | 'containerId' | 'container'
> & {
  rootString: string;
};

export type ThemeProviderProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & ThemeProps;
    defaultComponent: D;
  },
  D
>;

export {
  BaseLang,
  ResponsiveTokenOptions,
  ThemeProps,
  BuiltInThemesTokenOptions,
};
