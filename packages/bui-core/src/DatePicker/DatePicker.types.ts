import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import { PickerProps, IPickerOptionItem } from '../Picker';

export enum DatePickerType {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  HOUR = 'hour',
  MINUTE = 'minute',
  SECOND = 'second',
}

export type DatePickerOption = IPickerOptionItem & {
  value: number;
};

export type DatePickerProps<
  D extends React.ElementType = 'div',
  P = Omit<
    PickerProps,
    'value' | 'defaultValue' | 'onChange' | 'onConfirm' | 'onClose'
  >,
> = OverrideProps<
  {
    props: P & {
      // 默认选中的值，当组件非受控时使用
      defaultValue?: Date;
      // 选中的值，当组件受控时使用
      value?: Date;
      // 日期选择器类型
      views?: DatePickerType[];
      // 可选择的最小日期
      minDate?: Date;
      // 可选择的最大日期
      maxDate?: Date;
      // 是否展示选择器的单位，年/月/日/时/分/秒
      showUnit?: boolean;
      // 禁止选择的日期
      disableDateTimeView?: Partial<{
        [key in DatePickerType]: (options: number[]) => number[];
      }>;
      // 时间间隔，设置递增步长
      dateTimeStep?: Partial<{
        [key in DatePickerType]: number;
      }>;
      // 对选项进行格式化处理
      formatter?: (
        type: DatePickerType,
        option: DatePickerOption,
      ) => DatePickerOption;
      // 对选项进行过滤
      filter?: (
        type: DatePickerType,
        options: DatePickerOption[],
      ) => DatePickerOption[];
      // 点击确定按钮时触发
      onConfirm?: (e: React.SyntheticEvent, { value }: { value: Date }) => void;
      // 确定和取消时都触发
      onClose?: (e: React.SyntheticEvent, { value }: { value: Date }) => void;
      // 选项改变时触发
      onChange?: (
        e: React.SyntheticEvent,
        { value }: { type: DatePickerType; value: Date },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
