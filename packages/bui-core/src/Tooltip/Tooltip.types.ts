import React from 'react';
import { OverrideProps } from '@bifrostui/types';

/**
 * 触发 Tooltip 显示的事件类型
 */
export type TooltipTriggerType = 'click' | 'hover';

/**
 * Tooltip 的位置选项
 */
export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

/**
 * onOpenChange 回调函数的数据参数
 */
export interface TooltipOpenChangeData {
  /** 浮层显隐状态 */
  open: boolean;
}

/**
 * Tooltip 组件的属性接口
 */
export interface TooltipBaseProps {
  /**
   * 气泡浮层显示内容
   * 支持文本、React 节点等
   */
  title?: React.ReactNode;

  /**
   * 默认是否显隐
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * 用于手动控制气泡浮层显隐
   * 当提供此属性时，组件变为受控模式
   */
  open?: boolean;

  /**
   * 浮层与目标元素的偏移距离（像素）
   * @default 0
   */
  offset?: number;

  /**
   * 浮层与目标元素的偏移距离（像素）
   * @deprecated 请使用 offset 属性替代
   * @default 0
   */
  offsetSpacing?: number;

  /**
   * 气泡框相对于目标元素的位置
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * 触发 Tooltip 显示的事件类型
   * - 'click': 点击触发
   * - 'hover': 悬停触发
   * - 可以传递数组来组合多种触发方式
   * @default 'click'
   */
  trigger?: TooltipTriggerType | TooltipTriggerType[];

  /**
   * 显隐状态变化时的回调函数
   * @param event - 触发事件
   * @param data - 回调数据，包含当前的显隐状态
   */
  onOpenChange?: (
    event: React.SyntheticEvent,
    data: TooltipOpenChangeData,
  ) => void;

  /**
   * 子元素，必须是可以接收 ref 的 React 元素
   */
  children?: React.ReactElement;

  // ========== 无障碍功能相关属性 ==========

  /**
   * 无障碍功能：Tooltip的角色
   * @default 'tooltip'
   */
  role?: 'tooltip' | 'dialog' | 'status' | 'alert';

  /**
   * 无障碍功能：为Tooltip提供可访问的标签
   */
  'aria-label'?: string;

  /**
   * 无障碍功能：引用描述此Tooltip的元素ID
   */
  'aria-labelledby'?: string;

  /**
   * 无障碍功能：是否自动管理焦点
   * 当为true时，Tooltip显示时会自动获取焦点，关闭时焦点返回到触发元素
   * @default false
   */
  autoFocus?: boolean;

  /**
   * 无障碍功能：是否支持Escape键关闭
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * 无障碍功能：是否支持Enter/空格键触发
   * 仅在trigger包含'click'时有效
   * @default true
   */
  keyboardTrigger?: boolean;

  /**
   * 无障碍功能：是否对屏幕阅读器隐藏Tooltip
   * 当为true时，Tooltip将被屏幕阅读器忽略
   * @default false
   */
  'aria-hidden'?: boolean;
}

export type TooltipProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & TooltipBaseProps;
    defaultComponent: D;
  },
  D
>;
