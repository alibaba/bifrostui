import React from 'react';
import { render, screen, waitFor } from 'testing';
import { vi } from 'vitest';
import { Transition } from '../Transition';

describe('Transition', () => {
  it('will change status and execute callbacks by in prop', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntering: vi.fn(),
      onEntered: vi.fn(),
      onExit: vi.fn(),
      onExiting: vi.fn(),
      onExited: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition {...ons} in={false} timeout={10}>
        {renderFn}
      </Transition>,
    );
    expect(screen.getByTestId('status')).toHaveTextContent('exited');
    expect(ons.onEnter).not.toBeCalled();
    rerender(
      <Transition {...ons} in timeout={10}>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
      expect(ons.onEntering).not.toBeCalled();
    });

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entering');
    });
    await waitFor(() => {
      expect(ons.onEntering).toBeCalled();
      expect(ons.onEntered).not.toBeCalled();
    });

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });
    await waitFor(() => {
      expect(ons.onEntered).toBeCalled();
      expect(ons.onExit).not.toBeCalled();
    });

    rerender(
      <Transition {...ons} in={false} timeout={10}>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(ons.onExit).toBeCalled();
      expect(ons.onExiting).not.toBeCalled();
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('exiting');
    });
    await waitFor(() => {
      expect(ons.onExiting).toBeCalled();
      expect(ons.onExited).not.toBeCalled();
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('exited');
    });
    await waitFor(() => {
      expect(ons.onExited).toBeCalled();
    });
  });

  it('will appear', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntering: vi.fn(),
      onEntered: vi.fn(),
      onExit: vi.fn(),
      onExiting: vi.fn(),
      onExited: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    render(
      <Transition {...ons} in appear timeout={10}>
        {renderFn}
      </Transition>,
    );
    expect(screen.getByTestId('status')).toHaveTextContent('exited');
    expect(ons.onEnter).not.toBeCalled();
    expect(ons.onEntering).not.toBeCalled();
    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entering');
    });
    await waitFor(() => {
      expect(ons.onEntering).toBeCalled();
      expect(ons.onEntered).not.toBeCalled();
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });
    await waitFor(() => {
      expect(ons.onEntered).toBeCalled();
    });
  });

  it('will unmountOnExit', async () => {
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition in={false} timeout={10} unmountOnExit>
        {renderFn}
      </Transition>,
    );
    expect(screen.queryByTestId('status')).toBeNull();
    rerender(
      <Transition in timeout={10} unmountOnExit>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entering');
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });
    rerender(
      <Transition in={false} timeout={10} unmountOnExit>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('exiting');
    });
    await waitFor(() => {
      expect(screen.queryByTestId('status')).toBeNull();
    });
  });
  it('will mountOnEnter', async () => {
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition in={false} timeout={10} mountOnEnter>
        {renderFn}
      </Transition>,
    );
    expect(screen.queryByTestId('status')).toBeNull();
    rerender(
      <Transition in timeout={10} mountOnEnter>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entering');
    });
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });
    rerender(
      <Transition in={false} timeout={10} mountOnEnter>
        {renderFn}
      </Transition>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('exiting');
    });
    await waitFor(() => {
      expect(screen.queryByTestId('status')).toHaveTextContent('exited');
    });
  });
});
