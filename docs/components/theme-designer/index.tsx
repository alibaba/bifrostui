import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Select, SelectOption, Input, Toast } from '@bifrostui/react';
import {
  EditOutlinedIcon,
  CopyOutlinedIcon,
  RefreshOutlinedIcon,
  CloseLargeIcon,
} from '@bifrostui/icons';
import cs from 'clsx';
import componentThemeData from '../../constants/theme-vars.json';
import { BUILTIN_THEME, builtinThemes } from './constants';
import { ThemeCanvas } from './ThemeCanvas';
import './ThemeDesigner.less';

enum CssVarMode {
  Readonly = 'Readonly',
  Editable = 'Editable',
}

type ModifiedCssVars = Record<
  string,
  {
    baseCssVars: Record<string, string>;
    componentsCssVars: {
      [componentName: string]: Record<string, string>;
    };
  }
>;

const selectOptions = Object.keys(componentThemeData)
  .filter((name) => Boolean(componentThemeData[name].cssVars))
  .map((name) => ({
    label: name,
    value: name,
  }));

const builtInThemeData = Object.fromEntries(
  builtinThemes.map((v) => [v.value, v.themeData]),
);

const ThemeDesigner = () => {
  const [toast] = Toast.useToast();
  // 内置主题：default默认 dm大麦 pioneer活力橙
  const [builtinTheme, setBuiltinTheme] = useState(BUILTIN_THEME.DEFAULT);
  const [componentName, setComponentName] = useState('');
  // 存储只发生修改的CSS变量
  const [modifiedCssVars, setModifiedCssVars] = useState<ModifiedCssVars>(() =>
    Object.fromEntries(
      builtinThemes.map((v) => [
        v.value,
        { baseCssVars: {}, componentsCssVars: {} },
      ]),
    ),
  );
  const [cssVarMode, setCssVarMode] = useState<CssVarMode>(CssVarMode.Readonly);
  const [editableCssVar, setEditableCssVar] = useState<
    [token?: string, value?: string]
  >([]);
  const themePlaygroundRef = useRef<HTMLDivElement>();

  const currentCssVars: Record<string, string> = useMemo(() => {
    // 展示组件变量
    if (componentName) {
      return {
        ...componentThemeData[componentName]?.cssVars,
        ...modifiedCssVars[builtinTheme]?.componentsCssVars?.[componentName],
      };
    }

    // 展示基础变量
    return {
      ...builtInThemeData[builtinTheme]?.cssVars,
      ...modifiedCssVars[builtinTheme]?.baseCssVars,
    };
  }, [componentName, builtinTheme, modifiedCssVars]);

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

  const applyCssVars = () => {
    // 清空上一次的主题变量
    document.body.style.cssText = '';
    // 应用最新的主题变量
    Object.entries(currentCssVars).forEach(([token, value]) => {
      document.body.style.setProperty(token, value);
    });
  };

  useEffect(() => {
    applyCssVars();
  }, [currentCssVars]);

  const onResetCssVars = () => {
    if (componentName) {
      modifiedCssVars[builtinTheme].componentsCssVars[componentName] =
        undefined;
    } else {
      modifiedCssVars[builtinTheme].baseCssVars = undefined;
    }
    setModifiedCssVars(JSON.parse(JSON.stringify(modifiedCssVars)));
    toast.success({
      message: '重置成功',
    });
  };

  const onCopyCssVars = async () => {
    try {
      // 组件变量
      const compCssVars = selectOptions.map((option) => {
        return {
          ...componentThemeData[option.value].cssVars,
          ...modifiedCssVars[builtinTheme].componentsCssVars[option.value],
        };
      });
      // 基础变量
      const baseCssVars = {
        ...builtInThemeData[builtinTheme]?.cssVars,
        ...modifiedCssVars[builtinTheme]?.baseCssVars,
      };

      const text = [baseCssVars, ...compCssVars]
        .map((v) => {
          return Object.entries(v)
            .map(([token, value]) => `${token}: ${value as string};`)
            .join('\n');
        })
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

  // 切换主题
  const onSwitchBuiltInTheme = (newBuiltinTheme: BUILTIN_THEME) => {
    setBuiltinTheme(newBuiltinTheme);
    setComponentName('');
  };

  // 切换组件
  const onComponentChange = (e, data) => {
    if (!data.value) return;

    setComponentName(data.value);
  };

  const editCssVar = (token: string, value: string) => {
    setCssVarMode(CssVarMode.Editable);
    setEditableCssVar([token, value]);
  };

  const submitCssVar = () => {
    const [token, value] = editableCssVar;
    const builtinThemeCssVars = modifiedCssVars[builtinTheme];
    if (componentName) {
      if (!builtinThemeCssVars.componentsCssVars[componentName]) {
        builtinThemeCssVars.componentsCssVars[componentName] = {};
      }
      builtinThemeCssVars.componentsCssVars[componentName][token] = value;
    } else {
      if (!builtinThemeCssVars.baseCssVars) {
        builtinThemeCssVars.baseCssVars = {};
      }
      builtinThemeCssVars.baseCssVars[token] = value;
    }
    setModifiedCssVars(JSON.parse(JSON.stringify(modifiedCssVars)));

    setCssVarMode(CssVarMode.Readonly);
    setEditableCssVar([]);
  };

  return (
    <div className="theme-designer">
      <div className="theme-playground" ref={themePlaygroundRef}>
        <div className="theme-css-vars">
          <div className="theme-tabs">
            <div className="theme-mode">
              {builtinThemes.map((v) => {
                return (
                  <div
                    key={v.value}
                    className={cs('theme-mode-item', {
                      'is-active': builtinTheme === v.value,
                    })}
                    onClick={() => {
                      onSwitchBuiltInTheme(v.value);
                    }}
                  >
                    {v.text}
                  </div>
                );
              })}
            </div>
            <div className="theme-css-var-operator" onClick={onCopyCssVars}>
              <CopyOutlinedIcon />
              复制
            </div>
          </div>
          <div className="theme-change-area">
            <Select
              className="theme-component-select"
              placeholder="选择组件"
              onChange={onComponentChange}
              value={componentName}
            >
              {selectOptions.map((item) => (
                <SelectOption
                  key={item.value}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </Select>
            <div className="theme-css-var-operator" onClick={onResetCssVars}>
              <RefreshOutlinedIcon />
              重置
            </div>
          </div>
          <div className="theme-css-var-items scrollbar">
            {Object.entries(currentCssVars).map(
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
                        onClick={() => editCssVar(token, value)}
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
                      token === editableCssVar[0] && (
                        <Input
                          className="theme-css-var-item-value-input"
                          value={editableCssVar[1]}
                          inputProps={{ autoFocus: true }}
                          onChange={(e, data) => {
                            setEditableCssVar([token, data.value]);
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
        <div className="theme-css-canvas scrollbar">
          <ThemeCanvas componentName={componentName} />
          {componentName && (
            <CloseLargeIcon
              className="theme-css-canvas-close-icon"
              onClick={() => setComponentName('')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeDesigner;
