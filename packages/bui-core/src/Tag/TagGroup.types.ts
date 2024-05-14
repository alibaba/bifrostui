import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type TagGroupProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P;
    defaultComponent: D;
  },
  D
>;
