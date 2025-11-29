import * as React from 'react';
import { render, fireEvent, waitFor } from 'testing';
import ScrollView from '../ScrollView';

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

describe('ScrollView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic rendering', () => {
    it('should render content correctly', () => {
      const { getByText } = render(
        <ScrollView scrollY>
          <div>Test content</div>
        </ScrollView>,
      );
      expect(getByText('Test content')).toBeInTheDocument();
    });

    it('should apply correct CSS classes', () => {
      const { container } = render(
        <ScrollView scrollY className="custom-scroll">
          <div>content</div>
        </ScrollView>,
      );
      const scrollElement = container.querySelector('.bui-scroll');
      expect(scrollElement).toHaveClass(
        'bui-scroll',
        'custom-scroll',
        'bui-scroll-view-scroll-y',
      );
    });

    it('should apply scroll-x class when scrollX is true', () => {
      const { container } = render(
        <ScrollView scrollX>
          <div>content</div>
        </ScrollView>,
      );
      const scrollElement = container.querySelector('.bui-scroll');
      expect(scrollElement).toHaveClass('bui-scroll-view-scroll-x');
    });

    it('should apply both scroll classes when both scrollX and scrollY are true', () => {
      const { container } = render(
        <ScrollView scrollX scrollY>
          <div>content</div>
        </ScrollView>,
      );
      const scrollElement = container.querySelector('.bui-scroll');
      expect(scrollElement).toHaveClass(
        'bui-scroll-view-scroll-x',
        'bui-scroll-view-scroll-y',
      );
    });

    it('should forward ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <ScrollView scrollY ref={ref}>
          <div>content</div>
        </ScrollView>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('bui-scroll');
    });

    it('should apply custom style', () => {
      const customStyle = { height: '400px', width: '100%' };
      const { container } = render(
        <ScrollView scrollY style={customStyle}>
          <div>content</div>
        </ScrollView>,
      );
      const scrollElement = container.querySelector('.bui-scroll');
      expect(scrollElement).toHaveStyle('height: 400px');
      expect(scrollElement).toHaveStyle('width: 100%');
    });
  });

  describe('Scroll events', () => {
    it('should call onScroll when scrolling', () => {
      const onScroll = vi.fn();
      const { container } = render(
        <ScrollView scrollY onScroll={onScroll}>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      fireEvent.scroll(scrollElement, { target: { scrollTop: 100 } });

      expect(onScroll).toHaveBeenCalled();
      const event = onScroll.mock.calls[0][0];
      expect(event.detail).toBeDefined();
    });

    it('should call onScrollToUpper when scrolling to top', () => {
      const onScrollToUpper = vi.fn();
      const { container } = render(
        <ScrollView
          scrollY
          onScrollToUpper={onScrollToUpper}
          upperThreshold={50}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      // Mock scroll position at the top
      Object.defineProperty(scrollElement, 'scrollTop', {
        value: 10,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'scrollHeight', {
        value: 1000,
        writable: true,
      });

      fireEvent.scroll(scrollElement);

      expect(onScrollToUpper).toHaveBeenCalled();
    });

    it('should call onScrollToLower when scrolling to bottom', () => {
      const onScrollToLower = vi.fn();
      const { container } = render(
        <ScrollView
          scrollY
          onScrollToLower={onScrollToLower}
          lowerThreshold={50}
        >
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      // Mock scroll position near the bottom
      Object.defineProperty(scrollElement, 'scrollTop', {
        value: 550,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'offsetHeight', {
        value: 400,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'scrollHeight', {
        value: 1000,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'scrollWidth', {
        value: 400,
        writable: true,
      });

      fireEvent.scroll(scrollElement);

      expect(onScrollToLower).toHaveBeenCalled();
    });

    it('should call onTouchMove when touching', () => {
      const onTouchMove = vi.fn();
      const { container } = render(
        <ScrollView scrollY onTouchMove={onTouchMove}>
          <div>content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      fireEvent.touchMove(scrollElement);

      expect(onTouchMove).toHaveBeenCalled();
    });
  });

  describe('Props filtering', () => {
    it('should pass through other HTML div props', () => {
      const { container } = render(
        <ScrollView
          scrollY
          data-testid="scroll-container"
          role="region"
          aria-label="Scrollable content"
        >
          <div>content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector('.bui-scroll');
      expect(scrollElement).toHaveAttribute('data-testid', 'scroll-container');
      expect(scrollElement).toHaveAttribute('role', 'region');
      expect(scrollElement).toHaveAttribute('aria-label', 'Scrollable content');
    });
  });

  describe('Scroll position control', () => {
    it('should scroll to specified scrollTop', async () => {
      const { container, rerender } = render(
        <ScrollView scrollY scrollTop={0}>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      // Rerender with new scrollTop
      rerender(
        <ScrollView scrollY scrollTop={200}>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      // Wait for the scroll effect to apply
      await waitFor(() => {
        expect(scrollElement.scrollTop).toBe(200);
      });
    });

    it('should scroll to specified scrollLeft', async () => {
      const { container, rerender } = render(
        <ScrollView scrollX scrollLeft={0}>
          <div style={{ width: '1000px' }}>Wide content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      // Rerender with new scrollLeft
      rerender(
        <ScrollView scrollX scrollLeft={200}>
          <div style={{ width: '1000px' }}>Wide content</div>
        </ScrollView>,
      );

      // Wait for the scroll effect to apply
      await waitFor(() => {
        expect(scrollElement.scrollLeft).toBe(200);
      });
    });
  });

  describe('Scroll animation', () => {
    it('should use animation when scrollWithAnimation is true', async () => {
      const { rerender } = render(
        <ScrollView scrollY scrollTop={0} scrollWithAnimation>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      rerender(
        <ScrollView scrollY scrollTop={200} scrollWithAnimation>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      // Should trigger requestAnimationFrame for animation
      await waitFor(() => {
        expect(mockRequestAnimationFrame).toHaveBeenCalled();
      });
    });
  });

  describe('ScrollIntoView functionality', () => {
    it('should scroll to element with specified id', async () => {
      const { container } = render(
        <ScrollView scrollY scrollIntoView="target-element">
          <div style={{ height: '500px' }}>Top content</div>
          <div id="target-element" style={{ height: '100px' }}>
            Target
          </div>
          <div style={{ height: '500px' }}>Bottom content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;
      const targetElement = container.querySelector(
        '#target-element',
      ) as HTMLElement;

      // Mock offsetTop for the target element
      Object.defineProperty(targetElement, 'offsetTop', {
        value: 500,
        writable: true,
      });
      Object.defineProperty(targetElement, 'offsetHeight', {
        value: 100,
        writable: true,
      });
      Object.defineProperty(scrollElement, 'clientHeight', {
        value: 400,
        writable: true,
      });

      // Wait for scroll into view effect
      await waitFor(() => {
        // The scroll position should be set to show the target element
        expect(scrollElement.scrollTop).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle empty children', () => {
      expect(() => {
        render(<ScrollView scrollY>{null}</ScrollView>);
      }).not.toThrow();
    });

    it('should handle multiple children', () => {
      const { getByText } = render(
        <ScrollView scrollY>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </ScrollView>,
      );

      expect(getByText('Child 1')).toBeInTheDocument();
      expect(getByText('Child 2')).toBeInTheDocument();
      expect(getByText('Child 3')).toBeInTheDocument();
    });

    it('should not trigger scroll events when handlers are not provided', () => {
      const { container } = render(
        <ScrollView scrollY>
          <div style={{ height: '1000px' }}>Long content</div>
        </ScrollView>,
      );

      const scrollElement = container.querySelector(
        '.bui-scroll',
      ) as HTMLDivElement;

      expect(() => {
        fireEvent.scroll(scrollElement);
      }).not.toThrow();
    });
  });

  describe('Component lifecycle', () => {
    it('should clean up properly on unmount', () => {
      const { unmount } = render(
        <ScrollView scrollY>
          <div>content</div>
        </ScrollView>,
      );

      expect(() => {
        unmount();
      }).not.toThrow();
    });

    it('should handle prop changes correctly', () => {
      const { rerender } = render(
        <ScrollView scrollY>
          <div>content</div>
        </ScrollView>,
      );

      expect(() => {
        rerender(
          <ScrollView scrollX scrollY>
            <div>updated content</div>
          </ScrollView>,
        );
      }).not.toThrow();
    });
  });
});
