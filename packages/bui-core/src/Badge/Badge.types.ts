import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type BadgeProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       *徽章内容
       */
      content?: ReactNode;
      /**
       * 颜色
       */
      color?: Exclude<ThemeColor, 'neutral'>;
      /**
       * 最大值（替代maxCount，推荐使用）
       */
      max?: number;
      /**
       * @deprecated 即将废弃，请使用max
       */
      maxCount?: number;
      /**
       * content为0时是否展示
       */
      showZero?: boolean;
      /**
       * 是否展示badge
       */
      visibility?: boolean;
      /**
       *徽章类型
       */
      variant?: 'contained' | 'outlined';
      /**
       * 徽章形状
       */
      type?: 'dot' | 'standard' | 'bubble';
    };
    defaultComponent: D;
  },
  D
>;
