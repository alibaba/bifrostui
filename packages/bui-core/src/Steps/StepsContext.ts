import React from 'react';
import { StepsContextProps } from './Steps.types';

const StepsContext = React.createContext<StepsContextProps | null>(null);

export const StepsContextProvider = StepsContext.Provider;

export default StepsContext;
