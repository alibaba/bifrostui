import * as React from 'react';
import Radio from '../../Radio';

/**
 * 自定义 Radio 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Radio 组件
export const basicRadioDemo = () => {
  return (
    <div>
      <label>
        <Radio checked />
        Radio
      </label>
    </div>
  );
};

// Demo 2: 禁用的 Radio
export const disabledRadioDemo = () => {
  return (
    <div>
      <label>
        <Radio disabled />
        Radio
      </label>
    </div>
  );
};

// Demo 3: 带 aria-label 的 Radio
export const ariaLabelRadioDemo = () => {
  return (
    <div>
      <Radio inputProps={{ 'aria-label': '单选框' }}>Radio</Radio>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicRadioDemo,
  disabledRadioDemo,
  ariaLabelRadioDemo,
};
