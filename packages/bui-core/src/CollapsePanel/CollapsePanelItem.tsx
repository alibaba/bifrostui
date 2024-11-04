import React from 'react';
import clsx from 'clsx';
import { CollapsePanelItemProps } from './CollapsePanel.types';

const prefixCls = 'bui-collapse-panel';

const CollapsePanelItem = (props: CollapsePanelItemProps) => {
  const { className, style, label, children, icon, active, onClick } = props;
  const isControlledIcon = typeof icon === 'function';

  const getIcon = () => {
    return typeof icon === 'function' ? icon(active) : icon;
  };

  return (
    <div className={clsx(`${prefixCls}-item`, className)} style={style}>
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
      <div
        className={`${prefixCls}-item-content`}
        style={{ display: active ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsePanelItem;
