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

  it('should pass transitionDuration', () => {
    const { container } = render(<Backdrop open timeout={2341} />);
    expect(container.querySelector(`.${classPrefix}`)).toHaveStyle(
      'transition: opacity 2341ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    );
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
});
