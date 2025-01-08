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
    offsetSpacing = 0,
    placement = 'top',
    trigger = 'click',
    open,
    hideArrow,
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
  const hidePopover = (event) => {
    changeOpenStatus(event, false);
  };
  const showPopover = (event) => {
    changeOpenStatus(event, true);
  };

  useEffect(() => {
    if (!controlByUser) return;
    setOpenStatus(open);
    clearRef(open);
  }, [open]);

  useEffect(() => {
    if (!openStatus) {
      setTooltyles({
        visibility: 'hidden',
      });
    }
  }, [openStatus]);

  const clickEventHandler = (event) => {
    if (
      trigger === 'hover' ||
      (trigger?.length === 1 && trigger?.[0] === 'hover')
    )
      return;

    hidePopover(event);
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
        <Portal onRootElementMouted={onRootElementMouted}>
          <div
            className={clsx(prefixCls, className, `popover-${arrowDirection}`, {
              'bui-popover-arrow-hide': hideArrow,
            })}
            style={{ ...style, ...tooltyles }}
            ref={nodeRef}
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
