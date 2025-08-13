import { OverrideProps, ThemeColor, ButtonOpenType } from '@bifrostui/types';
import React from 'react';

export type IconButtonProps<
  D extends React.ElementType = 'button',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * - small: 小按钮
       * - medium: 中号按钮，默认按钮
       * - large: 大按钮
       * @default 'medium'
       */
      size?: 'small' | 'medium' | 'large';
      /** 按钮颜色
       */
      color?: ThemeColor | 'default';
      /**
       * - default: 图标按钮
       * - contained: 实心填充按钮
       * - outlined: 描边按钮
       * @default 'default'
       */
      variant?: 'default' | 'contained' | 'outlined';
      /**
       * - circular: 圆形
       * - square: 正方形
       * - rounded: 圆角
       * @default 'circular'
       */
      shape?: 'circular' | 'square' | 'rounded';
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 仅微信小程序支持的button开放能力
       */
      openType?: ButtonOpenType;
    };
    defaultComponent: D;
  },
  D
>;
