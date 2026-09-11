import { renderHook, act } from 'testing';
import {
  getStylesAndLocation,
  parsePlacement,
  throttle,
} from '@bifrostui/utils';
import { usePopoverPosition } from '../hooks/usePopoverPosition';

// Mock utils functions
vi.mock('@bifrostui/utils', () => ({
  getStylesAndLocation: vi.fn(),
  parsePlacement: vi.fn(),
  throttle: vi.fn((fn) => fn),
}));

const mockGetStylesAndLocation = vi.mocked(getStylesAndLocation);
const mockParsePlacement = vi.mocked(parsePlacement);
const mockThrottle = vi.mocked(throttle);

describe('usePopoverPosition', () => {
  const defaultProps = {
    anchorOrigin: { vertical: 'top' as const, horizontal: 'center' as const },
    offsetSpacing: 0,
    isOpen: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockParsePlacement.mockReturnValue({
      direction: 'top',
      location: 'center',
    });
    mockGetStylesAndLocation.mockResolvedValue({
      styles: { top: 0, left: 0, transform: 'translate3d(0, 0, 0)' },
      childrenStyle: {},
      newArrowDirection: 'top',
      newArrowLocation: 'center',
    });
    mockThrottle.mockImplementation((fn) => fn);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic functionality', () => {
    it('should return required properties and functions', () => {
      const { result } = renderHook(() => usePopoverPosition(defaultProps));

      expect(result.current).toHaveProperty('arrowDirection');
      expect(result.current).toHaveProperty('arrowLocation');
      expect(result.current).toHaveProperty('toolStyles');
      expect(result.current).toHaveProperty('tipRef');
      expect(result.current).toHaveProperty('childrenRef');
      expect(result.current).toHaveProperty('onMounted');
      expect(result.current).toHaveProperty('clearRef');
      expect(typeof result.current.onMounted).toBe('function');
      expect(typeof result.current.clearRef).toBe('function');
    });

    it('should initialize with correct default values', () => {
      mockParsePlacement.mockReturnValue({
        direction: 'bottom',
        location: 'left',
      });

      const { result } = renderHook(() =>
        usePopoverPosition({
          ...defaultProps,
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
        }),
      );

      expect(result.current.arrowDirection).toBe('bottom');
      expect(result.current.arrowLocation).toBe('left');
      expect(result.current.tipRef.current).toBeNull();
      expect(result.current.childrenRef.current).toBeNull();
    });

    it('should parse different anchor origins correctly', () => {
      const testCases = [
        {
          anchorOrigin: {
            vertical: 'top' as const,
            horizontal: 'center' as const,
          },
          expectedPlacement: 'top',
        },
        {
          anchorOrigin: {
            vertical: 'center' as const,
            horizontal: 'left' as const,
          },
          expectedPlacement: 'left',
        },
        {
          anchorOrigin: {
            vertical: 'bottom' as const,
            horizontal: 'right' as const,
          },
          expectedPlacement: 'bottomRight',
        },
        {
          anchorOrigin: {
            vertical: 'center' as const,
            horizontal: 'center' as const,
          },
          expectedPlacement: 'top', // Special case: center + center -> top
        },
      ];

      testCases.forEach(({ anchorOrigin, expectedPlacement }) => {
        vi.clearAllMocks();
        renderHook(() =>
          usePopoverPosition({
            ...defaultProps,
            anchorOrigin,
          }),
        );

        // Should be called with the expected placement for anchor origin conversion
        expect(mockParsePlacement).toHaveBeenCalledWith(expectedPlacement);
      });
    });
  });

  describe('Position calculation', () => {
    it('should call onMounted and update styles', async () => {
      const mockTipElement = document.createElement('div');
      const mockStyles = {
        top: 100,
        left: 50,
        transform: 'translate3d(0, -100%, 0)',
        visibility: 'visible',
      };

      mockGetStylesAndLocation.mockResolvedValue({
        styles: mockStyles,
        childrenStyle: {},
        newArrowDirection: 'bottom',
        newArrowLocation: 'right',
      });

      const { result } = renderHook(() => usePopoverPosition(defaultProps));

      // Mock tipRef
      Object.defineProperty(result.current.tipRef, 'current', {
        value: mockTipElement,
        writable: true,
      });

      await act(async () => {
        await result.current.onMounted();
      });

      expect(mockGetStylesAndLocation).toHaveBeenCalledWith({
        childrenRef: result.current.childrenRef,
        arrowDirection: 'top',
        arrowLocation: 'center',
        offsetSpacing: 0,
        tipRef: result.current.tipRef,
      });

      expect(result.current.arrowDirection).toBe('bottom');
      expect(result.current.arrowLocation).toBe('right');
      expect(result.current.toolStyles).toEqual(mockStyles);
    });

    it('should not update styles if getStylesAndLocation returns null', async () => {
      mockGetStylesAndLocation.mockResolvedValue(null);

      const { result } = renderHook(() => usePopoverPosition(defaultProps));
      const mockTipElement = document.createElement('div');

      Object.defineProperty(result.current.tipRef, 'current', {
        value: mockTipElement,
        writable: true,
      });

      const initialArrowDirection = result.current.arrowDirection;
      const initialArrowLocation = result.current.arrowLocation;
      const initialToolStyles = result.current.toolStyles;

      await act(async () => {
        await result.current.onMounted();
      });

      expect(result.current.arrowDirection).toBe(initialArrowDirection);
      expect(result.current.arrowLocation).toBe(initialArrowLocation);
      expect(result.current.toolStyles).toEqual(initialToolStyles);
    });

    it('should not call getStylesAndLocation if tipRef is null', async () => {
      const { result } = renderHook(() => usePopoverPosition(defaultProps));

      await act(async () => {
        await result.current.onMounted();
      });

      expect(mockGetStylesAndLocation).not.toHaveBeenCalled();
    });

    it('should update only changed direction and location', async () => {
      const mockTipElement = document.createElement('div');

      mockGetStylesAndLocation.mockResolvedValue({
        styles: { top: 0, left: 0 },
        childrenStyle: {},
        newArrowDirection: 'top', // Same as initial
        newArrowLocation: 'right', // Different from initial
      });

      const { result } = renderHook(() => usePopoverPosition(defaultProps));

      Object.defineProperty(result.current.tipRef, 'current', {
        value: mockTipElement,
        writable: true,
      });

      const initialArrowDirection = result.current.arrowDirection;

      await act(async () => {
        await result.current.onMounted();
      });

      expect(result.current.arrowDirection).toBe(initialArrowDirection); // Should remain same
      expect(result.current.arrowLocation).toBe('right'); // Should be updated
    });
  });

  describe('Visibility handling', () => {
    it('should set visibility hidden when not open', () => {
      const { result } = renderHook(() =>
        usePopoverPosition({
          ...defaultProps,
          isOpen: false,
        }),
      );

      expect(result.current.toolStyles).toEqual({
        visibility: 'hidden',
      });
    });

    it('should not set visibility hidden when open', () => {
      const { result } = renderHook(() =>
        usePopoverPosition({
          ...defaultProps,
          isOpen: true,
        }),
      );

      // When open, visibility should not be explicitly set to hidden
      expect(result.current.toolStyles.visibility).not.toBe('hidden');
    });

    it('should update visibility when isOpen changes', () => {
      const { result, rerender } = renderHook(
        ({ isOpen }) => usePopoverPosition({ ...defaultProps, isOpen }),
        { initialProps: { isOpen: true } },
      );

      // Initially open - no hidden visibility
      expect(result.current.toolStyles.visibility).not.toBe('hidden');

      act(() => {
        rerender({ isOpen: false });
      });

      // Now closed - should have hidden visibility
      expect(result.current.toolStyles).toEqual({
        visibility: 'hidden',
      });
    });
  });

  describe('clearRef functionality', () => {
    it('should clear tipRef when status is false', () => {
      const { result } = renderHook(() => usePopoverPosition(defaultProps));
      const mockTipElement = document.createElement('div');

      // Set tipRef to a mock element
      Object.defineProperty(result.current.tipRef, 'current', {
        value: mockTipElement,
        writable: true,
      });

      expect(result.current.tipRef.current).toBe(mockTipElement);

      act(() => {
        result.current.clearRef(false);
      });

      expect(result.current.tipRef.current).toBeNull();
    });

    it('should not clear tipRef when status is true', () => {
      const { result } = renderHook(() => usePopoverPosition(defaultProps));
      const mockTipElement = document.createElement('div');

      Object.defineProperty(result.current.tipRef, 'current', {
        value: mockTipElement,
        writable: true,
      });

      expect(result.current.tipRef.current).toBe(mockTipElement);

      act(() => {
        result.current.clearRef(true);
      });

      expect(result.current.tipRef.current).toBe(mockTipElement);
    });
  });

  describe('Throttling', () => {
    it('should throttle onMounted function', () => {
      renderHook(() => usePopoverPosition(defaultProps));

      expect(mockThrottle).toHaveBeenCalledWith(expect.any(Function), 16);
    });
  });

  describe('Edge cases', () => {
    it('should handle different offsetSpacing values', () => {
      const offsetSpacing = 20;
      const { result } = renderHook(() =>
        usePopoverPosition({
          ...defaultProps,
          offsetSpacing,
        }),
      );

      expect(result.current).toBeTruthy();
      // The offsetSpacing should be passed to getStylesAndLocation when onMounted is called
    });

    it('should handle missing location in parsePlacement result', () => {
      mockParsePlacement.mockReturnValue({
        direction: 'top',
        location: undefined,
      }); // No location

      const { result } = renderHook(() => usePopoverPosition(defaultProps));

      expect(result.current.arrowLocation).toBe('center'); // Should default to 'center'
    });

    it('should handle rapid isOpen changes', () => {
      const { result, rerender } = renderHook(
        ({ isOpen }) => usePopoverPosition({ ...defaultProps, isOpen }),
        { initialProps: { isOpen: false } },
      );

      // Initial state should be hidden
      expect(result.current.toolStyles.visibility).toBe('hidden');

      // Rapid changes - when isOpen becomes true, visibility stays hidden until onMounted is called
      act(() => {
        rerender({ isOpen: true });
      });
      // Opening doesn't automatically clear hidden visibility - need to call onMounted
      expect(result.current.toolStyles.visibility).toBe('hidden');

      act(() => {
        rerender({ isOpen: false });
      });
      // After closing, should still be hidden
      expect(result.current.toolStyles.visibility).toBe('hidden');

      act(() => {
        rerender({ isOpen: true });
      });
      // After opening again, still hidden until onMounted
      expect(result.current.toolStyles.visibility).toBe('hidden');

      // Should not throw errors during rapid changes
      expect(result.current).toBeTruthy();
    });
  });
});
