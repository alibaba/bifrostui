import React from 'react';
import { vi } from 'vitest';
import { render, waitFor } from 'testing';
import Fade from '../Fade';

describe('Fade', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Fade in appear={false} timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('1');
  });
  it('can hide when not in', () => {
    const { queryByTestId } = render(
      <Fade in={false} timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.transition).not.toMatch(
      'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('0');
    expect(queryByTestId('fade-test').style.visibility).toEqual('hidden');
  });
  it('can fade instantly if appear', () => {
    const { queryByTestId } = render(
      <Fade in={false} appear timeout={1500}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );
    expect(queryByTestId('fade-test').style.transition).not.toMatch(
      'opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('0');
    expect(queryByTestId('fade-test').style.visibility).toEqual('hidden');
  });
});

describe('Fade with enter/exit disabled', () => {
  it('should skip enter animation when enter=false', async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { rerender } = render(
      <Fade
        in={false}
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
    );

    // 切换为 in=true
    rerender(
      <Fade
        in
        enter={false}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
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
      <Fade
        in
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
    );

    // 切换为 in=false
    rerender(
      <Fade
        in={false}
        exit={false}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
    );

    // 验证其他回调未被调用
    expect(onExit).not.toBeCalled();
    expect(onExiting).not.toBeCalled();
  });

  it('should immediately change visibility when both enter and exit are false', async () => {
    const onEntered = vi.fn();
    const onExited = vi.fn();

    const { rerender, getByTestId } = render(
      <Fade
        in={false}
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
    );

    // 切换为 in=true
    rerender(
      <Fade
        in
        enter={false}
        exit={false}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div data-testid="content">渐隐效果</div>
      </Fade>,
    );

    // 验证 onEntered 被调用
    await waitFor(() => {
      expect(onEntered).toBeCalled();
    });

    // 验证元素状态
    expect(getByTestId('content').style.opacity).toBe('1');
    expect(getByTestId('content').style.visibility).not.toBe('hidden');
  });
});
