import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type InputProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 输入框默认内容，当组件非受控时使用
       */
      defaultValue?: string;
      /**
       * 输入框内容，当组件受控时使用
       */
      value?: string;
      /**
       * 内部<input>标签的标准属性
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
      /**
       * 内部<input>标签的ref
       */
      inputRef?: React.Ref<HTMLInputElement>;
      /**
       * <input>名称标识
       */
      name?: string;
      /**
       * <input>类型标识，应该为有效的HTML5 input type值 或 小程序支持的type值
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
       */
      type?: string;
      /**
       * 是否展示清除图标，点击清除图标后会清空输入框，默认false
       */
      clearable?: boolean;
      /**
       * 带图标的 input，设置前置图标
       */
      startIcon?: React.ReactNode;
      /**
       * 带图标的 input，设置后置图标，若clearable=true，则两个图标都会展示
       */
      endIcon?: React.ReactNode;
      /**
       * 占位内容
       */
      placeholder?: string;
      /**
       * 是否禁用，默认false
       */
      disabled?: boolean;
      /**
       * 点击清除图标的回调，非受控状态也会清除输入框内容
       */
      onClear?: (e: React.SyntheticEvent) => void;
      /**
       * 输入框内容变化时的回调
       */
      onChange?: (
        e: React.ChangeEvent<HTMLInputElement>,
        data: {
          value: string;
        },
      ) => void;
      /**
       * 聚焦时的回调
       */
      onFocus?: (e: React.SyntheticEvent) => void;
      /**
       * 失焦时的回调
       */
      onBlur?: (e: React.SyntheticEvent) => void;
    };

    defaultComponent: D;
  },
  D
>;
