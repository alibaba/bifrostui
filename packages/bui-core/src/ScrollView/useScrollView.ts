import { useForkRef } from '@bifrostui/utils';
import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollViewProps, ScrollIntoViewAlignment } from './ScrollView.types';

function easeOutScroll(
  from: number,
  to: number,
  callback?: (pos: number) => void,
) {
  if (from === to || typeof from !== 'number') {
    return;
  }
  const change = to - from;
  const dur = 500;
  const sTime = +new Date();
  function linear(t: number, b: number, c: number, d: number) {
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

export interface UseScrollViewParameters extends ScrollViewProps {
  ref?: React.Ref<HTMLDivElement>;
}

export interface UseScrollViewReturnValue {
  getRootProps: (
    otherHandlers?: Record<string, unknown>,
  ) => Record<string, unknown>;
  containerRef: React.RefCallback<HTMLDivElement>;
}

export function useScrollView(
  parameters: UseScrollViewParameters,
): UseScrollViewReturnValue {
  const {
    ref,
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
    upperThreshold = 50,
    lowerThreshold = 50,
    scrollWithAnimation,
    ...otherProps
  } = parameters;

  const container = useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(ref, container);
  const upperLowerStatus = useRef(0);

  const onTouchMove = (_e: React.TouchEvent<HTMLDivElement>) => {
    // 会导致埋点工具无法正确区分滑动和点击，不能使用 e.stopPropagation();
  };

  const scrollVertical = useCallback((top: number, isAnimation?: boolean) => {
    if (top === undefined) return;
    if (!container.current) return;

    if (isAnimation) {
      easeOutScroll(container.current.scrollTop, top, (pos) => {
        if (container.current) container.current.scrollTop = pos;
      });
    } else {
      container.current.scrollTop = top;
    }
  }, []);

  const scrollHorizontal = useCallback(
    (left: number, isAnimation?: boolean) => {
      if (left === undefined) return;
      if (!container.current) return;

      if (isAnimation) {
        easeOutScroll(container.current.scrollLeft, left, (pos) => {
          if (container.current) container.current.scrollLeft = pos;
        });
      } else {
        container.current.scrollLeft = left;
      }
    },
    [],
  );

  const handleScroll = useCallback(
    (isInit = false) => {
      const isAnimation = scrollWithAnimation;
      // scrollIntoView
      if (
        scrollIntoView &&
        typeof scrollIntoView === 'string' &&
        container?.current?.querySelector?.(`#${scrollIntoView}`)
      ) {
        const doScrollIntoView = (
          id: string,
          alignment: ScrollIntoViewAlignment = 'start',
          _isAnimation: boolean = isAnimation,
        ) => {
          if (!container.current) return;

          const target = container.current.querySelector(
            `#${id}`,
          ) as HTMLElement;
          if (!target) return;

          if (scrollY) {
            const start = target.offsetTop;
            const end =
              target.offsetTop +
              target.offsetHeight -
              container.current.clientHeight;
            let nearest: number;
            if (container.current.scrollTop < end) nearest = end;
            else if (container.current.scrollTop > start) nearest = start;
            else nearest = container.current.scrollTop;
            const center = (start + end) / 2;
            const positions = { start, end, nearest, center };
            scrollVertical(
              positions[alignment as keyof typeof positions],
              _isAnimation,
            );
          }
          if (scrollX) {
            const start = target.offsetLeft;
            const end =
              target.offsetLeft +
              target.offsetWidth -
              container.current.clientWidth;
            let nearest: number;
            if (container.current.scrollLeft < end) nearest = end;
            else if (container.current.scrollLeft > start) nearest = start;
            else nearest = container.current.scrollLeft;
            const center = (start + end) / 2;
            const positions = { start, end, nearest, center };
            scrollHorizontal(
              positions[alignment as keyof typeof positions],
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
          container.current &&
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
          container.current &&
          scrollLeftProp !== container.current.scrollLeft
        ) {
          if (isInit) {
            setTimeout(() => scrollHorizontal(scrollLeftProp, isAnimation), 10);
          } else {
            scrollHorizontal(scrollLeftProp, isAnimation);
          }
        }
      }
    },
    [
      scrollIntoView,
      scrollY,
      scrollTopProp,
      scrollX,
      scrollLeftProp,
      scrollVertical,
      scrollHorizontal,
      scrollWithAnimation,
      scrollIntoViewAlignment,
    ],
  );

  useEffect(() => {
    handleScroll(true);
  }, []);

  useEffect(() => {
    handleScroll();
  }, [
    scrollIntoView,
    scrollY,
    scrollTopProp,
    scrollX,
    scrollLeftProp,
    handleScroll,
  ]);

  const upperAndLower = (e: React.UIEvent<HTMLDivElement>) => {
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
        offsetHeight + scrollTop + Number(lowerThreshold) >= scrollHeight) ||
        (scrollX &&
          offsetWidth + scrollLeft + Number(lowerThreshold) >= scrollWidth))
    ) {
      if (upperLowerStatus.current !== -1)
        onScrollToLower(e as React.SyntheticEvent<HTMLDivElement, Event>);
      upperLowerStatus.current = -1;
    } else if (
      onScrollToUpper &&
      ((scrollY && scrollTop <= Number(upperThreshold)) ||
        (scrollX && scrollLeft <= Number(upperThreshold)))
    ) {
      if (upperLowerStatus.current !== 1)
        onScrollToUpper(e as React.SyntheticEvent<HTMLDivElement, Event>);
      upperLowerStatus.current = 1;
    } else {
      upperLowerStatus.current = 0;
    }
  };

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    if (!container.current) return;

    const { scrollLeft, scrollTop, scrollHeight, scrollWidth } =
      container.current;

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
    onScroll?.(e as React.SyntheticEvent<HTMLDivElement, Event>);
  };

  const onTouchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    (propsOnTouchMove || onTouchMove)?.(e);
  };

  const getRootProps = useCallback(
    (rootHandlers?: Record<string, unknown>) => {
      return {
        ...otherProps,
        ...rootHandlers,
        ref: handleRef,
        onScroll: onScrollHandler,
        onTouchMove: onTouchMoveHandler,
      };
    },
    [otherProps, handleRef, onScrollHandler, onTouchMoveHandler],
  );

  return {
    getRootProps,
    containerRef: handleRef,
  };
}
