import React from 'react';
import Button from '../../Button';

/**
 * 自定义 Button 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Button 组件
export const basicButtonDemo = () => {
  return (
    <div>
      <Button>基础按钮</Button>
    </div>
  );
};

// Demo 2: 不同变体的 Button
export const variantButtonDemo = () => {
  return (
    <div>
      <Button variant="text">文字按钮</Button>
      <Button variant="outlined">线框按钮</Button>
      <Button variant="contained">填充按钮</Button>
      <Button variant="subtle">柔和按钮</Button>
    </div>
  );
};

// Demo 3: 不同颜色的 Button
export const colorButtonDemo = () => {
  return (
    <div>
      <Button color="primary">主要按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="warning">警告按钮</Button>
      <Button color="danger">危险按钮</Button>
    </div>
  );
};

// Demo 4: 不同大小的 Button
export const sizeButtonDemo = () => {
  return (
    <div>
      <Button size="small">小按钮</Button>
      <Button size="medium">中按钮</Button>
      <Button size="large">大按钮</Button>
      <Button size="full" style={{ width: '200px' }}>
        全宽按钮
      </Button>
    </div>
  );
};

// Demo 5: 禁用状态的 Button
export const disabledButtonDemo = () => {
  return (
    <div>
      <Button disabled>禁用按钮</Button>
      <Button variant="contained" disabled>
        禁用填充按钮
      </Button>
    </div>
  );
};

// Demo 6: 带图标的 Button
export const iconButtonDemo = () => {
  return (
    <div>
      <Button startIcon={<span>🌟</span>}>带前缀图标</Button>
      <Button endIcon={<span>📅</span>}>带后缀图标</Button>
    </div>
  );
};

// Demo 7: 带 aria-label 的 Button
export const ariaLabelButtonDemo = () => {
  return (
    <div>
      <Button aria-label="提交表单">提交</Button>
      <Button aria-label="取消操作">取消</Button>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicButtonDemo,
  variantButtonDemo,
  colorButtonDemo,
  sizeButtonDemo,
  disabledButtonDemo,
  iconButtonDemo,
  ariaLabelButtonDemo,
};
