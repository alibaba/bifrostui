import React from 'react';
import { TransitionProps } from '../Transition';

export interface CollapseProps extends Omit<TransitionProps, 'children'> {
  easing?: string | { enter?: string; exit?: string };
  children?: React.ReactElement;
  /**
   * 折叠的方向
   * horizontal - 水平方向
   * vertical - 垂直方向
   */
  orientation?: 'horizontal' | 'vertical';
  collapsedSize?: string | number;
}
