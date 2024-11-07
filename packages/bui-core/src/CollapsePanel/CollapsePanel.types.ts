import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type CollapsePanelItemProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 唯一标识，对应 activeKey
       */
      key?: string;
      /**
       * 面板标题
       */
      label?: React.ReactNode;
      /**
       * 自定义 icon
       */
      icon?: React.ReactNode | ((active: boolean) => React.ReactNode);
      /**
       * 是否展开
       * @default false
       */
      active?: boolean;
      /**
       * body 区域内容
       */
      children?: React.ReactNode;
    };
    defaultComponent: D;
  },
  D
>;

export type CollapsePanelProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否开启手风琴模式
       * @default false
       */
      accordion?: boolean;
      /**
       * 当前激活面板的 key
       */
      activeKeys?: string[];
      /**
       * 默认展开面板的 key
       */
      defaultActiveKeys?: string[];
      /**
       * 折叠项目内容
       */
      items?: Array<CollapsePanelItemProps>;
      /**
       * body 区域内容，使用 CollapseItem 进行渲染
       */
      children: React.ReactNode;
      /**
       * 自定义箭头图标
       */
      arrowIcon?: React.ReactNode | ((active: boolean) => React.ReactNode);
      /**
       * 切换面板时触发
       */
      onChange?: (activeKeys: string[]) => void;
    };
    defaultComponent: D;
  },
  D
>;
