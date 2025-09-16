import clsx from 'clsx';
import React from 'react';
import { useForkRef } from '@bifrostui/utils';
import Portal from '../Portal';
import Backdrop from '../Backdrop';
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
    closeOnEscape = false,
    ...others
  } = props;

  const { isOpen, openStatus, controlByUser, changeOpenStatus } =
    usePopoverState({
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

  const { popoverId, handleKeyDown } = usePopoverA11y({
    isOpen,
    autoFocus,
    closeOnEscape,
    onClose: handleHide,
    tipRef,
    childrenRef,
  });

  const { triggerEventOption, backdropProps } = usePopoverEvents({
    isOpen,
    controlByUser,
    trigger,
    onShow: handleShow,
    onHide: handleHide,
    onTriggerClick: handleTriggerClick,
    onMounted,
    handleKeyDown,
    tipRef,
    childrenRef,
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
          {/* 小程序环境下的背景遮罩层 */}
          {backdropProps && (
            <Backdrop
              className="bui-popover-backdrop"
              style={{
                zIndex: 999,
              }}
              open={isOpen}
              invisible
              role="button"
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (
                    backdropProps?.onClick &&
                    typeof backdropProps.onClick === 'function'
                  ) {
                    backdropProps.onClick(
                      e as unknown as React.MouseEvent<HTMLDivElement>,
                    );
                  }
                }
              }}
              {...backdropProps}
            />
          )}
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
            onClick={(e) => e.stopPropagation()} // 阻止气泡内容的点击事件冒泡到背景层
            onKeyDown={(e) => {
              // 仅处理键盘交互，不执行特定操作
              if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation();
              }
            }}
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
