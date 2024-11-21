import React from 'react';
import { OverrideProps } from '@bifrostui/types';

type triggerType = 'click' | 'hover';

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
       * 气泡框位置
       * @default 'top'
       */
      placement?:
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
       * 触发行为
       * - click: 点击触发
       * - hover: hover触发
       * - 或者是他们的数组
       * @default 'click'
       */
      trigger?: triggerType | triggerType[];
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
    };
    defaultComponent: D;
  },
  D
>;
