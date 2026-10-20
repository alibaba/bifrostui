import * as React from 'react';
import { renderHook, act } from 'testing';
import { useTooltip } from '../useTooltip';

// Mock utils functions
vi.mock('@bifrostui/utils', async () => {
  const actual = await vi.importActual('@bifrostui/utils');
  return {
    ...actual,
    getStylesAndLocation: vi.fn().mockResolvedValue({
      styles: { top: '10px', left: '20px' },
      newArrowDirection: 'top',
      newArrowLocation: 'center',
    }),
    throttle: vi.fn((fn) => fn),
    useUniqueId: vi.fn(() => 'tooltip-test-id'),
    isMini: false,
  };
});

describe('useTooltip', () => {
  const defaultParams = {
    title: 'Test tooltip',
    children: <div>Test child</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should return required functions and properties', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      expect(result.current).toEqual(
        expect.objectContaining({
          getTooltipProps: expect.any(Function),
          getChildProps: expect.any(Function),
          getPortalProps: expect.any(Function),
          tooltipRef: expect.any(Function),
          isOpen: expect.any(Boolean),
          toolStyles: expect.any(Object),
          arrowDirection: expect.any(String),
          arrowLocation: expect.any(String),
          tooltipId: expect.any(String),
        }),
      );
    });

    it('should initialize with defaultOpen false', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      expect(result.current.isOpen).toBe(false);
    });

    it('should initialize with defaultOpen true', () => {
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, defaultOpen: true }),
      );

      expect(result.current.isOpen).toBe(true);
    });

    it('should use controlled open prop', () => {
      const { result, rerender } = renderHook(
        ({ open }) => useTooltip({ ...defaultParams, open }),
        { initialProps: { open: true } },
      );

      expect(result.current.isOpen).toBe(true);

      rerender({ open: false });
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('Tooltip props', () => {
    it('should return correct tooltip props', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      const tooltipProps = result.current.getTooltipProps();

      expect(tooltipProps).toEqual(
        expect.objectContaining({
          id: 'tooltip-test-id',
          ref: expect.any(Function),
          tabIndex: undefined,
        }),
      );
    });

    it('should set tabIndex when autoFocus is true', () => {
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, autoFocus: true }),
      );

      const tooltipProps = result.current.getTooltipProps();

      expect(tooltipProps.tabIndex).toBe(-1);
    });

    it('should merge additional props', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      const tooltipProps = result.current.getTooltipProps({
        'data-testid': 'custom-tooltip',
        className: 'custom-class',
      });

      expect(tooltipProps).toEqual(
        expect.objectContaining({
          'data-testid': 'custom-tooltip',
          className: 'custom-class',
        }),
      );
    });
  });

  describe('Child props', () => {
    it('should return correct child props for uncontrolled mode', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      const childProps = result.current.getChildProps();

      expect(childProps).toEqual(
        expect.objectContaining({
          ref: expect.any(Object),
          'aria-describedby': undefined,
          onClick: expect.any(Function), // Default trigger is click
        }),
      );

      // aria-expanded should not be present for non-interactive elements
      expect(childProps['aria-expanded']).toBeUndefined();
    });

    it('should return correct child props when open', () => {
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, defaultOpen: true }),
      );

      const childProps = result.current.getChildProps();

      expect(childProps).toEqual(
        expect.objectContaining({
          'aria-describedby': 'tooltip-test-id',
          onClick: expect.any(Function),
        }),
      );

      // aria-expanded should not be present for non-interactive elements
      expect(childProps['aria-expanded']).toBeUndefined();
    });

    it('should not include trigger events for controlled mode', () => {
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, open: false }),
      );

      const childProps = result.current.getChildProps();

      expect(childProps.onClick).toBeUndefined();
      expect(childProps.onMouseEnter).toBeUndefined();
      expect(childProps.onMouseLeave).toBeUndefined();
    });
  });

  describe('Portal props', () => {
    it('should return portal props with onMounted function', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      const portalProps = result.current.getPortalProps();

      expect(portalProps).toEqual({
        onMounted: expect.any(Function),
      });
    });
  });

  describe('State management', () => {
    it('should handle placement changes', () => {
      const { result, rerender } = renderHook(
        ({ placement }: { placement: 'top' | 'bottomLeft' }) =>
          useTooltip({ ...defaultParams, placement }),
        { initialProps: { placement: 'top' as const } },
      );

      expect(result.current.arrowDirection).toBe('top');
      expect(result.current.arrowLocation).toBe('center');

      rerender({ placement: 'bottomLeft' });

      expect(result.current.arrowDirection).toBe('bottom');
      expect(result.current.arrowLocation).toBe('left');
    });

    it('should initialize with hidden visibility when not open', () => {
      const { result } = renderHook(() => useTooltip(defaultParams));

      expect(result.current.toolStyles).toEqual({
        visibility: 'hidden',
      });
    });
  });

  describe('Global event handling', () => {
    it('should bind and unbind global events', () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

      const { unmount } = renderHook(() =>
        useTooltip({ ...defaultParams, defaultOpen: true }),
      );

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );

      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });

    it('should handle escape key to close tooltip', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        useTooltip({
          ...defaultParams,
          defaultOpen: true,
          onOpenChange,
          closeOnEscape: true,
        }),
      );

      expect(result.current.isOpen).toBe(true);

      act(() => {
        const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(escapeEvent);
      });

      expect(onOpenChange).toHaveBeenCalledWith(expect.any(Object), {
        open: false,
      });
    });

    it('should not close on escape when closeOnEscape is false', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        useTooltip({
          ...defaultParams,
          defaultOpen: true,
          onOpenChange,
          closeOnEscape: false,
        }),
      );

      expect(result.current.isOpen).toBe(true);

      act(() => {
        const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(escapeEvent);
      });

      expect(onOpenChange).not.toHaveBeenCalled();
    });
  });

  describe('Trigger types', () => {
    it('should handle click trigger', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, trigger: 'click', onOpenChange }),
      );

      const childProps = result.current.getChildProps();

      expect(childProps.onClick).toBeDefined();
    });

    it('should handle hover trigger', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, trigger: 'hover', onOpenChange }),
      );

      const childProps = result.current.getChildProps();

      expect(childProps.onMouseEnter).toBeDefined();
      expect(childProps.onMouseLeave).toBeDefined();
    });

    it('should handle mixed triggers', () => {
      const onOpenChange = vi.fn();
      const { result } = renderHook(() =>
        useTooltip({
          ...defaultParams,
          trigger: ['click', 'hover'],
          onOpenChange,
        }),
      );

      const childProps = result.current.getChildProps();

      expect(childProps.onClick).toBeDefined();
      expect(childProps.onMouseEnter).toBeDefined();
      expect(childProps.onMouseLeave).toBeDefined();
    });

    it('should not listen to global click for hover-only trigger', () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

      renderHook(() =>
        useTooltip({
          ...defaultParams,
          trigger: 'hover',
          defaultOpen: true,
        }),
      );

      // Should not add click listener for hover-only trigger
      const clickCalls = addEventListenerSpy.mock.calls.filter(
        ([event]) => event === 'click',
      );
      expect(clickCalls).toHaveLength(0);

      addEventListenerSpy.mockRestore();
    });

    it('should listen to global click for click trigger', () => {
      const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

      renderHook(() =>
        useTooltip({
          ...defaultParams,
          trigger: 'click',
          defaultOpen: true,
        }),
      );

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'click',
        expect.any(Function),
      );

      addEventListenerSpy.mockRestore();
    });
  });

  describe('Focus management', () => {
    it('should handle autoFocus when tooltip opens', () => {
      vi.useFakeTimers();

      const mockElement = {
        focus: vi.fn(),
      };

      const { result } = renderHook(() =>
        useTooltip({ ...defaultParams, autoFocus: true }),
      );

      // Mock the tipRef
      result.current.tooltipRef(mockElement as any);

      // Open the tooltip
      act(() => {
        const childProps = result.current.getChildProps() as {
          onClick?: (event: MouseEvent) => void;
        };
        const clickEvent = new MouseEvent('click');
        childProps.onClick?.(clickEvent);
      });

      act(() => {
        vi.runAllTimers();
      });

      expect(mockElement.focus).toHaveBeenCalled();

      vi.useRealTimers();
    });
  });
});
