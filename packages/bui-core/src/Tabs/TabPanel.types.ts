import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type TabPanelProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * value	当前选中面板的value
       */
      value?: string;
      /**
       * 对应tabs切换面板的数据中的index
       */
      index?: string;
      /**
       * 当TabPanel被隐藏时是否渲染 DOM 结构，默认false
       */
      keepMounted?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
