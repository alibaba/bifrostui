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
import { TooltipProps } from './Tooltip.types';
import './index.less';

const prefixCls = 'bui-tooltip';

const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    defaultOpen = false,
    offset,
    offsetSpacing = 0,
    placement = 'top',
    trigger = 'click',
    open,
    onOpenChange,
    // 无障碍功能相关属性
    role = 'tooltip',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoFocus = false,
    closeOnEscape = true,
    keyboardTrigger = true,
    'aria-hidden': ariaHidden = false,
    ...others
  } = props;

  const controlByUser = typeof open !== 'undefined';

  // 使用 offset 优先，如果没有则使用 offsetSpacing（向后兼容）
  const actualOffset = offset !== undefined ? offset : offsetSpacing;

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
  const tooltipId = useUniqueId();
  const isOpen = open || openStatus;

  const clearRef = (status: boolean) => {
    // 隐藏时 清空tipRef
    if (status === false) {
      tipRef.current = null;
    }
  };

  const changeOpenStatus = (event: React.SyntheticEvent, status: boolean) => {
    if (controlByUser) return;
    // 隐藏时 清空tipRef
    clearRef(status);
    setOpenStatus(status);
    onOpenChange?.(event, { open: status });
  };

  const triggerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    const targetStatus = !openStatus;
    changeOpenStatus(event, targetStatus);
  };
  const hideTooltip = (event: React.SyntheticEvent) => {
    changeOpenStatus(event, false);
  };
  const showTooltip = (event: React.SyntheticEvent) => {
    changeOpenStatus(event, true);
  };

  // 无障碍功能：键盘事件处理
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (closeOnEscape && event.key === 'Escape' && isOpen) {
      event.preventDefault();
      event.stopPropagation();
      hideTooltip(event as any);
      // 焦点返回到触发元素
      if (childrenRef.current && 'focus' in childrenRef.current) {
        (childrenRef.current as HTMLElement).focus();
      }
    }
  }, [closeOnEscape, isOpen, hideTooltip]);

  // 无障碍功能：触发元素的键盘事件处理
  const handleTriggerKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!keyboardTrigger || controlByUser) return;

    const shouldTrigger = trigger === 'click' ||
      (Array.isArray(trigger) && trigger.includes('click'));

    if (shouldTrigger && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.stopPropagation();
      triggerClick(event as any);
    }
  }, [keyboardTrigger, controlByUser, trigger, triggerClick]);

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
    return undefined;
  }, [isOpen, autoFocus]);

  useEffect(() => {
    if (!controlByUser) return;
    setOpenStatus(open ?? false);
    clearRef(open ?? false);
  }, [open, controlByUser]);

  useEffect(() => {
    if (!openStatus) {
      setToolStyles({
        visibility: 'hidden',
      });
    }
  }, [openStatus]);

  // 判断是否需要监听全局点击事件来隐藏 tooltip
  const shouldListenGlobalClick = useCallback(() => {
    if (typeof trigger === 'string') {
      return trigger === 'click';
    }
    if (Array.isArray(trigger)) {
      return trigger.includes('click');
    }
    return true; // 默认为 'click'
  }, [trigger]);

  const clickEventHandler = useCallback(
    (event: Event) => {
      // 只有当 trigger 包含 'click' 时才监听全局点击事件隐藏
      if (!shouldListenGlobalClick()) {
        return;
      }
      // 简化：直接类型断言，大多数回调不会深度使用事件对象
      hideTooltip(event as unknown as React.SyntheticEvent);
    },
    [shouldListenGlobalClick, hideTooltip],
  );

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
      offsetSpacing: actualOffset,
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
      if (!openStatus) return;
      if (!controlByUser && shouldListenGlobalClick()) {
        document.addEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.addEventListener('resize', onRootElementMouted);
      }
      // 无障碍功能：绑定键盘事件
      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
      }
    };
    const unbindEvent = () => {
      if (!controlByUser && shouldListenGlobalClick()) {
        document.removeEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.removeEventListener('resize', onRootElementMouted);
      }
      // 无障碍功能：解绑键盘事件
      document.removeEventListener('keydown', handleKeyDown);
    };

    bindEvent();
    return () => {
      unbindEvent();
    };
  }, [
    openStatus,
    controlByUser,
    shouldListenGlobalClick,
    clickEventHandler,
    onRootElementMouted,
    isOpen,
    handleKeyDown,
  ]);

  let triggerEventOption;
  if (!controlByUser) {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: triggerClick,
      show: showTooltip,
      hide: hideTooltip,
    });
  }

  // 无障碍功能：为触发元素添加ARIA属性和键盘事件
  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
    // ARIA属性
    'aria-describedby': isOpen ? tooltipId : undefined,
    'aria-expanded': isOpen,
    // 键盘事件
    onKeyDown: handleTriggerKeyDown,
  };

  // 确保 children 是有效的 React 元素
  if (!React.isValidElement(children)) {
    console.warn(
      'BUI Tooltip: children must be a valid React element that can accept a ref.',
    );
    return children as React.ReactElement;
  }

  return (
    <>
      {(open || openStatus) && title ? (
        <Portal onRootElementMouted={onRootElementMouted}>
          <div
            className={clsx(prefixCls, className, `tooltip-${arrowDirection}`)}
            style={{ ...style, ...toolStyles }}
            ref={nodeRef}
            // 无障碍功能：ARIA属性
            id={tooltipId}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            aria-hidden={ariaHidden}
            tabIndex={autoFocus ? -1 : undefined}
            {...others}
          >
            <div
              className={clsx('bui-tooltip-arrow', `location-${arrowLocation}`)}
            />
            <div className="bui-tooltip-content">{title}</div>
          </div>
        </Portal>
      ) : null}
      {React.cloneElement(children, childrenOptions)}
    </>
  );
});

Tooltip.displayName = 'BuiTooltip';

export default Tooltip;
