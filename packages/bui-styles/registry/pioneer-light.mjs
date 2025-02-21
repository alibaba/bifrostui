export const pioneerLight = {
  name: 'pioneerLight',
  label: 'Pioneer Light',
  mixinName: 'pioneer-light',
  cssVars: {
    /** pioneer 特殊字体 */
    '--bui-font-family-accent':
      "'AlibabaPuHuiTi-Heavy', 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial, sans-serif",

    /** 品牌红 */
    '--bui-color-red': '#ff335c',
    '--bui-color-red-light': '#ffebef',

    /** 明亮粉 */
    '--bui-color-pink': '#dd10f2',
    '--bui-color-pink-light': '#fce7fe',

    /** 活力橙 */
    '--bui-color-orange': '#ff8533',
    '--bui-color-orange-light': '#fff0e5',

    /** 亲和绿 */
    '--bui-color-green': '#00d68f',
    '--bui-color-green-light': '#dcf9f0',

    /** 神秘紫 */
    '--bui-color-purple': '#8b52ff',
    '--bui-color-purple-light': '#f2ebff',

    /** 宁静蓝 */
    '--bui-color-blue': '#148aff',
    '--bui-color-blue-light': '#e1f0ff',

    /** 中性灰 */
    '--bui-color-gray': '#8896b1',
    '--bui-color-gray-light': '#f3f5f8',
    '--bui-color-black': '#000',
    '--bui-color-white': '#fff',
    '--bui-color-vip': '#ff866e',

    /** 中性色 */
    '--bui-color-neutral-0': 'var(--bui-color-black)',
    '--bui-color-neutral-1': '#2e333e',
    '--bui-color-neutral-2': '#5f6672',
    '--bui-color-neutral-3': '#959aa5',
    '--bui-color-neutral-4': '#ced1d6',
    '--bui-color-neutral-5': '#e9ebef',
    '--bui-color-neutral-6': '#f5f6f8',
    '--bui-color-neutral-7': 'var(--bui-color-white)',

    /** 字重 */
    '--bui-font-weight-normal': '400',
    '--bui-font-weight-medium': '500',
    '--bui-font-weight-bold': '600',

    /** 主题 */
    '--bui-color-primary': '#ff7600',
    '--bui-color-primary-light': '#ffefe5',
    '--bui-color-info': 'var(--bui-color-blue)',
    '--bui-color-info-light': 'var(--bui-color-blue-light)',
    '--bui-color-success': 'var(--bui-color-green)',
    '--bui-color-success-light': 'var(--bui-color-green-light)',
    '--bui-color-warning': 'var(--bui-color-orange)',
    '--bui-color-warning-light': 'var(--bui-color-orange-light)',
    '--bui-color-danger': 'var(--bui-color-red)',
    '--bui-color-danger-light': 'var(--bui-color-red-light)',

    /** 语义化字体 */
    '--bui-title-size-1': '21px',
    '--bui-title-size-2': '18px',
    '--bui-title-size-3': '16px',
    '--bui-title-size-4': '14px',
    '--bui-text-size-1': '14px',
    '--bui-text-size-2': '13px',
    '--bui-text-size-3': '12px',
    '--bui-text-size-4': '11px',
    '--bui-text-size-5': '10px',

    // 前景色，通常用于文字
    // default是最通用的色彩，比如标题和一级信息
    '--bui-color-fg-default': '#181818',
    // 柔和色，通常用于次级及补充说明信息
    '--bui-color-fg-muted': 'var(--bui-color-neutral-2)',
    // 淡色，很细微的色彩，用于辅助和需要弱化的信息
    '--bui-color-fg-subtle': 'var(--bui-color-neutral-3)',
    // 用于失效、不可用等状态
    '--bui-color-fg-disabled': 'rgba(24, 24, 24, 0.5)',

    // 默认背景色
    '--bui-color-bg-default': 'var(--bui-color-neutral-6)',
    // 视图背景色
    '--bui-color-bg-view': 'var(--bui-color-neutral-7)',
    '--bui-color-bg-popover': 'var(--bui-color-neutral-7)',
    '--bui-color-bg-alpha-light-9': 'rgba(255, 255, 255, 0.9)',
    '--bui-color-bg-alpha-light-7': 'rgba(255, 255, 255, 0.7)',
    '--bui-color-bg-alpha-light-5': 'rgba(255, 255, 255, 0.5)',
    '--bui-color-bg-alpha-light-3': 'rgba(255, 255, 255, 0.3)',
    '--bui-color-bg-alpha-light-1': 'rgba(255, 255, 255, 0.1)',
    '--bui-color-bg-alpha-dark-9': 'rgba(0, 0, 0, 0.9)',
    '--bui-color-bg-alpha-dark-7': 'rgba(0, 0, 0, 0.7)',
    '--bui-color-bg-alpha-dark-5': 'rgba(0, 0, 0, 0.5)',
    '--bui-color-bg-alpha-dark-3': 'rgba(0, 0, 0, 0.3)',
    '--bui-color-bg-alpha-dark-1': 'rgba(0, 0, 0, 0.1)',

    // 分割线、边框
    '--bui-color-border-default': 'var(--bui-color-neutral-5)',
    '--bui-color-border-primary': 'rgba(20, 138, 255, 0.4)',
    '--bui-color-border-info': 'rgba(20, 138, 255, 0.4)',
    '--bui-color-border-success': 'rgba(0, 214, 143, 0.4)',
    '--bui-color-border-warning': 'rgba(255, 133, 51, 0.4)',
    '--bui-color-border-danger': 'rgba(255, 51, 92, 0.4)',
    '--bui-color-border-gray': 'rgba(136, 150, 177, 0.4)',

    // 主题色渐变
    '--bui-color-primary-start': '#ff9c0d',
    '--bui-color-primary-end': '#ff6813',
    '--bui-color-secondary-start': '#f32adf',
    '--bui-color-secondary-end': 'var(--bui-color-pink)',
    '--bui-color-info-start': '#17b6ff',
    '--bui-color-info-end': '#48d3ff',
    '--bui-color-warning-start': '#ffcf02',
    '--bui-color-warning-end': '#ffb205',
    '--bui-color-success-start': '#00ebac',
    '--bui-color-success-end': 'var(--bui-color-green)',
    '--bui-color-danger-start': '#ef16b9',
    '--bui-color-danger-end': 'var(--bui-color-red)',
    '--bui-color-vip-start': '#ffd4a6',
    '--bui-color-vip-end': '#ffbeae',

    // 形状定义
    // 页面级浮层
    '--bui-shape-radius-popover': '18px',
    '--bui-shape-radius-drawer': '15px',
    // 卡片、普通视图、抽屉、action sheet，常用于信息密度较低的视图
    '--bui-shape-radius-card': '12px',
    // 独立海报、卡片，常用于信息密度较高的视图
    '--bui-shape-radius-default': '9px',
    // 容器内海报
    '--bui-shape-radius-poster': '4px',
    // 标签
    '--bui-shape-radius-label': '3px',

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
