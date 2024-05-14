import React, { ReactNode } from 'react';
import { OverrideProps, ThemeColor } from '@bifrostui/types';
import { BadgeProps } from '../Badge';

export type TabBarProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 当前选中的标签索引值
       * @default 0
       */
      current?: number;
      /**
       * 默认文案颜色
       * @default 'default'
       */
      color?: ThemeColor | 'default' | 'vip';
      /**
       * 选中文案颜色
       * @default 'primary'
       */
      activeColor?: ThemeColor | 'default' | 'vip';
      /**
       * 变化时回调函数
       */
      onChange?: (e: React.SyntheticEvent, data: { value: number }) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type TabBarItemProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 标题
       */
      title?: ReactNode;
      /**
       * 图标
       */
      icon?: ReactNode;
      /**
       * 选中图标
       */
      activeIcon?: ReactNode;
      /**
       * 徽章
       */
      BadgeProps?: BadgeProps;
      /**
       * TabBar index （不对外暴露）
       */
      index?: number;
    };
    defaultComponent: D;
  },
  D
>;
