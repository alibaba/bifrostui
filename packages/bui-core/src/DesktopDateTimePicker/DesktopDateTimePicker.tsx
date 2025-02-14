import { DateOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
import clsx from 'clsx';
import React, { useMemo, useState, useEffect } from 'react';
import { useValue } from '@bifrostui/utils';
import { DateTimePickerProps } from './DesktopDateTimePicker.types';
import { formatDate } from './utils';
import DesktopPicker from '../DesktopPicker';
import useGetDatePickerContent from '../DesktopDatePicker/useGetDatePickerContent';
import useGetTimePickerContent from '../DesktopTimePicker/useGetTimePickerContent';
import './index.less';

const prefixCls = 'bui-datetime-picker';
const DesktopDateTimePicker = React.forwardRef<
  HTMLDivElement,
  DateTimePickerProps
>((props, ref) => {
  const {
    className,
    inputRef,
    inputProps,
    value,
    defaultValue,
    disabled = false,
    disableOpenPicker = false,
    placeholder,
    format = 'YYYY/MM/DD HH:mm:ss',
    open,
    disabledDate,
    views = ['year', 'month', 'day', 'hour', 'minute', 'second'],
    minDate = dayjs(dayjs().format('YYYYMMDD')).subtract(10, 'year').toDate(),
    maxDate = dayjs(dayjs().format('YYYYMMDD')).add(10, 'year').toDate(),
    icon,
    headerBarLeftIcon,
    headerBarRightIcon,
    closeOnSelect = true,
    onChange,
    onClose,
    onOpen,
    monthRender,
    yearRender,
    onMonthChange,
    onYearChange,
    DesktopPickerProps,
    CalendarProps,
    ...others
  } = props;
  // 是否展开日期选择
  const [isOpen, setIsOpen] = useState<boolean>(open);

  // 获取选择类型
  const getPicker = useMemo(() => {
    if (views.includes('day')) {
      return 'day';
    }
    if (views.includes('month')) {
      return 'month';
    }
    if (views.includes('year')) {
      return 'year';
    }
    return 'day';
  }, [views]);
  // 选择类型，year，month，day
  const [selectType, setSelectType] = useState<'year' | 'month' | 'day'>(
    getPicker,
  );

  const formattedValue = formatDate(value, minDate, maxDate);
  const formattedDefaultValue = formatDate(defaultValue, minDate, maxDate);

  const [inputStr, setInputStr] = useState<string>('');
  const [useUserStr, setUseUserStr] = useState<boolean>(false);
  const [calendarValue, triggerChange] = useValue({
    value: formattedValue,
    defaultValue: formattedDefaultValue,
    onChange,
  });

  // 点击时间选择器icon
  const handleDatePickerIconClick = (e) => {
    // 禁用或者禁用打开日期选择器,点击icon无反馈
    if (disabled || disableOpenPicker || open !== undefined) return;
    setIsOpen(!isOpen);
  };
  // 点击输入框
  const handleDatePickerInputClick = (e) => {
    e.stopPropagation();
    if (inputProps?.readOnly) {
      if (disabled || disableOpenPicker) return;
      setIsOpen(!isOpen);
      return;
    }
    // 非只读，输入框可输入，关闭浮层聚焦
    setIsOpen(false);
  };

  const { desktopDatePicker } = useGetDatePickerContent({
    format,
    minDate,
    maxDate,
    setIsOpen,
    triggerChange,
    disabledDate,
    calendarValue,
    setSelectType,
    picker: getPicker,
    selectType,
    headerBarLeftIcon,
    headerBarRightIcon,
    CalendarProps,
    onClose,
    monthRender,
    yearRender,
    onMonthChange,
    onYearChange,
    closeOnSelect: false,
    style: {
      borderRadius: '3px 0px 0px 3px',
    },
  });
  const { desktopTimePicker } = useGetTimePickerContent({
    views: views.filter(
      (item) => item !== 'day' && item !== 'month' && item !== 'year',
    ),
    minTime: dayjs(minDate),
    maxTime: dayjs(maxDate),
    setIsOpen,
    triggerChange,
    closeOnSelect,
    timeValue: dayjs(calendarValue),
  });

  const onInputChange = (e) => {
    e.stopPropagation();
    const newValue = e.target.value;
    // 输入框清空
    if (newValue.length === 0) {
      setInputStr('');
      setUseUserStr(true);
      triggerChange(e, null);
      return;
    }
    if (dayjs(newValue, format, true).isValid()) {
      // 输入框长度等于format长度, 检查数值有效性
      setInputStr('');
      setUseUserStr(false);
      if (disabledDate?.(dayjs(newValue).toDate())) {
        return;
      }
      // 大于最大值，赋值最大值
      if (dayjs(newValue).isAfter(maxDate)) {
        triggerChange(e, maxDate);
        return;
      }
      // 小于最小值，赋值最小值
      if (dayjs(newValue).isBefore(minDate)) {
        triggerChange(e, minDate);
        return;
      }
      triggerChange(e, dayjs(e.target.value).toDate());
    } else {
      // 输入框长度等于format长度, 输入无效
      setUseUserStr(true);
      setInputStr(e.target.value);
    }
  };
  const onmount = () => {
    onOpen?.();
  };
  const unMounted = () => {
    onClose?.();
    setSelectType(getPicker);
  };
  // placeholder优先级最高，format次之，最后兜底YYYY/MM/DD
  const showPlaceholder = useMemo(() => {
    if (placeholder) {
      return placeholder;
    }
    return format;
  }, [placeholder, format]);

  const renderValue = useMemo(() => {
    if (useUserStr) {
      return inputStr;
    }
    if (calendarValue) {
      return dayjs(calendarValue as Date).format(format);
    }
    return '';
  }, [calendarValue, inputStr, useUserStr, format]);

  useEffect(() => {
    setUseUserStr(false);
  }, [calendarValue]);
  return (
    <div
      {...others}
      className={clsx(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-active`]: isOpen,
      })}
      ref={ref}
    >
      <DesktopPicker
        open={open ?? isOpen}
        miniBackdropInvisible={open !== undefined}
        onClose={(e, data) => {
          setIsOpen(data?.value);
        }}
        onMount={onmount}
        onUnmounted={unMounted}
        content={
          <div
            className={`${prefixCls}-box`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {desktopDatePicker()}
            {desktopTimePicker()}
          </div>
        }
        {...DesktopPickerProps}
        inheritWidth={false}
      >
        <div className={`${prefixCls}-container`}>
          <input
            {...inputProps}
            aria-invalid
            autoComplete="off"
            placeholder={showPlaceholder}
            type="text"
            inputMode="text"
            ref={inputRef}
            className={clsx(`${prefixCls}-content`, {
              [inputProps?.className]: inputProps?.className,
            })}
            onBlur={() => setUseUserStr(false)}
            onClick={handleDatePickerInputClick}
            onChange={onInputChange}
            value={renderValue}
          />
          <div
            onClick={handleDatePickerIconClick}
            className={`${prefixCls}-icon`}
          >
            {icon || <DateOutlinedIcon htmlColor="#9c9ca5" />}
          </div>
        </div>
      </DesktopPicker>
    </div>
  );
});

DesktopDateTimePicker.displayName = 'BUIDesktopDateTimePicker';

export default DesktopDateTimePicker;
