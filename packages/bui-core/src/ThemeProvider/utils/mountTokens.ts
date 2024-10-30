import { breakpoints, rootSelector } from '../config/constants';
import { ThemeProps } from '../ThemeProvider.types';

/**
 * 挂载Design Tokens
 */
export default function mountTokens(tokenOptions?: ThemeProps) {
  const {
    lightToken,
    darkToken,
    dmLightToken,
    dmDarkToken,
    token,
    responsive,
  } = tokenOptions || {};
  console.log(lightToken, darkToken, dmLightToken, dmDarkToken, token);

  let rootString = `${rootSelector.join(',')} { `;

  // 处理响应式相关token
  Object.entries(responsive || {}).forEach((config) => {
    const [size, tokenConfig] = config || [];
    if (!size || !tokenConfig) return;

    const cssVariablesString = Object.entries(tokenConfig || {}).reduce(
      (acc, [key, value]) => {
        return `${acc} ${key}: ${value};`;
      },
      '',
    );

    const mediaQuery = size === 'xs' ? 'max-width' : 'min-width';
    rootString += `@media (${mediaQuery}: ${breakpoints[size]}) { ${cssVariablesString} }`;
  });
  rootString += '}';

  // 通过<style>标签挂载自定义css变量
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(rootString));

  document.head.appendChild(style);
}
