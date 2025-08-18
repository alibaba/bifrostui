import React from 'react';
import { OverrideProps } from '@bifrostui/types';

type triggerType = 'click' | 'hover' | 'none';

export interface AnchorOrigin {
  /**
   * 垂直方向位置
   * @default 'top'
   */
  vertical: 'top' | 'center' | 'bottom';
  /**
   * 水平方向位置
   * @default 'center'
   */
  horizontal: 'left' | 'center' | 'right';
}

export type PopoverProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 默认是否显隐
       * @default false
       */
      defaultOpen?: boolean;
      /**
       * 用于手动控制浮层显隐
       */
      open?: boolean;
      /**
       * 浮层的标题
       */
      title?: React.ReactNode;
      /**
       * 浮层的内容
       */
      content?: React.ReactNode;
      /**
       * 是否展示箭头
       * @default false
       */
      hideArrow?: boolean;
      /**
       * 用于控制浮层和目标元素偏移量
       */
      offsetSpacing?: number;
      /**
       * 气泡框相对于锚点的位置
       * @default { vertical: 'top', horizontal: 'center' }
       */
      anchorOrigin?: AnchorOrigin;
      /**
       * 触发行为
       * - click: 点击触发
       * - hover: hover触发
       * - none: 不自动触发，完全通过 open 属性控制
       * - 或者是 click 和 hover 的数组组合
       * @default 'click'
       */
      trigger?: triggerType | Exclude<triggerType, 'none'>[];
      /**
       * 点击事件回调方法
       * - event 触发事件
       * - data.open 浮层显隐状态
       * @returns
       */
      onOpenChange?: (
        event: React.SyntheticEvent,
        data: { open: boolean },
      ) => void;
      /**
       * 无障碍功能：Popover的角色
       * @default 'tooltip'
       */
      role?: 'tooltip' | 'dialog' | 'menu' | 'listbox';
      /**
       * 无障碍功能：为Popover提供可访问的标签
       */
      'aria-label'?: string;
      /**
       * 无障碍功能：引用描述此Popover的元素ID
       */
      'aria-labelledby'?: string;
      /**
       * 无障碍功能：是否自动管理焦点
       * 当为true时，Popover打开时会自动获取焦点，关闭时焦点返回到触发元素
       * @default true
       */
      autoFocus?: boolean;
      /**
       * 无障碍功能：是否在Popover内部捕获焦点
       * 当为true时，Tab键只能在Popover内部的可聚焦元素间循环
       * @default false
       */
      trapFocus?: boolean;
      /**
       * 无障碍功能：是否支持Escape键关闭
       * @default true
       */
      closeOnEscape?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
