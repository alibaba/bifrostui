import dayjs, { Dayjs } from 'dayjs';

import {
  DisabledTimeView,
  ViewType,
  ViewTypeWithMeridiem,
  ITimeInstance,
  ITimeItemNumberInstance,
  TimeSteps,
} from '../DesktopTimePicker.types';

/**
 * 判断时间是否在可选日期区间内
 */
export const getIsRangeDate = (time: Dayjs, start?: Dayjs, end?: Dayjs) => {
  if (!time) return true;
  // 如果没有起始时间和结束时间，则默认返回 true
  if (!start && !end) {
    return true;
  }
  if (start && end) {
    return !time.isBefore(start, 'day') && !time.isAfter(end, 'day');
  }
  if (start) {
    return (
      !time.isBefore(start, 'day') && (end ? !time.isAfter(end, 'day') : true)
    );
  }
  if (end) {
    return (
      !time.isAfter(end, 'day') && (start ? !time.isBefore(start, 'day') : true)
    );
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
 * 判断时间是否在 minTime & maxTime 时间区间内
 */
export const getIsRangeTime = (time: Dayjs, start?: Dayjs, end?: Dayjs) => {
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
 * 判断时间是否在disabledView || outOf minTime-maxTime 时间区间内
 */
export const isDisabledTime = (
  time: Dayjs,
  start?: Dayjs,
  end?: Dayjs,
  disabledTimeView?: DisabledTimeView,
) => {
  if (!time) return false;
  return (
    isDisabledViewTime(time, disabledTimeView) ||
    !getIsRangeTime(time, start, end)
  );
};

/**
 * 获取分钟时间面板 是否小于minTime分钟
 */
export const getOutOfMinRangeMinutes = (
  hourValue: number,
  minTime: Dayjs,
  dataList: ITimeItemNumberInstance[],
) => {
  if (!minTime) {
    return [];
  }
  const outOfMinRangeMinutes: number[] = [];

  if (hourValue === minTime.hour()) {
    outOfMinRangeMinutes.push(
      ...dataList
        .map((item) => item.value)
        .filter((minute) => minute < minTime.minute()),
    );
  } else if (hourValue < minTime.hour()) {
    outOfMinRangeMinutes.push(...dataList.map((item) => item.value));
  }
  return outOfMinRangeMinutes;
};

export const getOutOfMaxRangeMinutes = (
  hourValue: number,
  maxTime: Dayjs,
  dataList: ITimeItemNumberInstance[],
) => {
  if (!maxTime) {
    return [];
  }
  const outOfMaxRangeMinutes: number[] = [];

  if (hourValue === maxTime.hour()) {
    outOfMaxRangeMinutes.push(
      ...dataList
        .map((item) => item.value)
        .filter((minute) => minute > maxTime.minute()),
    );
  } else if (hourValue > maxTime.hour()) {
    outOfMaxRangeMinutes.push(...dataList.map((item) => item.value));
  }
  return outOfMaxRangeMinutes;
};

export const getOutOfMinRangeSeconds = (
  hourValue: number,
  minuteValue: number,
  minTime: Dayjs,
  dataList: ITimeItemNumberInstance[],
) => {
  if (!minTime) {
    return [];
  }
  const outOfMinRangeMinutes: number[] = [];
  if (hourValue === minTime.hour() && minuteValue === minTime.minute()) {
    outOfMinRangeMinutes.push(
      ...dataList
        .map((item) => item.value)
        .filter((second) => second < minTime.second()),
    );
  } else if (hourValue === minTime.hour() && minuteValue < minTime.minute()) {
    outOfMinRangeMinutes.push(...dataList.map((item) => item.value));
  } else if (hourValue < minTime.hour()) {
    outOfMinRangeMinutes.push(...dataList.map((item) => item.value));
  }

  return outOfMinRangeMinutes;
};

export const getOutOfMaxRangeSeconds = (
  hourValue: number,
  minuteValue: number,
  maxTime: Dayjs,
  dataList: ITimeItemNumberInstance[],
) => {
  if (!maxTime) {
    return [];
  }
  const outOfMaxRangeMinutes: number[] = [];
  if (hourValue === maxTime.hour() && minuteValue === maxTime.minute()) {
    outOfMaxRangeMinutes.push(
      ...dataList
        .map((item) => item.value)
        .filter((second) => second > maxTime.second()),
    );
  } else if (hourValue === maxTime.hour() && minuteValue > maxTime.minute()) {
    outOfMaxRangeMinutes.push(...dataList.map((item) => item.value));
  } else if (hourValue > maxTime.hour()) {
    outOfMaxRangeMinutes.push(...dataList.map((item) => item.value));
  }
  return outOfMaxRangeMinutes;
};

// 获取disabled的时间面板
export const getdisabledTime = (
  type: ViewTypeWithMeridiem,
  timeValue: Dayjs,
  minTime: Dayjs,
  maxTime: Dayjs,
  dataList: ITimeInstance[],
  disabledTimeView: DisabledTimeView,
  timeSteps: TimeSteps,
  ampm?: boolean,
) => {
  // 不在日期区间内，所有时间禁止
  const isRangeDate = getIsRangeDate(timeValue, minTime, maxTime);

  if (!isRangeDate) {
    return dataList.map((item) => item.value);
  }

  const hourValue = timeValue?.hour();
  const minuteValue = timeValue?.minute();

  // 获取disabledTimeView设置的禁止时间
  const getDisabledViewTime = () => {
    switch (type) {
      case 'hour': {
        const disabledHours = disabledTimeView?.().hour?.() || [];
        if (ampm && timeValue?.format('A') === 'PM') {
          return disabledHours.map((hour) => hour - 12);
        }
        return disabledHours;
      }
      case 'minute': {
        const disabledMinutes = disabledTimeView?.().minute?.(hourValue) || [];
        return disabledMinutes;
      }

      case 'second': {
        const disabledSeconds =
          disabledTimeView?.().second?.(hourValue, minuteValue) || [];
        return disabledSeconds;
      }
      default:
        return [];
    }
  };
  const disabledViewTime = getDisabledViewTime();

  // 获取minTime&maxTime设置的禁止时间
  const getOutOfMinRangeTime = () => {
    if (!minTime) {
      return [];
    }
    switch (type) {
      case 'hour': {
        const outOfRangeHours = dataList
          .map((item) => item.value)
          .filter((hour) => {
            const minHour = minTime?.hour();
            const meridiemValue = timeValue?.format('A');
            // 处理12小时制
            if (ampm) {
              if (meridiemValue === 'AM') {
                return minHour >= 12 || (hour as number) < minHour;
              }
              if (minHour < 12) {
                return false;
              }
              return (hour as number) < minHour - 12;
            }
            return (hour as number) < minHour;
          });

        return outOfRangeHours;
      }
      case 'minute': {
        const outOfRangeMinutes = getOutOfMinRangeMinutes(
          hourValue,
          minTime,
          dataList as ITimeItemNumberInstance[],
        );
        return outOfRangeMinutes;
      }
      case 'second': {
        const outOfRangeSeconds = getOutOfMinRangeSeconds(
          hourValue,
          minuteValue,
          minTime,
          dataList as ITimeItemNumberInstance[],
        );
        return outOfRangeSeconds;
      }
      default:
        return [];
    }
  };

  const getOutOfMaxRangeTime = () => {
    if (!maxTime) {
      return [];
    }
    switch (type) {
      case 'hour': {
        const outOfRangeHours = dataList
          .map((item) => item.value)
          .filter((hour) => {
            if (ampm) {
              const maxHour = maxTime?.hour();
              const meridiemValue = timeValue?.format('A');
              if (maxHour >= 12) {
                if (meridiemValue === 'AM') {
                  return false;
                }
                return (hour as number) > maxHour - 12;
              }
              if (meridiemValue === 'AM') {
                return (hour as number) > maxHour;
              }
              return true;
            }
            return (hour as number) > maxTime?.hour();
          });
        return outOfRangeHours;
      }
      case 'minute': {
        const outOfRangeMinutes = getOutOfMaxRangeMinutes(
          hourValue,
          maxTime,
          dataList as ITimeItemNumberInstance[],
        );
        return outOfRangeMinutes;
      }

      case 'second': {
        const outOfRangeSeconds = getOutOfMaxRangeSeconds(
          hourValue,
          minuteValue,
          maxTime,
          dataList as ITimeItemNumberInstance[],
        );
        return outOfRangeSeconds;
      }
      default:
        return [];
    }
  };

  const outOfMinRangeTime = getOutOfMinRangeTime();
  const outOfMaxRangeTime = getOutOfMaxRangeTime();

  const isEqualMinDate = timeValue?.isSame(minTime, 'day');
  const isEqualMaxDate = timeValue?.isSame(maxTime, 'day');

  // 计算meridiem的disable
  const allHours = Array.from({ length: 24 }, (_, i) => i);
  // 获得禁用时间视图的小时数组，若无则默认为空数组
  const disabledViewHours = disabledTimeView?.().hour?.() || [];
  // 过滤出小于 minTime 和大于 maxTime 的小时数组
  const minHour = minTime?.hour() ?? 0;
  const maxHour = maxTime?.hour() ?? 23;
  const outOfMinHours = allHours.filter((hour) => hour < minHour);
  const outOfMaxHours = allHours.filter((hour) => hour > maxHour);
  // 计算amList和pmList
  const generateHourArray = (start, end, step) => {
    if (!step) {
      step = 1;
    }
    return Array.from(
      { length: Math.ceil((end - start) / step) },
      (_, i) => start + i * step,
    );
  };

  const hourStep = timeSteps.hour ?? 1;
  const amArr = generateHourArray(0, 12, hourStep);
  const pmArr = generateHourArray(12, 24, hourStep);

  // 判断禁用AM和PM
  const disabledAmPm = (disabledHours) => {
    const containsAll = (arr) =>
      arr.every((item) => disabledHours.includes(item));

    const containsAllAmArr = containsAll(amArr);
    const containsAllPmArr = containsAll(pmArr);

    if (containsAllAmArr && containsAllPmArr) return ['AM', 'PM'];
    if (containsAllAmArr) return ['AM'];
    if (containsAllPmArr) return ['PM'];
    return [];
  };

  // 处理时间值为空时
  if (!timeValue || (isEqualMinDate && isEqualMaxDate)) {
    if (type === 'meridiem') {
      const disabledHours = [
        ...new Set([...outOfMinHours, ...outOfMaxHours, ...disabledViewHours]),
      ];
      return disabledAmPm(disabledHours);
    }
    return [
      ...new Set([
        ...disabledViewTime,
        ...outOfMinRangeTime,
        ...outOfMaxRangeTime,
      ]),
    ];
  }
  if (!isEqualMinDate && !isEqualMaxDate) {
    if (type === 'meridiem') {
      const disabledHours = disabledViewHours;
      return disabledAmPm(disabledHours);
    }
    return disabledViewTime;
  }
  if (isEqualMinDate) {
    if (type === 'meridiem') {
      const disabledHours = [
        ...new Set([...outOfMinHours, ...disabledViewHours]),
      ];
      return disabledAmPm(disabledHours);
    }
    return [...new Set([...disabledViewTime, ...outOfMinRangeTime])];
  }
  if (type === 'meridiem') {
    const disabledHours = [
      ...new Set([...outOfMaxHours, ...disabledViewHours]),
    ];
    return disabledAmPm(disabledHours);
  }
  return [...new Set([...disabledViewTime, ...outOfMaxRangeTime])];
};

// 计算!disabledTimeView && >=minTime 的最小合理时间
export const calculateValidMinTime = (
  disabledTimeView: DisabledTimeView,
  minTime?: Dayjs,
) => {
  const defaultTime = dayjs().set('hour', 0).set('minute', 0).set('second', 0);
  let validTime = minTime || defaultTime;

  // 从minTime出发，找到最小可用时间
  const disabledHours = disabledTimeView?.().hour?.();
  if (disabledHours.includes(validTime.hour())) {
    const validHours = Array.from({ length: 24 }, (_, i) => i).filter(
      (value) => !disabledHours.includes(value) && value > validTime.hour(),
    );
    const minValue = Math.min(...validHours);
    validTime = validTime.set('hour', minValue);
  }

  // 如果hour大于minTime.hour，则分秒最小为0
  if (validTime.hour() > minTime?.hour()) {
    validTime = validTime.set('minute', 0);
    validTime = validTime.set('second', 0);
  }

  const disabledMinutes = disabledTimeView?.().minute?.(validTime.hour());
  if (disabledMinutes.includes(validTime.minute())) {
    const validMinutes = Array.from({ length: 60 }, (_, i) => i).filter(
      (value) => {
        if (validTime.hour() > minTime?.hour()) {
          return !disabledMinutes.includes(value);
        }
        return !disabledMinutes.includes(value) && value > validTime.minute();
      },
    );
    const minValue = Math.min(...validMinutes);
    validTime = validTime.set('minute', minValue);
  }

  if (validTime.minute() > minTime?.minute()) {
    validTime = validTime.set('second', 0);
  }
  const disabledSeconds = disabledTimeView?.().second?.(
    validTime.hour(),
    validTime.minute(),
  );
  if (disabledSeconds.includes(validTime.second())) {
    const validSeconds = Array.from({ length: 60 }, (_, i) => i).filter(
      (value) => {
        if (
          validTime.hour() > minTime?.hour() ||
          validTime.minute() > minTime?.minute()
        ) {
          return !disabledSeconds.includes(value);
        }
        return !disabledMinutes.includes(value) && value > validTime.second();
      },
    );
    const minValue = Math.min(...validSeconds);
    validTime = validTime.set('second', minValue);
  }
  return validTime;
};

export const dateToDayjs = (date: Date) => {
  if (!date) return undefined;
  return dayjs(date);
};
