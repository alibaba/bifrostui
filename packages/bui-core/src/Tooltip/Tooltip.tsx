import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import {
  getStylesAndLocation,
  triggerEventTransform,
  useUniqueId,
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
    placement = 'top',
    trigger,
    onOpenChange,
    open,
    PortalProps,
    ...others
  } = props;

  const positionArr = placement.split(/([A-Z])/);
  const direction = positionArr[0];
  let location;
  if (positionArr.length > 1) {
    positionArr.splice(0, 1);
    location = positionArr.join('').toLowerCase();
  } else {
    location = 'center';
  }

  const childrenRef = useRef<Element>();
  const [openStatus, setOpenStatus] = useState(defaultOpen);
  // 气泡所在位置
  const [arrowDirection, setArrowDirection] = useState(direction);
  // 箭头位置
  const [arrowLocation, setArrowLocation] = useState(location);
  const [tooltyles, setTooltyles] = useState({});
  const ttId = useUniqueId();

  const onRootElementMouted = () => {
    const result = getStylesAndLocation({
      childrenRef,
      arrowDirection,
      arrowLocation,
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
  };

  const changeOpenStatus = (event, status) => {
    if (open) return;
    setOpenStatus(status);
    onOpenChange?.(event, { open: status });
  };

  const triggerClick = (event) => {
    const targetStatus = !openStatus;
    changeOpenStatus(event, targetStatus);
  };
  const hideTooltip = (event) => {
    changeOpenStatus(event, false);
  };
  const showTooltip = (event) => {
    changeOpenStatus(event, true);
  };

  const triggerEventOption = triggerEventTransform({
    trigger,
    click: triggerClick,
    show: showTooltip,
    hide: hideTooltip,
  });

  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
  };

  return (
    <>
      {(open || openStatus) && title ? (
        <Portal
          onRootElementMouted={onRootElementMouted}
          {...PortalProps}
          ref={ref}
        >
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
