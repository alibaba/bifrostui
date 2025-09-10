import React from 'react';
import { renderHook } from 'testing';
import { useBadgeDisplay } from '../../hooks/useBadgeDisplay';

describe('useBadgeDisplay', () => {
  describe('Basic functionality', () => {
    it('should return correct default values', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: 5 }));

      expect(result.current.displayValue).toBe(5);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle undefined content', () => {
      const { result } = renderHook(() => useBadgeDisplay({}));

      expect(result.current.displayValue).toBeUndefined();
      expect(result.current.shouldShowBadge).toBe(false);
    });

    it('should handle null content', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: null }));

      expect(result.current.displayValue).toBe(null);
      expect(result.current.shouldShowBadge).toBe(false);
    });
  });

  describe('Content with max value', () => {
    it('should display content when below max', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 5, max: 10 }),
      );

      expect(result.current.displayValue).toBe(5);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should display max+ when content exceeds max', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 15, max: 10 }),
      );

      expect(result.current.displayValue).toBe('10+');
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should display content exactly at max', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 10, max: 10 }),
      );

      expect(result.current.displayValue).toBe(10);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle string numbers with max', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: '15', max: 10 }),
      );

      expect(result.current.displayValue).toBe('10+');
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should not apply max to non-numeric content', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 'text', max: 10 }),
      );

      expect(result.current.displayValue).toBe('text');
      expect(result.current.shouldShowBadge).toBe(true);
    });
  });

  describe('Zero content behavior', () => {
    it('should not show badge for zero content by default', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: 0 }));

      expect(result.current.displayValue).toBe(0);
      expect(result.current.shouldShowBadge).toBe(false);
    });

    it('should show badge for zero content when showZero is true', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 0, showZero: true }),
      );

      expect(result.current.displayValue).toBe(0);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle string zero with showZero', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: '0', showZero: true }),
      );

      expect(result.current.displayValue).toBe('0');
      expect(result.current.shouldShowBadge).toBe(true);
    });
  });

  describe('Type variations', () => {
    it('should return null displayValue for dot type', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 5, type: 'dot' }),
      );

      expect(result.current.displayValue).toBe(null);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should always show dot type regardless of content', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 0, type: 'dot' }),
      );

      expect(result.current.displayValue).toBe(null);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle standard type normally', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 5, type: 'standard' }),
      );

      expect(result.current.displayValue).toBe(5);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle bubble type normally', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 'new', type: 'bubble' }),
      );

      expect(result.current.displayValue).toBe('new');
      expect(result.current.shouldShowBadge).toBe(true);
    });
  });

  describe('Complex content types', () => {
    it('should handle React element as content', () => {
      const element = <span>Element</span>;
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: element }),
      );

      expect(result.current.displayValue).toBe(element);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle string content', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: 'New' }));

      expect(result.current.displayValue).toBe('New');
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle mixed numeric string content', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: '5 new' }),
      );

      expect(result.current.displayValue).toBe('5 new');
      expect(result.current.shouldShowBadge).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle negative numbers', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: -5 }));

      expect(result.current.displayValue).toBe(-5);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle decimal numbers', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: 3.14 }));

      expect(result.current.displayValue).toBe(3.14);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle very large numbers', () => {
      const { result } = renderHook(() =>
        useBadgeDisplay({ content: 999999, max: 1000 }),
      );

      expect(result.current.displayValue).toBe('1000+');
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should handle empty string', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: '' }));

      expect(result.current.displayValue).toBe('');
      expect(result.current.shouldShowBadge).toBe(false);
    });

    it('should handle boolean false', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: false }));

      expect(result.current.displayValue).toBe(false);
      expect(result.current.shouldShowBadge).toBe(false);
    });

    it('should handle boolean true', () => {
      const { result } = renderHook(() => useBadgeDisplay({ content: true }));

      expect(result.current.displayValue).toBe(true);
      expect(result.current.shouldShowBadge).toBe(true);
    });
  });

  describe('Hook updates', () => {
    it('should update when content changes', () => {
      const { result, rerender } = renderHook(
        ({ content }) => useBadgeDisplay({ content }),
        { initialProps: { content: 5 } },
      );

      expect(result.current.displayValue).toBe(5);
      expect(result.current.shouldShowBadge).toBe(true);

      rerender({ content: 10 });

      expect(result.current.displayValue).toBe(10);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should update when max changes', () => {
      const { result, rerender } = renderHook(
        ({ max }) => useBadgeDisplay({ content: 15, max }),
        { initialProps: { max: 20 } },
      );

      expect(result.current.displayValue).toBe(15);

      rerender({ max: 10 });

      expect(result.current.displayValue).toBe('10+');
    });

    it('should update when type changes', () => {
      const { result, rerender } = renderHook(
        ({ type }: { type: 'dot' | 'standard' | 'bubble' }) => useBadgeDisplay({ content: 5, type }),
        { initialProps: { type: 'standard' as const } },
      );

      expect(result.current.displayValue).toBe(5);

      rerender({ type: 'dot' as const });

      expect(result.current.displayValue).toBe(null);
      expect(result.current.shouldShowBadge).toBe(true);
    });

    it('should update when showZero changes', () => {
      const { result, rerender } = renderHook(
        ({ showZero }) => useBadgeDisplay({ content: 0, showZero }),
        { initialProps: { showZero: false } },
      );

      expect(result.current.shouldShowBadge).toBe(false);

      rerender({ showZero: true });

      expect(result.current.shouldShowBadge).toBe(true);
    });
  });
});

