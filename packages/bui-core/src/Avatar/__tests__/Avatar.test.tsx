import * as React from 'react';
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

      expect(container.querySelector('img')).toHaveAttribute(
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
    it('should apply ImageProps correctly', () => {
      const { container } = render(
        <Avatar src="https://not.exists.image/" ImageProps={{ fit: 'fill' }} />,
      );
      expect(container.querySelector('img').style.objectFit).toBe('fill');
    });
  });

  it.each(['contain', 'cover', 'fill', 'none', 'scale-down'] as const)(
    'renders with different fit modes',
    async (fit) => {
      const { container } = render(
        <Avatar
          src="https://gw.alicdn.com/imgextra/i3/O1CN01tp2YUs1WFD8lboMDu_!!6000000002758-2-tps-126-126.png"
          fit={fit}
        />,
      );
      expect(container.querySelector('img').style.objectFit === fit);
    },
  );

  describe('events', () => {
    it('responses click events', async () => {
      const onClick = vi.fn();
      render(<Avatar onClick={onClick}>hello world</Avatar>);
      await userEvent.click(screen.getByText('hello world'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
