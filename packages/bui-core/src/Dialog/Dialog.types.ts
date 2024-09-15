import { ReactNode } from 'react';
import { ModalProps } from '../Modal/Modal.types';

export type Action = boolean | string | number;
export type Dispatch = (action: Action, val?: string) => void;
/**
 * 对话框类型
 */
export type DialogType = 'confirm' | 'prompt';
export type Render = ReactNode | ((dispatch: Dispatch) => ReactNode);

export interface DialogProps extends ModalProps {
  /**
   * 对话框类型
   * @default confirm
   */
  type?: DialogType;
  /**
   * 自定义文本区域内容
   */
  custom?: Render;
  /**
   * 自定义标题
   */
  header?: Render;
  /**
   * 自定义内容
   */
  desc?: Render;
  /**
   * 自定义按钮区域
   */
  footer?: Render;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 输入框占位文本
   */
  placeholder?: string;
  /**
   * 执行操作
   */
  dispatch?: Dispatch;
  /**
   * 确认文本内容
   */
  confirmText?: string;
  /**
   * 取消文本内容
   */
  cancelText?: string;
  /**
   * 确认回调
   */
  onConfirm?: (val?: string) => void | Promise<void | string>;
  /**
   * 取消回调
   */
  onCancel?: () => void | Promise<void>;
}

/**
 * 函数式调用配置参数
 */
export type DialogOptions = Omit<DialogProps, 'type'> | string;

/**
 * prompt函数式调用配置参数
 */
export type PromptOptions = DialogOptions & {
  placeholder?: string;
  type?: string;
};

/**
 * confirm函数式调用配置参数
 */
export type ConfirmOptions = DialogOptions;
/**
 * Dialog函数式调用返回值类型
 */
export type DialogPromise = Promise<boolean | string>;
export type Options = PromptOptions | ConfirmOptions;

/**
 * Dialog Instance
 */
export interface DialogInstance {
  (options: Options): DialogPromise;
  /**
   * 警告提示
   */
  confirm?: (options: ConfirmOptions) => DialogPromise;
  /**
   * 加载提示
   */
  prompt?: (options: PromptOptions, val?: string) => DialogPromise;
}
