import dayjs from 'dayjs';
import {
  isSame,
  isEqualVal,
  getDateDiff,
  isRange,
  generateRangeDate,
  formatDate,
} from '../utils';
import { ICalendarMode } from '../Calendar.types';

describe('Calendar utils', () => {
  describe('isSame', () => {
    it('should return true for the same dates', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-15').toDate();
      expect(isSame(date1, date2)).toBe(true);
    });

    it('should return false for different dates', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-16').toDate();
      expect(isSame(date1, date2)).toBe(false);
    });

    it('should return true for same dates with different time', () => {
      const date1 = dayjs('2023-04-15 10:30:00').toDate();
      const date2 = dayjs('2023-04-15 14:45:00').toDate();
      expect(isSame(date1, date2)).toBe(true);
    });
  });

  describe('isEqualVal', () => {
    it('should return true for the same single date values', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-15').toDate();
      expect(isEqualVal(date1, date2)).toBe(true);
    });

    it('should return false for different single date values', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-16').toDate();
      expect(isEqualVal(date1, date2)).toBe(false);
    });

    it('should return true for the same date arrays', () => {
      const dateArray1 = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-20').toDate(),
      ];
      const dateArray2 = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-20').toDate(),
      ];
      expect(isEqualVal(dateArray1, dateArray2)).toBe(true);
    });

    it('should return false for date arrays with different lengths', () => {
      const dateArray1 = [dayjs('2023-04-15').toDate()];
      const dateArray2 = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-20').toDate(),
      ];
      expect(isEqualVal(dateArray1, dateArray2)).toBe(false);
    });

    it('should return false for date arrays with different dates', () => {
      const dateArray1 = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-20').toDate(),
      ];
      const dateArray2 = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-21').toDate(),
      ];
      expect(isEqualVal(dateArray1, dateArray2)).toBe(false);
    });

    it('should return false when comparing array with non-array', () => {
      const dateArray = [dayjs('2023-04-15').toDate()];
      const date = dayjs('2023-04-15').toDate();
      expect(isEqualVal(dateArray, date)).toBe(false);
    });

    it('should return false when comparing different types', () => {
      const date = dayjs('2023-04-15').toDate();
      const str = null;
      expect(isEqualVal(date, str)).toBe(false);
    });

    it('should return false for non-date values', () => {
      expect(isEqualVal(null as any, null as any)).toBe(false);
    });
  });

  describe('getDateDiff', () => {
    it('should return 0 for the same dates', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-15').toDate();
      expect(getDateDiff(date1, date2)).toBe(0);
    });

    it('should return positive number when first date is later', () => {
      const date1 = dayjs('2023-04-20').toDate();
      const date2 = dayjs('2023-04-15').toDate();
      expect(getDateDiff(date1, date2)).toBe(5);
    });

    it('should return negative number when first date is earlier', () => {
      const date1 = dayjs('2023-04-15').toDate();
      const date2 = dayjs('2023-04-20').toDate();
      expect(getDateDiff(date1, date2)).toBe(-5);
    });
  });

  describe('isRange', () => {
    const startDate = dayjs('2023-04-01').toDate();
    const endDate = dayjs('2023-04-30').toDate();

    it('should return true for date within range', () => {
      const date = dayjs('2023-04-15').toDate();
      expect(isRange(date, startDate, endDate)).toBe(true);
    });

    it('should return true for start date', () => {
      const date = dayjs('2023-04-01').toDate();
      expect(isRange(date, startDate, endDate)).toBe(true);
    });

    it('should return true for end date', () => {
      const date = dayjs('2023-04-30').toDate();
      expect(isRange(date, startDate, endDate)).toBe(true);
    });

    it('should return false for date before start', () => {
      const date = dayjs('2023-03-31').toDate();
      expect(isRange(date, startDate, endDate)).toBe(false);
    });

    it('should return false for date after end', () => {
      const date = dayjs('2023-05-01').toDate();
      expect(isRange(date, startDate, endDate)).toBe(false);
    });
  });

  describe('generateRangeDate', () => {
    it('should return first and last dates from array', () => {
      const dates = [
        dayjs('2023-04-15').toDate(),
        dayjs('2023-04-16').toDate(),
        dayjs('2023-04-17').toDate(),
        dayjs('2023-04-18').toDate(),
      ];
      const result = generateRangeDate(dates);
      expect(result.start).toBe(dates[0]);
      expect(result.end).toBe(dates[3]);
    });

    it('should return same date for single element array', () => {
      const dates = [dayjs('2023-04-15').toDate()];
      const result = generateRangeDate(dates);
      expect(result.start).toBe(dates[0]);
      expect(result.end).toBe(dates[0]);
    });
  });

  describe('formatDate', () => {
    const minDate = dayjs('2023-04-01').toDate();
    const maxDate = dayjs('2023-04-30').toDate();

    it('should return undefined when value is undefined', () => {
      expect(formatDate('single', undefined, minDate, maxDate)).toBe(undefined);
    });

    describe('single mode', () => {
      const mode: ICalendarMode = 'single';

      it('should return valid date within range', () => {
        const value = dayjs('2023-04-15').toDate();
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([value, null]);
      });

      it('should return null for date outside range', () => {
        const value = dayjs('2023-05-15').toDate();
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([null, null]);
      });

      it('should return null for null value', () => {
        const result = formatDate(mode, null, minDate, maxDate);
        expect(result).toEqual([null, null]);
      });
    });

    describe('range mode', () => {
      const mode: ICalendarMode = 'range';

      it('should return valid dates within range', () => {
        const startDate = dayjs('2023-04-15').toDate();
        const endDate = dayjs('2023-04-20').toDate();
        const value = [startDate, endDate];
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([startDate, endDate]);
      });

      it('should return null for dates outside range', () => {
        const startDate = dayjs('2023-03-15').toDate();
        const endDate = dayjs('2023-05-20').toDate();
        const value = [startDate, endDate];
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([null, null]);
      });

      it('should swap dates when start is after end', () => {
        const startDate = dayjs('2023-04-20').toDate();
        const endDate = dayjs('2023-04-15').toDate();
        const value = [startDate, endDate];
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([endDate, startDate]);
      });

      it('should handle partial valid dates', () => {
        const startDate = dayjs('2023-04-15').toDate();
        const endDate = dayjs('2023-05-20').toDate();
        const value = [startDate, endDate];
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([startDate, null]);
      });

      it('should handle null values', () => {
        const value = [null, null];
        const result = formatDate(mode, value, minDate, maxDate);
        expect(result).toEqual([null, null]);
      });
    });
  });
});
