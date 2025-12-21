import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Taro from '@tarojs/taro';
import { useEventCallback } from '@bifrostui/utils';
import { tabIndicatorClass } from '../classes';
import { batchQueryTabs } from './utils/queryBatch';

export interface TabIndicatorProps {
  /** 当前选中的 tab 值 */
  currentValue: string;
  /** 已注册的 tabs 值数组（用于生成ID） */
  registeredTabValues: string[];
  /** wrapper 容器的 ID（Tab的父容器） */
  wrapperId: string;
  /** ScrollView 的 ID */
  scrollViewId: string;
  /** 注册版本号，每次 tab 注册/取消注册时递增 */
  registrationVersion: number;
}

interface TabPositionCache {
  left: number;
  width: number;
}

/** 检查 tab value 是否有效（允许空字符串作为有效值） */
const isValidTabValue = (value: string | undefined | null): value is string => {
  return value !== undefined && value !== null;
};

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentValue,
  registeredTabValues,
  wrapperId,
  scrollViewId,
  registrationVersion,
}) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const positionCacheRef = useRef<Map<string, TabPositionCache>>(new Map());
  const containerInfoRef = useRef<{
    width: number;
    scrollWidth: number;
  } | null>(null);
  const indicatorWidthRef = useRef<number>(24);
  const isInitializedRef = useRef(false);
  const initRetryCountRef = useRef(0);
  const maxInitRetries = 5;
  const isInitializingRef = useRef(false);
  const initVersionRef = useRef(0);
  const isMountedRef = useRef(true);

  const updateIndicatorPosition = useEventCallback(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    if (
      !isValidTabValue(currentValue) ||
      !registeredTabValues.includes(currentValue)
    ) {
      indicator.style.opacity = '0';
      return;
    }

    const cachedPosition = positionCacheRef.current.get(currentValue);
    const containerInfo = containerInfoRef.current;

    if (!cachedPosition || !containerInfo || !isInitializedRef.current) {
      if (!isInitializedRef.current) {
        // eslint-disable-next-line no-use-before-define
        initializePositions();
      }
      return;
    }

    const activeTabLeft = cachedPosition.left;
    const activeTabWidth = cachedPosition.width;
    const indicatorWidth = indicatorWidthRef.current;
    const x = activeTabLeft + (activeTabWidth - indicatorWidth) / 2;

    indicator.style.transform = `translate(${x}px, 0px)`;
    indicator.style.opacity = '1';
  });

  const initializePositions = useEventCallback(async () => {
    if (!isMountedRef.current) return;
    if (isInitializingRef.current) return;

    isInitializingRef.current = true;
    initVersionRef.current += 1;
    const currentVersion = initVersionRef.current;

    try {
      const result = await batchQueryTabs({
        scrollViewId,
        wrapperId,
        tabValues: registeredTabValues,
      });

      if (!isMountedRef.current) return;
      if (currentVersion !== initVersionRef.current) return;

      const { scrollView, scrollFields, wrapper, indicator, tabs } = result;

      if (!scrollView || !wrapper || !indicator || !scrollFields) {
        if (initRetryCountRef.current < maxInitRetries) {
          initRetryCountRef.current += 1;
          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }
          animationTimerRef.current = setTimeout(() => {
            if (!isMountedRef.current) return;
            isInitializingRef.current = false;
            initializePositions();
          }, 100);
        } else {
          isInitializingRef.current = false;
        }
        return;
      }

      if (!indicator.width || indicator.width <= 0) {
        if (initRetryCountRef.current < maxInitRetries) {
          initRetryCountRef.current += 1;
          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }
          animationTimerRef.current = setTimeout(() => {
            if (!isMountedRef.current) return;
            isInitializingRef.current = false;
            initializePositions();
          }, 100);
        } else {
          isInitializingRef.current = false;
        }
        return;
      }

      containerInfoRef.current = {
        width: scrollView.width,
        scrollWidth: scrollFields.scrollWidth || scrollView.width,
      };
      indicatorWidthRef.current = indicator.width;

      // 缓存 Tab 相对于 wrapper 的位置（Indicator 和 Tab 一起随 ScrollView 滚动）
      const newCache = new Map<string, TabPositionCache>();
      registeredTabValues.forEach((value, index) => {
        const tabRect = tabs[index];
        if (tabRect && tabRect.width > 0) {
          newCache.set(value, {
            left: tabRect.left - wrapper.left,
            width: tabRect.width,
          });
        }
      });

      if (newCache.size < registeredTabValues.length) {
        if (initRetryCountRef.current < maxInitRetries) {
          initRetryCountRef.current += 1;
          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }
          animationTimerRef.current = setTimeout(() => {
            if (!isMountedRef.current) return;
            isInitializingRef.current = false;
            initializePositions();
          }, 100);
        } else {
          isInitializingRef.current = false;
        }
        return;
      }

      if (currentVersion !== initVersionRef.current || !isMountedRef.current) {
        return;
      }

      initRetryCountRef.current = 0;
      positionCacheRef.current = newCache;
      isInitializedRef.current = true;
      isInitializingRef.current = false;

      updateIndicatorPosition();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[TabIndicator] 批量查询失败:', error);
      isInitializingRef.current = false;

      if (isMountedRef.current && initRetryCountRef.current < maxInitRetries) {
        initRetryCountRef.current += 1;
        if (animationTimerRef.current) {
          clearTimeout(animationTimerRef.current);
        }
        animationTimerRef.current = setTimeout(() => {
          if (!isMountedRef.current) return;
          initializePositions();
        }, 100);
      }
    }
  });

  // Tab 注册状态变化时重新初始化
  useEffect(() => {
    if (registeredTabValues.length === 0) {
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = '0';
      }
      return undefined;
    }

    initVersionRef.current += 1;
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    isInitializedRef.current = false;
    isInitializingRef.current = false;
    initRetryCountRef.current = 0;

    Taro.nextTick(() => {
      if (!isMountedRef.current) return;
      initializePositions();
    });

    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
      initVersionRef.current += 1;
      isInitializingRef.current = false;
    };
  }, [registrationVersion, initializePositions]);

  // currentValue 变化时更新指示器位置
  useEffect(() => {
    if (!isValidTabValue(currentValue)) {
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = '0';
      }
      return;
    }
    updateIndicatorPosition();
  }, [currentValue, updateIndicatorPosition]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMountedRef.current) return;

      initVersionRef.current += 1;
      isInitializedRef.current = false;
      isInitializingRef.current = false;
      initRetryCountRef.current = 0;
      positionCacheRef.current.clear();

      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }

      Taro.nextTick(() => {
        if (!isMountedRef.current) return;
        initializePositions();
      });
    };

    Taro.onWindowResize?.(handleResize);
    return () => {
      Taro.offWindowResize?.(handleResize);
    };
  }, [initializePositions]);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      id={`${wrapperId}-indicator`}
      className={clsx(tabIndicatorClass)}
      style={{
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
        transform: 'translate(0px, 0px)',
        opacity: 0,
      }}
    />
  );
};

TabIndicator.displayName = 'BuiTabsIndicator';

export default TabIndicator;
