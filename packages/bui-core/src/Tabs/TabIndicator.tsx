import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { debounce, isMini, useEventCallback } from '@bifrostui/utils';
import scrollLeftTo from './utils/scroll';
import { tabIndicatorClass } from './classes';

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
    const indicator = indicatorRef.current;
    if (!indicator) return DEFAULT_INDICATOR_WIDTH;

    const rect = indicator.getBoundingClientRect();
    return rect.width > 0 ? rect.width : DEFAULT_INDICATOR_WIDTH;
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

  // Make sure indicator position is always synced to deal with edge cases
  // like font changed or tab content changed
  useEffect(() => {
    updateIndicatorState();
  });

  // Observe tabs container children for size changes
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    if (!tabsContainer) return undefined;

    const handleResize = debounce(() => {
      if (tabsContainerRef.current) {
        updateIndicatorState();
      }
    }, 100);

    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    // Observe all tab children for size changes
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabsContainer.children).forEach((child) => {
        resizeObserver?.observe(child);
      });
    }

    // Watch for child list changes
    if (typeof MutationObserver !== 'undefined') {
      const handleMutation = (records: MutationRecord[]) => {
        records.forEach((record) => {
          record.removedNodes.forEach((item) => {
            if (item instanceof Element) {
              resizeObserver?.unobserve(item);
            }
          });
          record.addedNodes.forEach((item) => {
            if (item instanceof Element) {
              resizeObserver?.observe(item);
            }
          });
        });
        handleResize();
      };
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabsContainer, { childList: true });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
    };
  }, [updateIndicatorState, tabsContainerRef]);

  if (!indicatorStyle) {
    return null;
  }

  return (
    <div
      ref={indicatorRef}
      className={clsx(tabIndicatorClass)}
      style={indicatorStyle}
      aria-hidden="true"
    />
  );
};

TabIndicator.displayName = 'BuiTabsIndicator';

export default TabIndicator;
