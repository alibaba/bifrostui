import { createContext } from 'react';
import { BuiSwipeActionContextProps } from './SwipeAction.types';

const BuiSwipeActionContext = createContext<BuiSwipeActionContextProps>({
  closeOnClickActionItem: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
});

export default BuiSwipeActionContext;
