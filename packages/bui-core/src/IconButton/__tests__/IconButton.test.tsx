import React from 'react';
import { isConformant, render, screen, userEvent } from 'testing';
import IconButton from '../index';

describe('IconButton', () => {
  const rootClass = 'bui-icon-btn';

  isConformant({
    Component: IconButton,
    displayName: 'BuiIconButton',
    className: rootClass,
  });

  it('can trigger a function by being clicked', () => {
    const onClick = jest.fn();
    render(<IconButton onClick={onClick}>IconButton</IconButton>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should render correctly with size props', () => {
    const colors = ['small', 'medium', 'large'] as const;
    colors.forEach((size) => {
      render(<IconButton size={size}>{size} IconButton</IconButton>);
      expect(
        screen.getByRole('button', { name: `${size} IconButton` }),
      ).toHaveClass(`${rootClass}-${size}`);
    });
  });

  it('should render correctly with variant props', () => {
    const colors = ['default', 'contained', 'outlined'] as const;
    colors.forEach((variant) => {
      render(<IconButton variant={variant}>{variant} IconButton</IconButton>);
      expect(
        screen.getByRole('button', { name: `${variant} IconButton` }),
      ).toHaveClass(`${rootClass}-${variant}`);
    });
  });
  it('should render correctly with color props', () => {
    const colors = [
      'primary',
      'warning',
      'success',
      'info',
      'danger',
      'default',
    ] as const;
    colors.forEach((color) => {
      render(<IconButton color={color}>{color} IconButton</IconButton>);
      expect(
        screen.getByRole('button', { name: `${color} IconButton` }),
      ).toHaveClass(`${rootClass}-${color}`);
    });
  });
  it('in miniapp children can set color props', async () => {
    jest.resetModules();
    jest.doMock('@bifrostui/utils', () => ({
      isMini: true,
    }));
    const { default: MiniIconButton } = await import('../index');
    render(
      <MiniIconButton color="success">
        <div>icon</div>
      </MiniIconButton>,
    );
    expect(screen.getByText('icon')).toHaveAttribute('color', 'success');
    const mockBackdropFn = jest.fn();
    const TestChildren = (props) => {
      mockBackdropFn(props);
      return <div />;
    };
    render(
      <MiniIconButton color="success" variant="contained">
        <TestChildren />
      </MiniIconButton>,
    );
    expect(mockBackdropFn).toHaveBeenCalledWith(
      expect.objectContaining({ htmlColor: '#fff' }),
    );
  });
});
