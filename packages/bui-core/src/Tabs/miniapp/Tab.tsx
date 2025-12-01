import React, { useEffect } from 'react';
import clsx from 'clsx';
import { View } from '@tarojs/components';
import { useContextSelector } from '@bifrostui/utils';
import { TabProps } from '../Tab.types';
import TabsContext from './TabsContext';
import { tabRootClass, tabActiveClass, tabDisabledClass } from '../classes';
import '../Tab.less';

const Tab: React.FC<TabProps> = (props) => {
  const {
    className,
    children,
    index,
    disabled = false,
    onClick,
    style,
  } = props;

  // 只订阅当前tab是否active，而不是订阅整个value
  const isActive = useContextSelector(
    TabsContext,
    (ctx) => ctx.value === index,
  );
  const triggerChange = useContextSelector(
    TabsContext,
    (ctx) => ctx.triggerChange,
  );
  const onRegister = useContextSelector(TabsContext, (ctx) => ctx.onRegister);
  const onUnregister = useContextSelector(
    TabsContext,
    (ctx) => ctx.onUnregister,
  );
  const tabsContainerId = useContextSelector(
    TabsContext,
    (ctx) => ctx.tabsContainerId,
  );

  // Register tab on mount, unregister on unmount
  useEffect(() => {
    if (index !== undefined && index !== null) {
      onRegister?.({ value: index });
    }
    return () => {
      if (index !== undefined && index !== null) {
        onUnregister?.({ value: index });
      }
    };
  }, [onRegister, onUnregister, index]);

  const rootCls = clsx(
    tabRootClass,
    {
      [tabActiveClass]: isActive,
      [tabDisabledClass]: disabled,
    },
    className,
  );

  // 生成唯一的ID，用于指示器定位
  const tabId = tabsContainerId ? `${tabsContainerId}-tab-${index}` : undefined;

  return (
    <View
      id={tabId}
      className={rootCls}
      style={style}
      onClick={(e) => {
        if (disabled) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        triggerChange?.(e as any, { index });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick?.(e as any, { index });
      }}
    >
      {children}
    </View>
  );
};

Tab.displayName = 'BuiTab';

// 使用 React.memo 避免父组件渲染时的不必要重新渲染
// 自定义比较函数，只在必要的 props 变化时重新渲染
export default React.memo(Tab, (prevProps, nextProps) => {
  // 只比较关键 props，减少不必要的渲染
  return (
    prevProps.index === nextProps.index &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.className === nextProps.className &&
    prevProps.children === nextProps.children
  );
});
