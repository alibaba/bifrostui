import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type SwitchProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否选中
       */
      checked?: boolean;
      /**
       * 默认是否选中，当组件非受控时使用
       */
      defaultChecked?: boolean;
      /**
       * 内部<input>标签的ref
       */
      inputRef?: React.Ref<HTMLInputElement>;
      /**
       * <input>名称标识
       */
      name?: string;
      /**
       * 内部<input>标签的标准属性
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
      /**
       * 选中时的内容
       */
      checkedChildren?: ReactNode;
      /**
       * 未选中时的内容
       */
      unCheckedChildren?: ReactNode;
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 大小 'small' | 'medium' | 'large'
       * @default 'medium'
       */
      size?: 'small' | 'medium' | 'large';
      /**
       * 颜色 'primary' | 'info' | 'success' | 'warning' | 'danger';
       * @default 'primary'
       */
      color?: ThemeColor;
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
