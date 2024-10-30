// 待补充扩展
export default function createTheme(options) {
  const { locale, breakpoints, ...others } = options || {};
  const buiTheme = {
    locale,
    breakpoints,
    others,
  };

  return buiTheme;
}
