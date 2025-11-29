import clsx from 'clsx';
import * as React from 'react';
import Portal from '../Portal';
import { TooltipProps } from './Tooltip.types';
import { useTooltip } from './useTooltip';
import './index.less';

const prefixCls = 'bui-tooltip';

const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((props, ref) => {
  const {
    className,
    style,
    children,
    title,
    defaultOpen = false,
    offset,
    placement = 'top',
    trigger = 'click',
    open,
    onOpenChange,
    // 无障碍功能相关属性
    role = 'tooltip',
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoFocus = false,
    closeOnEscape = false,
    'aria-hidden': ariaHidden = false,
    ...others
  } = props;

  const {
    getTooltipProps,
    getChildProps,
    getPortalProps,
    isOpen,
    toolStyles,
    arrowDirection,
    arrowLocation,
  } = useTooltip({
    title,
    defaultOpen,
    open,
    offset,
    placement,
    trigger,
    onOpenChange,
    autoFocus,
    closeOnEscape,
    children,
    rootRef: ref,
  });

  // 确保 children 是有效的 React 元素
  if (!React.isValidElement(children)) {
    // eslint-disable-next-line no-console
    console.warn(
      'BUI Tooltip: children must be a valid React element that can accept a ref.',
    );
    return children as React.ReactElement;
  }

  const tooltipProps = getTooltipProps({
    ...others,
    className: clsx(prefixCls, className, `tooltip-${arrowDirection}`),
    style: { ...style, ...toolStyles },
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-hidden': ariaHidden,
  });

  const childProps = getChildProps();
  const portalProps = getPortalProps();

  return (
    <>
      {isOpen && title ? (
        <Portal {...portalProps}>
          <div {...tooltipProps}>
            <div
              className={clsx('bui-tooltip-arrow', `location-${arrowLocation}`)}
            />
            <div className="bui-tooltip-content">{title}</div>
          </div>
        </Portal>
      ) : null}
      {React.cloneElement(children, childProps)}
    </>
  );
});

Tooltip.displayName = 'BuiTooltip';

export default Tooltip;
