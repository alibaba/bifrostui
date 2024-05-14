import clsx from 'clsx';
import React from 'react';
import './Button.less';
import { ButtonProps } from './Button.types';

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
      size,
      variant,
      color,
      disabled,
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
Button.defaultProps = {
  size: 'medium',
  variant: 'outlined',
  color: 'default',
  disabled: false,
};

export default Button;
