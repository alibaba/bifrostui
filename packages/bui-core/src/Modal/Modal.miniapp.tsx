import { useForkRef } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useState } from 'react';
import { View, ViewProps } from '@tarojs/components';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './Modal.less';
import { ModalProps } from './Modal.types';

const prefixCls = 'bui-modal';

const Modal = React.forwardRef<HTMLDivElement, ViewProps & ModalProps>(
  (props, ref) => {
    const {
      className,
      open = false,
      BackdropProps,
      children,
      container,
      disablePortal = false,
      disableScrollLock = false,
      hideBackdrop = false,
      onClose,
      onClick,
      keepMounted,
      ...others
    } = props;
    const modalRef = React.useRef(null);
    const handleRef = useForkRef(modalRef, ref);
    const [backdropExited, setBackDropExited] = useState(hideBackdrop || !open);
    const mounted = open || !backdropExited || keepMounted;

    const handleBackdropClick = (event) => {
      if (event.target.id !== event.currentTarget.id) {
        return;
      }

      if (onClose) {
        onClose(event, { from: 'backdrop' });
      }
    };

    if (!mounted) {
      return null;
    }

    return (
      <Portal container={container} disablePortal={disablePortal}>
        <View
          className={clsx(prefixCls, className)}
          ref={handleRef}
          catchMove={!disableScrollLock}
          onClick={(event) => {
            onClick?.(event);
          }}
          {...others}
        >
          {!hideBackdrop ? (
            <Backdrop
              open={open}
              onClick={handleBackdropClick}
              onEnter={() => setBackDropExited(false)}
              onExited={() => setBackDropExited(true)}
              {...BackdropProps}
              className={clsx(
                `${prefixCls}-backdrop`,
                BackdropProps?.className,
              )}
            />
          ) : null}
          {(open || keepMounted) && children}
        </View>
      </Portal>
    );
  },
);

Modal.displayName = 'BuiModal';

export default Modal;
