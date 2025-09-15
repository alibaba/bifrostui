import React from 'react';
import { vi } from 'vitest';
import { render, waitFor } from 'testing';

describe('Slide.miniapp', () => {
  let SlideMiniapp: any;

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
    const { default: MiniappSlide } = await import('../Slide.miniapp');
    SlideMiniapp = MiniappSlide;
  });

  afterAll(() => {
    vi.resetModules();
  });

  describe('Basic rendering', () => {
    it('should render children correctly in miniapp environment', () => {
      const { getByTestId } = render(
        <SlideMiniapp in appear={false}>
          <div data-testid="slide-content">Miniapp Slide Content</div>
        </SlideMiniapp>,
      );

      expect(getByTestId('slide-content')).toBeInTheDocument();
      expect(getByTestId('slide-content')).toHaveTextContent(
        'Miniapp Slide Content',
      );
    });

    it('should apply animation styles correctly', () => {
      const { getByTestId } = render(
        <SlideMiniapp in timeout={1000}>
          <div data-testid="slide-element">Test Element</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
    });

    it('should handle in=false state correctly', () => {
      const { getByTestId } = render(
        <SlideMiniapp in={false} timeout={1000}>
          <div data-testid="slide-element">Test Element</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/bui-slide-down-out/);
    });
  });

  describe('Direction variations', () => {
    it.each(['down', 'up', 'left', 'right'])(
      'should use correct animation name for %s direction',
      (direction) => {
        const { getByTestId } = render(
          <SlideMiniapp in direction={direction as any} timeout={800}>
            <div data-testid="slide-element">Direction Test</div>
          </SlideMiniapp>,
        );

        const element = getByTestId('slide-element');
        expect(element.style.animation).toMatch(
          new RegExp(`bui-slide-${direction}-in`),
        );
      },
    );

    it.each(['down', 'up', 'left', 'right'])(
      'should use correct animation name for %s direction when exiting',
      (direction) => {
        const { getByTestId } = render(
          <SlideMiniapp in={false} direction={direction as any} timeout={800}>
            <div data-testid="slide-element">Direction Test</div>
          </SlideMiniapp>,
        );

        const element = getByTestId('slide-element');
        expect(element.style.animation).toMatch(
          new RegExp(`bui-slide-${direction}-out`),
        );
      },
    );
  });

  describe('Appear behavior', () => {
    it('should execute animation on first render when appear=true and in=true', async () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <SlideMiniapp
          in
          appear
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="slide-element">slide test with appear</div>
        </SlideMiniapp>,
      );

      // 验证 onEnter 回调被调用（在 useEffect 中触发）
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      const element = getByTestId('slide-element');
      // 验证动画样式正确应用
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
      expect(element.style.animation).toMatch(/1000ms/);

      // 验证动画样式存在即表示动画会执行
      expect(element.style.animation).toContain('bui-slide-down-in');
      expect(element.style.animation).toContain('1000ms');
    });

    it('should not execute animation on first render when in=true and appear=false', () => {
      const onEnter = vi.fn();
      const onEntering = vi.fn();
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <SlideMiniapp
          in
          appear={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          <div data-testid="slide-element">slide test without appear</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');

      // 验证首次渲染时没有执行动画，元素直接显示
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('slide test without appear');

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
        <SlideMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="slide-element">
            slide test with appear but no enter
          </div>
        </SlideMiniapp>,
      );

      // 验证首次渲染时 onEnter 被调用（因为 appear=true，shouldAnimateOnFirstMount=true）
      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });

      const element = getByTestId('slide-element');
      expect(element.style.animationFillMode).toBe('both');
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
      expect(element.style.animation).toMatch(/1000ms/);

      // 重置 mock 函数
      onEnter.mockClear();
      onEntering.mockClear();
      onEntered.mockClear();
      onExit.mockClear();

      // 模拟后续渲染：切换到 in=false 再切换回 in=true
      rerender(
        <SlideMiniapp
          in={false}
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="slide-element">
            slide test with appear but no enter
          </div>
        </SlideMiniapp>,
      );

      // 等待退出动画开始（exit=true 是默认值）
      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });

      // 验证退出动画样式
      const exitElement = getByTestId('slide-element');
      expect(exitElement.style.animation).toMatch(/bui-slide-down-out/);

      // 再次切换到 in=true，这时由于 enter=false 且不是首次渲染，
      // shouldExecuteAnimation 会是 false，不会执行动画
      rerender(
        <SlideMiniapp
          in
          appear
          enter={false}
          timeout={1000}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
        >
          <div data-testid="slide-element">
            slide test with appear but no enter
          </div>
        </SlideMiniapp>,
      );

      // 验证后续渲染时没有执行进入动画（因为 enter=false 且不是首次渲染）
      expect(onEnter).not.toHaveBeenCalled();
      expect(onEntering).not.toHaveBeenCalled();

      // 验证元素直接显示最终状态，且动画时长为 0
      const finalElement = getByTestId('slide-element');
      expect(finalElement).toBeInTheDocument();
      expect(finalElement).toHaveTextContent(
        'slide test with appear but no enter',
      );
      expect(finalElement.style.animation).toMatch(/0ms/); // 没有动画时长
    });
  });

  describe('Animation configuration', () => {
    it('should use correct animation name for enter state', () => {
      const { getByTestId } = render(
        <SlideMiniapp in timeout={800}>
          <div data-testid="slide-element">Enter Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
    });

    it('should use correct animation name for exit state', () => {
      const { getByTestId } = render(
        <SlideMiniapp in={false} timeout={800}>
          <div data-testid="slide-element">Exit Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/bui-slide-down-out/);
    });

    it('should apply custom timeout correctly', () => {
      const customTimeout = 1500;
      const { getByTestId } = render(
        <SlideMiniapp in timeout={customTimeout}>
          <div data-testid="slide-element">Custom Timeout</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(new RegExp(`${customTimeout}ms`));
    });

    it('should apply custom delay correctly', () => {
      const customDelay = 500;
      const { getByTestId } = render(
        <SlideMiniapp in delay={customDelay} timeout={1000}>
          <div data-testid="slide-element">Custom Delay</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(new RegExp(`${customDelay}ms`));
    });

    it('should handle custom easing configuration', () => {
      const customEasing = {
        enter: 'ease-in',
        exit: 'ease-out',
      };

      const { getByTestId } = render(
        <SlideMiniapp in easing={customEasing} timeout={1000}>
          <div data-testid="slide-element">Custom Easing</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/ease-in/);
    });
  });

  describe('Animation lifecycle callbacks', () => {
    it('should call onEnter when entering', async () => {
      const onEnter = vi.fn();

      const { rerender } = render(
        <SlideMiniapp in={false} onEnter={onEnter}>
          <div data-testid="slide-element">Lifecycle Test</div>
        </SlideMiniapp>,
      );

      rerender(
        <SlideMiniapp in onEnter={onEnter}>
          <div data-testid="slide-element">Lifecycle Test</div>
        </SlideMiniapp>,
      );

      await waitFor(() => {
        expect(onEnter).toHaveBeenCalled();
      });
    });

    it('should call onExit when exiting', async () => {
      const onExit = vi.fn();

      const { rerender } = render(
        <SlideMiniapp in onExit={onExit}>
          <div data-testid="slide-element">Lifecycle Test</div>
        </SlideMiniapp>,
      );

      rerender(
        <SlideMiniapp in={false} onExit={onExit}>
          <div data-testid="slide-element">Lifecycle Test</div>
        </SlideMiniapp>,
      );

      await waitFor(() => {
        expect(onExit).toHaveBeenCalled();
      });
    });

    it('should handle animation end events', () => {
      const onEntered = vi.fn();

      const { getByTestId } = render(
        <SlideMiniapp in onEntered={onEntered} timeout={100}>
          <div data-testid="slide-element">Animation End Test</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');

      // Simulate animation end event
      element.dispatchEvent(new Event('animationend'));

      // Verify the element exists and has correct animation
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
    });
  });

  describe('Mount and unmount behavior', () => {
    it('should handle mountOnEnter prop correctly', () => {
      const { container } = render(
        <SlideMiniapp in={false} mountOnEnter>
          <div data-testid="slide-element">Mount on Enter</div>
        </SlideMiniapp>,
      );

      expect(container.firstChild).toBeNull();
    });

    it('should mount component when in becomes true with mountOnEnter', () => {
      const { getByTestId, rerender } = render(
        <SlideMiniapp in={false} mountOnEnter>
          <div data-testid="slide-element">Mount on Enter</div>
        </SlideMiniapp>,
      );

      rerender(
        <SlideMiniapp in mountOnEnter>
          <div data-testid="slide-element">Mount on Enter</div>
        </SlideMiniapp>,
      );

      expect(getByTestId('slide-element')).toBeInTheDocument();
    });

    it('should handle unmountOnExit prop', () => {
      const { getByTestId, rerender } = render(
        <SlideMiniapp in unmountOnExit>
          <div data-testid="slide-element">Unmount on Exit</div>
        </SlideMiniapp>,
      );

      expect(getByTestId('slide-element')).toBeInTheDocument();

      rerender(
        <SlideMiniapp in={false} unmountOnExit>
          <div data-testid="slide-element">Unmount on Exit</div>
        </SlideMiniapp>,
      );

      // Element should still exist but with exit animation
      const element = getByTestId('slide-element');
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-slide-down-out/);
    });
  });

  describe('Animation control props', () => {
    it('should handle enter=false correctly', () => {
      const { getByTestId } = render(
        <SlideMiniapp in enter={false}>
          <div data-testid="slide-element">No Enter Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle exit=false correctly', () => {
      const { getByTestId, rerender } = render(
        <SlideMiniapp in exit={false}>
          <div data-testid="slide-element">No Exit Animation</div>
        </SlideMiniapp>,
      );

      rerender(
        <SlideMiniapp in={false} exit={false}>
          <div data-testid="slide-element">No Exit Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element).toBeInTheDocument();
    });

    it('should handle appear=false correctly', () => {
      const { getByTestId } = render(
        <SlideMiniapp in appear={false}>
          <div data-testid="slide-element">No Appear Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Style merging', () => {
    it('should merge custom styles with animation styles', () => {
      const customStyle = { backgroundColor: 'red', color: 'white' };

      const { getByTestId } = render(
        <SlideMiniapp in style={customStyle}>
          <div data-testid="slide-element" style={{ fontSize: '16px' }}>
            Style Merge Test
          </div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element.style.backgroundColor).toBe('red');
      expect(element.style.color).toBe('white');
      expect(element.style.fontSize).toBe('16px');
      expect(element.style.animationFillMode).toBe('both');
    });

    it('should preserve children props while adding animation props', () => {
      const onClick = vi.fn();

      const { getByTestId } = render(
        <SlideMiniapp in>
          <button
            data-testid="slide-button"
            onClick={onClick}
            className="custom-button"
            type="button"
          >
            Click Me
          </button>
        </SlideMiniapp>,
      );

      const button = getByTestId('slide-button');
      expect(button).toHaveClass('custom-button');

      button.click();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    it('should return null when children is not provided', () => {
      const { container } = render(<SlideMiniapp in />);
      expect(container.firstChild).toBeNull();
    });

    it('should return null when not mounted', () => {
      const { container } = render(
        <SlideMiniapp in={false} mountOnEnter>
          <div>Should not render</div>
        </SlideMiniapp>,
      );
      expect(container.firstChild).toBeNull();
    });

    it('should handle ref forwarding correctly', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(
        <SlideMiniapp in>
          <div ref={ref} data-testid="slide-element">
            Ref Test
          </div>
        </SlideMiniapp>,
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.textContent).toBe('Ref Test');
    });

    it('should handle animation events correctly', () => {
      const { getByTestId } = render(
        <SlideMiniapp in>
          <div data-testid="slide-element">Animation Event Test</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('slide-element');
      expect(element).toBeInTheDocument();
      expect(element.style.animation).toMatch(/bui-slide-down-in/);
    });
  });

  describe('Component behavior validation', () => {
    it('should have correct displayName', () => {
      expect(SlideMiniapp.displayName).toBe('BuiSlide');
    });

    it('should handle complex animation scenarios', () => {
      const { getByTestId } = render(
        <SlideMiniapp
          in
          direction="left"
          timeout={{ enter: 1000, exit: 500 }}
          delay={200}
          easing={{ enter: 'ease-in', exit: 'ease-out' }}
        >
          <div data-testid="complex-slide">Complex Animation</div>
        </SlideMiniapp>,
      );

      const element = getByTestId('complex-slide');
      expect(element.style.animation).toMatch(/bui-slide-left-in/);
      expect(element.style.animation).toMatch(/1000ms/);
      expect(element.style.animation).toMatch(/200ms/);
      expect(element.style.animation).toMatch(/ease-in/);
    });

    it('should handle state transitions correctly', () => {
      const { getByTestId, rerender } = render(
        <SlideMiniapp in={false} direction="right">
          <div data-testid="slide-element">State Transition Test</div>
        </SlideMiniapp>,
      );

      let element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/bui-slide-right-out/);

      rerender(
        <SlideMiniapp in direction="right">
          <div data-testid="slide-element">State Transition Test</div>
        </SlideMiniapp>,
      );

      element = getByTestId('slide-element');
      expect(element.style.animation).toMatch(/bui-slide-right-in/);
    });
  });
});
