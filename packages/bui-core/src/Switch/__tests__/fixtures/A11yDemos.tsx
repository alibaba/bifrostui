import * as React from 'react';
import Switch from '../../Switch';

/**
 * 自定义 Switch 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Switch 组件
export const basicSwitchDemo = () => {
  return (
    <div>
      <label>
        <Switch />
        Switch
      </label>
    </div>
  );
};

// Demo 2: 禁用的 Switch
export const disabledSwitchDemo = () => {
  return (
    <div>
      <label>
        <Switch disabled />
        Switch
      </label>
    </div>
  );
};

// Demo 3: 带 aria-label 的 Switch
export const ariaLabelSwitchDemo = () => {
  return (
    <div>
      <Switch inputProps={{ 'aria-label': '开关' }}>Switch</Switch>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicSwitchDemo,
  disabledSwitchDemo,
  ariaLabelSwitchDemo,
};
