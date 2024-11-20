import { render, unmount, getRootElement } from '@bifrostui/utils';
import React, { useCallback, useEffect, useState } from 'react';
import ToastView from './Toast';
import {
  ToastOptions,
  ToastProps,
  ToastType,
  ToastInstance,
  ToastReturnType,
} from './Toast.types';

let toastCloses = [];

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
 * 销毁全部Toast
 */
const destroyAll = () => {
  let closeToast = toastCloses.pop();
  while (closeToast) {
    closeToast();
    closeToast = toastCloses.pop();
  }
};

const functionalToast = (props: ToastProps | string) => {
  const options = {
    duration: 2000,
    position: 'center',
    allowMultiple: false,
    disableClick: false,
    ...formatProps(props),
  };

  const instance: ToastReturnType = {
    close: () => null,
  };
  const rootWrapper = document.createElement('div');
  if (options.disableClick) {
    const styles = {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 'var(--bui-z-index-toast)',
    };
    Object.keys(styles).forEach((property) => {
      rootWrapper.style[property] = styles[property];
    });
  }

  const rootElement = getRootElement();
  rootElement.appendChild(rootWrapper);

  const ToastComponent = () => {
    const { duration, allowMultiple, onClose, ...others } = options;
    const [open, setOpen] = useState(false);
    let timer;
    const fadeTimeout = {
      enter: 350,
      exit: 150,
    };

    const close = useCallback(() => {
      setOpen(false);
      setTimeout(() => {
        const unmountRes = unmount(rootWrapper);
        if (unmountRes && rootWrapper.parentNode) {
          rootWrapper.parentNode.removeChild(rootWrapper);
        }
      }, fadeTimeout.exit);
      onClose?.();
    }, [rootWrapper]);

    useEffect(() => {
      setOpen(true);
      if (!allowMultiple) destroyAll();
      toastCloses.push(close);

      if (duration !== 0 && typeof duration === 'number') {
        timer = setTimeout(() => {
          close();
          // 不允许共存的场景下，当前Toast关闭后，应清空toastCloses
          if (!allowMultiple) {
            toastCloses = [];
          }
        }, duration);
      }

      return () => {
        clearTimeout(timer);
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
 * Toast.warning(options: ToastOptions)
 * Toast.loading(options: ToastOptions)
 * Toast.success(options: ToastOptions)
 * Toast.fail(options: ToastOptions)
 */
['warning', 'loading', 'success', 'fail'].forEach((methodName: ToastType) => {
  functionalToast[methodName] = (options: ToastOptions) =>
    functionalToast({
      type: methodName,
      ...formatProps(options),
    });
});

/**
 * 清除所有Toast
 * Toast.clear()
 */
functionalToast.clear = () => {
  // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
  setTimeout(() => {
    destroyAll();
  });
};

/**
 * 适配主题定制等场景下，静态方法获取不到context 上下文
 */
const useToast = () => {
  const holderRef = React.useRef(null);

  /**
   * Toast.warning(options: ToastOptions)
   * Toast.loading(options: ToastOptions)
   * Toast.success(options: ToastOptions)
   * Toast.fail(options: ToastOptions)
   */
  ['warning', 'loading', 'success', 'fail'].forEach((methodName: ToastType) => {
    functionalToast[methodName] = (options: ToastOptions) =>
      functionalToast({
        type: methodName,
        ...formatProps(options),
        theme: holderRef.current.theme,
      });
  });

  /**
   * 清除所有Toast
   * Toast.clear()
   */
  functionalToast.clear = () => {
    // 处理toast还未弹出就立刻销毁的情况，将销毁放到下一个时间循环中，避免销毁失败
    setTimeout(() => {
      destroyAll();
    });
  };
  const wrapAPI = functionalToast;

  return [wrapAPI, <ToastView key="toast-holder" ref={holderRef} />];
};
functionalToast.useToast = useToast;

const Toast = functionalToast as ToastInstance;

export default Toast;
