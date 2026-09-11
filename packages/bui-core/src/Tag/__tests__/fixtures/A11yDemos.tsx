import React, { useState } from 'react';
import Tag from '../../Tag';

/**
 * 自定义 Tag 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Tag 组件
export const basicTagDemo = () => {
  return (
    <div>
      <Tag color="primary">主要标签</Tag>
      <Tag color="success">成功标签</Tag>
      <Tag color="warning">警告标签</Tag>
      <Tag color="danger">危险标签</Tag>
      <Tag color="info">信息标签</Tag>
      <Tag color="neutral">中性标签</Tag>
    </div>
  );
};

// Demo 2: 不同变体的 Tag
export const variantTagDemo = () => {
  return (
    <div>
      <Tag variant="contained" color="primary">
        填充标签
      </Tag>
      <Tag variant="outlined" color="success">
        边框标签
      </Tag>
      <Tag variant="subtle" color="warning">
        轻量标签
      </Tag>
    </div>
  );
};

// Demo 3: 可点击的 Tag
export const ClickableTagDemo = () => {
  const [clicked, setClicked] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setClicked((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    // eslint-disable-next-line no-console
    console.log(`点击了标签: ${tag}`);
  };

  return (
    <div>
      <Tag
        color="primary"
        onClick={() => handleTagClick('tag1')}
        style={{
          opacity: clicked.includes('tag1') ? 0.6 : 1,
          margin: '4px',
        }}
      >
        可点击标签 1
      </Tag>
      <Tag
        color="success"
        onClick={() => handleTagClick('tag2')}
        style={{
          opacity: clicked.includes('tag2') ? 0.6 : 1,
          margin: '4px',
        }}
      >
        可点击标签 2
      </Tag>
      <Tag
        color="warning"
        onClick={() => handleTagClick('tag3')}
        style={{
          opacity: clicked.includes('tag3') ? 0.6 : 1,
          margin: '4px',
        }}
      >
        可点击标签 3
      </Tag>
      {clicked.length > 0 && <p>已点击的标签: {clicked.join(', ')}</p>}
    </div>
  );
};

// Demo 4: 自定义颜色的 Tag
export const customColorTagDemo = () => {
  return (
    <div>
      <Tag htmlColor="#ff6b6b" variant="contained">
        自定义红色
      </Tag>
      <Tag htmlColor="#4ecdc4" variant="outlined">
        自定义青色
      </Tag>
      <Tag htmlColor="#45b7d1" variant="subtle">
        自定义蓝色
      </Tag>
      <Tag htmlColor="rgb(255, 193, 7)" variant="contained">
        RGB 黄色
      </Tag>
    </div>
  );
};

// Demo 5: 带有 aria-label 的 Tag
export const ariaLabelTagDemo = () => {
  return (
    <div>
      <Tag
        color="primary"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('删除用户');
        }}
        aria-label="删除用户标签"
      >
        用户
      </Tag>
      <Tag
        color="success"
        onClick={() => {
          // eslint-disable-next-line no-console
          console.log('编辑项目');
        }}
        aria-label="编辑项目标签"
      >
        项目
      </Tag>
      <Tag color="info" aria-label="只读的设置信息">
        设置
      </Tag>
    </div>
  );
};

// Demo 6: 复杂交互的 Tag 列表
const ComplexTagListDemo = () => {
  const [tags, setTags] = useState([
    { id: 1, name: 'React', active: true, color: 'primary' as const },
    { id: 2, name: 'Vue', active: false, color: 'success' as const },
    { id: 3, name: 'Angular', active: false, color: 'warning' as const },
    { id: 4, name: 'Svelte', active: true, color: 'info' as const },
    { id: 5, name: 'TypeScript', active: true, color: 'danger' as const },
  ]);

  const toggleTag = (id: number) => {
    setTags((prevTags) =>
      prevTags.map((tag) =>
        tag.id === id ? { ...tag, active: !tag.active } : tag,
      ),
    );
  };

  const activeTags = tags.filter((tag) => tag.active);

  return (
    <div>
      <h4>技术标签选择器</h4>
      <div style={{ marginBottom: '10px' }}>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            color={tag.color}
            variant={tag.active ? 'contained' : 'outlined'}
            onClick={() => toggleTag(tag.id)}
            aria-label={`${tag.active ? '取消选择' : '选择'} ${tag.name} 技术标签`}
            style={{
              margin: '2px',
              cursor: 'pointer',
              opacity: tag.active ? 1 : 0.7,
            }}
          >
            {tag.name}
          </Tag>
        ))}
      </div>
      <p>
        已选择的技术:{' '}
        {activeTags.length > 0
          ? activeTags.map((tag) => tag.name).join(', ')
          : '无'}
      </p>
      <button
        type="button"
        onClick={() => {
          setTags((prevTags) =>
            prevTags.map((tag) => ({ ...tag, active: false })),
          );
        }}
      >
        清除所有选择
      </button>
    </div>
  );
};
export const complexTagListDemo = () => {
  return <ComplexTagListDemo />;
};

// 默认导出所有 demo
export default {
  basicTagDemo,
  variantTagDemo,
  ClickableTagDemo,
  customColorTagDemo,
  ariaLabelTagDemo,
  complexTagListDemo,
};
