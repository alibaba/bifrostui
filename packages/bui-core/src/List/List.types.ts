import { OverrideProps } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type ListProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /** 是否隐藏分割线 */
      hideDivider?: boolean;
      /**
       * 列表大小
       */
      size?: 'small' | 'medium' | 'large';
      /**
       * 头部
       */
      header?: ReactNode;
      /**
       * 子头部
       */
      subheader?: ReactNode;
      component?: React.ElementType;
    };
    defaultComponent: D;
  },
  D
>;
