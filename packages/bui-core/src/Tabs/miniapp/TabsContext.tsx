import { createContext } from '@bifrostui/utils';
import { TabChangeEvent } from '../Tabs.types';

export interface TabRegisterData {
  value: string;
}

export interface TabsContextValueType {
  value?: string;
  triggerChange?: TabChangeEvent;
  onRegister?: (data: TabRegisterData) => void;
  onUnregister?: (data: { value: string }) => void;
  /** 容器的唯一ID，用于生成子元素ID */
  tabsContainerId?: string;
}

const TabsContext = createContext<TabsContextValueType>({
  triggerChange: undefined,
  onRegister: undefined,
  onUnregister: undefined,
  tabsContainerId: undefined,
});

if (process.env.NODE_ENV !== 'production') {
  TabsContext.displayName = 'BuiTabsContext';
}

export const TabsContextProvider = TabsContext.Provider;

export default TabsContext;
