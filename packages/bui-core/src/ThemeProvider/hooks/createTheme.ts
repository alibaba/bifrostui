import { ThemeProps } from '../ThemeProvider.types';

export default function createTheme(options: ThemeProps) {
  const { locale, ...others } = options || {};
  const buiTheme = {
    locale,
    others,
  };

  return buiTheme;
}
