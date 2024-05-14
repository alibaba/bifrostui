import Taro from '@tarojs/taro';
import React from 'react';
import { TransitionProps } from './Transition.types';
import TransitionCore from './TransitionCore';

export const Transition = React.forwardRef<HTMLElement, TransitionProps>(
  (props, ref) => {
    return <TransitionCore {...props} nextTick={Taro.nextTick} ref={ref} />;
  },
);

Transition.displayName = 'BuiTransition';
export default Transition;
