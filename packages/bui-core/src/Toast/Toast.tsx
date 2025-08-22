import React, { useImperativeHandle } from 'react';
import clsx from 'clsx';
import {
  ErrorCircleFilledBoldIcon,
  AccessTimeCircleFilledBoldIcon,
  AlertCircleFilledBoldIcon,
  SuccessCircleFilledBoldIcon,
} from '@bifrostui/icons';
import Fade from '../Fade';
import { useTheme } from '../ThemeProvider';
import { ToastProps, ToastRef } from './Toast.types';
import './index.less';

const prefixCls = 'bui-toast';

const ToastComponent = React.forwardRef<ToastRef, ToastProps>((props, ref) => {
  const {
    className,
    style,
    open,
    type,
    icon,
    message,
    position = 'center',
    disableClick = false,
    theme,
    ...others
  } = props;
  const themeConfig = useTheme(theme);
  useImperativeHandle(ref, () => {
    return { theme: themeConfig };
  }, []);

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
    <Fade {...others} in={open} appear={false} unmountOnExit>
      <div
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
  );
});

ToastComponent.displayName = 'BuiToast';

export default ToastComponent;
