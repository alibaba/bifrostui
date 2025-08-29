import clsx from 'clsx';
import React from 'react';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import { ModalProps } from './Modal.types';
import { useModal } from './useModal';
import './index.less';

const prefixCls = 'bui-modal';

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
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
    keepMounted = false,
    ...others
  } = props;

  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    exited,
    hasTransition,
  } = useModal({
    ...props,
    container,
    disableScrollLock,
    children: React.isValidElement(children) ? children : undefined,
    open,
    onClose,
    rootRef: ref,
  });

  // 如果不保持挂载且未打开，则不渲染
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const rootProps = getRootProps({
    ...others,
    className: clsx(
      prefixCls,
      {
        [`${prefixCls}-hidden`]: !open && exited,
      },
      className,
    ),
  });
  const backdropProps = getBackdropProps({
    ...BackdropProps,
    className: clsx(`${prefixCls}-backdrop`, BackdropProps?.className),
  });
  const transitionProps = hasTransition ? getTransitionProps() : {};

  // 渲染children，如果是React元素则克隆并添加transition props
  const renderChildren = () => {
    if (!children) {
      return null;
    }

    if (React.isValidElement(children)) {
      const childProps = (children.props as any) || {};
      return React.cloneElement(children, {
        tabIndex: -1,
        ...childProps,
        ...transitionProps,
      });
    }

    return children;
  };

  return (
    <Portal container={container} disablePortal={disablePortal} ref={portalRef}>
      <div {...rootProps}>
        {!hideBackdrop && <Backdrop {...backdropProps} />}
        {renderChildren()}
      </div>
    </Portal>
  );
});

Modal.displayName = 'BuiModal';

export default Modal;
