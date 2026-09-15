import * as React from 'react';
import { render, screen, act, waitFor } from 'testing';
import CSSTransition from '..';

// Mock DOM methods for class manipulation
const mockAddClass = vi.fn();
const mockRemoveClass = vi.fn();

// Mock the addClass and removeClass utilities before importing CSSTransition
vi.mock('@bifrostui/utils', async () => {
  const originalModule = await vi.importActual('@bifrostui/utils');
  return {
    __esModule: true,
    ...originalModule,
    addClass: (...args) => mockAddClass(...args),
    removeClass: (...args) => mockRemoveClass(...args),
  };
});

describe('CSSTransition', () => {
  beforeEach(() => {
    // Clear mock calls
    mockAddClass.mockClear();
    mockRemoveClass.mockClear();

    // Mock the DOM methods
    Object.defineProperty(global.Element.prototype, 'scrollTop', {
      value: 0,
      writable: true,
    });
  });

  it('should render children', () => {
    const { container } = render(
      <CSSTransition in timeout={0}>
        <div>Content</div>
      </CSSTransition>,
    );

    expect(container.textContent).toBe('Content');
  });

  it('should apply string classNames correctly', () => {
    render(
      <CSSTransition in timeout={0} classNames="fade">
        <div className="content">Content</div>
      </CSSTransition>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply object classNames correctly and add/remove classes at the right times', async () => {
    const classNames = {
      enter: 'slide-enter',
      enterActive: 'slide-enter-active',
      enterDone: 'slide-enter-done',
      exit: 'slide-exit',
      exitActive: 'slide-exit-active',
      exitDone: 'slide-exit-done',
    };

    // Test with in={false} initially to trigger enter transition
    const { rerender } = render(
      <CSSTransition in={false} timeout={0} classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // Reset mocks to capture only the transition we're testing
    mockAddClass.mockClear();
    mockRemoveClass.mockClear();

    // Re-render with in=true to trigger enter transition
    rerender(
      <CSSTransition in timeout={0} classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // For enter transition, should add enter class then enterActive class
    expect(mockAddClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-enter',
    );

    await waitFor(() => {
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-enter-active',
      );
    });

    // Reset mocks for next phase
    mockAddClass.mockClear();
    mockRemoveClass.mockClear();

    // Rerender with in=false to trigger exit
    rerender(
      <CSSTransition in={false} timeout={0} classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // For exit transition, should add exit class then exitActive class
    expect(mockAddClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-exit',
    );

    await waitFor(() => {
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-exit-active',
      );
    });

    await waitFor(() => {
      // On exit completion, should remove exit classes
      expect(mockRemoveClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-exit-active',
      );
    });
  });

  it('should handle appear transition with correct class names', async () => {
    const classNames = {
      enter: 'slide-enter',
      enterActive: 'slide-enter-active',
      enterDone: 'slide-enter-done',
      exit: 'slide-exit',
      exitActive: 'slide-exit-active',
      exitDone: 'slide-exit-done',
    };

    render(
      <CSSTransition in timeout={0} appear classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    await waitFor(() => {
      // For appear transitions, should add enter class then enterActive class
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-enter',
      );
    });
    expect(mockAddClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-enter-active',
    );
  });

  it('should call lifecycle callbacks with correct timing', async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();
    const onExit = vi.fn();
    const onExiting = vi.fn();
    const onExited = vi.fn();

    const classNames = {
      enter: 'slide-enter',
      enterActive: 'slide-enter-active',
      enterDone: 'slide-enter-done',
      exit: 'slide-exit',
      exitActive: 'slide-exit-active',
      exitDone: 'slide-exit-done',
    };

    // Start with in={false} to trigger enter transition
    const { rerender } = render(
      <CSSTransition
        in={false}
        timeout={0}
        classNames={classNames}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div>Content</div>
      </CSSTransition>,
    );

    // Reset mocks to capture only the transition we're testing
    onEnter.mockClear();
    onEntering.mockClear();
    onEntered.mockClear();

    // Re-render with in=true to trigger enter transition
    rerender(
      <CSSTransition
        in
        timeout={0}
        classNames={classNames}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div>Content</div>
      </CSSTransition>,
    );

    // Wait for all state updates to complete
    act(() => {
      // Flush any pending state updates
    });

    // Check that enter callbacks were called
    expect(onEnter).toHaveBeenCalled();
    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    await waitFor(() => {
      // Check that entered callback was called
      expect(onEntered).toHaveBeenCalled();
    });

    // Reset mocks for next phase
    onEnter.mockClear();
    onEntering.mockClear();
    onEntered.mockClear();

    // Re-render with in=false to trigger exit transition
    rerender(
      <CSSTransition
        in={false}
        timeout={0}
        classNames={classNames}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div>Content</div>
      </CSSTransition>,
    );

    // Check that exit callbacks were called
    expect(onExit).toHaveBeenCalled();
    await waitFor(() => {
      expect(onExiting).toHaveBeenCalled();
    });

    await waitFor(() => {
      // Check that exited callback was called
      expect(onExited).toHaveBeenCalled();
    });
  });

  it('should not call callbacks when enter is false', () => {
    const onEnter = vi.fn();

    render(
      <CSSTransition in enter={false} timeout={0} onEnter={onEnter}>
        <div>Content</div>
      </CSSTransition>,
    );

    expect(onEnter).not.toHaveBeenCalled();
  });

  it('should not call callbacks when exit is false', () => {
    const onExit = vi.fn();
    render(
      <CSSTransition in timeout={0} onExit={onExit}>
        <div>Content</div>
      </CSSTransition>,
    );

    render(
      <CSSTransition in={false} exit={false} timeout={0} onExit={onExit}>
        <div>Content</div>
      </CSSTransition>,
    );

    expect(onExit).not.toHaveBeenCalled();
  });

  it('should handle unmountOnExit', () => {
    const { rerender } = render(
      <CSSTransition in timeout={0} unmountOnExit>
        <div>Content</div>
      </CSSTransition>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();

    rerender(
      <CSSTransition in={false} timeout={0} unmountOnExit>
        <div>Content</div>
      </CSSTransition>,
    );
  });

  it('should handle mountOnEnter', () => {
    render(
      <CSSTransition in={false} timeout={0} mountOnEnter>
        <div>Content</div>
      </CSSTransition>,
    );
  });

  it('should add and remove classes in correct sequence for enter transition', async () => {
    const classNames = {
      enter: 'slide-enter',
      enterActive: 'slide-enter-active',
      enterDone: 'slide-enter-done',
      exit: 'slide-exit',
      exitActive: 'slide-exit-active',
      exitDone: 'slide-exit-done',
    };

    const { rerender } = render(
      <CSSTransition in={false} timeout={0} classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // Reset mocks to capture only the transition we're testing
    mockAddClass.mockClear();
    mockRemoveClass.mockClear();

    // Re-render with in=true to trigger enter transition
    rerender(
      <CSSTransition in timeout={0} classNames={classNames}>
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // Check class sequence for enter transition
    // 1. Add enter class
    expect(mockAddClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-enter',
    );

    await waitFor(() => {
      // 2. Add enterActive class
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-enter-active',
      );
    });

    await waitFor(() => {
      // 3. Add enterDone class and remove enterActive
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-enter-done',
      );
    });

    expect(mockRemoveClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-enter-active',
    );
  });

  it('should add and remove classes in correct sequence for exit transition', async () => {
    const classNames = {
      enter: 'slide-enter',
      enterActive: 'slide-enter-active',
      enterDone: 'slide-enter-done',
      exit: 'slide-exit',
      exitActive: 'slide-exit-active',
      exitDone: 'slide-exit-done',
    };

    // First render with in=true to establish enter state
    const { rerender } = render(
      <CSSTransition
        in
        timeout={0}
        classNames={classNames}
        unmountOnExit={false}
      >
        <div className="content">Content</div>
      </CSSTransition>,
    );

    // Reset mocks to capture only the transition we're testing
    mockAddClass.mockClear();
    mockRemoveClass.mockClear();

    // Re-render with in=false to trigger exit transition
    rerender(
      <CSSTransition
        in={false}
        timeout={0}
        classNames={classNames}
        unmountOnExit={false}
      >
        <div className="content">Content</div>
      </CSSTransition>,
    );

    expect(mockAddClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-exit',
    );

    await waitFor(() => {
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-exit-active',
      );
    });

    await waitFor(() => {
      // Add exitDone class and remove exitActive
      expect(mockAddClass).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'slide-exit-done',
      );
    });

    expect(mockRemoveClass).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      'slide-exit-active',
    );
  });
});
