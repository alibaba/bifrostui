import { DateOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
import clsx from 'clsx';
import React, { useMemo, useState, useRef } from 'react';
import { useValue, useForkRef, useDidMountEffect } from '@bifrostui/utils';
import { DatePickerProps } from './DesktopDatePicker.types';
import './index.less';
import { formatDate } from './utils';
import DesktopPicker from '../DesktopPicker';
import useGetDatePickerContent from './useGetDatePickerContent';

const prefixCls = 'bui-date-picker';
const DesktopDatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const {
      className,
      inputRef,
      inputProps,
      value,
      defaultValue,
      disabled,
      disableOpenPicker,
      placeholder,
      format = 'YYYY/MM/DD',
      open,
      disabledDate,
      picker,
      minDate,
      maxDate,
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
      desktopPickerProps,
      calendarProps,
    } = props;
    const rootRef = useRef(null);
    const nodeRef = useForkRef(ref, rootRef);
    // 是否展开日期选择
    const [isOpen, setIsOpen] = useState<boolean>(open);

    // 选择类型，year，month，day
    const [selectType, setSelectType] = useState<'year' | 'month' | 'day'>(
      'year',
    );

    const formattedValue = formatDate(value, minDate, maxDate);
    const formattedDefaultValue = formatDate(defaultValue, minDate, maxDate);

    const [inputStr, setInputStr] = useState<string>('');
    const [renderInputStr, setRenderInputStr] = useState<boolean>(false);
    // 选中日期，value和defaultValue优先级高于onChange
    const [calendarValue, triggerChange] = useValue({
      value: formattedValue,
      defaultValue: formattedDefaultValue,
      onChange,
    });

    // 点击时间选择器icon
    const handleDatePickerIconClick = (e) => {
      e.stopPropagation();
      // 禁用或者禁用打开日期选择器,点击icon无反馈
      if (disabled || disableOpenPicker) return;
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
      prefixCls,
      format,
      minDate,
      maxDate,
      setIsOpen,
      triggerChange,
      disabledDate,
      calendarValue,
      setSelectType,
      picker,
      isOpen,
      selectType,
      headerBarLeftIcon,
      headerBarRightIcon,
      desktopPickerProps,
      calendarProps,
      onClose,
      onOpen,
      monthRender,
      yearRender,
      onMonthChange,
      onYearChange,
      closeOnSelect,
    });

    const onInputChange = (e) => {
      e.stopPropagation();
      const newValue = e.target.value;
      // 输入框清空
      if (newValue.length === 0) {
        setInputStr('');
        setRenderInputStr(true);
        triggerChange(e, null);
        return;
      }
      // 输入框长度小于format长度, 设置输入框
      if (newValue.length > 0 && newValue.length !== format.length) {
        setInputStr(e.target.value);
        setRenderInputStr(true);
      } else if (dayjs(newValue).isValid()) {
        // 输入框长度等于format长度, 检查数值有效性
        setInputStr('');
        setRenderInputStr(false);
        // 大于最大值，赋值最大值
        if (dayjs(newValue).isAfter(maxDate)) {
          triggerChange(e, maxDate);
          return;
        }
        // 小于最大值，赋值最小值
        if (dayjs(newValue).isBefore(minDate)) {
          triggerChange(e, minDate);
          return;
        }
        triggerChange(e, dayjs(e.target.value).toDate());
      } else {
        // 输入框长度等于format长度, 输入无效
        setRenderInputStr(true);
        setInputStr(e.target.value);
      }
    };

    useDidMountEffect(() => {
      if (open !== undefined) setIsOpen(open);
    }, [open]);
    // placeholder优先级最高，format次之，最后兜底YYYY/MM/DD
    const showPlaceholder = useMemo(() => {
      if (placeholder) {
        return placeholder;
      }
      if (format) {
        return format;
      }
      return 'YYYY/MM/DD';
    }, [placeholder, format]);

    const renderValue = useMemo(() => {
      if (renderInputStr) {
        return inputStr;
      }
      if (calendarValue) {
        return dayjs(calendarValue as Date).format(format);
      }
      return 'YYYY/MM/DD';
    }, [calendarValue, inputStr, renderInputStr, format]);
    return (
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-active`]: isOpen,
        })}
        ref={nodeRef}
      >
        <div className={`${prefixCls}-container`}>
          <input
            aria-invalid
            autoComplete="off"
            placeholder={showPlaceholder}
            type="text"
            inputMode="text"
            ref={inputRef}
            className={clsx(`${prefixCls}-content`, {
              [inputProps?.className]: inputProps?.className,
            })}
            onBlur={() => setRenderInputStr(false)}
            {...inputProps}
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
        <DesktopPicker
          isOpen={isOpen}
          parentRef={rootRef}
          onClose={() => setIsOpen(false)}
          {...desktopPickerProps}
        >
          {desktopDatePicker()}
        </DesktopPicker>
      </div>
    );
  },
);

DesktopDatePicker.displayName = 'BUIDatePicker';
DesktopDatePicker.defaultProps = {
  disabled: false,
  disableOpenPicker: false,
  inputProps: {
    readOnly: false,
  },
  open: false,
  minDate: dayjs(dayjs().format('YYYYMMDD')).subtract(10, 'year').toDate(),
  maxDate: dayjs(dayjs().format('YYYYMMDD')).add(10, 'year').toDate(),
  picker: 'day',
};

export default DesktopDatePicker;
