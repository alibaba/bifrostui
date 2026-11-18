import * as React from 'react';
import { vi } from 'vitest';

import { render, waitFor } from 'testing';
import Slide from '.';

it('should render content', () => {
  const { getByTestId } = render(
    <Slide
      in
      direction="down"
      timeout={{
        enter: 2000,
        exit: 1000,
      }}
    >
      <div data-testid="content">滑动效果</div>
    </Slide>,
  );
  expect(getByTestId('content')).toHaveTextContent('滑动效果');
});

describe('Slide with enter/exit disabled', () => {
  it('should skip enter animation when enter=false', async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { rerender } = render(
      <Slide
        in={false}
        direction="right"
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
    );

    // 切换为 in=true
    rerender(
      <Slide
        in
        direction="right"
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
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
      <Slide
        in
        direction="left"
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
    );

    // 切换为 in=false
    rerender(
      <Slide
        in={false}
        direction="left"
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
    );

    // 验证其他回调未被调用
    expect(onExit).not.toBeCalled();
    expect(onExiting).not.toBeCalled();
  });

  it('should immediately change visibility when both enter and exit are false', async () => {
    const onEntered = vi.fn();
    const onExited = vi.fn();

    const { rerender, getByTestId } = render(
      <Slide
        in={false}
        direction="down"
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
    );

    // 切换为 in=true
    rerender(
      <Slide
        in
        direction="down"
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">滑动效果</div>
      </Slide>,
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
