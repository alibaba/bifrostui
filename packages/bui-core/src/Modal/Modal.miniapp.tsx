import clsx from 'clsx';
import React from 'react';
import { View, ViewProps } from '@tarojs/components';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import { useModal } from './useModal';
import { ModalProps } from './Modal.types';
import './index.less';

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

    const {
      getRootProps,
      getBackdropProps,
      getTransitionProps,
      exited,
      hasTransition,
    } = useModal({
      ...props,
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
        return React.cloneElement(children, {
          ...transitionProps,
          tabIndex: -1,
          ...children.props,
        });
      }

      return children;
    };

    return (
      <Portal container={container} disablePortal={disablePortal}>
        <View
          catchMove={!disableScrollLock}
          {...rootProps}
          onClick={(event) => {
            onClick?.(event);
          }}
        >
          {!hideBackdrop && <Backdrop {...backdropProps} />}
          {renderChildren()}
        </View>
      </Portal>
    );
  },
);

Modal.displayName = 'BuiModal';

export default Modal;
