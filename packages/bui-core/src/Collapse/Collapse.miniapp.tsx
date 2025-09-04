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
  useDidMountEffect,
} from '@bifrostui/utils';
import Taro from '@tarojs/taro';
import { CollapseProps } from './Collapse.types';
import './index.less';

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

  const [isMounted, setIsMounted] = useState(inProp || !mountOnEnter);
  // Whether to animate on subsequent updates
  const shouldAnimate = (inProp && enter) || (!inProp && exit);
  // Determine whether animation should be executed
  const [animation, setAnimation] = useState('none');
  // Whether to animate on first mount
  const shouldAnimateOnFirstMount = inProp && appear;
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const [actualSize, setActualSize] = useState<string>(() => {
    if (!shouldAnimateOnFirstMount) {
      return inProp ? FIT_CONTENT : collapsedSize;
    }
    return collapsedSize;
  });

  const elementRef = useRef(null);
  // @ts-expect-error will upstream fix
  const handleRef = useForkRef(ref, children?.ref, elementRef);
  const getAnimation = (canAnimate: boolean) => {
    const transitions = createTransitions();
    const mode = inProp ? 'enter' : 'exit';
    const animationName = `bui-collapse-${mode}-${direction}`;
    return transitions.create(
      animationName,
      getTransitionProps(
        {
          timeout: canAnimate ? timeout : 0,
          delay: canAnimate ? delay : 0,
          style,
          easing: easingProp,
        },
        { mode: inProp ? 'enter' : 'exit' },
      ),
    );
  };

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
            const isHorizontal = direction === 'horizontal';
            const newSize = isHorizontal
              ? `${res?.width}px`
              : `${res?.height}px`;
            resolve(newSize);
          }
        });
      });
    });
  };

  useDidMountEffect(() => {
    if (inProp && !isMounted) {
      setIsMounted(true);
    }
    getCollapseWrapperSize(elementRef.current).then((size) => {
      setActualSize(size as string);
      setAnimation(getAnimation(shouldAnimate));
    });
  }, [inProp, isMounted]);

  useEffect(() => {
    if (!shouldAnimateOnFirstMount) return;
    getCollapseWrapperSize(elementRef.current).then((size) => {
      setActualSize(size as string);
      setAnimation(getAnimation(true));
    });
  }, []);

  /**
   * Animation event handlers
   */
  useEffect(() => {
    // Trigger animation start callback
    const shouldTriggerCallback = isMounted && shouldAnimate;
    if (!shouldTriggerCallback) return;

    if (inProp) {
      onEnter?.(elementRef.current);
    } else {
      onExit?.(elementRef.current);
    }
  }, [inProp, isMounted]);

  const handleAnimationStart = () => {
    if (!shouldAnimate) return;

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
