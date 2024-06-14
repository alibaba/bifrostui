import dayjs from 'dayjs/esm/index';
import { ICalendarMode, ICalendarValue } from './Calendar.types';

/**
 * 判断日期是否相同
 */
export const isSame = (start: Date, end: Date) =>
  dayjs(start).isSame(end, 'day');

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
 * 判断是否在日期区间内
 */
export const isRange = (current: Date, start: Date, end: Date) => {
  let flag = true;

  if (geteDateDiff(current, start) < 0 || geteDateDiff(current, end) > 0) {
    flag = false;
  }

  return flag;
};

/**
 * 取数组第一个日期为开始日期，最后一个日期为结束日期
 */
export const generateRangeDate = (value: Date[]) => {
  const finalIndex = value.length - 1;

  return {
    start: value[0],
    end: value[finalIndex],
  };
};

/**
 * 格式化初始日期
 * @return undefined | Array<Date|null>
 */
export const formatDate = (
  mode: ICalendarMode,
  value: ICalendarValue,
  minDate: Date,
  maxDate: Date,
) => {
  // value 或 defaultValue为undefined应原值返回，外部需要做受控/非受控判断
  if (value === undefined) return value;

  let defaultStartDate = null;
  let defaultEndDate = null;
  if (mode === 'single' && value) {
    defaultStartDate = isRange(value as Date, minDate, maxDate) ? value : null;
  } else if (mode === 'range') {
    const { start, end } = generateRangeDate(value as Date[]);
    if (start) {
      defaultStartDate = isRange(start, minDate, maxDate) ? start : null;
    }

    if (end) {
      defaultEndDate = isRange(end, minDate, maxDate) ? end : null;
    }

    if (start && end && geteDateDiff(start, end) > 0) {
      // 传入的开始日期晚于结束日期，纠正日期范围
      defaultStartDate = end;
      defaultEndDate = start;
    }
  }

  return [defaultStartDate, defaultEndDate];
};
