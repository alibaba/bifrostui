import { useForkRef } from '@bifrostui/utils';
import clsx from 'clsx';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  UIEvent,
  SyntheticEvent,
  TouchEvent,
} from 'react';
import './index.less';

import { ScrollViewProps, ScrollViewScrollEvent } from './ScrollView.types';

type ScrollLogicalPosition = 'start' | 'center' | 'end' | 'nearest';

/**
 * 平滑滚动动画
 * @param from 起始位置
 * @param to 结束位置
 * @param callback 每一帧的回调
 * @param duration 动画时长
 */
function easeOutScroll(
  from: number,
  to: number,
  callback: (pos: number) => void,
  duration = 500,
) {
  if (from === to || typeof from !== 'number') return;
  const change = to - from;
  const startTime = Date.now();
  const linear = (t: number, b: number, c: number, d: number) =>
    (c * t) / d + b;
  const isLarger = to >= from;

  function step() {
    const now = Date.now();
    const timeElapsed = now - startTime;

    // 如果动画结束
    if (timeElapsed >= duration) {
      callback?.(to);
      return;
    }

    const stepFrom = linear(timeElapsed, from, change, duration);

    // 防止超出目标
    if ((isLarger && stepFrom >= to) || (!isLarger && stepFrom <= to)) {
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

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>((props, ref) => {
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
    scrollIntoViewAlignment = 'start',
    children,
    scrollAnimationDuration = 500,
    scrollWithAnimation,
    upperThreshold = 50,
    lowerThreshold = 50,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(ref, containerRef);
  const upperLowerStatus = useRef(0); // 0: none, 1: upper, -1: lower

  /**
   * 垂直滚动
   * @param top 滚动到的位置
   * @param isAnimation 是否带动画
   */
  const scrollVertical = useCallback(
    (top: number, isAnimation?: boolean) => {
      if (top === undefined || !containerRef.current) return;
      if (isAnimation) {
        easeOutScroll(
          containerRef.current.scrollTop,
          top,
          (pos) => {
            if (containerRef.current) containerRef.current.scrollTop = pos;
          },
          scrollAnimationDuration,
        );
      } else {
        containerRef.current.scrollTop = top;
      }
    },
    [scrollAnimationDuration],
  );

  /**
   * 水平滚动
   * @param left 滚动到的位置
   * @param isAnimation 是否带动画
   */
  const scrollHorizontal = useCallback(
    (left: number, isAnimation?: boolean) => {
      if (left === undefined || !containerRef.current) return;
      if (isAnimation) {
        easeOutScroll(
          containerRef.current.scrollLeft,
          left,
          (pos) => {
            if (containerRef.current) containerRef.current.scrollLeft = pos;
          },
          scrollAnimationDuration,
        );
      } else {
        containerRef.current.scrollLeft = left;
      }
    },
    [scrollAnimationDuration],
  );

  /**
   * 核心滚动处理：处理滚动到指定元素或位置
   * @param isInit 是否为初始渲染
   */
  const handleScroll = useCallback(
    (isInit = false) => {
      if (!containerRef.current) return;
      const isAnimation = !!scrollWithAnimation;

      // scrollIntoView 优先
      if (
        scrollIntoView &&
        typeof scrollIntoView === 'string' &&
        containerRef.current.querySelector?.(`#${scrollIntoView}`)
      ) {
        const doScrollIntoView = (
          id: string,
          alignment: ScrollLogicalPosition,
          animation: boolean,
        ) => {
          const target = containerRef.current?.querySelector(
            `#${id}`,
          ) as HTMLElement;
          if (!target) return;

          if (scrollY) {
            const start = target.offsetTop;
            const end =
              target.offsetTop +
              target.offsetHeight -
              containerRef.current.clientHeight;
            const center = (start + end) / 2;
            let nearest = start;
            if (
              Math.abs(containerRef.current.scrollTop - start) >
              Math.abs(containerRef.current.scrollTop - end)
            ) {
              nearest = end;
            }
            scrollVertical(
              { start, end, nearest, center }[alignment],
              animation,
            );
          }
          if (scrollX) {
            const start = target.offsetLeft;
            const end =
              target.offsetLeft +
              target.offsetWidth -
              containerRef.current.clientWidth;
            const center = (start + end) / 2;
            let nearest = start;
            if (
              Math.abs(containerRef.current.scrollLeft - start) >
              Math.abs(containerRef.current.scrollLeft - end)
            ) {
              nearest = end;
            }
            scrollHorizontal(
              { start, end, nearest, center }[alignment],
              animation,
            );
          }
        };

        const timeout = isInit ? 500 : 0;
        setTimeout(
          () =>
            doScrollIntoView(
              scrollIntoView,
              scrollIntoViewAlignment,
              isAnimation,
            ),
          timeout,
        );
      } else {
        const timeout = isInit ? 10 : 0;
        // Y轴滚动
        if (
          scrollY &&
          typeof scrollTopProp === 'number' &&
          scrollTopProp !== containerRef.current.scrollTop
        ) {
          setTimeout(() => scrollVertical(scrollTopProp, isAnimation), timeout);
        }
        // X轴滚动
        if (
          scrollX &&
          typeof scrollLeftProp === 'number' &&
          scrollLeftProp !== containerRef.current.scrollLeft
        ) {
          setTimeout(
            () => scrollHorizontal(scrollLeftProp, isAnimation),
            timeout,
          );
        }
      }
    },
    [
      scrollIntoView,
      scrollIntoViewAlignment,
      scrollWithAnimation,
      scrollX,
      scrollY,
      scrollHorizontal,
      scrollVertical,
      scrollLeftProp,
      scrollTopProp,
    ],
  );

  useEffect(() => {
    handleScroll(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  /**
   * 检查是否滚动到顶部或底部阈值
   * @param e 滚动事件
   */
  const checkUpperAndLower = (e: UIEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const {
      offsetWidth,
      offsetHeight,
      scrollLeft,
      scrollTop,
      scrollHeight,
      scrollWidth,
    } = containerRef.current;

    const upThreshold = Number(upperThreshold);
    const lowThreshold = Number(lowerThreshold);

    if (
      onScrollToLower &&
      ((scrollY && offsetHeight + scrollTop + lowThreshold >= scrollHeight) ||
        (scrollX && offsetWidth + scrollLeft + lowThreshold >= scrollWidth))
    ) {
      if (upperLowerStatus.current !== -1) {
        onScrollToLower(e);
        upperLowerStatus.current = -1;
      }
    } else if (
      onScrollToUpper &&
      ((scrollY && scrollTop <= upThreshold) ||
        (scrollX && scrollLeft <= upThreshold))
    ) {
      if (upperLowerStatus.current !== 1) {
        onScrollToUpper(e);
        upperLowerStatus.current = 1;
      }
    } else {
      upperLowerStatus.current = 0;
    }
  };

  /**
   * 滚动事件处理器
   * @param e UIEvent
   */
  const onScrollHandler = (e: UIEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollTop, scrollHeight, scrollWidth } =
      containerRef.current;

    // 为了与小程序行为对齐，动态给事件添加 detail 属性
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      writable: true,
      value: { scrollLeft, scrollTop, scrollHeight, scrollWidth },
    });

    checkUpperAndLower(e);
    onScroll?.(
      e as unknown as SyntheticEvent<HTMLDivElement, ScrollViewScrollEvent>,
    );
  };

  /**
   * 触摸移动事件处理器
   * @param e TouchEvent
   */
  const onTouchMoveHandler = (e: TouchEvent<HTMLDivElement>) => {
    propsOnTouchMove?.(e);
  };

  const cls = clsx(
    classes.root,
    {
      [`${classes.root}-view-scroll-x`]: scrollX,
      [`${classes.root}-view-scroll-y`]: scrollY,
    },
    className,
  );

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
});

ScrollView.displayName = 'BuiScrollView';

export default ScrollView;
