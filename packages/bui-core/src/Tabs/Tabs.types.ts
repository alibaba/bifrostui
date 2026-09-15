import React, { SyntheticEvent } from 'react';
import { OverrideProps } from '@bifrostui/types';

export interface ITabsChangeData {
  /** 切换后的tab索引 */
  index: string;
}

export type TabChangeEvent = (
  e?: SyntheticEvent,
  data?: ITabsChangeData,
) => void;

export interface ITabItem {
  title: React.ReactNode;
  index: string;
  disabled?: boolean;
}

export type ITabAlign = 'start' | 'center';

export type TabsProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 当前选中面板的索引值，与 ITabItem.index 对应
       */
      value?: string;
      /**
       * 默认选中面板的索引值（非受控模式）
       */
      defaultValue?: string;
      /**
       * 切换面板的数据
       */
      tabs?: ITabItem[];
      /**
       * 切换面板的回调
       */
      onChange?: TabChangeEvent;
    };
    defaultComponent: D;
  },
  D
>;
