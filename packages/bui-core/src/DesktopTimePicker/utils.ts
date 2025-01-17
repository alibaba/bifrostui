import dayjs, { Dayjs } from 'dayjs';

import {
  DisabledTimeView,
  ITimePickerValue,
  ViewType,
  ViewTypeWithMeridiem,
  ITimeItemInstance,
} from './DesktopTimePicker.types';

/**
 * 计算日期差
 */
export const geteDateDiff = (a: Date, b: Date) => {
  return dayjs(dayjs(a).format('YYYYMMDD')).diff(
    dayjs(dayjs(b).format('YYYYMMDD')),
    'day',
  );
};

/**
 * 判断时间是否在 minTime & maxTime 时间区间内
 */
export const isRangeTime = (time: Dayjs, start?: Dayjs, end?: Dayjs) => {
  if (start && end) {
    return !time.isBefore(start, 'second') && !time.isAfter(end, 'second');
  }
  if (start) {
    return !time.isBefore(start, 'second');
  }
  if (end) {
    return !time.isAfter(end, 'second');
  }
  return true;
};

/**
 * 判断时间是否在 disabledView 时间区间内
 */
export const isDisabledViewTime = (
  time: Dayjs,
  disabledTimeView: DisabledTimeView,
) => {
  const isDisabledViewTimeItem = (type: ViewType) => {
    const disabledArr = disabledTimeView?.()[type](time.hour(), time.minute());
    const value = time[type]();
    return disabledArr?.indexOf(value) !== -1;
  };

  return (
    isDisabledViewTimeItem('hour') ||
    isDisabledViewTimeItem('minute') ||
    isDisabledViewTimeItem('second')
  );
};

/**
 * 判断时间是否在 非minTime-maxTime || disabledView 时间区间内
 */
export const isDisabledTime = (
  time: Dayjs,
  start?: Dayjs,
  end?: Dayjs,
  disabledTimeView?: DisabledTimeView,
) => {
  return (
    isDisabledViewTime(time, disabledTimeView) || !isRangeTime(time, start, end)
  );
};
/**
 * 格式化初始时间
 * @return undefined | Array<Dayjs|null>
 */
export const formatTime = (
  value: ITimePickerValue,
  minTime: Dayjs,
  maxTime: Dayjs,
  disabledTimeView: DisabledTimeView,
) => {
  // value 或 defaultValue为undefined应原值返回，外部需要做受控/非受控判断
  if (value === undefined || value === null) return undefined;

  let defaultStartTime = null;
  defaultStartTime = !isDisabledTime(value, minTime, maxTime, disabledTimeView)
    ? value
    : undefined;
  return defaultStartTime;
};

export const getOutOfRangeMinutes = (
  hourValue,
  minTime: Dayjs,
  maxTime: Dayjs,
  dataList,
) => {
  if (!minTime && !maxTime) {
    return [];
  }

  const outOfMinRangeMinutes: number[] = [];
  const outOfMaxRangeMinutes: number[] = [];

  if (minTime && hourValue === minTime.hour()) {
    outOfMinRangeMinutes.push(
      ...dataList
        .map((item: { value: number }) => item.value)
        .filter((minute: number) => minute < minTime.minute()),
    );
  }

  if (maxTime && hourValue === maxTime.hour()) {
    outOfMaxRangeMinutes.push(
      ...dataList
        .map((item: { value: number }) => item.value)
        .filter((minute: number) => minute > maxTime.minute()),
    );
  }
  return [...new Set([...outOfMinRangeMinutes, ...outOfMaxRangeMinutes])];
};

export const getOutOfRangeSeconds = (
  hourValue,
  minuteValue,
  minTime,
  maxTime,
  dataList,
) => {
  if (!minTime && !maxTime) {
    return [];
  }

  const outOfMinRangeMinutes: number[] = [];
  const outOfMaxRangeMinutes: number[] = [];

  if (
    minTime &&
    hourValue === minTime.hour() &&
    minuteValue === minTime.minute()
  ) {
    outOfMinRangeMinutes.push(
      ...dataList
        .map((item: { value: number }) => item.value)
        .filter((minute: number) => minute < minTime.minute()),
    );
  }

  if (
    maxTime &&
    hourValue === maxTime.hour() &&
    minuteValue === maxTime.minute()
  ) {
    outOfMaxRangeMinutes.push(
      ...dataList
        .map((item: { value: number }) => item.value)
        .filter((minute: number) => minute > maxTime.minute()),
    );
  }
  return [...new Set([...outOfMinRangeMinutes, ...outOfMaxRangeMinutes])];
};

export const getdisabledTime = (
  type: ViewTypeWithMeridiem,
  timeValue: Dayjs,
  minTime: Dayjs,
  maxTime: Dayjs,
  dataList: ITimeItemInstance[],
  disabledTimeView: DisabledTimeView,
) => {
  // todo selectedDate
  const hourValue = timeValue?.hour();
  const minuteValue = timeValue?.minute();

  switch (type) {
    case 'hour': {
      const disabledHours = disabledTimeView?.().hour?.() || [];
      const outOfRangeHours = dataList
        .map((item) => item.value)
        .filter(
          (hour) =>
            (hour as number) < minTime?.hour() ||
            (hour as number) > maxTime?.hour(),
        );
      return [...new Set([...disabledHours, ...outOfRangeHours])];
    }

    case 'minute': {
      const disabledMinutes = disabledTimeView?.().minute?.(hourValue) || [];

      const outOfRangeMinutes = getOutOfRangeMinutes(
        hourValue,
        minTime,
        maxTime,
        dataList,
      );

      return [...new Set([...disabledMinutes, ...outOfRangeMinutes])];
    }

    case 'second': {
      const disabledSeconds =
        disabledTimeView?.().second?.(hourValue, minuteValue) || [];
      const outOfRangeSeconds = getOutOfRangeSeconds(
        hourValue,
        minuteValue,
        minTime,
        maxTime,
        dataList,
      );
      return [...new Set([...disabledSeconds, ...outOfRangeSeconds])];
    }
    default:
      return [];
  }
};
