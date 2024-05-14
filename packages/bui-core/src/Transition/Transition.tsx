import React from 'react';
import { TransitionProps } from './Transition.types';
import TransitionCore from './TransitionCore';

export const Transition = React.forwardRef<HTMLElement, TransitionProps>(
  (props, ref) => {
    // rtl need set nextTick
    return <TransitionCore {...props} ref={ref} nextTick={setTimeout} />;
  },
);

Transition.displayName = 'BuiTransition';
export default Transition;
