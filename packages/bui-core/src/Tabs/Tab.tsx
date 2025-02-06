import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';
import React from 'react';
import { TabProps } from './Tab.types';
import TabsContext from './TabsContext';
import './Tab.less';

const prefixCls = 'bui-tab';
const defaultProps = {
  disabled: false,
} satisfies Partial<TabProps>;

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { className, children, index, disabled, onClick, ...others } = {
    ...defaultProps,
    ...props,
  };
  const tabsContext = React.useContext(TabsContext);
  const { value, triggerChange } = tabsContext;

  return (
    <div
      ref={ref}
      className={clsx(
        prefixCls,
        {
          [`${prefixCls}-active`]: !isMini && index === value,
          [`${prefixCls}-miniapp-active`]: isMini && index === value,
          [`${prefixCls}-disabled`]: disabled,
        },
        className,
      )}
      {...others}
      onClick={(e) => {
        if (disabled) return;
        e.preventDefault();
        triggerChange(e, { index });
        onClick?.(e, { index });
      }}
    >
      {children}
      {isMini && (
        <div
          className={clsx(`${prefixCls}-miniapp-active-line`, {
            'bui-indicator-invisible': index !== value,
          })}
        />
      )}
    </div>
  );
});

Tab.displayName = 'BuiTab';

export default Tab;
