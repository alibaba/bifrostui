import clsx from 'clsx';
import React from 'react';
import { ListItemFooterProps } from './ListItemFooter.types';

import './ListItemFooter.less';

const prefixCls = 'bui-list-item-footer';

const ListItemFooter = React.forwardRef<HTMLElement, ListItemFooterProps>(
  (props, ref) => {
    const {
      children,
      className,
      component: Component = 'div',
      ...others
    } = props;

    return (
      <Component className={clsx(prefixCls, className)} ref={ref} {...others}>
        {children}
      </Component>
    );
  },
);

ListItemFooter.displayName = 'BuiListItemFooter';

export default ListItemFooter;
