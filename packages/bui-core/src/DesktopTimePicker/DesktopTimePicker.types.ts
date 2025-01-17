import React, { Ref } from 'react';
import { OverrideProps } from '@bifrostui/types';
import { Dayjs } from 'dayjs';

export type ITimePickerValue = Dayjs | null;

export type Views = Array<'hour' | 'minute' | 'second'>;
export type ViewType = 'hour' | 'minute' | 'second';
export type ViewTypeWithMeridiem = ViewType | 'meridiem';

export type TimeSteps = { hours?: number; minutes?: number; seconds?: number };

export interface IDesktopPickerProps {
  orientation?: 'bottom' | 'top';
}

export type TimePickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 默认选中的值，当组件非受控时使用
       */
      defaultValue?: Dayjs;
      /**
       * 选中的值，当组件受控时使用
       */
      value?: Dayjs;
      /**
       * 输入框占位内容
       */
      placeholder?: string;
      /**
       * 打开浮层的视图
       */
      views?: Views;
      /**
       * 时间间隔
       */
      timeSteps?: TimeSteps;
      /**
       * 是否使用十二小时制模式
       */
      ampm?: boolean;
      /**
       * 时间格式化
       */
      format?: string;
      /**
       * 可选择的最小时间
       */
      minTime?: Dayjs;
      /**
       * 可选择的最大时间
       */
      maxTime?: Dayjs;
      /**
       * 禁止选择的时间
       */
      disabledTimeView?: DisabledTimeView;
      /**
       * 禁用弹层选择功能
       */
      disableOpenPicker?: boolean;
      /**
       * 是否禁用时间选择器
       */
      disabled?: boolean;
      /**
       * 选择时间后是否立刻关闭
       */
      closeOnSelect?: boolean;
      /**
       * 弹层是否打开
       */
      open?: boolean;
      /**
       * 输入框icon
       */
      icon?: React.ReactNode;
      /**
       * 时间发生变化的回调
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: { value: ITimePickerValue },
      ) => void;
      /**
       * 弹层关闭的回调
       */
      onClose?: () => void;
      /**
       * 弹层打开的回调
       */
      onOpen?: () => void;
      /**
       * inputRef
       */
      inputRef?: Ref<HTMLInputElement>;
      /**
       * inputProp
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
      /**
       * DesktopPickerProps
       */
      DesktopPickerProps?: IDesktopPickerProps;
    };
    defaultComponent: D;
  },
  D
>;

// todo add Time?
// type DisabledTime = (selectedDate: Dayjs) => {
export type DisabledTimeView = () => {
  hour?: () => number[];
  minute?: (selectedHour: number) => number[];
  second?: (selectedHour: number, selectedMinute: number) => number[];
};

export interface TimePickerContentProps {
  format: string;
  setIsOpen: Function;
  triggerChange: Function;
  disabledTimeView: DisabledTimeView;
  timeValue: Dayjs;
  /**
   * 关闭浮层
   */
  onClose?: (e: React.MouseEvent<any>, data: { value: boolean }) => void;
  /**
   * 打开浮层
   */
  onOpen?: (e: React.MouseEvent<any>, data: { value: boolean }) => void;
  /**
   * 选择时间后是否立刻关闭
   */
  closeOnSelect?: boolean;
  /**
   * 打开浮层的视图
   */
  views?: Views;
  /**
   * 时间间隔
   */
  timeSteps?: TimeSteps;
  /**
   * 是否使用十二小时制模式
   */
  ampm?: boolean;
  /**
   * 不可选择的时间
   */
  disabledTime?: number[];
  /**
   * 可选择的最小时间
   */
  minTime?: Dayjs;
  /**
   * 可选择的最大时间
   */
  maxTime?: Dayjs;
}

/** 时间面板单元格对象 */
export interface ITimeItemInstance {
  value: number | string;
  label: string;
}

export interface DesktopTimePickerListProps {
  type: ViewTypeWithMeridiem;
  dataList: ITimeItemInstance[];
  disabledTime: (number | string)[];
  selectedValue: string | number;
  prefixCls: string;
  handleClick: Function;
  handleScrollToSelected: Function;
}
