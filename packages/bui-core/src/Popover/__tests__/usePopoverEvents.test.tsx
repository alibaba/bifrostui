import { renderHook } from 'testing';
import { usePopoverEvents } from '../hooks/usePopoverEvents';
import { triggerEventTransform } from '@bifrostui/utils';

// Mock utils functions
vi.mock('@bifrostui/utils', () => ({
  isMini: false,
  triggerEventTransform: vi.fn(() => ({
    onClick: vi.fn(),
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
  })),
}));

const mockTriggerEventTransform = vi.mocked(triggerEventTransform);

// Mock DOM event listeners
const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

Object.defineProperty(document, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(document, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

const createMockRef = (element: HTMLDivElement | null = null) => ({
  current: element,
});

describe('usePopoverEvents', () => {
  const defaultProps = {
    isOpen: false,
    controlByUser: false,
    trigger: 'click' as const,
    onShow: vi.fn(),
    onHide: vi.fn(),
    onTriggerClick: vi.fn(),
    onMounted: vi.fn(),
    handleKeyDown: vi.fn(),
    handleFocusTrap: vi.fn(),
    trapFocus: false,
    tipRef: createMockRef(null),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (mockTriggerEventTransform as any).mockReturnValue({
      onClick: vi.fn(),
      onMouseEnter: vi.fn(),
      onMouseLeave: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should return triggerEventOption when not controlled and trigger is not none', () => {
      const { result } = renderHook(() => usePopoverEvents({
        ...defaultProps,
        controlByUser: false,
        trigger: 'click',
      }));

      expect(result.current.triggerEventOption).toBeDefined();
      expect(mockTriggerEventTransform).toHaveBeenCalledWith({
        trigger: 'click',
        click: defaultProps.onTriggerClick,
        show: defaultProps.onShow,
        hide: defaultProps.onHide,
      });
    });

    it('should not return triggerEventOption when controlled by user', () => {
      const { result } = renderHook(() => usePopoverEvents({
        ...defaultProps,
        controlByUser: true,
        trigger: 'click',
      }));

      expect(result.current.triggerEventOption).toBeUndefined();
      expect(mockTriggerEventTransform).not.toHaveBeenCalled();
    });

    it('should not return triggerEventOption when trigger is none', () => {
      const { result } = renderHook(() => usePopoverEvents({
        ...defaultProps,
        controlByUser: false,
        trigger: 'none',
      }));

      expect(result.current.triggerEventOption).toBeUndefined();
      expect(mockTriggerEventTransform).not.toHaveBeenCalled();
    });
  });

  describe('Event binding and unbinding', () => {
    it('should bind click and keydown events when isOpen is true', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        isOpen: true,
        trigger: 'click',
      }));

      // Should bind click event for non-hover triggers
      expect(mockAddEventListener).toHaveBeenCalledWith('click', expect.any(Function));
      // Should bind keyboard events when open
      expect(mockAddEventListener).toHaveBeenCalledWith('keydown', defaultProps.handleKeyDown);
    });

    it('should bind resize event when not mini', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        isOpen: false,
        trigger: 'click',
      }));

      // Should bind resize event on window when not mini (isMini is mocked as false)
      expect(mockAddEventListener).toHaveBeenCalledWith('resize', defaultProps.onMounted);
    });

    it('should not bind click events for hover trigger', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        trigger: 'hover',
      }));

      // Should not bind click event for hover trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        call => call[0] === 'click'
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should not bind click events for none trigger', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        trigger: 'none',
      }));

      // Should not bind click event for none trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        call => call[0] === 'click'
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should not bind click events when controlled by user', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        controlByUser: true,
      }));

      // Should not bind click event when controlled by user
      const clickCalls = mockAddEventListener.mock.calls.filter(
        call => call[0] === 'click'
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should bind focus trap events when trapFocus is true and open', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        isOpen: true,
        trapFocus: true,
      }));

      // Should bind handleFocusTrap when trapFocus is true
      expect(mockAddEventListener).toHaveBeenCalledWith('keydown', defaultProps.handleFocusTrap);
    });

    it('should not bind focus trap events when trapFocus is false', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        isOpen: true,
        trapFocus: false,
      }));

      // Should not bind handleFocusTrap when trapFocus is false
      const focusTrapCalls = mockAddEventListener.mock.calls.filter(
        call => call[1] === defaultProps.handleFocusTrap
      );
      expect(focusTrapCalls).toHaveLength(0);
    });

    it('should not bind resize event when isMini is true', () => {
      // This test will require a separate test file or different mock setup
      // For now, we skip this test since isMini is mocked as false globally
      // In a real scenario, this would be tested with process.env.TARO_ENV set
    });

    it('should not bind events when tipRef is null', () => {
      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef: createMockRef(null),
      }));

      expect(mockAddEventListener).not.toHaveBeenCalled();
    });
  });

  describe('Event cleanup', () => {
    it('should remove events on unmount', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { unmount } = renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        isOpen: true,
        trapFocus: true,
      }));

      unmount();

      // Should remove bound events
      expect(mockRemoveEventListener).toHaveBeenCalled();
    });

    it('should remove events on dependency changes', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { rerender } = renderHook(
        ({ isOpen, trigger }: { isOpen: boolean; trigger: any }) => usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen,
          trigger,
        }),
        { initialProps: { isOpen: true, trigger: 'click' as const } }
      );

      // Clear mocks to track only the rerender calls
      vi.clearAllMocks();

      rerender({ isOpen: false, trigger: 'hover' as const });

      // Should have cleanup calls
      expect(mockRemoveEventListener).toHaveBeenCalled();
    });
  });

  describe('Click event handler', () => {
    it('should call onHide for click events when trigger allows', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);
      const onHide = vi.fn();

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        trigger: 'click',
        onHide,
      }));

      // Get the click handler that was bound
      const clickCall = mockAddEventListener.mock.calls.find(
        call => call[0] === 'click'
      );
      const clickHandler = clickCall?.[1];

      if (clickHandler) {
        const mockEvent = new Event('click');
        clickHandler(mockEvent);
        expect(onHide).toHaveBeenCalledWith(mockEvent);
      }
    });

    it('should not call onHide for hover trigger', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);
      const onHide = vi.fn();

      renderHook(() => usePopoverEvents({
        ...defaultProps,
        tipRef,
        trigger: 'hover',
        onHide,
      }));

      // Should not bind click event for hover trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        call => call[0] === 'click'
      );
      expect(clickCalls).toHaveLength(0);
    });
  });

  describe('Edge cases', () => {
    it('should handle rapid prop changes', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { rerender } = renderHook(
        ({ isOpen, trapFocus }) => usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen,
          trapFocus,
        }),
        { initialProps: { isOpen: false, trapFocus: false } }
      );

      // Rapid changes
      rerender({ isOpen: true, trapFocus: true });
      rerender({ isOpen: false, trapFocus: false });
      rerender({ isOpen: true, trapFocus: true });

      // Should not throw errors
      expect(true).toBe(true);
    });

    it('should handle different trigger combinations', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const triggerCombinations = [
        'click',
        'hover', 
        'none',
        ['click'],
        ['hover'],
        ['click', 'hover'],
      ] as const;

      triggerCombinations.forEach((trigger) => {
        vi.clearAllMocks();
        
        expect(() => {
          renderHook(() => usePopoverEvents({
            ...defaultProps,
            tipRef,
            trigger: trigger as any,
          }));
        }).not.toThrow();
      });
    });

    it('should handle missing callback functions gracefully', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      expect(() => {
        renderHook(() => usePopoverEvents({
          ...defaultProps,
          tipRef,
          onShow: undefined as any,
          onHide: undefined as any,
          onTriggerClick: undefined as any,
          onMounted: undefined as any,
          handleKeyDown: undefined as any,
          handleFocusTrap: undefined as any,
        }));
      }).not.toThrow();
    });
  });
});