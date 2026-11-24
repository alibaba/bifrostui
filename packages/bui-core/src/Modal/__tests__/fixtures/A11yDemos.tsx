import * as React from 'react';
import Modal from '../../Modal';

/**
 * 自定义 Modal 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Modal 组件
export const basicModalDemo = () => {
  return (
    <Modal open disablePortal>
      这是一个基础的 Modal 组件示例
    </Modal>
  );
};

// Demo 2: keepMounted
export const keepMountedDemo = () => {
  return (
    <Modal disablePortal keepMounted>
      <div
        style={{ padding: '20px', background: 'white', borderRadius: '8px' }}
      >
        这是一个基础的 keepMounted Modal 组件示例
      </div>
    </Modal>
  );
};
