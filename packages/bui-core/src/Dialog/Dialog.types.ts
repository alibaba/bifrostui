import React, { ReactNode } from 'react';
import { ModalProps } from '../Modal/Modal.types';
import { InputProps } from '../Input/Input.types';
import { ThemeProps } from '../ThemeProvider/ThemeProvider.types';

/**
 * 对话框类型
 */
export type DialogType = 'confirm' | 'prompt' | 'alert';
export type Dispatch = (
  action: boolean,
  e: React.SyntheticEvent,
  val?: string,
) => void;

export interface DialogProps extends Omit<ModalProps, 'title' | 'content'> {
  /**
   * 对话框类型
   * @default confirm
   */
  type?: DialogType;
  /**
   * 自定义标题
   */
  title?: ReactNode;
  /**
   * 自定义内容
   */
  content?: ReactNode;
  /**
   * 输入框占位文本
   */
  placeholder?: string;
  /**
   * 透传给内部Input组件的属性
   */
  InputProps?: Partial<InputProps>;
  /**
   * 确认按钮文本内容
   */
  okText?: ReactNode;
  /**
   * 取消文本内容
   */
  cancelText?: ReactNode;
  /**
   * theme 主题定制
   */
  theme?: ThemeProps;
  /**
   * 渲染Dialog的根容器
   * @default document.body
   */
  container?: HTMLElement | (() => HTMLElement);
  /**
   * 确认回调
   */
  onOk?: (e: React.SyntheticEvent, data: { value: string }) => void;
  /**
   * 取消回调
   */
  onCancel?: (e: React.SyntheticEvent) => void;
}

/**
 * 函数式调用配置参数
 */
export type DialogOptions = Omit<
  DialogProps,
  'placeholder' | 'inputProps' | 'onOk' | 'onCancel'
> & {
  /**
   * 确认回调
   */
  onOk?: (e: React.SyntheticEvent, data: { value: string }) => void;
  /**
   * 取消回调
   */
  onCancel?: (e: React.SyntheticEvent) => void;
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
 * alert函数式调用配置参数
 */
export type AlertOptions = DialogOptions | string;

/**
 * Dialog函数式调用返回值类型
 */
export type DialogPromise = Promise<boolean | string>;

/**
 * Dialog Instance
 */
export interface DialogFunction {
  /**
   * 显示确认框 Dialog.confirm
   */
  confirm?: (options: ConfirmOptions) => Promise<boolean>;
  /**
   * 显示提示对话框 Dialog.prompt
   */
  prompt?: (options: PromptOptions, val?: string) => Promise<string | null>;
  /**
   * 显示警告对话框 Dialog.alert
   */
  alert?: (options: AlertOptions) => Promise<boolean>;
}

/**
 * Dialog组件类型，支持组件式调用和函数式调用
 */
export interface DialogComponent
  extends React.ForwardRefExoticComponent<
    DialogProps & React.RefAttributes<HTMLDivElement>
  > {
  /**
   * 显示确认框
   */
  confirm: (options: ConfirmOptions) => Promise<boolean>;
  /**
   * 显示提示对话框
   */
  prompt: (options: PromptOptions) => Promise<string | null>;
  /**
   * 显示警告对话框
   */
  alert: (options: AlertOptions) => Promise<boolean>;
  /**
   * 使用Dialog Hook
   */
  useDialog: () => [DialogFunction, React.JSX.Element];
}
