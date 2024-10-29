import Taro from '@tarojs/taro';
import React from 'react';
import { TransitionProps } from './Transition.types';
import TransitionCore from './TransitionCore';

export const Transition = React.forwardRef<HTMLElement, TransitionProps>(
  (props, ref) => {
    return (
      <TransitionCore
        {...props}
        // 解决通过类似wx:if语法卸载组件时，Taro.nextTick不稳定的问题
        nextTick={(cb) => setTimeout(() => Taro.nextTick(cb), 16)}
        ref={ref}
      />
    );
  },
);

Transition.displayName = 'BuiTransition';
export default Transition;
