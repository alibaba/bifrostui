import { createTheme, mountThemeVars } from '..';

describe('Theme Utilities', () => {
  describe('convertToCss', () => {
    test('should convert style object to CSS string', () => {
      const input = {
        '--bui-color-primary': '#1890ff',
        '--bui-btn-font-size': '14PX', // 测试PX特殊处理
      };

      const result = createTheme({ cssVars: input });
      expect(result).toContain('/* prettier-ignore */');
      expect(result).toMatchSnapshot();
    });
  });

  describe('createTheme', () => {
    test('should generate CSS variables with default root selector', () => {
      const cssVars = { '--bui-color-primary': '#1890ff' };
      const result = createTheme({ cssVars });

      expect(result).toContain(":root, [data-color-mode='light'][data-theme]");
      expect(result).toContain('--bui-color-primary: #1890ff;');
    });

    test('should handle custom root selector', () => {
      const result = createTheme({
        rootSelector: '.custom-theme',
        cssVars: { '--bui-bg-color': '#fff' },
      });

      expect(result).toContain('.custom-theme {');
    });

    test('should handle empty cssVars', () => {
      const result = createTheme({ cssVars: {} });
      expect(result).toMatch(/{\s*}/); // 空内容
    });
  });

  describe('mountThemeVars', () => {
    let container: HTMLElement;

    beforeEach(() => {
      document.head.innerHTML = '';
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.head.innerHTML = '';
      container.remove();
    });

    test('should append style to head when no container', () => {
      const themeCSS = ':root { --bui-color-primary: red; }';
      mountThemeVars({ theme: themeCSS });

      const style = document.head.querySelector('style');
      expect(style?.innerHTML).toContain(themeCSS);
    });

    test('should append style to custom container', () => {
      const themeCSS = '.theme { --bui-color-primary: blue; }';
      mountThemeVars({ theme: themeCSS, container });

      const style = container.querySelector('style');
      expect(style?.innerHTML).toContain(themeCSS);
    });

    test('should handle empty options', () => {
      mountThemeVars({} as any); // 测试边界情况
      const style = document.head.querySelector('style');
      expect(style?.innerHTML).toBe('');
    });
  });

  test('edge cases', () => {
    // 测试空theme内容
    mountThemeVars({ theme: '' });
    const style = document.head.querySelector('style');
    expect(style?.innerHTML).toBe('');
  });
});
