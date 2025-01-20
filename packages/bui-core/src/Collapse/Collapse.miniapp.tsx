import React, { useEffect, useRef } from 'react';
import Taro from '@tarojs/taro';
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

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const FIT_CONTENT = 'fit-content';

// TODO 动画慢看下有没有优化空间
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
  const wrapperSizeRef = useRef<Record<string, any>>({
    width: FIT_CONTENT,
    height: FIT_CONTENT,
    WebKitWidth: FIT_CONTENT,
    WebKitHeight: FIT_CONTENT,
  });
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
      // TODO 使用utils getBoundingClientRect
      const query = Taro.createSelectorQuery();
      query
        .select(`.${reactNode?.props?.class} .${reactNodeChild?.props?.class}`)
        .boundingClientRect();
      query.exec((res) => {
        if (!res[0]) {
          resolve(FIT_CONTENT);
        } else {
          resolve(isHorizontal ? `${res[0]?.width}px` : `${res[0]?.height}px`);
        }
      });
    });
  };

  useEffect(() => {
    // 修复未挂载时获取不到children元素宽高，动画异常
    if (
      // TODO 判断
      appear === false &&
      inProp === true &&
      wrapperRef.current?.style?.[size] === FIT_CONTENT
    ) {
      getCollapseWrapperSize(wrapperRef.current).then((res) => {
        wrapperRef.current.style[size] = res;
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
          getCollapseWrapperSize(wrapperRef.current).then((res) => {
            wrapperSizeRef.current = isHorizontal
              ? {
                  width: res || FIT_CONTENT,
                  WebKitWidth: res || FIT_CONTENT,
                }
              : {
                  height: res || FIT_CONTENT,
                  WebKitHeight: res || FIT_CONTENT,
                };
          });
        } else {
          wrapperSizeRef.current = isHorizontal
            ? {
                width: collapsedSize,
                WebKitWidth: collapsedSize,
              }
            : {
                height: collapsedSize,
                WebKitHeight: collapsedSize,
              };
        }
        return React.createElement(
          'div',
          {
            className: `bui-collapse ${className || ''}`,
            style: {
              ...style,
              transition,
              WebkitTransition: transition,
              ...wrapperSizeRef.current,
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
