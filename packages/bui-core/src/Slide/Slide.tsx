import {
  createTransitions,
  duration,
  easing,
  getTransitionProps,
  useForkRef,
} from '@bifrostui/utils';
import React from 'react';
import Transition from '../Transition';
import { SlideProps } from './Slide.types';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};
const Slide = React.forwardRef<HTMLElement, SlideProps>(
  (
    {
      appear = true,
      in: inProp,
      children,
      style,
      easing: easingProp = defaultEasing,
      timeout = defaultTimeout,
      direction = 'down',
      delay = 0,
      ...others
    },
    ref,
  ) => {
    const transitions = createTransitions();
    // @ts-expect-error will upstream fix
    const nodeRef = useForkRef(ref, children?.ref);
    const getTranslateValue = (_direction) => {
      if (_direction === 'left') {
        return 'translateX(100%)';
      }

      if (_direction === 'right') {
        return 'translateX(-100%)';
      }

      if (_direction === 'up') {
        return 'translateY(100%)';
      }

      // direction === 'down'
      return 'translateY(-100%)';
    };
    if (!children) return null;
    return (
      <Transition
        {...others}
        appear={appear}
        in={inProp}
        timeout={timeout}
        delay={delay}
        ref={nodeRef}
      >
        {(state, childProps) => {
          const transition = transitions.create(
            'transform',
            getTransitionProps(
              { timeout, style, easing: easingProp, delay },
              {
                mode: state,
              },
            ),
          );
          const transform =
            state === 'entering' || state === 'entered'
              ? 'none'
              : getTranslateValue(direction);
          return React.cloneElement(children, {
            style: {
              visibility: state === 'exited' ? 'hidden' : 'visible',
              transition,
              WebkitTransition: transition,
              transform,
              WebkitTransform: transform,
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

Slide.displayName = 'BuiSlide';

export default Slide;
