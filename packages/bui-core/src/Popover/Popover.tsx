import clsx from 'clsx';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  getStylesAndLocation,
  triggerEventTransform,
  parsePlacement,
  throttle,
  useForkRef,
  useUniqueId,
  isMini,
} from '@bifrostui/utils';
import Portal from '../Portal';
import { PopoverProps, AnchorOrigin } from './Popover.types';
import './index.less';

const prefixCls = 'bui-popover';

/**
 * 将 anchorOrigin 转换为内部使用的 placement 字符串
 */
const anchorOriginToPlacement = (anchorOrigin: AnchorOrigin): string => {
  const { vertical, horizontal } = anchorOrigin;

  // 特殊情况：center + center 映射为 top（默认位置）
  if (vertical === 'center' && horizontal === 'center') {
    return 'top';
  }

  // 处理基本方向
  if (horizontal === 'center') {
    return vertical;
  }

  // 处理复合方向
  const horizontalMap = {
    left: 'Left',
    right: 'Right',
  };

  if (vertical === 'center') {
    return horizontal;
  }

  return `${vertical}${horizontalMap[horizontal]}`;
};

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    content,
    defaultOpen,
    offsetSpacing = 0,
    anchorOrigin = { vertical: 'top', horizontal: 'center' },
    trigger = 'click',
    open,
    hideArrow,
    onOpenChange,
    // 无障碍功能相关属性
    role = 'tooltip',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoFocus = true,
    trapFocus = false,
    closeOnEscape = true,
    ...others
  } = props;

  // 将 anchorOrigin 转换为内部使用的 placement
  const placement = anchorOriginToPlacement(anchorOrigin);

  const controlByUser = typeof open !== 'undefined';
  const { direction, location = 'center' } = parsePlacement(placement);
  const childrenRef = useRef<Element>();
  const [openStatus, setOpenStatus] = useState(defaultOpen);
  // 气泡所在位置
  const [arrowDirection, setArrowDirection] = useState(direction);
  // 箭头位置
  const [arrowLocation, setArrowLocation] = useState(location);
  const [toolStyles, setToolStyles] = useState({});
  const tipRef = useRef(null);
  const nodeRef = useForkRef(ref, tipRef);

  // 无障碍功能：生成唯一ID用于ARIA关联
  const popoverId = useUniqueId();
  const isOpen = open || openStatus;

  const clearRef = (status) => {
    // 隐藏时 清空tipRef
    if (status === false) {
      tipRef.current = null;
    }
  };

  const changeOpenStatus = (event, status) => {
    if (controlByUser) return;
    // 隐藏时 清空tipRef
    clearRef(status);
    setOpenStatus(status);
    onOpenChange?.(event, { open: status });
  };

  const triggerClick = (event) => {
    event.stopPropagation();
    const targetStatus = !openStatus;
    changeOpenStatus(event, targetStatus);
  };
  const hidePopover = (event) => {
    changeOpenStatus(event, false);
  };
  const showPopover = (event) => {
    changeOpenStatus(event, true);
  };

  // 无障碍功能：键盘事件处理
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      hidePopover(event as any);
      // 焦点返回到触发元素
      if (childrenRef.current && 'focus' in childrenRef.current) {
        (childrenRef.current as HTMLElement).focus();
      }
    }
  }, [closeOnEscape, isOpen, hidePopover]);

  // 无障碍功能：焦点管理
  useEffect(() => {
    if (isOpen && autoFocus && tipRef.current) {
      // 延迟设置焦点，确保DOM已渲染
      const timer = setTimeout(() => {
        if (tipRef.current && 'focus' in tipRef.current) {
          (tipRef.current as HTMLElement).focus();
        }
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoFocus]);

  // 无障碍功能：焦点陷阱
  const handleFocusTrap = useCallback((event: KeyboardEvent) => {
    if (!trapFocus || !isOpen || !tipRef.current) return;

    if (event.key === 'Tab') {
      const focusableElements = tipRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    }
  }, [trapFocus, isOpen]);

  useEffect(() => {
    if (!controlByUser) return;
    setOpenStatus(open);
    clearRef(open);
  }, [open]);

  useEffect(() => {
    if (!openStatus) {
      setToolStyles({
        visibility: 'hidden',
      });
    }
  }, [openStatus]);

  const clickEventHandler = (event) => {
    if (
      trigger === 'hover' ||
      trigger === 'none' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    hidePopover(event);
  };

  const onRootElementMouted = throttle(async () => {
    if (!tipRef.current) return;

    const {
      direction: newParsedDirection,
      location: newParsedLocation = 'center',
    } = parsePlacement(placement);
    const result = await getStylesAndLocation({
      childrenRef,
      arrowDirection: newParsedDirection,
      arrowLocation: newParsedLocation,
      offsetSpacing,
      tipRef,
    });
    if (!result) return;
    const { styles, newArrowDirection, newArrowLocation } = result;

    if (newArrowDirection !== arrowDirection) {
      setArrowDirection(newArrowDirection);
    }
    if (newArrowLocation !== arrowLocation) {
      setArrowLocation(newArrowLocation);
    }
    setToolStyles(styles);
  }, 100);

  useEffect(() => {
    /**
     * 绑定全局事件
     * click 全局点击隐藏
     * resize 仅支持H5
     * keydown 键盘事件（无障碍功能）
     * @returns
     */
    const bindEvent = () => {
      if (!tipRef.current) return;

      // 当 trigger="none" 或 trigger="hover" 时，不绑定全局点击事件
      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover')
      ) {
        document.addEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.addEventListener('resize', onRootElementMouted);
      }
      // 无障碍功能：绑定键盘事件
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        if (trapFocus) {
          document.addEventListener('keydown', handleFocusTrap);
        }
      }
    };

    const unbindEvent = () => {
      if (
        !controlByUser &&
        trigger !== 'none' &&
        trigger !== 'hover' &&
        !(trigger?.length === 1 && trigger?.[0] === 'hover')
      ) {
        document.removeEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.removeEventListener('resize', onRootElementMouted);
      }
      // 无障碍功能：解绑键盘事件
      document.removeEventListener('keydown', handleKeyDown);
      if (trapFocus) {
        document.removeEventListener('keydown', handleFocusTrap);
      }
    };

    bindEvent();
    return () => {
      unbindEvent();
    };
  }, [openStatus, isOpen, handleKeyDown, handleFocusTrap, trapFocus]);

  if (!title && !content) return null;

  let triggerEventOption;
  // 当 trigger="none" 或用户手动控制时，不绑定任何触发事件
  if (!controlByUser && trigger !== 'none') {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: triggerClick,
      show: showPopover,
      hide: hidePopover,
    });
  }

  // 无障碍功能：为触发元素添加ARIA属性
  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
    // ARIA属性
    'aria-describedby': isOpen ? popoverId : undefined,
    'aria-expanded': isOpen,
    'aria-haspopup': role === 'menu' ? 'menu' : role === 'listbox' ? 'listbox' : 'dialog',
  };
  return (
    <>
      {open || openStatus ? (
        <Portal onRootElementMouted={onRootElementMouted}>
          <div
            className={clsx(prefixCls, className, `popover-${arrowDirection}`, {
              'bui-popover-arrow-hide': hideArrow,
            })}
            style={{ ...style, ...toolStyles }}
            ref={nodeRef}
            // 无障碍功能：ARIA属性
            id={popoverId}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            tabIndex={autoFocus ? -1 : undefined}
            {...others}
          >
            {!hideArrow ? (
              <div
                className={clsx(
                  'bui-popover-arrow',
                  `location-${arrowLocation}`,
                )}
              />
            ) : null}
            <div className="bui-popover-content">
              {title ? <div className="bui-popover-title">{title}</div> : null}
              {content ? (
                <div className="bui-popover-inner-content">{content}</div>
              ) : null}
            </div>
          </div>
        </Portal>
      ) : null}
      {React.isValidElement(children)
        ? React.cloneElement(children, childrenOptions)
        : children}
    </>
  );
});

Popover.displayName = 'BuiPopover';

export default Popover;
