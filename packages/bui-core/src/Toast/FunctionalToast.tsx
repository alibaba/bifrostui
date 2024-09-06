import { createRoot } from 'react-dom/client';
import React, { useCallback, useEffect, useState } from 'react';
import ToastView from './Toast';
import {
  ToastOptions,
  ToastProps,
  ToastType,
  ToastInstance,
  ToastReturnType,
} from './Toast.types';

const toastCloses = [];

/**
 * 参数格式化，支持直接传文案
 */
const formatProps = (props) => {
  if (typeof props === 'string') {
    return { message: props };
  }
  return props;
};

/**
 * Toast组件容器
 */
const createContainer = (
  getContainer?: HTMLElement | (() => HTMLElement) | undefined,
): HTMLElement => {
  const container =
    typeof getContainer === 'function' ? getContainer() : getContainer;

  return container || document.body;
};

/**
 * 销毁全部Toast
 */
const destroyAll = () => {
  let closeToast = toastCloses.pop();
  while (closeToast) {
    closeToast();
    closeToast = toastCloses.pop();
  }
};

const functionalToast = (props: ToastProps) => {
  const options = {
    duration: 2000,
    position: 'center',
    allowMultiple: false,
    closeOnClickBackdrop: false,
    ...(formatProps(props) || {}),
  };

  const rootWrapper = document.createElement('div');
  const container = createContainer();
  container.appendChild(rootWrapper);

  const instance: ToastReturnType = {
    close: () => null,
  };

  const ToastComponent = () => {
    const { duration, allowMultiple, ...others } = options;
    const [open, setOpen] = useState(false);
    let timer;

    const close = useCallback(() => {
      setOpen(false);
      if (rootWrapper.parentNode) {
        rootWrapper.parentNode.removeChild(rootWrapper);
      }
    }, [rootWrapper]);

    useEffect(() => {
      setOpen(true);
      if (!allowMultiple) destroyAll();
      toastCloses.push(close);

      if (duration !== 0 && typeof duration === 'number') {
        timer = setTimeout(close, duration);
      }

      return () => {
        clearTimeout(timer);
      };
    }, []);

    // 关闭当前Toast
    instance.close = close;

    return (
      <ToastView
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        {...others}
      />
    );
  };

  const root = createRoot(rootWrapper);
  root.render(<ToastComponent />);

  return instance;
};

['warning', 'loading', 'success', 'fail'].forEach((methodName: ToastType) => {
  functionalToast[methodName] = (options: ToastOptions) =>
    functionalToast({
      type: methodName,
      ...(formatProps(options) || {}),
    });
});
functionalToast.clear = () => {
  // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
  setTimeout(() => {
    destroyAll();
  });
};

const Toast = functionalToast as unknown as ToastInstance;

export default Toast;
