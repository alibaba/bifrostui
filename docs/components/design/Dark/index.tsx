/* eslint-disable */
import React from 'react';
import './index.less';

export default () => {
  const darkList = [
    {
      desc: '标题和一级信息',
      value: '--bui-color-fg-default',
      color: '#f0f6fc',
    },
    {
      desc: '次级及补充说明信息',
      value: '--bui-color-fg-muted',
      color: '#8b949e',
    },
    {
      desc: '辅助和需要弱化的信息',
      value: '--bui-color-fg-subtle',
      color: '#484f58',
    },
    {
      desc: '失效、不可用等状态',
      value: '--bui-color-fg-disabled',
      color: '#484f58',
    },
    { desc: '默认背景色', value: '--bui-color-bg-default', color: '#010409' },
    { desc: '视图背景色', value: '--bui-color-bg-view', color: '#161b22' },
    {
      desc: '分割线和边框',
      value: '--bui-color-border-default',
      color: '#30363d',
    },
  ];
  return (
    <div className="dark">
      <div className="dark-container">
        {darkList.map((item, index) => (
          <div className="color-unit-cell" key={index}>
            <div
              className="color-block"
              style={{
                backgroundColor: item.color,
              }}
            />
            <code className="color-value">{item.color}</code>
            <div className="color-desc">（{item.desc}）</div>
          </div>
        ))}
      </div>
    </div>
  );
};
