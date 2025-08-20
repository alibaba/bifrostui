import { useForkRef, useEventCallback, isMini } from '@bifrostui/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IClickEvent } from '@bifrostui/types';
import { modalManager, ariaHidden } from './ModalManager';
import { ModalProps } from './Modal.types';

export interface UseModalParameters {
  disableScrollLock?: boolean;
  children?: React.ReactElement;
  onClose?: ModalProps['onClose'];
  open: boolean;
  rootRef?: React.Ref<HTMLDivElement>;
}

export interface UseModalReturnValue {
  getRootProps: (otherHandlers?: Record<string, any>) => {
    ref: React.RefCallback<HTMLDivElement>;
    [key: string]: any;
  };
  getBackdropProps: (otherHandlers?: Record<string, any>) => {
    'aria-hidden'?: boolean;
    open?: boolean;
    [key: string]: any;
  };
  getTransitionProps: () => {
    onEnter?: () => void;
    onExited?: () => void;
  };
  rootRef: React.RefCallback<HTMLDivElement>;
  portalRef: React.RefCallback<HTMLElement>;
  exited: boolean;
  hasTransition: boolean;
}

function getHasTransition(children: UseModalParameters['children']): boolean {
  return children
    ? Object.prototype.hasOwnProperty.call(children.props, 'in')
    : false;
}

export function useModal(parameters: UseModalParameters): UseModalReturnValue {
  const {
    disableScrollLock = false,
    children,
    onClose,
    open,
    rootRef,
  } = parameters;

  const modal = useRef<{ modalRef: HTMLDivElement; mount: HTMLElement }>(
    {} as any,
  );
  const mountNodeRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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
    modal.current.modalRef = modalRef.current!;
    modal.current.mount = mountNodeRef.current!;
    return modal.current;
  };

  const isTopModal = () => modalManager.isTopModal(getModal());

  const handleMounted = () => {
    modalManager.mount(getModal(), {
      disableScrollLock,
    });
  };

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = document.body;

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
      if (!isMini) {
        handleClose();
      }
    };
  }, [isMini, handleClose]);

  useEffect(() => {
    if (isMini) return;
    if (open) {
      handleOpen();
    } else if (!hasTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, handleOpen, isMini]);

  const createHandleBackdropClick =
    (otherHandlers: Record<string, React.EventHandler<any>>) =>
    (event: IClickEvent) => {
      otherHandlers.onClick?.(event);
      // @ts-ignore
      if (isMini && event.target.id !== event.currentTarget.id) {
        return;
      }
      if (!isMini && event.target !== event.currentTarget) {
        return;
      }

      if (onClose) {
        onClose(event, { from: 'backdropClick' });
      }
    };

  const getRootProps = useCallback(
    (otherHandlers?: Record<string, any>) => {
      return {
        role: 'presentation',
        ...otherHandlers,
        ref: handleRef,
      };
    },
    [handleRef],
  );

  const getBackdropProps = useCallback(
    (otherHandlers?: Record<string, any>) => {
      const propsEventHandlers = {
        onClick: createHandleBackdropClick(otherHandlers),
      };
      // 删除已处理的事件处理器
      delete otherHandlers.onClick;

      return {
        'aria-hidden': true,
        ...otherHandlers,
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
  }, [handleClose]);

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
