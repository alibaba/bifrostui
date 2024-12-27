import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type DesktopPickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    // TODO BackdropProps没加，导致外部无法onTouchStart关闭
    props: P & {
      /**
       * 样式类名
       */
      classNames?: string; // TODO delete
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
      // TODO 1，类型确认HTMLElement还是DOMElement 2，这里定义类型为函数与内部getContainer不自洽，应该是函数或XXXElement
      container?: () => HTMLElement | null;
      /**
       * 关闭浮层
       */
      onClose: (data: boolean) => void; // TODO (e, {data: boolean})
      /**
       * 默认的浮层位置
       */
      defaultDirection?: 'top' | 'bottom';
    };
    defaultComponent: D;
  },
  D
>;
