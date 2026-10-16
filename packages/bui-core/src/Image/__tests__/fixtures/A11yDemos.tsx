import React, { useState } from 'react';
import Image from '../../Image';

/**
 * 自定义 Image 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 Image 组件
export const basicImageDemo = () => {
  return (
    <div>
      <Image
        src="https://via.placeholder.com/150x100"
        alt="示例图片"
        width={150}
        height={100}
      />
    </div>
  );
};

// Demo 2: 可点击的 Image
export const ClickableImageDemo = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Image
        src="https://via.placeholder.com/150x100"
        alt="可点击的示例图片"
        width={150}
        height={100}
        onClick={() => {
          setClicked(!clicked);
          // eslint-disable-next-line no-console
          console.log('图片被点击了');
        }}
      />
      {clicked && <p>图片已被点击</p>}
    </div>
  );
};

// Demo 3: 带占位符的 Image
export const placeholderImageDemo = () => {
  return (
    <div>
      <Image
        src=""
        alt="带占位符的图片"
        width={150}
        height={100}
        placeholder={<div>加载中...</div>}
      />
    </div>
  );
};

// Demo 4: 错误状态的 Image
export const errorImageDemo = () => {
  return (
    <div>
      <Image
        src="https://invalid-url.com/nonexistent.jpg"
        alt="加载失败的图片"
        width={150}
        height={100}
        fallback={<div>图片加载失败</div>}
      />
    </div>
  );
};

// Demo 5: 懒加载 Image
export const lazyImageDemo = () => {
  return (
    <div>
      <Image
        src="https://via.placeholder.com/150x100"
        alt="懒加载图片"
        width={150}
        height={100}
        lazy
      />
    </div>
  );
};

// Demo 6: 无 alt 属性的 Image（测试默认行为）
export const noAltImageDemo = () => {
  return (
    <div>
      <Image
        src="https://via.placeholder.com/150x100"
        width={150}
        height={100}
      />
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicImageDemo,
  ClickableImageDemo,
  placeholderImageDemo,
  errorImageDemo,
  lazyImageDemo,
  noAltImageDemo,
};
