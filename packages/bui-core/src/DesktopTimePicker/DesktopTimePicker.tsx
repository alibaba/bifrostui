import { AccessTimeCircleOutlinedIcon } from '@bifrostui/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import clsx from 'clsx';
import React, { useMemo, useState, useEffect } from 'react';
import { useValue } from '@bifrostui/utils';
import { TimePickerProps, TimeSteps, Views } from './DesktopTimePicker.types';
import { isDisabledTime, dateToDayjs } from './utils/utils';
import DesktopPicker from '../DesktopPicker';
import useGetTimePickerContent from './useGetTimePickerContent';

import './index.less';

dayjs.extend(customParseFormat);

const prefixCls = 'bui-d-time-picker';
// 定义允许的视图类型
const allowedViews: Views = ['hour', 'minute', 'second'];

const DesktopTimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (props, ref) => {
    const {
      views = allowedViews,
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
      format = ampm ? 'hh:mm:ss A' : 'HH:mm:ss',
      disabledTimeView = () => ({
        hour: () => [],
        minute: () => [],
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
      timeRender,
      ...others
    } = props;
    // 是否展开日期选择
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputStr, setInputStr] = useState<string>('');
    const [useUserStr, setUseUserStr] = useState<boolean>(false);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    // 选中时间，value和defaultValue优先级高于onChange
    const [timeValue, triggerChange] = useValue({
      value,
      defaultValue,
      onChange,
    });

    // 点击时间选择器icon
    const handleDatePickerIconClick = (e) => {
      e.stopPropagation();
      // 禁用或者禁用打开日期选择器,点击icon无反馈
      if (disabled || disableOpenPicker || open !== undefined) return;
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

    const { desktopTimePanel } = useGetTimePickerContent({
      views: Array.from(
        new Set(views.filter((view) => allowedViews.includes(view))),
      ),
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
      timeRender,
      setIsInvalid,
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

        // 处理timeValue为空时的日期，使用minTime或maxTime的日期，若都不存在，取当天日期
        let validTime;
        if (dateToDayjs(timeValue)) {
          validTime = dateToDayjs(timeValue);
        } else if (minTime) {
          validTime = dateToDayjs(minTime);
        } else if (maxTime) {
          validTime = dateToDayjs(maxTime);
        } else {
          validTime = dayjs();
        }
        // 获取年月日
        const year = validTime.year();
        const month = validTime.month() + 1;
        const date = validTime.date();
        const newTimeValue = dayjs(`${year}-${month}-${date} ${newValue}`);
        // 在disabledTime区间内，回退上次有效值
        if (
          isDisabledTime(
            newTimeValue,
            dateToDayjs(minTime),
            dateToDayjs(maxTime),
            disabledTimeView,
          )
        ) {
          return;
        }

        triggerChange(e, newTimeValue.toDate());
      }
    };

    const onMount = () => {
      onOpen?.();
    };
    const unMounted = () => {
      onClose?.();
    };

    // placeholder优先级最高，format次之，最后兜底hh:mm:ss
    const showPlaceholder = useMemo(
      () => placeholder || format,
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
          [`${prefixCls}-invalid`]: isInvalid,
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
          content={desktopTimePanel()}
          inheritWidth={false}
          {...DesktopPickerProps}
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
