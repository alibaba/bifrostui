import { blockTouch, isMini, useForkRef } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './Modal.less';
import { ModalProps } from './Modal.types';

const prefixCls = 'bui-modal';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    className,
    open,
    BackdropProps,
    children,
    container,
    disablePortal,
    disableScrollLock,
    hideBackdrop,
    onClose,
    keepMounted,
    ...others
  } = props;
  const modalRef = React.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const [backdropExited, setBackDropExited] = useState(hideBackdrop || !open);
  const mounted = open || !backdropExited || keepMounted;

  const handleBackdropClick = (event) => {
    if (isMini && event.target.id !== event.currentTarget.id) {
      return;
    }
    if (!isMini && event.target !== event.currentTarget) {
      return;
    }

    if (onClose) {
      onClose(event, { from: 'backdrop' });
    }
  };

  useEffect(() => {
    let cleanup;
    if (!isMini && !disableScrollLock)
      setTimeout(() => {
        try {
          if (open && modalRef.current) {
            cleanup = blockTouch(modalRef.current);
          }
        } catch {
          /* empty */
        }
      }, 0);
    return () => {
      cleanup?.();
    };
  }, [open, disableScrollLock]);

  if (!mounted) {
    return null;
  }

  return (
    <Portal container={container} disablePortal={disablePortal}>
      <div className={clsx(prefixCls, className)} ref={handleRef} {...others}>
        {!hideBackdrop ? (
          <Backdrop
            open={open}
            onClick={handleBackdropClick}
            onEnter={() => setBackDropExited(false)}
            onExited={() => setBackDropExited(true)}
            {...BackdropProps}
            className={clsx(`${prefixCls}-backdrop`, BackdropProps?.className)}
          />
        ) : null}
        {(open || keepMounted) && children}
      </div>
    </Portal>
  );
});

Modal.displayName = 'BuiModal';
Modal.defaultProps = {
  open: false,
  disablePortal: false,
  disableScrollLock: false,
  hideBackdrop: false,
};

export default Modal;
