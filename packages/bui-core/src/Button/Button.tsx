import clsx from 'clsx';
import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.less';

const prefixCls = 'bui-btn';

const ButtonIcon: React.FC<{
  children: React.ReactNode;
  iconPosition: 'end' | 'start';
}> = ({ children, iconPosition }) => {
  return (
    <span className={`${prefixCls}-icon-${iconPosition}`}>{children}</span>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      startIcon,
      endIcon,
      size = 'medium',
      variant = 'outlined',
      color,
      disabled = false,
      ...others
    } = props;
    return (
      <button
        type="button"
        className={clsx(
          prefixCls,
          `${prefixCls}-${variant}`,
          `${prefixCls}-${size}`,
          {
            [`${prefixCls}-${color}`]: color,
            [`${prefixCls}-disabled`]: disabled,
          },
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...others}
      >
        {startIcon && <ButtonIcon iconPosition="start">{startIcon}</ButtonIcon>}
        {children}
        {endIcon && <ButtonIcon iconPosition="end">{endIcon}</ButtonIcon>}
      </button>
    );
  },
);

Button.displayName = 'BuiButton';

export default Button;
