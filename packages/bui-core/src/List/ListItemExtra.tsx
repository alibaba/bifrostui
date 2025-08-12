import clsx from 'clsx';
import React from 'react';
import { ListItemExtraProps } from './ListItemExtra.types';

import './ListItemExtra.less';

const prefixCls = 'bui-list-item-extra';

const ListItemExtra = React.forwardRef<HTMLElement, ListItemExtraProps>(
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

ListItemExtra.displayName = 'BuiListItemExtra';

export default ListItemExtra;
