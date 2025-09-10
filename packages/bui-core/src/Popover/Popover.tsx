import clsx from 'clsx';
import React from 'react';
import { useForkRef } from '@bifrostui/utils';
import Portal from '../Portal';
import { PopoverProps } from './Popover.types';
import {
  usePopoverState,
  usePopoverPosition,
  usePopoverA11y,
  usePopoverEvents,
} from './hooks';
import './index.less';

const prefixCls = 'bui-popover';

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    content,
    defaultOpen = false,
    offsetSpacing = 0,
    anchorOrigin = { vertical: 'top', horizontal: 'center' },
    trigger = 'click',
    open,
    hideArrow,
    onOpenChange,
    role = 'tooltip',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoFocus = false,
    trapFocus = false,
    closeOnEscape = true,
    ...others
  } = props;

  const { isOpen, openStatus, controlByUser, changeOpenStatus } = usePopoverState({
    defaultOpen,
    open,
    onOpenChange,
  });

  const {
    arrowDirection,
    arrowLocation,
    toolStyles,
    tipRef,
    childrenRef,
    onMounted,
    clearRef,
  } = usePopoverPosition({
    anchorOrigin,
    offsetSpacing,
    isOpen,
  });

  const nodeRef = useForkRef(ref, tipRef);

  const handleHide = (event: React.SyntheticEvent | Event) => {
    clearRef(false);
    changeOpenStatus(event, false);
  };

  const handleShow = (event: React.SyntheticEvent | Event) => {
    changeOpenStatus(event, true);
  };

  const handleTriggerClick = (event: React.SyntheticEvent | Event) => {
    event.stopPropagation();
    const targetStatus = !openStatus;
    if (targetStatus) {
      changeOpenStatus(event, true);
    } else {
      clearRef(false);
      changeOpenStatus(event, false);
    }
  };

  const { popoverId, handleKeyDown, handleFocusTrap } = usePopoverA11y({
    isOpen,
    autoFocus,
    trapFocus,
    closeOnEscape,
    onClose: handleHide,
    tipRef,
    childrenRef,
  });

  const { triggerEventOption } = usePopoverEvents({
    isOpen,
    controlByUser,
    trigger,
    onShow: handleShow,
    onHide: handleHide,
    onTriggerClick: handleTriggerClick,
    onMounted,
    handleKeyDown,
    handleFocusTrap,
    trapFocus,
    tipRef,
  });

  if (!title && !content) return null;

  const getAriaHasPopup = () => {
    if (role === 'menu') return 'menu';
    if (role === 'listbox') return 'listbox';
    return 'dialog';
  };

  const childrenOptions = {
    ref: childrenRef,
    ...triggerEventOption,
    'aria-describedby': isOpen ? popoverId : undefined,
    'aria-haspopup': getAriaHasPopup(),
    ...(React.isValidElement(children) &&
      (children.type === 'button' ||
        children.type === 'a' ||
        children.props?.role === 'button') && {
        'aria-expanded': isOpen,
      }),
  };
  return (
    <>
      {isOpen ? (
        <Portal onMounted={onMounted}>
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
            tabIndex={autoFocus ? 0 : undefined}
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
