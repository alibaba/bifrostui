import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import { DrawerProps } from '../Drawer/Drawer.types';

export interface IPickerOptionItem {
  /**
   * 选项的文字内容
   */
  label?: string | number;
  /**
   * 选项对应唯一的值
   */
  value: string | number;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

export type ICascadePickerChildOptionItem = IPickerOptionItem & {
  /**
   * 用于级联选项，子节点可能没有children属性
   */
  children?: ICascadePickerChildOptionItem[];
};

export type ICascadePickerOptionItem = IPickerOptionItem & {
  /**
   * 用于级联选项，根节点必须含有children属性
   */
  children: ICascadePickerChildOptionItem[];
};

export type PickerProps<
  D extends React.ElementType = 'div',
  P = DrawerProps,
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否展示选择器
       * @default false
       */
      open?: boolean;
      /**
       * 标题
       */
      title?: string;
      /**
       * 确认文本内容
       */
      confirmText?: string;
      /**
       * 取消文本内容
       */
      cancelText?: string;
      /**
       * 列表数据
       * @default []
       */
      options?: IPickerOptionItem[][] | ICascadePickerOptionItem[];
      /**
       * 选中的值
       */
      value?: (string | number)[];
      /**
       * 内部内容DOM节点上的Props
       */
      contentProps?: React.HTMLAttributes<HTMLDivElement>;
      /**
       * 点击确认按钮时候回调
       */
      onConfirm?: (
        e: React.MouseEvent<HTMLDivElement>,
        data: {
          value: (string | number)[];
          options: ICascadePickerChildOptionItem[][];
        },
      ) => void;
      /**
       * 选项值变更时的回调
       */
      onOptionChange?: (
        e: React.TransitionEvent<HTMLDivElement>,
        data: {
          value: (string | number)[];
          options: ICascadePickerChildOptionItem[][];
          currentOption: ICascadePickerChildOptionItem;
          columnIndex: number;
        },
      ) => void;
      /**
       * 点击取消按钮时候回调
       */
      onCancel?: (e: React.MouseEvent<HTMLDivElement>) => void;
      /**
       * 关闭选择器时执行
       */
      onClose?: (
        e: React.MouseEvent<HTMLDivElement>,
        data: {
          from: string;
          value: (string | number)[];
          options: ICascadePickerChildOptionItem[][];
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type PickerPanelProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 单列面板的列表数据
       * @default []
       */
      options?: ICascadePickerChildOptionItem[];
      /**
       * 选中值
       */
      value?: string | number;
      /**
       * 列索引
       */
      columnIndex?: number;
      /**
       * Piker组件的样式，PickerPanel的主题定制与css变量传入的Tokens有关，需要透传计算
       */
      pickerStyle?: React.CSSProperties;
      /**
       * 选择选项时的回调
       */
      onSelect?: (
        e: React.TransitionEvent<HTMLDivElement>,
        data: {
          columnOption: ICascadePickerChildOptionItem;
          columnIndex: number;
        },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
