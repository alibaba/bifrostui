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
    '--bui-color-fg-disabled': 'fade(#181818, 50%)',

    // 默认背景色
    '--bui-color-bg-default': 'var(--bui-color-neutral-6)',
    // 视图背景色
    '--bui-color-bg-view': 'var(--bui-color-neutral-7)',
    '--bui-color-bg-popover': 'var(--bui-color-neutral-7)',
    '--bui-color-bg-alpha-light-9': 'fade(#fff, 90%)',
    '--bui-color-bg-alpha-light-7': 'fade(#fff, 70%)',
    '--bui-color-bg-alpha-light-5': 'fade(#fff, 50%)',
    '--bui-color-bg-alpha-light-3': 'fade(#fff, 30%)',
    '--bui-color-bg-alpha-light-1': 'fade(#fff, 10%)',
    '--bui-color-bg-alpha-dark-9': 'fade(#000, 90%)',
    '--bui-color-bg-alpha-dark-7': 'fade(#000, 70%)',
    '--bui-color-bg-alpha-dark-5': 'fade(#000, 50%)',
    '--bui-color-bg-alpha-dark-3': 'fade(#000, 30%)',
    '--bui-color-bg-alpha-dark-1': 'fade(#000, 10%)',

    // 分割线、边框
    '--bui-color-border-default': 'var(--bui-color-neutral-5)',
    '--bui-color-border-primary': 'fade(#ff7600, 40%)',
    '--bui-color-border-info': 'fade(#148aff, 40%)',
    '--bui-color-border-success': 'fade(#00d68f, 40%)',
    '--bui-color-border-warning': 'fade(#ff8533, 40%)',
    '--bui-color-border-danger': 'fade(#ff335c, 40%)',
    '--bui-color-border-gray': 'fade(#8896b1, 40%)',

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
  },
  components: {
    Button: [
      {
        state: ['contained', 'primary', 'large'],
        cssProps: {
          'background-image': `radial-gradient(
              35px 25px ellipse at 2% 110%,
              #fffe1e 0%,
              rgba(251, 134, 35, 0) 99%
            ),
            radial-gradient(
              35px 25px ellipse at 110% 120%,
              #ff3018 0%,
              rgba(0, 48, 24, 0) 92%
            ),
            linear-gradient(90deg, #fc8622 0%, #ff5000 100%)`,
        },
      },
      {
        state: ['contained', 'primary', 'full'],
        cssProps: {
          'background-image': `radial-gradient(
              93px 50px ellipse at 2% 110%,
              #fffe1e 0%,
              rgba(251, 134, 35, 0) 100%
            ),
            radial-gradient(
              93px 50px ellipse at 98% 110%,
              #ff3018 0%,
              rgba(0, 48, 24, 0) 92%
            ),
            linear-gradient(90deg, #fc8622 0%, #ff5000 100%)`,
        },
      },
      {
        state: ['full'],
        cssVars: {
          '--bui-btn-border-radius': '14px',
          '--bui-btn-height': '45px',
          '--bui-btn-font-size': '18px',
          '--bui-btn-font-family': 'var(--bui-font-family-accent)',
        },
      },
      {
        state: ['large'],
        cssVars: {
          '--bui-btn-border-radius': '7px',
          '--bui-btn-height': '30px',
        },
      },
      {
        state: ['medium'],
        cssVars: {
          '--bui-btn-border-radius': '6px',
        },
      },
    ],
    Tabs: [
      {
        cssVars: {
          '--bui-tabs-font-size': 'var(--bui-title-size-4)',
          '--bui-tabs-active-font-weight': '700',
          '--bui-tabs-color': 'var(--bui-color-fg-muted)',

          /* prettier-ignore */
          '--bui-tabs-indicator-height': '4PX',
          '--bui-tabs-indicator-border-radius': '2px',
          '--bui-tabs-indicator-box-shadow':
            '0 2px 4px 0 rgba(255, 98, 0, 0.2)',
        },
      },
      {
        selector: '.bui-tabs .bui-tabs-indicator',
        cssProps: {
          'background-image': `linear-gradient(
              90deg,
              #ff9b00 0%,
              #ffa700 21%,
              #ff8300 100%
            )`,
        },
      },
    ],
    Card: [
      {
        selector: '.bui-card-header-title',
        cssVars: {
          '--bui-card-font-size': 'var(--bui-title-size-3)',
        },
      },
    ],
  },
};
