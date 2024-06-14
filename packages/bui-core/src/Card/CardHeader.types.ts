import { OverrideProps } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type CardHeaderProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 卡片标题
       */
      title?: ReactNode;
      /**
       * 子标题
       */
      subtitle?: ReactNode;
      /**
       *卡片右侧操作区
       */
      extra?: ReactNode;
      /**
       * 卡片右侧操作区图标
       */
      endIcon?: ReactNode | boolean;
    };
    defaultComponent: D;
  },
  D
>;
