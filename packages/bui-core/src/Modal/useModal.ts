import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForkRef, useEventCallback } from '@bifrostui/utils';
import { ariaHidden, modalManager } from './ModalManager';

function getContainer(
  container?: Element | (() => Element | null) | null,
): Element | null {
  if (typeof container === 'function') {
    return container();
  }
  return container || null;
}

export interface UseModalParameters {
  container?: Element | (() => Element | null) | null;
  disableScrollLock?: boolean;
  onClose?: (
    event: React.SyntheticEvent<Element, Event>,
    detail?: { from: 'backdropClick' | 'escapeKeyDown' },
  ) => void;
  open: boolean;
  rootRef?: React.Ref<Element>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface IClickEvent extends React.MouseEvent<HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentTarget: any;
}

export interface UseModalReturnValue {
  getRootProps: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    otherHandlers?: Record<string, any>,
  ) => Record<string, unknown>;
  getBackdropProps: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    otherHandlers?: Record<string, any>,
  ) => Record<string, unknown>;
  getTransitionProps: () => {
    onEnter: () => void;
    onExited: () => void;
  };
  rootRef: React.RefCallback<Element>;
  portalRef: React.RefCallback<HTMLElement>;
  exited: boolean;
  hasTransition: boolean;
}

function getHasTransition(children: React.ReactElement): boolean {
  return Object.prototype.hasOwnProperty.call(children?.props || {}, 'in');
}

export function useModal(parameters: UseModalParameters): UseModalReturnValue {
  const {
    container,
    disableScrollLock = false,
    onClose,
    open,
    rootRef,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children,
  } = parameters;

  const modal = useRef<{
    modalRef: HTMLElement | null;
    mount: HTMLElement | null;
  }>({
    modalRef: null,
    mount: null,
  });
  const modalRef = useRef<HTMLElement>(null);
  const mountNodeRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = useState(!open);
  const hasTransition = getHasTransition(children);

  let ariaHiddenProp = true;
  if (
    parameters['aria-hidden'] === 'false' ||
    parameters['aria-hidden'] === false
  ) {
    ariaHiddenProp = false;
  }

  const getModal = () => {
    if (modalRef.current && mountNodeRef.current) {
      modal.current.modalRef = modalRef.current;
      modal.current.mount = mountNodeRef.current;
    }
    return modal.current;
  };

  const isTopModal = () => modalManager.isTopModal(getModal());

  const handleMounted = () => {
    modalManager.mount(getModal(), {
      disableScrollLock,
    });
  };

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || document.body;

    modalManager.add(getModal(), resolvedContainer);

    // 如果modal ref存在，则挂载
    if (modalRef.current) {
      handleMounted();
    }
  });

  const handlePortalRef = useEventCallback((node: HTMLElement | null) => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });

  const handleClose = useCallback(() => {
    modalManager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);

  useEffect(() => {
    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open, handleClose, hasTransition, handleOpen]);

  const createHandleBackdropClick =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (backdropHandlers: Record<string, React.EventHandler<any>> = {}) =>
      (event: IClickEvent) => {
        backdropHandlers.onClick?.(event);

        if (event.target !== event.currentTarget) {
          return;
        }

        if (onClose) {
          onClose(event, { from: 'backdropClick' });
        }
      };

  const getRootProps = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (rootHandlers?: Record<string, any>) => {
      return {
        role: 'presentation',
        ...rootHandlers,
        ref: handleRef,
      };
    },
    [handleRef],
  );

  const getBackdropProps = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (backdropHandlers: Record<string, any> = {}) => {
      const propsEventHandlers = {
        onClick: createHandleBackdropClick(backdropHandlers),
      };

      // Create a copy to avoid mutating the original object
      const cleanedHandlers = { ...backdropHandlers };
      delete cleanedHandlers.onClick;

      return {
        'aria-hidden': true,
        ...cleanedHandlers,
        ...propsEventHandlers,
        open,
      };
    },
    [createHandleBackdropClick, open],
  );

  const getTransitionProps = useCallback(() => {
    const handleEnter = () => {
      setExited(false);
      children?.props?.onEnter?.();
    };

    const handleExited = () => {
      setExited(true);
      children?.props?.onExited?.();
    };

    return {
      onEnter: handleEnter,
      onExited: handleExited,
    };
  }, [children]);

  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    exited,
    hasTransition,
  };
}
