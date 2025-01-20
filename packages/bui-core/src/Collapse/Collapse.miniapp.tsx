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

// TODO 动画慢看下有没有优化空间
const Collapse = React.forwardRef<unknown, CollapseProps>((props, ref) => {
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

  // TODO delete
  const nodeRef = useForkRef(ref);
  const wrapperRef = useRef(null);
  const collapseRef = useForkRef(wrapperRef, ref);
  const transitions = createTransitions();
  const wrapperSizeRef = useRef<Record<string, any>>({
    width: 'fit-content',
    height: 'fit-content',
    WebKitWidth: 'fit-content',
    WebKitHeight: 'fit-content',
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
        resolve('fit-content');
      }
      console.log('走到这里测试');
      // TODO 使用utils getBoundingClientRect
      const query = Taro.createSelectorQuery();
      query
        .select(`.${reactNode?.props?.class} .${reactNodeChild?.props?.class}`)
        .boundingClientRect();
      query.exec((res) => {
        console.log(res, '测试看看res');
        // TODO res[0]保护
        if (!res[0]) {
          resolve('fit-content');
        } else {
          resolve(isHorizontal ? `${res[0].width}px` : `${res[0].height}px`);
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
      wrapperRef.current?.style?.[size] === 'fit-content'
    ) {
      console.log('useEffect 测试');
      getCollapseWrapperSize(wrapperRef.current).then((res) => {
        wrapperRef.current.style[size] = res;
      });
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

        if (state === 'entering' || state === 'entered') {
          getCollapseWrapperSize(wrapperRef.current).then((res) => {
            wrapperSizeRef.current = isHorizontal
              ? {
                  // TODO 抽变量 fit-content
                  width: res || 'fit-content',
                  WebKitWidth: res || 'fit-content',
                }
              : {
                  height: res || 'fit-content',
                  WebKitHeight: res || 'fit-content',
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
        console.log(collapseRef, '测试看看ref');
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
            ref: collapseRef,
          },
          React.cloneElement(children, {
            style: {
              ...children.props?.style,
            },
            // TODO 透传到div & check
            ...childProps,
          }),
        );
      }}
    </Transition>
  );
});
Collapse.displayName = 'BuiCollapse';

export default Collapse;
