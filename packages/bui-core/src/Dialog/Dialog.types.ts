import React, { ReactNode } from 'react';
import { ModalProps } from '../Modal/Modal.types';
import { InputProps } from '../Input/Input.types';
import { ThemeProps } from '../ThemeProvider/ThemeProvider.types';

/**
 * 对话框类型
 */
export type DialogType = 'confirm' | 'prompt';
export type Dispatch = (action: boolean, val?: string) => void;

export type DialogRef = {
  theme?: ThemeProps;
};
export interface DialogProps extends ModalProps {
  /**
   * 对话框类型
   * @default confirm
   */
  type?: DialogType;
  /**
   * 自定义标题
   */
  header?: ReactNode;
  /**
   * 自定义内容
   */
  message?: ReactNode;
  /**
   * 输入框占位文本
   */
  placeholder?: string;
  /**
   * 透传给内部Input组件的属性
   */
  InputProps?: Partial<InputProps>;
  /**
   * 确认文本内容
   */
  confirmText?: ReactNode;
  /**
   * 取消文本内容
   */
  cancelText?: ReactNode;
  /**
   * 是否展示取消按钮
   */
  showCancel?: boolean;
  /**
   * theme 主题定制
   */
  theme?: ThemeProps;
  /**
   * 确认回调
   */
  onOk?: (val?: string) => void;
  /**
   * 取消回调
   */
  onClose?: () => void;
}

/**
 * 函数式调用配置参数
 */
export type DialogOptions = Omit<
  DialogProps,
  'placeholder' | 'inputProps' | 'onOk' | 'onClose'
> & {
  /**
   * 确认回调
   */
  onConfirm?: (val?: string) => void | Promise<void>;
  /**
   * 取消回调
   */
  onCancel?: () => void | Promise<void>;
};

/**
 * prompt函数式调用配置参数
 */
export type PromptOptions =
  | (DialogOptions & {
      /**
       * 输入框占位文本
       */
      placeholder?: string;
      /**
       * 内部<input>标签的标准属性
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    })
  | string;

/**
 * confirm函数式调用配置参数
 */
export type ConfirmOptions = DialogOptions | string;
/**
 * Dialog函数式调用返回值类型
 */

export type DialogPromise = Promise<boolean | string>;

/**
 * Dialog Instance
 */
export interface DialogFunction {
  /**
   * 直接调用显示确认框 Dialog
   */
  (options: ConfirmOptions): DialogPromise;
  /**
   * 显示确认框 Dialog.confirm
   */
  confirm?: (options: ConfirmOptions) => DialogPromise;
  /**
   * 显示提示对话框 Dialog.prompt
   */
  prompt?: (options: PromptOptions, val?: string) => DialogPromise;
}
export interface DialogInstance extends DialogFunction {
  useDialog: () => [DialogFunction, React.JSX.Element];
}
