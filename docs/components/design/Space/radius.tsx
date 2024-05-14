/* eslint-disable */
import React from 'react';
import './index.less';

export default () => {
  const radiusList = [
    { name: '', size: '0', desc: '直角', offset: '-9px' },
    {
      name: '--bui-shape-radius-label',
      size: '2px',
      desc: '小标签',
      offset: '-9px',
    },
    {
      name: '--bui-shape-radius-poster',
      size: '4px',
      desc: '海报',
      offset: '-8px',
    },
    {
      name: '--bui-shape-radius-default',
      size: '6px',
      desc: '内层卡片',
      offset: '-6px',
    },
    {
      name: '--bui-shape-radius-card',
      size: '9px',
      desc: '卡片',
      offset: '-5px',
    },
    {
      name: '--bui-shape-radius-drawer',
      size: '12px',
      desc: '页面浮层',
      offset: '-3px',
    },
    {
      name: '--bui-shape-radius-popover',
      size: '18px',
      desc: '弹窗',
      offset: '0',
    },
  ];

  return (
    <div className="radius">
      <h3>圆角半径</h3>
      <p>
        圆角半径是用于定义形状的属性，在大多数场景下，BUI
        将圆角半径定义为以下几种规范，以适用于不同模块的形状设计。
      </p>
      <div className="container">
        {radiusList.map((item, index) => (
          <div
            className="radius-item"
            key={index}
            style={{ borderRadius: item.size }}
          >
            <div
              className="radius-cell"
              style={{ width: item.size, height: item.size }}
            ></div>
            <div className="radius-cell-text" style={{ top: item.offset }}>
              <span className="radius-cell-line">——</span> {item.size}
            </div>
            <div className="radius-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
