import React from 'react';
import { createContext } from '@bifrostui/utils';
import { TabChangeEvent } from './Tabs.types';

export interface TabRegisterData {
  value: string;
  ref: React.RefObject<HTMLElement>;
}

export interface TabsContextValueType {
  value?: string;
  triggerChange?: TabChangeEvent;
  onRegister?: (data: TabRegisterData) => void;
  onUnregister?: (data: { value: string }) => void;
}

const TabsContext = createContext<TabsContextValueType>({
  triggerChange: undefined,
  onRegister: undefined,
  onUnregister: undefined,
});

if (process.env.NODE_ENV !== 'production') {
  TabsContext.displayName = 'BuiTabsContext';
}

export const TabsContextProvider = TabsContext.Provider;

export default TabsContext;
