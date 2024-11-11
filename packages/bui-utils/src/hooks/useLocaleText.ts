import { BaseLang, ThemeProps, CN, useTheme } from '@bifrostui/react';

type SubsetBaseLang = {
  [K in keyof BaseLang]?: BaseLang[K];
};

// 官网默认语言是zh-CN 外部使用若不传locale，则默认显示中文
function useLocaleText(componentName: string, theme?: Partial<ThemeProps>) {
  const { locale } = useTheme(theme);

  return { ...CN[componentName], ...(locale?.[componentName] || {}) };
}

export default useLocaleText;
