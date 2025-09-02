/**
 * Collapse Animation Component
 * @description A component that implements collapse in/out animation effects for elements using CSS animations
 * @component Collapse
 */
import React, { useEffect, useRef, useState } from 'react';
import {
  useForkRef,
  duration,
  easing,
  getTransitionProps,
  createTransitions,
  getBoundingClientRect,
} from '@bifrostui/utils';
import Taro from '@tarojs/taro';
import { CollapseProps } from './Collapse.types';
import './Collapse.less';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const FIT_CONTENT = 'fit-content';

const Collapse = React.forwardRef<HTMLElement, CollapseProps>((props, ref) => {
  const {
    children,
    in: inProp,
    style,
    className,
    appear = false,
    enter = true,
    exit = true,
    delay = 0,
    easing: easingProp = defaultEasing,
    timeout = defaultTimeout,
    direction = 'vertical',
    collapsedSize: collapsedSizeProp = 0,
    // Lifecycle hooks
    mountOnEnter,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...others
  } = props;

  const isFirstMount = useRef(inProp || !mountOnEnter);
  const [isMounted, setIsMounted] = useState(false);
  const isHorizontal = direction === 'horizontal';
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const [actualSize, setActualSize] = useState<string>(collapsedSize);

  const elementRef = useRef(null);
  // @ts-expect-error will upstream fix
  const handleRef = useForkRef(ref, children?.ref, elementRef);
  const transitions = createTransitions();

  // Whether to animate on first mount
  const shouldAnimateOnFirstMount = inProp && appear;
  // Whether to animate on subsequent updates
  const shouldAnimate = (inProp && enter) || (!inProp && exit);
  // Determine whether animation should be executed
  const shouldExecuteAnimation = isFirstMount.current
    ? shouldAnimateOnFirstMount
    : shouldAnimate;

  const getCollapseWrapperSize = (reactNode) => {
    return new Promise((resolve) => {
      const reactNodeChild = reactNode?.children?.[0];

      if (!reactNodeChild) {
        resolve(FIT_CONTENT);
        return;
      }

      // 确保DOM渲染完成
      Taro.nextTick(() => {
        getBoundingClientRect(reactNodeChild).then((res) => {
          if (!res) {
            resolve(FIT_CONTENT);
          } else {
            const newSize = isHorizontal
              ? `${res?.width}px`
              : `${res?.height}px`;
            resolve(newSize);
          }
        });
      });
    });
  };

  /**
   * Generate animation configuration
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

  const animationName = inProp
    ? `bui-collapse-enter-${direction}`
    : `bui-collapse-exit-${direction}`;
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

  console.log(animation, 'animationDurationAndDelay');
  useEffect(() => {
    // Update first render state
    if (isMounted && isFirstMount.current) {
      isFirstMount.current = false;
    }
  }, [isMounted]);

  useEffect(() => {
    if (shouldSkipFirstAnimation) {
      setIsMounted(true);
      return;
    }
    getCollapseWrapperSize(elementRef.current).then((size) => {
      setActualSize(size);
      setIsMounted(true);
    });
  }, [inProp]);

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
    if (inProp) {
      Taro.nextTick(() => {
        setActualSize('auto');
      });
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

  // 计算当前尺寸和CSS变量
  const cssVariables = {
    '--collapse-size': actualSize,
    '--collapse-collapsed-size': collapsedSize,
  };

  const getClassName = () => {
    const classes = ['bui-collapse'];

    if (className) {
      classes.push(className);
    }

    // 添加方向类名
    classes.push(`bui-collapse-${direction}`);

    return classes.join(' ');
  };

  return React.createElement(
    'div',
    {
      ...others,
      className: getClassName(),
      style: {
        animation,
        animationFillMode: 'both',
        ...cssVariables,
        ...style,
      },
      onAnimationStart: handleAnimationStart,
      onAnimationEnd: handleAnimationEnd,
      ref: handleRef,
    },
    React.cloneElement(children, {
      style: {
        ...children.props?.style,
      },
    }),
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
