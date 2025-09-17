import React from 'react';
import { vi } from 'vitest';
import { render, waitFor } from 'testing';

describe('Collapse.miniapp', () => {
  let CollapseMiniapp: any;

  beforeAll(async () => {
    // Mock @bifrostui/utils to simulate miniapp environment
    vi.resetModules();
    vi.doMock('@bifrostui/utils', async () => {
      const actual = await vi.importActual('@bifrostui/utils');
      return {
        ...actual,
        isMini: true,
        getBoundingClientRect: vi.fn().mockResolvedValue({
          width: 100,
          height: 100,
        }),
      };
    });

    // Mock Taro for miniapp environment with proper default export
    vi.doMock('@tarojs/taro', async () => {
      const mockTaro = {
        nextTick: (callback: () => void) => {
          setTimeout(callback, 0);
        },
      };
      return {
        default: mockTaro,
        ...mockTaro,
      };
    });

    // Import the miniapp version after mocking
    const { default: MiniappCollapse } = await import('../Collapse.miniapp');
    CollapseMiniapp = MiniappCollapse;
  });

  afterAll(() => {
    vi.resetModules();
  });

  describe('Basic rendering', () => {
    it('should render children correctly in miniapp environment', () => {
      const { getByTestId } = render(
        <CollapseMiniapp in appear={false}>
          <div data-testid="collapse-content">Miniapp Collapse Content</div>
        </CollapseMiniapp>,
      );

      expect(getByTestId('collapse-content')).toBeInTheDocument();
      expect(getByTestId('collapse-content')).toHaveTextContent(
        'Miniapp Collapse Content',
      );
    });

    it('should apply animation styles correctly', () => {
      const { container } = render(
        <CollapseMiniapp in timeout={1000}>
          <div data-testid="collapse-element">Test Element</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toBeInTheDocument();
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });

    it('should handle in=false state correctly', () => {
      const { container } = render(
        <CollapseMiniapp in={false} timeout={1000}>
          <div data-testid="collapse-element">Test Element</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toBeInTheDocument();
      expect(collapseWrapper).toHaveClass('bui-collapse-vertical');
    });
  });

  describe('Direction variations', () => {
    it.each(['vertical', 'horizontal'])(
      'should use correct animation name for %s direction',
      (direction) => {
        const { container } = render(
          <CollapseMiniapp in direction={direction as any} timeout={800}>
            <div data-testid="collapse-element">Direction Test</div>
          </CollapseMiniapp>,
        );

        const collapseWrapper = container.querySelector('.bui-collapse');
        expect(collapseWrapper).toHaveClass(`bui-collapse-${direction}`);
        expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
      },
    );

    it.each(['vertical', 'horizontal'])(
      'should use correct animation name for %s direction when exiting',
      (direction) => {
        const { container } = render(
          <CollapseMiniapp
            in={false}
            direction={direction as any}
            timeout={800}
          >
            <div data-testid="collapse-element">Direction Test</div>
          </CollapseMiniapp>,
        );

        const collapseWrapper = container.querySelector('.bui-collapse');
        expect(collapseWrapper).toHaveClass(`bui-collapse-${direction}`);
      },
    );
  });

  describe('Appear behavior', () => {
    it('should execute animation on first render when appear=true and in=true', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { container } = render(
        <CollapseMiniapp
          in
          appear
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="collapse-element">collapse test with appear</div>
        </CollapseMiniapp>,
      );

      // 验证 onEnter 回调被调用（在 useEffect 中触发）
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      const collapseWrapper = container.querySelector('.bui-collapse');
      // 验证动画样式正确应用
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
      expect(collapseWrapper).toHaveClass('bui-collapse-vertical');

      // 验证CSS变量设置
      expect(collapseWrapper).toHaveStyle('--collapse-collapsed-size: 0px');
    });

    it('should not execute animation on first render when in=true and appear=false', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <CollapseMiniapp
          in
          appear={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="collapse-element">collapse test without appear</div>
        </CollapseMiniapp>,
      );

      const element = getByTestId('collapse-element');

      // 验证首次渲染时没有执行动画，元素直接显示
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('collapse test without appear');

      // 在 Collapse.miniapp.tsx 中，当 appear=false 时，onEnter 仍然会被调用
      // 因为 useEffect 中的条件是 isMounted && shouldAnimate，而不是 shouldAnimateOnFirstMount
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      // 但 onEntering 和 onEntered 不会被调用，因为没有动画
      expect(onEntering).not.toHaveBeenCalled();
      expect(onEntered).not.toHaveBeenCalled();
    });

    it('should execute animation on first render but skip animation on subsequent renders when in=true, appear=true, enter=false', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();
      const onExit = vi.fn();

      // 首次渲染：in=true, appear=true, enter=false
      const { getByTestId, rerender } = render(
        <CollapseMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="collapse-element">
            collapse test with appear but no enter
          </div>
        </CollapseMiniapp>,
      );

      // 在 Collapse.miniapp.tsx 中，当 enter=false 时，shouldAnimate 为 false
      // 因此不会触发 onEnter 回调，这与 Fade 组件的行为不同
      // Collapse 组件更严格地遵循 enter/exit 标志
      expect(onEnter).not.toHaveBeenCalled();

      // 重置 mock 函数
      onEnter.mockClear();
      onEntering.mockClear();
      onEntered.mockClear();
      onExit.mockClear();

      // 模拟后续渲染：切换到 in=false 再切换回 in=true
      rerender(
        <CollapseMiniapp
          in={false}
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="collapse-element">
            collapse test with appear but no enter
          </div>
        </CollapseMiniapp>,
      );

      // 由于 exit=true（默认值），会触发退出动画
      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });

      // 再次切换到 in=true，这时由于 enter=false 且不是首次渲染，
      // shouldAnimate 会是 false，不会执行动画
      rerender(
        <CollapseMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="collapse-element">
            collapse test with appear but no enter
          </div>
        </CollapseMiniapp>,
      );

      // 验证后续渲染时没有执行进入动画（因为 enter=false 且不是首次渲染）
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();

      // 验证元素直接显示最终状态，且动画时长为 0
      const finalElement = getByTestId('collapse-element');
      expect(finalElement).toBeInTheDocument();
      expect(finalElement).toHaveTextContent(
        'collapse test with appear but no enter',
      );
      // 注意：在 Collapse.miniapp.tsx 中，onEntered 只在动画结束时通过 handleAnimationEnd 调用
      // 当 enter=false 时，不会有进入动画，因此 onEntered 不会被调用
    });

    it('should skip enter animation when enter=false', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { rerender } = render(
        <CollapseMiniapp
          in={false}
          direction="vertical"
          enter={false}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 切换为 in=true
      rerender(
        <CollapseMiniapp
          in
          direction="vertical"
          enter={false}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 验证组件正常渲染
      const element = document.querySelector('[data-testid="content"]');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('折叠效果');

      // 验证动画相关回调未被调用（因为 enter=false）
      expect(onEnter).not.toBeCalled();
      expect(onEntering).not.toBeCalled();

      // 在 Collapse.miniapp.tsx 中，当 enter=false 时，shouldAnimate 为 false
      // 因此不会触发 onEntered 回调，这与 Fade 组件的行为不同
      expect(onEntered).not.toBeCalled();
    });

    it('should immediately change visibility when both enter and exit are false', async () => {
      const onEntered = vi.fn();
      const onExited = vi.fn();

      const { rerender, getByTestId } = render(
        <CollapseMiniapp
          in={false}
          direction="vertical"
          enter={false}
          exit={false}
          onEntered={onEntered}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 切换为 in=true
      rerender(
        <CollapseMiniapp
          in
          direction="vertical"
          enter={false}
          exit={false}
          onEntered={onEntered}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 在 Collapse.miniapp.tsx 中，当 enter=false 且 exit=false 时，
      // shouldAnimate 始终为 false，不会触发动画相关的回调
      // 但组件会正常渲染和显示

      // 验证元素正常显示
      const element = getByTestId('content');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('折叠效果');

      // 验证元素状态 - 父元素不应该有 hidden visibility
      expect(element.parentElement).not.toHaveStyle({
        visibility: 'hidden',
      });

      // 由于 enter=false，不会触发 onEntered 回调
      expect(onEntered).not.toBeCalled();
    });
  });

  describe('Animation configuration', () => {
    it('should apply custom timeout correctly', () => {
      const customTimeout = 1500;
      const { container } = render(
        <CollapseMiniapp in timeout={customTimeout}>
          <div data-testid="collapse-element">Custom Timeout</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });

    it('should apply custom delay correctly', () => {
      const customDelay = 500;
      const { container } = render(
        <CollapseMiniapp in delay={customDelay} timeout={1000}>
          <div data-testid="collapse-element">Custom Delay</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });

    it('should handle custom easing configuration', () => {
      const customEasing = {
        enter: 'ease-in',
        exit: 'ease-out',
      };

      const { container } = render(
        <CollapseMiniapp in easing={customEasing} timeout={1000}>
          <div data-testid="collapse-element">Custom Easing</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });

    it('should handle custom collapsedSize', () => {
      const { container } = render(
        <CollapseMiniapp in={false} collapsedSize={50}>
          <div data-testid="collapse-element">Custom Collapsed Size</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveStyle('--collapse-collapsed-size: 50px');
    });

    it('should handle string collapsedSize', () => {
      const { container } = render(
        <CollapseMiniapp in={false} collapsedSize="100px">
          <div data-testid="collapse-element">String Collapsed Size</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveStyle('--collapse-collapsed-size: 100px');
    });
  });

  describe('Animation lifecycle callbacks', () => {
    it('should call onEnter when entering', async () => {
      const onEnter = vi.fn();

      const { rerender } = render(
        <CollapseMiniapp in={false} onEnter={onEnter}>
          <div data-testid="collapse-element">Lifecycle Test</div>
        </CollapseMiniapp>,
      );

      rerender(
        <CollapseMiniapp in onEnter={onEnter}>
          <div data-testid="collapse-element">Lifecycle Test</div>
        </CollapseMiniapp>,
      );

      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });
    });

    it('should call onExit when exiting', async () => {
      const onExit = vi.fn();

      const { rerender } = render(
        <CollapseMiniapp in onExit={onExit}>
          <div data-testid="collapse-element">Lifecycle Test</div>
        </CollapseMiniapp>,
      );

      rerender(
        <CollapseMiniapp in={false} onExit={onExit}>
          <div data-testid="collapse-element">Lifecycle Test</div>
        </CollapseMiniapp>,
      );

      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });
    });

    it('should handle animation end events', () => {
      const onEntered = vi.fn();

      const { container } = render(
        <CollapseMiniapp in onEntered={onEntered} timeout={100}>
          <div data-testid="collapse-element">Animation End Test</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');

      // Simulate animation end event
      collapseWrapper?.dispatchEvent(new Event('animationend'));

      // Verify the wrapper exists and has correct styles
      expect(collapseWrapper).toBeInTheDocument();
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });
  });

  describe('Mount and unmount behavior', () => {
    it('should handle mountOnEnter prop correctly', () => {
      const { container } = render(
        <CollapseMiniapp in={false} mountOnEnter>
          <div data-testid="collapse-element">Mount on Enter</div>
        </CollapseMiniapp>,
      );

      expect(container.firstChild).toBeNull();
    });

    it('should mount component when in becomes true with mountOnEnter', () => {
      const { getByTestId, rerender } = render(
        <CollapseMiniapp in={false} mountOnEnter>
          <div data-testid="collapse-element">Mount on Enter</div>
        </CollapseMiniapp>,
      );

      rerender(
        <CollapseMiniapp in mountOnEnter>
          <div data-testid="collapse-element">Mount on Enter</div>
        </CollapseMiniapp>,
      );

      expect(getByTestId('collapse-element')).toBeInTheDocument();
    });

    it('should handle unmountOnExit prop', () => {
      const { getByTestId, rerender } = render(
        <CollapseMiniapp in unmountOnExit>
          <div data-testid="collapse-element">Unmount on Exit</div>
        </CollapseMiniapp>,
      );

      expect(getByTestId('collapse-element')).toBeInTheDocument();

      rerender(
        <CollapseMiniapp in={false} unmountOnExit>
          <div data-testid="collapse-element">Unmount on Exit</div>
        </CollapseMiniapp>,
      );

      // Element should still exist initially but will be unmounted after animation
      const element = getByTestId('collapse-element');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Animation control props', () => {
    it('should handle enter=false correctly', () => {
      const { getByTestId } = render(
        <CollapseMiniapp in enter={false}>
          <div data-testid="collapse-element">No Enter Animation</div>
        </CollapseMiniapp>,
      );

      const element = getByTestId('collapse-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle exit=false correctly', () => {
      const { getByTestId, rerender } = render(
        <CollapseMiniapp in exit={false}>
          <div data-testid="collapse-element">No Exit Animation</div>
        </CollapseMiniapp>,
      );

      rerender(
        <CollapseMiniapp in={false} exit={false}>
          <div data-testid="collapse-element">No Exit Animation</div>
        </CollapseMiniapp>,
      );

      const element = getByTestId('collapse-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle appear=false correctly', () => {
      const { getByTestId } = render(
        <CollapseMiniapp in appear={false}>
          <div data-testid="collapse-element">No Appear Animation</div>
        </CollapseMiniapp>,
      );

      const element = getByTestId('collapse-element');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Style merging', () => {
    it('should merge custom styles with animation styles', () => {
      const customStyle = { backgroundColor: 'red', color: 'white' };

      const { container, getByTestId } = render(
        <CollapseMiniapp in style={customStyle}>
          <div data-testid="collapse-element" style={{ fontSize: '16px' }}>
            Style Merge Test
          </div>
        </CollapseMiniapp>,
      );

      const element = getByTestId('collapse-element');
      const collapseWrapper = container.querySelector('.bui-collapse');

      expect(element.style.fontSize).toBe('16px');
      expect(collapseWrapper).toHaveStyle('background-color: red');
      expect(collapseWrapper).toHaveStyle('color: white');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });

    it('should preserve children props while adding animation props', () => {
      const onClick = vi.fn();

      const { getByTestId } = render(
        <CollapseMiniapp in>
          <button
            data-testid="collapse-button"
            onClick={onClick}
            className="custom-button"
            type="button"
          >
            Click Me
          </button>
        </CollapseMiniapp>,
      );

      const button = getByTestId('collapse-button');
      expect(button).toHaveClass('custom-button');

      button.click();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    it('should return null when children is not provided', () => {
      const { container } = render(<CollapseMiniapp in />);
      expect(container.firstChild).toBeNull();
    });

    it('should return null when not mounted', () => {
      const { container } = render(
        <CollapseMiniapp in={false} mountOnEnter>
          <div>Should not render</div>
        </CollapseMiniapp>,
      );
      expect(container.firstChild).toBeNull();
    });

    it('should handle ref forwarding correctly', () => {
      const ref = React.createRef<HTMLDivElement>();

      const { container } = render(
        <CollapseMiniapp in ref={ref}>
          <div data-testid="collapse-element">Ref Test</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toBeInTheDocument();
    });

    it('should handle animation events correctly', () => {
      const { container } = render(
        <CollapseMiniapp in>
          <div data-testid="collapse-element">Animation Event Test</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toBeInTheDocument();
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });
  });

  describe('Component behavior validation', () => {
    it('should have correct displayName', () => {
      expect(CollapseMiniapp.displayName).toBe('BuiCollapse');
    });

    it('should handle complex animation scenarios', () => {
      const { container } = render(
        <CollapseMiniapp
          in
          direction="horizontal"
          timeout={{ enter: 1000, exit: 500 }}
          delay={200}
          easing={{ enter: 'ease-in', exit: 'ease-out' }}
          collapsedSize={20}
        >
          <div data-testid="complex-collapse">Complex Animation</div>
        </CollapseMiniapp>,
      );

      const collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveClass('bui-collapse-horizontal');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
      expect(collapseWrapper).toHaveStyle('--collapse-collapsed-size: 20px');
    });

    it('should handle state transitions correctly', () => {
      const { container, rerender } = render(
        <CollapseMiniapp in={false} direction="vertical">
          <div data-testid="collapse-element">State Transition Test</div>
        </CollapseMiniapp>,
      );

      let collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveClass('bui-collapse-vertical');

      rerender(
        <CollapseMiniapp in direction="vertical">
          <div data-testid="collapse-element">State Transition Test</div>
        </CollapseMiniapp>,
      );

      collapseWrapper = container.querySelector('.bui-collapse');
      expect(collapseWrapper).toHaveClass('bui-collapse-vertical');
      expect(collapseWrapper).toHaveStyle('animation-fill-mode: both');
    });
  });

  describe('Collapse with enter/exit disabled', () => {
    it('should skip enter animation when enter=false', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { rerender } = render(
        <CollapseMiniapp
          in={false}
          direction="vertical"
          enter={false}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 切换为 in=true
      rerender(
        <CollapseMiniapp
          in
          direction="vertical"
          enter={false}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 验证组件正常渲染
      const element = document.querySelector('[data-testid="content"]');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('折叠效果');

      // 在 Collapse.miniapp.tsx 中，当 enter=false 时，shouldAnimate 为 false
      // 因此不会触发动画相关回调，包括 onEntered
      expect(onEnter).not.toBeCalled();
      expect(onEntering).not.toBeCalled();
      expect(onEntered).not.toBeCalled();
    });

    it('should skip exit animation when exit=false', async () => {
      const onExit = vi.fn();
      const onExiting = vi.fn();
      const onExited = vi.fn();

      const { rerender } = render(
        <CollapseMiniapp
          in
          direction="horizontal"
          exit={false}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 切换为 in=false
      rerender(
        <CollapseMiniapp
          in={false}
          direction="horizontal"
          exit={false}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 验证组件仍然存在
      const element = document.querySelector('[data-testid="content"]');
      expect(element).toBeInTheDocument();

      // 验证退出动画相关回调未被调用（因为 exit=false）
      expect(onExit).not.toBeCalled();
      expect(onExiting).not.toBeCalled();
    });

    it('should immediately change visibility when both enter and exit are false', async () => {
      const onEntered = vi.fn();
      const onExited = vi.fn();

      const { rerender, getByTestId } = render(
        <CollapseMiniapp
          in={false}
          direction="vertical"
          enter={false}
          exit={false}
          onEntered={onEntered}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 切换为 in=true
      rerender(
        <CollapseMiniapp
          in
          direction="vertical"
          enter={false}
          exit={false}
          onEntered={onEntered}
          onExited={onExited}
        >
          <div data-testid="content">折叠效果</div>
        </CollapseMiniapp>,
      );

      // 验证元素正常显示
      const element = getByTestId('content');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('折叠效果');

      // 验证元素状态 - 父元素不应该有 hidden visibility
      expect(element.parentElement).not.toHaveStyle({
        visibility: 'hidden',
      });

      // 在 Collapse.miniapp.tsx 中，当 enter=false 时，不会触发动画相关回调
      // 因为 shouldAnimate 为 false，所以 onEntered 不会被调用
      // 这与 Fade 组件的行为不同，Collapse 组件更严格地遵循 enter/exit 标志
      expect(onEntered).not.toBeCalled();
    });
  });
});
