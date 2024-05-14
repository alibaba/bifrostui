import React from 'react';
import { RadioGroupContextProps } from './Radio.types';

const RadioGroupContext = React.createContext<
  RadioGroupContextProps | undefined
>(undefined);

export const RadioContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
