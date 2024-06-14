import React from 'react';
import { isConformant, render, screen, userEvent } from 'testing';
import Button from '../index';

describe('Button', () => {
  const rootClass = 'bui-btn';

  isConformant({
    Component: Button,
    displayName: 'BuiButton',
    className: rootClass,
  });
  it('renders correctly', () => {
    const { container } = render(<Button>button</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('default render is medium outlined', () => {
    render(<Button>button</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      `${rootClass}-outlined ${rootClass}-medium`,
    );
  });

  it('can trigger a function by being clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>This is a button</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
  it('does not trigger a function when render a disabled button', () => {
    const onClick = jest.fn();
    render(<Button disabled>disabled button</Button>);
    const disabledBtn = screen.getByRole('button');
    expect(disabledBtn).toHaveClass(`${rootClass}-disabled`);
    userEvent.click(disabledBtn);
    expect(onClick).not.toHaveBeenCalled();
  });
  it.each([
    'primary',
    'warning',
    'success',
    'info',
    'danger',
    'vip',
    'default',
  ] as const)('should render correctly with color props', (color) => {
    render(<Button color={color}>{color} button</Button>);
    expect(screen.getByRole('button')).toHaveClass(`${rootClass}-${color}`);
  });
  it.each(['full', 'large', 'medium', 'medium'] as const)(
    'should render correctly with size props',
    (size) => {
      render(<Button size={size}>{size} button</Button>);
      expect(screen.getByRole('button')).toHaveClass(`${rootClass}-${size}`);
    },
  );

  it('should render a button with startIcon', () => {
    render(<Button startIcon={<span>icon</span>}>button</Button>);
    expect(screen.queryByText('icon')).toBeInTheDocument();
  });
  it('should render a button with endIcon', () => {
    render(<Button endIcon={<span>endIcon</span>}>button</Button>);
    expect(screen.queryByText('endIcon')).toBeInTheDocument();
  });
});
