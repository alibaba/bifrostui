import React from 'react';
import { ThemeContext, useTheme } from './hooks';

function mergeTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return { ...outerTheme, ...localTheme };
}

const ThemeProvider = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { theme: localTheme, children } = props;
  const outerTheme = useTheme();
  const theme = React.useMemo(() => {
    return outerTheme === null
      ? { ...localTheme }
      : mergeTheme(outerTheme, localTheme);
  }, [outerTheme, localTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
});

ThemeProvider.displayName = 'BuiThemeProvider';

export default ThemeProvider;
