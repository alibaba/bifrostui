import { OverrideProps } from '@bifrostui/types';
import React, { SyntheticEvent } from 'react';

export type LabelPlacementProps = 'horizontal' | 'vertical';

export type OnChangeEvent = (
  ev?: SyntheticEvent,
  data?: { current: number },
) => void;

export interface StepsContextProps {
  direction?: string;
  current?: number;
  labelPlacement?: LabelPlacementProps;
  onChange?: OnChangeEvent;
}

export type StepsProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 指定当前步骤，从 0 开始记数，在子 Step 元素中，可以通过 status 属性覆盖该状态
       */
      current?: number;
      /**
       * 步骤条方向, 'horizontal' | 'vertical'
       * 默认 vertical
       */
      direction?: 'horizontal' | 'vertical';
      /**
       * 指定标签放置位置
       * 默认 horizontal
       */
      labelPlacement?: LabelPlacementProps;
      /**
       * 点击切换步骤时触发
       */
      onChange?: OnChangeEvent;
    };
    defaultComponent: D;
  },
  D
>;
