import * as React from 'react';
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
      'opacity 1500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
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
      'opacity 1500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    );
    expect(queryByTestId('fade-test').style.opacity).toEqual('0');
    expect(queryByTestId('fade-test').style.visibility).toEqual('hidden');
  });

  // 新增测试用例：appear && in = true 时首次渲染需要执行动画
  it('should execute animation on first render when appear=true and in=true', async () => {
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByTestId } = render(
      <Fade
        in
        appear
        timeout={1000}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test with appear</div>
      </Fade>,
    );

    // 验证首次渲染时执行了进入动画
    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    const element = getByTestId('fade-test');
    // 验证动画过程中有正确的 transition 属性
    expect(element.style.transition).toMatch(
      /opacity.*1000ms.*cubic-bezier\(0\.0, 0, 0\.2, 1\)/,
    );
    expect(element.style.opacity).toBe('1');
    expect(element.style.visibility).toBe('visible');

    // 等待动画完成
    await waitFor(
      () => {
        expect(onEntered).toHaveBeenCalled();
      },
      { timeout: 1500 },
    );

    // 验证动画完成后 transition 为 none
    expect(element.style.transition).toBe('none');
  });

  // 新增测试用例：in=true appear=false 时首次渲染不执行动画
  it('should not execute animation on first render when in=true and appear=false', () => {
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByTestId } = render(
      <Fade
        in
        appear={false}
        timeout={1000}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test without appear</div>
      </Fade>,
    );

    const element = getByTestId('fade-test');

    // 验证首次渲染时没有执行动画，直接显示最终状态
    expect(element.style.opacity).toBe('1');
    expect(element.style.visibility).toBe('visible');
    expect(element.style.transition).toBe('none');

    // 验证动画回调函数没有被调用
    expect(onEntering).not.toHaveBeenCalled();
    expect(onEntered).not.toHaveBeenCalled();
  });

  // 新增测试用例：in=true appear=true enter=false 时首次渲染执行动画，后续渲染直接到结束态
  it('should execute animation on first render but skip animation on subsequent renders when in=true, appear=true, enter=false', async () => {
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    // 首次渲染：in=true, appear=true, enter=false
    const { getByTestId, rerender } = render(
      <Fade
        in
        appear
        enter={false}
        timeout={1000}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test with appear but no enter</div>
      </Fade>,
    );

    // 验证首次渲染时执行了进入动画（因为 appear=true）
    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    const element = getByTestId('fade-test');
    expect(element.style.transition).toMatch(
      /opacity.*1000ms.*cubic-bezier\(0\.0, 0, 0\.2, 1\)/,
    );

    // 等待首次动画完成
    await waitFor(
      () => {
        expect(onEntered).toHaveBeenCalled();
      },
      { timeout: 1500 },
    );

    // 重置 mock 函数
    onEntering.mockClear();
    onEntered.mockClear();

    // 模拟后续渲染：切换到 in=false 再切换回 in=true
    rerender(
      <Fade
        in={false}
        appear
        enter={false}
        timeout={1000}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test with appear but no enter</div>
      </Fade>,
    );

    // 等待退出动画完成
    await waitFor(() => {
      const el = getByTestId('fade-test');
      expect(el.style.opacity).toBe('0');
    });

    // 再次切换到 in=true，这时应该直接到结束态（因为 enter=false）
    rerender(
      <Fade
        in
        appear
        enter={false}
        timeout={1000}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test with appear but no enter</div>
      </Fade>,
    );

    // 验证后续渲染时没有执行进入动画，直接到结束态
    const finalElement = getByTestId('fade-test');
    expect(finalElement.style.opacity).toBe('1');
    expect(finalElement.style.visibility).toBe('visible');

    // 验证进入动画回调函数没有被调用（因为 enter=false）
    expect(onEntering).not.toHaveBeenCalled();

    // 但 onEntered 应该被调用，因为直接进入了 entered 状态
    await waitFor(() => {
      expect(onEntered).toHaveBeenCalled();
    });
  });

  it('should apply transition during entering state and remove it when entered', async () => {
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByTestId, rerender } = render(
      <Fade
        in={false}
        timeout={1500}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 初始状态：in=false，应该是 exited 状态
    expect(getByTestId('fade-test').style.opacity).toBe('0');
    expect(getByTestId('fade-test').style.visibility).toBe('hidden');

    // 切换到 in=true，触发进入动画
    rerender(
      <Fade in timeout={1500} onEntering={onEntering} onEntered={onEntered}>
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 验证 entering 状态：应该有 transition 属性，使用正确的 easeOut cubic-bezier 值
    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    const element = getByTestId('fade-test');
    expect(element.style.transition).toMatch(
      /opacity.*1500ms.*cubic-bezier\(0\.0, 0, 0\.2, 1\)/,
    );
    expect(element.style.opacity).toBe('1');
    expect(element.style.visibility).toBe('visible');

    // 等待动画完成，验证 entered 状态：transition 应该变为 none
    await waitFor(
      () => {
        expect(onEntered).toHaveBeenCalled();
      },
      { timeout: 2000 },
    );

    expect(element.style.transition).toBe('none');
    expect(element.style.opacity).toBe('1');
    expect(element.style.visibility).toBe('visible');
  });

  it('should handle transition states correctly with custom timeout', async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByTestId, rerender } = render(
      <Fade
        in={false}
        timeout={800}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 切换到 in=true
    rerender(
      <Fade
        in
        timeout={800}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      >
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 验证回调函数调用顺序
    await waitFor(() => {
      expect(onEnter).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(onEntering).toHaveBeenCalled();
    });

    // 验证 entering 状态的 transition 属性包含正确的 timeout 和 easeOut cubic-bezier 值
    const element = getByTestId('fade-test');
    expect(element.style.transition).toMatch(
      /opacity.*800ms.*cubic-bezier\(0\.0, 0, 0\.2, 1\)/,
    );

    // 等待动画完成
    await waitFor(
      () => {
        expect(onEntered).toHaveBeenCalled();
      },
      { timeout: 1200 },
    );

    // 验证动画完成后 transition 为 none
    expect(element.style.transition).toBe('none');
  });

  it('should handle exit transition correctly', async () => {
    const onExit = vi.fn();
    const onExiting = vi.fn();
    const onExited = vi.fn();

    const { getByTestId, rerender } = render(
      <Fade
        in
        appear={false}
        timeout={1000}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 初始状态：in=true 且 appear=false，应该是 entered 状态
    expect(getByTestId('fade-test').style.opacity).toBe('1');
    expect(getByTestId('fade-test').style.transition).toBe('none');

    // 切换到 in=false，触发退出动画
    rerender(
      <Fade
        in={false}
        appear={false}
        timeout={1000}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <div data-testid="fade-test">fade test</div>
      </Fade>,
    );

    // 验证退出动画过程
    await waitFor(() => {
      expect(onExit).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(onExiting).toHaveBeenCalled();
    });

    // 验证 exiting 状态的 transition 属性，使用正确的 sharp cubic-bezier 值
    const element = getByTestId('fade-test');
    expect(element.style.transition).toMatch(
      /opacity.*1000ms.*cubic-bezier\(0\.4, 0, 0\.6, 1\)/,
    );
    expect(element.style.opacity).toBe('0');

    // 等待退出动画完成
    await waitFor(
      () => {
        expect(onExited).toHaveBeenCalled();
      },
      { timeout: 1500 },
    );

    // 验证退出完成后的状态
    expect(element.style.transition).toBe('none');
    expect(element.style.opacity).toBe('0');
    expect(element.style.visibility).toBe('hidden');
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
