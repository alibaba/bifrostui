import React from 'react';
import { isConformant, render, screen, userEvent } from 'testing';
import Rating from '../index';

describe('Rating', () => {
  const rootClass = 'bui-rating';

  isConformant({
    Component: Rating,
    displayName: 'BuiRating',
    className: rootClass,
  });
  it('renders correctly', () => {
    const { container } = render(<Rating />);
    expect(container).toMatchSnapshot();
  });
  it('medium size is default', () => {
    const { container } = render(<Rating />);
    expect(
      container.querySelectorAll(`.${rootClass}-container-medium`).length,
    ).toBe(5);
  });
  it.each(['large', 'medium', 'small', 'xsmall'] as const)(
    'should render correctly with size props',
    (size) => {
      const { container } = render(<Rating size={size} />);
      expect(
        container.querySelectorAll(`.${rootClass}-container-${size}`).length,
      ).toBe(5);
    },
  );

  it('should round the value to the provided precision', () => {
    const { container } = render(<Rating value={3.9} />);
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      3,
    );
  });

  it('the count of icons can be customized', () => {
    render(<Rating count={8} />);
    expect(screen.queryAllByRole('radio').length).toBe(8);
  });
  it('allow to render half', () => {
    const { container } = render(<Rating value={4.6} allowHalf />);
    expect(container.querySelectorAll(`.${rootClass}-item-half`).length).toBe(
      5,
    );
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      9,
    );
  });

  it('disabled rating can not respond to events', () => {
    const { container } = render(<Rating defaultValue={3} disabled />);
    userEvent.click(container.querySelectorAll('.bui-rating-item')[2]);
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      3,
    );
    expect(container.querySelector(`.${rootClass}`)).toHaveClass(
      `${rootClass}-disabled`,
    );
  });

  it('read only not clickable', () => {
    const handleChange = jest.fn();
    const { container } = render(<Rating readOnly onChange={handleChange} />);
    userEvent.click(container.querySelector(`.${rootClass}-item-readonly`));
    expect(handleChange).not.toBeCalled();
  });

  it('character can be customized', () => {
    render(<Rating checkedIcon="A" icon="B" defaultValue={3} />);
    expect(screen.getAllByText('A').length).toBe(3);
    expect(screen.getAllByText('B').length).toBe(2);
  });

  // it.each(['primary', 'warning', 'success', 'info', 'danger', 'vip'] as const)(
  //   'should render correctly with color props',
  //   (color) => {
  //     const { container } = render(<Rating color={color} value={4} />);
  //     expect(
  //       container.querySelectorAll(`.${rootClass}-item-${color}`).length,
  //     ).toBe(4);
  //   },
  // );

  it('should fire change event when click rate item', () => {
    const handleChange = jest.fn();
    const { container } = render(<Rating onChange={handleChange} />);
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      0,
    );
    userEvent.click(container.querySelector(`.${rootClass}-item`));
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      1,
    );
    expect(handleChange).toBeCalled();
  });

  it('click again to clear active status', () => {
    const { container } = render(<Rating />);
    userEvent.click(container.querySelector(`.${rootClass}-item`));
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      1,
    );
    userEvent.click(container.querySelector(`.${rootClass}-item`));
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      0,
    );
  });

  it('click again to can not clear active status', () => {
    const { container } = render(<Rating disableClear />);
    userEvent.click(container.querySelector(`.${rootClass}-item`));
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      1,
    );
    userEvent.click(container.querySelector(`.${rootClass}-item`));
    expect(container.querySelectorAll(`.${rootClass}-item-active`).length).toBe(
      1,
    );
  });
});
