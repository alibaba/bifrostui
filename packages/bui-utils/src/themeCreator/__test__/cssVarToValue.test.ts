import { defaultLight } from '@bifrostui/styles/registry';
import {
  cssVarToValue,
  setDefaultThemeVars,
  getDefaultThemeVars,
} from '../cssVarToValue';

describe('cssVarToValue', () => {
  const customTheme = {
    '--color-primary': 'var(--color-base)',
    '--color-base': '#1890ff',
    '--size-sm': '4px',
    '--nested-var': 'var(--color-primary)',
  };

  // 在每个测试后重置全局主题变量
  afterEach(() => {
    setDefaultThemeVars(undefined);
  });

  test('should resolve direct CSS variable', () => {
    const result = cssVarToValue({
      cssVar: 'var(--color-base)',
      themeVars: customTheme,
    });
    expect(result).toBe('#1890ff');
  });

  test('should resolve nested CSS variables recursively', () => {
    const result = cssVarToValue({
      cssVar: 'var(--color-primary)',
      themeVars: customTheme,
    });
    expect(result).toBe('#1890ff');
  });

  test('should handle double nested variables', () => {
    const result = cssVarToValue({
      cssVar: 'var(--nested-var)',
      themeVars: customTheme,
    });
    expect(result).toBe('#1890ff');
  });

  test('should return undefined when not a CSS variable', () => {
    const result = cssVarToValue({
      cssVar: '--invalid-var',
      themeVars: customTheme,
    });
    expect(result).toBeUndefined();
  });

  test('should handle undefined variables', () => {
    const result = cssVarToValue({
      cssVar: 'var(--non-existent)',
      themeVars: customTheme,
    });
    expect(result).toBeUndefined();
  });

  test('should handle invalid variable format', () => {
    const testCases = [
      'var(--missing-parenthesis',
      'var--color-primary)',
      'color-primary',
    ];

    testCases.forEach((input) => {
      const result = cssVarToValue({
        cssVar: input,
        themeVars: customTheme,
      });
      expect(result).toBeUndefined();
    });
  });

  // 检测是否终止递归
  test('should stop circular references', () => {
    const circularTheme = {
      '--a': 'var(--b)',
      '--b': 'var(--a)',
    };

    const result = cssVarToValue({
      cssVar: 'var(--a)',
      themeVars: circularTheme,
    });
    expect(result).toBe('var(--b)');
  });

  test('should return empty string when cssVar is empty', () => {
    const result = cssVarToValue({
      cssVar: '',
      themeVars: customTheme,
    });
    expect(result).toBe('');
  });

  test('should return empty string when cssVar is undefined', () => {
    const result = cssVarToValue({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cssVar: undefined as any,
      themeVars: customTheme,
    });
    expect(result).toBe('');
  });
});

describe('setDefaultThemeVars and getDefaultThemeVars', () => {
  // 在每个测试后重置全局主题变量
  afterEach(() => {
    setDefaultThemeVars(undefined);
  });

  test('should set and get default theme vars', () => {
    const customThemeVars = {
      '--color-primary': '#ff0000',
      '--color-secondary': '#00ff00',
    };

    setDefaultThemeVars(customThemeVars);
    const result = getDefaultThemeVars();

    // 应该包含自定义主题变量
    expect(result?.['--color-primary']).toBe('#ff0000');
    expect(result?.['--color-secondary']).toBe('#00ff00');
  });

  test('should merge custom theme with defaultLight', () => {
    const customThemeVars = {
      '--color-primary': '#ff0000',
    };

    setDefaultThemeVars(customThemeVars);
    const result = getDefaultThemeVars();

    // 应该包含自定义的变量
    expect(result?.['--color-primary']).toBe('#ff0000');

    // 应该包含 defaultLight 中的变量
    if (defaultLight?.cssVars) {
      Object.keys(defaultLight.cssVars).forEach((key) => {
        expect(result).toHaveProperty(key);
      });
    }
  });

  test('should override defaultLight vars with custom vars', () => {
    // 假设 defaultLight 中有 --color-primary
    const defaultPrimaryColor = defaultLight?.cssVars?.['--color-primary'];

    if (defaultPrimaryColor) {
      const customThemeVars = {
        '--color-primary': '#custom-color',
      };

      setDefaultThemeVars(customThemeVars);
      const result = getDefaultThemeVars();

      // 自定义主题应该覆盖默认主题
      expect(result?.['--color-primary']).toBe('#custom-color');
      expect(result?.['--color-primary']).not.toBe(defaultPrimaryColor);
    }
  });

  test('should return defaultLight when no custom theme is set', () => {
    const result = getDefaultThemeVars();
    expect(result).toEqual(defaultLight?.cssVars);
  });

  test('should handle undefined theme vars', () => {
    setDefaultThemeVars(undefined);
    const result = getDefaultThemeVars();
    expect(result).toEqual(defaultLight?.cssVars);
  });

  test('should handle empty theme vars object', () => {
    setDefaultThemeVars({});
    const result = getDefaultThemeVars();

    // 应该返回合并后的对象（defaultLight + 空对象）
    expect(result).toEqual({
      ...defaultLight?.cssVars,
    });
  });
});

describe('cssVarToValue with global default theme', () => {
  // 在每个测试后重置全局主题变量
  afterEach(() => {
    setDefaultThemeVars(undefined);
  });

  test('should use global default theme when themeVars is not provided', () => {
    const customThemeVars = {
      '--color-primary': '#global-color',
    };

    setDefaultThemeVars(customThemeVars);

    const result = cssVarToValue({
      cssVar: 'var(--color-primary)',
    });

    expect(result).toBe('#global-color');
  });

  test('should use provided themeVars over global default', () => {
    const globalThemeVars = {
      '--color-primary': '#global-color',
    };

    const localThemeVars = {
      '--color-primary': '#local-color',
    };

    setDefaultThemeVars(globalThemeVars);

    const result = cssVarToValue({
      cssVar: 'var(--color-primary)',
      themeVars: localThemeVars,
    });

    // 应该使用传入的 themeVars，而不是全局的
    expect(result).toBe('#local-color');
  });

  test('should resolve nested variables using global default theme', () => {
    const customThemeVars = {
      '--color-primary': 'var(--color-base)',
      '--color-base': '#nested-global',
    };

    setDefaultThemeVars(customThemeVars);

    const result = cssVarToValue({
      cssVar: 'var(--color-primary)',
    });

    expect(result).toBe('#nested-global');
  });

  test('should inherit from defaultLight when variable not in custom theme', () => {
    // 设置只包含部分变量的自定义主题
    const customThemeVars = {
      '--custom-var': '#custom',
    };

    setDefaultThemeVars(customThemeVars);

    // 尝试获取一个只在 defaultLight 中存在的变量
    if (defaultLight?.cssVars) {
      const defaultLightKey = Object.keys(defaultLight.cssVars)[0];
      const expectedValue = defaultLight.cssVars[defaultLightKey];

      if (expectedValue && !expectedValue.startsWith('var(')) {
        const result = cssVarToValue({
          cssVar: `var(${defaultLightKey})`,
        });

        expect(result).toBe(expectedValue);
      }
    }
  });

  test('should handle circular references with global default theme', () => {
    const circularTheme = {
      '--a': 'var(--b)',
      '--b': 'var(--a)',
    };

    setDefaultThemeVars(circularTheme);

    const consoleSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => undefined);

    const result = cssVarToValue({
      cssVar: 'var(--a)',
    });

    expect(result).toBe('var(--b)');
    expect(consoleSpy).toHaveBeenCalledWith('检测到CSS变量循环引用: --a');

    consoleSpy.mockRestore();
  });
});
