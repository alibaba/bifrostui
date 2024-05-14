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
  const [themeChecked, setThemeChecked] = useState(
    prefersColor === 'dark' ? true : false,
  );
  const onThemeChange = (e, data) => {
    setThemeChecked(data?.checked);
    const theme = data?.checked ? 'dark' : 'light';
    setPrefersColor(theme);
    document.querySelector('html')?.setAttribute('data-color-mode', theme);
    document.querySelector('html')?.setAttribute('data-theme', 'default');
    changeLogo();
  };

  useEffect(() => {
    setThemeChecked(prefersColor === 'dark' ? true : false);
    changeLogo();
  }, [prefersColor]);

  const changeLogo = () => {
    let logoDom = document.getElementsByClassName('dumi-default-logo')?.[0];
    if (logoDom) {
      logoDom.innerHTML =
        prefersColor === 'dark'
          ? '<img src="https://gw.alicdn.com/imgextra/i1/O1CN01LwDOxt1XDDBlZPZEd_!!6000000002889-2-tps-361-96.png">'
          : '<img src="https://gw.alicdn.com/imgextra/i4/O1CN01XWp8e31QbIi5YgLUw_!!6000000001994-2-tps-362-96.png">';
    }
  };

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
