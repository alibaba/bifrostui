import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { TabPanelProps } from './TabPanel.types';
import './TabPanel.less';

const prefixCls = 'bui-tabpanel';

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {
  const {
    className,
    children,
    value,
    index,
    keepMounted = false,
    ...others
  } = props;

  const isActive = value === index;
  const keepActiveDom = keepMounted ? children : null;

  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      tabIndex={0}
      ref={ref}
      className={clsx(prefixCls, className, {
        [`${prefixCls}-active`]: isActive,
        [`${prefixCls}-inactive`]: !isActive,
      })}
      {...others}
    >
      {isActive ? children : keepActiveDom}
    </div>
  );
});

TabPanel.displayName = 'BuiTabPanel';

export default TabPanel;
