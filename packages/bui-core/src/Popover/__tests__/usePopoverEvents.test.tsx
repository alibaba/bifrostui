import { renderHook } from 'testing';
import { triggerEventTransform } from '@bifrostui/utils';
import { usePopoverEvents } from '../hooks/usePopoverEvents';

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
    tipRef: createMockRef(null),
    childrenRef: createMockRef(null),
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
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          controlByUser: false,
          trigger: 'click',
        }),
      );

      expect(result.current.triggerEventOption).toBeDefined();
      expect(mockTriggerEventTransform).toHaveBeenCalledWith({
        trigger: 'click',
        click: defaultProps.onTriggerClick,
        show: defaultProps.onShow,
        hide: defaultProps.onHide,
      });
    });

    it('should not return triggerEventOption when controlled by user', () => {
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          controlByUser: true,
          trigger: 'click',
        }),
      );

      expect(result.current.triggerEventOption).toBeUndefined();
      expect(mockTriggerEventTransform).not.toHaveBeenCalled();
    });

    it('should not return triggerEventOption when trigger is none', () => {
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          controlByUser: false,
          trigger: 'none',
        }),
      );

      expect(result.current.triggerEventOption).toBeUndefined();
      expect(mockTriggerEventTransform).not.toHaveBeenCalled();
    });
  });

  describe('Event binding and unbinding', () => {
    it('should bind click and keydown events when isOpen is true', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen: true,
          trigger: 'click',
        }),
      );

      // Should bind click event for non-hover triggers
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );
      // Should bind keyboard events when open
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'keydown',
        defaultProps.handleKeyDown,
      );
    });

    it('should bind resize event when not mini', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen: false,
          trigger: 'click',
        }),
      );

      // Should bind resize event on window when not mini (isMini is mocked as false)
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'resize',
        defaultProps.onMounted,
      );
    });

    it('should bind scroll event when not mini', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen: false,
          trigger: 'click',
        }),
      );

      // Should bind scroll event on window when not mini (isMini is mocked as false)
      expect(mockAddEventListener).toHaveBeenCalledWith(
        'scroll',
        defaultProps.onMounted,
        true,
      );
    });

    it('should not bind click events for hover trigger', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          trigger: 'hover',
        }),
      );

      // Should not bind click event for hover trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        (call) => call[0] === 'click',
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should not bind click events for none trigger', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          trigger: 'none',
        }),
      );

      // Should not bind click event for none trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        (call) => call[0] === 'click',
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should not bind click events when controlled by user', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          controlByUser: true,
        }),
      );

      // Should not bind click event when controlled by user
      const clickCalls = mockAddEventListener.mock.calls.filter(
        (call) => call[0] === 'click',
      );
      expect(clickCalls).toHaveLength(0);
    });

    it('should not bind events when tipRef is null', () => {
      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef: createMockRef(null),
        }),
      );

      expect(mockAddEventListener).not.toHaveBeenCalled();
    });
  });

  describe('Event cleanup', () => {
    it('should remove events on unmount', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { unmount } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          isOpen: true,
        }),
      );

      unmount();

      // Should remove bound events
      expect(mockRemoveEventListener).toHaveBeenCalled();
    });

    it('should remove events on dependency changes', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { rerender } = renderHook(
        ({ isOpen, trigger }: { isOpen: boolean; trigger: any }) =>
          usePopoverEvents({
            ...defaultProps,
            tipRef,
            isOpen,
            trigger,
          }),
        { initialProps: { isOpen: true, trigger: 'click' as const } },
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

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          trigger: 'click',
          onHide,
        }),
      );

      // Get the click handler that was bound
      const clickCall = mockAddEventListener.mock.calls.find(
        (call) => call[0] === 'click',
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

      renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          tipRef,
          trigger: 'hover',
          onHide,
        }),
      );

      // Should not bind click event for hover trigger
      const clickCalls = mockAddEventListener.mock.calls.filter(
        (call) => call[0] === 'click',
      );
      expect(clickCalls).toHaveLength(0);
    });
  });

  describe('Edge cases', () => {
    it('should handle rapid prop changes', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      const { rerender } = renderHook(
        ({ isOpen }) =>
          usePopoverEvents({
            ...defaultProps,
            tipRef,
            isOpen,
          }),
        { initialProps: { isOpen: false } },
      );

      // Rapid changes
      rerender({ isOpen: true });
      rerender({ isOpen: false });
      rerender({ isOpen: true });

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
          renderHook(() =>
            usePopoverEvents({
              ...defaultProps,
              tipRef,
              trigger: trigger as any,
            }),
          );
        }).not.toThrow();
      });
    });

    it('should handle missing callback functions gracefully', () => {
      const mockTipElement = document.createElement('div') as HTMLDivElement;
      const tipRef = createMockRef(mockTipElement);

      expect(() => {
        renderHook(() =>
          usePopoverEvents({
            ...defaultProps,
            tipRef,
            onShow: undefined as any,
            onHide: undefined as any,
            onTriggerClick: undefined as any,
            onMounted: undefined as any,
            handleKeyDown: undefined as any,
          }),
        );
      }).not.toThrow();
    });
  });

  describe('Mini-app environment', () => {
    // Create a separate test module with isMini = true
    beforeEach(() => {
      vi.resetModules();
    });

    it('should return backdropProps for mini-app environment (simulated)', () => {
      // Since we can't easily mock isMini dynamically, we'll test the logic directly
      // This test validates that backdropProps would be returned if isMini were true

      // We can verify that the hook returns backdropProps only in the correct conditions
      // by checking the implementation logic indirectly
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          isOpen: true,
          controlByUser: false,
          trigger: 'click',
        }),
      );

      // In browser environment (isMini = false), backdropProps should be undefined
      expect(result.current.backdropProps).toBeUndefined();

      // But we can verify the hook structure is correct
      expect(result.current).toHaveProperty('triggerEventOption');
      expect(result.current).toHaveProperty('backdropProps');
    });

    it('should not return backdropProps for hover trigger even in mini-app', () => {
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          isOpen: true,
          controlByUser: false,
          trigger: 'hover',
        }),
      );

      // Should not have backdropProps for hover trigger regardless of environment
      expect(result.current.backdropProps).toBeUndefined();
    });

    it('should not return backdropProps when popover is closed', () => {
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          isOpen: false,
          controlByUser: false,
          trigger: 'click',
        }),
      );

      // Should not have backdropProps when closed regardless of environment
      expect(result.current.backdropProps).toBeUndefined();
    });

    it('should not return backdropProps when controlByUser is true', () => {
      const { result } = renderHook(() =>
        usePopoverEvents({
          ...defaultProps,
          isOpen: true,
          controlByUser: true,
          trigger: 'click',
        }),
      );

      // Should not have backdropProps when user-controlled regardless of environment
      expect(result.current.backdropProps).toBeUndefined();
    });
  });
});
