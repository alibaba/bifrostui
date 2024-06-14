import {
  AlertCircleFilledIcon,
  CloseIcon,
  ErrorCircleFilledIcon,
  SuccessCircleFilledIcon,
  VolumeUpOutlinedIcon,
} from '@bifrostui/icons';
import clsx from 'clsx';
import React from 'react';
import { isMini } from '@bifrostui/utils';
import { IconButton } from '../IconButton';
import { AlertActionProps, AlertIconProps, AlertProps } from './Alert.types';
import './index.less';

const prefixCls = 'bui-alert';

// 处理左边icon的展示逻辑
const iconMap = {
  danger: (
    <ErrorCircleFilledIcon
      color="danger"
      className={`${prefixCls}-default-icon`}
    />
  ),
  success: (
    <SuccessCircleFilledIcon
      color="success"
      className={`${prefixCls}-default-icon`}
    />
  ),
  warning: (
    <AlertCircleFilledIcon
      color="warning"
      className={`${prefixCls}-default-icon`}
    />
  ),
  info: (
    <AlertCircleFilledIcon
      color="info"
      className={`${prefixCls}-default-icon`}
    />
  ),
  primary: (
    <VolumeUpOutlinedIcon
      color="primary"
      className={`${prefixCls}-default-icon`}
    />
  ),
};

// 警示框 icon
const AlertIcon = (props: AlertIconProps) => {
  const { icon, color } = props;
  if (!icon) return null;

  return (
    <div className={clsx(`${prefixCls}-icon`)}>
      {isMini && React.isValidElement(icon)
        ? React.cloneElement(icon, {
            ...{ color: icon.props?.color || color },
          })
        : icon}
    </div>
  );
};

// 警告框操作区
const AlertAction = (props: AlertActionProps) => {
  const { color, action, onClose } = props;
  if (!action && !onClose) return null;
  if (action) {
    return (
      <div className={`${prefixCls}-action`} onClick={onClose}>
        {action}
      </div>
    );
  }

  return (
    <IconButton
      className={`${prefixCls}-action`}
      color={color}
      onClick={onClose}
    >
      <CloseIcon />
    </IconButton>
  );
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    color,
    className,
    icon,
    variant,
    marquee,
    children,
    action,
    onClose,
    onClick,
    ...others
  } = props;

  return (
    <div
      className={clsx(prefixCls, className, [
        `${prefixCls}-${variant}-${color}`,
      ])}
      onClick={onClick}
      ref={ref}
      {...others}
    >
      <AlertIcon icon={icon === true ? iconMap[color] : icon} color={color} />
      {marquee ? (
        <div className={`${prefixCls}-marquee`}>
          <div
            className={clsx(`${prefixCls}-content`, [
              `${prefixCls}-marquee-content`,
            ])}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className={`${prefixCls}-content`}>{children}</div>
      )}

      <AlertAction action={action} onClose={onClose} color={color} />
    </div>
  );
});

Alert.displayName = 'BuiAlert';
Alert.defaultProps = {
  icon: true,
  color: 'primary',
  variant: 'standard',
};

export default Alert;
