import React, { useCallback, useEffect, useState } from 'react';
import { getRootElement, render, unmount } from '@bifrostui/utils';
import Popup from './Dialog';
import {
  DialogPromise,
  DialogInstance,
  PromptOptions,
  ConfirmOptions,
  DialogOptions,
  Dispatch,
} from './Dialog.types';

const { isValidElement, Component } = React;

/**
 * 参数格式化，支持直接传文案
 */
const formatProps = (props) => {
  if (typeof props === 'string' || isValidElement(props)) {
    return { message: props };
  }
  return props;
};

const DialogGenerator = (options: DialogOptions) => {
  const rootWrapper = document.createElement('div');
  const rootElement = getRootElement();
  rootElement.appendChild(rootWrapper);

  const DialogComponent = () => {
    const { onConfirm, onCancel, ...others } = options;
    const [visible, setVisible] = useState(false);

    const close = useCallback(() => {
      setVisible(false);
      setTimeout(() => {
        const unmountRes = unmount(rootWrapper);
        if (unmountRes && rootWrapper.parentNode) {
          rootWrapper.parentNode.removeChild(rootWrapper);
        }
      }, 150);
    }, [rootWrapper]);

    useEffect(() => {
      setVisible(true);
    }, []);

    const dispatch: Dispatch = async (action, val) => {
      if (action === true) {
        try {
          await onConfirm?.(val);
        } catch (error) {
          /* empty */
        }
      } else if (action === false) {
        try {
          await onCancel?.();
        } catch (error) {
          /* empty */
        }
      }
      close();
    };

    return (
      <Popup
        {...others}
        open={visible}
        onOk={(val) => dispatch(true, val)}
        onClose={() => dispatch(false)}
      />
    );
  };

  return render(<DialogComponent />, rootWrapper);
};

const Dialog: DialogInstance = (
  props: DialogOptions | string,
): DialogPromise => {
  const options = formatProps(props);
  const { onConfirm, onCancel, ...rest } = options;
  return new Promise((resolve) => {
    DialogGenerator({
      ...rest,
      onConfirm: async (val) => {
        await onConfirm?.(val);
        if (rest.type === 'prompt') resolve(val);
        else resolve(true);
      },
      onCancel: async () => {
        await onCancel?.();
        resolve(false);
      },
    });
  });
};

Dialog.prototype = Component.prototype;

const confirm = (options: ConfirmOptions) => {
  return Dialog({
    type: 'confirm',
    ...formatProps(options),
  });
};

const prompt = (options: PromptOptions) => {
  return Dialog({
    type: 'prompt',
    ...formatProps(options),
  });
};
const useDialog = () => {
  const holderRef = React.useRef(null);
  const wrapAPI = {
    confirm: (options: ConfirmOptions) =>
      Dialog({
        type: 'confirm',
        ...formatProps(options),
        theme: holderRef.current.theme,
      }),
    prompt: (options: PromptOptions) =>
      Dialog({
        type: 'promptF',
        ...formatProps(options),
        theme: holderRef.current.theme,
      }),
  };
  return [wrapAPI, <Popup key="dialog-holder" ref={holderRef} />];
};

Dialog.confirm = confirm;
Dialog.prompt = prompt;
Dialog.useDialog = useDialog;

export default Dialog;
