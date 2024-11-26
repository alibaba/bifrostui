import React from 'react';
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
    jest.useFakeTimers();
    renderHook(() => {
      toastHook = Toast.useToast();
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
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
    toast.close();
    await act(async () => {
      await jest.runAllTimers();
    });
    expect(
      document.body.querySelector(`.${rootClass}`),
    ).not.toBeInTheDocument();
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
              allowMultiple: true,
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
              allowMultiple: true,
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
    const toastDom = document.body.querySelector(`.${rootClass}`);
    expect(toastDom.parentNode).toHaveStyle(
      'position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: var(--bui-z-index-toast);',
    );
  });

  it('should call onClose when Toast hidden', async () => {
    const fn = jest.fn();
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
      await jest.runAllTimers();
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
              allowMultiple: true,
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
              allowMultiple: true,
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
      await jest.runAllTimers();
    });
    expect(document.body.innerHTML.includes('提示内容')).toBeFalsy();
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
                  allowMultiple: true,
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
                  allowMultiple: true,
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
        expect(document.body.innerHTML.split('提示内容').length - 1).toBe(2);
        fireEvent.click(screen.getByText('button three'));
        await act(async () => {
          await jest.runAllTimers();
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
        expect(
          document.body.querySelector('.bui-svg-icon'),
        ).toBeInTheDocument();
        const toastDom = document.body.querySelector(`.${rootClass}`);
        expect(toastDom.innerHTML.includes(`校验${type}`)).toBeTruthy();
      }
    },
  );
});
