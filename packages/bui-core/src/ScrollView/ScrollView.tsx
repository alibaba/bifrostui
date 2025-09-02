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
  KeyboardEvent,
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
    // 无障碍功能相关属性
    role = 'region',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    tabIndex = 0,
    autoFocus = false,
    onKeyDown: propsOnKeyDown,
    ...restProps
  } = props;

  // 过滤掉小程序特有的属性，只保留标准 HTML 属性
  const miniProgramProps = [
    'enableBackToTop',
    'enableFlex',
    'scrollAnchoring',
    'refresherEnabled',
    'refresherDefaultStyle',
    'refresherBackground',
    'refresherTriggered',
    'enhanced',
    'bounces',
    'showScrollbar',
    'pagingEnabled',
    'fastDeceleration',
    'trapScroll',
    'disableLowerScroll',
    'disableUpperScroll',
    'ariaLabel',
    'enablePassive',
    'type',
    'reverse',
    'cacheExtent',
    'scrollIntoViewWithinExtent',
    'onScrollStart',
    'onScrollEnd',
    'onRefresherPulling',
    'onRefresherRefresh',
    'onRefresherRestore',
    'onRefresherAbort',
    'onRefresherWillRefresh',
    'onDragStart',
    'onDragging',
    'onDragEnd',
    'onTouchStart',
    'onTouchEnd',
    'onTouchCancel',
  ];

  const otherProps = Object.keys(restProps).reduce(
    (acc, key) => {
      if (!miniProgramProps.includes(key)) {
        acc[key] = restProps[key];
      }
      return acc;
    },
    {} as Record<string, unknown>,
  );

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

  // 无障碍功能：键盘导航支持
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const {
        scrollTop,
        scrollLeft,
        clientHeight,
        clientWidth,
        scrollHeight,
        scrollWidth,
      } = containerRef.current;
      const step = 40; // 每次键盘滚动的步长
      const pageStep = clientHeight * 0.8; // Page Up/Down 的滚动距离

      switch (event.key) {
        case 'ArrowUp':
          if (scrollY) {
            event.preventDefault();
            scrollVertical(Math.max(0, scrollTop - step));
          }
          break;
        case 'ArrowDown':
          if (scrollY) {
            event.preventDefault();
            scrollVertical(
              Math.min(scrollHeight - clientHeight, scrollTop + step),
            );
          }
          break;
        case 'ArrowLeft':
          if (scrollX) {
            event.preventDefault();
            scrollHorizontal(Math.max(0, scrollLeft - step));
          }
          break;
        case 'ArrowRight':
          if (scrollX) {
            event.preventDefault();
            scrollHorizontal(
              Math.min(scrollWidth - clientWidth, scrollLeft + step),
            );
          }
          break;
        case 'PageUp':
          if (scrollY) {
            event.preventDefault();
            scrollVertical(Math.max(0, scrollTop - pageStep));
          }
          break;
        case 'PageDown':
          if (scrollY) {
            event.preventDefault();
            scrollVertical(
              Math.min(scrollHeight - clientHeight, scrollTop + pageStep),
            );
          }
          break;
        case 'Home':
          event.preventDefault();
          if (scrollY) {
            scrollVertical(0);
          }
          if (scrollX) {
            scrollHorizontal(0);
          }
          break;
        case 'End':
          event.preventDefault();
          if (scrollY) {
            scrollVertical(scrollHeight - clientHeight);
          }
          if (scrollX) {
            scrollHorizontal(scrollWidth - clientWidth);
          }
          break;
        case ' ': // Space key
          if (scrollY) {
            event.preventDefault();
            if (event.shiftKey) {
              // Shift + Space = Page Up
              scrollVertical(Math.max(0, scrollTop - pageStep));
            } else {
              // Space = Page Down
              scrollVertical(
                Math.min(scrollHeight - clientHeight, scrollTop + pageStep),
              );
            }
          }
          break;
        default:
          break;
      }

      // 调用用户自定义的键盘事件处理器
      propsOnKeyDown?.(event);
    },
    [scrollX, scrollY, scrollVertical, scrollHorizontal, propsOnKeyDown],
  );

  // 无障碍功能：自动获取焦点
  useEffect(() => {
    if (autoFocus && containerRef.current) {
      const timer = setTimeout(() => {
        containerRef.current?.focus();
      }, 0);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [autoFocus]);

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
      onKeyDown={handleKeyDown}
      // 无障碍功能属性
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      tabIndex={tabIndex}
      {...otherProps}
    >
      {children}
    </div>
  );
});

ScrollView.displayName = 'BuiScrollView';

export default ScrollView;
