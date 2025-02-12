import clsx from 'clsx';
import React from 'react';
import { ListItemContentProps } from './ListItemContent.types';

import './ListItemContent.less';

const prefixCls = 'bui-list-item-content';

const ListItemContent = React.forwardRef<HTMLElement, ListItemContentProps>(
  (props, ref) => {
    const {
      children,
      className,
      component: Component = 'div',
      primary,
      secondary,
      ...others
    } = props;

    // 传children 优先展示children
    return (
      <Component className={clsx(prefixCls, className)} ref={ref} {...others}>
        {children || (
          <>
            {primary && <div className={`${prefixCls}-primary`}>{primary}</div>}
            {secondary && (
              <div className={`${prefixCls}-secondary`}>{secondary}</div>
            )}
          </>
        )}
      </Component>
    );
  },
);

ListItemContent.displayName = 'BuiListItemContent';

export default ListItemContent;
