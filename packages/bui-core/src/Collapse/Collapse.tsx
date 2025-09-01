import React, { useEffect, useRef } from 'react';
import {
  useForkRef,
  duration,
  easing,
  getTransitionProps,
  createTransitions,
} from '@bifrostui/utils';
import { Transition } from '../Transition';
import { CollapseProps } from './Collapse.types';
import './Collapse.less';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const FIT_CONTENT = 'fit-content';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Collapse = React.forwardRef<HTMLElement, CollapseProps>((props, ref) => {
  const {
    appear = false,
    in: inProp,
    easing: easingProp = defaultEasing,
    direction = 'vertical',
    timeout = defaultTimeout,
    delay = 0,
    collapsedSize: collapsedSizeProp = 0,
    style,
    className,
    children,
    ...other
  } = props;

  const wrapperRef = useRef(null);
  const collapseRef = useForkRef(wrapperRef, ref);
  const transitions = createTransitions();
  const isHorizontal = direction === 'horizontal';
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const size = isHorizontal ? 'width' : 'height';

  const getCollapseWrapperSize = (reactNode) => {
    return reactNode
      ? `${reactNode[isHorizontal ? 'clientWidth' : 'clientHeight']}px`
      : FIT_CONTENT;
  };

  useEffect(() => {
    // 修复未挂载时获取不到children元素宽高，动画异常
    if (
      appear === false &&
      inProp === true &&
      wrapperRef.current?.style?.[size] === FIT_CONTENT
    ) {
      wrapperRef.current.style[size] = getCollapseWrapperSize(
        wrapperRef.current?.children?.[0],
      );
    }
  }, [appear, inProp, size]);

  // 监听 children 内容变化，重新计算尺寸（无动画）
  useEffect(() => {
    // 只有在展开状态且DOM已渲染时才重新计算尺寸
    if (inProp && wrapperRef.current) {
      // 先计算新的尺寸
      const newSize = getCollapseWrapperSize(wrapperRef.current?.children?.[0]);

      // 如果尺寸发生变化，则更新（无动画）
      if (
        newSize !== FIT_CONTENT &&
        wrapperRef.current.style[size] !== newSize
      ) {
        // 临时禁用 transition
        const currentTransition = wrapperRef.current.style.transition;
        const currentWebKitTransition =
          wrapperRef.current.style.WebkitTransition;

        wrapperRef.current.style.transition = 'none';
        wrapperRef.current.style.WebkitTransition = 'none';

        // 设置新尺寸
        wrapperRef.current.style[size] = newSize;

        // 恢复 transition 设置
        wrapperRef.current.style.transition = currentTransition;
        wrapperRef.current.style.WebkitTransition = currentWebKitTransition;
      }
    }
  }, [children]); // 依赖 children 来检测内容变化

  if (!children) return null;

  return (
    <Transition
      {...other}
      in={inProp}
      timeout={timeout}
      delay={delay}
      appear={appear}
    >
      {(state, childProps) => {
        // 修复：当 enter=false 或 exit=false 时禁用对应的动画
        const shouldAnimate = (() => {
          if (state === 'entering' || state === 'entered') {
            return other.enter !== false;
          }
          if (state === 'exiting' || state === 'exited') {
            return other.exit !== false;
          }
          return true;
        })();

        const transition = shouldAnimate
          ? transitions.create(
              size,
              getTransitionProps(
                { timeout, style, easing: easingProp, delay },
                { mode: state },
              ),
            )
          : 'none';

        const wrapperSize = () => {
          const collapseWrapperSize =
            state === 'entering' || state === 'entered'
              ? getCollapseWrapperSize(wrapperRef.current?.children?.[0])
              : collapsedSize;
          return isHorizontal
            ? {
                width: collapseWrapperSize,
                WebKitWidth: collapseWrapperSize,
              }
            : {
                height: collapseWrapperSize,
                WebKitHeight: collapseWrapperSize,
              };
        };

        return React.createElement(
          'div',
          {
            className: `bui-collapse ${className || ''}`,
            style: {
              ...style,
              transition,
              WebkitTransition: transition,
              ...wrapperSize(),
            },
            ...childProps,
            ref: collapseRef,
          },
          React.cloneElement(children, {
            style: {
              ...children.props?.style,
            },
            ...childProps,
          }),
        );
      }}
    </Transition>
  );
});
Collapse.displayName = 'BuiCollapse';

export default Collapse;
