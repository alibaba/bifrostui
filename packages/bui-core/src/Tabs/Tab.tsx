import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import { isMini } from '@bifrostui/utils';
import { TabProps } from './Tab.types';
import TabsContext from './TabsContext';
import './Tab.less';

const prefixCls = 'bui-tab';

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    className,
    children,
    index,
    disabled = false,
    onClick,
    role = 'tab',
    tabIndex,
    'aria-selected': ariaSelected,
    'aria-disabled': ariaDisabled,
    ...others
  } = props;
  const tabsContext = React.useContext(TabsContext);
  const { value, triggerChange } = tabsContext;
  const isActive = index === value;

  const rootCls = clsx(
    prefixCls,
    {
      [`${prefixCls}-active`]: !isMini && isActive,
      [`${prefixCls}-miniapp-active`]: isMini && isActive,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  const handleClick = (e: SyntheticEvent) => {
    if (disabled) return;
    e.preventDefault();
    triggerChange(e, { index });
    onClick?.(e, { index });
  };

  return (
    <div
      role={role}
      aria-selected={ariaSelected ?? isActive}
      aria-disabled={ariaDisabled ?? disabled}
      tabIndex={tabIndex ?? (disabled ? -1 : 0)}
      ref={ref}
      className={rootCls}
      {...others}
      onClick={handleClick}
    >
      {children}
      {isMini && (
        <div
          className={clsx(`${prefixCls}-miniapp-active-line`, {
            'bui-tabs-indicator-invisible': !isActive,
          })}
        />
      )}
    </div>
  );
});

Tab.displayName = 'BuiTab';

export default Tab;
