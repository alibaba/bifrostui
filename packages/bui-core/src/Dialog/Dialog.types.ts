import { ReactNode } from 'react';
import { ModalProps } from '../Modal/Modal.types';

export type Action = boolean | string | number;
export type Dispatch = (action: Action, val?: string) => void;
export type DialogType = 'confirm' | 'prompt';
export type Render = ReactNode | ((dispatch: Dispatch) => ReactNode);
export type CloseBefore = (action: Action) => Promise<any> | void;

type HandleEvent = () => void;

export interface DialogProps extends ModalProps {
  type?: DialogType;

  custom?: Render;
  header?: Render;
  desc?: Render;
  footer?: Render;

  visible?: boolean;
  placeholder?: string;
  dispatch?: Dispatch;

  confirmText?: string;
  cancelText?: string;
  onConfirm?: (val?: string) => void | Promise<void | string>;
  onCancel?: () => void | Promise<void>;
  closeBefore?: CloseBefore;
  closeAfter?: HandleEvent;
}

/**
 * 函数式调用配置参数
 */
export type DialogOptions = Omit<DialogProps, 'type'> | string;

export type PromptOptions = DialogOptions & {
  placeholder?: string;
  type?: string;
};

export type ConfirmOptions = DialogOptions & {
  placeholder?: string;
  type?: string;
};

// export type Params = DialogProps | ReactNode;
// export type PromptParams = PromptProps | ReactNode;
export type DialogPromise = Promise<boolean | string>;
export type Options = PromptOptions | ConfirmOptions;

/**
 * Toast Instance
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
