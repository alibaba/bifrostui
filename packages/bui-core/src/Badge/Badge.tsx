import clsx from 'clsx';
import React from 'react';
import { BadgeProps } from './Badge.types';
import './index.less';

const prefixCls = 'bui-badge';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    className,
    onClick,
    children,
    content,
    color = 'primary',
    max,
    maxCount, // 兼容老属性
    showZero = false,
    visibility = true,
    variant = 'contained',
    type = 'standard',
    ...others
  } = props;

  // 兼容maxCount，优先使用max
  const realMax = typeof max === 'number' ? max : maxCount;
  if (maxCount !== undefined && max === undefined) {
    // eslint-disable-next-line no-console
    console.warn('[Badge] maxCount属性即将废弃，请使用max替代');
  }

  // 优化displayValue逻辑
  let displayValue: React.ReactNode = null;
  if (
    type !== 'dot' &&
    !isNaN(Number(content)) &&
    typeof realMax === 'number'
  ) {
    displayValue = Number(content) > Number(realMax) ? `${realMax}+` : content;
  } else if (type !== 'dot') {
    displayValue = content;
  }

  // visibility为false时不渲染
  if (!visibility) return null;

  // 判断是否需要渲染badge
  const shouldShowBadge = () => {
    if (type === 'dot') return true;
    if (content === 0 && !showZero) return false;
    return !!content || content === 0;
  };

  return (
    <div
      className={clsx(`${prefixCls}`, className, {
        [`${prefixCls}-position`]: children,
      })}
      onClick={onClick}
      ref={ref}
      {...others}
    >
      {shouldShowBadge() && (
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

export default Badge;
