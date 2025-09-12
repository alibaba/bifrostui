import React, { useMemo } from 'react';

export interface UseBadgeA11yProps {
  displayValue: React.ReactNode;
  type?: 'dot' | 'standard' | 'bubble';
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: 'status' | 'img' | 'presentation';
  'aria-hidden'?: boolean;
}

export interface UseBadgeA11yResult {
  accessibilityLabel: string | undefined;
  ariaAttributes: {
    role?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-hidden'?: boolean;
  };
}

/**
 * Badge 无障碍功能的自定义 Hook
 * 负责处理可访问性标签和ARIA属性
 */
export const useBadgeA11y = ({
  displayValue,
  type = 'standard',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  role = 'status',
  'aria-hidden': ariaHidden = false,
}: UseBadgeA11yProps): UseBadgeA11yResult => {
  // 生成可访问性标签
  const accessibilityLabel = useMemo((): string | undefined => {
    // 如果用户提供了自定义标签，直接使用
    if (ariaLabel) return ariaLabel;

    // 如果被隐藏，不需要标签
    if (ariaHidden) return undefined;

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
  }, [ariaLabel, ariaHidden, type, displayValue]);

  // 确定最终的ARIA属性
  const ariaAttributes = useMemo(() => {
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
  }, [ariaHidden, role, accessibilityLabel, ariaDescribedby]);

  return {
    accessibilityLabel,
    ariaAttributes,
  };
};
