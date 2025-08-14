/**
/**
 * Collapse Animation Component
 * @description A component that implements collapse in/out animation effects for elements
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

  const isFirstMount = useRef(true);
  const isMountedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(() => {
    return !mountOnEnter;
  });

  const elementRef = useRef(null);
  // @ts-expect-error will upstream fix
  const handleRef = useForkRef(ref, children?.ref, elementRef);

  // 缓存实际内容尺寸，只计算一次
  const actualSizeRef = useRef<string>('');

  const transitions = createTransitions();

  const isHorizontal = direction === 'horizontal';
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;

  const size = isHorizontal ? 'width' : 'height';

  const shouldAnimateOnFirstMount = inProp && appear;
  const shouldAnimate = (inProp && enter) || (!inProp && exit);

  // 初始化wrapperSize
  const [wrapperSize, setWrapperSize] = useState(() => {
    if (mountOnEnter || unmountOnExit) return '0px';

    // 当appear为true且inProp为true时，初始应该是collapsed状态
    if (appear && inProp) {
      return collapsedSize;
    }
    // inProp为false时，初始为collapsed状态
    if (!inProp) {
      return collapsedSize;
    }
    // inProp为true且非appear情况，初始为空，等待获取实际尺寸
    return '';
  });
  /**
   * Animation configuration
   */
  const getAnimationDuration = () => {
    return shouldAnimate ? timeout : 0;
  };

  // Whether to skip the initial animation
  const shouldSkipFirstAnimation =
    isFirstMount.current && !shouldAnimateOnFirstMount;

  const getCollapseWrapperSize = (reactNode) => {
    return new Promise((resolve) => {
      // 如果已经计算过，直接返回缓存的结果
      if (actualSizeRef.current) {
        resolve(actualSizeRef.current);
        return;
      }

      const reactNodeChild = reactNode?.children?.[0];

      if (!reactNodeChild) {
        actualSizeRef.current = FIT_CONTENT;
        resolve(FIT_CONTENT);
        return;
      }

      // 使用setTimeout确保DOM渲染完成
      setTimeout(() => {
        if (!isMountedRef.current) return; // 防止内存泄漏

        getBoundingClientRect(reactNodeChild).then((res) => {
          if (!isMountedRef.current) return; // 防止内存泄漏

          if (!res) {
            actualSizeRef.current = FIT_CONTENT;
            resolve(FIT_CONTENT);
          } else {
            const newSize = isHorizontal
              ? `${res?.width}px`
              : `${res?.height}px`;
            actualSizeRef.current = newSize; // 缓存结果
            resolve(newSize);
          }
        });
      }, 0);
    });
  };

  /**
   * Generate animation configuration
   */
  const animationDuration = getAnimationDuration();
  const transition = transitions.create(
    size,
    getTransitionProps(
      {
        timeout: animationDuration,
        style,
        easing: easingProp,
        delay,
      },
      { mode: inProp ? 'enter' : 'exit' },
    ),
  );

  /**
   * Lifecycle management
   */
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Control component mount state
    if (inProp && !isMounted) {
      setIsMounted(true);
    }
  }, [inProp, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    // 组件挂载后初始化尺寸
    // 获取实际尺寸（只计算一次）
    if (elementRef.current) {
      getCollapseWrapperSize(elementRef.current).then((actualSize) => {
        if (!isMountedRef.current) return;
        // 如果是appear动画且初次挂载
        if (
          (unmountOnExit || mountOnEnter || appear) &&
          inProp &&
          isFirstMount.current
        ) {
          // 触发appear动画：从 collapsedSize 到 actualSize
          setTimeout(() => {
            if (isMountedRef.current) {
              setWrapperSize(actualSize as string);
            }
          }, 16); // 使用下一个帧来触发动画
        }
        // 非appear且inProp为true情况下的初次挂载，立即设置为实际尺寸
        else if (inProp && wrapperSize === '') {
          setWrapperSize(actualSize as string);
        }

        if (isMounted && isFirstMount.current) {
          isFirstMount.current = false;
        }
      });
    }
  }, [isMounted]);

  /**
   * Animation event handlers
   */
  useEffect(() => {
    if (!isMounted) return;

    // 处理appear动画的生命周期回调
    if (appear && inProp && isFirstMount.current) {
      onEnter?.(elementRef.current);
      return;
    }

    // 非appear情况下的inProp变化处理（不包括初次挂载）
    if (!isFirstMount.current) {
      if (inProp) {
        // 展开时，调用onEnter并设置为实际尺寸
        onEnter?.(elementRef.current);
        // 使用缓存的尺寸，不再重复计算
        if (actualSizeRef.current) {
          setWrapperSize(actualSizeRef.current);
        }
      } else {
        // 收起时，调用onExit并设置为折叠尺寸
        onExit?.(elementRef.current);
        setWrapperSize(collapsedSize);
      }
    }
  }, [inProp, isMounted, appear, onEnter, onExit, collapsedSize]);

  const handleTransitionStart = () => {
    if (animationDuration === 0) return;

    if (inProp) {
      onEntering?.(elementRef.current);
    } else {
      onExiting?.(elementRef.current);
    }
  };

  const handleTransitionEnd = () => {
    if (shouldSkipFirstAnimation) return;
    if (inProp) {
      onEntered?.(elementRef.current);
    } else {
      onExited?.(elementRef.current);
      if (unmountOnExit) {
        isFirstMount.current = true;
        setIsMounted(false);
      }
    }
  };

  /**
   * Render
   */

  if (!children || !isMounted) return null;

  // 计算当前尺寸
  const currentSize = (() => {
    if (wrapperSize) {
      return wrapperSize;
    }
    // 如果wrapperSize为空，根据inProp状态返回适当的默认值
    return inProp ? FIT_CONTENT : collapsedSize;
  })();

  return React.createElement(
    'div',
    {
      ...others,
      className: `bui-collapse ${className || ''}`,
      style: {
        ...style,
        transition,
        WebkitTransition: transition,
        ...(isHorizontal
          ? { width: currentSize, WebKitWidth: currentSize }
          : { height: currentSize, WebKitHeight: currentSize }),
      },
      onTransitionStart: handleTransitionStart,
      onTransitionEnd: handleTransitionEnd,
      ref: handleRef,
    },
    React.cloneElement(children, {
      style: {
        ...children.props?.style,
      },
    }),
  );
});
Collapse.displayName = 'BuiCollapse';

export default Collapse;
