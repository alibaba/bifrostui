import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type VariantEnum = 'text' | 'circular' | 'rectangular' | 'rounded';
export type animationEnum = 'wave' | 'pulse' | false;

export type SkeletonProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 动效 'wave' | 'pulse' | false
       * 对应动效 波纹 | 脉搏 | 无动效
       * @default 'wave'
       */
      animation?: animationEnum;
      /**
       * 展现形式
       * - text 文本，可以根据`font-size`自动调整高度
       * - circular 圆形
       * - rectangular 方块
       * - rounded 圆角方块
       * @default 'text'
       */
      variant?: VariantEnum;
      /**
       * 占位宽度
       * @default 100%
       */
      width?: string | number;
      /**
       * 占位高度
       */
      height?: string | number;
    };
    defaultComponent: D;
  },
  D
>;
