import React from 'react';
import { act, isConformant, render, screen, userEvent, waitFor } from 'testing';
import Drawer from '../index';

describe('Drawer', () => {
  const rootClass = 'bui-drawer';
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  isConformant({
    Component: Drawer,
    displayName: 'BuiDrawer',
    className: rootClass,
    requiredProps: {
      open: true,
    },
    getTargetElement: () => {
      return document.querySelector('.bui-modal');
    },
  });
  it('renders correctly', async () => {
    const { container } = render(
      <Drawer open disablePortal>
        Drawer
      </Drawer>,
    );
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should open and close', async () => {
    const { rerender } = render(<Drawer>Drawer content</Drawer>);
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
    rerender(<Drawer open>Drawer content</Drawer>);
    expect(screen.getByText('Drawer content')).toBeInTheDocument();
  });

  it('should hide backdrop with hideBackdrop props', () => {
    render(
      <Drawer open hideBackdrop>
        Drawer content
      </Drawer>,
    );
    expect(document.querySelector('.bui-backdrop')).not.toBeInTheDocument();
  });

  it.each(['left', 'top', 'right', 'bottom'] as const)(
    'should render correctly with anchor props',
    (anchor) => {
      render(
        <Drawer open anchor={anchor}>
          Drawer
        </Drawer>,
      );
      expect(screen.getByText('Drawer')).toHaveClass(
        `${rootClass}-content-${anchor}`,
      );
    },
  );

  it('onclose should be called when closing drawer', () => {
    const onClose = jest.fn();
    render(
      <Drawer open onClose={onClose}>
        Drawer
      </Drawer>,
    );
    userEvent.click(screen.getByText('Drawer'));
    userEvent.click(document.querySelector('.bui-backdrop'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should delay the slide transition to complete using default theme values by default', async () => {
    render(<Drawer open>Drawer</Drawer>);
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(screen.getByText('Drawer')).toHaveStyle({
      transition: 'transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    });
  });

  it('after the slide transition exited the root dom can remove', async () => {
    const { rerender } = render(<Drawer open>Drawer</Drawer>);
    await act(async () => {
      await jest.runAllTimers();
    });
    rerender(<Drawer>Drawer</Drawer>);
    expect(screen.getByText('Drawer')).toBeInTheDocument();
    await act(async () => {
      await jest.runAllTimers();
    });
    await waitFor(() => {
      expect(screen.queryByText('Drawer')).not.toBeInTheDocument();
    });
  });

  it('should delay the slide transition to complete using custom theme values', async () => {
    render(
      <Drawer open transitionDuration={225}>
        Drawer
      </Drawer>,
    );
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(screen.queryByText('Drawer')).toHaveStyle({
      transition: 'transform 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    });
  });

  it('contentProps can set content element', () => {
    render(
      <Drawer open contentProps={{ className: 'test-content' }}>
        Drawer
      </Drawer>,
    );
    expect(screen.getByText('Drawer')).toHaveClass('test-content');
  });
});
