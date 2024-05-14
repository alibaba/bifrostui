import clsx from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import { useDidMountEffect } from '@bifrostui/utils';
import { CountdownProps } from './Countdown.types';
import useCountdown from './useCountdown';
import { formatCountdown } from './utils';
import './Countdown.less';

const prefixCls = 'bui-countdown';

const Countdown = forwardRef<HTMLDivElement, CountdownProps>((props, ref) => {
  const {
    className,
    serverTimestamp,
    endTimestamp,
    remainingTime,
    format,
    unitStyle,
    valueStyle,
    timeSliceStyle,
    renderContent,
    onChange,
    onFinish,
    ...others
  } = props;

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
    }
  }, [serverTimestamp, endTimestamp]);

  const defaultRender = (timeIns) => {
    const { timeList } = formatCountdown(timeIns.total, format);

    return (
      <>
        {timeList.map((item, index) => {
          const { unitText, valStr } = item;
          const valueList = valStr.split('');
          return (
            <span
              key={`slice-${index}`}
              className={clsx(`${prefixCls}-slice`)}
              style={timeSliceStyle}
            >
              {/* 倒计时时间片 */}
              <span className={clsx(`${prefixCls}-slice-item`)}>
                {valueList.map((val, i) => (
                  <span
                    key={`slice-value-${i}`}
                    className={clsx(`${prefixCls}-slice-value`)}
                    style={valueStyle[i]}
                  >
                    {val}
                  </span>
                ))}
              </span>
              {/* 倒计时单位 */}
              {unitText && (
                <span
                  className={clsx(`${prefixCls}-slice-unit`)}
                  style={unitStyle}
                >
                  {unitText}
                </span>
              )}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div ref={ref} className={clsx(prefixCls, className)} {...others}>
      {renderContent ? renderContent(time) : defaultRender(time)}
    </div>
  );
});

Countdown.displayName = 'BuiCountdown';
Countdown.defaultProps = {
  format: 'HH:mm:ss',
  remainingTime: 0,
  unitStyle: {},
  valueStyle: [{}, {}],
  timeSliceStyle: {},
};

export default Countdown;
