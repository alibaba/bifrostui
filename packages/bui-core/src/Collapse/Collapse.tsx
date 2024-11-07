import React, { useEffect, useRef } from 'react';
import {
  useForkRef,
  duration,
  easing,
  getTransitionProps,
  createTransitions,
} from '@bifrostui/utils';
import { Transition } from '../Transition';
import './Collapse.less';
import { CollapseProps } from './Collapse.types';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Collapse = React.forwardRef<unknown, CollapseProps>((props, ref) => {
  const {
    appear,
    in: inProp,
    easing: easingProp,
    orientation,
    timeout,
    delay,
    collapsedSize: collapsedSizeProp,
    style,
    children,
    ...other
  } = props;
  // @ts-expect-error will upstream fix
  const nodeRef = useForkRef(ref, children?.ref);
  const wrapperRef = useRef(null);
  const transitions = createTransitions();
  const isHorizontal = orientation === 'horizontal';
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const size = isHorizontal ? 'width' : 'height';

  const getCollapseWrapperSize = (reactNode) => {
    return reactNode
      ? `${reactNode[isHorizontal ? 'clientWidth' : 'clientHeight']}px`
      : 'fit-content';
  };

  useEffect(() => {
    // 修复未挂载时获取不到children元素宽高，动画异常
    if (
      appear === false &&
      inProp === true &&
      wrapperRef.current.style[size] === 'fit-content'
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
      ref={nodeRef}
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
            className: 'bui-collapse',
            style: {
              transition,
              WebkitTransition: transition,
              ...wrapperSize(),
            },
            ref: wrapperRef,
          },
          React.cloneElement(children, {
            style: {
              ...style,
              ...children.props.style,
            },
            ...childProps,
          }),
        );
      }}
    </Transition>
  );
});
Collapse.displayName = 'BuiCollapse';
Collapse.defaultProps = {
  appear: false,
  easing: defaultEasing,
  timeout: defaultTimeout,
  delay: 0,
  orientation: 'vertical',
  collapsedSize: '0',
};
export default Collapse;
