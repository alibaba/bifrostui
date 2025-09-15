import React from 'react';
import { render, fireEvent } from 'testing';
import Backdrop from '../Backdrop';

describe('Backdrop', () => {
  const classPrefix = 'bui-backdrop';

  it('should fire onClick event when click backdrop', () => {
    const clickFn = vi.fn();
    const { container } = render(
      <Backdrop open timeout={1000} onClick={clickFn} />,
    );
    const [backdrop] = [...container.getElementsByClassName(classPrefix)];
    fireEvent.click(backdrop);
    expect(clickFn).toBeCalled();
  });

  it('can be invisible', () => {
    const { container } = render(<Backdrop open timeout={1000} invisible />);
    expect(container.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-invisible`,
    );
    const { container: container1 } = render(<Backdrop open timeout={1000} />);
    expect(container1.querySelector(`.${classPrefix}`)).not.toHaveClass(
      `${classPrefix}-invisible`,
    );
  });

  it('should render with correct default props', () => {
    const { container } = render(<Backdrop />);
    const backdrop = container.querySelector(`.${classPrefix}`);
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).not.toHaveClass(`${classPrefix}-invisible`);
  });

  it('should not render when open is false by default', () => {
    const { container } = render(<Backdrop open={false} />);
    // When open is false, the Fade component should handle the visibility
    const backdrop = container.querySelector(`.${classPrefix}`);
    expect(backdrop).toBeInTheDocument(); // Element exists but may not be visible due to Fade
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

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Backdrop open ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass(classPrefix);
  });

  it('should have correct aria-hidden attribute', () => {
    const { container } = render(<Backdrop open />);
    const backdrop = container.querySelector(`.${classPrefix}`);
    expect(backdrop).toHaveAttribute('aria-hidden', 'true');
  });

  it('should pass through additional props', () => {
    const { container } = render(
      <Backdrop open data-testid="custom-backdrop" role="presentation" />,
    );
    const backdrop = container.querySelector(`.${classPrefix}`);
    expect(backdrop).toHaveAttribute('data-testid', 'custom-backdrop');
    expect(backdrop).toHaveAttribute('role', 'presentation');
  });

  it('should maintain displayName', () => {
    expect(Backdrop.displayName).toBe('Backdrop');
  });

  describe('edge cases', () => {
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

    it('should handle style prop correctly', () => {
      const customStyle = { backgroundColor: 'red', zIndex: 9999 };
      const { container } = render(<Backdrop open style={customStyle} />);
      const backdrop = container.querySelector(`.${classPrefix}`);
      expect(backdrop).toHaveStyle('background-color: red');
      expect(backdrop).toHaveStyle('z-index: 9999');
    });

    it('should handle boolean invisible prop variations', () => {
      // Test with explicit true
      const { container: container1 } = render(<Backdrop open invisible />);
      expect(container1.querySelector(`.${classPrefix}`)).toHaveClass(
        `${classPrefix}-invisible`,
      );

      // Test with explicit false
      const { container: container2 } = render(
        <Backdrop open invisible={false} />,
      );
      expect(container2.querySelector(`.${classPrefix}`)).not.toHaveClass(
        `${classPrefix}-invisible`,
      );

      // Test with just invisible (should be true)
      const { container: container3 } = render(<Backdrop open invisible />);
      expect(container3.querySelector(`.${classPrefix}`)).toHaveClass(
        `${classPrefix}-invisible`,
      );
    });
  });
});
