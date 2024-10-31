import React, { useMemo } from 'react';
import { ThemeContext } from './hooks';
import mountTokens from './utils/mountTokens';

// function mergeTheme(outerTheme, localTheme) {
//   if (typeof localTheme === 'function') {
//     const mergedTheme = localTheme(outerTheme);

//     return mergedTheme;
//   }

//   return { ...outerTheme, ...localTheme };
// }

const ThemeProvider = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const {
    locale,
    responsive,
    defaultLightToken,
    defaultDarkToken,
    dmLightToken,
    dmDarkToken,
    token,
    children,
  } = props;

  const theme = useMemo(() => {
    return { locale };
  }, [locale]);

  // 挂载响应式Tokens
  mountTokens({
    responsive,
    defaultLightToken,
    defaultDarkToken,
    dmLightToken,
    dmDarkToken,
    token,
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
});

ThemeProvider.displayName = 'BuiThemeProvider';

export default ThemeProvider;
