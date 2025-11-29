import * as React from 'react';
import Badge from '../../Badge';

/**
 * 自定义 Badge 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Badge 组件
export const basicBadgeDemo = () => {
  return (
    <div>
      <Badge content="12">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>内容</div>
      </Badge>
    </div>
  );
};

// Demo 2: 不同颜色的 Badge
export const colorBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge content="1" color="primary">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Primary
        </div>
      </Badge>
      <Badge content="2" color="success">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Success
        </div>
      </Badge>
      <Badge content="3" color="warning">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Warning
        </div>
      </Badge>
      <Badge content="4" color="danger">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Danger
        </div>
      </Badge>
    </div>
  );
};

// Demo 3: 不同形状的 Badge
export const typeBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge content="99" type="standard">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Standard
        </div>
      </Badge>
      <Badge type="dot">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>Dot</div>
      </Badge>
      <Badge content="NEW" type="bubble">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Bubble
        </div>
      </Badge>
    </div>
  );
};

// Demo 4: 使用 max 属性的 Badge
export const maxBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge content={99} max={50}>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>50+</div>
      </Badge>
      <Badge content={150} max={99}>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>99+</div>
      </Badge>
    </div>
  );
};

// Demo 5: 无障碍属性测试 Demo
export const accessibilityBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <Badge content={5} aria-label="自定义标签">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          自定义标签
        </div>
      </Badge>
      <Badge content={3} role="img">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          自定义角色
        </div>
      </Badge>
      <Badge content={1} aria-hidden>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          隐藏角色
        </div>
      </Badge>
      <Badge content={2} aria-hidden>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>隐藏</div>
      </Badge>
    </div>
  );
};

// Demo 6: showZero 和 invisible 测试
export const invisibilityBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge content={0} showZero>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          ShowZero
        </div>
      </Badge>
      <Badge content={0} showZero={false}>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          HideZero
        </div>
      </Badge>
      <Badge content={5} invisible={false}>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          Visible
        </div>
      </Badge>
    </div>
  );
};

// Demo 7: 复杂交互场景
export const complexInteractionBadgeDemo = () => {
  const ComplexInteractionBadgeDemo = () => {
    const [count, setCount] = React.useState(1);
    const [visible, setVisible] = React.useState(true);

    return (
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Badge content={count} invisible={!visible}>
          <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
            内容
          </div>
        </Badge>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          style={{ padding: '4px 8px' }}
        >
          增加({count})
        </button>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          style={{ padding: '4px 8px' }}
        >
          {visible ? '隐藏' : '显示'}
        </button>
      </div>
    );
  };

  return <ComplexInteractionBadgeDemo />;
};

// Demo 8: 文本内容和特殊值测试
export const specialContentBadgeDemo = () => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Badge content="NEW">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>文本</div>
      </Badge>
      <Badge content="99+">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>99+</div>
      </Badge>
      <Badge content={1}>
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>单数</div>
      </Badge>
      <Badge content="">
        <div style={{ width: 40, height: 40, background: '#f0f0f0' }}>
          空内容
        </div>
      </Badge>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicBadgeDemo,
  colorBadgeDemo,
  typeBadgeDemo,
  maxBadgeDemo,
  accessibilityBadgeDemo,
  invisibilityBadgeDemo,
  complexInteractionBadgeDemo,
  specialContentBadgeDemo,
};
