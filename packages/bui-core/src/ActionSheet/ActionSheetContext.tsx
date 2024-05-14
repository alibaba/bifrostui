import React from 'react';
import { ActionSheetContextValue } from './ActionSheet.types';

const ActionSheetContext = React.createContext<
  ActionSheetContextValue | undefined
>(undefined);

ActionSheetContext.displayName = 'BuiActionSheetContext';

export default ActionSheetContext;
