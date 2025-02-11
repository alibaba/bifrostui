import { ArrowForwardIcon } from '@bifrostui/icons';
import clsx from 'clsx';
import React from 'react';
import ListContext from './ListContext';
import { ListItemProps } from './ListItem.types';
import ListItemFooter from './ListItemFooter';

import './ListItem.less';

const prefixCls = 'bui-list-item';

const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  (
    {
      children,
      className,
      hideDivider = false,
      disabled,
      onClick,
      endIcon,
      component: Component = 'div',
      ...others
    },
    ref,
  ) => {
    // 列表条目尾部箭头icon
    let chevron;
    if (typeof endIcon === 'boolean') {
      chevron = endIcon && <ArrowForwardIcon size="small" />;
    } else if (React.isValidElement(endIcon)) {
      chevron = endIcon;
    } else {
      chevron = onClick && <ArrowForwardIcon size="small" />;
    }
    // 传递divider
    const context = React.useContext(ListContext);

    return (
      <Component
        className={clsx(prefixCls, className, {
          [`${prefixCls}-divider`]: !(hideDivider || context.hideDivider),
          [`${prefixCls}-disabled`]: disabled,
        })}
        onClick={onClick}
        ref={ref}
        {...others}
      >
        {children}
        {chevron && <ListItemFooter>{chevron}</ListItemFooter>}
      </Component>
    );
  },
);

ListItem.displayName = 'BuiListItem';

export default ListItem;
