import React, { SyntheticEvent } from 'react';
import { OverrideProps } from '@bifrostui/types';
import type { ISvgIconProps } from '@bifrostui/icons';

export type NavBarProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 组件容器样式名
       */
      className?: string;
      /**
       * 标题栏标题,默认值undefined
       */
      title?: React.ReactNode;
      /**
       * 左侧图标后文案，默认值undefined
       */
      left?: React.ReactNode;
      /**
       * 左侧图标，默认值<ArrowBackwardLargeIcon />
       */
      leftIcon?: React.ReactNode;
      /**
       * iconPropss将值透传给内部icon
       */
      IconProps?: Partial<ISvgIconProps>;
      /**
       * 右侧自定义内容，默认值undefined
       */
      right?: React.ReactNode;
      /**
       * 是否固定在顶部，默认值false
       */
      fixed?: boolean;
      /**
       * 固定在顶部时，是否在标签位置生成一个等高的占位元素，默认值false
       */
      placeholder?: boolean;
      /**
       * 左侧点击事件
       */
      onClickLeft?: (e: SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;
