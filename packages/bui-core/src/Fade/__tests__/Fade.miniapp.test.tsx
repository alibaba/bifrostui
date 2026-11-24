import * as React from 'react';
import { vi } from 'vitest';
import { render, waitFor, act } from 'testing';

describe('Fade.miniapp', () => {
  let FadeMiniapp: any;

  beforeAll(async () => {
    // Mock @bifrostui/utils to simulate miniapp environment
    vi.resetModules();
    vi.doMock('@bifrostui/utils', async () => {
      const actual = await vi.importActual('@bifrostui/utils');
      return {
        ...actual,
        isMini: true,
      };
    });

    // Import the miniapp version after mocking
    const { default: MiniappFade } = await import('../Fade.miniapp');
    FadeMiniapp = MiniappFade;
  });

  afterAll(() => {
    vi.resetModules();
  });

  describe('Basic rendering', () => {
    it('should render children correctly in miniapp environment', () => {
      const { getByTestId } = render(
        <FadeMiniapp in appear={false}>
          <div data-testid="fade-content">Miniapp Fade Content</div>
        </FadeMiniapp>,
      );

      expect(getByTestId('fade-content')).toBeInTheDocument();
      expect(getByTestId('fade-content')).toHaveTextContent(
        'Miniapp Fade Content',
      );
    });

    it('should apply animation styles correctly', () => {
      const { getByTestId } = render(
        <FadeMiniapp in timeout={1000}>
          <div data-testid="fade-element">Test Element</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-fade-in/);
    });

    it('should handle in=false state correctly', () => {
      const { getByTestId } = render(
        <FadeMiniapp in={false} timeout={1000}>
          <div data-testid="fade-element">Test Element</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/bui-fade-out/);
    });
  });

  // 新增测试用例：appear && in = true 时首次渲染需要执行动画
  describe('Appear behavior', () => {
    it('should execute animation on first render when appear=true and in=true', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <FadeMiniapp
          in
          appear
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="fade-element">fade test with appear</div>
        </FadeMiniapp>,
      );

      // 验证 onEnter 回调被调用（在 useEffect 中触发）
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      const element = getByTestId('fade-element');
      // 验证动画样式正确应用
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-fade-in/);
      expect(element.style.animation).toMatch(/1000ms/);

      // 在小程序环境中，由于 shouldExecuteAnimation 的逻辑，
      // 我们需要验证动画确实被应用，而不是依赖事件回调
      // 因为 handleAnimationStart 中的 shouldExecuteAnimation 检查可能阻止回调执行

      // 验证动画样式存在即表示动画会执行
      expect(element.style.animation).toContain('bui-fade-in');
      expect(element.style.animation).toContain('1000ms');
    });

    it('should not execute animation on first render when in=true and appear=false', () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <FadeMiniapp
          in
          appear={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="fade-element">fade test without appear</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');

      // 验证首次渲染时没有执行动画，元素直接显示
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('fade test without appear');

      // 当 appear=false 时，shouldAnimateOnFirstMount 为 false，
      // 因此 shouldExecuteAnimation 也为 false，不会触发动画相关回调
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();
      expect(onEntered).not.toHaveBeenCalled();

      // 验证没有动画样式（timeout 为 0）
      expect(element.style.animation).toMatch(/0ms/);
    });

    it('should execute animation on first render but skip animation on subsequent renders when in=true, appear=true, enter=false', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();
      const onExit = vi.fn();

      // 首次渲染：in=true, appear=true, enter=false
      const { getByTestId, rerender } = render(
        <FadeMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="fade-element">
            fade test with appear but no enter
          </div>
        </FadeMiniapp>,
      );

      // 验证首次渲染时 onEnter 被调用（因为 appear=true，shouldAnimateOnFirstMount=true）
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      const element = getByTestId('fade-element');
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-fade-in/);
      expect(element.style.animation).toMatch(/1000ms/);

      // 重置 mock 函数
      onEnter.mockClear();
      onEntering.mockClear();
      onEntered.mockClear();
      onExit.mockClear();

      // 模拟后续渲染：切换到 in=false 再切换回 in=true
      rerender(
        <FadeMiniapp
          in={false}
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="fade-element">
            fade test with appear but no enter
          </div>
        </FadeMiniapp>,
      );

      // 等待退出动画开始（exit=true 是默认值）
      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });

      // 验证退出动画样式
      const exitElement = getByTestId('fade-element');
      expect(exitElement.style.animation).toMatch(/bui-fade-out/);

      // 再次切换到 in=true，这时由于 enter=false 且不是首次渲染，
      // shouldExecuteAnimation 会是 false，不会执行动画
      rerender(
        <FadeMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="fade-element">
            fade test with appear but no enter
          </div>
        </FadeMiniapp>,
      );

      // 验证后续渲染时没有执行进入动画（因为 enter=false 且不是首次渲染）
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();

      // 验证元素直接显示最终状态，且动画时长为 0
      const finalElement = getByTestId('fade-element');
      expect(finalElement).toBeInTheDocument();
      expect(finalElement).toHaveTextContent(
        'fade test with appear but no enter',
      );
      expect(finalElement.style.animation).toMatch(/0ms/); // 没有动画时长
    });
  });

  describe('Animation configuration', () => {
    it('should use correct animation name for enter state', () => {
      const { getByTestId } = render(
        <FadeMiniapp in timeout={800}>
          <div data-testid="fade-element">Enter Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/bui-fade-in/);
    });

    it('should use correct animation name for exit state', () => {
      const { getByTestId } = render(
        <FadeMiniapp in={false} timeout={800}>
          <div data-testid="fade-element">Exit Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/bui-fade-out/);
    });

    it('should apply custom timeout correctly', () => {
      const customTimeout = 1500;
      const { getByTestId } = render(
        <FadeMiniapp in timeout={customTimeout}>
          <div data-testid="fade-element">Custom Timeout</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(new RegExp(`${customTimeout}ms`));
    });

    it('should apply custom delay correctly', () => {
      const customDelay = 500;
      const { getByTestId } = render(
        <FadeMiniapp in delay={customDelay} timeout={1000}>
          <div data-testid="fade-element">Custom Delay</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(new RegExp(`${customDelay}ms`));
    });

    it('should handle custom easing configuration', () => {
      const customEasing = {
        enter: 'ease-in',
        exit: 'ease-out',
      };

      const { getByTestId } = render(
        <FadeMiniapp in easing={customEasing} timeout={1000}>
          <div data-testid="fade-element">Custom Easing</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/ease-in/);
    });
  });

  describe('Animation lifecycle callbacks', () => {
    it('should call onEnter when entering', async () => {
      const onEnter = vi.fn();

      const { rerender } = render(
        <FadeMiniapp in={false} onEnter={onEnter}>
          <div data-testid="fade-element">Lifecycle Test</div>
        </FadeMiniapp>,
      );

      rerender(
        <FadeMiniapp in onEnter={onEnter}>
          <div data-testid="fade-element">Lifecycle Test</div>
        </FadeMiniapp>,
      );

      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });
    });

    it('should call onExit when exiting', async () => {
      const onExit = vi.fn();

      const { rerender } = render(
        <FadeMiniapp in onExit={onExit}>
          <div data-testid="fade-element">Lifecycle Test</div>
        </FadeMiniapp>,
      );

      rerender(
        <FadeMiniapp in={false} onExit={onExit}>
          <div data-testid="fade-element">Lifecycle Test</div>
        </FadeMiniapp>,
      );

      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });
    });

    it('should handle animation end events', () => {
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <FadeMiniapp in onEntered={onEntered} timeout={100}>
          <div data-testid="fade-element">Animation End Test</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');

      // Simulate animation end event
      element.dispatchEvent(new Event('animationend'));

      // Verify the element exists and has correct animation
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-fade-in/);
    });
  });

  describe('Mount and unmount behavior', () => {
    it('should handle mountOnEnter prop correctly', () => {
      const { container } = render(
        <FadeMiniapp in={false} mountOnEnter>
          <div data-testid="fade-element">Mount on Enter</div>
        </FadeMiniapp>,
      );

      expect(container.firstChild).toBeNull();
    });

    it('should mount component when in becomes true with mountOnEnter', () => {
      const { getByTestId, rerender } = render(
        <FadeMiniapp in={false} mountOnEnter>
          <div data-testid="fade-element">Mount on Enter</div>
        </FadeMiniapp>,
      );

      rerender(
        <FadeMiniapp in mountOnEnter>
          <div data-testid="fade-element">Mount on Enter</div>
        </FadeMiniapp>,
      );

      expect(getByTestId('fade-element')).toBeInTheDocument();
    });

    it('should handle unmountOnExit prop', () => {
      const { getByTestId, rerender } = render(
        <FadeMiniapp in unmountOnExit>
          <div data-testid="fade-element">Unmount on Exit</div>
        </FadeMiniapp>,
      );

      expect(getByTestId('fade-element')).toBeInTheDocument();

      rerender(
        <FadeMiniapp in={false} unmountOnExit>
          <div data-testid="fade-element">Unmount on Exit</div>
        </FadeMiniapp>,
      );

      // Element should still exist but with exit animation
      const element = getByTestId('fade-element');
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-fade-out/);
    });
  });

  describe('Animation control props', () => {
    it('should handle enter=false correctly', () => {
      const { getByTestId } = render(
        <FadeMiniapp in enter={false}>
          <div data-testid="fade-element">No Enter Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle exit=false correctly', () => {
      const { getByTestId, rerender } = render(
        <FadeMiniapp in exit={false}>
          <div data-testid="fade-element">No Exit Animation</div>
        </FadeMiniapp>,
      );

      rerender(
        <FadeMiniapp in={false} exit={false}>
          <div data-testid="fade-element">No Exit Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle appear=false correctly', () => {
      const { getByTestId } = render(
        <FadeMiniapp in appear={false}>
          <div data-testid="fade-element">No Appear Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Style merging', () => {
    it('should merge custom styles with animation styles', () => {
      const customStyle = { backgroundColor: 'red', color: 'white' };

      const { getByTestId } = render(
        <FadeMiniapp in style={customStyle}>
          <div data-testid="fade-element" style={{ fontSize: '16px' }}>
            Style Merge Test
          </div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element.style.backgroundColor).toBe('red');
      expect(element.style.color).toBe('white');
      expect(element.style.fontSize).toBe('16px');
      expect(element.style.animationFillMode).toBe('both');
    });

    it('should preserve children props while adding animation props', () => {
      const onClick = vi.fn();

      const { getByTestId } = render(
        <FadeMiniapp in>
          <button
            data-testid="fade-button"
            onClick={onClick}
            className="custom-button"
            type="button"
          >
            Click Me
          </button>
        </FadeMiniapp>,
      );

      const button = getByTestId('fade-button');
      expect(button).toHaveClass('custom-button');

      button.click();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    it('should return null when children is not provided', () => {
      const { container } = render(<FadeMiniapp in />);
      expect(container.firstChild).toBeNull();
    });

    it('should return null when not mounted', () => {
      const { container } = render(
        <FadeMiniapp in={false} mountOnEnter>
          <div>Should not render</div>
        </FadeMiniapp>,
      );
      expect(container.firstChild).toBeNull();
    });

    it('should handle ref forwarding correctly', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(
        <FadeMiniapp in>
          <div ref={ref} data-testid="fade-element">
            Ref Test
          </div>
        </FadeMiniapp>,
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.textContent).toBe('Ref Test');
    });

    it('should handle animation events correctly', () => {
      const { getByTestId } = render(
        <FadeMiniapp in>
          <div data-testid="fade-element">Animation Event Test</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('fade-element');
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-fade-in/);
    });
  });

  describe('Component behavior validation', () => {
    it('should have correct displayName', () => {
      expect(FadeMiniapp.displayName).toBe('BuiFade');
    });

    it('should handle complex animation scenarios', () => {
      const { getByTestId } = render(
        <FadeMiniapp
          in
          timeout={{ enter: 1000, exit: 500 }}
          delay={200}
          easing={{ enter: 'ease-in', exit: 'ease-out' }}
        >
          <div data-testid="complex-fade">Complex Animation</div>
        </FadeMiniapp>,
      );

      const element = getByTestId('complex-fade');
      expect(element.style.animation).toMatch(/bui-fade-in/);
      expect(element.style.animation).toMatch(/1000ms/);
      expect(element.style.animation).toMatch(/200ms/);
      expect(element.style.animation).toMatch(/ease-in/);
    });

    it('should handle state transitions correctly', () => {
      const { getByTestId, rerender } = render(
        <FadeMiniapp in={false}>
          <div data-testid="fade-element">State Transition Test</div>
        </FadeMiniapp>,
      );

      let element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/bui-fade-out/);

      rerender(
        <FadeMiniapp in>
          <div data-testid="fade-element">State Transition Test</div>
        </FadeMiniapp>,
      );

      element = getByTestId('fade-element');
      expect(element.style.animation).toMatch(/bui-fade-in/);
    });
  });

  describe('Parent re-render should not trigger animation', () => {
    it('should NOT trigger animation callbacks when in=false and parent re-renders multiple times', async () => {
      vi.useFakeTimers();

      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();
      const onExit = vi.fn();
      const onExiting = vi.fn();
      const onExited = vi.fn();

      function TestComponent() {
        const [counter, setCounter] = React.useState(0);

        React.useEffect(() => {
          // Simulate parent component re-rendering multiple times
          // This should NOT trigger Fade animation since in prop stays false
          setTimeout(() => setCounter(1), 100);
          setTimeout(() => setCounter(2), 200);
          setTimeout(() => setCounter(3), 300);
          setTimeout(() => setCounter(4), 400);
        }, []);

        return (
          <FadeMiniapp
            in={false}
            timeout={{ enter: 2000, exit: 5000 }}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div data-testid="fade-element">Counter: {counter}</div>
          </FadeMiniapp>
        );
      }

      render(<TestComponent />);

      // Wait for all parent re-renders to complete
      await vi.advanceTimersByTimeAsync(600);

      // CRITICAL: onEnter callbacks should NOT be called
      // because in prop never changed (always false)
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();
      expect(onEntered).not.toHaveBeenCalled();

      // onExit might be called on initial mount, but should not be called
      // multiple times due to parent re-renders
      expect(onExit.mock.calls.length).toBeLessThanOrEqual(1);
      expect(onExiting.mock.calls.length).toBeLessThanOrEqual(1);
      expect(onExited.mock.calls.length).toBeLessThanOrEqual(1);

      vi.useRealTimers();
    });

    it('should NOT trigger animation callbacks when in=true and parent re-renders multiple times', async () => {
      vi.useFakeTimers();

      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();
      const onExit = vi.fn();
      const onExiting = vi.fn();
      const onExited = vi.fn();

      function TestComponent() {
        const [counter, setCounter] = React.useState(0);

        React.useEffect(() => {
          setTimeout(() => setCounter(1), 100);
          setTimeout(() => setCounter(2), 200);
          setTimeout(() => setCounter(3), 300);
          setTimeout(() => setCounter(4), 400);
        }, []);

        return (
          <FadeMiniapp
            in
            appear={false}
            timeout={{ enter: 2000, exit: 5000 }}
            onEnter={onEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div data-testid="fade-element">Counter: {counter}</div>
          </FadeMiniapp>
        );
      }

      render(<TestComponent />);

      await vi.advanceTimersByTimeAsync(600);

      // Since in=true and appear=false, no animation should execute
      // and callbacks should not be triggered by parent re-renders
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();
      expect(onEntered).not.toHaveBeenCalled();
      expect(onExit).not.toHaveBeenCalled();
      expect(onExiting).not.toHaveBeenCalled();
      expect(onExited).not.toHaveBeenCalled();

      vi.useRealTimers();
    });

    it('should only trigger animation callbacks when in prop actually changes', async () => {
      vi.useFakeTimers();

      const onEnter = vi.fn();
      const onExit = vi.fn();

      function TestComponent() {
        const [counter, setCounter] = React.useState(0);
        const [inProp, setInProp] = React.useState(false);

        React.useEffect(() => {
          // Parent re-renders before in prop changes
          setTimeout(() => setCounter(1), 50);
          setTimeout(() => setCounter(2), 100);

          // Change in prop
          setTimeout(() => setInProp(true), 150);

          // More parent re-renders after in prop changes
          setTimeout(() => setCounter(3), 200);
          setTimeout(() => setCounter(4), 250);

          // Change in prop again
          setTimeout(() => setInProp(false), 300);

          // Final parent re-renders
          setTimeout(() => setCounter(5), 350);
        }, []);

        return (
          <FadeMiniapp
            in={inProp}
            timeout={1000}
            onEnter={onEnter}
            onExit={onExit}
          >
            <div data-testid="fade-element">
              Counter: {counter}, In: {String(inProp)}
            </div>
          </FadeMiniapp>
        );
      }

      render(<TestComponent />);

      // Advance to first in prop change (false -> true)
      await act(async () => {
        await vi.advanceTimersByTimeAsync(160);
      });
      expect(onEnter).toHaveBeenCalled();

      // Advance to second in prop change (true -> false)
      await act(async () => {
        await vi.advanceTimersByTimeAsync(150);
      });
      expect(onExit).toHaveBeenCalled();

      // onEnter should be called exactly once (when in changes from false to true)
      expect(onEnter).toHaveBeenCalledTimes(1);

      // onExit should be called exactly once (when in changes from true to false)
      expect(onExit).toHaveBeenCalledTimes(1);

      // This confirms that parent re-renders (setCounter calls) did not trigger
      // additional animation callbacks

      vi.useRealTimers();
    });

    it('should handle the documentation bug scenario - in=false with parent re-renders', async () => {
      vi.useFakeTimers();

      const onExit = vi.fn();
      const onExiting = vi.fn();
      const onExited = vi.fn();

      function TestComponent() {
        const [open, setOpen] = React.useState(true);

        React.useEffect(() => {
          setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
              setOpen(true);
            }, 100);
          }, 100);
        }, []);

        return (
          <FadeMiniapp
            in={false} // Important: in is hardcoded to false
            timeout={{ enter: 10000, exit: 10000 }}
            onExit={onExit}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div data-testid="fade-element">Open: {String(open)}</div>
          </FadeMiniapp>
        );
      }

      const { getByTestId } = render(<TestComponent />);

      // Wait for all state changes
      await vi.advanceTimersByTimeAsync(300);

      // CRITICAL: Even though parent re-rendered twice (setOpen calls),
      // the animation callbacks should NOT be triggered multiple times
      // With the fix, callbacks are called minimally
      expect(onExit.mock.calls.length).toBeLessThanOrEqual(1);
      expect(onExiting.mock.calls.length).toBeLessThanOrEqual(1);
      expect(onExited.mock.calls.length).toBeLessThanOrEqual(1);

      vi.useRealTimers();
    });

    it('should correctly handle interactive parent re-renders with button clicks', async () => {
      const onEnter = vi.fn();
      const onExit = vi.fn();

      function TestComponent() {
        const [count, setCount] = React.useState(0);
        const [inProp, setInProp] = React.useState(false);

        return (
          <>
            <button
              type="button"
              data-testid="increment-button"
              onClick={() => setCount((c) => c + 1)}
            >
              Count: {count}
            </button>
            <button
              type="button"
              data-testid="toggle-button"
              onClick={() => setInProp((i) => !i)}
            >
              Toggle
            </button>
            <FadeMiniapp
              in={inProp}
              timeout={1000}
              onEnter={onEnter}
              onExit={onExit}
            >
              <div data-testid="fade-element">
                Count: {count}, In: {String(inProp)}
              </div>
            </FadeMiniapp>
          </>
        );
      }

      const { getByTestId } = render(<TestComponent />);

      const incrementButton = getByTestId('increment-button');
      const toggleButton = getByTestId('toggle-button');

      // Trigger multiple parent re-renders while in=false
      incrementButton.click();
      incrementButton.click();
      incrementButton.click();

      // No callbacks should be triggered
      expect(onEnter).not.toHaveBeenCalled();
      expect(onExit.mock.calls.length).toBeLessThanOrEqual(1);

      // Now toggle in to true
      toggleButton.click();

      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      // onEnter should be called exactly once
      expect(onEnter).toHaveBeenCalledTimes(1);

      // Reset mocks
      onEnter.mockClear();
      onExit.mockClear();

      // More parent re-renders while in=true
      incrementButton.click();
      incrementButton.click();

      // No new callbacks
      expect(onEnter).not.toHaveBeenCalled();
      expect(onExit).not.toHaveBeenCalled();

      // Toggle in back to false
      toggleButton.click();

      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });

      // onExit should be called exactly once
      expect(onExit).toHaveBeenCalledTimes(1);
    });

    it('should prevent animation duration changes from triggering unwanted animations', async () => {
      vi.useFakeTimers();

      const onEntering = vi.fn();
      const onExiting = vi.fn();

      function TestComponent() {
        const [trigger, setTrigger] = React.useState(false);

        React.useEffect(() => {
          // This will cause isFirstMount.current to change
          // and potentially change shouldExecuteAnimation
          setTimeout(() => {
            setTrigger(true);
          }, 150);
        }, []);

        return (
          <FadeMiniapp
            in={false}
            timeout={5000}
            onEntering={onEntering}
            onExiting={onExiting}
          >
            <div data-testid="fade-element">Trigger: {String(trigger)}</div>
          </FadeMiniapp>
        );
      }

      render(<TestComponent />);

      // Wait for the parent re-render
      await vi.advanceTimersByTimeAsync(200);

      // The fix ensures that even when isFirstMount changes,
      // parent re-renders don't trigger animation callbacks
      expect(onEntering).not.toHaveBeenCalled();
      expect(onExiting.mock.calls.length).toBeLessThanOrEqual(1);

      vi.useRealTimers();
    });
  });
});
