import { createContext } from 'react';
import { BuiSwipeActionContextProps } from './SwipeAction.types';

const BuiSwipeActionContext = createContext<BuiSwipeActionContextProps>({
  // TODO 与实现不一致，缺少props
  closeOnAction: true,
});

export default BuiSwipeActionContext;
