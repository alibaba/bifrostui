import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React from 'react';

export type ActionSheetItemProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 颜色
       * @default 'default'
       */
      color?: ThemeColor | 'default';
      /**
       * 是否加粗
       * @default false
       */
      bold?: boolean;
      /**
       * 描述内容
       */
      description?: React.ReactNode;
      /**
       * 索引标记
       */
      index?: string | number;
      /**
       * 点击事件回调方法
       * @param event
       * @param data
       */
      onClick?: (
        event: React.MouseEvent<HTMLDivElement>,
        data?: { index: string | number },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
