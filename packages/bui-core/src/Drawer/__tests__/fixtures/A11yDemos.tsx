/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import Drawer from '../../Drawer';

/**
 * 自定义 Drawer 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Drawer 组件（从底部弹出）
export const basicDrawerDemo = () => {
  return (
    <Drawer open anchor="bottom" aria-label="基础抽屉" disablePortal>
      <div style={{ padding: '20px', minHeight: '200px' }}>
        <h3>基础抽屉内容</h3>
        <p>这是一个从底部弹出的抽屉</p>
        <button type="button">确认</button>
        <button type="button">取消</button>
      </div>
    </Drawer>
  );
};

// Demo 2: 从左侧弹出的 Drawer
export const leftDrawerDemo = () => {
  return (
    <Drawer open anchor="left" aria-label="左侧抽屉" disablePortal>
      <div style={{ padding: '20px', width: '300px', minHeight: '100vh' }}>
        <h3>左侧抽屉</h3>
        <ul>
          <li>
            <a href="#item1">菜单项 1</a>
          </li>
          <li>
            <a href="#item2">菜单项 2</a>
          </li>
          <li>
            <a href="#item3">菜单项 3</a>
          </li>
        </ul>
      </div>
    </Drawer>
  );
};

// Demo 3: 从右侧弹出的 Drawer
export const rightDrawerDemo = () => {
  return (
    <Drawer open anchor="right" aria-label="右侧抽屉" disablePortal>
      <div style={{ padding: '20px', width: '300px', minHeight: '100vh' }}>
        <h3>右侧抽屉</h3>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">姓名:</label>
            <input id="name" type="text" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">邮箱:</label>
            <input id="email" type="email" />
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    </Drawer>
  );
};

// Demo 4: 从顶部弹出的 Drawer
export const topDrawerDemo = () => {
  return (
    <Drawer open anchor="top" aria-label="顶部抽屉" disablePortal>
      <div style={{ padding: '20px', minHeight: '200px' }}>
        <h3>顶部抽屉</h3>
        <p>这是一个从顶部弹出的抽屉</p>
        <div>
          <button type="button">操作按钮 1</button>
          <button type="button">操作按钮 2</button>
        </div>
      </div>
    </Drawer>
  );
};

// Demo 5: 无背景遮罩的 Drawer
export const noBackdropDrawerDemo = () => {
  return (
    <Drawer
      open
      anchor="bottom"
      hideBackdrop
      aria-label="无背景遮罩抽屉"
      disablePortal
    >
      <div style={{ padding: '20px', minHeight: '150px' }}>
        <h3>无背景遮罩</h3>
        <p>这个抽屉没有背景遮罩</p>
        <button type="button">关闭</button>
      </div>
    </Drawer>
  );
};

// Demo 6: 可交互的 Drawer
export const interactiveDrawerDemo = () => {
  const InteractiveDrawerDemo = () => {
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log('提交表单:', formData);
      handleClose();
    };

    if (!open) {
      return (
        <button type="button" onClick={() => setOpen(true)}>
          重新打开抽屉
        </button>
      );
    }

    return (
      <Drawer
        open={open}
        anchor="right"
        onClose={handleClose}
        aria-label="可交互抽屉"
        disablePortal
      >
        <div style={{ padding: '20px', width: '350px' }}>
          <h3>反馈表单</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="feedback-name">姓名:</label>
              <input
                id="feedback-name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                aria-required="true"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="feedback-message">反馈内容:</label>
              <textarea
                id="feedback-message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                aria-required="true"
                rows={4}
              />
            </div>
            <div>
              <button type="submit">提交反馈</button>
              <button type="button" onClick={handleClose}>
                取消
              </button>
            </div>
          </form>
        </div>
      </Drawer>
    );
  };

  return <InteractiveDrawerDemo />;
};

// 默认导出所有 demo
export default {
  basicDrawerDemo,
  leftDrawerDemo,
  rightDrawerDemo,
  topDrawerDemo,
  noBackdropDrawerDemo,
  interactiveDrawerDemo,
};
