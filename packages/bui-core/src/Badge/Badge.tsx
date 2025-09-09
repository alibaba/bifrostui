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
    showZero = false,
    visibility = true,
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

  // 优化displayValue逻辑
  let displayValue: React.ReactNode = null;
  if (
    type !== 'dot' &&
    !Number.isNaN(Number(content)) &&
    typeof max === 'number'
  ) {
    displayValue = Number(content) > Number(max) ? `${max}+` : content;
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

  // 无障碍功能：生成可访问性标签
  const getAccessibilityLabel = (): string | undefined => {
    // 如果用户提供了自定义标签，直接使用
    if (ariaLabel) return ariaLabel;

    // 如果是装饰性的或者被隐藏，不需要标签
    if (decorative || ariaHidden) return undefined;

    // 根据类型和内容生成标签
    if (type === 'dot') {
      return '有新通知';
    }

    if (displayValue !== null) {
      const numValue = Number(displayValue);
      if (!Number.isNaN(numValue)) {
        if (numValue === 0) return '无通知';
        if (numValue === 1) return '1条通知';
        if (String(displayValue).includes('+')) {
          return `超过${String(displayValue).replace('+', '')}条通知`;
        }
        return `${displayValue}条通知`;
      }
      return `通知：${displayValue}`;
    }

    return undefined;
  };

  // 无障碍功能：确定最终的ARIA属性
  const getAriaAttributes = () => {
    const accessibilityLabel = getAccessibilityLabel();

    // 如果是装饰性的，设置为presentation角色并隐藏
    if (decorative) {
      return {
        role: 'presentation',
        'aria-hidden': true,
      };
    }

    // 如果明确设置为隐藏
    if (ariaHidden) {
      return {
        'aria-hidden': true,
      };
    }

    return {
      role,
      'aria-label': accessibilityLabel,
      'aria-describedby': ariaDescribedby,
    };
  };

  // 获取ARIA属性
  const ariaAttributes = getAriaAttributes();

  // 处理键盘事件以支持无障碍访问
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      // 先转换为unknown再转换为目标类型
      onClick(event as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <div
      className={clsx(`${prefixCls}`, className, {
        [`${prefixCls}-position`]: children,
      })}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
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
