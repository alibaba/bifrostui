import React from 'react';
import TextArea from '../../TextArea';

/**
 * 自定义 TextArea 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 TextArea 组件
export const basicTextAreaDemo = () => {
  return (
    <div>
      <TextArea placeholder="请输入内容" />
    </div>
  );
};

// Demo 2: 带 aria-label 的 TextArea
export const ariaLabelTextAreaDemo = () => {
  return (
    <div>
      <TextArea placeholder="请输入内容" aria-label="用户评论输入框" />
    </div>
  );
};

// Demo 3: 带 aria-describedby 的 TextArea
export const ariaDescribedbyTextAreaDemo = () => {
  return (
    <div>
      <TextArea
        placeholder="请输入内容"
        aria-describedby="textarea-description"
      />
      <span id="textarea-description" style={{ display: 'none' }}>
        请输入您的评论，最多200字
      </span>
    </div>
  );
};

// Demo 4: 必填和只读的 TextArea
export const requiredAndReadonlyTextAreaDemo = () => {
  return (
    <div>
      <TextArea placeholder="必填项" aria-required />
      <TextArea
        placeholder="只读项"
        aria-readonly
        defaultValue="这是只读内容"
      />
    </div>
  );
};

// Demo 5: 带字数统计的 TextArea
export const showCountTextAreaDemo = () => {
  return (
    <div>
      <TextArea
        placeholder="最多输入50个字"
        maxLength={50}
        showCount
        aria-label="带字数统计的输入框"
      />
    </div>
  );
};

// Demo 6: 自动聚焦的 TextArea
export const autoFocusTextAreaDemo = () => {
  return (
    <div>
      <TextArea
        placeholder="自动聚焦"
        autoFocus
        aria-label="自动聚焦的输入框"
      />
    </div>
  );
};

// Demo 7: 多行 TextArea
export const multiLineTextAreaDemo = () => {
  return (
    <div>
      <TextArea
        placeholder="多行输入"
        rows={4}
        aria-rowcount={4}
        aria-label="多行文本输入框"
      />
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicTextAreaDemo,
  ariaLabelTextAreaDemo,
  ariaDescribedbyTextAreaDemo,
  requiredAndReadonlyTextAreaDemo,
  showCountTextAreaDemo,
  autoFocusTextAreaDemo,
  multiLineTextAreaDemo,
};
