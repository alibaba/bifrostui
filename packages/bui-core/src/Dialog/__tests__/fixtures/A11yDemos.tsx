import * as React from 'react';
import Dialog from '../../Dialog';

/**
 * 自定义 Dialog 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Dialog 组件
export const basicDialogDemo = () => {
  return (
    <Dialog
      open
      disablePortal
      title="基础对话框"
      content="这是一个基础的 Dialog 组件示例"
    />
  );
};

// Demo 2: 带输入框的 Dialog (Prompt 类型)
export const promptDialogDemo = () => {
  return (
    <Dialog
      open
      disablePortal
      type="prompt"
      title="输入对话框"
      content="请输入您的姓名："
      placeholder="请输入姓名"
    />
  );
};

// Demo 3: 警告类型的 Dialog
export const alertDialogDemo = () => {
  return (
    <Dialog
      open
      disablePortal
      title="警告"
      content="这是一个警告对话框，请注意！"
      type="alert"
    />
  );
};
