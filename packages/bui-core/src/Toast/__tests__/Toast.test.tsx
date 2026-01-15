import * as React from 'react';
import { act, fireEvent, render, screen } from 'testing';
import { Button } from '@bifrostui/react';
import { ErrorCircleFilledBoldIcon } from '@bifrostui/icons';
import { renderHook } from '@testing-library/react';
import { Toast } from '../index';

describe('Toast', () => {
  const rootClass = 'bui-toast';
  let toastHook;

  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers();
    renderHook(() => {
      toastHook = Toast.useToast();
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('Toast role should be "status"', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    const toastEl = document.body.querySelector(`.${rootClass}`);
    expect(toastEl).toHaveAttribute('role', 'status');
  });

  it('Toast aria-live should be "polite"', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    const toastEl = document.body.querySelector(`.${rootClass}`);
    expect(toastEl).toHaveAttribute('aria-live', 'polite');
  });

  it('Toast aria-atomic should be "true"', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    const toastEl = document.body.querySelector(`.${rootClass}`);
    expect(toastEl).toHaveAttribute('aria-atomic', 'true');
  });

  it('should render in document body', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(document.body.querySelector(`.${rootClass}`)).toBeInTheDocument();
  });

  it('should render ToastView via Portal to document.body when container is not specified', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    // ToastView 应该通过 Portal 渲染到 document.body
    const toastEl = document.body.querySelector(`.${rootClass}`);
    expect(toastEl).toBeInTheDocument();
    // 验证 Toast 内容
    expect(toastEl).toHaveTextContent('提示内容');
    // rootWrapper 会被创建并添加到 document.body，但 ToastView 通过 Portal 直接渲染到 body
    // 所以 document.body 会包含多个子元素
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('should render in container', async () => {
    const { getByTestId } = render(
      <>
        <div id="render-container" data-testid="render-container" />
        <Button
          data-testid="emit-button"
          onClick={() => {
            Toast({
              message: '提示内容',
              container: document.getElementById('render-container'),
            });
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(getByTestId('render-container')).toHaveTextContent('提示内容');
  });

  it('should render ToastView in specified container via Portal', async () => {
    const { getByTestId } = render(
      <>
        <div id="custom-container" data-testid="custom-container" />
        <Button
          data-testid="emit-button"
          onClick={() => {
            Toast({
              message: '自定义容器内容',
              container: document.getElementById('custom-container'),
            });
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button'));
    const container = getByTestId('custom-container');
    // ToastView 应该通过 Portal 渲染到指定的 container 中
    const toastEl = container.querySelector(`.${rootClass}`);
    expect(toastEl).toBeInTheDocument();
    expect(container).toHaveTextContent('自定义容器内容');
    // 验证 Toast 不在 document.body 的直接子元素中（而是在 container 中）
    expect(toastEl.closest('#custom-container')).toBe(container);
  });

  it('should render whit default props', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast('提示内容');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(document.body.querySelector(`.${rootClass}`)).toHaveClass(
      `${rootClass}-center`,
    );
    expect(document.body.querySelector(`.${rootClass}`)).toHaveClass(
      `${rootClass}-allow-click`,
    );
  });

  it('should destory current Toast when call close function', async () => {
    let toast;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          toast = Toast({
            message: '提示内容',
            duration: 0,
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    await act(async () => {
      toast.close();
      await vi.runAllTimers();
    });
    setTimeout(() => {
      expect(
        document.body.querySelector(`.${rootClass}`),
      ).not.toBeInTheDocument();
    });
  });

  it('should cleanup rootWrapper properly even when ToastView is rendered via Portal', async () => {
    let toast;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          toast = Toast({
            message: '提示内容',
            duration: 0,
          });
        }}
      >
        test
      </Button>,
    );
    const bodyChildrenCountBefore = document.body.children.length;
    fireEvent.click(getByTestId('emit-button'));
    const bodyChildrenCountAfterRender = document.body.children.length;
    // Toast 渲染后，document.body 应该增加了子元素
    expect(bodyChildrenCountAfterRender).toBeGreaterThan(
      bodyChildrenCountBefore,
    );

    // 关闭 Toast
    await act(async () => {
      toast.close();
      await vi.runAllTimers();
    });

    // 等待清理完成
    await act(async () => {
      await vi.runAllTimers();
    });

    // Toast 和 rootWrapper 都应该被清理
    setTimeout(() => {
      expect(
        document.body.querySelector(`.${rootClass}`),
      ).not.toBeInTheDocument();
    });
  });

  it('should render by warning type', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button-warning"
        onClick={() => {
          Toast.warning('校验不通过，请重试');
        }}
      >
        warning
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button-warning'));
    expect(document.body.querySelector('.bui-svg-icon')).toBeInTheDocument();
    const toastDom = document.body.querySelector(`.${rootClass}`);
    expect(toastDom.innerHTML.includes('校验不通过，请重试')).toBeTruthy();
  });

  it('should render by loading type', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button-loading"
        onClick={() => {
          Toast.loading('正在加载');
        }}
      >
        loading
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button-loading'));
    expect(document.body.querySelector('.bui-svg-icon')).toBeInTheDocument();
    const toastDom = document.body.querySelector(`.${rootClass}`);
    expect(toastDom.innerHTML.includes('正在加载')).toBeTruthy();
  });

  it('should render by success type', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button-success"
        onClick={() => {
          Toast.success('操作成功');
        }}
      >
        success
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button-success'));
    expect(document.body.querySelector('.bui-svg-icon')).toBeInTheDocument();
    const toastDom = document.body.querySelector(`.${rootClass}`);
    expect(toastDom.innerHTML.includes('操作成功')).toBeTruthy();
  });

  it('should render by fail type', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button-fail"
        onClick={() => {
          Toast.fail('操作失败');
        }}
      >
        fail
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button-fail'));
    expect(document.body.querySelector('.bui-svg-icon')).toBeInTheDocument();
    const toastDom = document.body.querySelector(`.${rootClass}`);
    expect(toastDom.innerHTML.includes('操作失败')).toBeTruthy();
  });

  it('should render on different position', () => {
    const { getByTestId } = render(
      <>
        <Button
          data-testid="emit-button-top"
          onClick={() => {
            Toast({
              message: '提示内容',
              position: 'top',
            });
          }}
        >
          test
        </Button>
        <Button
          data-testid="emit-button-center"
          onClick={() => {
            Toast({
              message: '提示内容',
              position: 'center',
            });
          }}
        >
          test
        </Button>
        <Button
          data-testid="emit-button-bottom"
          onClick={() => {
            Toast({
              message: '提示内容',
              position: 'bottom',
            });
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button-top'));
    expect(
      document.body.querySelector(`.${rootClass}-top`),
    ).toBeInTheDocument();

    fireEvent.click(getByTestId('emit-button-center'));
    expect(
      document.body.querySelector(`.${rootClass}-center`),
    ).toBeInTheDocument();

    fireEvent.click(getByTestId('emit-button-bottom'));
    expect(
      document.body.querySelector(`.${rootClass}-bottom`),
    ).toBeInTheDocument();
  });

  it('should render multiple toast as same time', () => {
    const { getByTestId } = render(
      <>
        <Button
          data-testid="emit-button-top"
          onClick={() => {
            Toast({
              message: '提示内容',
              position: 'top',
              multiple: true,
            });
          }}
        >
          test
        </Button>
        <Button
          data-testid="emit-button-center"
          onClick={() => {
            Toast({
              message: '提示内容',
              position: 'center',
              multiple: true,
            });
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button-top'));
    fireEvent.click(getByTestId('emit-button-center'));
    expect(document.body.innerHTML.split('提示内容').length - 1).toBe(2);
  });

  it('should render with custom icon', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast({
            icon: (
              <ErrorCircleFilledBoldIcon
                data-testid="test-icon"
                htmlColor="#ffffff"
              />
            ),
            message: '提示内容',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(getByTestId('test-icon')).toBeInTheDocument();
  });

  it('should forbid click event on background page', () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast({
            message: '提示内容',
            disableClick: true,
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    const backdropDom = document.body.querySelector(`.bui-backdrop`);
    expect(backdropDom).toBeTruthy();
  });

  it('should call onClose when Toast hidden', async () => {
    const fn = vi.fn();
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Toast({
            message: '提示内容',
            onClose: fn,
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    await act(async () => {
      await vi.runAllTimers();
    });
    expect(fn).toBeCalled();
  });

  it('should destory all Toast when call clear function', async () => {
    const { getByTestId } = render(
      <>
        <Button
          data-testid="emit-button1"
          onClick={() => {
            Toast({
              message: '提示内容',
              multiple: true,
              duration: 0,
            });
          }}
        >
          test
        </Button>
        <Button
          data-testid="emit-button2"
          onClick={() => {
            Toast({
              message: '提示内容',
              multiple: true,
              duration: 0,
            });
          }}
        >
          test
        </Button>
        <Button
          data-testid="emit-button3"
          onClick={() => {
            Toast.clear();
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button1'));
    fireEvent.click(getByTestId('emit-button2'));
    expect(document.body.innerHTML.split('提示内容').length - 1).toBe(2);
    fireEvent.click(getByTestId('emit-button3'));
    await act(async () => {
      await vi.runAllTimers();
    });
    expect(document.body.innerHTML.includes('提示内容')).toBeTruthy();
  });
  it.each(['warning', 'loading', 'success', 'fail', 'clear'])(
    'should support basic api with useToast',
    async (type) => {
      const toast = toastHook?.[0];
      if (type === 'clear') {
        render(
          <>
            <Button
              onClick={() => {
                toast({
                  message: '提示内容',
                  multiple: true,
                  duration: 0,
                });
              }}
            >
              button one
            </Button>
            <Button
              onClick={() => {
                toast({
                  message: '提示内容',
                  multiple: true,
                  duration: 0,
                });
              }}
            >
              button two
            </Button>
            <Button
              onClick={() => {
                toast.clear();
              }}
            >
              button three
            </Button>
          </>,
        );
        fireEvent.click(screen.getByText('button one'));
        fireEvent.click(screen.getByText('button two'));
        expect(document.body.innerHTML.split('提示内容').length - 1).toBe(0);
        fireEvent.click(screen.getByText('button three'));
        await act(async () => {
          await vi.runAllTimers();
        });
        expect(document.body.innerHTML.includes('提示内容')).toBeFalsy();
      } else {
        render(
          <Button
            onClick={() => {
              toast[type](`校验${type}`);
            }}
          >
            {`${type} button`}
          </Button>,
        );
        fireEvent.click(screen.getByText(`${type} button`));
        setTimeout(() => {
          expect(
            document.body.querySelector('.bui-svg-icon'),
          ).toBeInTheDocument();
          const toastDom = document.body.querySelector(`.${rootClass}`);
          expect(toastDom.innerHTML.includes(`校验${type}`)).toBeTruthy();
        });
      }
    },
  );
});
