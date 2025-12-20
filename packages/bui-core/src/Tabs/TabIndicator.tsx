import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { debounce, isMini, useEventCallback } from '@bifrostui/utils';
import scrollLeftTo from './utils/scroll';

const rootClass = 'bui-tabs';
const duration = 300;
const DEFAULT_INDICATOR_WIDTH = 24;

export interface TabIndicatorProps {
  /** 当前选中的 tab 值 */
  currentValue: string;
  /** 已注册的 tabs 引用映射表 */
  registeredTabs: React.MutableRefObject<
    Record<string, React.RefObject<HTMLElement>>
  >;
  /** tabs 容器的引用 */
  tabsContainerRef: React.RefObject<HTMLDivElement>;
}

type IndicatorStyle = React.CSSProperties & {
  left: number;
};

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentValue,
  registeredTabs,
  tabsContainerRef,
}) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const hasRenderedOnce = useRef(false);
  const indicatorWidthCache = useRef<number | null>(null);

  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle | null>(
    null,
  );

  const getActiveTabElement = useEventCallback(
    (activeValue: string): HTMLDivElement | undefined => {
      const tabRef = registeredTabs.current[activeValue];
      return tabRef?.current as HTMLDivElement | undefined;
    },
  );

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

  const getIndicatorWidth = useEventCallback(() => {
    if (indicatorWidthCache.current !== null) {
      return indicatorWidthCache.current;
    }

    const indicator = indicatorRef.current;
    if (!indicator) return DEFAULT_INDICATOR_WIDTH;

    const cssValue = getComputedStyle(indicator).getPropertyValue(
      '--bui-tabs-indicator-width',
    );
    const parsed = Number.parseFloat(cssValue);
    const width = Number.isNaN(parsed) ? DEFAULT_INDICATOR_WIDTH : parsed;
    indicatorWidthCache.current = width;
    return width;
  });

  const getTabsMeta = useEventCallback(() => {
    const tabsNode = tabsContainerRef.current;
    let tabsMeta: {
      scrollLeft: number;
      left: number;
      clientWidth: number;
      scrollWidth: number;
    } | null = null;

    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollWidth: tabsNode.scrollWidth,
        left: rect.left,
      };
    }

    let tabMeta: { left: number; width: number } | null = null;
    const activeTab = getActiveTabElement(currentValue);
    if (activeTab) {
      tabMeta = activeTab.getBoundingClientRect();
    }

    return { tabsMeta, tabMeta };
  });

  const updateIndicatorState = useEventCallback(() => {
    const { tabsMeta, tabMeta } = getTabsMeta();

    if (!tabMeta || !tabsMeta) {
      setIndicatorStyle(null);
      return;
    }

    const tabLeft = tabMeta.left - tabsMeta.left + tabsMeta.scrollLeft;
    const tabWidth = tabMeta.width;
    const indicatorWidth = getIndicatorWidth();
    const leftPosition = tabLeft + (tabWidth - indicatorWidth) / 2;

    const newIndicatorStyle: IndicatorStyle = {
      left: leftPosition,
    };

    if (indicatorStyle === null) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dLeft = Math.abs(indicatorStyle.left - newIndicatorStyle.left);
      if (dLeft >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }

    const activeTab = getActiveTabElement(currentValue);
    if (activeTab) {
      const maxScrollDistance = tabsMeta.scrollWidth - tabsMeta.clientWidth;
      if (maxScrollDistance > 0 && !isMini) {
        scrollIntoView(activeTab, hasRenderedOnce.current);
      }
      hasRenderedOnce.current = true;
    }
  });

  // Make sure indicator is always synced to deal with edge cases
  // like font changed or tab content changed
  useEffect(() => {
    updateIndicatorState();
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      indicatorWidthCache.current = null;
      updateIndicatorState();
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState]);

  if (!indicatorStyle) {
    return null;
  }

  return (
    <div
      ref={indicatorRef}
      className={clsx(`${rootClass}-indicator`)}
      style={indicatorStyle}
      aria-hidden="true"
    />
  );
};

TabIndicator.displayName = 'BuiTabsIndicator';

export default TabIndicator;
