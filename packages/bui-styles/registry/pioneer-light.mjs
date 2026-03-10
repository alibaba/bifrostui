export const pioneerLight = {
  name: 'pioneerLight',
  label: 'Pioneer Light',
  mixinName: 'pioneer-light',
  cssVars: {
    /** pioneer 特殊字体 */
    '--bui-font-family-accent':
      "'AlibabaPuHuiTi-Heavy', 'PingFang SC', 'Chinese Quote', 'Segoe UI', roboto, 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', helvetica, arial, sans-serif",

    /** 品牌红 */
    '--bui-color-red': '#ff471a',
    '--bui-color-red-light': '#ffefe6',
    '--bui-color-red-dark': '#b31800',

    /** 活力橙 */
    '--bui-color-orange': '#ff5000',
    '--bui-color-orange-light': '#ffede5',
    '--bui-color-orange-dark': '#d93d00',

    /** 活力黄 */
    '--bui-color-yellow': '#ffa608',
    '--bui-color-yellow-light': '#fffae6',
    '--bui-color-yellow-dark': '#b36500',

    /** 荧光黄 */
    '--bui-color-lemonyellow': '#fff36f',
    '--bui-color-lemonyellow-light': '#ffffeb',
    '--bui-color-lemonyellow-dark': '#b3a13d',

    /** 亲和绿 */
    '--bui-color-green': '#40bf00',
    '--bui-color-green-light': '#f2ffe6',
    '--bui-color-green-dark': '#1f7300',

    /** 神秘紫 */
    '--bui-color-purple': '#754dff',
    '--bui-color-purple-light': '#f6f0ff',
    '--bui-color-purple-dark': '#3924b3',

    /** 宁静蓝 */
    '--bui-color-blue': '#229af0',
    '--bui-color-blue-light': '#f0fbff',
    '--bui-color-blue-dark': '#0757a3',

    /** 智能蓝 */
    '--bui-color-aiblue': '#5cfffa',
    '--bui-color-aiblue-light': '#f0fffc',
    '--bui-color-aiblue-dark': '#00898e',

    /** 主题 */
    '--bui-color-primary': 'var(--bui-color-orange)',
    '--bui-color-primary-light': 'var(--bui-color-orange-light)',
    '--bui-color-primary-dark': 'var(--bui-color-orange-dark)',

    /** 警告 */
    '--bui-color-warning': 'var(--bui-color-yellow)',
    '--bui-color-warning-light': 'var(--bui-color-yellow-light)',
    '--bui-color-warning-dark': 'var(--bui-color-yellow-dark)',

    /** 语义化字号 */
    '--bui-title-size-4': 'var(--bui-font-size-md1)',

    /** 分割线、边框 */
    '--bui-color-border-primary': 'rgba(255, 80, 0, 0.4)',
    '--bui-color-border-info': 'rgba(34, 154, 240, 0.4)',
    '--bui-color-border-success': 'rgba(64, 191, 0, 0.4)',
    '--bui-color-border-warning': 'rgba(255, 166, 8, 0.4)',
    '--bui-color-border-danger': 'rgba(255, 71, 26, 0.4)',

    /** 主题色渐变 */
    '--bui-color-primary-start': '#ff8500',
    '--bui-color-primary-end': 'var(--bui-color-primary)',
    '--bui-color-info-start': '#5bc8ff',
    '--bui-color-info-end': 'var(--bui-color-info)',
    '--bui-color-warning-start': '#fc3',
    '--bui-color-warning-end': 'var(--bui-color-warning)',
    '--bui-color-success-start': '#66d933',
    '--bui-color-success-end': 'var(--bui-color-success)',
    '--bui-color-danger-start': '#ff7633',
    '--bui-color-danger-end': 'var(--bui-color-danger)',

    /** 形状定义 */
    '--bui-shape-radius-drawer': 'var(--bui-radius-6)',
    // 卡片、普通视图、抽屉、action sheet，常用于信息密度较低的视图
    '--bui-shape-radius-card': 'var(--bui-radius-5)',
    // 独立海报、卡片，常用于信息密度较高的视图
    '--bui-shape-radius-default': 'var(--bui-radius-4)',

    // Button
    '--bui-btn-small-height': '21px',
    '--bui-btn-height': '30px',
    '--bui-btn-full-height': '45px',
    '--bui-btn-large-height': '45px',
    '--bui-btn-full-font-size': 'var(--bui-title-size-3)',
    '--bui-btn-large-font-size': 'var(--bui-title-size-3)',
    '--bui-btn-full-font-family': 'var(--bui-font-family-accent)',
    '--bui-btn-small-border-radius': 'var(--bui-radius-3)',
    '--bui-btn-border-radius': 'var(--bui-radius-4)',
    '--bui-btn-large-border-radius': 'var(--bui-radius-5)',
    '--bui-btn-full-border-radius': 'var(--bui-radius-5)',

    // Card
    '--bui-card-header-title-font-size': 'var(--bui-title-size-3)',

    // Tabs
    '--bui-tab-font-size': 'var(--bui-title-size-4)',
    '--bui-tab-color': 'var(--bui-color-fg-muted)',
    '--bui-tabs-indicator-height': '6PX',
    '--bui-tabs-indicator-border-radius': '2px',
    '--bui-tabs-indicator-width': '27px',
    '--bui-tabs-indicator-box-shadow': '0 2px 4px 0 rgba(255, 98, 0, 0.2)',
    '--bui-tabs-indicator-bg':
      'linear-gradient(90deg,var(--bui-color-primary-start) 0%,var(--bui-color-primary-end) 100%)',

    // Calendar
    '--bui-calendar-middle-bg-color': 'var(--bui-color-primary-light)',
    '--bui-calendar-range-both-ends-bg-color': '#ffb999',
  },
};
