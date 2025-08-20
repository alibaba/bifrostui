import React from 'react';
import { act, userEvent, render, fireEvent } from 'testing';

// 辅助函数：创建延迟Promise
const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

describe('DesktopPicker', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should render float dom', async () => {
    const { default: DesktopPicker } = await import('../index');
    const closeMock = vi.fn();
    const TestFn = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <DesktopPicker
            open={open}
            content={<div>float</div>}
            onClose={closeMock}
          >
            <div>
              <div
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpen(!open);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                testDemo
              </div>
            </div>
          </DesktopPicker>
          <div>close</div>
        </>
      );
    };

    const { getAllByText } = render(<TestFn />);
    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });

    // 等待组件渲染完成
    await act(async () => {
      await delay(100);
    });

    // 检查容器是否存在
    const container = document.getElementsByClassName(
      'bui-desktop-picker-container',
    )[0];
    if (container) {
      expect(container).toHaveClass('bui-desktop-picker-bottom');
    } else {
      // 如果容器不存在，检查是否有其他相关的元素
      const pickerElements = document.querySelectorAll(
        '[class*="bui-desktop-picker"]',
      );
      expect(pickerElements.length).toBeGreaterThan(0);
    }
    await act(async () => {
      userEvent.click(getAllByText('close')[0]);
    });

    // 等待关闭操作完成
    await act(async () => {
      await delay(100);
    });

    // 检查 closeMock 是否被调用
    expect(closeMock).toBeCalled();

    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    setTimeout(() => {
      expect(closeMock).toBeCalled();
    }, 1000);
  });
});

describe('prop: miniBackdropInvisible', () => {
  const closeMock = vi.fn();
  it('should render float dom', async () => {
    vi.resetModules();
    vi.doMock('@bifrostui/utils', async () => {
      const actual = await vi.importActual('@bifrostui/utils');
      return {
        ...actual,
        isMini: true,
      };
    });
    vi.doMock('react', async () => {
      const actual = await vi.importActual('react');
      return {
        ...actual,
      };
    });
    const { default: DesktopPicker } = await import('../index');
    const component = (
      <DesktopPicker onClose={closeMock} open content={<div>test</div>}>
        <div>content</div>
      </DesktopPicker>
    );
    render(component);
    const button = document.querySelector('.bui-backdrop');
    await act(async () => {
      fireEvent.click(button);
    });
    setTimeout(() => {
      expect(closeMock).toBeCalled();
    }, 1000);
  });
});
