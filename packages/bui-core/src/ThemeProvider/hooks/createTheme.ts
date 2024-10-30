import { ThemeProps } from '../ThemeProvider.types';

// 待补充扩展
export default function createTheme(options: ThemeProps) {
  const { locale, responsive, ...others } = options || {};
  const buiTheme = {
    locale,
    responsive,
    others,
  };

  return buiTheme;
}
