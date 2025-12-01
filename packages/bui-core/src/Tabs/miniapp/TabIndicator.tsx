import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
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
  left: number; // 相对于wrapper左边的位置
  width: number;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  currentValue,
  registeredTabValues,
  wrapperId,
  scrollViewId,
  registrationVersion,
}) => {
  const [transform, setTransform] = useState('translate(0px, 0px)');
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const positionCacheRef = useRef<Map<string, TabPositionCache>>(new Map());
  const containerInfoRef = useRef<{
    width: number;
    scrollWidth: number;
  } | null>(null);
  const indicatorWidthRef = useRef<number>(24); // 默认指示器宽度
  const isInitializedRef = useRef(false);
  const initRetryCountRef = useRef(0);
  const maxInitRetries = 5;

  // 快速更新指示器位置（使用缓存）
  const updateIndicatorPosition = useEventCallback(() => {
    if (!currentValue || !registeredTabValues.includes(currentValue)) {
      setVisibility('hidden');
      return;
    }

    const cachedPosition = positionCacheRef.current.get(currentValue);
    const containerInfo = containerInfoRef.current;

    if (!cachedPosition || !containerInfo) {
      // 缓存未准备好，触发初始化
      if (!isInitializedRef.current) {
        // eslint-disable-next-line no-use-before-define
        initializePositions();
      }
      return;
    }

    // 使用缓存的位置信息计算
    const activeTabLeft = cachedPosition.left;
    const activeTabWidth = cachedPosition.width;
    const indicatorWidth = indicatorWidthRef.current;
    const x = activeTabLeft + (activeTabWidth - indicatorWidth) / 2;

    // 立即更新位置，无延迟
    setTransform(`translate(${x}px, 0px)`);
    setVisibility('visible');
  });

  // 初始化：批量查询所有Tab和容器信息并缓存
  const initializePositions = useEventCallback(async () => {
    try {
      // ⚠️ 性能优化：使用批量查询，一次性获取所有DOM信息
      const result = await batchQueryTabs({
        scrollViewId,
        wrapperId,
        tabValues: registeredTabValues,
      });

      const { scrollView, scrollFields, wrapper, indicator, tabs } = result;

      // 基础验证
      if (!scrollView || !wrapper || !indicator || !scrollFields) {
        if (initRetryCountRef.current < maxInitRetries) {
          initRetryCountRef.current += 1;

          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }
          animationTimerRef.current = setTimeout(() => {
            initializePositions();
          }, 100);
        }

        return;
      }

      // 缓存容器信息（使用ScrollView的尺寸作为视口）
      containerInfoRef.current = {
        width: scrollView.width,
        scrollWidth: scrollFields.scrollWidth || scrollView.width,
      };

      // 缓存指示器宽度
      indicatorWidthRef.current = indicator.width;

      // 缓存所有Tab的位置
      // ✅ 关键：Indicator和Tab都在wrapper内部，一起随ScrollView滚动
      // 所以缓存相对于wrapper的位置即可，不需要考虑scrollLeft
      const newCache = new Map<string, TabPositionCache>();

      registeredTabValues.forEach((value, index) => {
        const tabRect = tabs[index];

        if (tabRect && tabRect.width > 0) {
          // ✅ Tab相对于wrapper的位置
          const relativeLeft = tabRect.left - wrapper.left;

          newCache.set(value, {
            left: relativeLeft,
            width: tabRect.width,
          });
        }
      });

      // 验证缓存的完整性
      if (newCache.size < registeredTabValues.length) {
        if (initRetryCountRef.current < maxInitRetries) {
          initRetryCountRef.current += 1;

          // 缓存不完整，重试
          if (animationTimerRef.current) {
            clearTimeout(animationTimerRef.current);
          }
          animationTimerRef.current = setTimeout(() => {
            initializePositions();
          }, 100);
        }

        return;
      }

      // 成功，重置重试计数
      initRetryCountRef.current = 0;
      positionCacheRef.current = newCache;

      isInitializedRef.current = true;

      // 初始化完成后立即更新指示器位置
      updateIndicatorPosition();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[TabIndicator] 批量查询失败:', error);
    }
  });

  // 当 Tab 注册状态变化时，重新初始化缓存
  useEffect(() => {
    if (registeredTabValues.length === 0) {
      return undefined;
    }

    // 清除之前的定时器
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }

    // 标记需要重新初始化
    isInitializedRef.current = false;
    // 重置重试计数
    initRetryCountRef.current = 0;

    // 使用 nextTick 确保 DOM 渲染完成
    Taro.nextTick(() => {
      initializePositions();
    });

    return () => {
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }
    };
  }, [registrationVersion, initializePositions]);

  // 当 currentValue 变化时，立即更新指示器位置（使用缓存）
  useEffect(() => {
    if (!currentValue) {
      setVisibility('hidden');
      return;
    }

    // 立即更新，无延迟
    updateIndicatorPosition();
  }, [currentValue, updateIndicatorPosition]);

  // 监听页面 resize（如屏幕旋转）
  useEffect(() => {
    const handleResize = () => {
      // resize时需要重新查询所有位置
      isInitializedRef.current = false;
      initRetryCountRef.current = 0;
      positionCacheRef.current.clear();
      Taro.nextTick(() => {
        initializePositions();
      });
    };

    // 小程序环境监听窗口尺寸变化
    Taro.onWindowResize?.(handleResize);

    return () => {
      Taro.offWindowResize?.(handleResize);
    };
  }, [initializePositions]);

  return (
    <View
      id={`${wrapperId}-indicator`}
      className={clsx(tabIndicatorClass)}
      style={{
        transition: 'transform 0.3s ease-in-out',
        transform,
        visibility,
      }}
    />
  );
};

TabIndicator.displayName = 'BuiTabsIndicator';

export default TabIndicator;
