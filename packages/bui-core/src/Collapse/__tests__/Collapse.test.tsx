import * as React from 'react';
import { vi } from 'vitest';
import { render, screen, waitFor } from 'testing';
import Collapse from '../Collapse';

describe('Collapse Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = undefined;
  });

  it('renders correctly with entering transition', async () => {
    const { rerender } = render(
      <Collapse
        in={false}
        appear
        timeout={1000}
        easing="cubic-bezier(0.0, 0, 0.2, 1)"
      >
        <div>Collapse</div>
      </Collapse>,
      { container },
    );

    // Rerender with `in` prop set to true to trigger entering state
    rerender(
      <Collapse in appear timeout={1000} easing="cubic-bezier(0.0, 0, 0.2, 1)">
        <div>Collapse</div>
      </Collapse>,
    );

    // Wait for the transition to be applied
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });

    const collapseElement = document.querySelector('.bui-collapse');
    expect(collapseElement).toHaveStyle(
      'transition: height 1000ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    );
  });
});

describe('Collapse', () => {
  it.each(['horizontal', 'vertical'])(
    'collapse in from different direction',
    (direction) => {
      render(
        <Collapse in direction={direction as 'horizontal' | 'vertical'}>
          <div
            className="bui-collapse-content"
            style={{ height: '100px', width: '100px' }}
          >
            Collapse
          </div>
        </Collapse>,
      );
      const size = direction === 'horizontal' ? 'width' : 'height';
      const getSize = (_size) => {
        // eslint-disable-next-line no-underscore-dangle
        return screen.getByText('Collapse').style[_size];
      };
      expect(document.querySelector('.bui-collapse')).toHaveStyle(
        `${size}: auto`,
      );
      setTimeout(() => {
        expect(document.querySelector('.bui-collapse')).toHaveStyle(
          `${size}: ${getSize(size)}`,
        );
      }, 2000);
    },
  );
  it.each(['50px', 50])('render width collapsedSize correctly', (size) => {
    render(
      <Collapse in={false} collapsedSize={size}>
        <div>Collapse</div>
      </Collapse>,
    );
    expect(document.querySelector('.bui-collapse')).toHaveStyle('height: 50px');
  });

  it('render null when children is null', () => {
    render(<Collapse />);
    expect(document.querySelector('.bui-collapse')).toBeNull();
  });
});

describe('Collapse with enter/exit disabled', () => {
  it('should skip enter animation when enter=false', async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { rerender } = render(
      <Collapse
        in={false}
        direction="vertical"
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 切换为 in=true
    rerender(
      <Collapse
        in
        direction="vertical"
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 验证 onEntered 被调用
    await waitFor(() => {
      expect(onEntered).toBeCalled();
    });

    // 验证其他回调未被调用
    expect(onEnter).not.toBeCalled();
    expect(onEntering).not.toBeCalled();
  });

  it('should skip exit animation when exit=false', async () => {
    const onExit = vi.fn();
    const onExiting = vi.fn();
    const onExited = vi.fn();

    const { rerender } = render(
      <Collapse
        in
        direction="horizontal"
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 切换为 in=false
    rerender(
      <Collapse
        in={false}
        direction="horizontal"
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 验证其他回调未被调用
    expect(onExit).not.toBeCalled();
    expect(onExiting).not.toBeCalled();
  });

  it('should immediately change visibility when both enter and exit are false', async () => {
    const onEntered = vi.fn();
    const onExited = vi.fn();

    const { rerender, getByTestId } = render(
      <Collapse
        in={false}
        direction="vertical"
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 切换为 in=true
    rerender(
      <Collapse
        in
        direction="vertical"
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">折叠效果</div>
      </Collapse>,
    );

    // 验证 onEntered 被调用
    await waitFor(() => {
      expect(onEntered).toBeCalled();
    });

    // 验证元素状态
    expect(getByTestId('content').parentElement).not.toHaveStyle({
      visibility: 'hidden',
    });
  });
});
