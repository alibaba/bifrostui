import { useForkRef } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
import './ScrollView.less';

import { ScrollViewProps } from './ScrollView.types';

function easeOutScroll(from, to, callback) {
  if (from === to || typeof from !== 'number') {
    return;
  }
  const change = to - from;
  const dur = 500;
  const sTime = +new Date();
  function linear(t, b, c, d) {
    return (c * t) / d + b;
  }
  const isLarger = to >= from;

  function step() {
    const stepFrom = linear(+new Date() - sTime, from, change, dur);
    if ((isLarger && stepFrom >= to) || (!isLarger && to >= stepFrom)) {
      callback?.(to);
      return;
    }
    callback?.(stepFrom);
    requestAnimationFrame(step);
  }
  step();
}

const classes = {
  root: 'bui-scroll',
};

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  (props: ScrollViewProps, ref) => {
    const {
      className,
      style = {},
      onScroll,
      onScrollToUpper,
      onScrollToLower,
      scrollTop: scrollTopProp,
      scrollLeft: scrollLeftProp,
      scrollX,
      scrollY,
      scrollIntoView,
      onTouchMove: propsOnTouchMove,
      scrollIntoViewAlignment,
      children,
    } = props;

    const container = useRef(null);
    const handleRef = useForkRef(ref, container);

    const onTouchMove = (e) => {
      // 会导致埋点工具无法正确区分滑动和点击，必须去掉。
      // e.stopPropagation();
    };

    const scrollVertical = useCallback((top, isAnimation) => {
      if (top === undefined) return;
      if (isAnimation) {
        easeOutScroll(container.current.scrollTop, top, (pos) => {
          if (container.current) container.current.scrollTop = pos;
        });
      } else if (container.current) container.current.scrollTop = top;
    }, []);

    const scrollHorizontal = useCallback((left, isAnimation) => {
      if (left === undefined) return;
      if (isAnimation) {
        easeOutScroll(container.current.scrollLeft, left, (pos) => {
          if (container.current) container.current.scrollLeft = pos;
        });
      } else if (container.current) container.current.scrollLeft = left;
    }, []);

    const handleScroll = useCallback(
      (isInit = false) => {
        const isAnimation = props?.scrollWithAnimation;
        // scrollIntoView
        if (
          scrollIntoView &&
          typeof scrollIntoView === 'string' &&
          container?.current?.querySelector?.(`#${scrollIntoView}`)
        ) {
          const doScrollIntoView = (
            id: string,
            alignment: ScrollLogicalPosition = 'start',
            _isAnimation: boolean = isAnimation,
          ) => {
            const target = container.current.querySelector(`#${id}`);
            if (scrollY) {
              const start = target.offsetTop;
              const end =
                target.offsetTop +
                target.offsetHeight -
                container.current.clientHeight;
              let nearest;
              if (container.current.scrollTop < end) nearest = end;
              else if (container.current.scrollTop > start) nearest = start;
              const center = (start + end) / 2;
              scrollVertical(
                { start, end, nearest, center }[alignment],
                _isAnimation,
              );
            }
            if (scrollX) {
              const start = target.offsetLeft;
              const end =
                target.offsetLeft +
                target.offsetWidth -
                container.current.clientWidth;
              let nearest;
              if (container.current.scrollTop < end) nearest = end;
              else if (container.current.scrollTop > start) nearest = start;
              const center = (start + end) / 2;
              scrollHorizontal(
                { start, end, nearest, center }[alignment],
                _isAnimation,
              );
            }
          };
          if (isInit) {
            setTimeout(
              () =>
                doScrollIntoView(
                  scrollIntoView,
                  scrollIntoViewAlignment,
                  isAnimation,
                ),
              500,
            );
          } else {
            doScrollIntoView(
              scrollIntoView,
              scrollIntoViewAlignment,
              isAnimation,
            );
          }
        } else {
          // Y 轴滚动
          if (
            scrollY &&
            typeof scrollTopProp === 'number' &&
            scrollTopProp !== container.current.scrollTop
          ) {
            if (isInit) {
              setTimeout(() => scrollVertical(scrollTopProp, isAnimation), 10);
            } else {
              scrollVertical(scrollTopProp, isAnimation);
            }
          }
          // X 轴滚动
          if (
            scrollX &&
            typeof scrollLeftProp === 'number' &&
            scrollLeftProp !== container.current.scrollLeft
          ) {
            if (isInit) {
              setTimeout(
                () => scrollHorizontal(scrollLeftProp, isAnimation),
                10,
              );
            } else {
              scrollHorizontal(scrollLeftProp, isAnimation);
            }
          }
        }
      },
      [scrollIntoView, scrollY, scrollTopProp, scrollX, scrollLeftProp],
    );

    useEffect(() => {
      handleScroll(true);
    }, []);

    useEffect(() => {
      handleScroll();
    }, [scrollIntoView, scrollY, scrollTopProp, scrollX, scrollLeftProp]);

    let { upperThreshold = 50, lowerThreshold = 50 } = props;
    const cls = clsx(
      classes.root,
      {
        [`${classes.root}-view-scroll-x`]: scrollX,
        [`${classes.root}-view-scroll-y`]: scrollY,
      },
      className,
    );
    upperThreshold = Number(upperThreshold);
    lowerThreshold = Number(lowerThreshold);
    const upperLowerStatus = useRef(0);
    const upperAndLower = (e) => {
      if (!container.current) return;
      const {
        offsetWidth,
        offsetHeight,
        scrollLeft,
        scrollTop,
        scrollHeight,
        scrollWidth,
      } = container.current;
      if (
        onScrollToLower &&
        ((scrollY &&
          offsetHeight + scrollTop + lowerThreshold >= scrollHeight) ||
          (scrollX && offsetWidth + scrollLeft + lowerThreshold >= scrollWidth))
      ) {
        if (upperLowerStatus.current !== -1) onScrollToLower(e);
        upperLowerStatus.current = -1;
      } else if (
        onScrollToUpper &&
        ((scrollY && scrollTop <= upperThreshold) ||
          (scrollX && scrollLeft <= upperThreshold))
      ) {
        if (upperLowerStatus.current !== 1) onScrollToUpper(e);
        upperLowerStatus.current = 1;
      } else {
        upperLowerStatus.current = 0;
      }
    };
    const onScrollHandler = (e) => {
      const { scrollLeft, scrollTop, scrollHeight, scrollWidth } =
        container.current;
      // container.current.scrollLeft = scrollLeft;
      // container.current.scrollTop = scrollTop;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        writable: true,
        value: {
          scrollLeft,
          scrollTop,
          scrollHeight,
          scrollWidth,
        },
      });
      upperAndLower(e);
      onScroll?.(e);
    };
    const onTouchMoveHandler = (e) => {
      (propsOnTouchMove || onTouchMove)?.(e);
    };

    return (
      <div
        ref={handleRef}
        style={style}
        className={cls}
        onScroll={onScrollHandler}
        onTouchMove={onTouchMoveHandler}
      >
        {children}
      </div>
    );
  },
);

ScrollView.displayName = 'BuiScrollView';

export default ScrollView;
