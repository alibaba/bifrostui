import React from 'react';
import clsx from 'clsx';
import {
  ErrorCircleFilledBoldIcon,
  AccessTimeCircleFilledBoldIcon,
  AlertCircleFilledBoldIcon,
  SuccessCircleFilledBoldIcon,
} from '@bifrostui/icons';
import Fade from '../Fade';
import { ToastProps } from './Toast.types';
import './index.less';

const prefixCls = 'bui-toast';

const ToastComponent = React.forwardRef<
  HTMLDivElement,
  Omit<Omit<ToastProps, 'onClose'>, 'container'>
>((props, ref) => {
  const {
    className,
    style,
    open,
    type,
    icon,
    message,
    position = 'center',
    disableClick = false,
    ...others
  } = props;

  const iconMap = {
    fail: (
      <ErrorCircleFilledBoldIcon
        htmlColor="var(--bui-color-white)"
        aria-hidden="true"
      />
    ),
    loading: (
      <AccessTimeCircleFilledBoldIcon
        htmlColor="var(--bui-color-white)"
        aria-hidden="true"
      />
    ),
    warning: (
      <AlertCircleFilledBoldIcon
        htmlColor="var(--bui-color-white)"
        aria-hidden="true"
      />
    ),
    success: (
      <SuccessCircleFilledBoldIcon
        htmlColor="var(--bui-color-white)"
        aria-hidden="true"
      />
    ),
  };
  const iconDom = iconMap[type] || icon;

  // 根据类型设置无障碍role和aria-live
  let role: 'status' | 'alert' = 'status';
  let ariaLive: 'polite' | 'assertive' = 'polite';
  if (type === 'fail' || type === 'warning') {
    role = 'alert';
    ariaLive = 'assertive';
  }

  return (
    <>
      <div className={clsx({ [`${prefixCls}-backdrop`]: disableClick })} />
      <Fade {...others} in={open} appear={false} unmountOnExit>
        <div
          ref={ref}
          className={clsx(
            prefixCls,
            `${prefixCls}-${position}`,
            {
              [`${prefixCls}-icon`]: !!iconDom,
              [`${prefixCls}-allow-click`]: !disableClick,
            },
            className,
          )}
          style={style}
          role={role}
          aria-live={ariaLive}
          aria-atomic="true"
        >
          {iconDom}
          {message}
        </div>
      </Fade>
    </>
  );
});

ToastComponent.displayName = 'BuiToast';

export default ToastComponent;
