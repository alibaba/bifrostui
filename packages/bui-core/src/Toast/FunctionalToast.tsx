/* eslint-disable react/require-default-props */

import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  FC,
  MutableRefObject,
} from 'react';
import { render, unmount, getRootContainer } from '@bifrostui/utils';
import Portal from '../Portal';
import ToastView from './Toast';
import {
  ToastOptions,
  ToastProps,
  ToastType,
  ToastInstance,
  ToastReturnType,
} from './Toast.types';

interface ToastElement {
  key: string;
  open: boolean;
  props: Partial<ToastProps> & { onEnd?: () => void };
  ref?: MutableRefObject<HTMLDivElement>;
}

const defaultProps: ToastProps = {
  duration: 2000,
  position: 'center',
  multiple: false,
  disableClick: false,
};

const toastCloses: Array<() => void> = [];

// 参数格式化，支持直接传文案
const formatProps = (props: ToastProps | string): ToastProps => {
  return typeof props === 'string' ? { message: props } : props;
};

// 销毁全部Toast
const destroyAll = (closes: Array<() => void>) => {
  do {
    const closeToast = closes.pop();
    closeToast?.();
  } while (closes.length > 0);
};

const Toast = (props: ToastProps | string): ToastReturnType => {
  const options: ToastProps = {
    ...defaultProps,
    ...formatProps(props),
  };

  const instance: ToastReturnType = {
    close: () => null,
  };
  const { container, ...restOptions } = options;

  const rootWrapper = document.createElement('div');
  const rootElement = getRootContainer(container);
  rootElement.appendChild(rootWrapper);

  const ToastComponent = () => {
    const { duration, multiple, onClose, onExited, ...others } = restOptions;
    const [open, setOpen] = useState(true);
    const timerRef = useRef<number | null>(null);

    const close = useCallback(() => {
      setOpen(false);
      onClose?.();
    }, [rootWrapper, onClose]);

    useEffect(() => {
      if (!multiple) destroyAll(toastCloses);
      toastCloses.push(close);

      if (duration !== 0 && typeof duration === 'number') {
        timerRef.current = window.setTimeout(() => {
          close();
          if (!multiple) {
            const index = toastCloses.indexOf(close);
            if (index > -1) {
              toastCloses.splice(index, 1);
            }
          }
        }, duration);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, []);

    const onProxyExited = () => {
      onExited?.();

      // 卸载DOM
      const unmountRes = unmount(rootWrapper);
      if (unmountRes && rootWrapper.parentNode) {
        rootWrapper.parentNode.removeChild(rootWrapper);
      }
    };

    // 关闭当前Toast
    instance.close = close;

    return <ToastView {...others} open={open} onExited={onProxyExited} />;
  };

  render(<ToastComponent />, rootWrapper);

  return instance;
};

/**
 * 扩展方法
 * Toast.warning(options: ToastOptions)
 * Toast.loading(options: ToastOptions)
 * Toast.success(options: ToastOptions)
 * Toast.fail(options: ToastOptions)
 */
(['warning', 'loading', 'success', 'fail'] as ToastType[]).forEach(
  (methodName) => {
    Toast[methodName] = (options: ToastOptions) =>
      Toast({
        type: methodName,
        ...formatProps(options),
      });
  },
);

// 清除所有Toast
Toast.clear = () => {
  // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
  setTimeout(() => {
    destroyAll(toastCloses);
  });
};

const UseToastComponent: FC<
  Omit<ToastProps, 'ref'> & {
    domRef?: MutableRefObject<HTMLDivElement>;
    onSetOpenFalse?: () => void;
    onEnd?: () => void;
    destroyAllCloses: () => void;
    addClose: (close: () => void) => void;
    removeClose: (close: () => void) => void;
  }
> = (props) => {
  const {
    domRef,
    onExited,
    onSetOpenFalse,
    onEnd,
    destroyAllCloses,
    addClose,
    removeClose,
    open,
    ...restProps
  } = props;
  const options: ToastProps = {
    ...defaultProps,
    ...formatProps(restProps),
  };
  const { duration, multiple, onClose, container, ...others } = options;
  const timerRef = useRef<number | null>(null);

  const close = () => {
    onSetOpenFalse?.();
    onClose?.();
  };

  useEffect(() => {
    if (!multiple) destroyAllCloses();
    addClose(close);

    if (duration !== 0 && typeof duration === 'number') {
      timerRef.current = window.setTimeout(() => {
        close();
        // 不允许共存的场景下，当前Toast关闭后，应清空toastCloses
        if (!multiple) {
          removeClose(close);
        }
      }, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onProxyExited = () => {
    onEnd?.();
    onExited?.();
  };

  return (
    <Portal container={container}>
      <ToastView
        {...others}
        open={open}
        onExited={onProxyExited}
        ref={domRef}
      />
    </Portal>
  );
};
UseToastComponent.displayName = 'UseToastComponent';

const useToast = () => {
  const [elements, setElements] = useState<ToastElement[]>([]);
  const hookToastClosesRef = useRef<Array<() => void>>([]);

  const createToast = (options: ToastProps) => {
    const key = `toast-${Date.now()}-${Math.random()}`;
    const { ref, ...restOptions } = options;

    const instance: ToastReturnType = {
      close: () => {
        // 通过改变open状态来关闭Toast，而不是直接从数组中移除
        setElements((prev) =>
          prev.map((element) =>
            element.key === key ? { ...element, open: false } : element,
          ),
        );
      },
    };
    const handleAnimationEnd = () => {
      // 动画结束后从elements数组中移除组件
      setElements((prev) => prev.filter((element) => element.key !== key));
    };

    const toastElement: ToastElement = {
      key,
      open: true,
      props: {
        ...restOptions,
        onEnd: handleAnimationEnd,
      },
      ref,
    };

    setElements((prev) => [...prev, toastElement]);

    return instance;
  };

  const hookToast = (options: ToastOptions): ToastReturnType =>
    createToast({
      ...formatProps(options),
    });
  (['warning', 'loading', 'success', 'fail'] as ToastType[]).forEach(
    (methodName) => {
      hookToast[methodName] = (options: ToastOptions): ToastReturnType =>
        createToast({
          type: methodName,
          ...formatProps(options),
        });
    },
  );

  hookToast.clear = () => {
    // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
    setTimeout(() => {
      destroyAll(hookToastClosesRef.current);
    });
  };

  const destroyAllCloses = () => {
    destroyAll(hookToastClosesRef.current);
  };

  // 直接渲染
  const renderedElements = elements.map((element) => {
    const onSetOpenFalse = () => {
      setElements((prev) =>
        prev.map((el) =>
          el.key === element.key ? { ...el, open: false } : el,
        ),
      );
    };
    return (
      <UseToastComponent
        key={element.key}
        {...element.props}
        open={element.open}
        onSetOpenFalse={onSetOpenFalse}
        domRef={element.ref}
        destroyAllCloses={destroyAllCloses}
        addClose={(close) => hookToastClosesRef.current.push(close)}
        removeClose={(close) => {
          const index = hookToastClosesRef.current.indexOf(close);
          if (index > -1) {
            hookToastClosesRef.current.splice(index, 1);
          }
        }}
      />
    );
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return [hookToast, <>{renderedElements}</>];
};

Toast.useToast = useToast;

export default Toast as ToastInstance;
