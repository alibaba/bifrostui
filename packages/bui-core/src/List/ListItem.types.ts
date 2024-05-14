import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type ListItemProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 列表右侧操作图标
       */
      endIcon?: boolean | React.ReactNode; // 是否保留
      /**
       *控制是否不可点击
       */
      disabled?: boolean;
      /**
       * 控制分割线是否显示
       */
      hideDivider?: boolean;
      component?: React.ElementType;
    };
    defaultComponent: D;
  },
  D
>;
