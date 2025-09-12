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
import { TooltipProps } from './Tooltip.types';

export interface UseTooltipParameters {
  title?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  offset?: number;
  placement?: TooltipProps['placement'];
  trigger?: TooltipProps['trigger'];
  onOpenChange?: TooltipProps['onOpenChange'];
  autoFocus?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactElement;
  rootRef?: React.Ref<HTMLElement>;
}

export interface UseTooltipReturnValue {
  getTooltipProps: (
    otherProps?: Record<string, unknown>,
  ) => Record<string, unknown>;
  getChildProps: () => Record<string, unknown>;
  getPortalProps: () => {
    onMounted: () => void;
  };
  tooltipRef: React.RefCallback<HTMLElement>;
  isOpen: boolean;
  toolStyles: React.CSSProperties;
  arrowDirection: string;
  arrowLocation: string;
  tooltipId: string;
}

export function useTooltip(
  parameters: UseTooltipParameters,
): UseTooltipReturnValue {
  const {
    defaultOpen = false,
    open,
    offset,
    placement = 'top',
    trigger = 'click',
    onOpenChange,
    autoFocus = false,
    closeOnEscape = false,
    children,
    rootRef,
  } = parameters;

  const controlByUser = typeof open !== 'undefined';
  const { direction, location = 'center' } = parsePlacement(placement);

  const childrenRef = useRef<Element>();
  const [openStatus, setOpenStatus] = useState(defaultOpen);
  const [arrowDirection, setArrowDirection] = useState(direction);
  const [arrowLocation, setArrowLocation] = useState(location);
  const [toolStyles, setToolStyles] = useState<React.CSSProperties>({});
  const tipRef = useRef<HTMLElement | null>(null);
  const tooltipId = useUniqueId();

  // 响应placement变化
  useEffect(() => {
    setArrowDirection(direction);
    setArrowLocation(location);
  }, [direction, location]);

  const isOpen = open || openStatus;

  const clearRef = (status: boolean) => {
    if (status === false) {
      tipRef.current = null;
    }
  };

  const changeOpenStatus = (event: React.SyntheticEvent, status: boolean) => {
    if (controlByUser) return;
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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && isOpen) {
        event.preventDefault();
        event.stopPropagation();
        hideTooltip(event as unknown as React.SyntheticEvent);
        if (childrenRef.current && 'focus' in childrenRef.current) {
          (childrenRef.current as HTMLElement).focus();
        }
      }
    },
    [closeOnEscape, isOpen, hideTooltip],
  );

  useEffect(() => {
    if (isOpen && autoFocus && tipRef.current) {
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

  const shouldListenGlobalClick = useCallback(() => {
    if (typeof trigger === 'string') {
      return trigger === 'click';
    }
    if (Array.isArray(trigger)) {
      return trigger.includes('click');
    }
    return true;
  }, [trigger]);

  const clickEventHandler = useCallback(
    (event: Event) => {
      if (!shouldListenGlobalClick()) {
        return;
      }
      hideTooltip(event as unknown as React.SyntheticEvent);
    },
    [shouldListenGlobalClick, hideTooltip],
  );

  const onMounted = throttle(async () => {
    if (!tipRef.current) return;
    const {
      direction: newParsedDirection,
      location: newParsedLocation = 'center',
    } = parsePlacement(placement);
    const result = await getStylesAndLocation({
      childrenRef,
      arrowDirection: newParsedDirection,
      arrowLocation: newParsedLocation,
      offsetSpacing: offset || 0,
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
    setToolStyles(styles as React.CSSProperties);
  }, 100);

  useEffect(() => {
    const bindEvent = () => {
      if (!openStatus) return;
      if (!controlByUser && shouldListenGlobalClick() && !isMini) {
        document.addEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.addEventListener('resize', onMounted);
      }
      if (isOpen && !isMini) {
        document.addEventListener('keydown', handleKeyDown);
      }
    };
    const unbindEvent = () => {
      if (!controlByUser && shouldListenGlobalClick() && !isMini) {
        document.removeEventListener('click', clickEventHandler);
      }
      if (!isMini) {
        window.removeEventListener('resize', onMounted);
      }
      if (!isMini) {
        document.removeEventListener('keydown', handleKeyDown);
      }
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
    onMounted,
    isOpen,
    handleKeyDown,
  ]);

  const tooltipRef = useForkRef(tipRef, rootRef);

  const getTooltipProps = useCallback(
    (otherProps: Record<string, unknown> = {}) => {
      return {
        id: tooltipId,
        ref: tooltipRef,
        tabIndex: autoFocus ? -1 : undefined,
        ...otherProps,
      };
    },
    [tooltipId, tooltipRef, autoFocus],
  );

  const getChildProps = useCallback(() => {
    let triggerEventOption = {};
    if (!controlByUser) {
      triggerEventOption = triggerEventTransform({
        trigger,
        click: triggerClick,
        show: showTooltip,
        hide: hideTooltip,
      });
    }

    // 只为可交互的元素添加 aria-expanded
    const childProps: Record<string, unknown> = {
      ref: childrenRef,
      ...triggerEventOption,
      'aria-describedby': isOpen ? tooltipId : undefined,
    };

    // 检查子元素是否是可交互的元素类型，如果是则添加 aria-expanded
    if (React.isValidElement(children)) {
      const elementType =
        typeof children.type === 'string'
          ? children.type
          : (children.type as React.ComponentType)?.displayName || '';
      const interactiveElements = [
        'button',
        'a',
        'input',
        'select',
        'textarea',
      ];
      const childElementProps = children.props as Record<string, unknown>;
      const isInteractive =
        interactiveElements.includes(elementType.toLowerCase()) ||
        childElementProps?.role === 'button' ||
        childElementProps?.role === 'menuitem' ||
        childElementProps?.role === 'tab' ||
        childElementProps?.tabIndex !== undefined;

      if (isInteractive) {
        childProps['aria-expanded'] = isOpen;
      }
    }

    return childProps;
  }, [
    controlByUser,
    trigger,
    triggerClick,
    showTooltip,
    hideTooltip,
    isOpen,
    tooltipId,
    children,
  ]);

  const getPortalProps = useCallback(() => {
    return {
      onMounted,
    };
  }, [onMounted]);

  return {
    getTooltipProps,
    getChildProps,
    getPortalProps,
    tooltipRef,
    isOpen,
    toolStyles,
    arrowDirection,
    arrowLocation,
    tooltipId,
  };
}
