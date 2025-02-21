import { AccessTimeCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import clsx from 'clsx';
import React, { useMemo, useState, useEffect } from 'react';
import { useValue } from '@bifrostui/utils';
import { TimePickerProps, TimeSteps } from './DesktopTimePicker.types';
import './index.less';
import { isDisabledTime, dateToDayjs } from './utils/utils';
import DesktopPicker from '../DesktopPicker';
import useGetTimePickerContent from './useGetTimePickerContent';

dayjs.extend(customParseFormat);

const prefixCls = 'bui-time-picker';
const DesktopTimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (props, ref) => {
    const {
      views = ['hour', 'minute', 'second'],
      timeSteps = { hour: 1, minute: 1, second: 1 } as TimeSteps,
      ampm = false,
      className,
      inputRef,
      inputProps,
      value,
      defaultValue,
      disabled = false,
      disableOpenPicker = false,
      placeholder,
      open,
      format = ampm ? 'hh:mm:ss a' : 'HH:mm:ss',
      disabledTimeView = () => ({
        hour: () => {
          return [];
        },
        minute: () => {
          return [];
        },
        second: () => [],
      }),
      minTime,
      maxTime,
      icon,
      closeOnSelect = true,
      onChange,
      onClose,
      onOpen,
      DesktopPickerProps,
      renderItem,
      ...others
    } = props;
    // 是否展开日期选择
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputStr, setInputStr] = useState<string>('');
    const [useUserStr, setUseUserStr] = useState<boolean>(false);
    // 选中时间，value和defaultValue优先级高于onChange
    const [timeValue, triggerChange] = useValue({
      value,
      defaultValue,
      onChange,
    });
    const [temptValue, setTemptValue] = useState(timeValue);

    // 点击时间选择器icon
    const handleDatePickerIconClick = (e) => {
      e.stopPropagation();
      // 禁用或者禁用打开日期选择器,点击icon无反馈
      if (disabled || disableOpenPicker) return;
      setIsOpen(!isOpen);
    };
    // 点击输入框
    const handleTimePickerInputClick = (e) => {
      e.stopPropagation();
      if (inputProps?.readOnly) {
        if (disabled || disableOpenPicker || open !== undefined) return;
        setIsOpen(!isOpen);
        return;
      }
      // 非只读，输入框可输入，关闭浮层聚焦
      setIsOpen(false);
    };

    const { desktopTimePicker } = useGetTimePickerContent({
      views,
      timeSteps,
      ampm,
      minTime: dateToDayjs(minTime),
      maxTime: dateToDayjs(maxTime),
      setIsOpen,
      triggerChange,
      disabledTimeView,
      timeValue: dateToDayjs(timeValue),
      onClose,
      onOpen,
      closeOnSelect,
      renderItem,
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

      // 输入值不符合时间格式, 设置输入
      if (!dayjs(newValue, format, true).isValid()) {
        setInputStr(newValue);
        setUseUserStr(true);
      } else {
        setInputStr('');
        setUseUserStr(false);

        // 在disabledTime区间内，回退上次有效值
        if (
          isDisabledTime(
            dayjs(newValue, format),
            dateToDayjs(minTime),
            dateToDayjs(maxTime),
            disabledTimeView,
          )
        ) {
          return;
        }

        triggerChange(e, dayjs(e.target.value, format).toDate());
      }
    };

    const onMount = () => {
      onOpen?.();
      setTemptValue(timeValue);
    };
    const unMounted = (e) => {
      onClose?.();
      if (
        isDisabledTime(
          dayjs(timeValue),
          dateToDayjs(minTime),
          dateToDayjs(maxTime),
          disabledTimeView,
        )
      ) {
        triggerChange(e, temptValue);
      }
    };

    // placeholder优先级最高，format次之，最后兜底hh:mm:ss
    const showPlaceholder = useMemo(
      () => placeholder || format || 'hh:mm:ss',
      [placeholder, format],
    );

    const inputValue = useMemo(() => {
      if (useUserStr) {
        return inputStr;
      }

      if (timeValue) {
        return dayjs(timeValue).format(format);
      }

      // 校验不通过，返回空值
      return '';
    }, [timeValue, inputStr, useUserStr, format]);

    useEffect(() => {
      setUseUserStr(false);
    }, [timeValue]);

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
          onMount={onMount}
          onUnmounted={unMounted}
          content={desktopTimePicker()}
          inheritWidth={false}
          {...DesktopPickerProps}
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
              onBlur={() => setUseUserStr(false)}
              {...inputProps}
              onClick={handleTimePickerInputClick}
              onChange={onInputChange}
              value={inputValue}
            />
            <div
              onClick={handleDatePickerIconClick}
              className={`${prefixCls}-icon`}
            >
              {icon || <AccessTimeCircleOutlinedIcon htmlColor="#9c9ca5" />}
            </div>
          </div>
        </DesktopPicker>
      </div>
    );
  },
);

DesktopTimePicker.displayName = 'BUITimePicker';

export default DesktopTimePicker;
