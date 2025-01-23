import React from 'react';
import { render, isConformant, fireEvent, act } from 'testing';
import SwipeAction from '../SwipeAction';
import SwipeActionItem from '../SwipeActionItem';

describe('SwipeAction', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // 启用Jest的假定时器
  });

  afterEach(() => {
    jest.useRealTimers(); // 恢复真实定时器
  });

  isConformant({
    Component: SwipeAction,
    displayName: 'BuiSwipeAction',
    className: 'bui-swipe-action',
  });

  const simulateSwipe = async (
    element: HTMLElement,
    direction: 'left' | 'right',
    distance: number,
  ) => {
    const touchStartEvent = {
      touches: [{ clientX: direction === 'right' ? 0 : distance, clientY: 0 }],
    };

    const touchMoveEvent = {
      touches: [
        {
          clientX: direction === 'right' ? distance : -distance,
          clientY: 0,
        },
      ],
    };

    const touchEndEvent = {
      changedTouches: [
        {
          clientX: direction === 'right' ? distance : -distance,
          clientY: 0,
        },
      ],
    };

    await act(async () => {
      fireEvent.touchStart(element, touchStartEvent);
      jest.advanceTimersByTime(10); // 给动画时间
      fireEvent.touchMove(element, touchMoveEvent);
      jest.advanceTimersByTime(10); // 给动画时间
      fireEvent.touchEnd(element, touchEndEvent);
      jest.advanceTimersByTime(500); // 等待状态更新
    });
  };

  describe('Swipe actions', () => {
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

    it('should open left action when swiped right', async () => {
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
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();

      await simulateSwipe(content, 'right', 100);

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(100px, 0, 0)',
      );
      expect(container).toHaveTextContent('Left Action');
    });

    it('should open right action when swiped left', async () => {
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
      const content = container.querySelector(
        '.bui-swipe-action-content-container',
      ) as HTMLElement;
      expect(content).not.toBeNull();

      await simulateSwipe(content, 'left', 100);

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-100px, 0, 0)',
      );
      expect(container).toHaveTextContent('Right Action');
    });

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

      await simulateSwipe(content, 'left', 100);

      expect(onActionsReveal).toHaveBeenCalledWith({ side: 'right' });
    });

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

      await simulateSwipe(content, 'left', 100);

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-100px, 0, 0)',
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

      await simulateSwipe(content, 'left', 100);

      expect(onActionsReveal).not.toHaveBeenCalled();
    });
  });

  describe('Action item click', () => {
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

      await simulateSwipe(content, 'left', 100);

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-100px, 0, 0)',
      );

      await act(async () => {
        fireEvent.click(
          container.querySelector('.bui-swipe-action-button-right'),
        );
        jest.advanceTimersByTime(500);
      });

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(0px, 0, 0)',
      );
    });

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

      await simulateSwipe(content, 'left', 100);

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-100px, 0, 0)',
      );

      await act(async () => {
        fireEvent.click(
          container.querySelector('.bui-swipe-action-button-right'),
        );
        jest.advanceTimersByTime(500);
      });

      expect(container.querySelector('.bui-swipe-action-track')).toHaveStyle(
        'transform: translate3d(-100px, 0, 0)',
      );
    });
  });
});
