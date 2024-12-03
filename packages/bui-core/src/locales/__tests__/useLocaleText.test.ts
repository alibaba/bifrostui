import useLocaleText from '../hooks/useLocaleText';
import { useTheme } from '../../ThemeProvider';
import enUS from '../en-US';
import zhCN from '../zh-CN';

jest.mock('../../ThemeProvider', () => ({
  useTheme: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useLocaleText', () => {
  it('should return the default Chinese localization for a component', () => {
    (useTheme as jest.Mock).mockReturnValue({ locale: undefined });

    const result = useLocaleText('calendar');
    expect(result).toEqual(zhCN.calendar);
  });

  it('should return the custom English localization for a component', () => {
    (useTheme as jest.Mock).mockReturnValue({ locale: enUS });

    const result = useLocaleText('calendar');
    expect(result).toEqual(enUS.calendar);
  });

  it('should merge custom and default localizations', () => {
    const customLocale = {
      calendar: {
        cancel: 'Custom Cancel',
      },
    };

    (useTheme as jest.Mock).mockReturnValue({ locale: customLocale });

    const result = useLocaleText('calendar');
    expect(result).toEqual({
      cancel: 'Custom Cancel',
      ...zhCN.calendar,
    });
  });
});
