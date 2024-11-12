import clsx from 'clsx';
import React, { useState, useRef, useId } from 'react';
import { getStylesAndLocation, triggerEventTransform } from '@bifrostui/utils';
import Portal from '../Portal';
import './Popover.less';
import { PopoverProps } from './Popover.types';

const prefixCls = 'bui-popover';

const Popover = React.forwardRef<HTMLElement, PopoverProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    content,
    defaultOpen,
    placement = 'top',
    trigger,
    onOpenChange,
    open,
    hideArrow,
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
  const ttId = useId();

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
  const hidePopover = (event) => {
    changeOpenStatus(event, false);
  };
  const showPopover = (event) => {
    changeOpenStatus(event, true);
  };

  if (!children || !(title || content)) return null;

  const triggerEventOption = triggerEventTransform({
    trigger,
    click: triggerClick,
    show: showPopover,
    hide: hidePopover,
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
            className={clsx(prefixCls, className, `popover-${arrowDirection}`, {
              'bui-popover-arrow-hide': hideArrow,
            })}
            data-id={`tt_${ttId}`}
            style={{ ...style, ...tooltyles }}
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
      {React.cloneElement(children, childrenOptions)}
    </>
  );
});

Popover.displayName = 'BuiPopover';

export default Popover;
