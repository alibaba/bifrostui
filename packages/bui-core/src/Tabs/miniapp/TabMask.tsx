import React from 'react';
import clsx from 'clsx';
import { tabMaskClass, tabMaskLeftClass, tabMaskRightClass } from '../classes';

export interface TabMaskProps {
  /** 位置：左侧或右侧 */
  position: 'left' | 'right';
  /** 当前滚动位置 */
  scrollLeft: number;
  /** 容器宽度 */
  containerWidth: number;
  /** 滚动区域总宽度 */
  scrollWidth: number;
}

const TabMask: React.FC<TabMaskProps> = ({
  position,
  scrollLeft,
  containerWidth,
  scrollWidth,
}) => {
  // 计算是否应该显示遮罩
  const shouldShow = React.useMemo(() => {
    if (position === 'left') {
      return scrollLeft > 0;
    }
    // position === 'right'
    const rightRange = Math.abs(scrollWidth - (scrollLeft + containerWidth));
    // 右侧遮罩rightRange在0-1范围内即可隐藏，处理浏览器兼容问题
    return rightRange > 1;
  }, [position, scrollLeft, containerWidth, scrollWidth]);

  return (
    <div
      className={clsx(
        tabMaskClass,
        position === 'left' ? tabMaskLeftClass : tabMaskRightClass,
      )}
      style={{
        opacity: shouldShow ? 1 : 0,
        transition: 'opacity 0.1s ease-in-out',
      }}
    />
  );
};

TabMask.displayName = 'BuiTabsMask';

// 使用 React.memo 优化，避免不必要的重新渲染
export default React.memo(TabMask, (prevProps, nextProps) => {
  // 只在关键 props 变化时重新渲染
  return (
    prevProps.position === nextProps.position &&
    prevProps.scrollLeft === nextProps.scrollLeft &&
    prevProps.containerWidth === nextProps.containerWidth &&
    prevProps.scrollWidth === nextProps.scrollWidth
  );
});
