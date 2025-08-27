import { OverrideProps, ThemeColor, ButtonOpenType } from '@bifrostui/types';
import React from 'react';

export type IconButtonProps<
  D extends React.ElementType = 'button',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * - small: 小按钮
       * - medium: 中号按钮，默认按钮
       * - large: 大按钮
       * @default 'medium'
       */
      size?: 'small' | 'medium' | 'large';
      /** 按钮颜色
       */
      color?: ThemeColor;
      /**
       * - default: 图标按钮
       * - contained: 实心填充按钮
       * - outlined: 描边按钮
       * - subtle: 柔和按钮
       * @default 'default'
       */
      variant?: 'default' | 'contained' | 'outlined' | 'subtle';
      /**
       * - circular: 圆形
       * - square: 正方形
       * - rounded: 圆角
       * @default 'circular'
       */
      shape?: 'circular' | 'square' | 'rounded';
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean;
      /**
       * 仅微信小程序支持的button开放能力
       */
      openType?: ButtonOpenType;

      // ============ 无障碍属性 ============
      /**
       * 提供可访问的名称
       * 图标按钮必须设置此属性，因为没有可见文本
       * @example "搜索", "关闭", "菜单", "收藏"
       */
      'aria-label'?: string;

      /**
       * 禁用状态
       * @example true - 禁用, false - 开启
       */
      'aria-disabled'?: boolean;

      /**
       * 切换按钮的按下状态
       * 用于切换类型的按钮（如收藏、点赞、静音等）
       * @example true - 已激活, false - 未激活
       */
      'aria-pressed'?: boolean;

      /**
       * 展开/折叠状态
       * 用于控制下拉菜单、面板等可展开内容的按钮
       * @example true - 已展开, false - 已折叠
       */
      'aria-expanded'?: boolean;

      /**
       * 弹出内容类型
       * 指示点击按钮后会弹出什么类型的内容
       * @example "menu" - 弹出菜单, "dialog" - 弹出对话框
       */
      'aria-haspopup'?: boolean | 'menu' | 'dialog' | 'listbox';

      /**
       * 关联描述该按钮的元素ID
       * 用于提供额外的说明信息
       * @example aria-describedby="help-text"
       */
      'aria-describedby'?: string;
    };
    defaultComponent: D;
  },
  D
>;
