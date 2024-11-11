import clsx from 'clsx';
import React, { useImperativeHandle } from 'react';
import {
  ErrorCircleFilledBoldIcon,
  AccessTimeCircleFilledBoldIcon,
  AlertCircleFilledBoldIcon,
  SuccessCircleFilledBoldIcon,
} from '@bifrostui/icons';
import { ToastProps, ToastRef } from './Toast.types';
import Fade from '../Fade';
import { useTheme } from '../ThemeProvider';
import './Toast.less';

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
    fail: <ErrorCircleFilledBoldIcon htmlColor="#ffffff" />,
    loading: <AccessTimeCircleFilledBoldIcon htmlColor="#ffffff" />,
    warning: <AlertCircleFilledBoldIcon htmlColor="#ffffff" />,
    success: <SuccessCircleFilledBoldIcon htmlColor="#ffffff" />,
  };
  const iconDom = iconMap[type] || icon;

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
      >
        {iconDom}
        {message}
      </div>
    </Fade>
  );
});

ToastComponent.displayName = 'BuiToast';

export default ToastComponent;
