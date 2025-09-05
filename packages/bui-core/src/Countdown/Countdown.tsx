import clsx from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import { useDidMountEffect } from '@bifrostui/utils';
import { CountdownProps } from './Countdown.types';
import useCountdown from './useCountdown';
import { formatCountdown } from './utils';
import { useLocaleText } from '../locales';
import './index.less';

const prefixCls = 'bui-countdown';

const Countdown = forwardRef<HTMLDivElement, CountdownProps>((props, ref) => {
  const {
    className,
    serverTimestamp,
    endTimestamp,
    remainingTime = 0,
    format = 'HH:mm:ss',
    renderContent,
    onChange,
    onFinish,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedby,
    role = 'timer',
    ...others
  } = props;
  const { remain, remainTime, willEnd, hasEnd, timer } =
    useLocaleText('countdown');
  // 开始时间戳
  const [startTime, setStartTime] = useState(
    () => serverTimestamp ?? Date.now(),
  );
  // 结束时间戳
  const [endTime, setEndTime] = useState(
    () => endTimestamp ?? startTime + +remainingTime,
  );
  const { time, isEnd } = useCountdown({ startTime, endTime, onChange });

  useEffect(() => {
    if (isEnd) {
      onFinish?.();
    }
  }, [isEnd]);

  useDidMountEffect(() => {
    if (remainingTime !== undefined) {
      const start = Date.now();
      setStartTime(start);
      setEndTime(start + +remainingTime);
    }
  }, [remainingTime]);

  useEffect(() => {
    if (serverTimestamp && endTimestamp) {
      setStartTime(serverTimestamp);
      setEndTime(endTimestamp);
    } else if (endTimestamp) {
      setStartTime(Date.now());
      setEndTime(endTimestamp);
    }
  }, [serverTimestamp, endTimestamp]);

  // 生成屏幕阅读器友好的时间描述
  const getAccessibleTimeDescription = (timeIns) => {
    const { years, months, days, hours, minutes, seconds, total } = timeIns;
    if (total <= 0) {
      return hasEnd;
    }

    const parts = [];
    if (parseInt(years, 10) > 0)
      parts.push(`${parseInt(years, 10)}${remain.year}`);
    if (parseInt(months, 10) > 0)
      parts.push(`${parseInt(months, 10)}${remain.month}`);
    if (parseInt(days, 10) > 0)
      parts.push(`${parseInt(days, 10)}${remain.day}`);
    if (parseInt(hours, 10) > 0)
      parts.push(`${parseInt(hours, 10)}${remain.hour}`);
    if (parseInt(minutes, 10) > 0)
      parts.push(`${parseInt(minutes, 10)}${remain.minute}`);
    if (parseInt(seconds, 10) > 0)
      parts.push(`${parseInt(seconds, 10)}${remain.second}`);

    return parts.length > 0 ? `${remainTime}：${parts.join('')}` : willEnd;
  };

  const defaultRender = (timeIns) => {
    const { timeList } = formatCountdown(timeIns.total, format);
    const accessibleDescription = getAccessibleTimeDescription(timeIns);

    return (
      <>
        {/* 隐藏的屏幕阅读器文本 */}
        <span
          className={clsx(`${prefixCls}-sr-only`)}
          aria-live="polite"
          aria-atomic="true"
        >
          {accessibleDescription}
        </span>
        {/* 可视化倒计时显示 */}
        {timeList.map((item, index) => {
          const { unitText, valStr } = item;
          const valueList = valStr.split('');
          return (
            <span
              key={`slice-${index}`}
              className={clsx(`${prefixCls}-slice`)}
              aria-hidden="true"
            >
              {/* 倒计时时间片 */}
              <span className={clsx(`${prefixCls}-slice-item`)}>
                {valueList.map((val, i) => (
                  <span
                    key={`slice-value-${i}`}
                    className={clsx(`${prefixCls}-slice-value`)}
                  >
                    {val}
                  </span>
                ))}
              </span>
              {/* 倒计时单位 */}
              {unitText && (
                <span className={clsx(`${prefixCls}-slice-unit`)}>
                  {unitText}
                </span>
              )}
            </span>
          );
        })}
      </>
    );
  };

  // 计算ARIA属性
  const ariaProps = {
    role,
    'aria-label':
      ariaLabel || `${timer}，${getAccessibleTimeDescription(time)}`,
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedby,
    'aria-live': 'polite' as const,
    'aria-atomic': true,
  };

  return (
    <div
      ref={ref}
      className={clsx(prefixCls, className)}
      {...ariaProps}
      {...others}
    >
      {renderContent ? renderContent(time) : defaultRender(time)}
    </div>
  );
});

Countdown.displayName = 'BuiCountdown';

export default Countdown;
