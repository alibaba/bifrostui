/**
 * 响应式屏幕断点
 */
export const breakpoints = {
  /**
   * 超小屏幕 (小于 576px，实际为了处理临界值，断点值为 575.98px)
   */
  xs: '575.98px',
  /**
   * 小屏幕 (≥ 576px)
   */
  sm: '576px',
  /**
   * 中等屏幕 (≥ 768px)
   */
  md: '768px',
  /**
   * 大屏幕 (≥ 992px)
   */
  lg: '992px',
  /**
   * 超大屏幕 (≥ 1200px)
   */
  xl: '1200px',
};

/**
 * 根节点选择器，用于挂载全局Tokens
 */
export const rootSelector = [
  ':root',
  'page',
  'xhs-page',
  '.bui-default-light',
  '[data-color-mode="light"][data-theme="default"]',
];
