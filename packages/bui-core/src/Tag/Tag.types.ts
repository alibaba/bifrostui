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
       * @default 'neutral'
       */
      color?: ThemeColor | 'vip';
      /**
       * 自定义色彩
       */
      htmlColor?: string;
      /**
       * - outlined: 描边
       * - contained: 实心填充
       * - subtle: 柔和填充
       * @default 'outlined'
       */
      variant?: 'outlined' | 'contained' | 'subtle';
    };
    defaultComponent: D;
  },
  D
>;
