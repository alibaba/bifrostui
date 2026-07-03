import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { TabPanelProps } from './TabPanel.types';
import {
  tabPanelRootClass,
  tabPanelActiveClass,
  tabPanelInactiveClass,
} from './classes';
import './TabPanel.less';

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
      hidden={!isActive}
      ref={ref}
      className={clsx(tabPanelRootClass, className, {
        [tabPanelActiveClass]: isActive,
        [tabPanelInactiveClass]: !isActive,
      })}
      {...others}
    >
      {isActive ? children : keepActiveDom}
    </div>
  );
});

TabPanel.displayName = 'BuiTabPanel';

export default TabPanel;
