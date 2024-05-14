import clsx from 'clsx';
import React from 'react';
import { BadgeProps } from './Badge.types';
import './Badge.less';

const prefixCls = 'bui-badge';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    className,
    onClick,
    children,
    content,
    color,
    maxCount,
    variant,
    type,
    ...others
  } = props;

  const displayValue =
    Number(content) > Number(maxCount)
      ? `${maxCount}+`
      : type !== 'dot' && content;

  return (
    <div
      className={clsx(`${prefixCls}`, className, {
        [`${prefixCls}-position`]: children,
      })}
      onClick={onClick}
      ref={ref}
      {...others}
    >
      {(content || type === 'dot') && (
        <div
          className={clsx(
            `${prefixCls}-${color}`,
            `${prefixCls}-${variant}`,
            `${prefixCls}-${type}`,
          )}
        >
          {displayValue}
        </div>
      )}
      {children}
    </div>
  );
});

Badge.displayName = 'BuiBadge';
Badge.defaultProps = {
  color: 'primary',
  variant: 'contained',
  type: 'standard',
};

export default Badge;
