import * as React from 'react';
import Checkbox from '../../Checkbox';

/**
 * 自定义 Checkbox 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Checkbox 组件
export const basicCheckboxDemo = () => {
  return (
    <div>
      <label>
        <Checkbox checked />
        Checkbox
      </label>
    </div>
  );
};

// Demo 2: 禁用的 Checkbox
export const disabledCheckboxDemo = () => {
  return (
    <div>
      <label>
        <Checkbox disabled />
        Checkbox
      </label>
    </div>
  );
};

// Demo 3: 带 aria-label 的 Checkbox
export const ariaLabelCheckboxDemo = () => {
  return (
    <div>
      <Checkbox inputProps={{ 'aria-label': '复选框' }}>Checkbox</Checkbox>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicCheckboxDemo,
  disabledCheckboxDemo,
  ariaLabelCheckboxDemo,
};
