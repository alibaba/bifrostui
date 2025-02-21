import dayjs from 'dayjs/esm/index';
import { IDateTimePickerValue } from './DesktopDateTimePicker.types';

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
 * 格式化初始日期
 * @return undefined | Array<Date|null>
 */
export const formatDate = (
  value: IDateTimePickerValue,
  minDate: Date,
  maxDate: Date,
) => {
  // value 或 defaultValue为undefined应原值返回，外部需要做受控/非受控判断
  if (value === undefined || value === null) return undefined;

  let defaultStartDate = null;
  defaultStartDate = isRange(value as Date, minDate, maxDate)
    ? value
    : undefined;
  return defaultStartDate;
};
