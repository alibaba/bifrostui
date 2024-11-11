import React from 'react';
import createTheme from './createTheme';
import ThemeContext from './ThemeContext';

export default function useTheme(defaultTheme = createTheme(null)) {
  const contextTheme = React.useContext(ThemeContext);
  return !contextTheme || Object.keys(contextTheme).length === 0
    ? defaultTheme
    : contextTheme;
}
