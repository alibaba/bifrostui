import { formatCountdown } from '../utils';

describe('formatCountdown', () => {
  describe('basic time unit formatting', () => {
    it('formats seconds correctly', () => {
      const result = formatCountdown(5000, 's秒');
      expect(result.timeStr).toBe('5秒');
      expect(result.timeList).toHaveLength(1);
      expect(result.timeList[0].valStr).toBe('5');
      expect(result.timeList[0].value).toBe(5);
      expect(result.timeList[0].isZero).toBe(false);
      expect(result.timeList[0].unitText).toBe('秒');
    });

    it('formats minutes and seconds', () => {
      const result = formatCountdown(125000, 'm:s'); // 2 minutes 5 seconds
      expect(result.timeStr).toBe('2:5');
      expect(result.timeList).toHaveLength(2);
      expect(result.timeList[0].value).toBe(2);
      expect(result.timeList[1].value).toBe(5);
    });

    it('formats hours, minutes, and seconds', () => {
      const result = formatCountdown(3665000, 'H:m:s'); // 1 hour 1 minute 5 seconds
      expect(result.timeStr).toBe('1:1:5');
      expect(result.timeList).toHaveLength(3);
      expect(result.timeList[0].value).toBe(1);
      expect(result.timeList[1].value).toBe(1);
      expect(result.timeList[2].value).toBe(5);
    });

    it('formats days', () => {
      const result = formatCountdown(86400000, 'D[天]'); // 1 day
      expect(result.timeStr).toBe('1天');
      expect(result.timeList[0].value).toBe(1);
    });

    it('formats months', () => {
      const result = formatCountdown(30 * 24 * 60 * 60 * 1000, 'M[月]'); // 1 month
      expect(result.timeStr).toBe('1月');
      expect(result.timeList[0].value).toBe(1);
    });

    it('formats years', () => {
      const result = formatCountdown(365 * 24 * 60 * 60 * 1000, 'Y[年]'); // 1 year
      expect(result.timeStr).toBe('1年');
      expect(result.timeList[0].value).toBe(1);
    });

    it('formats milliseconds', () => {
      const result = formatCountdown(1500, 's:SSS'); // 1 second 500 milliseconds
      expect(result.timeStr).toBe('1:500');
      expect(result.timeList).toHaveLength(2);
      expect(result.timeList[0].value).toBe(1);
      expect(result.timeList[1].value).toBe(500);
    });
  });

  describe('padding behavior', () => {
    it('pads single digit with zero when using double characters', () => {
      const result = formatCountdown(5000, 'ss秒'); // 5 seconds
      expect(result.timeStr).toBe('05秒');
      expect(result.timeList[0].valStr).toBe('05');
    });

    it('pads hours, minutes, and seconds correctly', () => {
      const result = formatCountdown(3665000, 'HH:mm:ss'); // 1 hour 1 minute 5 seconds
      expect(result.timeStr).toBe('01:01:05');
      expect(result.timeList[0].valStr).toBe('01');
      expect(result.timeList[1].valStr).toBe('01');
      expect(result.timeList[2].valStr).toBe('05');
    });

    it('handles triple character padding', () => {
      const result = formatCountdown(5000, 'sss秒'); // 5 seconds
      expect(result.timeStr).toBe('005秒');
      expect(result.timeList[0].valStr).toBe('005');
    });

    it('handles value exceeding padding length', () => {
      const result = formatCountdown(125000, 'sss秒'); // 125 seconds with 3-digit padding
      // The function will pad to 3 digits, but 125 will be truncated to '125' (last 3 chars)
      expect(result.timeStr).toBe('125秒');
      expect(result.timeList[0].valStr).toBe('125');
    });

    it('pads and truncates milliseconds with triple characters', () => {
      const result = formatCountdown(1050, 'SSS毫秒'); // 1050 milliseconds
      // Pads to 3 digits: '1050' -> then slices to first 3: '105'
      expect(result.timeStr).toBe('105毫秒');
    });
  });

  describe('escaped text in square brackets', () => {
    it('preserves text in square brackets', () => {
      const result = formatCountdown(65000, 'mm[分]ss[秒]'); // 1 minute 5 seconds
      expect(result.timeStr).toBe('01分05秒');
      expect(result.timeList).toHaveLength(2);
    });

    it('handles multiple escaped sections', () => {
      const result = formatCountdown(3665000, 'HH[时]mm[分]ss[秒]');
      expect(result.timeStr).toBe('01时01分05秒');
      expect(result.timeList[0].unitText).toBe('时');
      expect(result.timeList[1].unitText).toBe('分');
      expect(result.timeList[2].unitText).toBe('秒');
    });

    it('handles escaped text with spaces', () => {
      const result = formatCountdown(65000, 'mm[mins ]ss[secs]');
      expect(result.timeStr).toBe('01mins 05secs');
    });

    it('handles empty square brackets', () => {
      const result = formatCountdown(5000, 's[]s秒');
      // Both 's' patterns are replaced with the same value '5'
      expect(result.timeStr).toBe('55秒');
    });

    it('preserves special characters in square brackets', () => {
      const result = formatCountdown(65000, 'mm[分钟]ss[秒钟]');
      expect(result.timeStr).toBe('01分钟05秒钟');
    });
  });

  describe('complex format strings', () => {
    it('formats complete datetime with all units', () => {
      const complexDuration =
        365 * 24 * 60 * 60 * 1000 + // 1 year
        30 * 24 * 60 * 60 * 1000 + // 1 month
        24 * 60 * 60 * 1000 + // 1 day
        60 * 60 * 1000 + // 1 hour
        60 * 1000 + // 1 minute
        5000; // 5 seconds

      const result = formatCountdown(
        complexDuration,
        'Y[年]M[月]D[日]H[时]m[分]s[秒]',
      );
      // Year/Month/Day are calculated independently, then subtracted for smaller units
      // 1 year, but months = floor(total/month) = 13, days = 396
      expect(result.timeStr).toBe('1年1月1日1时1分5秒');
    });

    it('formats with Chinese units', () => {
      const result = formatCountdown(3665000, 'HH[小时]mm[分钟]ss[秒]');
      expect(result.timeStr).toBe('01小时01分钟05秒');
    });

    it('formats with colon separators', () => {
      const result = formatCountdown(3665000, 'HH:mm:ss');
      expect(result.timeStr).toBe('01:01:05');
      expect(result.timeList[0].unitText).toBe(':');
      expect(result.timeList[1].unitText).toBe(':');
      expect(result.timeList[2].unitText).toBeUndefined();
    });

    it('formats with mixed separators', () => {
      const result = formatCountdown(3665000, 'HH[h] mm[m] ss[s]');
      expect(result.timeStr).toBe('01h 01m 05s');
    });
  });

  describe('edge cases', () => {
    it('handles zero duration', () => {
      const result = formatCountdown(0, 'HH:mm:ss');
      expect(result.timeStr).toBe('00:00:00');
      expect(result.timeList[0].isZero).toBe(true);
      expect(result.timeList[1].isZero).toBe(true);
      expect(result.timeList[2].isZero).toBe(true);
    });

    it('handles negative duration', () => {
      const result = formatCountdown(-5000, 'ss秒');
      // The function doesn't clamp negative values, it just calculates them
      expect(result.timeStr).toBe('-5秒');
    });

    it('handles very small duration (milliseconds only)', () => {
      const result = formatCountdown(500, 'SSS毫秒');
      expect(result.timeStr).toBe('500毫秒');
      expect(result.timeList[0].value).toBe(500);
    });

    it('handles very large duration', () => {
      const result = formatCountdown(
        999 * 365 * 24 * 60 * 60 * 1000,
        'YYY[年]',
      );
      expect(result.timeStr).toBe('999年');
      expect(result.timeList[0].value).toBe(999);
    });

    it('sets isZero flag correctly for zero values', () => {
      const result = formatCountdown(5000, 'HH:mm:ss'); // Only 5 seconds
      expect(result.timeList[0].isZero).toBe(true); // hours
      expect(result.timeList[1].isZero).toBe(true); // minutes
      expect(result.timeList[2].isZero).toBe(false); // seconds
    });

    it('handles format with only milliseconds', () => {
      const result = formatCountdown(1234, 'SSSS毫秒');
      expect(result.timeStr).toBe('1234毫秒');
    });

    it('handles empty format string', () => {
      const result = formatCountdown(5000, '');
      expect(result.timeStr).toBe('');
      expect(result.timeList).toHaveLength(0);
    });
  });

  describe('time unit extraction', () => {
    it('extracts unit text correctly with colons', () => {
      const result = formatCountdown(3665000, 'HH:mm:ss');
      expect(result.timeList[0].unitText).toBe(':');
      expect(result.timeList[1].unitText).toBe(':');
      expect(result.timeList[2].unitText).toBeUndefined();
    });

    it('extracts unit text correctly with Chinese characters', () => {
      const result = formatCountdown(65000, 'mm分ss秒');
      expect(result.timeList[0].unitText).toBe('分');
      expect(result.timeList[1].unitText).toBe('秒');
    });

    it('extracts unit text correctly with spaces', () => {
      const result = formatCountdown(65000, 'mm ss');
      expect(result.timeList[0].unitText).toBe(' ');
      expect(result.timeList[1].unitText).toBeUndefined();
    });

    it('extracts unit text from escaped brackets', () => {
      const result = formatCountdown(65000, 'mm[分钟]ss[秒]');
      expect(result.timeList[0].unitText).toBe('分钟');
      expect(result.timeList[1].unitText).toBe('秒');
    });
  });

  describe('time calculation accuracy', () => {
    it('calculates remaining time correctly after consuming higher units', () => {
      const result = formatCountdown(3665000, 'H:m:s'); // 1 hour 1 minute 5 seconds
      expect(result.timeList[0].value).toBe(1); // 1 hour
      expect(result.timeList[1].value).toBe(1); // 1 minute (not 61)
      expect(result.timeList[2].value).toBe(5); // 5 seconds
    });

    it('calculates days and hours correctly', () => {
      const duration = 25 * 60 * 60 * 1000; // 25 hours
      const result = formatCountdown(duration, 'D[天]H[时]');
      expect(result.timeList[0].value).toBe(1); // 1 day
      expect(result.timeList[1].value).toBe(1); // 1 hour (25 - 24)
    });

    it('calculates complex mixed units correctly', () => {
      const duration =
        2 * 24 * 60 * 60 * 1000 + // 2 days
        3 * 60 * 60 * 1000 + // 3 hours
        45 * 60 * 1000 + // 45 minutes
        30 * 1000; // 30 seconds

      const result = formatCountdown(duration, 'DD[天]HH[时]mm[分]ss[秒]');
      expect(result.timeList[0].value).toBe(2);
      expect(result.timeList[1].value).toBe(3);
      expect(result.timeList[2].value).toBe(45);
      expect(result.timeList[3].value).toBe(30);
    });
  });

  describe('return value structure', () => {
    it('returns correct structure with timeStr and timeList', () => {
      const result = formatCountdown(65000, 'mm:ss');
      expect(result).toHaveProperty('timeStr');
      expect(result).toHaveProperty('timeList');
      expect(Array.isArray(result.timeList)).toBe(true);
    });

    it('each timeList item has required properties', () => {
      const result = formatCountdown(65000, 'mm:ss');
      result.timeList.forEach((item) => {
        expect(item).toHaveProperty('valStr');
        expect(item).toHaveProperty('value');
        expect(item).toHaveProperty('isZero');
        expect(item).toHaveProperty('unitText');
      });
    });

    it('valStr is always a string', () => {
      const result = formatCountdown(65000, 'mm:ss');
      result.timeList.forEach((item) => {
        expect(typeof item.valStr).toBe('string');
      });
    });

    it('value is always a number', () => {
      const result = formatCountdown(65000, 'mm:ss');
      result.timeList.forEach((item) => {
        expect(typeof item.value).toBe('number');
      });
    });

    it('isZero is always a boolean', () => {
      const result = formatCountdown(65000, 'mm:ss');
      result.timeList.forEach((item) => {
        expect(typeof item.isZero).toBe('boolean');
      });
    });
  });
});
