import { OverrideProps } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type StackProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 方向， 设置子节点垂直/水平分布
       * 默认column;
       */
      direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
      /**
       * 交叉轴轴上对齐方式
       * 默认center
       */
      alignItems?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'stretch'
        | 'baseline';
      /**
       * 主轴上对齐方式
       * 默认center
       */
      justifyContent?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
      /**
       * 间距，设置子节点之间间距
       * 默认 0
       */
      spacing?: string | number;
      /**
       * 分割线，允许在每个子节点之间插入一个元素
       */
      divider?: ReactNode;
      /**
       * 控制节点换行
       */
      flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    };
    defaultComponent: D;
  },
  D
>;
