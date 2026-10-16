import * as React from 'react';
import Popover from '../../Popover';

/**
 * 自定义 Popover 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Popover 组件
export const basicPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="基础气泡"
        content="这是一个基础的 Popover 组件示例"
        defaultOpen
        role="tooltip"
        aria-label="帮助信息"
      >
        <button type="button">基础气泡</button>
      </Popover>
    </div>
  );
};

// Demo 2: 位置定位 Popover
export const placementPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="位置测试"
        content="测试不同位置的气泡"
        defaultOpen
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        role="tooltip"
      >
        <button type="button">位置气泡</button>
      </Popover>
    </div>
  );
};

// Demo 3: 触发方式 Popover
export const triggerPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="触发方式"
        content="测试不同触发方式"
        trigger={['click', 'hover']}
        role="tooltip"
      >
        <button type="button">触发方式</button>
      </Popover>
    </div>
  );
};

// Demo 4: 无障碍 Popover
export const accessibilityPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="无障碍测试"
        content="支持键盘导航和屏幕阅读器"
        defaultOpen
        role="dialog"
        aria-label="操作确认对话框"
        autoFocus
      >
        <button type="button">无障碍气泡</button>
      </Popover>
    </div>
  );
};

// Demo 5: 复杂交互 Popover
export const complexInteractionPopoverDemo = () => {
  const ComplexInteractionPopoverDemo = () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? '关闭气泡' : '打开气泡'}
        </button>
        <Popover
          title="复杂交互"
          content={
            <div>
              <p>这是一个复杂交互的气泡</p>
              <button type="button" onClick={() => setOpen(false)}>
                关闭
              </button>
            </div>
          }
          open={open}
          trigger="none"
          role="dialog"
          onOpenChange={(e, data) => {
            setOpen(data.open);
          }}
        >
          <span>复杂交互目标</span>
        </Popover>
      </div>
    );
  };

  return <ComplexInteractionPopoverDemo />;
};

// Demo 6: 复杂内容 Popover
export const complexContentPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="复杂内容"
        content={
          <div>
            <p>包含多种元素的复杂内容：</p>
            <input placeholder="输入框" />
            <button type="button">按钮</button>
            <a href="#test">链接</a>
          </div>
        }
        defaultOpen
        role="dialog"
        aria-label="复杂内容对话框"
      >
        <button type="button">复杂内容</button>
      </Popover>
    </div>
  );
};

// Demo 7: 偏移设置 Popover
export const offsetPopoverDemo = () => {
  return (
    <div>
      <Popover
        title="偏移设置"
        content="测试偏移距离设置"
        defaultOpen
        offsetSpacing={20}
        role="tooltip"
      >
        <button type="button">偏移气泡</button>
      </Popover>
    </div>
  );
};

// Demo 8: 边界情况 Popover
export const edgeCasePopoverDemo = () => {
  return (
    <div>
      <Popover
        title=""
        content=""
        hideArrow
        defaultOpen
        role="tooltip"
        closeOnEscape={false}
      >
        <button type="button">边界情况</button>
      </Popover>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicPopoverDemo,
  placementPopoverDemo,
  triggerPopoverDemo,
  accessibilityPopoverDemo,
  complexInteractionPopoverDemo,
  complexContentPopoverDemo,
  offsetPopoverDemo,
  edgeCasePopoverDemo,
};
