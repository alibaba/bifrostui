import React from 'react';
import clsx from 'clsx';
import { Collapse } from '../Collapse';
import { CollapsePanelItemProps } from './CollapsePanel.types';

const prefixCls = 'bui-collapse-panel-item';

const CollapsePanelItem = React.forwardRef<
  HTMLDivElement,
  CollapsePanelItemProps
>(
  (
    {
      className,
      style,
      label,
      children,
      icon,
      active = false,
      onClick,
      ...others
    },
    ref,
  ) => {
    const isControlledIcon = typeof icon === 'function';

    const getIcon = () => {
      return typeof icon === 'function' ? icon(active) : icon;
    };

    return (
      <div
        className={clsx(prefixCls, active && `${prefixCls}-active`, className)}
        style={style}
        ref={ref}
        {...others}
      >
        <div className={`${prefixCls}-header`} onClick={onClick}>
          <div className={`${prefixCls}-header-label`}>{label}</div>
          <div
            className={clsx(
              `${prefixCls}-header-icon`,
              `${prefixCls}-header-icon-arrow`,
              {
                [`${prefixCls}-header-icon-arrow-active`]:
                  !isControlledIcon && active,
              },
            )}
          >
            {getIcon()}
          </div>
        </div>
        <Collapse in={active} direction="vertical" timeout={300}>
          <div className={`${prefixCls}-content`}>{children}</div>
        </Collapse>
      </div>
    );
  },
);

CollapsePanelItem.displayName = 'BuiCollapsePanelItem';

export default CollapsePanelItem;
