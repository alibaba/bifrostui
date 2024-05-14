import { OverrideProps } from '@bifrostui/types';
import { SwiperProps as SwiperPropsH5 } from 'swiper/react';
import React from 'react';

export type SwiperProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P &
      SwiperPropsH5 & {
        /** 是否显示面板指示点
         * @default false
         *
         */
        indicatorDots?: boolean;
        /** 指示点颜色
         * @default "rgba(0, 0, 0, .3)"
         *
         */
        indicatorColor?: string;
        /** 当前选中的指示点颜色
         * @default "#000000"
         *
         */
        indicatorActiveColor?: string;
        /** 是否自动切换
         * @default false
         *
         */
        autoplay?: boolean;
        /** 当前所在滑块的 index
         * @default 0
         *
         */
        current?: number;
        /** 当前所在滑块的 item-id ，不能与 current 被同时指定
         * 仅小程序可用
         * @default ""
         */
        currentItemId?: string;
        /** 自动切换时间间隔
         * @default 5000
         *
         */
        interval?: number;
        /** 滑动动画时长
         * @default 500
         *
         */
        duration?: number;
        /** 是否采用衔接滑动
         * @default false
         *
         */
        circular?: boolean;
        /** 滑动方向是否为纵向
         * @default false
         *
         */
        vertical?: boolean;
        /** 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
         * @default "0px"
         *
         */
        previousMargin?: string;
        /** 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
         * @default "0px"
         *
         */
        nextMargin?: string;
        /**
         * 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素
         * @default false
         * 仅小程序可用
         */
        snapToEdge?: boolean;
        /** 同时显示的滑块数量
         * @default 1
         *
         */
        displayMultipleItems?: number;
        /** 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
         * @default false
         * 仅小程序可用
         */
        skipHiddenItemLayout?: boolean;
        /** 指定 swiper 切换缓动动画类型
         * @default "default"
         * 仅小程序可用
         */
        easingFunction?: string;
        /** 是否禁止用户 touch 操作
         * @default false
         * 仅小程序可用
         */
        disableTouch?: boolean;
        /** 是否启用缩放
         * @default false
         * 仅小程序可用
         */
        zoom?: boolean;
        /** 是否开启全屏
         * @default false
         * 仅小程序可用
         */
        full?: boolean;
        /** swiper-item 可见时的 class。
         * 仅小程序可用
         */
        activeClass?: string;
        /** acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的 class。
         * 仅小程序可用
         */
        changingClass?: string;
        /** 当开启时，会根据滑动速度，连续滑动多屏。
         * @default false
         * 仅小程序可用
         */
        acceleration?: string;
        /** 是否禁用代码变动触发 swiper 切换时使用动画。
         * @default false
         * 仅小程序可用
         */
        disableProgrammaticAnimation?: string;
        /** 滑动距离阈值，当滑动距离超过阈值时进行 swiper-item 切换。
         * 仅小程序可用
         */
        swipeRatio?: string;
        /** 滑动综合速度阈值，当超过阈值时进行 swiper-item 切换，数值越小越敏感。
         * 仅小程序可用
         */
        swipeSpeed?: string;
        /** 计算用户手势时所依赖的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高。
         * 仅小程序可用
         */
        touchAngle?: string;
        /** 自动以指定滑块的高度为整个容器的高度。当 vertical 为 true 时，默认不调整。可选值为：
         * 仅小程序可用
         */
        adjustHeight?: 'first' | 'current' | 'highest' | 'none';
        /** vertical 为 true 时强制使 adjust-height 生效。
         * 仅小程序可用
         */
        adjustVerticalHeight?: string;
        /** 是否停止响应用户 touchmove 操作
         * @default false
         * 仅小程序可用
         */
        disableTouchmove?: string;
        /** 改变 current 时使用动画过渡
         * 仅小程序可用
         * @default true
         */
        scrollWithAnimation?: boolean;
        /** 缓存区域大小，值为 1 表示提前渲染上下各一屏区域（swiper 容器大小）
         * 仅小程序可用
         * @default 0
         */
        cacheExtent?: number;
        /** current 改变时会触发 change 事件
         *
         */
        onChange?: (e: object) => void;
        /** swiper-item 的位置发生改变时会触发 transition 事件
         * 仅小程序可用
         */
        onTransition?: (e: object) => void;
        /** 动画结束时会触发 animationfinish 事件
         *
         */
        onAnimationFinish?: (e: object) => void;
        /** 动画结束时会触发 animationEnd 事件
         * 仅小程序可用
         */
        onAnimationEnd?: (e: object) => void;
      };
    defaultComponent: D;
  },
  D
>;
