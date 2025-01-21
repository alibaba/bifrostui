/* eslint-disable */
import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React from 'react';

export type SwipeActionProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 右侧的操作按钮列表区域
       */
      rightActions?: React.ReactNode;
      /**
       * 左侧的操作按钮列表区域
       */
      leftActions?: React.ReactNode;
      // closeOnAction
      /**
       * 是否在点击其他区域时自动归位
       * TODO closeOnClickContainer & closeOnClickActionItem
       */
      closeOnTouchContainer?: boolean;
      /**
       * 操作按钮展开时触发
       */
      // TODO 参数使用对象
      onActionsReveal?: (side: SideType) => void;
      /**
       * 是否禁用拖动
       */
      disabled?: boolean;
    };
    defaultComponent: D;
  },
  D
>;

export type SwipeActionItemProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 颜色风格
       */
      color?: ThemeColor;
      /**
       * body 区域内容
       */
      //  TODO delete
      children?: React.ReactNode;
      /**
       * 点击事件
       */
      // TODO 添加第二个参数，将item的数据回调出去
      onClick?: (e: React.SyntheticEvent) => void;
    };
    defaultComponent: D;
  },
  D
>;

type SideType = 'left' | 'right';

export interface BuiSwipeActionContextProps {
  /**
   * 是否在点击操作按钮时自动归位
   */
  closeOnAction?: boolean;
}

// TODO 与实现不一致, show参数{}
export type SwipeActionRef = {
  close: () => void;
  show: (side?: SideType) => void;
};
