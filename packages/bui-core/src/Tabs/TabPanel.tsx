import clsx from 'clsx';
import React, { forwardRef } from 'react';
import './TabPanel.less';
import { TabPanelProps } from './TabPanel.types';

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

  const keepActiveDom = keepMounted ? children : null;

  return (
    <div
      ref={ref}
      className={clsx(prefixCls, className, {
        [`${prefixCls}-active`]: value === index,
        [`${prefixCls}-inactive`]: value !== index,
      })}
      {...others}
    >
      {value === index ? children : keepActiveDom}
    </div>
  );
});

TabPanel.displayName = 'BuiTabPanel';

export default TabPanel;
