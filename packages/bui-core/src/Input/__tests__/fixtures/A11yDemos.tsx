import * as React from 'react';
import Input from '../../Input';

/**
 * 自定义 Input 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Input 组件
export const basicInputDemo = () => {
  return (
    <div>
      <label>
        First name: <Input placeholder="请输入内容" />
      </label>
    </div>
  );
};

// Demo 2: 禁用的 Input
export const disabledInputDemo = () => {
  return (
    <div>
      <label>
        First name:
        <Input placeholder="请输入内容" disabled />
      </label>
    </div>
  );
};

// Demo 3: 必填的 Input
export const requiredInputDemo = () => {
  return (
    <div>
      <label>
        First name:
        <Input placeholder="请输入内容" inputProps={{ required: true }} />
      </label>
    </div>
  );
};

// Demo 4: 只读的 Input
export const readOnlyInputDemo = () => {
  return (
    <div>
      <label>
        First name:
        <Input placeholder="请输入内容" inputProps={{ readOnly: true }} />
      </label>
    </div>
  );
};

// Demo 5: 占位内容 的 Input
export const placeholderInputDemo = () => {
  return (
    <div>
      <label>
        First name:
        <Input placeholder="请输入内容" />
      </label>
    </div>
  );
};

// Demo 6: 带 aria-label 的 Input
export const ariaLabelInputDemo = () => {
  return (
    <div>
      <label>
        First name:
        <Input
          placeholder="请输入内容"
          inputProps={{ 'aria-label': '输入框' }}
        />
      </label>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicInputDemo,
  disabledInputDemo,
  requiredInputDemo,
  readOnlyInputDemo,
  placeholderInputDemo,
  ariaLabelInputDemo,
};
