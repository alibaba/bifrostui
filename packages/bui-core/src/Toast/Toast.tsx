import clsx from 'clsx';
import React from 'react';
import {
  ErrorCircleFilledBoldIcon,
  AccessTimeCircleFilledBoldIcon,
  AlertCircleFilledBoldIcon,
  SuccessCircleFilledBoldIcon,
} from '@bifrostui/icons';
import { ToastProps } from './Toast.types';
import Modal from '../Modal';
import Fade from '../Fade';
import './Toast.less';

const prefixCls = 'bui-toast';

const ToastComponent = React.forwardRef<HTMLDivElement, ToastProps>(
  (props, ref) => {
    const {
      className,
      style,
      type,
      message,
      position = 'center',
      icon,
      FadeProps,
      closeOnClickBackdrop = false,
      onClose,
      ...others
    } = props;

    const iconMap = {
      fail: <ErrorCircleFilledBoldIcon htmlColor="#ffffff" />,
      loading: <AccessTimeCircleFilledBoldIcon htmlColor="#ffffff" />,
      warning: <AlertCircleFilledBoldIcon htmlColor="#ffffff" />,
      success: <SuccessCircleFilledBoldIcon htmlColor="#ffffff" />,
    };
    const iconDom = iconMap[type] || icon;

    return (
      <Modal
        className={clsx(prefixCls, className)}
        ref={ref}
        style={style}
        onClose={closeOnClickBackdrop && onClose}
        hideBackdrop
        disableScrollLock
        disablePortal
        {...others}
      >
        <Fade appear in timeout={1000} {...FadeProps}>
          <div
            className={clsx(
              `${prefixCls}-content`,
              `${prefixCls}-content-${position}`,
              {
                [`${prefixCls}-content-icon`]: !!iconDom,
              },
            )}
          >
            {iconDom}
            {message}
          </div>
        </Fade>
      </Modal>
    );
  },
);

ToastComponent.displayName = 'BuiToast';

export default ToastComponent;
