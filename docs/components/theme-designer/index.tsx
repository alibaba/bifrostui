import React, { useState, useRef, useEffect } from 'react';
import { Select, SelectOption, Input, Toast } from '@bifrostui/react';
import {
  EditOutlinedIcon,
  CopyOutlinedIcon,
  RefreshOutlinedIcon,
} from '@bifrostui/icons';
import {
  defaultLight,
  dmLight,
  pioneerLight,
} from '@bifrostui/styles/registry';
import cs from 'clsx';
import componentThemeData from '../../constants/theme-vars.json';
import { VARS_TYPE, BUILTIN_THEME, builtinThemes } from './constants';
import { ThemeCanvas } from './ThemeCanvas';
import './index.less';

enum ThemeMode {
  // 内置主题
  BuiltinMode = 'BuiltinMode',
  // 自定义主题
  CustomMode = 'CustomMode',
}

enum CssVarMode {
  Readonly = 'Readonly',
  Editable = 'Editable',
}

const builtInThemeCssVars = {
  [BUILTIN_THEME.DEFAULT]: defaultLight,
  [BUILTIN_THEME.DM]: dmLight,
  [BUILTIN_THEME.PIONEER]: pioneerLight,
};

// 通用变量name
const CUSTOM_UNIVERSAL_VAR_NAME = 'common';

const ThemeDesigner = () => {
  const [toast] = Toast.useToast();
  const [activeThemeMode, setActiveThemeMode] = useState(ThemeMode.BuiltinMode);
  // 内置主题：default默认 dm大麦 pioneer活力橙
  const [builtinTheme, setBuiltinTheme] = useState(BUILTIN_THEME.DEFAULT);
  const [customComponentName, setCustomComponentName] = useState(
    CUSTOM_UNIVERSAL_VAR_NAME,
  );
  const [cssVarMode, setCssVarMode] = useState<CssVarMode>(CssVarMode.Readonly);
  const [activeThemeCssVars, setActiveThemeCssVars] = useState<
    Record<string, string>
  >(builtInThemeCssVars[builtinTheme]?.cssVars);
  const [editableCssVarToken, setEditableCssVarToken] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const themePlaygroundRef = useRef<HTMLDivElement>();
  const cssCanvasRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const updateElementHeight = () => {
      if (!themePlaygroundRef.current) return;
      // 获取元素的尺寸与位置
      const rect = themePlaygroundRef.current.getBoundingClientRect();
      const viewportHeight = document.documentElement.clientHeight;

      // 59px是底部paddingBottom之和
      themePlaygroundRef.current.style.height = `${viewportHeight - rect.top - 59}px`;
    };

    updateElementHeight();

    window.addEventListener('resize', updateElementHeight);

    return () => {
      window.removeEventListener('resize', updateElementHeight);
    };
  }, []);

  useEffect(() => {
    if (activeThemeMode === ThemeMode.CustomMode) {
      const options = Object.keys(componentThemeData)
        .filter((name) => !!componentThemeData[name].cssVars)
        .map((name) => ({
          label: name,
          value: name,
        }));
      options.unshift({ label: '通用变量', value: VARS_TYPE.COMMON });
      setSelectOptions(options);
    }
  }, [activeThemeMode]);

  const applyCssVars = (cssVars: Record<string, string> = {}) => {
    // 清空上一次的主题变量
    cssCanvasRef.current.style.cssText = '';
    // 应用最新的主题变量
    Object.entries(cssVars).forEach(([token, value]) => {
      cssCanvasRef.current.style.setProperty(token, value);
    });
  };

  const updateActiveThemeCssVars = (tab: ThemeMode) => {
    if (tab === ThemeMode.CustomMode) {
      const cssVars =
        customComponentName === CUSTOM_UNIVERSAL_VAR_NAME
          ? defaultLight?.cssVars
          : componentThemeData[customComponentName]?.cssVars;
      setActiveThemeCssVars(cssVars);
      applyCssVars(cssVars);
    } else if (tab === ThemeMode.BuiltinMode) {
      const cssVars = builtInThemeCssVars[builtinTheme]?.cssVars;
      setActiveThemeCssVars(cssVars);
      applyCssVars(cssVars);
    }
  };

  const onResetCssVars = () => {
    updateActiveThemeCssVars(activeThemeMode);
    toast.success({
      message: '重置成功',
    });
  };

  const onCopyCssVars = async () => {
    try {
      const text = Object.entries(activeThemeCssVars)
        .map(([token, value]) => `${token}: ${value};`)
        .join('\n');
      await navigator?.clipboard?.writeText(text);
      toast.success({
        message: '复制成功',
      });
    } catch (err) {
      console.log(err);
      toast.fail({
        message: '复制失败',
      });
    }
  };

  const onCustomComponentNameChange = (e, data) => {
    if (!data.value) return;

    setActiveThemeCssVars(
      data.value === CUSTOM_UNIVERSAL_VAR_NAME
        ? defaultLight?.cssVars
        : componentThemeData[data.value]?.cssVars,
    );
    setCustomComponentName(data.value);
  };

  const onSwitchBuiltInTheme = (newBuiltinTheme: BUILTIN_THEME) => {
    setBuiltinTheme(newBuiltinTheme);
    const cssVars = builtInThemeCssVars[newBuiltinTheme]?.cssVars;
    setActiveThemeCssVars(cssVars);
    applyCssVars(cssVars);
  };

  const editCssVar = (token: string) => {
    setCssVarMode(CssVarMode.Editable);
    setEditableCssVarToken(token);
  };

  const submitCssVar = () => {
    setCssVarMode(CssVarMode.Readonly);
    setEditableCssVarToken('');
    applyCssVars(activeThemeCssVars);
  };

  return (
    <div className="bui-theme-designer">
      <div className="theme-playground" ref={themePlaygroundRef}>
        <div className="theme-css-vars">
          <div className="theme-tabs">
            <div className="theme-mode">
              <div
                className={cs('theme-mode-item', {
                  'is-active': activeThemeMode === ThemeMode.BuiltinMode,
                })}
                onClick={() => {
                  setActiveThemeMode(ThemeMode.BuiltinMode);
                  updateActiveThemeCssVars(ThemeMode.BuiltinMode);
                }}
              >
                内置主题
              </div>
              <div
                className={cs('theme-mode-item', {
                  'is-active': activeThemeMode === ThemeMode.CustomMode,
                })}
                onClick={(e) => {
                  setActiveThemeMode(ThemeMode.CustomMode);
                  updateActiveThemeCssVars(ThemeMode.CustomMode);
                }}
              >
                自定义主题
              </div>
            </div>
          </div>
          <div className="theme-tab-switch">
            {activeThemeMode === ThemeMode.BuiltinMode ? (
              <div className="theme-mode-builtIn">
                {builtinThemes.map((item) => (
                  <div
                    className={cs('theme-mode-builtIn-item', {
                      'is-active': item.value === builtinTheme,
                    })}
                    key={item.value}
                    onClick={() => onSwitchBuiltInTheme(item.value)}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            ) : (
              <div className="custom-theme-operator">
                <Select
                  placeholder="选择组件/通用变量"
                  onChange={onCustomComponentNameChange}
                  value={customComponentName}
                >
                  {selectOptions.map((item) => (
                    <SelectOption
                      key={item.value}
                      value={item.value}
                      label={item.label}
                    />
                  ))}
                </Select>
              </div>
            )}
            <div className="theme-css-var-operators">
              <div className="theme-css-var-operator" onClick={onResetCssVars}>
                <RefreshOutlinedIcon />
                重置
              </div>
              <div className="theme-css-var-operator" onClick={onCopyCssVars}>
                <CopyOutlinedIcon />
                复制
              </div>
            </div>
          </div>
          <div className="theme-css-var-items scrollbar">
            {Object.entries(activeThemeCssVars ?? {}).map(
              ([token, value]: [string, string]) => {
                const isColorValue =
                  value.startsWith('#') ||
                  value.startsWith('rgb') ||
                  value.startsWith('rgba');
                return (
                  <div className="theme-css-var-item" key={token}>
                    <div className="theme-css-var-item-token">{token}</div>
                    <div className="theme-css-var-item-value">
                      <EditOutlinedIcon
                        className="theme-css-var-item-value-edit-icon"
                        onClick={() => editCssVar(token)}
                      />
                      {isColorValue ? (
                        <div className="theme-css-var-item-value-color">
                          <div className="theme-css-var-item-value-color-text">
                            {value}
                          </div>
                          <div
                            className="theme-css-var-item-value-color-icon"
                            style={{ backgroundColor: value }}
                          />
                        </div>
                      ) : (
                        value
                      )}
                    </div>
                    {cssVarMode === CssVarMode.Editable &&
                      token === editableCssVarToken && (
                        <Input
                          className="theme-css-var-item-value-input"
                          value={activeThemeCssVars[editableCssVarToken]}
                          inputProps={{ autoFocus: true }}
                          onChange={(e, data) => {
                            setActiveThemeCssVars((val) => ({
                              ...val,
                              [token]: data.value,
                            }));
                          }}
                          onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                              submitCssVar();
                            }
                          }}
                          onBlur={submitCssVar}
                        />
                      )}
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="theme-css-canvas scrollbar" ref={cssCanvasRef}>
          <ThemeCanvas componentName={customComponentName} />
        </div>
      </div>
    </div>
  );
};

export default ThemeDesigner;
