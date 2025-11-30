import React, { useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { throttle } from '@bifrostui/utils';

const rootClass = 'bui-tabs';

export interface TabMaskProps {
  /** Tabs 容器的引用，用于监听滚动 */
  tabsContainerRef: React.RefObject<HTMLDivElement>;
  /** 位置：左侧或右侧 */
  position: 'left' | 'right';
}

const TabMask: React.FC<TabMaskProps> = ({ tabsContainerRef, position }) => {
  const maskRef = useRef<HTMLDivElement>(null);

  const updateMaskOpacity = useMemo(
    () =>
      throttle(
        () => {
          const tabsEl = tabsContainerRef.current;
          const mask = maskRef.current;
          if (!tabsEl || !mask) return;

          const { scrollLeft, scrollWidth, offsetWidth } = tabsEl;

          let shouldShow = false;
          if (position === 'left') {
            shouldShow = scrollLeft > 0;
          } else {
            // position === 'right'
            const rightRange = Math.abs(
              scrollWidth - (scrollLeft + offsetWidth),
            );
            // 右侧遮罩rightRange在0-1范围内即可隐藏，处理浏览器兼容问题
            shouldShow = rightRange > 1;
          }

          // 直接操作 DOM，不触发重新渲染
          mask.style.opacity = shouldShow ? '1' : '0';
        },
        100,
        {
          trailing: true,
          leading: true,
        },
      ),
    [tabsContainerRef, position],
  );

  useEffect(() => {
    const tabsEl = tabsContainerRef.current;
    if (!tabsEl) return undefined;

    // 初始化遮罩状态
    updateMaskOpacity();

    // 监听滚动事件
    tabsEl.addEventListener('scroll', updateMaskOpacity);

    return () => {
      tabsEl.removeEventListener('scroll', updateMaskOpacity);
    };
  }, [tabsContainerRef, updateMaskOpacity]);

  return (
    <div
      ref={maskRef}
      className={clsx(`${rootClass}-mask`, `${rootClass}-mask-${position}`)}
      style={{
        opacity: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default TabMask;
