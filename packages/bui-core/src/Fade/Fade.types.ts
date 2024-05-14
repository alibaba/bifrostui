import React from 'react';
import { TransitionProps } from '../Transition';

export interface FadeProps extends Omit<TransitionProps, 'children'> {
  children?: React.ReactElement;
  easing?: string | { enter?: string; exit?: string };
}
