import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollView from '../ScrollView';

describe('ScrollView Accessibility', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  interface MockElement extends HTMLElement {
    mockScrollTop?: number;
    mockScrollLeft?: number;
  }

  const setupScrollMocks = () => {
    // Mock scroll properties for testing
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
      configurable: true,
      get(this: MockElement) {
        return this.mockScrollTop || 0;
      },
      set(this: MockElement, value: number) {
        this.mockScrollTop = value;
      },
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
      configurable: true,
      get(this: MockElement) {
        return this.mockScrollLeft || 0;
      },
      set(this: MockElement, value: number) {
        this.mockScrollLeft = value;
      },
    });
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: 300,
    });
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: 300,
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 600,
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      configurable: true,
      value: 600,
    });
  };

  it('应该具有正确的默认ARIA属性', () => {
    render(
      <ScrollView scrollY>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');
    expect(scrollView).toBeInTheDocument();
    expect(scrollView).toHaveAttribute('tabindex', '0');
  });

  it('应该支持自定义role属性', () => {
    render(
      <ScrollView scrollY role="main">
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('main');
    expect(scrollView).toBeInTheDocument();
  });

  it('应该支持aria-label属性', () => {
    render(
      <ScrollView scrollY aria-label="滚动区域">
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');
    expect(scrollView).toHaveAttribute('aria-label', '滚动区域');
  });

  it('应该支持aria-labelledby属性', () => {
    render(
      <div>
        <h2 id="scroll-title">滚动标题</h2>
        <ScrollView scrollY aria-labelledby="scroll-title">
          <div>测试内容</div>
        </ScrollView>
      </div>,
    );

    const scrollView = screen.getByRole('region');
    expect(scrollView).toHaveAttribute('aria-labelledby', 'scroll-title');
  });

  it('应该支持自定义tabIndex', () => {
    render(
      <ScrollView scrollY tabIndex={-1}>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');
    expect(scrollView).toHaveAttribute('tabindex', '-1');
  });

  it('应该在autoFocus为true时自动获取焦点', async () => {
    render(
      <ScrollView scrollY autoFocus>
        <div>测试内容</div>
      </ScrollView>,
    );

    // 等待自动焦点设置
    await vi.runAllTimersAsync();

    const scrollView = screen.getByRole('region');
    expect(scrollView).toHaveFocus();
  });

  it('应该支持键盘导航 - 垂直滚动', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY style={{ height: '300px' }}>
        <div style={{ height: '600px' }}>长内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // 向下箭头键
    fireEvent.keyDown(scrollView, { key: 'ArrowDown' });
    expect(scrollView.scrollTop).toBe(40);

    // 向上箭头键
    fireEvent.keyDown(scrollView, { key: 'ArrowUp' });
    expect(scrollView.scrollTop).toBe(0);
  });

  it('应该支持键盘导航 - 水平滚动', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollX style={{ width: '300px' }}>
        <div style={{ width: '600px' }}>宽内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // 向右箭头键
    fireEvent.keyDown(scrollView, { key: 'ArrowRight' });
    expect(scrollView.scrollLeft).toBe(40);

    // 向左箭头键
    fireEvent.keyDown(scrollView, { key: 'ArrowLeft' });
    expect(scrollView.scrollLeft).toBe(0);
  });

  it('应该支持Page Up/Page Down键', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY style={{ height: '300px' }}>
        <div style={{ height: '600px' }}>长内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // Page Down
    fireEvent.keyDown(scrollView, { key: 'PageDown' });
    expect(scrollView.scrollTop).toBe(240); // 300 * 0.8

    // Page Up
    fireEvent.keyDown(scrollView, { key: 'PageUp' });
    expect(scrollView.scrollTop).toBe(0);
  });

  it('应该支持Home/End键', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY style={{ height: '300px' }}>
        <div style={{ height: '600px' }}>长内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');
    // 设置初始滚动位置
    (scrollView as MockElement).mockScrollTop = 100;

    // End键 - 滚动到底部
    fireEvent.keyDown(scrollView, { key: 'End' });
    expect(scrollView.scrollTop).toBe(300); // scrollHeight - clientHeight

    // Home键 - 滚动到顶部
    fireEvent.keyDown(scrollView, { key: 'Home' });
    expect(scrollView.scrollTop).toBe(0);
  });

  it('应该支持Space键进行页面滚动', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY style={{ height: '300px' }}>
        <div style={{ height: '600px' }}>长内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // Space键 - 向下滚动一页
    fireEvent.keyDown(scrollView, { key: ' ' });
    expect(scrollView.scrollTop).toBe(240); // 300 * 0.8

    // Shift + Space - 向上滚动一页
    fireEvent.keyDown(scrollView, { key: ' ', shiftKey: true });
    expect(scrollView.scrollTop).toBe(0);
  });

  it('应该调用自定义onKeyDown处理器', () => {
    const onKeyDown = vi.fn();

    render(
      <ScrollView scrollY onKeyDown={onKeyDown}>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');
    fireEvent.keyDown(scrollView, { key: 'ArrowDown' });

    expect(onKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'ArrowDown' }),
    );
  });

  it('应该阻止不相关方向的键盘事件', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // 在只启用垂直滚动时，水平箭头键不应该被处理
    fireEvent.keyDown(scrollView, { key: 'ArrowLeft' });
    expect(scrollView.scrollLeft).toBe(0);
  });

  it('应该在没有启用滚动方向时不响应相应的键盘事件', () => {
    setupScrollMocks();

    render(
      <ScrollView>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // 既未启用scrollX也未启用scrollY时，箭头键不应该有效果
    fireEvent.keyDown(scrollView, { key: 'ArrowDown' });
    expect(scrollView.scrollTop).toBe(0);
  });

  it('应该处理键盘导航的边界情况', () => {
    setupScrollMocks();

    render(
      <ScrollView scrollY style={{ height: '300px' }}>
        <div style={{ height: '600px' }}>长内容</div>
      </ScrollView>,
    );

    const scrollView = screen.getByRole('region');

    // 多次向上滚动，不应该变成负数
    fireEvent.keyDown(scrollView, { key: 'ArrowUp' });
    fireEvent.keyDown(scrollView, { key: 'ArrowUp' });
    expect(scrollView.scrollTop).toBe(0);

    // 滚动到接近底部，然后测试不会超出
    (scrollView as MockElement).mockScrollTop = 290;
    fireEvent.keyDown(scrollView, { key: 'ArrowDown' });
    expect(scrollView.scrollTop).toBe(300); // 应该限制在最大值
  });

  it('应该在容器引用为空时安全处理键盘事件', () => {
    const { container } = render(
      <ScrollView scrollY>
        <div>测试内容</div>
      </ScrollView>,
    );

    const scrollView = container.querySelector('.bui-scroll');

    // 模拟容器引用为空的情况
    expect(() => {
      fireEvent.keyDown(scrollView, { key: 'ArrowDown' });
    }).not.toThrow();
  });
});
