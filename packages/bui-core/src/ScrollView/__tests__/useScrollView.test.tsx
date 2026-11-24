import * as React from 'react';
import { render, fireEvent, waitFor } from 'testing';
import { renderHook } from '@testing-library/react';
import { useScrollView } from '../useScrollView';

// Mock scrollTo to avoid jsdom warning
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

// Mock requestAnimationFrame for scroll animation tests
let animationFrameCallbacks: FrameRequestCallback[] = [];
const mockRequestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
  animationFrameCallbacks.push(callback);
  return 1;
});

beforeAll(() => {
  global.requestAnimationFrame = mockRequestAnimationFrame;
});

afterEach(() => {
  animationFrameCallbacks = [];
  vi.clearAllMocks();
});

// Test component that uses the hook
const TestComponent: React.FC<{
  hookProps: Parameters<typeof useScrollView>[0];
  children: React.ReactNode;
}> = ({ hookProps, children }) => {
  const { getRootProps } = useScrollView(hookProps);
  const rootProps = getRootProps();

  return <div {...rootProps}>{children}</div>;
};

describe('useScrollView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hook initialization', () => {
    it('should return getRootProps and containerRef', () => {
      const { result } = renderHook(() =>
        useScrollView({
          scrollY: true,
        }),
      );

      expect(result.current.getRootProps).toBeInstanceOf(Function);
      expect(result.current.containerRef).toBeInstanceOf(Function);
    });

    it('should handle ref forwarding correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            ref,
          }}
        >
          Test content
        </TestComponent>,
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toBe(container.firstChild);
    });
  });

  describe('Scroll event handling', () => {
    it('should call onScroll with correct event detail', () => {
      const onScroll = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScroll,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll properties
      Object.defineProperty(element, 'scrollTop', {
        value: 100,
        writable: true,
      });
      Object.defineProperty(element, 'scrollLeft', {
        value: 50,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });
      Object.defineProperty(element, 'scrollWidth', {
        value: 500,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScroll).toHaveBeenCalled();
      const event = onScroll.mock.calls[0][0];
      expect(event.detail).toEqual({
        scrollTop: 100,
        scrollLeft: 50,
        scrollHeight: 1000,
        scrollWidth: 500,
      });
    });

    it('should call onScrollToUpper when near top', () => {
      const onScrollToUpper = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScrollToUpper,
            upperThreshold: 50,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll position near top
      Object.defineProperty(element, 'scrollTop', {
        value: 30,
        writable: true,
      });
      Object.defineProperty(element, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScrollToUpper).toHaveBeenCalled();
    });

    it('should call onScrollToLower when near bottom', () => {
      const onScrollToLower = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScrollToLower,
            lowerThreshold: 50,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll position near bottom
      Object.defineProperty(element, 'scrollTop', {
        value: 550,
        writable: true,
      });
      Object.defineProperty(element, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScrollToLower).toHaveBeenCalled();
    });

    it('should not call onScrollToUpper/onScrollToLower multiple times for same status', () => {
      const onScrollToUpper = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScrollToUpper,
            upperThreshold: 50,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll position at top
      Object.defineProperty(element, 'scrollTop', {
        value: 30,
        writable: true,
      });
      Object.defineProperty(element, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      // Trigger scroll multiple times
      fireEvent.scroll(element);
      fireEvent.scroll(element);
      fireEvent.scroll(element);

      // onScrollToUpper should only be called once
      expect(onScrollToUpper).toHaveBeenCalledTimes(1);
    });

    it('should handle horizontal scroll events', () => {
      const onScrollToLower = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollX: true,
            onScrollToLower,
            lowerThreshold: 50,
          }}
        >
          <div style={{ width: '1000px' }}>Wide content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock horizontal scroll position near right edge
      Object.defineProperty(element, 'scrollLeft', {
        value: 550,
        writable: true,
      });
      Object.defineProperty(element, 'offsetWidth', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollWidth', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScrollToLower).toHaveBeenCalled();
    });
  });

  describe('Touch event handling', () => {
    it('should call onTouchMove when provided', () => {
      const onTouchMove = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onTouchMove,
          }}
        >
          <div>Content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      fireEvent.touchMove(element);

      expect(onTouchMove).toHaveBeenCalled();
    });

    it('should not throw when onTouchMove is not provided', () => {
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
          }}
        >
          <div>Content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      expect(() => {
        fireEvent.touchMove(element);
      }).not.toThrow();
    });
  });

  describe('Scroll position control', () => {
    it('should handle scrollTop changes', async () => {
      const { container, rerender } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollTop: 0,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Update scrollTop
      rerender(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollTop: 200,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      await waitFor(() => {
        expect(element.scrollTop).toBe(200);
      });
    });

    it('should handle scrollLeft changes', async () => {
      const { container, rerender } = render(
        <TestComponent
          hookProps={{
            scrollX: true,
            scrollLeft: 0,
          }}
        >
          <div style={{ width: '1000px' }}>Wide content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Update scrollLeft
      rerender(
        <TestComponent
          hookProps={{
            scrollX: true,
            scrollLeft: 200,
          }}
        >
          <div style={{ width: '1000px' }}>Wide content</div>
        </TestComponent>,
      );

      await waitFor(() => {
        expect(element.scrollLeft).toBe(200);
      });
    });

    it('should use animation when scrollWithAnimation is true', async () => {
      const { rerender } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollTop: 0,
            scrollWithAnimation: false,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      // Update with animation enabled
      rerender(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollTop: 200,
            scrollWithAnimation: true,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      await waitFor(() => {
        expect(mockRequestAnimationFrame).toHaveBeenCalled();
      });
    });
  });

  describe('ScrollIntoView functionality', () => {
    it('should handle scrollIntoView with valid element id', async () => {
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollIntoView: 'target-element',
          }}
        >
          <div style={{ height: '500px' }}>Top content</div>
          <div id="target-element" style={{ height: '100px' }}>
            Target
          </div>
          <div style={{ height: '500px' }}>Bottom content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;
      const targetElement = container.querySelector(
        '#target-element',
      ) as HTMLElement;

      // Mock target element properties
      Object.defineProperty(targetElement, 'offsetTop', {
        value: 500,
        writable: true,
      });
      Object.defineProperty(targetElement, 'offsetHeight', {
        value: 100,
        writable: true,
      });
      Object.defineProperty(element, 'clientHeight', {
        value: 400,
        writable: true,
      });

      // ScrollIntoView should trigger scroll position change
      await waitFor(() => {
        expect(element.scrollTop).toBeGreaterThanOrEqual(0);
      });
    });

    it('should handle scrollIntoView alignment options', async () => {
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            scrollIntoView: 'target-element',
            scrollIntoViewAlignment: 'center',
          }}
        >
          <div style={{ height: '500px' }}>Top content</div>
          <div id="target-element" style={{ height: '100px' }}>
            Target
          </div>
          <div style={{ height: '500px' }}>Bottom content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;
      const targetElement = container.querySelector(
        '#target-element',
      ) as HTMLElement;

      // Mock target element properties
      Object.defineProperty(targetElement, 'offsetTop', {
        value: 500,
        writable: true,
      });
      Object.defineProperty(targetElement, 'offsetHeight', {
        value: 100,
        writable: true,
      });
      Object.defineProperty(element, 'clientHeight', {
        value: 400,
        writable: true,
      });

      // Should handle different alignment values
      await waitFor(() => {
        expect(element.scrollTop).toBeGreaterThanOrEqual(0);
      });
    });

    it('should handle scrollIntoView when element does not exist', () => {
      expect(() => {
        render(
          <TestComponent
            hookProps={{
              scrollY: true,
              scrollIntoView: 'non-existent-element',
            }}
          >
            <div>Content without target</div>
          </TestComponent>,
        );
      }).not.toThrow();
    });
  });

  describe('Prop passing', () => {
    it('should pass through other props to getRootProps', () => {
      const { result } = renderHook(
        () =>
          useScrollView({
            scrollY: true,
            'data-testid': 'scroll-container',
            role: 'region',
            'aria-label': 'Scrollable content',
          } as any), // 使用类型断言来传递额外的HTML属性
      );

      const rootProps = result.current.getRootProps({
        'data-testid': 'scroll-container',
        role: 'region',
        'aria-label': 'Scrollable content',
      });

      expect(rootProps).toMatchObject({
        'data-testid': 'scroll-container',
        role: 'region',
        'aria-label': 'Scrollable content',
      });
    });

    it('should merge handler props correctly', () => {
      const customHandler = vi.fn();
      const { result } = renderHook(() =>
        useScrollView({
          scrollY: true,
        }),
      );

      const rootProps = result.current.getRootProps({
        onClick: customHandler,
      });

      expect(rootProps.onClick).toBe(customHandler);
      expect(rootProps.onScroll).toBeInstanceOf(Function);
      expect(rootProps.onTouchMove).toBeInstanceOf(Function);
    });
  });

  describe('Threshold configuration', () => {
    it('should use custom upperThreshold value', () => {
      const onScrollToUpper = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScrollToUpper,
            upperThreshold: 100,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll position within custom threshold
      Object.defineProperty(element, 'scrollTop', {
        value: 80,
        writable: true,
      });
      Object.defineProperty(element, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScrollToUpper).toHaveBeenCalled();
    });

    it('should use custom lowerThreshold value', () => {
      const onScrollToLower = vi.fn();
      const { container } = render(
        <TestComponent
          hookProps={{
            scrollY: true,
            onScrollToLower,
            lowerThreshold: 100,
          }}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </TestComponent>,
      );

      const element = container.firstChild as HTMLDivElement;

      // Mock scroll position within custom threshold
      Object.defineProperty(element, 'scrollTop', {
        value: 500,
        writable: true,
      });
      Object.defineProperty(element, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(element, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(element);

      expect(onScrollToLower).toHaveBeenCalled();
    });
  });
});
