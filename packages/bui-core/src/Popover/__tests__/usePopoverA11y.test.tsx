import { renderHook, act } from 'testing';
import { usePopoverA11y } from '../hooks/usePopoverA11y';

// Mock useUniqueId
vi.mock('@bifrostui/utils', () => ({
  useUniqueId: vi.fn(() => 'test-id-123'),
}));

// Mock DOM elements
const createMockElement = (tagName: string = 'div') => {
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
    trapFocus: false,
    closeOnEscape: true,
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
      expect(result.current).toHaveProperty('handleFocusTrap');
      expect(typeof result.current.handleKeyDown).toBe('function');
      expect(typeof result.current.handleFocusTrap).toBe('function');
    });

    it('should generate unique popover ID', () => {
      const { result } = renderHook(() => usePopoverA11y(defaultProps));

      expect(result.current.popoverId).toBe('test-id-123');
    });
  });

  describe('Auto focus functionality', () => {
    it('should focus tipRef when isOpen and autoFocus are true', () => {
      const mockTipElement = createMockElement('div');
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        autoFocus: true,
        tipRef,
      }));

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).toHaveBeenCalled();
    });

    it('should not focus when autoFocus is false', () => {
      const mockTipElement = createMockElement('div');
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        autoFocus: false,
        tipRef,
      }));

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).not.toHaveBeenCalled();
    });

    it('should not focus when isOpen is false', () => {
      const mockTipElement = createMockElement('div');
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: false,
        autoFocus: true,
        tipRef,
      }));

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).not.toHaveBeenCalled();
    });

    it('should not focus when tipRef is null', () => {
      const tipRef = createMockRef(null);

      renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        autoFocus: true,
        tipRef,
      }));

      act(() => {
        vi.runAllTimers();
      });

      // Should not throw error
      expect(true).toBe(true);
    });

    it('should cleanup timer on unmount', () => {
      const mockTipElement = createMockElement('div');
      const tipRef = createMockRef(mockTipElement);

      const { unmount } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        autoFocus: true,
        tipRef,
      }));

      unmount();

      act(() => {
        vi.runAllTimers();
      });

      expect(mockTipElement.focus).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard event handling', () => {
    it('should call onClose when Escape key is pressed and closeOnEscape is true', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        closeOnEscape: true,
        onClose,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });
      mockEvent.preventDefault = vi.fn();
      mockEvent.stopPropagation = vi.fn();

      act(() => {
        result.current.handleKeyDown(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockEvent.stopPropagation).toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledWith(mockEvent);
    });

    it('should not call onClose when closeOnEscape is false', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        closeOnEscape: false,
        onClose,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      act(() => {
        result.current.handleKeyDown(mockEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should not call onClose when isOpen is false', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: false,
        closeOnEscape: true,
        onClose,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      act(() => {
        result.current.handleKeyDown(mockEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should not call onClose for non-Escape keys', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        closeOnEscape: true,
        onClose,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Enter' });

      act(() => {
        result.current.handleKeyDown(mockEvent);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('should focus childrenRef after closing with Escape', () => {
      const mockChildElement = createMockElement('button');
      const childrenRef = createMockRef(mockChildElement);
      const onClose = vi.fn();

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        closeOnEscape: true,
        onClose,
        childrenRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      act(() => {
        result.current.handleKeyDown(mockEvent);
      });

      expect(mockChildElement.focus).toHaveBeenCalled();
    });
  });

  describe('Focus trap functionality', () => {
    const createFocusableElement = (tagName: string = 'button'): HTMLElement => {
      const element = createMockElement(tagName);
      element.tabIndex = 0;
      return element;
    };

    it('should not trap focus when trapFocus is false', () => {
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: false,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it('should not trap focus when isOpen is false', () => {
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: false,
        trapFocus: true,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it('should not trap focus when tipRef is null', () => {
      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: true,
        tipRef: createMockRef(null),
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });

    it('should prevent default when no focusable elements exist', () => {
      const mockTipElement = createMockElement('div');
      mockTipElement.querySelectorAll = vi.fn().mockReturnValue([]);
      const tipRef = createMockRef(mockTipElement);

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: true,
        tipRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should handle Tab navigation between focusable elements', () => {
      const firstElement = createFocusableElement('button');
      const lastElement = createFocusableElement('input');
      
      const mockTipElement = createMockElement('div');
      mockTipElement.querySelectorAll = vi.fn().mockReturnValue([firstElement, lastElement]);
      const tipRef = createMockRef(mockTipElement);

      // Mock document.activeElement
      Object.defineProperty(document, 'activeElement', {
        value: lastElement,
        writable: true,
      });

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: true,
        tipRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(firstElement.focus).toHaveBeenCalled();
    });

    it('should handle Shift+Tab navigation between focusable elements', () => {
      const firstElement = createFocusableElement('button');
      const lastElement = createFocusableElement('input');
      
      const mockTipElement = createMockElement('div');
      mockTipElement.querySelectorAll = vi.fn().mockReturnValue([firstElement, lastElement]);
      const tipRef = createMockRef(mockTipElement);

      // Mock document.activeElement
      Object.defineProperty(document, 'activeElement', {
        value: firstElement,
        writable: true,
      });

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: true,
        tipRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(lastElement.focus).toHaveBeenCalled();
    });

    it('should not trap focus for non-Tab keys', () => {
      const mockTipElement = createMockElement('div');
      const tipRef = createMockRef(mockTipElement);

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        trapFocus: true,
        tipRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      mockEvent.preventDefault = vi.fn();

      act(() => {
        result.current.handleFocusTrap(mockEvent);
      });

      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    it('should handle focus element without focus method', () => {
      const mockTipElement = {
        current: {} as HTMLDivElement, // Element without focus method
      };

      expect(() => {
        renderHook(() => usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          autoFocus: true,
          tipRef: mockTipElement,
        }));

        act(() => {
          vi.runAllTimers();
        });
      }).not.toThrow();
    });

    it('should handle childrenRef without focus method', () => {
      const mockChildElement = {} as HTMLElement; // Element without focus method
      const childrenRef = createMockRef(mockChildElement as HTMLDivElement);
      const onClose = vi.fn();

      const { result } = renderHook(() => usePopoverA11y({
        ...defaultProps,
        isOpen: true,
        closeOnEscape: true,
        onClose,
        childrenRef,
      }));

      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      expect(() => {
        act(() => {
          result.current.handleKeyDown(mockEvent);
        });
      }).not.toThrow();
    });

    it('should handle prop changes correctly', () => {
      const onClose1 = vi.fn();
      const onClose2 = vi.fn();

      const { result, rerender } = renderHook(
        ({ onClose, closeOnEscape }) => usePopoverA11y({
          ...defaultProps,
          isOpen: true,
          closeOnEscape,
          onClose,
        }),
        { initialProps: { onClose: onClose1, closeOnEscape: true } }
      );

      // Test with first onClose
      const mockEvent1 = new KeyboardEvent('keydown', { key: 'Escape' });
      act(() => {
        result.current.handleKeyDown(mockEvent1);
      });
      expect(onClose1).toHaveBeenCalledWith(mockEvent1);

      // Change props
      rerender({ onClose: onClose2, closeOnEscape: false });

      // Test with second onClose (should not be called due to closeOnEscape: false)
      const mockEvent2 = new KeyboardEvent('keydown', { key: 'Escape' });
      act(() => {
        result.current.handleKeyDown(mockEvent2);
      });
      expect(onClose2).not.toHaveBeenCalled();
    });
  });
});
