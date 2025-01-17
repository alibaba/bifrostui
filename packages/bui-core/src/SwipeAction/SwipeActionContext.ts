import { createContext } from 'react';
import { BuiSwipeActionContextProps } from './SwipeAction.types';

const BuiSwipeActionContext = createContext<BuiSwipeActionContextProps>({
  closeOnAction: true,
});

export default BuiSwipeActionContext;
