import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';
import {
  getStylesAndLocation,
  triggerEventTransform,
  useUniqueId,
} from '@bifrostui/utils';
import Portal from '../Portal';
import './Popover.less';
import { PopoverProps } from './Popover.types';

const prefixCls = 'bui-popover';

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    content,
    defaultOpen,
    placement = 'top',
    trigger = 'click',
    onOpenChange,
    open,
    hideArrow,
    PortalProps,
    ...others
  } = props;

  const controlByUser = typeof open !== 'undefined';
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
  const hidePopover = (event) => {
    changeOpenStatus(event, false);
  };
  const showPopover = (event) => {
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

    hidePopover(event);
  };

  useEffect(() => {
    if (controlByUser) return;
    document.addEventListener('click', clickEventHandler);
    // eslint-disable-next-line
    return () => {
      document.removeEventListener('click', clickEventHandler);
    };
  }, []);

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

  if (!title && !content) return null;

  let triggerEventOption;
  if (!controlByUser) {
    triggerEventOption = triggerEventTransform({
      trigger,
      click: triggerClick,
      show: showPopover,
      hide: hidePopover,
    });
  }

  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
  };
  return (
    <>
      {open || openStatus ? (
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
      {React.isValidElement(children)
        ? React.cloneElement(children, childrenOptions)
        : children}
    </>
  );
});

Popover.displayName = 'BuiPopover';

export default Popover;
