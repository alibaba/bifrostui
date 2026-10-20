import React, { useEffect } from 'react';
import { isMini, triggerEventTransform } from '@bifrostui/utils';
import { PopoverProps } from '../Popover.types';

// 获取所有可滚动的父元素
const getScrollParents = (element: Element): Element[] => {
  const scrollParents: Element[] = [];
  let parent = element.parentElement;

  while (parent && parent !== document.body) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parent);
    if (/auto|scroll|overlay|hidden/.test(overflow + overflowX + overflowY)) {
      scrollParents.push(parent);
    }
    parent = parent.parentElement;
  }

  return scrollParents;
};

type TriggerType = PopoverProps['trigger'];

export interface UsePopoverEventsProps {
  isOpen: boolean;
  controlByUser: boolean;
  trigger: TriggerType;
  onShow: (event: React.SyntheticEvent | Event) => void;
  onHide: (event: React.SyntheticEvent | Event) => void;
  onTriggerClick: (event: React.SyntheticEvent | Event) => void;
  onMounted: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  tipRef: React.RefObject<HTMLDivElement>;
  childrenRef: React.RefObject<Element>;
}

export interface UsePopoverEventsReturn {
  triggerEventOption?: Record<string, unknown>;
  backdropProps?: Record<string, unknown>;
}

export const usePopoverEvents = ({
  isOpen,
  controlByUser,
  trigger,
  onShow,
  onHide,
  onTriggerClick,
  onMounted,
  handleKeyDown,
  tipRef,
  childrenRef,
}: UsePopoverEventsProps): UsePopoverEventsReturn => {
  const clickEventHandler = (event: Event) => {
    if (
      trigger === 'hover' ||
      trigger === 'none' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    onHide(event);
  };

  useEffect(() => {
    let scrollParents: Element[] = [];
    let resizeObserver: ResizeObserver | null = null;

    const bindEvent = () => {
      // 键盘事件监听器不依赖于 tipRef 的存在
      if (isOpen && !isMini) {
        document.addEventListener('keydown', handleKeyDown);
      }

      // 只有当tipRef存在时才绑定其他事件
      if (!tipRef.current) return;

      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover') &&
        !isMini
      ) {
        document.addEventListener('click', clickEventHandler);
      }

      if (!isMini) {
        window.addEventListener('resize', onMounted);
        window.addEventListener('scroll', onMounted, true);

        // 绑定所有滚动父元素的scroll事件
        if (childrenRef.current) {
          scrollParents = getScrollParents(childrenRef.current);
          scrollParents.forEach((parent) => {
            parent.addEventListener('scroll', onMounted);
          });

          // 只有在打开时才启用ResizeObserver
          if (isOpen && typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => {
              // 使用setTimeout来确保DOM更新完成后再重新计算位置
              setTimeout(() => {
                onMounted();
              }, 0);
            });

            // 观察目标元素
            resizeObserver.observe(childrenRef.current);

            // 观察所有滚动父元素
            scrollParents.forEach((parent) => {
              if (resizeObserver) {
                resizeObserver.observe(parent);
              }
            });

            // 观察document.body
            resizeObserver.observe(document.body);
          }
        }
      }
    };

    const unbindEvent = () => {
      // 键盘事件监听器总是需要清理
      if (!isMini) {
        document.removeEventListener('keydown', handleKeyDown);
      }

      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover') &&
        !isMini
      ) {
        document.removeEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.removeEventListener('resize', onMounted);
        window.removeEventListener('scroll', onMounted, true);

        // 解绑所有滚动父元素的scroll事件
        scrollParents.forEach((parent) => {
          parent.removeEventListener('scroll', onMounted);
        });

        // 清理ResizeObserver
        if (resizeObserver) {
          resizeObserver.disconnect();
          resizeObserver = null;
        }
      }
    };

    bindEvent();
    return () => {
      unbindEvent();
    };
  }, [
    isOpen,
    handleKeyDown,
    controlByUser,
    trigger,
    onHide,
    onMounted,
    tipRef,
    childrenRef,
  ]);

  let triggerEventOption: Record<string, unknown> | undefined;
  if (!controlByUser && trigger !== 'none') {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: onTriggerClick,
      show: onShow,
      hide: onHide,
    });
  }

  // 为小程序环境提供背景点击支持
  let backdropProps: Record<string, unknown> | undefined;
  if (
    isMini &&
    isOpen &&
    !controlByUser &&
    trigger !== 'none' &&
    trigger !== 'hover' &&
    !(trigger?.length === 1 && trigger?.[0] === 'hover')
  ) {
    backdropProps = {
      onClick: (event: React.MouseEvent) => {
        // 阻止事件冒泡，避免触发其他元素的点击事件
        event.stopPropagation();
        onHide(event);
      },
    };
  }

  return {
    triggerEventOption,
    backdropProps,
  };
};
