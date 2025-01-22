import { createContext } from 'react';
import { BuiSwipeActionContextProps } from './SwipeAction.types';

const BuiSwipeActionContext = createContext<BuiSwipeActionContextProps>({
  closeOnClickActionItem: true,
  close: () => {},
});

export default BuiSwipeActionContext;
