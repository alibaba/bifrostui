import React from 'react';
import { TabChangeEvent, TabsProps } from './Tabs.types';

const TabsContext = React.createContext<
  | (Omit<TabsProps, 'onChange'> & {
      triggerChange: TabChangeEvent;
    })
  | undefined
>(undefined);

if (process.env.NODE_ENV !== 'production') {
  TabsContext.displayName = 'BuiTabsContext';
}

export const TabsContextProvider = TabsContext.Provider;

export default TabsContext;
