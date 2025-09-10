import React, { useMemo, useCallback } from 'react';

export interface UseBadgeA11yProps {
  displayValue: React.ReactNode;
  type?: 'dot' | 'standard' | 'bubble';
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: 'status' | 'img' | 'presentation';
  'aria-hidden'?: boolean;
  decorative?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface UseBadgeA11yResult {
  accessibilityLabel: string | undefined;
  ariaAttributes: {
    role?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-hidden'?: boolean;
  };
  handleKeyDown:
    | ((event: React.KeyboardEvent<HTMLDivElement>) => void)
    | undefined;
}

/**
 * Badge 无障碍功能的自定义 Hook
 * 负责处理可访问性标签、ARIA属性和键盘事件
 */
export const useBadgeA11y = ({
  displayValue,
  type = 'standard',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  role = 'status',
  'aria-hidden': ariaHidden = false,
  decorative = false,
  onClick,
}: UseBadgeA11yProps): UseBadgeA11yResult => {
  // 生成可访问性标签
  const accessibilityLabel = useMemo((): string | undefined => {
    // 如果用户提供了自定义标签，直接使用
    if (ariaLabel) return ariaLabel;

    // 如果是装饰性的或者被隐藏，不需要标签
    if (decorative || ariaHidden) return undefined;

    // 根据类型和内容生成标签
    if (type === 'dot') {
      return '有新通知';
    }

    if (displayValue !== null && displayValue !== undefined) {
      // 首先检查是否包含+号（max模式）
      if (String(displayValue).includes('+')) {
        return `超过${String(displayValue).replace('+', '')}条通知`;
      }

      const numValue = Number(displayValue);
      if (!Number.isNaN(numValue)) {
        if (numValue === 0) return '无通知';
        if (numValue === 1) return '1条通知';
        return `${displayValue}条通知`;
      }
      return `通知：${displayValue}`;
    }

    return undefined;
  }, [ariaLabel, decorative, ariaHidden, type, displayValue]);

  // 确定最终的ARIA属性
  const ariaAttributes = useMemo(() => {
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
  }, [decorative, ariaHidden, role, accessibilityLabel, ariaDescribedby]);

  // 处理键盘事件以支持无障碍访问
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        // 先转换为unknown再转换为目标类型
        onClick(event as unknown as React.MouseEvent<HTMLDivElement>);
      }
    },
    [onClick],
  );

  return {
    accessibilityLabel,
    ariaAttributes,
    handleKeyDown: onClick ? handleKeyDown : undefined,
  };
};

