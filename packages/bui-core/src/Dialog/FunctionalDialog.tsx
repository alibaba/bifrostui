import React, { useCallback, useState } from 'react';
import { getRootContainer, render, unmount, isMini } from '@bifrostui/utils';
import Dialog from './Dialog';
import {
  DialogPromise,
  PromptOptions,
  ConfirmOptions,
  AlertOptions,
  DialogOptions,
  Dispatch,
  DialogFunction,
} from './Dialog.types';

const { isValidElement } = React;

/**
 * 参数格式化，支持直接传文案
 */
const formatProps = (props) => {
  if (typeof props === 'string' || isValidElement(props)) {
    return { content: props };
  }
  return props;
};

const DialogGenerator = (options: DialogOptions) => {
  const dialogFragment = isMini
    ? document.createElement('div')
    : document.createDocumentFragment();
  const rootElement = getRootContainer(options?.container);
  rootElement.appendChild(dialogFragment);

  const DialogWrapper = () => {
    const { onOk, onCancel, ...rest } = options;

    const close = useCallback(() => {
      setTimeout(() => {
        const unmountRes = unmount(dialogFragment);
        if (unmountRes && dialogFragment.parentNode) {
          dialogFragment.parentNode.removeChild(dialogFragment);
        }
      }, 150);
    }, [dialogFragment]);

    const dispatch: Dispatch = async (action, e, val) => {
      if (action === true) {
        await onOk?.(e, { value: val });
      } else if (action === false) {
        await onCancel?.(e);
      }
      close();
    };

    return (
      <Dialog
        {...rest}
        open
        onOk={(e, { value }) => dispatch(true, e, value)}
        onCancel={(e) => dispatch(false, e)}
      />
    );
  };

  return render(<DialogWrapper />, dialogFragment);
};

const FunctionalDialog = (props: DialogOptions | string): DialogPromise => {
  const options = formatProps(props);
  const { onOk, onCancel, ...rest } = options;

  return new Promise((resolve) => {
    DialogGenerator({
      ...rest,
      onOk: async (e, { value: val }) => {
        await onOk?.(e, { value: val });
        if (rest.type === 'prompt') resolve(val);
        else resolve(true);
      },
      onCancel: async (e) => {
        await onCancel?.(e);
        if (rest.type === 'prompt') resolve(null);
        else resolve(false);
      },
    });
  });
};

const confirm = (options: ConfirmOptions): Promise<boolean> => {
  return FunctionalDialog({
    type: 'confirm',
    ...formatProps(options),
  }) as Promise<boolean>;
};

const prompt = (options: PromptOptions): Promise<string> => {
  return FunctionalDialog({
    type: 'prompt',
    ...formatProps(options),
  }) as Promise<string>;
};

const alert = (options: AlertOptions): Promise<boolean> => {
  return FunctionalDialog({
    type: 'alert',
    ...formatProps(options),
  }) as Promise<boolean>;
};

const useDialog = () => {
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  const createDialog = useCallback((config: DialogOptions): DialogPromise => {
    return new Promise((resolve) => {
      const key = `dialog-${Date.now()}-${Math.random()}`;

      const destroy = () => {
        setElements((prev) => prev.filter((el) => el.key !== key));
      };

      const onInternalOk = async (
        e: React.SyntheticEvent,
        data: { value: string },
      ) => {
        await config.onOk?.(e, data);
        if (config.type === 'prompt') resolve(data.value);
        else resolve(true);
        destroy();
      };

      const onInternalCancel = async (e: React.SyntheticEvent) => {
        await config.onCancel?.(e);
        if (config.type === 'prompt') resolve(null);
        else resolve(false);
        destroy();
      };

      const dialogElement = (
        <Dialog
          key={key}
          {...config}
          open
          onOk={onInternalOk}
          onCancel={onInternalCancel}
        />
      );

      setElements((prev) => [...prev, dialogElement]);
    });
  }, []);

  const wrapAPI = {} as DialogFunction;

  wrapAPI.confirm = useCallback(
    (options: ConfirmOptions) => {
      return createDialog({
        type: 'confirm',
        ...formatProps(options),
      }) as Promise<boolean>;
    },
    [createDialog],
  );

  wrapAPI.prompt = useCallback(
    (options: PromptOptions) => {
      return createDialog({
        type: 'prompt',
        ...formatProps(options),
      }) as Promise<string>;
    },
    [createDialog],
  );

  wrapAPI.alert = useCallback(
    (options: AlertOptions) => {
      return createDialog({
        type: 'alert',
        ...formatProps(options),
      }) as Promise<boolean>;
    },
    [createDialog],
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  const contextHolder = <>{elements}</>;

  return [wrapAPI, contextHolder] as [DialogFunction, React.JSX.Element];
};

FunctionalDialog.confirm = confirm;
FunctionalDialog.prompt = prompt;
FunctionalDialog.alert = alert;
FunctionalDialog.useDialog = useDialog;

export default FunctionalDialog;
