import { type Mock } from 'vitest';
import useLocaleText from '../hooks/useLocaleText';
import { useTheme } from '../../ThemeProvider';
import enUS from '../en-US';
import zhCN from '../zh-CN';
import zhTW from '../zh-TW';

vi.mock('../../ThemeProvider', () => ({
  useTheme: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useLocaleText', () => {
  it('should return the default Chinese localization for a component', () => {
    (useTheme as Mock).mockReturnValue({ locale: undefined });

    const result = useLocaleText('calendar');
    expect(result).toEqual(zhCN.calendar);
  });

  it('should return the custom English localization for a component', () => {
    (useTheme as Mock).mockReturnValue({ locale: enUS });

    const result = useLocaleText('calendar');
    expect(result).toEqual(enUS.calendar);
  });

  it('should merge custom and default localizations', () => {
    const customLocale = {
      calendar: {
        cancel: 'Custom Cancel',
      },
    };

    (useTheme as Mock).mockReturnValue({ locale: customLocale });

    const result = useLocaleText('calendar');
    expect(result).toEqual({
      cancel: 'Custom Cancel',
      ...zhCN.calendar,
    });
  });

  describe('countdown localization', () => {
    it('should return the default Chinese countdown localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: undefined });

      const result = useLocaleText('countdown');
      expect(result).toEqual(zhCN.countdown);
      expect(result.remain.year).toBe('年');
      expect(result.remain.month).toBe('个月');
      expect(result.remain.day).toBe('天');
      expect(result.remain.hour).toBe('小时');
      expect(result.remain.minute).toBe('分钟');
      expect(result.remain.second).toBe('秒');
      expect(result.remainTime).toBe('剩余时间');
      expect(result.hasEnd).toBe('倒计时已结束');
      expect(result.willEnd).toBe('即将结束');
      expect(result.timer).toBe('倒计时器');
    });

    it('should return the English countdown localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: enUS });

      const result = useLocaleText('countdown');
      expect(result).toEqual(enUS.countdown);
      expect(result.remain.year).toBe('Year');
      expect(result.remain.month).toBe('Month');
      expect(result.remain.day).toBe('Day');
      expect(result.remain.hour).toBe('Hour');
      expect(result.remain.minute).toBe('Minute');
      expect(result.remain.second).toBe('Second');
      expect(result.remainTime).toBe('Remaining Time');
      expect(result.hasEnd).toBe('Countdown has ended');
      expect(result.willEnd).toBe('About to end');
      expect(result.timer).toBe('Timer');
    });

    it('should return the Traditional Chinese countdown localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: zhTW });

      const result = useLocaleText('countdown');
      expect(result).toEqual(zhTW.countdown);
      expect(result.remain.year).toBe('年');
      expect(result.remain.month).toBe('個月');
      expect(result.remain.day).toBe('天');
      expect(result.remain.hour).toBe('小時');
      expect(result.remain.minute).toBe('分鐘');
      expect(result.remain.second).toBe('秒');
      expect(result.remainTime).toBe('剩餘時間');
      expect(result.hasEnd).toBe('倒數計時已結束');
      expect(result.willEnd).toBe('即將結束');
      expect(result.timer).toBe('倒數計時器');
    });

    it('should merge custom countdown localization with default', () => {
      const customLocale = {
        countdown: {
          remain: {
            year: 'Custom Year',
            hour: 'Custom Hour',
          },
          timer: 'Custom Timer',
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('countdown');
      expect(result).toEqual({
        remain: {
          year: 'Custom Year',
          hour: 'Custom Hour',
          month: '个月',
          day: '天',
          minute: '分钟',
          second: '秒',
        },
        timer: 'Custom Timer',
        remainTime: '剩余时间',
        hasEnd: '倒计时已结束',
        willEnd: '即将结束',
      });
    });

    it('should merge partial custom countdown remain localization', () => {
      const customLocale = {
        countdown: {
          remain: {
            day: 'Custom Day',
          },
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('countdown');
      expect(result.remain.day).toBe('Custom Day');
      expect(result.remain.year).toBe('年');
      expect(result.remain.month).toBe('个月');
      expect(result.remain.hour).toBe('小时');
      expect(result.remain.minute).toBe('分钟');
      expect(result.remain.second).toBe('秒');
    });

    it('should handle empty custom countdown localization', () => {
      const customLocale = {
        countdown: {},
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('countdown');
      expect(result).toEqual(zhCN.countdown);
    });

    it('should handle undefined countdown in custom locale', () => {
      const customLocale = {
        dialog: {
          cancel: 'Custom Cancel',
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('countdown');
      expect(result).toEqual(zhCN.countdown);
    });
  });
});
