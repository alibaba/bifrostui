import { OverrideProps, ThemeColor } from '@bifrostui/types';
import React, { ReactNode } from 'react';

export type BadgeProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       *徽章内容
       */
      content?: ReactNode;
      /**
       * 颜色
       */
      color?: Exclude<ThemeColor, 'neutral'>;
      /**
       * 最大值（替代maxCount，推荐使用）
       */
      max?: number;
      /**
       * @deprecated 即将废弃，请使用max
       */
      maxCount?: number;
      /**
       * content为0时是否展示
       */
      showZero?: boolean;
      /**
       * 是否展示badge
       */
      visibility?: boolean;
      /**
       *徽章类型
       */
      variant?: 'contained' | 'outlined';
      /**
       * 徽章形状
       */
      type?: 'dot' | 'standard' | 'bubble';
      /**
       * 无障碍功能：为Badge提供可访问的标签
       * 如果不提供，将根据content和type自动生成
       */
      'aria-label'?: string;
      /**
       * 无障碍功能：引用描述此Badge的元素ID
       */
      'aria-describedby'?: string;
      /**
       * 无障碍功能：Badge的角色
       * @default 'status'
       */
      role?: 'status' | 'img' | 'presentation';
      /**
       * 无障碍功能：是否对屏幕阅读器隐藏Badge
       * 当为true时，Badge将被屏幕阅读器忽略
       * @default false
       */
      'aria-hidden'?: boolean;
      /**
       * 无障碍功能：是否为装饰性Badge
       * 当为true时，Badge将被标记为装饰性元素，屏幕阅读器会忽略
       * @default false
       */
      decorative?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
