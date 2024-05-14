import React from 'react';
import { isConformant, render, screen, userEvent } from 'testing';
import Avatar from '../Avatar';

const classPrefix = 'bui-avatar';

describe('Avatar', () => {
  isConformant({
    Component: Avatar,
    displayName: 'BuiAvatar',
    className: 'bui-avatar',
  });
  describe('prop: src', () => {
    it('should render children correctly, not src', () => {
      const component = (
        <Avatar src="https://gw.alicdn.com/imgextra/i3/O1CN01tp2YUs1WFD8lboMDu_!!6000000002758-2-tps-126-126.png">
          hello world
        </Avatar>
      );
      const { container } = render(component);

      expect(screen.getByText('hello world')).toBeTruthy();
      expect(screen.queryByRole('img')).toBe(null);
      expect(container).toMatchSnapshot();
    });

    it('should render containing an img', () => {
      const component = (
        <Avatar src="https://gw.alicdn.com/imgextra/i3/O1CN01tp2YUs1WFD8lboMDu_!!6000000002758-2-tps-126-126.png" />
      );
      const { container } = render(component);

      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://gw.alicdn.com/imgextra/i3/O1CN01tp2YUs1WFD8lboMDu_!!6000000002758-2-tps-126-126.png',
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('prop: size', () => {
    it.each(['xsmall', 'small', 'medium', 'large'] as const)(
      'should render size correct',
      (size) => {
        render(<Avatar size={size} data-testid="avatar" />);
        expect(screen.getByTestId('avatar')).toHaveClass(
          `${classPrefix}-${size}`,
        );
      },
    );
  });

  describe('prop: variant', () => {
    it('should render rounded default correctly', () => {
      render(<Avatar data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toHaveClass(
        `${classPrefix}-rounded`,
      );
    });
    it('should render square correctly', () => {
      render(<Avatar variant="square" data-testid="avatar" />);
      expect(screen.getByTestId('avatar')).toHaveClass(`${classPrefix}-square`);
    });
  });

  describe('prop: ImageProps', () => {
    render(
      <Avatar src="https://not.exists.image/" ImageProps={{ fit: 'fill' }} />,
    );
    expect(screen.getByRole('img').style.objectFit === 'fill');
  });
  // it('has placeholder', async () => {
  //   render(<Avatar src="https://not.exists.image/" placeholder="加载失败" />);
  //   expect(screen.getByText('加载失败')).toBeTruthy();
  // });

  it.each(['contain', 'cover', 'fill', 'none', 'scale-down'])(
    'renders with different fit modes',
    async (fit: any) => {
      render(
        <Avatar
          src="https://gw.alicdn.com/imgextra/i3/O1CN01tp2YUs1WFD8lboMDu_!!6000000002758-2-tps-126-126.png"
          fit={fit}
        />,
      );
      expect(screen.getByRole('img').style.objectFit === fit);
    },
  );

  describe('events', () => {
    it('responses click events', () => {
      const onClick = jest.fn();
      render(<Avatar onClick={onClick}>hello world</Avatar>);
      userEvent.click(screen.getByText('hello world'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
