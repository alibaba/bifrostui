import { useTheme } from '@bifrostui/react';
import useLocaleText from '../useLocaleText';

// Mock 数据
const mockCN = {
  calendar: {
    cancel: '取消',
    confirm: '确认',
  },
  button: {
    submit: '提交',
  },
};

const mockEN = {
  calendar: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  button: {
    submit: 'Submit',
  },
};

// Mock useTheme 钩子
jest.mock('@bifrostui/react', () => ({
  useTheme: jest.fn(),
  CN: {
    calendar: {
      cancel: '取消',
      confirm: '确认',
    },
    button: {
      submit: '提交',
    },
  },
}));

describe('useLocaleText', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the default Chinese localization for a component', () => {
    (useTheme as jest.Mock).mockReturnValue({ locale: undefined });

    const result = useLocaleText('calendar');
    expect(result).toEqual(mockCN.calendar);
  });

  it('should return the custom English localization for a component', () => {
    (useTheme as jest.Mock).mockReturnValue({ locale: mockEN });

    const result = useLocaleText('calendar');
    expect(result).toEqual({
      cancel: 'Cancel',
      confirm: 'Confirm',
    });
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
      confirm: '确认', // 默认的中文
    });
  });
});
