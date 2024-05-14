import { CurrentTime, FormatedCountdown } from './Countdown.types';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const timeUnits: [string, number][] = [
  ['Y', YEAR], // years
  ['M', MONTH], // months
  ['D', DAY], // days
  ['H', HOUR], // hours
  ['m', MINUTE], // minutes
  ['s', SECOND], // seconds
  ['S', 1], // million seconds
];

const preAppend = (num: number): string => {
  if (num < 0) return '00';
  return num < 10 ? `0${num}` : `${num}`;
};

/**
 * 解析时间，将结束时间戳拆分为剩余时间对象
 */
export const parseTime = (endTime: number, offsetTime: number): CurrentTime => {
  const now = new Date().getTime();
  let total = endTime - now - offsetTime || 0;
  total = total < 0 ? 0 : total;

  const years = Math.floor(total / YEAR);
  const months = Math.floor(total / MONTH);
  const days = Math.floor(total / DAY);
  const hours = Math.floor((total % DAY) / HOUR);
  const minutes = Math.floor((total % HOUR) / MINUTE);
  const seconds = Math.floor((total % MINUTE) / SECOND);
  const hoursWithDays = Math.floor(total / HOUR) % 24;

  return {
    total,
    years: preAppend(years),
    months: preAppend(months),
    days: preAppend(days),
    hours: preAppend(hours),
    minutes: preAppend(minutes),
    seconds: preAppend(seconds),
    hoursWithDays: preAppend(hoursWithDays),
  };
};

/**
 * 格式化倒计时，将剩余时间格式化为指定格式，并拆分位各个时间模块
 */
export const formatCountdown = (
  duration: number,
  format: string,
): FormatedCountdown => {
  let timeList = [];
  let leftDuration: number = duration;

  const escapeRegex = /\[[^\]]*]/g;
  const keepList: string[] = (format.match(escapeRegex) || []).map((str) =>
    str.slice(1, -1),
  );
  const templateText = format.replace(escapeRegex, '[]');

  const replacedText = timeUnits.reduce(
    ({ currentTemplate, valStr, value, isZero }, [name, unit]) => {
      if (currentTemplate.includes(name)) {
        const val = Math.floor(leftDuration / unit);
        isZero = val <= 0;
        leftDuration -= val * unit;

        let vStr = '';
        currentTemplate = currentTemplate.replace(
          new RegExp(`${name}+`, 'g'),
          (match: string) => {
            const len = match.length;
            vStr = val.toString().padStart(len, '0').slice(0, len);

            return vStr;
          },
        );
        timeList.push({ valStr: vStr, value: val, isZero });
        return { currentTemplate, valStr: vStr, value: val, isZero };
      }
      return { currentTemplate, valStr, isZero, value };
    },
    { currentTemplate: templateText, valStr: '', value: 0, isZero: false },
  );

  let index = 0;
  const timeStr = replacedText.currentTemplate.replace(escapeRegex, () => {
    const match = keepList[index];
    index += 1;
    return match;
  });

  const unitList = timeStr.match(/\D+/g);
  timeList = timeList.map((item, i) => {
    item.unitText = unitList[i];
    return item;
  });

  return {
    timeStr,
    timeList,
  };
};
