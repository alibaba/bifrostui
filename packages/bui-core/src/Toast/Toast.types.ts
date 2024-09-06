import React from 'react';
import { ModalProps } from '../Modal/Modal.types';
import { FadeProps } from '../Fade/Fade.types';

/**
 * 提示类型
 */
export type ToastType = 'loading' | 'success' | 'fail' | 'warning';

export interface ToastProps extends ModalProps {
  /**
   * 提示类型
   */
  type?: ToastType;
  /**
   * toast内容
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
   * 是否允许存在多个Toast
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * Fade组件的Props
   */
  FadeProps?: Partial<FadeProps>;
  /**
   * 是否在点击遮罩层后关闭
   * @default false
   */
  closeOnClickBackdrop?: boolean;
  /**
   * 关闭时的回调函数
   */
  onClose?: ModalProps['onClose'];
}

/**
 * 函数式调用配置参数
 */
export type ToastOptions = Omit<ToastProps, 'type'> | string;

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
