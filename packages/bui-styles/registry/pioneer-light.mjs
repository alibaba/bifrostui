export const pioneerLight = {
  name: 'pioneerLight',
  label: 'Pioneer Light',
  mixinName: 'pioneer-light',
  cssVars: {
    /** pioneer 特殊字体 */
    '--bui-font-family-accent':
      "'AlibabaPuHuiTi-Heavy', 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial, sans-serif",

    /** 语义色 */
    '--bui-color-primary': '#ff7600',
    '--bui-color-primary-light': '#ffefe5',

    /** 语义化字号 */
    '--bui-title-size-4': '14px',

    // 前景色，通常用于文字
    // default是最通用的色彩，比如标题和一级信息
    '--bui-color-fg-default': '#181818',
    // 用于失效、不可用等状态
    '--bui-color-fg-disabled': 'rgba(24, 24, 24, 0.5)',

    // 分割线、边框
    '--bui-color-border-primary': 'rgba(20, 138, 255, 0.4)',

    // 主题色渐变
    '--bui-color-primary-start': '#ff9c0d',
    '--bui-color-primary-end': '#ff6813',
    '--bui-color-info-start': '#17b6ff',
    '--bui-color-info-end': '#48d3ff',
    '--bui-color-warning-start': '#ffcf02',
    '--bui-color-warning-end': '#ffb205',

    // 形状定义
    '--bui-shape-radius-drawer': '15px',
    // 卡片、普通视图、抽屉、action sheet，常用于信息密度较低的视图
    '--bui-shape-radius-card': '12px',
    // 独立海报、卡片，常用于信息密度较高的视图
    '--bui-shape-radius-default': '9px',

    // Button
    '--bui-btn-full-height': '45px',
    '--bui-btn-large-height': '30px',
    '--bui-btn-full-font-size': '18px',
    '--bui-btn-full-font-family': 'var(--bui-font-family-accent)',
    '--bui-btn-small-border-radius': '6px',
    '--bui-btn-border-radius': '6px',
    '--bui-btn-large-border-radius': '7px',
    '--bui-btn-full-border-radius': '14px',

    // Card
    '--bui-card-header-title-font-size': 'var(--bui-title-size-3)',

    // Tabs
    '--bui-tab-font-size': 'var(--bui-title-size-4)',
    '--bui-tab-color': 'var(--bui-color-fg-muted)',
    '--bui-tabs-indicator-height': '4PX',
    '--bui-tabs-indicator-border-radius': '2px',
    '--bui-tabs-indicator-box-shadow': '0 2px 4px 0 rgba(255, 98, 0, 0.2)',
  },
};
