import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import { PortalCoreProps } from '../Portal/Portal.types';

type triggerType = 'click' | 'hover';

export type TooltipProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      children: React.ReactElement;
      /**
       * 气泡浮层显示内容
       */
      title?: string;
      /**
       * 默认是否显隐
       * @default false
       */
      defaultOpen?: boolean;
      /**
       * 用于手动控制气泡浮层显隐
       * @default false
       */
      open?: boolean;
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
       * Portal组件的属性
       */
      PortalProps?: PortalCoreProps;
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
