import React from 'react';
import clsx from 'clsx';
import { tabMaskClass, tabMaskLeftClass, tabMaskRightClass } from './classes';

export interface TabMaskProps {
  /** 位置：左侧或右侧 */
  position: 'left' | 'right';
}

const TabMask: React.FC<TabMaskProps> = ({ position }) => (
  <div
    className={clsx(
      tabMaskClass,
      position === 'left' ? tabMaskLeftClass : tabMaskRightClass,
    )}
    aria-hidden="true"
  />
);

TabMask.displayName = 'BuiTabsMask';

export default React.memo(TabMask);
