import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';
import React from 'react';
import { IconButtonProps } from './IconButton.types';
import './IconButton.less';

const prefixCls = 'bui-icon-btn';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      color,
      disabled,
      size,
      variant,
      shape,
      ...others
    } = props;

    const isContainedVariant = variant === 'contained';

    return (
      <button
        type="button"
        className={clsx(
          prefixCls,
          `${prefixCls}-${size}`,
          `${prefixCls}-${variant}`,
          `${prefixCls}-${shape}`,
          {
            [`${prefixCls}-${color}`]: color,
            [`${prefixCls}-disabled`]: disabled,
          },
          className,
        )}
        ref={ref}
        {...others}
      >
        {/* 小程序中svgIcon不能继承父元素的color */}
        {isMini && React.isValidElement(children)
          ? React.cloneElement(children, {
              ...(!isContainedVariant && {
                color: children.props?.color || color,
                htmlColor: children.props?.htmlColor || '#959aa5',
              }),
              ...(isContainedVariant && {
                htmlColor: children.props?.htmlColor || '#fff',
              }),
            })
          : children}
      </button>
    );
  },
);

IconButton.displayName = 'BuiIconButton';
IconButton.defaultProps = {
  size: 'medium',
  variant: 'default',
  shape: 'circular',
  disabled: false,
};

export default IconButton;
