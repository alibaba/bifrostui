import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { debounce, isMini, useEventCallback } from '@bifrostui/utils';
import scrollLeftTo from './utils/scroll';

const rootClass = 'bui-tabs';
const duration = 300;

export interface TabIndicatorProps {
  /** 当前选中的 tab 值 */
  currentValue: string;
  /** 已注册的 tabs 引用映射表 */
  registeredTabs: React.MutableRefObject<
    Record<string, React.RefObject<HTMLElement>>
  >;
  /** tabs 容器的引用 */
  tabsContainerRef: React.RefObject<HTMLDivElement>;
  /** 注册版本号，每次 tab 注册/取消注册时递增 */
  registrationVersion: number;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentValue,
  registeredTabs,
  tabsContainerRef,
  registrationVersion,
}) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  // Track if this is the first render to disable animation on mount
  const isFirstRender = useRef(true);

  // 通过注册表获取活动 Tab 元素
  const getActiveTabElement = useEventCallback(
    (activeValue: string): HTMLDivElement | undefined => {
      const tabRef = registeredTabs.current[activeValue];
      return tabRef?.current as HTMLDivElement | undefined;
    },
  );

  // 将活动 tab 滚动到视图中心
  const scrollIntoView = useEventCallback(
    (activeTab: HTMLDivElement, animate = true) => {
      const tabsEl = tabsContainerRef.current;
      if (!tabsEl || !activeTab) {
        return;
      }

      scrollLeftTo(
        tabsEl,
        activeTab.offsetLeft - (tabsEl.offsetWidth - activeTab.offsetWidth) / 2,
        animate ? duration : 0,
      );
    },
  );

  // 动画函数：更新指示器位置
  const animate = useEventCallback(() => {
    const tabsEl = tabsContainerRef.current;
    if (!tabsEl) return;

    const indicator = indicatorRef.current;
    if (!indicator) return;

    const activeTab = getActiveTabElement(currentValue);

    // 直接操作 DOM，避免 setState 导致的额外渲染
    if (activeTab) {
      const activeTabLeft = activeTab.offsetLeft;
      const activeTabWidth = activeTab.offsetWidth;
      const containerWidth = tabsEl.offsetWidth;
      const containerScrollWidth = tabsEl.scrollWidth;
      const activeLineWidth = indicator.offsetWidth;
      const x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2;

      // 设置位置
      indicator.style.transform = `translate(${x}px, 0px)`;
      indicator.style.visibility = 'visible';

      const maxScrollDistance = containerScrollWidth - containerWidth;
      if (maxScrollDistance > 0 && !isMini) {
        // 首次渲染时不启用滚动动画
        scrollIntoView(activeTab, !isFirstRender.current);
      }

      // 首次渲染后，启用过渡动画（在设置位置之后）
      // 这样可以确保下一次位置变化时才会有动画，而不是当前这次
      if (isFirstRender.current) {
        isFirstRender.current = false;
        requestAnimationFrame(() => {
          if (indicator) {
            indicator.style.transition = 'transform 0.3s ease-in-out';
          }
        });
      }
    } else {
      // 没有 active tab 时隐藏 indicator
      indicator.style.visibility = 'hidden';
    }
  });

  // 使用 useEffect 确保在所有 Tab 的 useEffect 注册完成后再执行动画
  // 执行顺序：子组件 useEffect -> 父组件 useEffect，保证 tabs 已注册
  useEffect(() => {
    animate();
  }, [animate, currentValue, registrationVersion]);

  // 处理窗口 resize 事件
  useEffect(() => {
    const handleResize = debounce(() => {
      animate();
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [animate]);

  return (
    <div
      ref={indicatorRef}
      className={clsx(`${rootClass}-indicator`)}
      style={{
        transition: 'none',
        transform: 'translate(0px, 0px)',
        visibility: 'hidden',
      }}
      aria-hidden="true"
    />
  );
};

TabIndicator.displayName = 'BuiTabsIndicator';

export default TabIndicator;
