/* eslint-disable */
import React from 'react';
import './index.less';

export default () => {
  // 品牌色
  const mainColors = [
    { name: '品牌红', color: '#ff335c', lightColor: '#ffebef' },
    { name: '明亮粉', color: '#dd10f2', lightColor: '#fce7fe' },
    { name: '活力橙', color: '#ff8533', lightColor: '#fff0e5' },
    { name: '亲和绿', color: '#00d68f', lightColor: '#dcf9f0' },
    { name: '神秘紫', color: '#8b52ff', lightColor: '#f2ebff' },
    { name: '宁静蓝', color: '#148aff', lightColor: '#e1f0ff' },
    { name: '中性灰', color: '#8896b1', lightColor: '#f3f5f8' },
    // { name: '榜单金', color: '#d7932c', lightColor: '#fbefe1' },
    { name: '会员柚', color: '#ff866e', lightColor: '' },
    // { name: '会员文字', color: '#582331', lightColor: '#874953' },
    // { name: '会员黑钻', color: '#161633', lightColor: '#ffd0b5' },
  ];

  // 文字色
  const textColors = [
    { name: '特级', color: '#000000', desc: '主标题' },
    { name: '一级', color: '#2e333e', desc: '主标题' },
    { name: '次级', color: '#5f6672', desc: '副标题' },
    { name: '辅助', color: '#959aa5', desc: '弱文案' },
    { name: '失效', color: '#ced1d6', desc: '失效' },
  ];

  // 背景色
  const backgroundColors = [
    { name: '分割', color: '#e9ebef', desc: '分割线' },
    { name: '背景', color: '#f5f6f8', desc: '页面背景' },
    { name: '灰色反色', color: '#ffffff', desc: '卡片背景' },
  ];

  // 渐变色
  const gradientColors: any[] = [
    { name: '渐变红', start: '#ef16b9', end: '#ff335c' },
    { name: '渐变粉', start: '#f32adf', end: '#dd10f2' },
    { name: '渐变橙', start: '#ffad33', end: '#ff8533' },
    { name: '渐变绿', start: '#00ebac', end: '#00d68f' },
    // { name: '渐变紫', start: '#ad66ff', end: '#8b52ff' },
    { name: '渐变蓝', start: '#33a7ff', end: '#148aff' },
    // { name: '渐变灰', start: '#cbd1dd', end: '#8896b1' },
    // { name: '会员淡', start: '#ffecc7', end: '#ffdbcf' },
    { name: '会员常规', start: '#ffd4a6', end: '#ffbeae' },
    // { name: '会员深', start: '#f5ac6b', end: '#f7846d' },
    // { name: '遮罩渐变', start: '#000000', end: 'rgba(0,0,0,0)' },
    // {
    //   name: '产品特色渐变1',
    //   start: '#d796ff',
    //   middle: '#a18cff',
    //   end: '#76aaff',
    // },
    // {
    //   name: '产品特色渐变2',
    //   start: '#ff7dad',
    //   middle: '#f75dd5',
    //   end: '#d47ffa',
    // },
    // {
    //   name: '产品特色渐变3',
    //   start: '#fbdb0e',
    //   middle: '#fb630e',
    //   end: '#ffb32b',
    // },
  ];

  return (
    <div className="colors">
      <h3>品牌色</h3>
      <div className="container">
        {mainColors.map((item, index) => {
          return (
            <div className="color-item" key={index}>
              <span className="name">{item.name}</span>
              <div className="color-unit-wrapper">
                <div className="color-unit-cell">
                  <div
                    className="color-block"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <code className="color-value">{item.color}</code>
                </div>
                {item?.lightColor && (
                  <div className="color-unit-cell">
                    <div
                      className="color-block"
                      style={{
                        backgroundColor: item.lightColor,
                      }}
                    />
                    <code className="color-value">{item.lightColor}</code>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <h3>文字色</h3>
      <div className="color-container">
        {textColors.map((item, index) => {
          return (
            <div className="color-item" key={index}>
              <span className="name name-width-sm">
                {item.name}
                <span className="desc">({item.desc})</span>
              </span>
              <div className="color-unit-cell">
                <div
                  className="color-block"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <code className="color-value">{item.color}</code>
              </div>
            </div>
          );
        })}
      </div>

      <h3>背景色</h3>
      <div className="color-container">
        {backgroundColors.map((item, index) => {
          return (
            <div className="color-item" key={index}>
              <span className="name name-width-lg">
                {item.name}
                <span className="desc">({item.desc})</span>
              </span>
              <div className="color-unit-cell">
                <div
                  className="color-block"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
                <code className="color-value">{item.color}</code>
              </div>
            </div>
          );
        })}
      </div>

      <h3>渐变色</h3>
      <div className="color-container">
        {gradientColors.map((item, index) => {
          return (
            <div className="color-item" key={index}>
              <span className="name name-width-sm">{item.name}</span>
              <div className="color-unit-cell">
                <div
                  className="color-block"
                  style={{
                    background: `linear-gradient(90deg,${item.start},${item?.middle ? `${item.middle},` : ''}${item.end})`,
                  }}
                />
                <code className="color-value">{`linear-gradient(90deg,${item.start},${item?.middle ? `${item.middle},` : ''}${item.end})`}</code>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
