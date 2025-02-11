import React from 'react';
import clsx from 'clsx';
import { TabBarProps } from './index.types';
import TabBarContext from './TabBarContext';
import './TabBar.less';

const prefixCls = 'bui-tab-bar';

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>((props, ref) => {
  const {
    current = 0,
    activeColor = 'primary',
    color = 'default',
    children,
    className,
    onChange,
    ...others
  } = props || {};

  return (
    <TabBarContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        currentIndex: current,
        activeColor,
        color,
        onChange,
      }}
    >
      <div ref={ref} className={clsx(`${prefixCls}`, className)} {...others}>
        {React.Children.toArray(children).map(
          (item: React.ReactElement, index) => {
            return React.cloneElement(item, {
              index,
            });
          },
        )}
      </div>
    </TabBarContext.Provider>
  );
});

TabBar.displayName = 'BuiTabBar';

export default TabBar;
