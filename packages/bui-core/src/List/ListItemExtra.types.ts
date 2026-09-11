import { OverrideProps } from '@bifrostui/types';
import * as React from 'react';

export type ListItemExtraProps<
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
