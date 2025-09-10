import React, { useMemo } from 'react';

export interface UseBadgeDisplayProps {
  content?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  type?: 'dot' | 'standard' | 'bubble';
}

export interface UseBadgeDisplayResult {
  displayValue: React.ReactNode;
  shouldShowBadge: boolean;
}

/**
 * Badge 显示逻辑的自定义 Hook
 * 负责计算显示值和判断是否应该显示徽章
 */
export const useBadgeDisplay = ({
  content,
  max,
  showZero = false,
  type = 'standard',
}: UseBadgeDisplayProps): UseBadgeDisplayResult => {
  // 计算显示值
  const displayValue = useMemo((): React.ReactNode => {
    if (type === 'dot') {
      return null;
    }

    if (!Number.isNaN(Number(content)) && typeof max === 'number') {
      return Number(content) > Number(max) ? `${max}+` : content;
    }

    return content;
  }, [content, max, type]);

  // 判断是否应该显示徽章
  const shouldShowBadge = useMemo((): boolean => {
    if (type === 'dot') {
      return true;
    }

    if (content === 0 && !showZero) {
      return false;
    }

    return !!content || content === 0;
  }, [content, showZero, type]);

  return {
    displayValue,
    shouldShowBadge,
  };
};

