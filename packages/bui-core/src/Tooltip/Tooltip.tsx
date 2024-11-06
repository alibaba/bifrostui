import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import { getStylesAndLocation, triggerEventTransform } from '@bifrostui/utils';
import Portal from '../Portal';
import './Tooltip.less';
import { TooltipProps } from './Tooltip.types';

const prefixCls = 'bui-tooltip';
let tooltipId = 0;

const Tooltip = React.forwardRef<HTMLButtonElement, TooltipProps>(
  (props, ref) => {
    const {
      className,
      children,
      title,
      defaultOpen,
      placement = 'top',
      trigger,
      onOpenChange,
      open,
      portalProps,
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
    const [id] = useState(() => {
      tooltipId += 1;
      return tooltipId;
    });

    const onRootElementMouted = () => {
      const result = getStylesAndLocation({
        childrenRef,
        arrowDirection,
        arrowLocation,
        selector: `#_rt_${id}`,
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

    if (!children || !title) return null;

    return (
      <>
        {(open || openStatus) && title ? (
          <Portal
            onRootElementMouted={onRootElementMouted}
            {...portalProps}
            ref={ref}
          >
            <div
              className={clsx(
                prefixCls,
                className,
                `tooltip-${arrowDirection}`,
              )}
              id={`_rt_${id}`}
              style={tooltyles}
              {...others}
            >
              <div
                className={clsx(
                  'bui-tooltip-arrow',
                  `location-${arrowLocation}`,
                )}
              />
              <div className="bui-tooltip-content">{title}</div>
            </div>
          </Portal>
        ) : null}
        {React.cloneElement(children, childrenOptions)}
      </>
    );
  },
);

Tooltip.displayName = 'BuiTooltip';

export default Tooltip;
