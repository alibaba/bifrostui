import { createContext } from 'react';
import { BuiSelectContextProps } from './Select.types';

const BuiSelectContext = createContext<BuiSelectContextProps>({
  selectValue: null,
});

export default BuiSelectContext;
