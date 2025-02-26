import React, { useEffect, useRef } from 'react';
import {
  useForkRef,
  duration,
  easing,
  getTransitionProps,
  createTransitions,
} from '@bifrostui/utils';
import clsx from 'clsx';
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
  }, [appear, inProp]);

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
        const transition = transitions.create(
          size,
          getTransitionProps(
            { timeout, style, easing: easingProp, delay },
            { mode: state },
          ),
        );
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
            className: clsx('bui-collapse', {
              className,
            }),
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
