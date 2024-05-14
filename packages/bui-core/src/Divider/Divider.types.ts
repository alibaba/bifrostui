import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type DividerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 分割线方向
       */
      direction?: 'horizontal' | 'vertical';
      /**
       * horizontal时代表宽度，vertical时代表高度
       */
      size?: string;
      /**
       * 是否使用虚线
       */
      dashed?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
