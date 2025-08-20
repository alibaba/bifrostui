import clsx from 'clsx';
import React from 'react';
import { ButtonProps } from './Button.types';
import './index.less';

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
      // 无障碍属性
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-keyshortcuts': ariaKeyshortcuts,
      'aria-busy': ariaBusy,
      'aria-readonly': ariaReadonly,
      'aria-required': ariaRequired,
      ...others
    } = props;

    // 构建无障碍属性对象
    const accessibilityProps = {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-keyshortcuts': ariaKeyshortcuts,
      'aria-busy': ariaBusy,
      'aria-readonly': ariaReadonly,
      'aria-required': ariaRequired,
    };

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
        {...accessibilityProps}
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
