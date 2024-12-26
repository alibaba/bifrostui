import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type DesktopPickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 样式类名
       */
      classNames?: string;
      /**
       * 是否打开
       */
      open: boolean;
      /**
       * 浮层的内容
       */
      content?: React.ReactNode;
      /**
       * 是否指定滚动容器
       */
      container?: () => HTMLElement | null;
      /**
       * 关闭浮层
       */
      onClose: (data: boolean) => void;
      /**
       * 默认的浮层位置
       */
      defaultDirection?: 'top' | 'bottom';
    };
    defaultComponent: D;
  },
  D
>;
