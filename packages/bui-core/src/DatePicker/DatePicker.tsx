import React, { forwardRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { DatePickerProps, DatePickerType } from './DatePicker.types';
import Picker, { IPickerOptionItem } from '../Picker';

// TODO: 数据量大可能会有性能问题
// TODO: 使用共享变量是否合适
// TODO: 日期禁用
const MIN_DATE = new Date(new Date().getFullYear() - 10, 0, 1);
const MAX_DATE = new Date(new Date().getFullYear() + 10, 11, 31);
const DEFAULT_PICKER = [
  DatePickerType.YEAR,
  DatePickerType.MONTH,
  DatePickerType.DAY,
];

// 获取某年某月的最大天数
const getMaxDay = (year: number, monthIndex: number) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

// 将当前日期转换为pickerValue
const dateToPickerValue = (date: Date, picker: DatePickerType[]) => {
  const result: string[] = [];

  for (let i = 0; i < picker.length; i += 1) {
    const type = picker[i];

    switch (type) {
      case DatePickerType.YEAR:
        result.push(`${date.getFullYear()}`);
        break;
      case DatePickerType.MONTH:
        result.push(`${date.getMonth() + 1}`);
        break;
      case DatePickerType.DAY:
        result.push(`${date.getDate()}`);
        break;
      case DatePickerType.TIME:
        result.push(`${date.getHours()}`);
        break;
      case DatePickerType.MINUTE:
        result.push(`${date.getMinutes()}`);
        break;
      case DatePickerType.SECOND:
        result.push(`${date.getSeconds()}`);
        break;
      default:
        throw new Error(`错误的picker类型：${type}`);
    }
  }

  return result;
};

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    className,
    style,
    open,
    title,
    value: propValue,
    defaultValue,
    picker = DEFAULT_PICKER,
    minDate: propMinDate = MIN_DATE,
    maxDate: propMaxDate = MAX_DATE,
    formatter,
    filter,
    PickerProps,
    onConfirm,
    onCancel,
    onClose,
    onChange,
  } = props;

  const [options, setOptions] = useState<IPickerOptionItem[][]>([]);
  const [pickerValue, setPickerValue] = useState<string[]>();

  const formatDate = (date: Date | null) => {
    let formattedDate = date;

    if (!formattedDate || !(formattedDate instanceof Date)) {
      formattedDate = propMinDate;
    }

    return new Date(
      Math.min(
        Math.max(formattedDate.getTime(), propMinDate.getTime()),
        propMaxDate.getTime(),
      ),
    );
  };

  const [currentDate, setCurrentDate] = useState<Date>(
    formatDate(propValue || defaultValue),
  );

  const handleConfirm = (e) => {
    onConfirm?.(e, { value: currentDate });
  };

  const handleCancel = (e) => {
    onCancel?.(e);
  };

  const handleClose = (e) => {
    onClose?.(e, { value: currentDate });
  };

  const handleChange = (e, { value, columnIndex }) => {
    const selectedDate = new Date(currentDate);

    switch (picker[columnIndex]) {
      case DatePickerType.YEAR:
        selectedDate.setFullYear(value[columnIndex]);
        break;
      case DatePickerType.MONTH: {
        const selectedMaxDay = getMaxDay(
          selectedDate.getFullYear(),
          value[columnIndex] - 1,
        );

        if (selectedDate.getDate() > selectedMaxDay) {
          selectedDate.setDate(selectedMaxDay);
        }

        selectedDate.setMonth(value[columnIndex] - 1);
        break;
      }
      case DatePickerType.DAY:
        selectedDate.setDate(value[columnIndex]);
        break;
      case DatePickerType.TIME:
        selectedDate.setHours(value[columnIndex]);
        break;
      case DatePickerType.MINUTE:
        selectedDate.setMinutes(value[columnIndex]);
        break;
      case DatePickerType.SECOND:
        selectedDate.setSeconds(value[columnIndex]);
        break;
      default:
        throw new Error(`错误的picker类型：${picker[columnIndex]}`);
    }
    setCurrentDate(formatDate(selectedDate));
    onChange?.(e, { type: picker[columnIndex], value: selectedDate });
  };

  const generateOptions = (min: number, max: number, type: DatePickerType) => {
    const optionsArray = Array.from({ length: max - min + 1 }, (_, index) => {
      const option = {
        value: `${index + min}`,
        label: `${index + min}`,
      };

      if (formatter) {
        return formatter(type, {
          value: option.value,
          label: option.label,
        });
      }

      return option;
    });

    if (filter) {
      return filter(type, optionsArray);
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
      date = getMaxDay(value.getFullYear(), value.getMonth() + 1);
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

    for (let i = 0; i < picker.length; i += 1) {
      const type = picker[i];

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
        case DatePickerType.TIME:
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
      generateOptions(range[0], range[1], picker[index]),
    );

  useEffect(() => {
    setOptions(generateRangeOptions());
    setPickerValue(dateToPickerValue(currentDate, picker));
  }, [currentDate, picker, propMinDate, propMaxDate]);

  return (
    <div className={clsx('bui-date-picker', className)} style={style} ref={ref}>
      <Picker
        {...PickerProps}
        open={open}
        title={title}
        options={options}
        value={pickerValue}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={handleClose}
        onOptionChange={handleChange}
      />
    </div>
  );
});

DatePicker.displayName = 'BUIDatePicker';

export default DatePicker;
