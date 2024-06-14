import React from 'react';
import { CheckboxContextProps } from './Checkbox.types';

const CheckboxContext = React.createContext<CheckboxContextProps | null>(null);

export const CheckboxContextProvider = CheckboxContext.Provider;

export default CheckboxContext;
