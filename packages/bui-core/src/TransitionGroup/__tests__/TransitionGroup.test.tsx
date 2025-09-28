import React from 'react';
import { render, screen, act, waitFor, fireEvent } from 'testing';
import Button from '../../Button';
import TransitionGroup from '../TransitionGroup';
import Transition from '../../Transition/Transition';
import CSSTransition from '../../CSSTransition/CSSTransition';

// Use fake timers for async transitions
jest.useFakeTimers();

describe('TransitionGroup', () => {
  it('should render children correctly', () => {
    const { container } = render(
      <TransitionGroup>
        <div key="1">Item 1</div>
        <div key="2">Item 2</div>
      </TransitionGroup>,
    );

    expect(container.textContent).toBe('Item 1Item 2');
  });

  it('should handle empty children', () => {
    const { container } = render(<TransitionGroup />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should handle single child', () => {
    render(
      <TransitionGroup>
        <div key="1">Single Item</div>
      </TransitionGroup>,
    );

    expect(screen.getByText('Single Item')).toBeInTheDocument();
  });

  it('should render with default div component', () => {
    const { container } = render(
      <TransitionGroup>
        <div key="1">Item 1</div>
      </TransitionGroup>,
    );

    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should handle dynamic children changes', () => {
    const { rerender } = render(
      <TransitionGroup>
        <div key="1">Item 1</div>
        <div key="2">Item 2</div>
      </TransitionGroup>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    rerender(
      <TransitionGroup>
        <div key="1">Item 1</div>
        <div key="3">Item 3</div>
      </TransitionGroup>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    // Item 2 should still be in the DOM as TransitionGroup manages transitions
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('should handle children with same keys but different content', () => {
    const { rerender } = render(
      <TransitionGroup>
        <div key="1">Item 1</div>
        <div key="2">Item 2</div>
      </TransitionGroup>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    rerender(
      <TransitionGroup>
        <div key="1">Item 1 Modified</div>
        <div key="2">Item 2 Modified</div>
      </TransitionGroup>,
    );

    expect(screen.getByText('Item 1 Modified')).toBeInTheDocument();
    expect(screen.getByText('Item 2 Modified')).toBeInTheDocument();
  });

  it('should render with null component', () => {
    const { container } = render(
      <TransitionGroup component={null}>
        <div key="1">Item 1</div>
      </TransitionGroup>,
    );

    // When component is null, children should be rendered directly
    expect(container.textContent).toBe('Item 1');
  });

  // 测试handleExitedRef相关逻辑 - 使用实际的Transition组件
  it('should handle child exit and removal correctly with Transition', () => {
    const onExited = jest.fn();

    // 初始渲染两个Transition组件
    const { rerender } = render(
      <TransitionGroup>
        <Transition key="1" timeout={0} in unmountOnExit onExited={onExited}>
          <div>Item 1</div>
        </Transition>
        <Transition key="2" timeout={0} in unmountOnExit onExited={onExited}>
          <div>Item 2</div>
        </Transition>
      </TransitionGroup>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    // 移除一个Transition组件
    rerender(
      <TransitionGroup>
        <Transition key="1" timeout={0} in unmountOnExit onExited={onExited}>
          <div>Item 1</div>
        </Transition>
      </TransitionGroup>,
    );

    // 验证剩余的Transition组件仍在DOM中
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    // 由于TransitionGroup的机制，Item 2应该仍然在DOM中直到onExited被调用
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  // 完全模拟demo中的操作，测试handleExitedRef逻辑
  it('should properly handle child exit through handleExitedRef by simulating demo operations', async () => {
    const onExited = jest.fn();

    // 使用React状态来模拟demo中的操作
    const TestComponent = () => {
      const [items, setItems] = React.useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ]);

      const handleAddItem = () => {
        const id =
          items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
        setItems((prev) => [...prev, { id, text: `Item ${id}` }]);
      };

      const handleRemoveItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
      };

      return (
        <div>
          <Button data-testid="add-item" onClick={handleAddItem}>
            添加项目
          </Button>
          <TransitionGroup>
            {items.map((item) => (
              <CSSTransition
                key={item.id}
                unmountOnExit
                timeout={300}
                classNames="item"
                onExited={onExited}
              >
                <div data-testid={`item-${item.id}`}>
                  <span>{item.text}</span>
                  <Button
                    data-testid={`remove-${item.id}`}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    删除
                  </Button>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      );
    };

    const { rerender } = render(<TestComponent />);

    // 验证初始状态
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();

    // 测试handleExitedRef if (child.key in currentChildMapping) return;之前的逻辑
    // 直接删除现有的项目
    const removeButton2 = screen.getByTestId('remove-2');
    fireEvent.click(removeButton2);

    rerender(<TestComponent />);

    await waitFor(() => {
      // 验证Item 2应该仍然在DOM中，因为TransitionGroup会处理退出动画
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    // Advance timers to allow transition to complete
    act(() => {
      jest.advanceTimersByTime(0);
    });

    // 测试handleExitedRef if (child.key in currentChildMapping) return;之后的逻辑
    // 先添加新项目
    const addButton = screen.getByTestId('add-item');
    fireEvent.click(addButton);

    rerender(<TestComponent />);

    await waitFor(() => {
      // 验证新项目已添加
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument(); // 已标记为退出但仍在DOM中
      expect(screen.getByText('Item 3')).toBeInTheDocument();
      expect(screen.getByText('Item 4')).toBeInTheDocument();
    });

    // Advance timers to allow transition to complete
    act(() => {
      jest.advanceTimersByTime(0);
    });

    // 测试handleExitedRef if (child.key in currentChildMapping) return;之后的逻辑
    // 直接删除现有的项目
    const removeButton4 = screen.getByTestId('remove-4');
    fireEvent.click(removeButton4);

    rerender(<TestComponent />);

    await waitFor(() => {
      expect(onExited).toHaveBeenCalled();
    });
  });
});
