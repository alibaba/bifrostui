import React, { useMemo, useId, useEffect } from 'react';
import { ThemeContext } from './hooks';
import { BUI_VAR_PREFIX } from './utils/constants';
import { mountTokens } from './utils/mountTokens';
import { ThemeProviderProps } from './ThemeProvider.types';

const ThemeProvider = React.forwardRef<HTMLDivElement, ThemeProviderProps>(
  (props, ref) => {
    const {
      isRoot,
      locale,
      responsive,
      defaultLightToken,
      defaultDarkToken,
      dmLightToken,
      dmDarkToken,
      token,
      children,
    } = props;

    let containerId = (useId() || '').replace(/:/g, '');
    containerId = `${BUI_VAR_PREFIX}${containerId}`;

    const theme = useMemo(() => {
      return { locale };
    }, [locale]);

    let childrenNode = children;

    if (React.isValidElement(children)) {
      childrenNode = React.cloneElement(children as React.ReactElement, {
        className:
          `${containerId} ${(children as React.ReactElement)?.props?.className || ''}`.trim(),
      });
    }

    useEffect(() => {
      // 挂载响应式Tokens
      if (
        responsive ||
        defaultLightToken ||
        defaultDarkToken ||
        dmLightToken ||
        dmDarkToken ||
        token
      ) {
        mountTokens({
          isRoot,
          containerId,
          container: children,
          responsive,
          defaultLightToken,
          defaultDarkToken,
          dmLightToken,
          dmDarkToken,
          token,
        });
      }
    }, [
      isRoot,
      containerId,
      responsive,
      defaultLightToken,
      defaultDarkToken,
      dmLightToken,
      dmDarkToken,
      token,
    ]);

    return (
      <ThemeContext.Provider value={theme}>
        {childrenNode}
      </ThemeContext.Provider>
    );
  },
);

ThemeProvider.displayName = 'BuiThemeProvider';

export default ThemeProvider;
