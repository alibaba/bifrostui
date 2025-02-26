import React, { forwardRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useValue } from '@bifrostui/utils';
import { DatePickerProps, DatePickerType } from './DatePicker.types';
import Picker, { IPickerOptionItem } from '../Picker';

const MIN_DATE = new Date(new Date().getFullYear() - 10, 0, 1);
const MAX_DATE = new Date(new Date().getFullYear() + 10, 11, 31);
const DEFAULT_PICKER = [
  DatePickerType.YEAR,
  DatePickerType.MONTH,
  DatePickerType.DAY,
];

function isValidDate(value) {
  return value instanceof Date && !Number.isNaN(value.getTime());
}

// 补零
const padZero = (num: number | string, targetLength = 2) => {
  let str = `${num}`;
  while (str.length < targetLength) {
    str = `0${str}`;
  }
  return str;
};

// 获取某年某月的最大天数
const getMaxDay = (year: number, monthIndex: number) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

// 将当前日期转换为pickerValue
const getDateTypeValue = (date: Date, type: DatePickerType) => {
  switch (type) {
    case DatePickerType.YEAR:
      return date.getFullYear();
    case DatePickerType.MONTH:
      return date.getMonth() + 1;
    case DatePickerType.DAY:
      return date.getDate();
    case DatePickerType.HOUR:
      return date.getHours();
    case DatePickerType.MINUTE:
      return date.getMinutes();
    case DatePickerType.SECOND:
      return date.getSeconds();
    default:
      throw new Error(`错误的picker类型：${type}`);
  }
};

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    className,
    value: propValue,
    defaultValue,
    views = DEFAULT_PICKER,
    minDate: propMinDate = MIN_DATE,
    maxDate: propMaxDate = MAX_DATE,
    formatter,
    disableDateTimeView,
    dateTimeStep,
    onConfirm,
    onClose,
    onChange,
    ...others
  } = props;

  const [options, setOptions] = useState<IPickerOptionItem[][]>([]);
  const [pickerValue, setPickerValue] = useState<(string | number)[]>([]);

  const formatDate = (date: Date | null) => {
    let formattedDate = date;

    if (
      !formattedDate ||
      !isValidDate(date) ||
      formattedDate.getTime() < propMinDate.getTime()
    ) {
      formattedDate = propMinDate;
    }

    if (formattedDate.getTime() > propMaxDate.getTime()) {
      formattedDate = propMaxDate;
    }

    return formattedDate;
  };

  const [currentDate, triggerChange] = useValue<Date>({
    value: propValue && formatDate(propValue),
    defaultValue: formatDate(defaultValue),
  });

  const handleConfirm = (e) => {
    onConfirm?.(e, { value: currentDate });
  };

  const handleClose = (e) => {
    onClose?.(e, { value: currentDate });
  };

  const handleChange = (e, { value, columnIndex }) => {
    if (value[columnIndex] === null) return;
    const current = new Date(currentDate);

    switch (views[columnIndex]) {
      case DatePickerType.YEAR:
        current.setFullYear(value[columnIndex]);
        break;
      case DatePickerType.MONTH: {
        const selectedMaxDay = getMaxDay(
          current.getFullYear(),
          Number(value[columnIndex]) - 1,
        );

        if (current.getDate() > selectedMaxDay) {
          current.setDate(selectedMaxDay);
        }

        current.setMonth(value[columnIndex] - 1);
        break;
      }
      case DatePickerType.DAY:
        current.setDate(value[columnIndex]);
        break;
      case DatePickerType.HOUR:
        current.setHours(value[columnIndex]);
        break;
      case DatePickerType.MINUTE:
        current.setMinutes(value[columnIndex]);
        break;
      case DatePickerType.SECOND:
        current.setSeconds(value[columnIndex]);
        break;
      default:
        throw new Error(`错误的picker类型：${views[columnIndex]}`);
    }

    triggerChange(e, formatDate(current));
    onChange?.(e, { type: views[columnIndex], value: current });
  };

  const generateOptions = (
    min: number,
    max: number,
    type: DatePickerType,
    columnIndex: number,
  ) => {
    const step = dateTimeStep?.[type] || 1;
    let valueIndex = 0;
    const optionsArray = Array.from(
      { length: (max - min + 1) / step || 1 },
      (_, index) => {
        const value = index * step + min;

        const option = {
          value: padZero(value),
          label: padZero(value),
        };

        if (value <= getDateTypeValue(currentDate, type)) {
          valueIndex = index;
        }

        if (formatter) {
          return formatter(type, {
            value: option.value,
            label: option.label,
          });
        }

        return option;
      },
    );

    pickerValue[columnIndex] = optionsArray[valueIndex].value;
    setPickerValue([...pickerValue]);

    if (
      disableDateTimeView?.[type] &&
      typeof disableDateTimeView[type] === 'function'
    ) {
      const disabledOptions = disableDateTimeView[type](optionsArray);

      return optionsArray.map((option) => {
        if (disabledOptions.includes(option)) {
          return {
            ...option,
            disabled: true,
          };
        }

        return option;
      });
    }

    return optionsArray;
  };

  const getBoundary = (type: string, value: Date) => {
    const boundary = type === 'min' ? propMinDate : propMaxDate;
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;
    let seconds = 0;

    if (type === 'max') {
      month = 12;
      date = getMaxDay(value.getFullYear(), value.getMonth());
      hour = 23;
      minute = 59;
      seconds = 59;
    }
    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;
      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();
        if (value.getDate() === date) {
          hour = boundary.getHours();
          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
            if (value.getMinutes() === minute) {
              seconds = boundary.getSeconds();
            }
          }
        }
      }
    }
    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute,
      [`${type}Seconds`]: seconds,
    };
  };

  const generateRanges = () => {
    const ranges: number[][] = [];
    const { minYear, minMonth, minDate, minHour, minMinute, minSeconds } =
      getBoundary('min', currentDate);
    const { maxYear, maxMonth, maxDate, maxHour, maxMinute, maxSeconds } =
      getBoundary('max', currentDate);

    for (let i = 0; i < views.length; i += 1) {
      const type = views[i];

      switch (type) {
        case DatePickerType.YEAR:
          ranges.push([minYear, maxYear]);
          break;
        case DatePickerType.MONTH:
          ranges.push([minMonth, maxMonth]);
          break;
        case DatePickerType.DAY:
          ranges.push([minDate, maxDate]);
          break;
        case DatePickerType.HOUR:
          ranges.push([minHour, maxHour]);
          break;
        case DatePickerType.MINUTE:
          ranges.push([minMinute, maxMinute]);
          break;
        case DatePickerType.SECOND:
          ranges.push([minSeconds, maxSeconds]);
          break;
        default:
          throw new Error(`错误的picker类型：${type}`);
      }
    }

    return ranges;
  };

  const generateRangeOptions = () =>
    generateRanges().map((range, index) =>
      generateOptions(range[0], range[1], views[index], index),
    );

  useEffect(() => {
    setOptions(generateRangeOptions());
  }, [currentDate, views, propMinDate, propMaxDate]);

  return (
    <Picker
      {...others}
      className={clsx('bui-date-picker', className)}
      ref={ref}
      options={options}
      value={pickerValue}
      onConfirm={handleConfirm}
      onClose={handleClose}
      onOptionChange={handleChange}
    />
  );
});

DatePicker.displayName = 'BuiDatePicker';

export default DatePicker;
