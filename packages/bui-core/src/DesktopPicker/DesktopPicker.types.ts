import { OverrideProps } from '@bifrostui/types';
import React, { JSXElementConstructor, ReactElement, RefObject } from 'react';

export type DesktopPickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      parentRef?: RefObject<HTMLDivElement>;
      containerRef?: RefObject<HTMLDivElement>;
      /**
       * 是否打开
       */
      isOpen: boolean;
      children: ReactElement<any, string | JSXElementConstructor<any>>;
      onClose: (data: boolean) => void;
      backdrop?: boolean;
      defaultDirection?: 'top' | 'bottom';
    };
    defaultComponent: D;
  },
  D
>;
