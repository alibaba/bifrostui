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
       * 前缀
       */
      prefix?: React.ReactNode | string;
      /**
       * 是否继承宽度
       * @default true
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
       * 浮层宽度
       */
      containerWidth?: number;
      /**
       * 是否指定滚动容器
       */
      container?: HTMLElement | (() => HTMLElement);
      /**
       * 小程序是否使用backdrop
       * @default false
       */
      miniBackdropInvisible?: boolean;
      /**
       * 关闭浮层
       */
      onClose?: (e: React.MouseEvent<any>, data: { value: boolean }) => void;
      /**
       * 打开后动画开始的回调
       */
      onMount?: () => void;
      /**
       * 卸载后动画结束的回调
       */
      onUnmounted?: () => void;
      /**
       * 默认的浮层位置
       * @default bottom
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
