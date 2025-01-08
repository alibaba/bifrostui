import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import { BackdropProps } from '../Backdrop/Backdrop.types';

export type DesktopPickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否继承宽度
       */
      inheritWidth?: boolean;
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
      container?: HTMLElement | (() => HTMLElement);
      /**
       * 关闭浮层
       */
      onClose?: (e: React.MouseEvent<any>, data: { value: boolean }) => void;
      /**
       * 默认的浮层位置
       */
      defaultDirection?: 'top' | 'bottom';
      /**
       * 透传浮层的Props
       */
      BackdropProps?: BackdropProps;
    };
    defaultComponent: D;
  },
  D
>;
