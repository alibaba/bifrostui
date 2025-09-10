import React from 'react';
import { renderHook } from 'testing';
import { useBadgeA11y } from '../../hooks/useBadgeA11y';

describe('useBadgeA11y', () => {
  describe('Basic functionality', () => {
    it('should return correct default values', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 5 }));

      expect(result.current.accessibilityLabel).toBe('5条通知');
      expect(result.current.ariaAttributes).toEqual({
        role: 'status',
        'aria-label': '5条通知',
        'aria-describedby': undefined,
      });
      expect(result.current.handleKeyDown).toBeUndefined();
    });

    it('should handle undefined displayValue', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: null }));

      expect(result.current.accessibilityLabel).toBeUndefined();
    });
  });

  describe('Accessibility label generation', () => {
    it('should generate correct label for zero value', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 0 }));

      expect(result.current.accessibilityLabel).toBe('无通知');
    });

    it('should generate correct label for one value', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 1 }));

      expect(result.current.accessibilityLabel).toBe('1条通知');
    });

    it('should generate correct label for multiple values', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 5 }));

      expect(result.current.accessibilityLabel).toBe('5条通知');
    });

    it('should generate correct label for max+ values', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({ displayValue: '99+' }),
      );

      expect(result.current.accessibilityLabel).toBe('超过99条通知');
    });

    it('should generate correct label for non-numeric content', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({ displayValue: 'New' }),
      );

      expect(result.current.accessibilityLabel).toBe('通知：New');
    });

    it('should generate correct label for dot type', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({ displayValue: null, type: 'dot' }),
      );

      expect(result.current.accessibilityLabel).toBe('有新通知');
    });

    it('should use custom aria-label when provided', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          'aria-label': '自定义标签',
        }),
      );

      expect(result.current.accessibilityLabel).toBe('自定义标签');
    });
  });

  describe('ARIA attributes', () => {
    it('should set correct default ARIA attributes', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 5 }));

      expect(result.current.ariaAttributes).toEqual({
        role: 'status',
        'aria-label': '5条通知',
        'aria-describedby': undefined,
      });
    });

    it('should set custom role', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          role: 'img',
        }),
      );

      expect(result.current.ariaAttributes.role).toBe('img');
    });

    it('should set aria-describedby when provided', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          'aria-describedby': 'description-id',
        }),
      );

      expect(result.current.ariaAttributes['aria-describedby']).toBe(
        'description-id',
      );
    });

    it('should set aria-hidden when requested', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          'aria-hidden': true,
        }),
      );

      expect(result.current.ariaAttributes).toEqual({
        'aria-hidden': true,
      });
    });

    it('should set presentation role when decorative', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          decorative: true,
        }),
      );

      expect(result.current.ariaAttributes).toEqual({
        role: 'presentation',
        'aria-hidden': true,
      });
    });
  });

  describe('Keyboard event handling', () => {
    it('should not provide handleKeyDown when no onClick', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: 5 }));

      expect(result.current.handleKeyDown).toBeUndefined();
    });

    it('should provide handleKeyDown when onClick is provided', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          onClick,
        }),
      );

      expect(result.current.handleKeyDown).toBeDefined();
      expect(typeof result.current.handleKeyDown).toBe('function');
    });

    it('should handle Enter key press', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          onClick,
        }),
      );

      const mockEvent = {
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLDivElement>;

      result.current.handleKeyDown?.(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledWith(mockEvent);
    });

    it('should handle Space key press', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          onClick,
        }),
      );

      const mockEvent = {
        key: ' ',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLDivElement>;

      result.current.handleKeyDown?.(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledWith(mockEvent);
    });

    it('should not handle other key presses', () => {
      const onClick = vi.fn();
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          onClick,
        }),
      );

      const mockEvent = {
        key: 'Tab',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLDivElement>;

      result.current.handleKeyDown?.(mockEvent);

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Type variations', () => {
    it('should handle standard type', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          type: 'standard',
        }),
      );

      expect(result.current.accessibilityLabel).toBe('5条通知');
    });

    it('should handle bubble type', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 'New',
          type: 'bubble',
        }),
      );

      expect(result.current.accessibilityLabel).toBe('通知：New');
    });

    it('should handle dot type regardless of displayValue', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          type: 'dot',
        }),
      );

      expect(result.current.accessibilityLabel).toBe('有新通知');
    });
  });

  describe('Edge cases', () => {
    it('should handle null displayValue', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: null }));

      expect(result.current.accessibilityLabel).toBeUndefined();
    });

    it('should handle undefined displayValue', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({ displayValue: undefined }),
      );

      expect(result.current.accessibilityLabel).toBeUndefined();
    });

    it('should handle empty string displayValue', () => {
      const { result } = renderHook(() => useBadgeA11y({ displayValue: '' }));

      expect(result.current.accessibilityLabel).toBe('无通知');
    });

    it('should handle React element as displayValue', () => {
      const element = <span>Element</span>;
      const { result } = renderHook(() =>
        useBadgeA11y({ displayValue: element }),
      );

      expect(result.current.accessibilityLabel).toBe('通知：[object Object]');
    });

    it('should prioritize decorative over aria-hidden', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          decorative: true,
          'aria-hidden': false,
        }),
      );

      expect(result.current.ariaAttributes).toEqual({
        role: 'presentation',
        'aria-hidden': true,
      });
    });

    it('should handle both custom aria-label and decorative', () => {
      const { result } = renderHook(() =>
        useBadgeA11y({
          displayValue: 5,
          'aria-label': '自定义标签',
          decorative: true,
        }),
      );

      expect(result.current.accessibilityLabel).toBe('自定义标签');
      expect(result.current.ariaAttributes).toEqual({
        role: 'presentation',
        'aria-hidden': true,
      });
    });
  });

  describe('Hook updates', () => {
    it('should update when displayValue changes', () => {
      const { result, rerender } = renderHook(
        ({ displayValue }) => useBadgeA11y({ displayValue }),
        { initialProps: { displayValue: 5 } },
      );

      expect(result.current.accessibilityLabel).toBe('5条通知');

      rerender({ displayValue: 10 });

      expect(result.current.accessibilityLabel).toBe('10条通知');
    });

    it('should update when type changes', () => {
      const { result, rerender } = renderHook(
        ({ type }: { type: 'dot' | 'standard' | 'bubble' }) => useBadgeA11y({ displayValue: 5, type }),
        { initialProps: { type: 'standard' as const } },
      );

      expect(result.current.accessibilityLabel).toBe('5条通知');

      rerender({ type: 'dot' as const });

      expect(result.current.accessibilityLabel).toBe('有新通知');
    });

    it('should update when aria-label changes', () => {
      const { result, rerender } = renderHook(
        ({ ariaLabel }) =>
          useBadgeA11y({ displayValue: 5, 'aria-label': ariaLabel }),
        { initialProps: { ariaLabel: undefined } },
      );

      expect(result.current.accessibilityLabel).toBe('5条通知');

      rerender({ ariaLabel: '自定义标签' });

      expect(result.current.accessibilityLabel).toBe('自定义标签');
    });

    it('should update handleKeyDown when onClick changes', () => {
      const onClick1 = vi.fn();
      const onClick2 = vi.fn();

      const { result, rerender } = renderHook(
        ({ onClick }) => useBadgeA11y({ displayValue: 5, onClick }),
        { initialProps: { onClick: undefined } },
      );

      expect(result.current.handleKeyDown).toBeUndefined();

      rerender({ onClick: onClick1 });

      expect(result.current.handleKeyDown).toBeDefined();

      const mockEvent = {
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLDivElement>;

      result.current.handleKeyDown?.(mockEvent);
      expect(onClick1).toHaveBeenCalled();

      rerender({ onClick: onClick2 });

      result.current.handleKeyDown?.(mockEvent);
      expect(onClick2).toHaveBeenCalled();
    });
  });
});

