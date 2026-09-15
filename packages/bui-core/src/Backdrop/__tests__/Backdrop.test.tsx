import * as React from 'react';
import { render, fireEvent } from 'testing';
import Backdrop from '../Backdrop';

describe('Backdrop', () => {
  const classPrefix = 'bui-backdrop';

  describe('Basic rendering', () => {
    it('should render with correct default props', () => {
      const { container } = render(<Backdrop />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
      expect(backdrop).not.toHaveClass(`${classPrefix}-invisible`);
      expect(backdrop).toHaveAttribute('aria-hidden', 'true');
    });

    it('should render children when provided', () => {
      const { container } = render(
        <Backdrop open>
          <div data-testid="backdrop-child">Child content</div>
        </Backdrop>,
      );
      expect(
        container.querySelector('[data-testid="backdrop-child"]'),
      ).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClass = 'custom-backdrop';
      const { container } = render(<Backdrop open className={customClass} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveClass(customClass);
      expect(backdrop).toHaveClass(classPrefix);
    });

    it('should maintain displayName', () => {
      expect(Backdrop.displayName).toBe('Backdrop');
    });
  });

  describe('Props handling', () => {
    it('should handle open prop correctly', () => {
      const { container, rerender } = render(<Backdrop open={false} />);
      let backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();

      rerender(<Backdrop open />);
      backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });

    it('should handle invisible prop correctly', () => {
      const { container } = render(<Backdrop open invisible />);
      expect(container.querySelector(`.${classPrefix}`)).toHaveClass(
        `${classPrefix}-invisible`,
      );

      const { container: container1 } = render(<Backdrop open />);
      expect(container1.querySelector(`.${classPrefix}`)).not.toHaveClass(
        `${classPrefix}-invisible`,
      );

      const { container: container2 } = render(
        <Backdrop open invisible={false} />,
      );
      expect(container2.querySelector(`.${classPrefix}`)).not.toHaveClass(
        `${classPrefix}-invisible`,
      );
    });

    it('should pass transitionDuration to Fade component', () => {
      const duration = 500;
      const { container } = render(
        <Backdrop open transitionDuration={duration} />,
      );
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });

    it('should pass through additional props to Fade component', () => {
      const onEnter = vi.fn();
      const onExit = vi.fn();
      const { container } = render(
        <Backdrop
          open
          onEnter={onEnter}
          onExit={onExit}
          data-testid="custom-backdrop"
          role="presentation"
        />,
      );
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveAttribute('data-testid', 'custom-backdrop');
      expect(backdrop).toHaveAttribute('role', 'presentation');
    });
  });

  describe('Event handling', () => {
    it('should fire onClick event when click backdrop', () => {
      const clickFn = vi.fn();
      const { container } = render(
        <Backdrop open timeout={1000} onClick={clickFn} />,
      );
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeTruthy();
      fireEvent.click(backdrop as Element);
      expect(clickFn).toHaveBeenCalled();
    });

    it('should handle multiple event handlers', () => {
      const clickFn = vi.fn();
      const mouseDownFn = vi.fn();
      const mouseUpFn = vi.fn();

      const { container } = render(
        <Backdrop
          open
          onClick={clickFn}
          onMouseDown={mouseDownFn}
          onMouseUp={mouseUpFn}
        />,
      );
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeTruthy();

      fireEvent.mouseDown(backdrop as Element);
      expect(mouseDownFn).toHaveBeenCalled();

      fireEvent.mouseUp(backdrop as Element);
      expect(mouseUpFn).toHaveBeenCalled();

      fireEvent.click(backdrop as Element);
      expect(clickFn).toHaveBeenCalled();
    });
  });

  describe('Ref handling', () => {
    it('should forward ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Backdrop open ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass(classPrefix);
    });

    it('should handle ref with callback', () => {
      let refElement: HTMLDivElement | null = null;
      const refCallback = (element: HTMLDivElement | null) => {
        refElement = element;
      };

      render(<Backdrop open ref={refCallback} />);
      expect(refElement).toBeInstanceOf(HTMLDivElement);
      expect(refElement).toHaveClass(classPrefix);
    });
  });

  describe('Accessibility', () => {
    it('should have correct aria-hidden attribute', () => {
      const { container } = render(<Backdrop open />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveAttribute('aria-hidden', 'true');
    });

    it('should maintain aria-hidden even with custom props', () => {
      const { container } = render(
        <Backdrop open role="presentation" tabIndex={-1} />,
      );
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveAttribute('aria-hidden', 'true');
      expect(backdrop).toHaveAttribute('role', 'presentation');
      expect(backdrop).toHaveAttribute('tabIndex', '-1');
    });
  });

  describe('Style handling', () => {
    it('should handle style prop correctly', () => {
      const customStyle = { backgroundColor: 'red', zIndex: 9999 };
      const { container } = render(<Backdrop open style={customStyle} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveStyle('background-color: red');
      expect(backdrop).toHaveStyle('z-index: 9999');
    });

    it('should merge custom styles with component styles', () => {
      const customStyle = {
        position: 'fixed' as const,
        top: '10px',
        opacity: 0.8,
      };
      const { container } = render(<Backdrop open style={customStyle} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveStyle('position: fixed');
      expect(backdrop).toHaveStyle('top: 10px');
      expect(backdrop).toHaveStyle('opacity: 0.8');
    });
  });

  describe('Children handling', () => {
    it('should handle undefined children', () => {
      const { container } = render(<Backdrop open>{undefined}</Backdrop>);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
      expect(backdrop?.children).toHaveLength(0);
    });

    it('should handle null children', () => {
      const { container } = render(<Backdrop open>{null}</Backdrop>);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
      expect(backdrop?.children).toHaveLength(0);
    });

    it('should handle multiple children', () => {
      const { container } = render(
        <Backdrop open>
          <div data-testid="child-1">Child 1</div>
          <div data-testid="child-2">Child 2</div>
        </Backdrop>,
      );
      expect(
        container.querySelector('[data-testid="child-1"]'),
      ).toBeInTheDocument();
      expect(
        container.querySelector('[data-testid="child-2"]'),
      ).toBeInTheDocument();
    });

    it('should handle React fragments as children', () => {
      const { container } = render(
        <Backdrop open>
          <>
            <div data-testid="fragment-child-1">Fragment Child 1</div>
            <div data-testid="fragment-child-2">Fragment Child 2</div>
          </>
        </Backdrop>,
      );
      expect(
        container.querySelector('[data-testid="fragment-child-1"]'),
      ).toBeInTheDocument();
      expect(
        container.querySelector('[data-testid="fragment-child-2"]'),
      ).toBeInTheDocument();
    });
  });

  describe('Integration with Fade component', () => {
    it('should integrate with Fade component for transitions', async () => {
      const { container, rerender } = render(<Backdrop open={false} />);
      let backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();

      rerender(<Backdrop open />);
      backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });

    it('should pass Fade-specific props correctly', () => {
      const onEnter = vi.fn();
      const onEntered = vi.fn();
      const onExit = vi.fn();
      const onExited = vi.fn();

      render(
        <Backdrop
          open
          onEnter={onEnter}
          onEntered={onEntered}
          onExit={onExit}
          onExited={onExited}
          timeout={300}
        />,
      );

      // The component should render without errors
      expect(document.querySelector(`.${classPrefix}`)).toBeInTheDocument();
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle rapid open/close state changes', () => {
      const { container, rerender } = render(<Backdrop open={false} />);

      rerender(<Backdrop open />);
      rerender(<Backdrop open={false} />);
      rerender(<Backdrop open />);

      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });

    it('should handle invalid timeout values gracefully', () => {
      const { container } = render(<Backdrop open timeout={-1} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });

    it('should handle complex timeout objects', () => {
      const complexTimeout = {
        enter: 300,
        exit: 200,
        appear: 100,
      };

      const { container } = render(<Backdrop open timeout={complexTimeout} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
    });
  });

  describe('Component lifecycle', () => {
    it('should handle unmounting gracefully', () => {
      const { container, unmount } = render(<Backdrop open />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();

      expect(() => unmount()).not.toThrow();
    });

    it('should handle re-mounting with different props', () => {
      const { container, rerender } = render(
        <Backdrop open invisible className="test-1" />,
      );

      rerender(<Backdrop open={false} invisible={false} className="test-2" />);

      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toBeInTheDocument();
      expect(backdrop).toHaveClass('test-2');
      expect(backdrop).not.toHaveClass('test-1');
      expect(backdrop).not.toHaveClass(`${classPrefix}-invisible`);
    });
  });
});
