import clsx from 'clsx';
import React from 'react';
import { ListProps } from './List.types';
import ListContext from './ListContext';

import './List.less';

const prefixCls = 'bui-list';

const List = React.forwardRef<HTMLElement, ListProps>((props, ref) => {
  const {
    hideDivider,
    children,
    className,
    size,
    component: Component,
    header,
    subheader,
    ...others
  } = props;

  const context = React.useMemo(() => {
    return {
      hideDivider,
    };
  }, [hideDivider]);

  return (
    <ListContext.Provider value={context}>
      <Component
        className={clsx(prefixCls, className, `${prefixCls}-${size}`)}
        ref={ref}
        {...others}
      >
        {header}
        {subheader}
        {children}
      </Component>
    </ListContext.Provider>
  );
});

List.displayName = 'BuiList';
List.defaultProps = {
  hideDivider: false,
  size: 'medium',
  component: 'div',
};

export default List;
