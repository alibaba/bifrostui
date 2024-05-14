import * as React from 'react';
import { TransitionProps } from '../Transition';

export interface SlideProps extends Omit<TransitionProps, 'children'> {
  children?: React.ReactElement;
  /**
   * 动画的方向: 'left' | 'right' | 'up' | 'down' 默认是从上往下
   * @default 'down'
   */
  direction?: 'left' | 'right' | 'up' | 'down';
  easing?: string | { enter?: string; exit?: string };
}
