import React from 'react';
import Tooltip from '../../Tooltip';

/**
 * 自定义 Tooltip 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Tooltip 组件
export const basicTooltipDemo = () => {
  return (
    <div>
      <Tooltip title="这是一个基础的提示文本">
        <button type="button">基础Tooltip</button>
      </Tooltip>
    </div>
  );
};

// Demo 2: 不同位置的 Tooltip
export const placementTooltipDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Tooltip title="顶部提示" placement="top">
        <button type="button">顶部</button>
      </Tooltip>
      <Tooltip title="右侧提示" placement="right">
        <button type="button">右侧</button>
      </Tooltip>
      <Tooltip title="底部提示" placement="bottom">
        <button type="button">底部</button>
      </Tooltip>
      <Tooltip title="左侧提示" placement="left">
        <button type="button">左侧</button>
      </Tooltip>
    </div>
  );
};

// Demo 3: 不同触发方式的 Tooltip
export const triggerTooltipDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Tooltip title="点击触发的提示" trigger="click">
        <button type="button">点击触发</button>
      </Tooltip>
      <Tooltip title="悬停触发的提示" trigger="hover">
        <button type="button">悬停触发</button>
      </Tooltip>
    </div>
  );
};

// Demo 4: 无障碍功能演示
export const accessibilityTooltipDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <Tooltip title="自定义角色的提示" role="status" aria-label="状态提示">
        <button type="button">状态提示</button>
      </Tooltip>

      <Tooltip title="支持Escape键关闭" closeOnEscape trigger="click">
        <button type="button">Escape键关闭</button>
      </Tooltip>
    </div>
  );
};

// Demo 5: 复杂交互 Tooltip
export const complexInteractionTooltipDemo = () => {
  const ComplexInteractionTooltipDemo = () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Tooltip
          title="受控模式的提示"
          open={open}
          onOpenChange={(_, data) => setOpen(data.open)}
        >
          <button type="button">受控Tooltip</button>
        </Tooltip>
        <button type="button" onClick={() => setOpen(!open)}>
          外部控制: {open ? '关闭' : '打开'}
        </button>
      </div>
    );
  };

  return <ComplexInteractionTooltipDemo />;
};

// Demo 6: 复杂内容演示
export const complexContentTooltipDemo = () => {
  const ComplexContent = () => (
    <div style={{ maxWidth: '200px' }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>复杂内容</h4>
      <p style={{ margin: '0 0 8px 0', fontSize: '12px' }}>
        这是一个包含多种元素的复杂提示内容。
      </p>
      <ul style={{ margin: 0, fontSize: '12px', paddingLeft: '16px' }}>
        <li>项目一</li>
        <li>项目二</li>
      </ul>
    </div>
  );

  return (
    <div>
      <Tooltip title={<ComplexContent />}>
        <button type="button">复杂内容Tooltip</button>
      </Tooltip>
    </div>
  );
};

// Demo 7: Offset偏移演示
export const offsetTooltipDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Tooltip title="无偏移" offset={0}>
        <button type="button">无偏移</button>
      </Tooltip>
      <Tooltip title="偏移10px" offset={10}>
        <button type="button">偏移10px</button>
      </Tooltip>
      <Tooltip title="偏移20px" offset={20}>
        <button type="button">偏移20px</button>
      </Tooltip>
    </div>
  );
};

// Demo 8: 边界情况演示
export const edgeCaseTooltipDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <Tooltip title="">
        <button type="button">空内容</button>
      </Tooltip>

      <Tooltip title="很长很长很长很长很长很长很长很长很长很长很长很长的提示文本内容">
        <button type="button">长文本</button>
      </Tooltip>

      <Tooltip title="特殊字符 !@#$%^&*()_+-=[]{}|;':&quot;,./">
        <button type="button">特殊字符</button>
      </Tooltip>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicTooltipDemo,
  placementTooltipDemo,
  triggerTooltipDemo,
  accessibilityTooltipDemo,
  complexInteractionTooltipDemo,
  complexContentTooltipDemo,
  offsetTooltipDemo,
  edgeCaseTooltipDemo,
};
