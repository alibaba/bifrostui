/* eslint-disable */
import React from 'react';
import './index.less';

export default () => {
  const fontFamily = [
    'PingFang SC',
    'Chinese Quote',
    'Segoe UI',
    'roboto',
    'Hiragino Sans GB',
    'Microsoft YaHei',
    'Helvetica Neue',
    'helvetica',
    'arial',
    'sans-serif',
  ];

  const fontSizeList = [
    { name: '--bui-title-size-1', size: '21px' },
    { name: '--bui-title-size-2', size: '18px' },
    { name: '--bui-title-size-3', size: '16px' },
    { name: '--bui-title-size-4', size: '15px' },
    { name: '--bui-text-size-1', size: '14px' },
    { name: '--bui-text-size-2', size: '13px' },
    { name: '--bui-text-size-3', size: '12px' },
    { name: '--bui-text-size-4', size: '11px' },
    { name: '--bui-text-size-5', size: '10px' },
  ];

  const fontWeightList = [
    { name: '--bui-font-weight-normal', size: '400' },
    { name: '--bui-font-weight-medium', size: '500' },
    { name: '--bui-font-weight-bold', size: '600' },
  ];

  return (
    <div className="font">
      <h3>字体</h3>
      <p>
        BUI
        的字体策略注重在确保阅读舒适性的同时，保持视觉上的连贯性和专业性。无论是精确的信息传达还是品牌个性的展示，BUI
        的字体设计都旨在赋予设计者和开发者最大的表现力与创造自由，让每一段文本都准确、美观地呈现。
      </p>
      <div className="container font-family-container">
        {fontFamily.map((item, index) => (
          <div key={index} style={{ fontFamily: item, marginBottom: '9px' }}>
            Hello BUI~<code className="font-item-text">{item}</code>
          </div>
        ))}
        <div className="font-family-priority">
          <div className="priority-high">高</div>
          <div className="priority-text">优先级</div>
          <div className="priority-low">低</div>
          <div className="arrow-down"></div>
        </div>
      </div>

      <h3>字体大小</h3>
      <p>
        我们深入研究了用户在移动端设备上的日常阅读习惯，特别是阅读距离（30cm-40cm）和最佳视角，据此设计了一套精细的字体大小标准。这套标准旨在不同设备上提供最优的阅读效率，确保文字的清晰度与可读性，从而优化用户体验。
      </p>
      <div className="container">
        {fontSizeList.map((item, index) => (
          <div key={index} style={{ fontSize: item.size, marginBottom: '9px' }}>
            Hello BUI~<code className="font-item-text">{item.size}</code>
          </div>
        ))}
      </div>
      <h3>字重</h3>
      <p>
        我们的字重选择遵循了秩序、稳定和克制的设计原则。在大多数情况下，我们主要使用的是
        regular 和 medium 两种字体重量，它们在代码中对应的权重分别是 400 和
        500。针对英文字体的加粗效果，为确保视觉上的清晰度和强调效果，可以使用权重为
        600 的字重。
      </p>
      <div className="container">
        {fontWeightList.map((item, index) => (
          <div
            key={index}
            style={{ fontWeight: item.size, marginBottom: '9px' }}
          >
            Hello BUI~<code className="font-item-text">{item.size}</code>
          </div>
        ))}
      </div>
      <h3>行高</h3>
      <p>
        行高可以理解为一个包裹在字体外面的无形的盒子，这个属性影响了排版的纵向空间，从而关系到文本的可读性和外观的美观。
      </p>
      <div className="container">
        <div style={{ lineHeight: 1.5 }}>
          Hello BUI~<code className="font-item-text">1.5</code>
        </div>
      </div>
    </div>
  );
};
