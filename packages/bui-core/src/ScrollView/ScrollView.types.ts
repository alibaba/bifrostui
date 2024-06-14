import React from 'react';
import { OverrideProps } from '@bifrostui/types';

interface ScrollViewScrollEvent extends Event {
  detail?: {
    scrollLeft: number;
    scrollTop: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaX?: number;
    deltaY?: number;
    isDrag?: boolean;
  };
}

interface ScrollViewDragEvent extends Event {
  detail?: {
    /** 横向滚动条位置 */
    scrollLeft?: number;
    /** 竖向滚动条位置 */
    scrollTop?: number;
    /** 滚动速度 */
    velocity?: number;
  };
}

export type ScrollViewProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 允许横向滚动
       * @default false
       * @type {boolean}
       */
      scrollX?: boolean;
      /**
       * 允许纵向滚动
       * @default false
       * @type {boolean}
       */
      scrollY?: boolean;
      /**
       * 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
       * @default 50
       * @type {number}
       */
      upperThreshold?: number;
      /**
       * 距底部/右边多远时（单位px），触发 scrolltolower 事件
       * @default 50
       * @type {number}
       */
      lowerThreshold?: number;
      /**
       * 设置竖向滚动条位置
       * @type {number}
       */
      scrollTop?: number;
      /**
       * 设置横向滚动条位置
       * @type {number}
       */
      scrollLeft?: number;
      /**
       * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
       * @type {string}
       */
      scrollIntoView?: string;
      /**
       * 在设置滚动条位置时使用动画过渡
       * @default false
       * @type {boolean}
       */
      scrollWithAnimation?: boolean;
      /** 指定 scroll-into-view 目标节点在视口内的位置。
       * start - 目标节点显示在视口开始处
       * center - 目标节点显示在视口中间
       * end - 目标节点显示在视口结束处
       * nearest - 目标节点在就近的视口边缘显示，若节点已在视口内则不触发滚动
       * @default 'start'
       */
      scrollIntoViewAlignment?: ScrollLogicalPosition;
      /**
       * 滚动条返回顶部，只支持竖向
       * @default false
       * @type {boolean}
       */
      enableBackToTop?: boolean;
      /** 启用 flexbox 布局。开启后，当前节点声明了 `display: flex` 就会成为 flex container，并作用于其孩子节点。
       * 仅小程序可用
       * @default false
       */
      enableFlex?: boolean;

      /** 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS `overflow-anchor` 属性。
       * 仅小程序可用
       * @default false
       */
      scrollAnchoring?: boolean;
      /** 开启自定义下拉刷新
       * 仅小程序可用
       * @default false
       */
      refresherEnabled?: boolean;

      /** 设置自定义下拉刷新默认样式，支持设置 `black | white | none`， none 表示不使用默认样式
       * 仅小程序可用
       * @default 'black'
       */
      refresherDefaultStyle?: string;
      /** 设置自定义下拉刷新区域背景颜色
       * 仅小程序可用
       * @default '#FFF'
       */
      refresherBackground?: string;
      /** 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
       * 仅小程序可用
       * @default false
       */
      refresherTriggered?: boolean;
      /** 启用 scroll-view 增强特性
       * 仅小程序可用
       * @default false
       */
      enhanced?: boolean;
      /** iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       * @default true
       */
      bounces?: boolean;
      /** 滚动条显隐控制 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       * @default true
       */
      showScrollbar?: boolean;
      /** 分页滑动效果 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       * @default false
       */
      pagingEnabled?: boolean;
      /** boolean	false	滑动减速速率控制 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       * @default false
       */
      fastDeceleration?: boolean;
      /** 当 scroll-with-animation设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位 ms。
       * 仅小程序可用
       */
      scrollAnimationDuration?: number;
      /** 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。
       * 仅小程序可用
       * @default false
       */
      trapScroll?: string;
      /** 发生滚动前，对滚动方向进行判断，当方向是顶部/左边时，如果值为always将始终禁止滚动，如果值为out-of-bounds 且当前已经滚动到顶部/左边，禁止滚动。
       * 仅小程序可用
       */
      disableLowerScroll?: string;
      /** 发生滚动前，对滚动方向进行判断，当方向是底部/右边时，如果值为always将始终禁止滚动，如果值为out-of-bounds 且当前已经滚动到底部/右边，禁止滚动。
       * 仅小程序可用
       */
      disableUpperScroll?: string;
      /** 无障碍访问，（属性）元素的额外描述
       * 仅小程序可用
       */
      ariaLabel?: string;
      /** 开启 passive 特性，能优化一定的滚动性能
       * 仅小程序可用
       * @default false
       */
      enablePassive?: string;
      /** 渲染模式
       * list - 列表模式。只会渲染在屏节点，会根据直接子节点是否在屏来按需渲染，若只有一个直接子节点则性能会退化
       * custom - 自定义模式。只会渲染在屏节点，子节点可以是 sticky-section list-view grid-view 等组件
       * 仅小程序可用
       * @default 'list'
       */
      type?: 'list' | 'custom';
      /** 是否反向滚动。一般初始滚动位置是在顶部，反向滚动则是在底部。
       * 仅小程序可用
       * @default false
       */
      reverse?: boolean;
      /** 指定视口外渲染区域的距离，默认情况下视口外节点不渲染。指定 cache-extent 可优化滚动体验和加载速度，但会提高内存占用且影响首屏速度，可按需启用。
       * 仅小程序可用
       */
      cacheExtent?: number;
      /** 只 scroll-into-view 到 cacheExtent 以内的目标节点，性能更佳
       * 仅小程序可用
       * @default false
       */
      scrollIntoViewWithinExtent?: boolean;
      /**
       * 滚动到顶部/左边，会触发 scrolltoupper 事件
       */
      onScrollToUpper?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /**
       * 滚动到底部/右边，会触发 scrolltolower 事件
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
       * 触摸后移动
       */
      onTouchMove?: (
        e: React.SyntheticEvent<HTMLDivElement, TouchEvent>,
      ) => void;
      /** 滚动开始事件
       * 仅小程序可用
       */
      onScrollStart?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewScrollEvent>,
      ) => void;
      /** 滚动结束事件
       * 仅小程序可用
       */
      onScrollEnd?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewScrollEvent>,
      ) => void;
      /** 自定义下拉刷新控件被下拉
       * 仅小程序可用
       */
      onRefresherPulling?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /** 自定义下拉刷新被触发
       * 仅小程序可用
       */
      onRefresherRefresh?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /** 自定义下拉刷新被复位
       * 仅小程序可用
       */
      onRefresherRestore?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /** 自定义下拉刷新被中止
       * 仅小程序可用
       */
      onRefresherAbort?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /** 自定义下拉刷新即将触发刷新（拖动超过 refresher-threshold 时）的事件
       * 仅小程序可用
       */
      onRefresherWillRefresh?: (
        e: React.SyntheticEvent<HTMLDivElement, Event>,
      ) => void;
      /** 滑动开始事件 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       */
      onDragStart?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewDragEvent>,
      ) => void;
      /** 滑动事件 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       */
      onDragging?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewDragEvent>,
      ) => void;
      /** 滑动结束事件 (同时开启 enhanced 属性后生效)
       * 仅小程序可用
       */
      onDragEnd?: (
        e: React.SyntheticEvent<HTMLDivElement, ScrollViewDragEvent>,
      ) => void;
      /** 触摸动作开始。
       * 仅小程序可用
       */
      onTouchStart?: (
        e: React.SyntheticEvent<HTMLDivElement, TouchEvent>,
      ) => void;
      /** 触摸动作结束。
       * 仅小程序可用
       */
      onTouchEnd?: (
        e: React.SyntheticEvent<HTMLDivElement, TouchEvent>,
      ) => void;
      /** 触摸动作被打断，如来电提醒、弹窗。
       * 仅小程序可用
       */
      onTouchCancel?: (
        e: React.SyntheticEvent<HTMLDivElement, TouchEvent>,
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
