import { usePrefersColor, useSiteData } from 'dumi';
import React, { type FC, useState, useEffect } from 'react';
import './index.less';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';
import { Switch } from '@bifrostui/react';

const ColorSwitch: FC = () => {
  const {
    themeConfig: {
      prefersColor: { default: defaultColor },
    },
  } = useSiteData();
  const [, prefersColor = defaultColor, setPrefersColor] = usePrefersColor();
  const [themeChecked, setThemeChecked] = useState(prefersColor === 'dark');
  const onThemeChange = (e, data) => {
    setThemeChecked(data?.checked);
    const theme = data?.checked ? 'dark' : 'light';
    setPrefersColor(theme);
    document.querySelector('html')?.setAttribute('data-color-mode', theme);
    const currentDataTheme =
      document.querySelector('html')?.getAttribute('data-theme') || 'pioneer';
    document
      .querySelector('html')
      ?.setAttribute('data-theme', currentDataTheme);
  };

  useEffect(() => {
    setThemeChecked(prefersColor === 'dark');
  }, [prefersColor]);

  return (
    <span className="dumi-default-color-switch">
      <Switch
        checkedChildren={<MoonOutlinedIcon />}
        unCheckedChildren={<SunOutlinedIcon />}
        checked={themeChecked}
        onChange={onThemeChange}
        size="large"
      />
    </span>
  );
};

export default ColorSwitch;
