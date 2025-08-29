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

  // 初始化wrapperSize
  const [wrapperSize, setWrapperSize] = useState(() => {
    if (mountOnEnter || unmountOnExit) return collapsedSize;

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

      // 确保DOM渲染完成
      Taro.nextTick(() => {
        if (!isMountedRef.current) return; // 防止内存泄漏

        getBoundingClientRect(reactNodeChild).then((res) => {
          if (!isMountedRef.current) return;

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
      });
    });
  };

  const transition = (() => {
    // 当enter=false且正在进入时，或exit=false且正在退出时，禁用CSS动画
    const shouldDisableTransition = (inProp && !enter) || (!inProp && !exit);

    if (shouldDisableTransition) {
      return 'none';
    }

    return transitions.create(
      size,
      getTransitionProps(
        {
          timeout,
          style,
          easing: easingProp,
          delay,
        },
        { mode: inProp ? 'enter' : 'exit' },
      ),
    );
  })();

  /**
   * Lifecycle management
   * 在所有异步操作中添加 isMountedRef 检查，防止组件卸载后更新状态导致错误，避免内存泄漏风险
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
    if (elementRef.current) {
      // 获取实际尺寸（只计算一次）
      getCollapseWrapperSize(elementRef.current).then((actualSize) => {
        // 初次挂载时
        if (!isFirstMount.current) return;
        if (inProp) {
          setWrapperSize(actualSize as string);

          // 处理动画的生命周期回调
          if (appear || enter) {
            onEnter?.(elementRef.current);
            // appear动画开始后
            if (onEntering) {
              setTimeout(() => {
                if (!isMountedRef.current) return;
                onEntering(elementRef.current);
              }, 0);
            }
          } else if (!enter) {
            // 没有动画，手动触发onEntered事件
            onEntered?.(elementRef.current);
          }
        }

        if (isMounted) {
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
    // 非初次挂载时的inProp变化处理
    if (!isFirstMount.current) {
      if (inProp) {
        // 使用缓存的尺寸，不再重复计算
        if (actualSizeRef.current) {
          setWrapperSize(actualSizeRef.current);
        }
        // 处理动画的生命周期回调函数
        if (enter) {
          onEnter?.(elementRef.current);
          if (onEntering) {
            setTimeout(() => {
              if (!isMountedRef.current) return;
              onEntering(elementRef.current);
            }, 0);
          }
        } else {
          onEntered?.(elementRef.current);
        }
      } else {
        setWrapperSize(collapsedSize);
        if (exit) {
          onExit?.(elementRef.current);
          // 立即触发onExiting回调
          if (onExiting) {
            setTimeout(() => {
              if (!isMountedRef.current) return;
              onExiting(elementRef.current);
            }, 0);
          }
        } else {
          onExited?.(elementRef.current);
        }
      }
    }
  }, [inProp, isMounted, collapsedSize]);

  const handleTransitionEnd = () => {
    if (inProp) {
      onEntered?.(elementRef.current);
    } else {
      if (unmountOnExit) {
        isFirstMount.current = true;
        setIsMounted(false);
      }
      onExited?.(elementRef.current);
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
