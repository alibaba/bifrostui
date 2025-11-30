import React, { SyntheticEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { isMini, useContextSelector, useForkRef } from '@bifrostui/utils';
import { TabProps } from './Tab.types';
import TabsContext from './TabsContext';
import './Tab.less';

const rootClass = 'bui-tab';

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    className,
    children,
    index,
    disabled = false,
    onClick,
    ...others
  } = props;

  const innerRef = useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(ref, innerRef);

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

  // Register tab on mount, unregister on unmount
  useEffect(() => {
    if (index !== undefined && index !== null) {
      onRegister?.({ value: index, ref: innerRef });
    }
    return () => {
      if (index !== undefined && index !== null) {
        onUnregister?.({ value: index });
      }
    };
  }, [onRegister, onUnregister, index]);

  const rootCls = clsx(
    rootClass,
    {
      [`${rootClass}-active`]: !isMini && isActive,
      [`${rootClass}-miniapp-active`]: isMini && isActive,
      [`${rootClass}-disabled`]: disabled,
    },
    className,
  );

  const handleClick = (e: SyntheticEvent) => {
    if (disabled) return;
    e.preventDefault();
    triggerChange?.(e, { index });
    onClick?.(e, { index });
  };

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.count('Tab render');
  }

  return (
    <div
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      ref={handleRef}
      className={rootCls}
      {...others}
      onClick={handleClick}
    >
      {children}
      {isMini && (
        <div
          className={clsx(`${rootClass}-miniapp-active-line`, {
            'bui-tabs-indicator-invisible': !isActive,
          })}
        />
      )}
    </div>
  );
});

Tab.displayName = 'BuiTab';

// 使用 React.memo 避免父组件渲染时的不必要重新渲染
// Tab 只依赖 context 的选择值，不需要响应父组件的每次渲染
export default React.memo(Tab);
