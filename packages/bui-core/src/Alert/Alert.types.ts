import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React, { SyntheticEvent } from 'react';

export type AlertProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 指定警告提示的样式
       */
      color?: ThemeColor;
      /**
       * 自定义图标，icon为false时隐藏图标
       */
      icon?: React.ReactNode | boolean;
      /**
       *  警告提示操作区
       */
      action?: React.ReactNode;
      /**
       * 警告模式
       */
      variant?: 'standard' | 'outlined';
      /**
       * 内容是否滚动（内容只能单行）
       */
      marquee?: boolean;
      /**
       *  关闭回调
       */
      onClose?: (e?: SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type AlertIconProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 指定警告提示的样式
       */
      color?: ThemeColor;
      /**
       * 自定义图标，icon为false时隐藏图标
       */
      icon?: React.ReactNode | boolean;
    };
    defaultComponent: D;
  },
  D
>;

export type AlertActionProps<
  D extends React.ElementType = React.ElementType,
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 指定警告提示的样式
       */
      color?: ThemeColor;
      /**
       *  警告提示操作区
       */
      action?: React.ReactNode;
      /**
       *  关闭回调,
       */
      onClose?: (e?: SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;
