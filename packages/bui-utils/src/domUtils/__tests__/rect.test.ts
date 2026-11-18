import { getClientRect, getScrollRect } from '../rect';

describe('rect', () => {
  beforeEach(() => {
    // Reset window and document properties before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });

    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    Object.defineProperty(document.documentElement, 'clientHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  describe('getClientRect', () => {
    test('should return client rect with window dimensions', async () => {
      const rect = await getClientRect();

      expect(rect).toEqual({
        width: 1024,
        height: 768,
        left: 0,
        top: 0,
        right: 1024,
        bottom: 768,
      });
    });

    test('should fallback to documentElement when window dimensions are not available', async () => {
      // Simulate window dimensions not being available
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: undefined,
      });

      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: undefined,
      });

      const rect = await getClientRect();

      expect(rect).toEqual({
        width: 1024,
        height: 768,
        left: 0,
        top: 0,
        right: 1024,
        bottom: 768,
      });
    });
  });

  describe('getScrollRect', () => {
    beforeEach(() => {
      // Reset scroll properties
      Object.defineProperty(window, 'scrollX', {
        writable: true,
        configurable: true,
        value: 0,
      });

      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 0,
      });

      Object.defineProperty(document.documentElement, 'scrollLeft', {
        writable: true,
        configurable: true,
        value: 0,
      });

      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        configurable: true,
        value: 0,
      });
    });

    test('should return scroll rect with window scroll positions', async () => {
      Object.defineProperty(window, 'scrollX', {
        writable: true,
        configurable: true,
        value: 100,
      });

      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: 50,
      });

      const rect = await getScrollRect();

      expect(rect).toEqual({
        left: 100,
        top: 50,
      });
    });

    test('should fallback to documentElement when window scroll positions are not available', async () => {
      // Simulate window scroll positions not being available
      Object.defineProperty(window, 'scrollX', {
        writable: true,
        configurable: true,
        value: -1, // Invalid value to trigger fallback
      });

      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: -1, // Invalid value to trigger fallback
      });

      Object.defineProperty(document.documentElement, 'scrollLeft', {
        writable: true,
        configurable: true,
        value: 200,
      });

      Object.defineProperty(document.documentElement, 'scrollTop', {
        writable: true,
        configurable: true,
        value: 150,
      });

      const rect = await getScrollRect();

      expect(rect).toEqual({
        left: 200,
        top: 150,
      });
    });
  });
});
