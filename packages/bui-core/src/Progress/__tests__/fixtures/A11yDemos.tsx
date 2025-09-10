import React from 'react';
import Progress from '../../Progress';

/**
 * 自定义 Progress 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Progress 组件
export const basicProgressDemo = () => {
  return (
    <div>
      <Progress percent={40} />
    </div>
  );
};

// Demo 2: 不同颜色的 Progress
export const coloredProgressDemo = () => {
  return (
    <div>
      <Progress percent={40} strokeColor="var(--bui-color-primary)" />
      <Progress percent={50} strokeColor="var(--bui-color-info)" />
      <Progress percent={30} strokeColor="var(--bui-color-success)" />
      <Progress percent={80} strokeColor="var(--bui-color-warning)" />
      <Progress percent={90} strokeColor="var(--bui-color-vip)" />
    </div>
  );
};

// Demo 3: 不同宽度的 Progress
export const sizedProgressDemo = () => {
  return (
    <div>
      <Progress percent={60} strokeWidth={10} />
      <Progress percent={60} strokeWidth={15} />
      <Progress percent={60} strokeWidth={20} />
    </div>
  );
};

// Demo 4: 渐变色 Progress
export const gradientProgressDemo = () => {
  return (
    <div>
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-primary)',
          to: 'var(--bui-color-primary-light)',
        }}
      />
      <Progress
        percent={90}
        strokeColor={{
          '0%': 'var(--bui-color-orange)',
          '100%': 'var(--bui-color-orange-light)',
        }}
      />
    </div>
  );
};

// Demo 5: 自定义背景色的 Progress
export const customTrailColorProgressDemo = () => {
  return (
    <div>
      <Progress percent={60} trailColor="var(--bui-color-primary-light)" />
      <Progress percent={80} trailColor="var(--bui-color-gray-light)" />
    </div>
  );
};

// Demo 6: 带无障碍属性的 Progress
export const accessibilityProgressDemo = () => {
  return (
    <div>
      <Progress percent={50} aria-label="文件下载进度" />
      <Progress
        percent={75}
        aria-label="数据加载进度"
        aria-valuetext="已完成75%"
      />
      <Progress percent={30} aria-describedby="progress-description" />
      <span id="progress-description" style={{ display: 'none' }}>
        这是进度条的详细描述信息
      </span>
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicProgressDemo,
  coloredProgressDemo,
  sizedProgressDemo,
  gradientProgressDemo,
  customTrailColorProgressDemo,
  accessibilityProgressDemo,
};
