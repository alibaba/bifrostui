import { OverrideProps } from '@bifrostui/types';
import React from 'react';

export interface ICalendarInstance {
  /** 日期对象 */
  day: Date;
  /** 是否禁用 */
  disabled: boolean;
}

export interface ICalendarMonthChangeData {
  /** 切换后的月份 */
  month: string;
  /** 操作类型，prev: 点击上个月 next: 点击下个月 */
  type: 'prev' | 'next';
}

export interface ICustomIconProps {
  /** 是否为可选范围内的最小月份 */
  isMinMonth?: boolean;
  /** 是否为可选范围内的最大月份 */
  isMaxMonth?: boolean;
}

export type ICalendarMode = 'single' | 'range';

export type ICalendarValue = Date | Date[] | null;

export type CalendarProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 默认选中的值，当组件非受控时使用
       */
      defaultValue?: ICalendarValue;
      /**
       * 选中的值，当组件受控时使用
       */
      value?: ICalendarValue;
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
       * 选择类型，默认为single
       * single 表示选择单个日期
       * range 表示选择日期区间
       */
      mode?: ICalendarMode;
      /**
       * 是否隐藏当前月之外的日期，默认为false
       */
      hideDaysOutsideCurrentMonth?: boolean;
      /**
       * 头部操作栏日期显示格式
       * @default YYYY/MM
       */
      headerBarFormat?: string;
      /**
       * 头部操作栏左边图标
       * @defaultReturn <CaretLeftIcon />
       */
      headerBarLeftIcon?: (options: ICustomIconProps) => React.ReactNode;
      /**
       * 头部操作栏右边图标
       * @defaultReturn <CaretRightIcon />
       */
      headerBarRightIcon?: (options: ICustomIconProps) => React.ReactNode;
      /**
       * 不可选择的日期
       */
      disabledDate?: (currentDate: Date) => boolean;
      /**
       * 高亮的日期，默认为today
       * today 若选中的非当天，则当天高亮显示，若选中的是当天，则当天展示选中态
       * weekend 可选的周末高亮显示
       */
      highlightDate?: 'today' | 'weekend';
      /**
       * 是否隐藏头部
       * default: false
       */
      headerVisible?: boolean;
      /**
       * 自定义日期单元格的内容
       */
      dateRender?: (currentDate: ICalendarInstance) => React.ReactNode;
      /**
       * 自定义周单元格的内容
       */
      weekRender?: (week: string) => React.ReactNode;
      /**
       * 月份发生变化的回调
       */
      onMonthChange?: (
        e: React.SyntheticEvent,
        data: ICalendarMonthChangeData,
      ) => void;
      /**
       * 日期发生变化的回调
       */
      onChange?: (
        e: React.SyntheticEvent,
        data: { value: ICalendarValue },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;

export type CalendarRef = {
  /** 跳转到指定月份 */
  jumpTo?: (date: Date) => void;
};
