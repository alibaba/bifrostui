import clsx from 'clsx';
import React from 'react';
import { BadgeProps } from './Badge.types';
import { useBadgeDisplay } from './hooks/useBadgeDisplay';
import { useBadgeA11y } from './hooks/useBadgeA11y';
import './index.less';

const prefixCls = 'bui-badge';

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    className,
    children,
    content,
    color = 'primary',
    max,
    showZero = false,
    invisible = false,
    variant = 'contained',
    type = 'standard',
    // 无障碍功能相关属性
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    role = 'status',
    'aria-hidden': ariaHidden = false,
    decorative = false,
    ...others
  } = props;

  // 使用显示逻辑 Hook
  const { displayValue, shouldShowBadge } = useBadgeDisplay({
    content,
    max,
    showZero,
    type,
  });

  // 使用无障碍功能 Hook
  const { ariaAttributes } = useBadgeA11y({
    displayValue,
    type,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    role,
    'aria-hidden': ariaHidden,
    decorative,
  });

  // invisible为true时不渲染
  if (invisible) return null;

  return (
    <div
      className={clsx(`${prefixCls}`, className, {
        [`${prefixCls}-position`]: children,
      })}
      ref={ref}
      {...others}
    >
      {shouldShowBadge && (
        <div
          className={clsx(
            `${prefixCls}-${color}`,
            `${prefixCls}-${variant}`,
            `${prefixCls}-${type}`,
          )}
          // 无障碍功能：应用ARIA属性
          {...ariaAttributes}
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
