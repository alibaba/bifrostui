import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type ProgressStringGradients = { [percentage: string]: string };
type ProgressFromToGradients = { from: string; to: string };
export type ProgressGradient = { direction?: string } & (
  | ProgressStringGradients
  | ProgressFromToGradients
);

export type ProgressProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /** 百分比 */
      percent?: number;
      /**
       * - 进度条的色彩，传入 object 时为渐变
       */
      strokeColor?: string | ProgressGradient;
      /** 未填充进度条的色彩 */
      trailColor?: string;
      /** 进度条线的宽度，单位 */
      strokeWidth?: number | string;
    };
    defaultComponent: D;
  },
  D
>;
