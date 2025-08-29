/**
 * Slide Animation Component
 * @description A component that implements slide in/out animation effects for elements
 * @component Slide
 */
import React, { useEffect, useState, useRef } from 'react';
import {
  createTransitions,
  duration,
  easing,
  getTransitionProps,
  useForkRef,
} from '@bifrostui/utils';
import type { SlideProps } from './Slide.types';
import './index.less';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};
/**
 * Get animation name based on direction and state
 * @param direction The slide direction
 * @param inProp Whether the element is entering or exiting
 * @returns The animation class name
 */
const getAnimationName = (
  direction: 'left' | 'right' | 'up' | 'down',
  inProp: boolean,
): string => {
  const animations = {
    left: inProp ? 'bui-slide-left-in' : 'bui-slide-left-out',
    right: inProp ? 'bui-slide-right-in' : 'bui-slide-right-out',
    up: inProp ? 'bui-slide-up-in' : 'bui-slide-up-out',
    down: inProp ? 'bui-slide-down-in' : 'bui-slide-down-out',
  };

  return animations[direction] || animations.down;
};

/**
 * Slide Component
 * @component
 */
const Slide = React.forwardRef<HTMLElement, SlideProps>(
  (
    {
      // Base props
      children,
      in: inProp,
      style,
      direction = 'down',
      // Animation controls
      appear = true,
      enter = true,
      exit = true,
      delay = 0,
      easing: easingProp = defaultEasing,
      timeout = defaultTimeout,
      // Lifecycle hooks
      mountOnEnter,
      unmountOnExit,
      // Animation callbacks
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      // Other props
      ...others
    },
    ref,
  ) => {
    /**
     * Refs & State
     */
    const isFirstMount = useRef(inProp || !mountOnEnter);
    const [isMounted, setIsMounted] = useState(inProp || !mountOnEnter);
    const elementRef = useRef(null);
    // @ts-expect-error will upstream fix
    const handleRef = useForkRef(ref, children?.ref, elementRef);
    // Whether to animate on first mount
    const shouldAnimateOnFirstMount = inProp && appear;
    // Whether to animate on subsequent updates
    const shouldAnimate = (inProp && enter) || (!inProp && exit);
    // Determine whether animation should be executed
    const shouldExecuteAnimation = isFirstMount.current
      ? shouldAnimateOnFirstMount
      : shouldAnimate;

    /**
     * Animation configuration
     */
    const getAnimationDurationAndDelay = () => {
      // If animation should not be executed, return zero values
      if (!shouldExecuteAnimation) {
        return { timeout: 0, delay: 0 };
      }
      // Return actual configuration when executing animation
      return { timeout, delay };
    };

    // Whether to skip the initial animation
    const shouldSkipFirstAnimation =
      isFirstMount.current && !shouldAnimateOnFirstMount;

    /**
     * Generate animation configuration
     */
    const transitions = createTransitions();
    const animationName = getAnimationName(direction, inProp);
    const animationDurationAndDelay = getAnimationDurationAndDelay();
    const animation = transitions.create(
      animationName,
      getTransitionProps(
        {
          ...animationDurationAndDelay,
          style,
          easing: easingProp,
        },
        { mode: inProp ? 'enter' : 'exit' },
      ),
    );

    /**
     * Lifecycle management
     */
    useEffect(() => {
      // Control component mount state
      if (inProp && !isMounted) {
        setIsMounted(true);
      }
    }, [inProp, isMounted]);

    useEffect(() => {
      // Update first render state
      if (isMounted && isFirstMount.current) {
        isFirstMount.current = false;
      }
    }, [isMounted]);
    /**
     * Animation event handlers
     */
    useEffect(() => {
      // Trigger animation start callback
      const shouldTriggerCallback = isMounted && shouldExecuteAnimation;
      if (!shouldTriggerCallback) return;
      if (inProp) {
        onEnter?.(elementRef.current);
      } else {
        onExit?.(elementRef.current);
      }
    }, [inProp, isMounted, shouldExecuteAnimation, onEnter, onExit]);

    const handleAnimationStart = () => {
      if (!shouldExecuteAnimation) return;

      if (inProp) {
        onEntering?.(elementRef.current);
      } else {
        onExiting?.(elementRef.current);
      }
    };

    const handleAnimationEnd = () => {
      if (shouldSkipFirstAnimation) return;

      if (inProp) {
        onEntered?.(elementRef.current);
      } else {
        onExited?.(elementRef.current);
        if (unmountOnExit) {
          setIsMounted(false);
        }
      }
    };

    /**
     * Render
     */
    if (!children || !isMounted) return null;

    return React.cloneElement(children, {
      ...others,
      ref: handleRef,
      onAnimationEnd: handleAnimationEnd,
      onAnimationStart: handleAnimationStart,
      style: {
        animation,
        animationFillMode: 'both',
        ...style,
        ...children.props?.style,
      },
    });
  },
);

Slide.displayName = 'BuiSlide';

export default Slide;
