import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { render, unmount, getRootContainer } from '@bifrostui/utils';
import { ThemeProps } from '../ThemeProvider/ThemeProvider.types';
import ToastView from './Toast';
import {
  ToastOptions,
  ToastProps,
  ToastType,
  ToastInstance,
  ToastReturnType,
} from './Toast.types';

const defaultProps: ToastProps = {
  duration: 2000,
  position: 'center',
  allowMultiple: false,
  disableClick: false,
};

let toastCloses: Array<() => void> = [];

// 参数格式化，支持直接传文案
const formatProps = (props: ToastProps | string): ToastProps => {
  return typeof props === 'string' ? { message: props } : props;
};

// 销毁全部Toast
const destroyAll = () => {
  let closeToast = toastCloses.pop();
  while (closeToast) {
    closeToast();
    closeToast = toastCloses.pop();
  }
};

const Toast = (props: ToastProps | string): ToastReturnType => {
  const options: ToastProps = {
    ...defaultProps,
    ...formatProps(props),
  };

  const instance: ToastReturnType = {
    close: () => null,
  };
  const rootWrapper = document.createElement('div');
  if (options.disableClick) {
    Object.assign(rootWrapper.style, {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 'var(--bui-z-index-toast)',
    });
  }

  const rootElement = getRootContainer(options?.container);
  rootElement.appendChild(rootWrapper);

  const ToastComponent = () => {
    const { duration, allowMultiple, onClose, ...others } = options;
    const [open, setOpen] = useState(false);
    const fadeTimeout = {
      enter: 350,
      exit: 150,
    };
    const timerRef = useRef<number | null>(null);

    const close = useCallback(() => {
      setOpen(false);
      setTimeout(() => {
        const unmountRes = unmount(rootWrapper);
        if (unmountRes && rootWrapper.parentNode) {
          rootWrapper.parentNode.removeChild(rootWrapper);
        }
      }, fadeTimeout.exit);
      onClose?.();
    }, [rootWrapper, onClose]);

    useEffect(() => {
      setOpen(true);
      if (!allowMultiple) destroyAll();
      toastCloses.push(close);

      if (duration !== 0 && typeof duration === 'number') {
        timerRef.current = window.setTimeout(() => {
          close();
          // 不允许共存的场景下，当前Toast关闭后，应清空toastCloses
          if (!allowMultiple) {
            toastCloses = [];
          }
        }, duration);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, []);

    // 关闭当前Toast
    instance.close = close;

    return (
      <ToastView
        {...others}
        open={open}
        timeout={fadeTimeout}
        onClose={close}
      />
    );
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
    destroyAll();
  });
};

const UseToastComponent = forwardRef<ToastReturnType, ToastProps>(
  (props, ref) => {
    const options: ToastProps = {
      ...defaultProps,
      ...formatProps(props),
    };

    const instance: ToastReturnType = {
      close: () => null,
    };

    useImperativeHandle(ref, () => {
      return {
        close: instance.close,
      };
    });

    const rootWrapper = document.createElement('div');
    if (options.disableClick) {
      Object.assign(rootWrapper.style, {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 'var(--bui-z-index-toast)',
      });
    }

    const rootElement = getRootContainer(options?.container);
    rootElement.appendChild(rootWrapper);

    const { duration, allowMultiple, onClose, ...others } = options;
    const [open, setOpen] = useState(false);
    const fadeTimeout = {
      enter: 350,
      exit: 150,
    };
    const timerRef = useRef<number | null>(null);

    const close = useCallback(() => {
      setOpen(false);
      setTimeout(() => {
        const unmountRes = unmount(rootWrapper);
        if (unmountRes && rootWrapper.parentNode) {
          rootWrapper.parentNode.removeChild(rootWrapper);
        }
      }, fadeTimeout.exit);
      onClose?.();
    }, [rootWrapper, onClose]);

    useEffect(() => {
      setOpen(true);
      if (!allowMultiple) destroyAll();
      toastCloses.push(close);

      if (duration !== 0 && typeof duration === 'number') {
        timerRef.current = window.setTimeout(() => {
          close();
          // 不允许共存的场景下，当前Toast关闭后，应清空toastCloses
          if (!allowMultiple) {
            toastCloses = [];
          }
        }, duration);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, []);

    // 关闭当前Toast
    instance.close = close;

    return (
      <ToastView
        {...others}
        open={open}
        timeout={fadeTimeout}
        onClose={close}
      />
    );
  },
);
UseToastComponent.displayName = 'UseToastComponent';

const useToast = () => {
  const holderRef = useRef<{ theme: ThemeProps } | null>(null);
  const [elements, setElements] = useState<React.ReactElement[]>([]);
  const toastComponentRef = useRef<ToastReturnType>();

  const createToast = (options: ToastProps) => {
    return new Promise((resolve) => {
      const key = `dialog-${Date.now()}-${Math.random()}`;

      const onProxyClose = () => {
        options?.onClose?.();
        setElements((prev) => prev.filter((el) => el.key !== key));
      };

      const toastElement = (
        <UseToastComponent
          key={key}
          {...options}
          open
          onClose={onProxyClose}
          ref={toastComponentRef}
        />
      );
      setElements((prev) => [...prev, toastElement]);

      // 返回close函数
      setTimeout(() => {
        resolve(toastComponentRef.current);
      });
    });
  };

  const hookToast = (options: ToastOptions) =>
    createToast({
      ...formatProps(options),
      theme: holderRef.current?.theme,
    });
  (['warning', 'loading', 'success', 'fail'] as ToastType[]).forEach(
    (methodName) => {
      hookToast[methodName] = (options: ToastOptions) =>
        createToast({
          type: methodName,
          ...formatProps(options),
          theme: holderRef.current?.theme,
        });
    },
  );

  hookToast.clear = () => {
    // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
    setTimeout(() => {
      destroyAll();
    });
  };

  return [hookToast, <>{elements}</>];
};
Toast.useToast = useToast;

export default Toast as ToastInstance;
