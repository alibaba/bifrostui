/**
 * 淡入淡出动效
 */
import {
  createTransitions,
  duration,
  easing,
  getTransitionProps,
  useForkRef,
} from '@bifrostui/utils';
import React from 'react';
import Transition from '../Transition';
import { FadeProps } from './Fade.types';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Fade = React.forwardRef<HTMLElement, FadeProps>(
  (
    {
      appear = true,
      children,
      in: inProp,
      easing: easingProp = defaultEasing,
      style,
      timeout = defaultTimeout,
      delay = 0,
      ...others
    },
    ref,
  ) => {
    const transitions = createTransitions();
    // @ts-expect-error will upstream fix
    const nodeRef = useForkRef(ref, children?.ref);
    return (
      <Transition
        appear={appear}
        in={inProp}
        timeout={timeout}
        delay={delay}
        {...others}
        ref={nodeRef}
      >
        {(state, childProps) => {
          const transition = transitions.create(
            'opacity',
            getTransitionProps(
              { timeout, style, easing: easingProp, delay },
              {
                mode: state,
              },
            ),
          );
          return React.cloneElement(children, {
            style: {
              visibility: state === 'exited' ? 'hidden' : 'visible',
              transition,
              WebkitTransition: transition,
              opacity: state === 'entering' || state === 'entered' ? '1' : '0',
              ...style,
              ...children.props.style,
            },
            ...childProps,
          });
        }}
      </Transition>
    );
  },
);

Fade.displayName = 'BuiFade';

export default Fade;
