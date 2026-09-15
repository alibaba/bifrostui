import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useValue, useEventCallback } from '@bifrostui/utils';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import TabMask from './TabMask';
import { TabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';
import { tabsRootClass, tabsScrollClass } from './classes';

import './Tabs.less';

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    className,
    defaultValue,
    value,
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
  const [isScrollable, setIsScrollable] = useState(false);

  if (process.env.NODE_ENV !== 'production') {
    if (tabs.length > 0 && React.Children.count(children) > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        'BUI Warning: Tabs 组件不应该同时使用 tabs 属性和 children。请只使用其中一种方式。当前将优先使用 tabs 属性，children 将被忽略。',
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

  useEffect(() => {
    const tabsEl = tabsRef.current;
    if (!tabsEl) return undefined;

    const checkScrollable = () => {
      const { scrollWidth = 0, offsetWidth = 0 } = tabsEl;
      // 处理浏览器兼容问题，同一个元素的scrollWidth和offsetWidth可能存在误差
      const isOverflow = scrollWidth - offsetWidth > 1;
      setIsScrollable(isOverflow);
    };

    checkScrollable();

    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(checkScrollable);
    resizeObserver.observe(tabsEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, [registrationVersion]);

  const handleKeyDown = useEventCallback((e: React.KeyboardEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    const target = e.target as HTMLElement;
    if (!target || target.getAttribute?.('role') !== 'tab') return;

    const list = tabsRef.current;
    if (!list) return;

    const enabledTabs = Array.from(
      list.querySelectorAll<HTMLElement>('[role="tab"]'),
    ).filter((el) => el.getAttribute('aria-disabled') !== 'true');
    if (enabledTabs.length === 0) return;

    const currentIndex = enabledTabs.indexOf(target);
    let nextIndex = -1;
    let shouldActivate = false;

    switch (e.key) {
      case 'ArrowLeft':
        nextIndex =
          currentIndex <= 0 ? enabledTabs.length - 1 : currentIndex - 1;
        shouldActivate = true;
        break;
      case 'ArrowRight':
        nextIndex =
          currentIndex >= enabledTabs.length - 1 ? 0 : currentIndex + 1;
        shouldActivate = true;
        break;
      case 'Home':
        nextIndex = 0;
        shouldActivate = true;
        break;
      case 'End':
        nextIndex = enabledTabs.length - 1;
        shouldActivate = true;
        break;
      case 'Enter':
      case ' ': {
        e.preventDefault();
        target.click();
        return;
      }
      default:
        return;
    }

    if (nextIndex < 0 || nextIndex === currentIndex) return;
    e.preventDefault();

    const nextTab = enabledTabs[nextIndex];
    if (!nextTab) return;

    nextTab.focus();
    if (shouldActivate) {
      nextTab.click();
    }
  });

  return (
    <div className={clsx(tabsRootClass, className)} {...others} ref={ref}>
      {isScrollable && (
        <>
          <TabMask position="left" />
          <TabMask position="right" />
        </>
      )}

      <div
        className={tabsScrollClass}
        ref={tabsRef}
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <TabIndicator
          currentValue={currentValue}
          registeredTabs={registeredTabs}
          tabsContainerRef={tabsRef}
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
