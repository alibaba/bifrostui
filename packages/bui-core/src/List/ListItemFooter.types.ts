import { OverrideProps } from '@bifrostui/types';
import * as React from 'react';

export type ListItemFooterProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      component?: React.ElementType;
    };
    defaultComponent: D;
  },
  D
>;
