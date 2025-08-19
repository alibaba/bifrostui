import { OverrideProps, ThemeColor, ButtonOpenType } from '@bifrostui/types';
import React from 'react';

export type ButtonProps<
  D extends React.ElementType = 'button',
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
       * 按钮尺寸
       * - small: 小按钮
       * - medium: 中号按钮，默认按钮
       * - large: 大按钮/半屏按钮
       * - full: 通栏按钮
       * @default 'medium'
       */
      size?: 'small' | 'medium' | 'large' | 'full';
      /**
       * 按钮颜色
       * @default 'neutral'
       */
      color?: ThemeColor | 'vip';
      /**
       * 按钮类型
       * - text: 文字按钮
       * - outlined: 线框按钮
       * - contained: 填充按钮
       * - subtle: 柔和按钮
       * @default 'outlined'
       */
      variant?: 'outlined' | 'text' | 'contained' | 'subtle';
      /**
       * 在子元素前放在的内容
       */
      startIcon?: React.ReactNode;
      /**
       * 在子元素后放在的内容
       */
      endIcon?: React.ReactNode;
      /**
       * 点击事件回调方法
       * @param event
       * @returns
       */
      onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
      /**
       * 仅微信小程序支持的button开放能力
       */
      openType?: ButtonOpenType;
      /**
       * 无障碍功能：ARIA标签
       */
      'aria-label'?: string;
      /**
       * 无障碍功能：描述元素的详细信息
       */
      'aria-describedby'?: string;
      /**
       * 无障碍功能：是否隐藏元素
       */
      'aria-hidden'?: boolean;
      /**
       * 无障碍功能：元素在无障碍树中的细节程度
       */
      'aria-details'?: string;
      /**
       * 无障碍功能：键盘快捷键
       */
      'aria-keyshortcuts'?: string;
      /**
       * 无障碍功能：当前元素是否处于忙碌状态
       */
      'aria-busy'?: boolean;
      /**
       * 无障碍功能：当前元素是否为只读
       */
      'aria-readonly'?: boolean;
      /**
       * 无障碍功能：当前元素是否为必填
       */
      'aria-required'?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
