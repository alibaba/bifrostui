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
      /**
       * 无障碍功能：ARIA标签
       */
      'aria-label'?: string;
      /**
       * 无障碍功能：描述元素的详细信息
       */
      'aria-describedby'?: string;
      /**
       * 无障碍功能：是否隐藏元素
       */
      'aria-hidden'?: boolean;
      /**
       * 无障碍功能：元素在无障碍树中的细节程度
       */
      'aria-details'?: string;
      /**
       * 无障碍功能：当前元素是否处于忙碌状态
       */
      'aria-busy'?: boolean;
      /**
       * 无障碍功能：当前元素是否为只读
       */
      'aria-readonly'?: boolean;
      /**
       * 无障碍功能：当前元素是否为必填
       */
      'aria-required'?: boolean;
      /**
       * 无障碍功能：进度条的当前值
       */
      'aria-valuenow'?: number;
      /**
       * 无障碍功能：进度条的最小值
       */
      'aria-valuemin'?: number;
      /**
       * 无障碍功能：进度条的最大值
       */
      'aria-valuemax'?: number;
      /**
       * 无障碍功能：进度条的文本描述
       */
      'aria-valuetext'?: string;
    };
    defaultComponent: D;
  },
  D
>;
