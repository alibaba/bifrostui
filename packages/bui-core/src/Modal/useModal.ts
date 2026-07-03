/* eslint-disable @typescript-eslint/no-explicit-any */
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

function getFocusTarget(root: HTMLElement): HTMLElement {
  return root.querySelector<HTMLElement>('[data-bui-focusable]') ?? root;
}

export interface UseModalParameters {
  container?: Element | (() => Element | null) | null;
  contentRef?: React.RefObject<HTMLElement>;
  disableScrollLock?: boolean;
  disableAutoFocus?: boolean;
  disableRestoreFocus?: boolean;
  onClose?: (
    event: React.SyntheticEvent<Element, Event>,
    detail?: { from: 'backdropClick' | 'escapeKeyDown' },
  ) => void;
  open: boolean;
  rootRef?: React.Ref<Element>;
  children?: React.ReactElement;
  [key: string]: any;
}

interface IClickEvent extends React.MouseEvent<HTMLDivElement> {
  target: any;
  currentTarget: any;
}

export interface UseModalReturnValue {
  getRootProps: (
    otherHandlers?: Record<string, any>,
  ) => Record<string, unknown>;
  getBackdropProps: (
    otherHandlers?: Record<string, any>,
  ) => Record<string, unknown>;
  getTransitionProps: () => {
    onEnter: () => void;
    onEntered: () => void;
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
    contentRef,
    disableScrollLock = false,
    disableAutoFocus = false,
    disableRestoreFocus = false,
    onClose,
    open,
    rootRef,
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

  const activated = useRef(false);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const disableRestoreFocusRef = useRef(disableRestoreFocus);
  disableRestoreFocusRef.current = disableRestoreFocus;
  const openRef = useRef(open);
  openRef.current = open;

  let ariaHiddenProp = true;
  if (
    parameters['aria-hidden'] === 'false' ||
    parameters['aria-hidden'] === false
  ) {
    ariaHiddenProp = false;
  }
  const ariaHiddenPropRef = useRef(ariaHiddenProp);
  ariaHiddenPropRef.current = ariaHiddenProp;

  const getModal = () => {
    if (modalRef.current && mountNodeRef.current) {
      modal.current.modalRef = modalRef.current;
      modal.current.mount = mountNodeRef.current;
    }
    return modal.current;
  };

  const isTopModal = useCallback(() => modalManager.isTopModal(getModal()), []);

  const handleMounted = useCallback(() => {
    modalManager.mount(getModal(), {
      disableScrollLock,
    });
  }, [disableScrollLock]);

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || document.body;

    modalManager.add(getModal(), resolvedContainer);

    // If the modal ref exists, mount it
    if (modalRef.current) {
      handleMounted();
    }
  });

  const handlePortalRef = useCallback(
    (node: HTMLElement | null) => {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (openRef.current && isTopModal()) {
        handleMounted();
      } else if (modalRef.current) {
        ariaHidden(modalRef.current, ariaHiddenPropRef.current);
      }
    },
    [isTopModal, handleMounted],
  );

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

  // Effect #1: activated gate — controls whether focus management is active
  useEffect(() => {
    if (open && contentRef?.current) {
      activated.current = !disableAutoFocus;
    }
  }, [disableAutoFocus, open, contentRef]);

  const handleAutoFocus = useCallback(() => {
    if (!contentRef?.current || !activated.current) return;

    const doc = contentRef.current.ownerDocument || document;
    if (contentRef.current.contains(doc.activeElement)) return;

    const focusTarget = getFocusTarget(contentRef.current);
    if (!focusTarget.hasAttribute('tabIndex')) {
      focusTarget.setAttribute('tabIndex', '-1');
    }
    focusTarget.focus({ preventScroll: true });
  }, [contentRef]);

  // Effect #2: autoFocus on open + restoreFocus on close
  useEffect(() => {
    if (!open || !contentRef?.current) {
      return undefined;
    }

    const doc = contentRef.current.ownerDocument || document;

    if (!lastFocusedElement.current) {
      lastFocusedElement.current = doc.activeElement as HTMLElement;
    }

    if (!hasTransition) {
      handleAutoFocus();
    }

    return () => {
      if (!disableRestoreFocusRef.current && lastFocusedElement.current) {
        if (typeof lastFocusedElement.current.focus === 'function') {
          lastFocusedElement.current.focus({ preventScroll: true });
        }
        lastFocusedElement.current = null;
      }
    };
  }, [open, contentRef, hasTransition, handleAutoFocus]);

  const createHandleBackdropClick =
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
      (children?.props as any)?.onEnter?.();
    };

    const handleEntered = () => {
      handleAutoFocus();
      (children?.props as any)?.onEntered?.();
    };

    const handleExited = () => {
      setExited(true);
      (children?.props as any)?.onExited?.();
    };

    return {
      onEnter: handleEnter,
      onEntered: handleEntered,
      onExited: handleExited,
    };
  }, [children, handleAutoFocus]);

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
