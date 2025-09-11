import React from 'react';
import { OverrideProps } from '@bifrostui/types';

/**
 * 滚动事件详情
 */
export interface ScrollViewScrollEvent extends Event {
  detail?: {
    scrollLeft: number;
    scrollTop: number;
    scrollHeight: number;
    scrollWidth: number;
  };
}

/**
 * ScrollIntoView 对齐方式
 */
export type ScrollIntoViewAlignment = 'start' | 'center' | 'end' | 'nearest';

/**
 * ScrollView 组件属性
 */
export type ScrollViewProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      // ========== 基础滚动控制 ==========
      /**
       * 允许横向滚动
       * @default false
       */
      scrollX?: boolean;
      /**
       * 允许纵向滚动
       * @default false
       */
      scrollY?: boolean;

      // ========== 滚动位置控制 ==========
      /**
       * 设置竖向滚动条位置
       */
      scrollTop?: number;
      /**
       * 设置横向滚动条位置
       */
      scrollLeft?: number;
      /**
       * 滚动到指定元素（元素id，不能以数字开头）
       */
      scrollIntoView?: string;
      /**
       * 指定 scroll-into-view 目标节点在视口内的位置
       * @default 'start'
       */
      scrollIntoViewAlignment?: ScrollIntoViewAlignment;
      /**
       * 在设置滚动条位置时使用动画过渡
       * @default false
       */
      scrollWithAnimation?: boolean;

      // ========== 滚动阈值控制 ==========
      /**
       * 距顶部/左边多远时（单位px），触发 onScrollToUpper 事件
       * @default 50
       */
      upperThreshold?: number;
      /**
       * 距底部/右边多远时（单位px），触发 onScrollToLower 事件
       * @default 50
       */
      lowerThreshold?: number;

      // ========== 事件回调 ==========
      /**
       * 滚动到顶部/左边时触发
       */
      onScrollToUpper?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /**
       * 滚动到底部/右边时触发
       */
      onScrollToLower?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /**
       * 滚动时触发
       */
      onScroll?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewScrollEvent>,
      ) => void;
      /**
       * 触摸移动时触发
       */
      onTouchMove?: (
        e: React.SyntheticEvent<HTMLDivElement, TouchEvent>,
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
