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

const Fade = React.forwardRef<HTMLElement, FadeProps>((props, ref) => {
  const {
    appear,
    children,
    in: inProp,
    easing: easingProp,
    style,
    timeout,
    delay,
    ...others
  } = props;
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
});

Fade.displayName = 'BuiFade';
Fade.defaultProps = {
  easing: defaultEasing,
  timeout: defaultTimeout,
  appear: true,
  delay: 0,
};

export default Fade;
