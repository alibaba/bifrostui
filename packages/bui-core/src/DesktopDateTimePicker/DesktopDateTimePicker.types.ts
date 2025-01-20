import React, { Ref } from 'react';
import { OverrideProps } from '@bifrostui/types';
import { CalendarProps } from '../Calendar';

export type IDateTimePickerValue = Date | null;

export interface IDateTimePickerInstance {
  /** 日期对象 */
  day: Date;
  /** 是否禁用 */
  disabled: boolean;
}

export interface IDateTimePickerCustomIconProps {
  /**
   * 是否是最小时间
   */
  isMinMonth?: boolean;
  /**
   * 是否是最大时间
   */
  isMaxMonth?: boolean;
}

export interface IDesktopTimePickerProps {
  orientation?: 'bottom' | 'top';
}

export interface IDateTimePickerCalendarProps {
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
  dateRender?: (currentDate: IDateTimePickerInstance) => React.ReactNode;
  /**
   * 自定义周单元格的内容
   */
  weekRender?: (week: string) => React.ReactNode;
}

export type DateTimePickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 样式类名
       */
      classNames?: string;
      /**
       * 样式
       */
      style?: React.CSSProperties;
      /**
       * 默认选中的值，当组件非受控时使用
       */
      defaultValue?: IDateTimePickerValue;
      /**
       * 选中的值，当组件受控时使用
       */
      value?: IDateTimePickerValue;
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
        options: IDateTimePickerCustomIconProps,
      ) => React.ReactNode;
      /**
       * 头部操作栏右边图标
       */
      headerBarRightIcon?: (
        options: IDateTimePickerCustomIconProps,
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
      monthRender?: (currentDate: IDateTimePickerInstance) => React.ReactNode;
      /**
       * 自定义年份单元格的内容
       */
      yearRender?: (currentDate: IDateTimePickerInstance) => React.ReactNode;
      /**
       * 日期发生变化的回调
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: { value: IDateTimePickerValue },
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
      onClose?: () => void;
      /**
       * 弹层打开的回调
       */
      onOpen?: () => void;
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
      desktopPickerProps?: IDesktopTimePickerProps;
      /**
       * CalendarProps
       */
      calendarProps?: CalendarProps;
      /**
       * 浮层宽度
       */
      containerWidth?: number;
    };
    defaultComponent: D;
  },
  D
>;
