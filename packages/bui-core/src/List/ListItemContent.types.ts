import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type ListItemContentProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 主要内容
       */
      primary?: React.ReactNode;
      /**
       * 次要内容
       */
      secondary?: React.ReactNode;

      component?: React.ElementType;
    };
    defaultComponent: D;
  },
  D
>;
