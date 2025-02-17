import React from 'react';
import { OverrideProps } from '@bifrostui/types';
import { PickerProps, IPickerOptionItem } from '../Picker';

export enum DatePickerType {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  TIME = 'time',
  MINUTE = 'minute',
  SECOND = 'second',
}

export type DatePickerProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      open?: boolean;
      title?: string;
      defaultValue?: Date;
      value?: Date;
      picker?: DatePickerType[];
      minDate?: Date;
      maxDate?: Date;
      PickerProps?: PickerProps;
      formatter?: (
        type: DatePickerType,
        option: IPickerOptionItem,
      ) => IPickerOptionItem;
      filter?: (
        type: DatePickerType,
        options: IPickerOptionItem[],
      ) => IPickerOptionItem[];
      onConfirm?: (e: React.SyntheticEvent, { value }: { value: Date }) => void;
      onCancel?: (e: React.SyntheticEvent) => void;
      onClose?: (e: React.SyntheticEvent, { value }: { value: Date }) => void;
      onChange?: (
        e: React.SyntheticEvent,
        { value }: { type: DatePickerType; value: Date },
      ) => void;
    };
    defaultComponent: D;
  },
  D
>;
