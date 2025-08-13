import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import Badge from '../Badge';
import { TabBarItemProps } from './index.types';
import './TabBarItem.less';
import TabBarContext from './TabBarContext';

const prefixCls = 'bui-tab-bar-item';
const TabBarItem = React.forwardRef<HTMLDivElement, TabBarItemProps>(
  (props, ref) => {
    const { currentIndex, activeColor, color, onChange } =
      useContext(TabBarContext);

    const {
      title,
      icon,
      activeIcon,
      index,
      BadgeProps,
      className,
      children,
      onClick,
      ...others
    } = props || {};

    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
      if (onChange) {
        onChange(e, { value: index });
      }
    };
    return (
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-active`]: currentIndex === index,
        })}
        ref={ref}
        onClick={handleClick}
        {...others}
      >
        {children || Object.values(BadgeProps || {})?.length > 0 ? (
          <Badge {...BadgeProps}>
            {currentIndex === index && activeIcon ? activeIcon : icon}
            <div
              className={clsx(`${prefixCls}-title`, {
                [`${prefixCls}-${
                  currentIndex === index ? activeColor : color
                }`]: currentIndex === index ? activeColor : color,
              })}
            >
              {title}
            </div>
          </Badge>
        ) : (
          <>
            {currentIndex === index && activeIcon ? activeIcon : icon}
            <div
              className={clsx(`${prefixCls}-title`, {
                [`${prefixCls}-${
                  currentIndex === index ? activeColor : color
                }`]: currentIndex === index ? activeColor : color,
              })}
            >
              {title}
            </div>
          </>
        )}
      </div>
    );
  },
);

TabBarItem.displayName = 'BuiTabBarItem';
export default TabBarItem;
