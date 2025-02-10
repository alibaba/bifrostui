import React from 'react';
import { render, isConformant, fireEvent, act, screen } from 'testing';
import SwipeAction from '../SwipeAction';
import SwipeActionItem from '../SwipeActionItem';

describe('SwipeAction', () => {
  // 在每个测试用例之前，启用Jest的假定时器
  beforeEach(() => {
    jest.useFakeTimers(); // 启用Jest的假定时器
  });

  // 在每个测试用例之后，恢复真实定时器
  afterEach(() => {
    jest.useRealTimers(); // 恢复真实定时器
    jest.clearAllTimers();
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

      const touchMoveEvent = {
        touches: [
          {
            clientX: distance,
            clientY: 0,
          },
        ],
        cancelable: true,
        bubbles: true,
      };

      const touchEndEvent = {
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
      jest.advanceTimersByTime(100); // 给动画时间
      fireEvent.touchMove(element, touchMoveEvent);
      jest.advanceTimersByTime(300); // 给动画时间
      fireEvent.touchEnd(element, touchEndEvent);
      jest.advanceTimersByTime(500); // 等待状态更新
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
      expect(screen.getByText('Left Action')).toBeVisible();

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
      const onActionsReveal = jest.fn();
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
        jest.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

    // 测试滑动操作被禁用时，不调用onActionsReveal函数
    it('should not call onActionsReveal when swipe is disabled', async () => {
      const onActionsReveal = jest.fn();
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
  });

  // 测试滑动操作项点击
  describe('Action item click', () => {
    // 测试点击滑动操作项时关闭滑动操作
    it('should close action on item click when closeOnClickActionItem is true', async () => {
      const rightAction = (
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
        fireEvent.click(container.querySelector('.bui-swipe-action-button'));
        jest.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

    // 测试点击滑动操作项时不关闭滑动操作
    it('should not close action on item click when closeOnClickActionItem is false', async () => {
      const rightAction = (
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
        fireEvent.click(container.querySelector('.bui-swipe-action-button'));
        jest.advanceTimersByTime(500);
      });
      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-62px, 0, 0)',
      );
    });
  });
});
