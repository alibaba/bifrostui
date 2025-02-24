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

export type DatePickerProps<
  D extends React.ElementType = 'div',
  P = PickerProps,
> = OverrideProps<
  {
    props: P & {
      defaultValue?: Date; // 默认选中的值，当组件非受控时使用
      value?: Date; // 选中的值，当组件受控时使用
      views?: DatePickerType[]; // 日期选择器类型
      minDate?: Date; // 可选择的最小日期
      maxDate?: Date; // 可选择的最大日期
      disableDateTimeView?: {
        [key in DatePickerType]: (
          options: IPickerOptionItem[],
        ) => IPickerOptionItem[];
      }; // 禁止选择的日期
      dateTimeStep?: {
        [key in DatePickerType]: number;
      }; // 时间间隔，设置递增步长
      formatter?: (
        type: DatePickerType,
        option: IPickerOptionItem,
      ) => IPickerOptionItem; // 对选项进行格式化处理
      onConfirm?: (e: React.SyntheticEvent, { value }: { value: Date }) => void; // 点击确定按钮时触发
      onClose?: (e: React.SyntheticEvent, { value }: { value: Date }) => void; // 确定和取消时都触发
      onChange?: (
        e: React.SyntheticEvent,
        { value }: { type: DatePickerType; value: Date },
      ) => void; // 选项改变时触发
    };
    defaultComponent: D;
  },
  D
>;
