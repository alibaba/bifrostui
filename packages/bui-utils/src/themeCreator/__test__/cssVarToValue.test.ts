import { cssVarToValue } from '..';

describe('cssVarToValue', () => {
  const customTheme = {
    '--color-primary': 'var(--color-base)',
    '--color-base': '#1890ff',
    '--size-sm': '4px',
    '--nested-var': 'var(--color-primary)',
  };

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
});
