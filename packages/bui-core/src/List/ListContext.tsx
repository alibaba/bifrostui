import React from 'react';

interface IListContext {
  /** 是否展示分割线 */
  hideDivider?: boolean;
}
const ListContext = React.createContext<IListContext>({
  hideDivider: false,
});

export default ListContext;
