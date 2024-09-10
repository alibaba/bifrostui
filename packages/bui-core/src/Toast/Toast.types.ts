import React from 'react';
import { FadeProps } from '../Fade/Fade.types';

/**
 * 提示类型
 */
export type ToastType = 'loading' | 'success' | 'fail' | 'warning';

export interface ToastProps extends FadeProps {
  /**
   * 是否展示
   */
  open?: boolean;
  /**
   * 提示类型
   */
  type?: ToastType;
  /**
   * toast内容，支持使用`\n`换行
   */
  message?: string;
  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;
  /**
   * 展示位置
   * @default center
   */
  position?: 'top' | 'center' | 'bottom';
  /**
   * 是否允许同时存在多个Toast
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * 展示Toast时，页面内容是否可以点击
   * @default false
   */
  disableClick?: boolean;
  /**
   * 关闭时的回调函数
   */
  onClose?: () => void;
}

/**
 * 函数式调用配置参数
 */
export type ToastOptions = Omit<ToastProps, 'type' | 'open'> | string;

/**
 * 函数式调用返回值类型
 */
export type ToastReturnType = {
  /**
   * 关闭当前提示
   */
  close: () => void;
};

/**
 * Toast Instance
 */
export interface ToastInstance {
  /**
   * 警告提示
   */
  warning: (options: ToastOptions) => ToastReturnType;
  /**
   * 加载提示
   */
  loading: (options: ToastOptions) => ToastReturnType;
  /**
   * 成功提示
   */
  success: (options: ToastOptions) => ToastReturnType;
  /**
   * 失败提示
   */
  fail: (options: ToastOptions) => ToastReturnType;
  /**
   * 清空提示
   */
  clear: () => void;
}
