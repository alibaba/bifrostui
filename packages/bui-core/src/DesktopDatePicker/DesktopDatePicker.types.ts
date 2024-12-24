import React, { Ref } from 'react';
import { OverrideProps } from '@bifrostui/types';
import { CalendarProps } from '../Calendar';

export type IDatePickerValue = Date | null;

export interface IDatePickerInstance {
  /** 日期对象 */
  day: Date;
  /** 是否禁用 */
  disabled: boolean;
}

export interface IDatePickerCustomIconProps {
  /**
   * 是否是最小时间
   */
  isMinMonth?: boolean;
  /**
   * 是否是最大时间
   */
  isMaxMonth?: boolean;
}

export interface IDesktopPickerProps {
  orientation?: 'bottom' | 'top';
}

export interface IDatePickerCalendarProps {
  /**
   * 是否隐藏当前月之外的日期，默认为false
   */
  hideDaysOutsideCurrentMonth?: boolean;
  /**
   * 高亮的日期，默认为today
   * today 若选中的非当天，则当天高亮显示，若选中的是当天，则当天展示选中态
   * weekend 可选的周末高亮显示
   */
  highlightDate?: 'today' | 'weekend';
  /**
   * 自定义日期单元格的内容
   */
  dateRender?: (currentDate: IDatePickerInstance) => React.ReactNode;
  /**
   * 自定义周单元格的内容
   */
  weekRender?: (week: string) => React.ReactNode;
}

export type DatePickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 样式类名
       */
      className?: string;
      /**
       * 默认选中的值，当组件非受控时使用
       */
      defaultValue?: IDatePickerValue;
      /**
       * 选中的值，当组件受控时使用
       */
      value?: IDatePickerValue;
      /**
       * 输入框占位内容
       */
      placeholder?: string;
      /**
       * 可选择的最小日期，默认为当前日期
       * 渲染指定月时：value=null并指定minDate
       */
      minDate?: Date;
      /**
       * 可选择的最大日期，默认为当前日期的一年后
       */
      maxDate?: Date;
      /**
       * 弹层是否打开
       */
      open?: boolean;
      /**
       * 输入框icon
       */
      icon?: React.ReactNode;
      /**
       * inputRef
       */
      inputRef?: Ref<HTMLInputElement>;
      /**
       * inputProp
       */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
      /**
       * 日期选择器类型
       */
      picker?: 'year' | 'month' | 'day';
      /**
       * 头部操作栏左边图标
       */
      headerBarLeftIcon?: (
        options: IDatePickerCustomIconProps,
      ) => React.ReactNode;
      /**
       * 头部操作栏右边图标
       */
      headerBarRightIcon?: (
        options: IDatePickerCustomIconProps,
      ) => React.ReactNode;
      /**
       * 是否禁用日期选择器
       */
      disabled?: boolean;
      /**
       * 不可选择的日期
       */
      disabledDate?: (currentDate: Date) => boolean;
      /**
       * 自定义月份单元格的内容
       */
      monthRender?: (currentDate: IDatePickerInstance) => React.ReactNode;
      /**
       * 自定义年份单元格的内容
       */
      yearRender?: (currentDate: IDatePickerInstance) => React.ReactNode;
      /**
       * 日期发生变化的回调
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: { value: IDatePickerValue },
      ) => void;
      /**
       * 选择日期后是否立刻关闭
       */
      closeOnSelect?: boolean;
      /**
       * 禁用弹层选择功能
       */
      disableOpenPicker?: boolean;
      /**
       * 日期格式化
       */
      format?: string;
      /**
       * 弹层关闭的回调
       */
      onClose?: (e: React.SyntheticEvent) => void;
      /**
       * 弹层打开的回调
       */
      onOpen?: (e: React.SyntheticEvent) => void;
      /**
       * 月份切换的回调
       */
      onMonthChange?: (e: React.SyntheticEvent, data: { value: Date }) => void;
      /**
       * 年份切换的回调
       */
      onYearChange?: (e: React.SyntheticEvent, data: { value: Date }) => void;
      /**
       * DesktopPickerProps
       */
      desktopPickerProps?: IDesktopPickerProps;
      /**
       * CalendarProps
       */
      calendarProps?: CalendarProps;
    };
    defaultComponent: D;
  },
  D
>;
