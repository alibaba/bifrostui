import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React from 'react';

export type TagProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 预定义色彩
       * @default 'default'
       */
      color?: ThemeColor | 'default' | 'vip';
      /**
       * 自定义色彩
       */
      htmlColor?: string;
      /**
       * - outlined: 描边
       * - contained: 实心填充
       * - light: 浅亮填充
       * @default 'outlined'
       */
      variant?: 'outlined' | 'contained' | 'light';
    };
    defaultComponent: D;
  },
  D
>;
