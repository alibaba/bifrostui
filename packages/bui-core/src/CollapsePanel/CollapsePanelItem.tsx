import React from 'react';
import clsx from 'clsx';
import { Collapse } from '../Collapse';
import { CollapsePanelItemProps } from './CollapsePanel.types';

const prefixCls = 'bui-collapse-panel';

const CollapsePanelItem = React.forwardRef<
  HTMLDivElement,
  CollapsePanelItemProps
>((props, ref) => {
  const {
    className,
    style,
    label,
    children,
    icon,
    active,
    onClick,
    ...others
  } = props;
  const isControlledIcon = typeof icon === 'function';

  const getIcon = () => {
    return typeof icon === 'function' ? icon(active) : icon;
  };

  return (
    <div
      className={clsx(`${prefixCls}-item`, className)}
      style={style}
      ref={ref}
      {...others}
    >
      <div className={`${prefixCls}-item-header`} onClick={onClick}>
        <div className={`${prefixCls}-item-header-label`}>{label}</div>
        <div
          className={clsx(
            `${prefixCls}-item-header-icon`,
            `${prefixCls}-item-header-icon-arrow`,
            {
              [`${prefixCls}-item-header-icon-arrow-active`]:
                !isControlledIcon && active,
            },
          )}
        >
          {getIcon()}
        </div>
      </div>
      <Collapse in={active} orientation="vertical" timeout={300}>
        <div className={`${prefixCls}-item-content`}>{children}</div>
      </Collapse>
    </div>
  );
});

CollapsePanelItem.displayName = 'BuiCollapsePanelItem';

export default CollapsePanelItem;
