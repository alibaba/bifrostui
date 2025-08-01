import { Toast, Dialog } from '@bifrostui/react';
import { useEffect, useState } from 'react';
import { createTheme, mountThemeVars } from '@bifrostui/utils';
import { defaultLight } from '@bifrostui/styles/registry';
import {
  THEME_MODE,
  VARS_TYPE,
  BUILTIN_THEME,
  THEME_ROOT_SELECTOR,
} from './constants';
import componentThemeData from '../../constants/theme-vars.json';
import { setStorage, getStorage, clearStorage, toKebabCase } from './utils';

export const useThemeDesigner = () => {
  // 主题模式：builtin内置主题 custom自定义主题
  const [themeMode, setThemeMode] = useState(THEME_MODE.BUILTIN);
  // 自定义主题-变量类型：common通用变量 component组件变量
  const [varsType, setVarsType] = useState('');
  // 当前编辑的变量
  const [currentEditVars, setCurrentEditVars] = useState({
    name: '',
    type: '',
    cssVars: {},
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  // 已自定义主题的组件
  const [customThemes, setCustomThemes] = useState([]);

  useEffect(() => {
    const storageRes = getStorage() || {};
    const changedList = Object.keys(storageRes);
    setCustomThemes(changedList);
  }, [drawerOpen, themeMode]);

  useEffect(() => {
    const storageRes = getStorage();
    let defaultVars = {};
    if (storageRes) {
      Object.keys(storageRes).forEach((key) => {
        defaultVars = {
          ...defaultVars,
          ...storageRes[key],
        };
      });
      applicateTheme(defaultVars);
      setThemeMode(THEME_MODE.CUSTOM);
    }
  }, []);

  const applicateTheme = (vars) => {
    const rootContent = createTheme({
      rootSelector: THEME_ROOT_SELECTOR,
      cssVars: vars,
    });
    mountThemeVars({
      theme: rootContent,
    });
  };

  const handleVarsTypeChange = (_e, data) => {
    const type =
      data.value === VARS_TYPE.COMMON ? VARS_TYPE.COMMON : VARS_TYPE.COMPONENT;
    setVarsType(type);
    if (type === VARS_TYPE.COMMON) {
      openEdit({
        name: VARS_TYPE.COMMON,
        type: VARS_TYPE.COMMON,
        cssVars: defaultLight.cssVars,
      });
    } else {
      if (!componentThemeData?.[data.value]?.cssVars) {
        Toast.warning('该组件主题不存在');
        return;
      }
      openEdit({
        name: data.value,
        type: VARS_TYPE.COMPONENT,
        cssVars: componentThemeData[data.value].cssVars,
      });
    }
  };

  const saveThemeVars = () => {
    const currentVarDoms = document.querySelectorAll('.bui-input');
    const result = {};
    currentVarDoms.forEach((item) => {
      const key = item.getAttribute('data-cssvar');
      const value = item
        .querySelector('.bui-input-input')
        .getAttribute('value');
      result[key] = value;
    });

    setStorage({
      name: currentEditVars.name,
      varsType,
      value: result,
    });
    const themeVars = getThemeVars();
    applicateTheme(themeVars);
    closeEdit();
  };

  const closeEdit = () => {
    setDrawerOpen(false);
  };

  const openEdit = (options: {
    name: string;
    type: string;
    cssVars: object;
  }) => {
    const storageRes = getStorage(options.name);
    setCurrentEditVars({
      ...options,
      cssVars: storageRes || options.cssVars,
    });
    setDrawerOpen(true);
  };

  const resetAll = async () => {
    await Dialog.confirm({
      header: '确定清空自定义主题?',
      message: '清空自定义主题后，刷新页面将恢复为默认主题',
      onConfirm: () => {
        clearStorage();
        applicateTheme(defaultLight.cssVars);
      },
    });
    setCustomThemes([]);
  };

  const changeToBuiltin = () => {
    if (customThemes.length) {
      Dialog.confirm({
        header: '切换主题',
        message: '当前存在自定义主题，切换后将清空自定义主题',
        onConfirm: () => {
          clearStorage();
          applicateTheme(defaultLight.cssVars);
          setVarsType('');
          setThemeMode(THEME_MODE.BUILTIN);
        },
      });
    } else {
      setVarsType('');
      setThemeMode(THEME_MODE.BUILTIN);
    }
  };

  const getThemeVars = () => {
    let result = defaultLight.cssVars;
    const storageRes = getStorage() || {};
    Object.keys(storageRes).forEach((key) => {
      result = { ...result, ...storageRes[key] };
    });

    return result;
  };

  const copyTheme = () => {
    const themeVars = getThemeVars();
    const rootContent = createTheme({
      rootSelector: THEME_ROOT_SELECTOR,
      cssVars: themeVars,
    });
    return rootContent;
  };

  const goComponentPage = (name) => {
    const newWindow = window.open(`/cores/${toKebabCase(name)}`);
    if (newWindow) {
      newWindow.onload = () => {
        const themeVars = getThemeVars();
        const rootContent = createTheme({
          rootSelector: THEME_ROOT_SELECTOR,
          cssVars: themeVars,
        });
        const style = newWindow.document.createElement('style');
        style.type = 'text/css';
        const styleText = newWindow.document.createTextNode(rootContent);
        style.appendChild(styleText);
        newWindow.document.head.appendChild(style);
      };
    }
  };

  return {
    drawerOpen,
    currentEditVars,
    themeMode,
    varsType,
    customThemes,
    resetAll,
    copyTheme,
    changeToBuiltin,
    setThemeMode,
    saveThemeVars,
    closeEdit,
    goComponentPage,
    setCurrentEditVars,
    handleVarsTypeChange,
  };
};
