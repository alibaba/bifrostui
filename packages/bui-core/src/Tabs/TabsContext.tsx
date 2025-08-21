import React from 'react';
import { TabChangeEvent, TabsProps } from './Tabs.types';

type TabsContextValueType = Omit<TabsProps, 'onChange'> & {
  triggerChange: TabChangeEvent;
};

const TabsContext = React.createContext<TabsContextValueType | undefined>(
  undefined,
);

if (process.env.NODE_ENV !== 'production') {
  TabsContext.displayName = 'BuiTabsContext';
}

export const TabsContextProvider = TabsContext.Provider;

export default TabsContext;
