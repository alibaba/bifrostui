import React from 'react';
import { render, screen, isConformant } from 'testing';
import NavBar from '../index';

vi.mock('@bifrostui/utils', async () => {
  const originalModule = await vi.importActual('@bifrostui/utils');
  return {
    ...originalModule,
    useSize: vi.fn(() => ({ width: '100%', height: 45 })),
  };
});

describe('Loading', () => {
  const rootClass = 'bui-navbar';

  isConformant({
    Component: NavBar,
    displayName: 'BuiNavBar',
    className: rootClass,
  });

  it('title props', async () => {
    render(<NavBar title="标题" />);
    expect(screen.getByText('标题')).toBeInTheDocument();
  });

  it('left props', async () => {
    render(<NavBar left="返回" />);
    expect(screen.getByText('返回')).toBeInTheDocument();
  });

  it('left props', async () => {
    render(<NavBar leftIcon={<div>mockicon</div>} />);
    expect(screen.getByText('mockicon')).toBeInTheDocument();
  });

  it('right props', async () => {
    render(<NavBar right="文案" />);
    expect(screen.getByText('文案')).toBeInTheDocument();
  });

  it('The fixed attribute causes a classname', async () => {
    render(<NavBar data-testid={rootClass} fixed />);
    expect(screen.getByTestId(rootClass)).toHaveClass('bui-navbar-fixed');
  });

  it('The placeholder attribute causes a block', async () => {
    const { container } = render(
      <NavBar data-testid={rootClass} fixed placeholder />,
    );

    const elements = container.getElementsByClassName(
      `${rootClass}-placeholder`,
    );
    expect(elements.length).toBe(1);
  });
});
