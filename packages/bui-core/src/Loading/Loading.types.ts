import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import type { ISvgIconProps } from '@bifrostui/icons';

export type LoadingProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 加载图标样式
       */
      icon?: React.ReactNode;
      /**
       * iconPropss将值透传给内部icon
       */
      IconProps?: Partial<ISvgIconProps>;
      /**
       * 加载图标和文案的排列形式，默认值是“vertical”
       */
      direction?: 'vertical' | 'horizontal';
    };
    defaultComponent: D;
  },
  D
>;
