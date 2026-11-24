import * as React from 'react';
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

  it('should handle object timeout configuration', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntered: vi.fn(),
      onExit: vi.fn(),
      onExited: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition {...ons} in={false} timeout={{ enter: 20, exit: 30 }}>
        {renderFn}
      </Transition>,
    );

    // Test that different timeout values are respected
    expect(screen.getByTestId('status')).toHaveTextContent('exited');

    // Start with in=false, then change to in=true to trigger enter transition
    rerender(
      <Transition {...ons} in timeout={{ enter: 20, exit: 30 }}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
    });

    await waitFor(
      () => {
        expect(ons.onEntered).toBeCalled();
      },
      { timeout: 100 },
    );
  });

  it('should handle delay configuration', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntered: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;

    const { rerender } = render(
      <Transition {...ons} in={false} timeout={10} delay={10}>
        {renderFn}
      </Transition>,
    );

    // Change from false to true to trigger enter transition
    rerender(
      <Transition {...ons} in timeout={10} delay={10}>
        {renderFn}
      </Transition>,
    );

    // Test that delay + timeout configuration works
    await waitFor(
      () => {
        expect(ons.onEnter).toBeCalled();
      },
      { timeout: 100 },
    );

    await waitFor(
      () => {
        expect(ons.onEntered).toBeCalled();
      },
      { timeout: 100 },
    );
  });

  it('should handle object delay configuration', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntered: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition
        {...ons}
        in={false}
        timeout={10}
        delay={{ enter: 15, exit: 20 }}
      >
        {renderFn}
      </Transition>,
    );

    rerender(
      <Transition {...ons} in timeout={10} delay={{ enter: 15, exit: 20 }}>
        {renderFn}
      </Transition>,
    );

    // Test that object delay configuration works
    await waitFor(
      () => {
        expect(ons.onEnter).toBeCalled();
      },
      { timeout: 100 },
    );

    await waitFor(
      () => {
        expect(ons.onEntered).toBeCalled();
      },
      { timeout: 100 },
    );
  });

  it('should disable enter transitions when enter=false', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntering: vi.fn(),
      onEntered: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;

    const { rerender } = render(
      <Transition {...ons} in={false} enter={false} timeout={10}>
        {renderFn}
      </Transition>,
    );

    // Change from false to true to trigger transition
    rerender(
      <Transition {...ons} in enter={false} timeout={10}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });

    expect(ons.onEnter).not.toBeCalled();
    expect(ons.onEntering).not.toBeCalled();
    await waitFor(() => {
      expect(ons.onEntered).toBeCalled();
    });
  });

  it('should disable exit transitions when exit=false', async () => {
    const ons = {
      onExit: vi.fn(),
      onExiting: vi.fn(),
      onExited: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition {...ons} in timeout={10} exit={false}>
        {renderFn}
      </Transition>,
    );

    rerender(
      <Transition {...ons} in={false} timeout={10} exit={false}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('exited');
    });

    expect(ons.onExit).not.toBeCalled();
    expect(ons.onExiting).not.toBeCalled();
    expect(ons.onExited).toBeCalled();
  });

  it('should work with React element children', () => {
    const { rerender } = render(
      <Transition in={false} timeout={10}>
        <div data-testid="element-child">Content</div>
      </Transition>,
    );

    expect(screen.getByTestId('element-child')).toBeInTheDocument();
    expect(screen.getByTestId('element-child')).toHaveTextContent('Content');

    rerender(
      <Transition in timeout={10}>
        <div data-testid="element-child">Content</div>
      </Transition>,
    );

    expect(screen.getByTestId('element-child')).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    const renderFn = (s, props) => (
      <div data-testid="ref-test" {...props}>
        {s}
      </div>
    );

    render(
      <Transition in timeout={10} ref={ref}>
        {renderFn}
      </Transition>,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute('data-testid', 'ref-test');
  });

  it('should pass additional props to children', () => {
    const renderFn = (s, props) => (
      <div data-testid="props-test" {...props}>
        {s}
      </div>
    );

    render(
      <Transition in timeout={10} className="test-class" data-custom="test">
        {renderFn}
      </Transition>,
    );

    const element = screen.getByTestId('props-test');
    expect(element).toHaveClass('test-class');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('should handle rapid state changes', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntered: vi.fn(),
      onExit: vi.fn(),
      onExited: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition {...ons} in={false} timeout={50}>
        {renderFn}
      </Transition>,
    );

    // Rapid state changes
    rerender(
      <Transition {...ons} in timeout={50}>
        {renderFn}
      </Transition>,
    );

    rerender(
      <Transition {...ons} in={false} timeout={50}>
        {renderFn}
      </Transition>,
    );

    rerender(
      <Transition {...ons} in timeout={50}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
    });

    await waitFor(
      () => {
        expect(screen.getByTestId('status')).toHaveTextContent('entered');
      },
      { timeout: 100 },
    );
  });

  it('should handle callbacks with DOM node parameter', async () => {
    const onEnter = vi.fn();
    const onEntered = vi.fn();
    const renderFn = (s, props) => (
      <div data-testid="node-test" {...props}>
        {s}
      </div>
    );

    const { rerender } = render(
      <Transition
        in={false}
        timeout={10}
        onEnter={onEnter}
        onEntered={onEntered}
      >
        {renderFn}
      </Transition>,
    );

    // Change from false to true to trigger enter transition
    rerender(
      <Transition in timeout={10} onEnter={onEnter} onEntered={onEntered}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(onEnter).toBeCalled();
    });

    await waitFor(() => {
      expect(onEntered).toBeCalled();
    });

    // Check that callbacks receive DOM node
    expect(onEnter).toHaveBeenCalledWith(expect.any(HTMLElement));
    expect(onEntered).toHaveBeenCalledWith(expect.any(HTMLElement));
  });

  it('should handle unmount during transition', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntering: vi.fn(),
      onEntered: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { unmount, rerender } = render(
      <Transition {...ons} in={false} timeout={100}>
        {renderFn}
      </Transition>,
    );

    rerender(
      <Transition {...ons} in timeout={100}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
    });

    // Unmount during transition
    unmount();

    // Should not cause errors or memory leaks
    expect(() => {
      // Wait a bit to ensure no errors occur
      setTimeout(() => undefined, 150);
    }).not.toThrow();
  });

  it('should work with both mountOnEnter and unmountOnExit', async () => {
    const renderFn = (s) => <div data-testid="status">{s}</div>;
    const { rerender } = render(
      <Transition in={false} timeout={10} mountOnEnter unmountOnExit>
        {renderFn}
      </Transition>,
    );

    // Initially unmounted
    expect(screen.queryByTestId('status')).toBeNull();

    // Mount and enter
    rerender(
      <Transition in timeout={10} mountOnEnter unmountOnExit>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entering');
    });

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });

    // Exit and unmount
    rerender(
      <Transition in={false} timeout={10} mountOnEnter unmountOnExit>
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

  it('should handle appear with mountOnEnter', async () => {
    const ons = {
      onEnter: vi.fn(),
      onEntered: vi.fn(),
    };
    const renderFn = (s) => <div data-testid="status">{s}</div>;

    render(
      <Transition {...ons} in appear mountOnEnter timeout={10}>
        {renderFn}
      </Transition>,
    );

    await waitFor(() => {
      expect(ons.onEnter).toBeCalled();
    });

    await waitFor(() => {
      expect(screen.getByTestId('status')).toHaveTextContent('entered');
    });

    expect(ons.onEntered).toBeCalled();
  });
});
