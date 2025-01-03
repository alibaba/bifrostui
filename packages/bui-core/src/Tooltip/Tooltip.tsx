import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  getStylesAndLocation,
  triggerEventTransform,
  parsePlacement,
  throttle,
  useForkRef,
  isMini,
} from '@bifrostui/utils';
import Portal from '../Portal';
import { TooltipProps } from './Tooltip.types';
import './Tooltip.less';

const prefixCls = 'bui-tooltip';

const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    defaultOpen,
    offsetSpacing = 0,
    placement = 'top',
    trigger = 'click',
    open,
    onOpenChange,
    ...others
  } = props;

  const controlByUser = typeof open !== 'undefined';

  const { direction, location = 'center' } = parsePlacement(placement);
  const childrenRef = useRef<Element>();
  const [openStatus, setOpenStatus] = useState(defaultOpen);
  // 气泡所在位置
  const [arrowDirection, setArrowDirection] = useState(direction);
  // 箭头位置
  const [arrowLocation, setArrowLocation] = useState(location);
  const [tooltyles, setTooltyles] = useState({});
  const tipRef = useRef(null);
  const nodeRef = useForkRef(ref, tipRef);

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
  const hideTooltip = (event) => {
    changeOpenStatus(event, false);
  };
  const showTooltip = (event) => {
    changeOpenStatus(event, true);
  };

  useEffect(() => {
    if (!controlByUser) return;
    setOpenStatus(open);
    clearRef(open);
  }, [open]);

  const clickEventHandler = (event) => {
    if (
      trigger === 'hover' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    hideTooltip(event);
  };

  const onRootElementMouted = throttle(async () => {
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
    setTooltyles(styles);
  }, 100);

  /**
   * 绑定全局事件
   * click 全局点击隐藏
   * resize 仅支持H5
   * @returns
   */
  const bindEvent = () => {
    if (!tipRef.current) return;
    if (!controlByUser) {
      document.addEventListener('click', clickEventHandler);
    }
    if (!isMini) {
      window.addEventListener('resize', onRootElementMouted);
    }
  };

  const unbindEvent = () => {
    if (!controlByUser) {
      document.removeEventListener('click', clickEventHandler);
    }
    if (!isMini) {
      window.removeEventListener('resize', onRootElementMouted);
    }
  };

  useEffect(() => {
    bindEvent();
    return () => {
      unbindEvent();
    };
  }, [tipRef.current]);

  let triggerEventOption;
  if (!controlByUser) {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: triggerClick,
      show: showTooltip,
      hide: hideTooltip,
    });
  }

  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
  };

  return (
    <>
      {(open || openStatus) && title ? (
        <Portal onRootElementMouted={onRootElementMouted}>
          <div
            className={clsx(prefixCls, className, `tooltip-${arrowDirection}`)}
            style={{ ...style, ...tooltyles }}
            ref={nodeRef}
            {...others}
          >
            <div
              className={clsx('bui-tooltip-arrow', `location-${arrowLocation}`)}
            />
            <div className="bui-tooltip-content">{title}</div>
          </div>
        </Portal>
      ) : null}
      {React.isValidElement(children)
        ? React.cloneElement(children, childrenOptions)
        : children}
    </>
  );
});

Tooltip.displayName = 'BuiTooltip';

export default Tooltip;
