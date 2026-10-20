import { renderHook, act } from 'testing';
import { usePopoverA11y } from '../hooks/usePopoverA11y';

// Mock useUniqueId
vi.mock('@bifrostui/utils', () => ({
  useUniqueId: vi.fn(() => 'test-id-123'),
}));

// Mock DOM elements
const createMockElement = (tagName = 'div') => {
  const element = document.createElement(tagName) as HTMLDivElement;
  element.focus = vi.fn();
  return element;
};

const createMockRef = (element: HTMLDivElement | null = null) => ({
  current: element,
});

describe('usePopoverA11y', () => {
  const defaultProps = {
    isOpen: false,
    autoFocus: false,
    closeOnEscape: false,
    onClose: vi.fn(),
    tipRef: createMockRef(null),
    childrenRef: createMockRef(null),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  describe('Basic functionality', () => {
    it('should return required properties and functions', () => {
      const { result } = renderHook(() => usePopoverA11y(defaultProps));

      expect(result.current).toHaveProperty('popoverId');
      expect(result.current).toHaveProperty('handleKeyDown');
      expect(typeof result.current.handleKeyDown).toBe('function');
    });

    it('should generate unique popover ID', () => {
      const { result } = renderHook(() => usePopoverA11y(defaultProps));

      expect(result.current.popoverId).toBe('test-id-123');
    });
  });

  describe('AutoFocus functionality', () => {
    it('should focus tip element when autoFocus is true and popover opens', () => {
      const mockTipElement = createMockElement();
      const mockTipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          autoFocus: true,
          tipRef: mockTipRef,
        }),
      );

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).toHaveBeenCalled();
    });

    it('should not focus tip element when autoFocus is false', () => {
      const mockTipElement = createMockElement();
      const mockTipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          autoFocus: false,
          tipRef: mockTipRef,
        }),
      );

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).not.toHaveBeenCalled();
    });

    it('should not focus when popover is not open', () => {
      const mockTipElement = createMockElement();
      const mockTipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: false,
          autoFocus: true,
          tipRef: mockTipRef,
        }),
      );

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).not.toHaveBeenCalled();
    });

    it('should not focus when tipRef is null', () => {
      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          autoFocus: true,
          tipRef: createMockRef(null),
        }),
      );

      act(() => {
        vi.runAllTimers();
      });

      // No errors should be thrown
      expect(result.current.popoverId).toBe('test-id-123');
    });
  });

  describe('Keyboard event handling', () => {
    it('should call onClose when Escape key is pressed and closeOnEscape is true', () => {
      const onClose = vi.fn();
      const mockChildElement = createMockElement();
      const mockChildRef = createMockRef(mockChildElement);

      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          closeOnEscape: true,
          onClose,
          childrenRef: mockChildRef,
        }),
      );

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      escapeEvent.preventDefault = vi.fn();
      escapeEvent.stopPropagation = vi.fn();

      act(() => {
        result.current.handleKeyDown(escapeEvent);
      });

      expect(onClose).toHaveBeenCalledWith(escapeEvent);
      expect(escapeEvent.preventDefault).toHaveBeenCalled();
      expect(escapeEvent.stopPropagation).toHaveBeenCalled();
      expect(mockChildElement.focus).toHaveBeenCalled();
    });

    it('should not call onClose when closeOnEscape is false', () => {
      const onClose = vi.fn();
      const mockChildRef = createMockRef(createMockElement());

      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          closeOnEscape: false,
          onClose,
          childrenRef: mockChildRef,
        }),
      );

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      act(() => {
        result.current.handleKeyDown(escapeEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should not handle Escape when popover is not open', () => {
      const onClose = vi.fn();
      const mockChildRef = createMockRef(createMockElement());

      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: false,
          closeOnEscape: true,
          onClose,
          childrenRef: mockChildRef,
        }),
      );

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      act(() => {
        result.current.handleKeyDown(escapeEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should not handle non-Escape keys', () => {
      const onClose = vi.fn();
      const mockChildRef = createMockRef(createMockElement());

      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          closeOnEscape: true,
          onClose,
          childrenRef: mockChildRef,
        }),
      );

      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });

      act(() => {
        result.current.handleKeyDown(tabEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should handle missing childrenRef gracefully', () => {
      const onClose = vi.fn();

      const { result } = renderHook(() =>
        usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          closeOnEscape: true,
          onClose,
          childrenRef: createMockRef(null),
        }),
      );

      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      escapeEvent.preventDefault = vi.fn();
      escapeEvent.stopPropagation = vi.fn();

      act(() => {
        result.current.handleKeyDown(escapeEvent);
      });

      expect(onClose).toHaveBeenCalledWith(escapeEvent);
      expect(escapeEvent.preventDefault).toHaveBeenCalled();
      expect(escapeEvent.stopPropagation).toHaveBeenCalled();
      // Should not throw error when trying to focus null element
    });
  });

  describe('Props changes', () => {
    it('should handle isOpen changes correctly', () => {
      const mockTipElement = createMockElement();
      const mockTipRef = createMockRef(mockTipElement);

      const { rerender } = renderHook(
        ({ isOpen }) =>
          usePopoverA11y({
            ...defaultProps,
            isOpen,
            autoFocus: true,
            tipRef: mockTipRef,
          }),
        { initialProps: { isOpen: false } },
      );

      // Initially closed, should not focus
      act(() => {
        vi.runAllTimers();
      });
      expect(mockTipElement.focus).not.toHaveBeenCalled();

      // Open popover, should focus
      rerender({ isOpen: true });
      act(() => {
        vi.runAllTimers();
      });
      expect(mockTipElement.focus).toHaveBeenCalled();
    });

    it('should handle onClose changes correctly', () => {
      const onClose1 = vi.fn();
      const onClose2 = vi.fn();
      const mockChildRef = createMockRef(createMockElement());

      const { result, rerender } = renderHook(
        ({ onClose }) =>
          usePopoverA11y({
            ...defaultProps,
            isOpen: true,
            closeOnEscape: true,
            onClose,
            childrenRef: mockChildRef,
          }),
        { initialProps: { onClose: onClose1 } },
      );

      // Test with first onClose
      const escapeEvent1 = new KeyboardEvent('keydown', { key: 'Escape' });
      escapeEvent1.preventDefault = vi.fn();
      escapeEvent1.stopPropagation = vi.fn();

      act(() => {
        result.current.handleKeyDown(escapeEvent1);
      });

      expect(onClose1).toHaveBeenCalledWith(escapeEvent1);
      expect(onClose2).not.toHaveBeenCalled();

      // Change onClose
      rerender({ onClose: onClose2 });

      // Test with second onClose
      const escapeEvent2 = new KeyboardEvent('keydown', { key: 'Escape' });
      escapeEvent2.preventDefault = vi.fn();
      escapeEvent2.stopPropagation = vi.fn();

      act(() => {
        result.current.handleKeyDown(escapeEvent2);
      });

      expect(onClose2).toHaveBeenCalledWith(escapeEvent2);
    });
  });
});
