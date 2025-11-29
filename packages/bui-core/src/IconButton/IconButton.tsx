import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';
import * as React from 'react';
import { IconButtonProps } from './IconButton.types';
import './index.less';

const prefixCls = 'bui-icon-btn';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      color,
      disabled = false,
      size = 'medium',
      variant = 'default',
      shape = 'circular',
      // 无障碍属性
      'aria-label': ariaLabel,
      ...others
    } = props;

    const isContainedVariant = variant === 'contained';

    let childrenDisplayName = '';
    const firstChild = React.Children.toArray(children)?.[0];
    if (React.isValidElement(firstChild)) {
      childrenDisplayName =
        (firstChild.type as any)?.type?.render?.displayName || '';
    }

    // 无障碍功能：应用ARIA属性
    const accessibilityProps = {
      // 描述性文本标签。默认取第一个children的displayName
      'aria-label': ariaLabel || childrenDisplayName,
      // 禁用状态
      'aria-disabled': disabled,
    };

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
        {...accessibilityProps}
        {...others}
      >
        {/* 小程序中svgIcon不能继承父元素的color */}
        {isMini && React.isValidElement(children)
          ? React.cloneElement(children, {
              ...(!isContainedVariant && {
                color: children.props?.color || color,
                htmlColor:
                  children.props?.htmlColor || 'var(--bui-color-fg-subtle)',
              }),
              ...(isContainedVariant && {
                htmlColor:
                  children.props?.htmlColor || 'var(--bui-color-white)',
              }),
            })
          : children}
      </button>
    );
  },
);

IconButton.displayName = 'BuiIconButton';

export default IconButton;
