/* eslint-disable */
import React from 'react';
import './index.less';

export default () => {
  const spaceList = [
    { name: '--bui-spacing-xl', size: '15px' },
    { name: '--bui-spacing-lg', size: '12px' },
    { name: '--bui-spacing-md', size: '9px' },
    { name: '--bui-spacing-sm', size: '6px' },
    { name: '--bui-spacing-xs', size: '4px' },
  ];

  const zIndexList = [
    { name: '--bui-z-index-dropdown', index: '1000', desc: '下拉或相关选择器' },
    { name: '--bui-z-index-affix', index: '1100', desc: '吸顶元素' },
    // { name: '--bui-z-index-modal-backdrop', index: '1200', desc: '' },
    { name: '--bui-z-index-modal', index: '1200', desc: '抽屉浮层' },
    { name: '--bui-z-index-popover', index: '1300', desc: '弹出窗口' },
    { name: '--bui-z-index-tooltip', index: '1400', desc: '提示气泡' },
    { name: '--bui-z-index-toast', index: '1500', desc: '反馈提示' },
  ];

  return (
    <div className="space">
      <h3>平面间距</h3>
      <div className="container">
        <p>水平间距从大到小展示</p>
        <div className="demo-space">
          {spaceList.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{ marginRight: item.size }}
            >
              <div className="size-text">{item.size}</div>
            </div>
          ))}
          <div className="item" key="last"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p>水平间距 - 标准</p>
          <div className="column-container">
            <div className="demo-block top mb9"></div>
            <div className="horizontal-text">9px</div>
            <div className="demo-block bottom"></div>
          </div>
        </div>
        <div className="row">
          <p>水平间距 - 大间距</p>
          <div className="column-container">
            <div className="demo-block top mb12"></div>
            <div className="horizontal-text">12px</div>
            <div className="demo-block bottom"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p>垂直间距 - 标准</p>
          <div className="row-container">
            <div className="demo-block left mr6"></div>
            <div className="vertical-text">6px</div>
            <div className="demo-block right"></div>
          </div>
        </div>
        <div className="row">
          <p>垂直间距 - 大间距</p>
          <div className="row-container">
            <div className="demo-block left mr9"></div>
            <div className="vertical-text">9px</div>
            <div className="demo-block right"></div>
          </div>
        </div>
      </div>
      <h3>层叠上下文</h3>
      <p>
        BUI
        定义了一套完整的叠层上下文数值，用于规范各个组件模块在页面中的垂直排列顺序。
      </p>
      <div className="container zindex-container">
        {zIndexList.map((item, index) => (
          <>
            <div
              className="zindex-item"
              key={index}
              style={{
                zIndex: item.index,
                left: (index + 1) * 30,
                opacity: (index + 0.2) * 0.15,
              }}
            ></div>
            <div
              className="zindex-item-desc"
              key={index}
              style={{
                zIndex: item.index,
                left: (index + 1) * 30 + 15,
                top: index * 30 + 120,
              }}
            >
              {item.desc}-{item.index}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
