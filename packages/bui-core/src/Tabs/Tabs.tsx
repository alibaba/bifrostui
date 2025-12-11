/* eslint-disable consistent-return */
import React, { useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useValue, useEventCallback } from '@bifrostui/utils';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import TabMask from './TabMask';
import { TabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';
import { tabsRootClass } from './classes';

import './Tabs.less';

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    className,
    value,
    defaultValue,
    tabs = [],
    onChange,
    ...others
  } = props;

  const handleOnChange = useEventCallback(
    (e: React.SyntheticEvent, data: { value: string }) => {
      onChange?.(e, { index: data.value });
    },
  );

  const [currentValue, triggerValueChange] = useValue({
    value,
    defaultValue: defaultValue ?? '',
    onChange: handleOnChange,
    config: {
      name: 'Tabs',
      state: 'value',
    },
  });
  const tabsRef = useRef<HTMLDivElement>(null);
  const registeredTabs = useRef<Record<string, React.RefObject<HTMLElement>>>(
    {},
  );
  // Track registration changes to trigger indicator updates explicitly
  const [registrationVersion, setRegistrationVersion] = useState(0);

  // 开发环境警告：tabs 和 children 不应该同时使用
  if (process.env.NODE_ENV !== 'production') {
    if (tabs.length > 0 && React.Children.count(children) > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        'BUI Warning: Tabs 组件不应该同时使用 tabs 属性和 children。' +
          '请只使用其中一种方式。当前将优先使用 tabs 属性，children 将被忽略。',
      );
    }
  }

  // 注册和取消注册 Tab 的回调函数
  const onRegister = useEventCallback(
    (data: { value: string; ref: React.RefObject<HTMLElement> }) => {
      if (data.value !== undefined && data.value !== null) {
        registeredTabs.current[data.value] = data.ref;
        // Increment version to signal registration change
        setRegistrationVersion((v) => v + 1);
      }
    },
  );

  const onUnregister = useEventCallback((data: { value: string }) => {
    delete registeredTabs.current[data.value];
    setRegistrationVersion((v) => v + 1);
  });

  // 使用 useEventCallback 保持回调引用稳定，同时能访问最新的 currentValue 和 triggerValueChange
  const handleClick = useEventCallback(
    (e: React.SyntheticEvent, item: { index: string; disabled?: boolean }) => {
      const { index, disabled = false } = item;
      if (disabled || [undefined, null].includes(index)) return;
      if (index !== currentValue) {
        triggerValueChange(e, index);
      }
    },
  );

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      triggerChange: handleClick,
      onRegister,
      onUnregister,
    }),
    [currentValue, handleClick, onRegister, onUnregister],
  );
  const renderedTabs = useMemo(() => {
    if (tabs.length > 0) {
      return tabs.map((item) => (
        <Tab key={item.index} index={item?.index} disabled={item?.disabled}>
          {item.title}
        </Tab>
      ));
    }
    return children;
  }, [tabs, children]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.count('Tabs render......');
  }

  return (
    <div className={clsx(tabsRootClass, className)} {...others} ref={ref}>
      <TabMask tabsContainerRef={tabsRef} position="left" />
      <TabMask tabsContainerRef={tabsRef} position="right" />

      <div
        className={`${tabsRootClass}-tabs`}
        ref={tabsRef}
        role="tablist"
        aria-orientation="horizontal"
      >
        <TabIndicator
          currentValue={currentValue}
          registeredTabs={registeredTabs}
          tabsContainerRef={tabsRef}
          registrationVersion={registrationVersion}
        />

        <TabsContextProvider value={contextValue}>
          {renderedTabs}
        </TabsContextProvider>
      </div>
    </div>
  );
});

Tabs.displayName = 'BuiTabs';

export default Tabs;
