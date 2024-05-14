import clsx from 'clsx';
import React from 'react';
import { ListItemHeaderProps } from './ListItemHeader.types';

import './ListItemHeader.less';

const prefixCls = 'bui-list-item-header';

const ListItemHeader = React.forwardRef<HTMLDivElement, ListItemHeaderProps>(
  (props, ref) => {
    const { children, className, component: Component, ...others } = props;

    return (
      <Component className={clsx(prefixCls, className)} ref={ref} {...others}>
        {children}
      </Component>
    );
  },
);

ListItemHeader.displayName = 'BuiListItemHeader';
ListItemHeader.defaultProps = {
  component: 'div',
};

export default ListItemHeader;
