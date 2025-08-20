import React from 'react';
import { render, isConformant, fireEvent, act } from 'testing';
import SwipeAction from '../SwipeAction';
import SwipeActionItem from '../SwipeActionItem';
import { SwipeActionRef } from '../SwipeAction.types';
import { SideTypeEnum } from '../constants';

describe('SwipeAction', () => {
  // 在每个测试用例之前，启用Vitest的假定时器
  beforeEach(() => {
    vi.useFakeTimers(); // 启用Vitest的假定时器
  });

  // 在每个测试用例之后，恢复真实定时器
  afterEach(() => {
    vi.useRealTimers(); // 恢复真实定时器
    vi.clearAllTimers();
  });

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 62,
    });
  });

  // 测试SwipeAction组件是否符合规范
  isConformant({
    Component: SwipeAction,
    displayName: 'BuiSwipeAction',
    className: 'bui-swipe-action',
    skip: ['component-has-root-ref'],
  });

  // 模拟滑动操作
  const simulateSwipe = async (
    element: HTMLElement,
    direction: 'left' | 'right',
    distance: number,
  ) => {
    await act(async () => {
      const touchStartEvent = {
        touches: [
          { clientX: direction === 'right' ? 0 : distance * 2, clientY: 0 },
        ],
        cancelable: true,
        bubbles: true,
      };

      const touchMoveEndEvent = {
        touches: [
          {
            clientX: distance,
            clientY: 0,
          },
        ],
        cancelable: true,
        bubbles: true,
      };

      fireEvent.touchStart(element, touchStartEvent);
      vi.advanceTimersByTime(100); // 给动画时间
      fireEvent.touchMove(element, touchMoveEndEvent);
      vi.advanceTimersByTime(300); // 给动画时间
      fireEvent.touchEnd(element, touchMoveEndEvent);
      vi.advanceTimersByTime(500); // 等待状态更新
    });
  };

  // 测试滑动操作
  describe('Swipe actions', () => {
    // 测试渲染左右滑动操作
    it('should render left and right actions', () => {
      const leftAction = (
        <SwipeActionItem key="left">Left Action</SwipeActionItem>
      );
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction leftActions={[leftAction]} rightActions={[rightAction]}>
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      expect(container).toHaveTextContent('Left Action');
      expect(container).toHaveTextContent('Right Action');
      expect(container).toHaveTextContent('Swipe me');
    });

    // 测试向右滑动时打开左滑动操作
    it('should open left action when swiped right', async () => {
      const leftAction = (
        <SwipeActionItem key="left">Left Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction leftActions={[leftAction]}>Swipe me</SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'right', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(62px, 0, 0)',
      );
    });

    // 测试向左滑动时打开右滑动操作
    it('should open right action when swiped left', async () => {
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction rightActions={[rightAction]}>Swipe me</SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
    });

    // 测试滑动操作时调用onActionsReveal函数
    it('should call onActionsReveal when actions are revealed', async () => {
      const onActionsReveal = vi.fn();
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction
          rightActions={[rightAction]}
          onActionsReveal={onActionsReveal}
        >
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(onActionsReveal).toHaveBeenCalledWith({ side: 'right' });
    });

    // 测试点击内容时关闭滑动操作
    it('should close actions when clicking content if closeOnClickContainer is true', async () => {
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction rightActions={[rightAction]} closeOnClickContainer>
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
      await act(async () => {
        fireEvent.click(
          container.querySelector('.bui-swipe-action-content-mask'),
        );
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

    // 测试滑动操作被禁用时，不调用onActionsReveal函数
    it('should not call onActionsReveal when swipe is disabled', async () => {
      const onActionsReveal = vi.fn();
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction
          rightActions={[rightAction]}
          onActionsReveal={onActionsReveal}
          disabled
        >
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(onActionsReveal).not.toHaveBeenCalled();
    });

    // 测试滑动未达到阈值时不触发动作
    it('should not trigger actions when swipe distance is below threshold', async () => {
      const onActionsReveal = vi.fn();
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction
          rightActions={[rightAction]}
          onActionsReveal={onActionsReveal}
        >
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 4); // 低于阈值
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
      expect(onActionsReveal).not.toHaveBeenCalled();
    });

    // 测试滑动超过阈值后回弹
    it('should snap back when swipe distance is above threshold but not enough to open', async () => {
      const onActionsReveal = vi.fn();
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const component = (
        <SwipeAction
          rightActions={[rightAction]}
          onActionsReveal={onActionsReveal}
        >
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 30); // 高于阈值但不足以打开
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
      expect(onActionsReveal).not.toHaveBeenCalled();
    });
  });

  // 测试滑动操作项点击
  describe('Action item click', () => {
    // 测试点击滑动操作项时关闭滑动操作
    it('should close action on item click when closeOnClickActionItem is true', async () => {
      const rightAction = (
        // eslint-disable-next-line  @typescript-eslint/no-empty-function
        <SwipeActionItem key="right" onClick={() => {}}>
          Right Action
        </SwipeActionItem>
      );
      const component = (
        <SwipeAction rightActions={[rightAction]} closeOnClickActionItem>
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
      await act(async () => {
        fireEvent.click(container.querySelector('.bui-swipe-action-item'));
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

    // 测试点击滑动操作项时不关闭滑动操作
    it('should not close action on item click when closeOnClickActionItem is false', async () => {
      const rightAction = (
        // eslint-disable-next-line  @typescript-eslint/no-empty-function
        <SwipeActionItem key="right" onClick={() => {}}>
          Right Action
        </SwipeActionItem>
      );
      const component = (
        <SwipeAction
          rightActions={[rightAction]}
          closeOnClickActionItem={false}
        >
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
      await act(async () => {
        fireEvent.click(container.querySelector('.bui-swipe-action-item'));
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
    });

    // 测试点击滑动操作项时触发点击事件
    it('should trigger onClick event on action item click', async () => {
      const onClick = vi.fn();
      const rightAction = (
        <SwipeActionItem key="right" onClick={onClick}>
          Right Action
        </SwipeActionItem>
      );
      const component = (
        <SwipeAction rightActions={[rightAction]} closeOnClickActionItem>
          Swipe me
        </SwipeAction>
      );
      const { container } = render(component);
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();
      await simulateSwipe(content, 'left', 50);
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
      await act(async () => {
        fireEvent.click(container.querySelector('.bui-swipe-action-item'));
        vi.advanceTimersByTime(500);
      });
      expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
        color: 'primary',
        id: '',
        text: 'Right Action',
      });
    });
  });

  // 测试SwipeActionItem组件
  describe('SwipeActionItem', () => {
    // 测试渲染SwipeActionItem
    it('should render SwipeActionItem with text', () => {
      const component = <SwipeActionItem>Test Action</SwipeActionItem>;
      const { container } = render(component);
      expect(container).toHaveTextContent('Test Action');
    });

    // 测试SwipeActionItem的默认颜色
    it('should have default color when no color prop is provided', () => {
      const component = <SwipeActionItem>Test Action</SwipeActionItem>;
      const { container } = render(component);
      expect(container.querySelector('.bui-swipe-action-item')).toHaveClass(
        'bui-swipe-action-item-primary',
      );
    });

    // 测试SwipeActionItem的颜色
    it('should have specified color when color prop is provided', () => {
      const component = (
        <SwipeActionItem color="success">Test Action</SwipeActionItem>
      );
      const { container } = render(component);
      expect(container.querySelector('.bui-swipe-action-item')).toHaveClass(
        'bui-swipe-action-item-success',
      );
    });
  });

  // 测试SwipeAction的ref方法
  describe('SwipeAction ref methods', () => {
    // 测试show方法
    it('should open right actions using show method', async () => {
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const swipeActionRef = React.createRef<SwipeActionRef>();
      const { container } = render(
        <SwipeAction rightActions={[rightAction]} ref={swipeActionRef}>
          Swipe me
        </SwipeAction>,
      );
      await act(async () => {
        swipeActionRef.current.show({ side: SideTypeEnum.RIGHT });
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
    });

    // 测试show方法打开左侧动作
    it('should open left actions using show method', async () => {
      const leftAction = (
        <SwipeActionItem key="left">Left Action</SwipeActionItem>
      );
      const swipeActionRef = React.createRef<SwipeActionRef>();
      const { container } = render(
        <SwipeAction leftActions={[leftAction]} ref={swipeActionRef}>
          Swipe me
        </SwipeAction>,
      );
      await act(async () => {
        swipeActionRef.current.show({ side: SideTypeEnum.LEFT });
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(62px, 0, 0)',
      );
    });

    // 测试close方法
    it('should close actions using close method', async () => {
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const swipeActionRef = React.createRef<SwipeActionRef>();
      const { container } = render(
        <SwipeAction rightActions={[rightAction]} ref={swipeActionRef}>
          Swipe me
        </SwipeAction>,
      );
      await act(async () => {
        swipeActionRef.current.show({ side: SideTypeEnum.RIGHT });
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
      await act(async () => {
        swipeActionRef.current.close();
        vi.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

    // 测试open属性
    it('should have open property indicating if actions are open', async () => {
      const rightAction = (
        <SwipeActionItem key="right">Right Action</SwipeActionItem>
      );
      const swipeActionRef = React.createRef<SwipeActionRef>();
      render(
        <SwipeAction rightActions={[rightAction]} ref={swipeActionRef}>
          Swipe me
        </SwipeAction>,
      );
      expect(swipeActionRef.current.open).toBe(false);
      await act(async () => {
        swipeActionRef.current.show({ side: SideTypeEnum.RIGHT });
        vi.advanceTimersByTime(500);
      });
      expect(swipeActionRef.current.open).toBe(true);
      await act(async () => {
        swipeActionRef.current.close();
        vi.advanceTimersByTime(500);
      });
      expect(swipeActionRef.current.open).toBe(false);
    });
  });
});
