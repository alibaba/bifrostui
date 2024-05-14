import { OverrideProps } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type RadioLabelPlacement = 'left' | 'top' | 'right' | 'bottom';

export interface RadioGroupContextProps {
  defaultValue?: string;
  value?: string;
  select: (e: React.ChangeEvent<HTMLInputElement>, val: string) => void;
  disabled?: boolean;
}

export type RadioGroupProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 默认选中的选项，当组件非受控时使用
       */
      defaultValue?: string;
      /**
       * 指定选中的选项，当组件受控时使用
       */
      value?: string;
      /**
       * 整组是否禁用，默认false
       */
      disabled?: boolean;
      /**
       * 变化时的回调函数
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: {
          value: string;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type RadioProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 默认是否选中，当组件非受控时使用
       */
      defaultChecked?: boolean;
      /**
       * 是否选中，当组件受控时使用
       */
      checked?: boolean;
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
       * 组件的值，若使用RadioGroup应传入该属性
       */
      value?: string;
      /**
       * 是否禁用
       */
      disabled?: boolean;
      /**
       * 未选中状态图标
       */
      icon?: ReactNode;
      /**
       * 选中状态图标
       */
      checkedIcon?: ReactNode;
      /**
       * 文案位置，默认为right
       */
      labelPlacement?: RadioLabelPlacement;
      /**
       * 变化时的回调函数
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: {
          checked: boolean;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
