import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  getStylesAndLocation,
  triggerEventTransform,
  parsePlacement,
  useUniqueId,
  throttle,
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
    onOpenChange,
    open,
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
  const ttId = useUniqueId();

  const changeOpenStatus = (event, status) => {
    if (controlByUser) return;
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
  }, [open]);

  const clickEventHandler = (event) => {
    if (
      trigger === 'hover' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    hideTooltip(event);
  };

  const onRootElementMouted = throttle(() => {
    const {
      direction: newParsedDirection,
      location: newParsedLocation = 'center',
    } = parsePlacement(placement);
    const result = getStylesAndLocation({
      childrenRef,
      arrowDirection: newParsedDirection,
      arrowLocation: newParsedLocation,
      offsetSpacing,
      selector: `[data-id="tt_${ttId}"]`,
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

  const bindEvent = () => {
    if (!controlByUser) {
      document.addEventListener('click', clickEventHandler);
    }
    window.addEventListener('resize', onRootElementMouted);
  };

  const unbindEvent = () => {
    if (!controlByUser) {
      document.removeEventListener('click', clickEventHandler);
    }
    window.removeEventListener('resize', onRootElementMouted);
  };

  useEffect(() => {
    bindEvent();
    return () => {
      unbindEvent();
    };
  }, []);

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
        <Portal onRootElementMouted={onRootElementMouted} ref={ref}>
          <div
            className={clsx(prefixCls, className, `tooltip-${arrowDirection}`)}
            style={{ ...style, ...tooltyles }}
            data-id={`tt_${ttId}`}
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
