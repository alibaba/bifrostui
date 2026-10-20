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
            month: '个月',
            day: '天',
            minute: '分钟',
            second: '秒',
          },
          timer: 'Custom Timer',
          remainTime: '剩余时间',
          hasEnd: '倒计时已结束',
          willEnd: '即将结束',
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
            year: '中国年',
            month: '本月',
            hour: 'Custom hour',
            minute: 'Custom minute',
            second: 'Custom second',
          },
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('countdown');
      expect(result.remain.day).toBe('Custom Day');
      expect(result.remain.year).toBe('中国年');
      expect(result.remain.month).toBe('本月');
      expect(result.remain.hour).toBe('Custom hour');
      expect(result.remain.minute).toBe('Custom minute');
      expect(result.remain.second).toBe('Custom second');
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

  describe('progress localization', () => {
    it('should return the default Chinese progress localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: undefined });

      const result = useLocaleText('progress');
      expect(result).toEqual(zhCN.progress);
      expect(result.notStarted).toBe('未开始');
      expect(result.justBegun).toBe('刚刚开始');
      expect(result.gettingStarted).toBe('开始进行');
      expect(result.inProgress).toBe('进行中');
      expect(result.moreThanHalfway).toBe('过半完成');
      expect(result.nearingCompletion).toBe('接近完成');
      expect(result.almostComplete).toBe('即将完成');
      expect(result.complete).toBe('已完成');
    });

    it('should return the English progress localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: enUS });

      const result = useLocaleText('progress');
      expect(result).toEqual(enUS.progress);
      expect(result.notStarted).toBe('Not started');
      expect(result.justBegun).toBe('Just begun');
      expect(result.gettingStarted).toBe('Getting started');
      expect(result.inProgress).toBe('In progress');
      expect(result.moreThanHalfway).toBe('More than halfway');
      expect(result.nearingCompletion).toBe('Nearing completion');
      expect(result.almostComplete).toBe('Almost complete');
      expect(result.complete).toBe('Complete');
    });

    it('should return the Traditional Chinese progress localization', () => {
      (useTheme as Mock).mockReturnValue({ locale: zhTW });

      const result = useLocaleText('progress');
      expect(result).toEqual(zhTW.progress);
      expect(result.notStarted).toBe('未開始');
      expect(result.justBegun).toBe('剛剛開始');
      expect(result.gettingStarted).toBe('開始進行');
      expect(result.inProgress).toBe('進行中');
      expect(result.moreThanHalfway).toBe('過半完成');
      expect(result.nearingCompletion).toBe('接近完成');
      expect(result.almostComplete).toBe('即將完成');
      expect(result.complete).toBe('已完成');
    });

    it('should merge custom progress localization with default', () => {
      const customLocale = {
        progress: {
          notStarted: 'Custom Not Started',
          inProgress: 'Custom In Progress',
          complete: 'Custom Complete',
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('progress');
      expect(result).toEqual({
        labelName: '进度条',
        notStarted: 'Custom Not Started',
        inProgress: 'Custom In Progress',
        complete: 'Custom Complete',
        justBegun: '刚刚开始',
        gettingStarted: '开始进行',
        moreThanHalfway: '过半完成',
        nearingCompletion: '接近完成',
        almostComplete: '即将完成',
      });
    });

    it('should merge partial custom progress localization', () => {
      const customLocale = {
        progress: {
          complete: 'Custom Complete',
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('progress');
      expect(result.complete).toBe('Custom Complete');
      expect(result.notStarted).toBe('未开始');
      expect(result.justBegun).toBe('刚刚开始');
      expect(result.gettingStarted).toBe('开始进行');
      expect(result.inProgress).toBe('进行中');
      expect(result.moreThanHalfway).toBe('过半完成');
      expect(result.nearingCompletion).toBe('接近完成');
      expect(result.almostComplete).toBe('即将完成');
    });

    it('should handle empty custom progress localization', () => {
      const customLocale = {
        progress: {},
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('progress');
      expect(result).toEqual(zhCN.progress);
    });

    it('should handle undefined progress in custom locale', () => {
      const customLocale = {
        dialog: {
          cancel: 'Custom Cancel',
        },
      };

      (useTheme as Mock).mockReturnValue({ locale: customLocale });

      const result = useLocaleText('progress');
      expect(result).toEqual(zhCN.progress);
    });

    it('should handle progress states correctly', () => {
      (useTheme as Mock).mockReturnValue({ locale: undefined });

      const result = useLocaleText('progress');

      // Test all progress states are available
      expect(result.notStarted).toBeDefined();
      expect(result.justBegun).toBeDefined();
      expect(result.gettingStarted).toBeDefined();
      expect(result.inProgress).toBeDefined();
      expect(result.moreThanHalfway).toBeDefined();
      expect(result.nearingCompletion).toBeDefined();
      expect(result.almostComplete).toBeDefined();
      expect(result.complete).toBeDefined();

      // Test they are all strings
      expect(typeof result.notStarted).toBe('string');
      expect(typeof result.justBegun).toBe('string');
      expect(typeof result.gettingStarted).toBe('string');
      expect(typeof result.inProgress).toBe('string');
      expect(typeof result.moreThanHalfway).toBe('string');
      expect(typeof result.nearingCompletion).toBe('string');
      expect(typeof result.almostComplete).toBe('string');
      expect(typeof result.complete).toBe('string');
    });
  });
});
