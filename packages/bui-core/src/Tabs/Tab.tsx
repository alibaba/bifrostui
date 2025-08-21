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
    'aria-controls': ariaControls,
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
      aria-controls={ariaControls ?? `bui-tabpanel-${index}`}
      tabIndex={tabIndex ?? (isActive && !disabled ? 0 : -1)}
      ref={ref}
      className={rootCls}
      {...others}
      onClick={handleClick}
    >
      {children}
      {isMini && (
        <div
          className={clsx(`${prefixCls}-miniapp-active-line`, {
            'bui-indicator-invisible': !isActive,
          })}
        />
      )}
    </div>
  );
});

Tab.displayName = 'BuiTab';

export default Tab;
