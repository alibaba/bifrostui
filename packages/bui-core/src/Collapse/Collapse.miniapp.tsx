import React, { useEffect, useRef, useState } from 'react';
import {
  useForkRef,
  duration,
  easing,
  getTransitionProps,
  createTransitions,
  getBoundingClientRect,
} from '@bifrostui/utils';
import { Transition } from '../Transition';
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
  const [wrapperSize, setWrapperSize] = useState('');
  const transitions = createTransitions();

  const isHorizontal = direction === 'horizontal';
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const size = isHorizontal ? 'width' : 'height';

  const getCollapseWrapperSize = (reactNode) => {
    return new Promise((resolve) => {
      const reactNodeChild = reactNode?.children?.[0];

      if (!reactNodeChild) {
        resolve(FIT_CONTENT);
      }

      getBoundingClientRect(reactNodeChild).then((res) => {
        if (!res) {
          resolve(FIT_CONTENT);
          setWrapperSize(FIT_CONTENT);
        } else {
          setWrapperSize(isHorizontal ? `${res?.width}px` : `${res?.height}px`);
        }
      });
    });
  };

  useEffect(() => {
    // 修复未挂载时获取不到children元素宽高，动画异常
    if (appear === false && inProp === true && wrapperSize === FIT_CONTENT) {
      getCollapseWrapperSize(wrapperRef.current).then((res) => {
        setWrapperSize(res as string);
      });
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

        if (state === 'entering' || state === 'entered') {
          getCollapseWrapperSize(wrapperRef.current).then(
            (res = FIT_CONTENT) => {
              setWrapperSize(res as string);
            },
          );
        } else {
          setWrapperSize(collapsedSize);
        }

        return React.createElement(
          'div',
          {
            className: `bui-collapse ${className || ''}`,
            style: {
              ...style,
              transition,
              WebkitTransition: transition,
              ...(isHorizontal
                ? { width: wrapperSize, WebKitWidth: wrapperSize }
                : { height: wrapperSize, WebKitHeight: wrapperSize }),
            },
            ...childProps,
            ref: collapseRef,
          },
          React.cloneElement(children, {
            style: {
              ...children.props?.style,
            },
          }),
        );
      }}
    </Transition>
  );
});
Collapse.displayName = 'BuiCollapse';

export default Collapse;
