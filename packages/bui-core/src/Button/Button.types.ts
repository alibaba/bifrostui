import { OverrideProps, ThemeColor, ButtonOpenType } from '@bifrostui/types';
import React from 'react';

export type ButtonProps<
  D extends React.ElementType = 'button',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 按钮尺寸
       * - small: 小按钮
       * - medium: 中号按钮，默认按钮
       * - large: 大按钮/半屏按钮
       * - full: 通栏按钮
       * @default 'medium'
       */
      size?: 'small' | 'medium' | 'large' | 'full';
      /** 按钮颜色
       * @default 'default'
       */
      color?: ThemeColor | 'default' | 'vip';
      /**
       * 按钮类型
       * - text: 文字按钮
       * - outlined: 描边按钮
       * - contained: 实心填充按钮
       * - light: 浅亮填充按钮
       * @default 'outlined'
       */
      variant?: 'outlined' | 'text' | 'contained' | 'light';
      /**
       * 在子元素前放在的内容
       */
      startIcon?: React.ReactNode;
      /**
       * 在子元素后放在的内容
       */
      endIcon?: React.ReactNode;
      /**
       * 点击事件回调方法
       * @param event
       * @returns
       */
      onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
      /**
       * 仅微信小程序支持的button开放能力
       */
      openType?: ButtonOpenType;
    };
    defaultComponent: D;
  },
  D
>;
