import { OverrideProps } from '@bifrostui/types';
import React, { RefObject, SyntheticEvent } from 'react';

export type BuiSelectValue = string | number;

export interface BuiSelectContextProps {
  /**
   * 当前选中值
   */
  selectValue?: BuiSelectValue;
  /**
   * 设置根选择器展示内容
   */
  setRenderValue?: React.Dispatch<React.SetStateAction<string>>;
  /**
   * 选项点击的回调
   */
  handleOptionClick?: (
    event?: React.MouseEvent<HTMLDivElement>,
    value?: BuiSelectValue,
    label?: React.ReactNode,
    optionDisabled?: boolean,
  ) => void;
}

export type SelectOptionProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 选项的值
       */
      value?: BuiSelectValue;
      /**
       * 回填内容
       * 没传children时也作为选项内容
       */
      label?: React.ReactNode;
      /**
       * 禁用
       */
      disabled?: boolean;
    };
    defaultComponent: D;
  },
  D
>;

export type SelectProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * inputRef
       */
      inputRef?: RefObject<HTMLInputElement>;
      /**
       * inputProp
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
      /**
       * input 名称标识
       */
      name?: string;
      /**
       * 当前值
       */
      value?: BuiSelectValue;
      /**
       * 默认值
       */
      defaultValue?: BuiSelectValue;
      /**
       * 没有选中时显示的内容
       */
      placeholder?: React.ReactNode;
      /**
       * 自定义图标
       */
      icon?: React.ReactNode;
      /**
       * 禁用
       */
      disabled?: boolean;
      /**
       * 是否展开下拉框
       */
      open?: boolean;
      /**
       * 自定义选中后展示的内容
       */
      // valueRender?: (value: IBuiSelectValue) => React.ReactNode;
      /**
       * 选中某一项时的回调，并将选中的值传递过去
       */
      onChange?: (
        e: SyntheticEvent,
        data: {
          value: string;
        },
      ) => void;
      /**
       * 展开下拉框时的回调
       */
      onOpen?: () => void;
      /**
       * 折叠下拉框时的回调
       */
      onClose?: () => void;
    };
    defaultComponent: D;
  },
  D
>;
