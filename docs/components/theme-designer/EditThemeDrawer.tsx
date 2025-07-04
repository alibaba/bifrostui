import React from 'react';
import { Input, Button, Drawer } from '@bifrostui/react';
import { defaultLight } from '@bifrostui/styles/registry';
import { VARS_TYPE } from './constants';
import componentThemeData from '../../constants/theme-vars.json';
import './EditThemeDrawer.less';

interface EditThemeDrawerProps {
  open: boolean;
  currentEditVars: any;
  setCurrentEditVars: any;
  closeEdit: () => void;
  saveThemeVars: () => void;
}

const EditThemeDrawer = (props: EditThemeDrawerProps) => {
  const {
    open,
    currentEditVars,
    setCurrentEditVars,
    closeEdit,
    saveThemeVars,
  } = props;

  const isChange = (key, value) => {
    const { name, type } = currentEditVars;
    let baseVars = {};
    if (type === VARS_TYPE.COMMON) {
      baseVars = defaultLight.cssVars;
    } else {
      baseVars = componentThemeData[name].cssVars;
    }
    return baseVars[key] !== value;
  };

  const getNewVars = (key, value) => {
    const { cssVars = {} } = currentEditVars;
    return {
      ...currentEditVars,
      cssVars: {
        ...cssVars,
        [key]: value,
      },
    };
  };

  const onChange = (_e, data, key) => {
    const tempVars = getNewVars(key, data.value);
    setCurrentEditVars(tempVars);
  };

  const resetVar = (key) => {
    const { type, name } = currentEditVars;
    let baseVars = {};
    if (type === VARS_TYPE.COMMON) {
      baseVars = defaultLight.cssVars;
    } else {
      baseVars = componentThemeData[name].cssVars;
    }
    const originValue = baseVars[key];
    const tempVars = getNewVars(key, originValue);
    setCurrentEditVars({ ...tempVars });
  };

  return (
    <Drawer className="theme-editor-drawer" anchor="right" open={open}>
      <div className="action-header">
        <div className="vars-name">
          {currentEditVars.type === VARS_TYPE.COMMON
            ? '通用变量'
            : currentEditVars.name}
        </div>
        <div>
          <Button
            variant="subtle"
            color="primary"
            className="theme-editor-cancel"
            onClick={closeEdit}
          >
            取消
          </Button>
          <Button variant="subtle" color="primary" onClick={saveThemeVars}>
            保存
          </Button>
        </div>
      </div>
      <div className="vars-content">
        {Object.keys(currentEditVars.cssVars).length &&
          Object.keys(currentEditVars.cssVars).map((key) => {
            const value = currentEditVars.cssVars[key];
            const hasChanged = isChange(key, value);
            return (
              <div key={key} className="cssvar-item">
                <div className="var-info-wrap">
                  <div className={`var-name ${hasChanged && 'has-changed'}`}>
                    {key}
                  </div>
                  {hasChanged && (
                    <div
                      className="reset-btn"
                      onClick={() => {
                        resetVar(key);
                      }}
                    >
                      重置
                    </div>
                  )}
                </div>
                <Input
                  className="var-value"
                  data-cssvar={key}
                  value={value}
                  onChange={(e, data) => {
                    onChange(e, data, key);
                  }}
                />
              </div>
            );
          })}
      </div>
    </Drawer>
  );
};

export default EditThemeDrawer;
