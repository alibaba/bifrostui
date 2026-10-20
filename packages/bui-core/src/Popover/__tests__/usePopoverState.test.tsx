import { renderHook, act } from 'testing';
import { usePopoverState } from '../hooks/usePopoverState';

describe('usePopoverState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should return required functions and properties', () => {
      const { result } = renderHook(() => usePopoverState({}));

      expect(result.current).toHaveProperty('isOpen');
      expect(result.current).toHaveProperty('openStatus');
      expect(result.current).toHaveProperty('controlByUser');
      expect(result.current).toHaveProperty('changeOpenStatus');
      expect(result.current).toHaveProperty('setOpenStatus');
      expect(typeof result.current.changeOpenStatus).toBe('function');
      expect(typeof result.current.setOpenStatus).toBe('function');
    });

    it('should initialize with default values', () => {
      const { result } = renderHook(() => usePopoverState({}));

      expect(result.current.isOpen).toBe(false);
      expect(result.current.openStatus).toBe(false);
      expect(result.current.controlByUser).toBe(false);
    });

    it('should initialize with defaultOpen', () => {
      const { result } = renderHook(() =>
        usePopoverState({ defaultOpen: true }),
      );

      expect(result.current.isOpen).toBe(true);
      expect(result.current.openStatus).toBe(true);
      expect(result.current.controlByUser).toBe(false);
    });
  });

  describe('Controlled mode', () => {
    it('should be in controlled mode when open prop is provided', () => {
      const { result } = renderHook(() => usePopoverState({ open: true }));

      expect(result.current.controlByUser).toBe(true);
      expect(result.current.isOpen).toBe(true);
      expect(result.current.openStatus).toBe(true);
    });

    it('should update when open prop changes', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePopoverState({ open }),
        { initialProps: { open: false } },
      );

      expect(result.current.isOpen).toBe(false);

      rerender({ open: true });
      expect(result.current.isOpen).toBe(true);
      expect(result.current.openStatus).toBe(true);

      rerender({ open: false });
      expect(result.current.isOpen).toBe(false);
      expect(result.current.openStatus).toBe(false);
    });

    it('should not allow changeOpenStatus in controlled mode', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        usePopoverState({
          open: false,
          onOpenChange,
        }),
      );

      const mockEvent = new Event('click');
      act(() => {
        result.current.changeOpenStatus(mockEvent, true);
      });

      expect(onOpenChange).not.toHaveBeenCalled();
      expect(result.current.openStatus).toBe(false);
    });
  });

  describe('Uncontrolled mode', () => {
    it('should allow changeOpenStatus in uncontrolled mode', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        usePopoverState({
          defaultOpen: false,
          onOpenChange,
        }),
      );

      const mockEvent = new Event('click');
      act(() => {
        result.current.changeOpenStatus(mockEvent, true);
      });

      expect(onOpenChange).toHaveBeenCalledWith(mockEvent, { open: true });
      expect(result.current.openStatus).toBe(true);
      expect(result.current.isOpen).toBe(true);
    });

    it('should toggle state correctly', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        usePopoverState({
          defaultOpen: false,
          onOpenChange,
        }),
      );

      const mockEvent = new Event('click');

      // Open
      act(() => {
        result.current.changeOpenStatus(mockEvent, true);
      });
      expect(result.current.isOpen).toBe(true);
      expect(onOpenChange).toHaveBeenCalledWith(mockEvent, { open: true });

      // Close
      act(() => {
        result.current.changeOpenStatus(mockEvent, false);
      });
      expect(result.current.isOpen).toBe(false);
      expect(onOpenChange).toHaveBeenCalledWith(mockEvent, { open: false });
    });

    it('should work without onOpenChange callback', () => {
      const { result } = renderHook(() =>
        usePopoverState({
          defaultOpen: false,
        }),
      );

      const mockEvent = new Event('click');

      expect(() => {
        act(() => {
          result.current.changeOpenStatus(mockEvent, true);
        });
      }).not.toThrow();

      expect(result.current.isOpen).toBe(true);
    });
  });

  describe('setOpenStatus direct usage', () => {
    it('should allow direct state updates via setOpenStatus', () => {
      const { result } = renderHook(() =>
        usePopoverState({
          defaultOpen: false,
        }),
      );

      act(() => {
        result.current.setOpenStatus(true);
      });

      expect(result.current.openStatus).toBe(true);
      expect(result.current.isOpen).toBe(true);
    });

    it('should work with functional updates', () => {
      const { result } = renderHook(() =>
        usePopoverState({
          defaultOpen: false,
        }),
      );

      act(() => {
        result.current.setOpenStatus((prev) => !prev);
      });

      expect(result.current.openStatus).toBe(true);
      expect(result.current.isOpen).toBe(true);
    });
  });

  describe('Edge cases', () => {
    it('should handle undefined open prop correctly', () => {
      const { result } = renderHook(() =>
        usePopoverState({
          open: undefined,
          defaultOpen: true,
        }),
      );

      expect(result.current.controlByUser).toBe(false);
      expect(result.current.isOpen).toBe(true);
    });

    it('should handle rapid prop changes', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePopoverState({ open }),
        { initialProps: { open: false } },
      );

      // Rapid changes
      rerender({ open: true });
      rerender({ open: false });
      rerender({ open: true });

      expect(result.current.isOpen).toBe(true);
      expect(result.current.controlByUser).toBe(true);
    });

    it('should maintain controlled state consistency', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePopoverState({ open }),
        { initialProps: { open: true } },
      );

      expect(result.current.isOpen).toBe(true);
      expect(result.current.openStatus).toBe(true);

      // Try to change state internally (should not work in controlled mode)
      const mockEvent = new Event('click');
      act(() => {
        result.current.changeOpenStatus(mockEvent, false);
      });

      expect(result.current.isOpen).toBe(true); // Should remain true
      expect(result.current.openStatus).toBe(true); // Should remain true

      // Only external prop change should work
      rerender({ open: false });
      expect(result.current.isOpen).toBe(false);
      expect(result.current.openStatus).toBe(false);
    });
  });
});
