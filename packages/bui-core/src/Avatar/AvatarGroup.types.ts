import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export type AvatarGroupProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 最多可显示的头像个数
       */
      maxCount?: string;
      /**
       * 头像模式
       */
      variant?: 'rounded' | 'square';
      /**
       * 头像间的间距
       */
      spacing?: string | number;
      /**
       * 头像朝向
       */
      orientation?: 'left' | 'right';
      /**
       * 头像大小
       */
      size?: 'large' | 'medium' | 'small' | 'xsmall';
    };
    defaultComponent: D;
  },
  D
>;
