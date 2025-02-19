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
      /**
       * 是否在点击按钮区自动归位
       */
      closeOnClickActionItem?: boolean;
      /**
       * 是否在点击其他区域时自动归位
       */
      closeOnClickContainer?: boolean;
      /**
       * 操作按钮展开时触发
       */
      onActionsReveal?: (params: RevealParams) => void;
      /**
       * 是否禁用拖动
       */
      disabled?: boolean;
    };
    defaultComponent: D;
  },
  D
>;

interface RevealParams {
  side: SideTypeEnum | '';
}

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
       * id
       */
      id?: string | number;
      /**
       * 点击事件
       */
      onClick?: (
        e: React.SyntheticEvent,
        item: {
          id: string | number;
          color: ThemeColor;
          text: React.ReactNode;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;

export interface BuiSwipeActionContextProps {
  /**
   * 是否在点击操作按钮时自动归位
   */
  closeOnClickActionItem?: boolean;
  /**
   * 关闭函数
   */
  close: () => void;
}

export type SwipeActionRef = {
  close: () => void;
  show: (side?: SideTypeEnum) => void;
  open: boolean;
  ref?: HTMLDivElement;
};

export type CombinedRef = SwipeActionRef | HTMLDivElement;

export enum SideTypeEnum {
  LEFT = 'left',
  RIGHT = 'right',
}
