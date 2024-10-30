import React from 'react';
import { ThemeProps } from '../ThemeProvider.types';

const ThemeContext = React.createContext<ThemeProps | null>(null);
export default ThemeContext;
