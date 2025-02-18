export const defaultDark = {
  name: 'defaultDark',
  label: 'Default Dark',
  mixinName: 'default-dark',
  cssVars: {
    // default是最通用的色彩，比如标题和一级信息
    '--bui-color-fg-default': '#f0f6fc',
    // 柔和色，通常用于次级及补充说明信息
    '--bui-color-fg-muted': '#8b949e',
    // 淡色，很细微的色彩，用于辅助和需要弱化的信息
    '--bui-color-fg-subtle': '#484f58',
    // 用于失效、不可用等状态
    '--bui-color-fg-disabled': '#484f58',

    // 默认背景色
    '--bui-color-bg-default': '#010409',
    // 视图背景色
    '--bui-color-bg-view': '#161b22',
    '--bui-color-bg-popover': 'fade(#484f58, 70%)',
    '--bui-color-bg-alpha-light-9': 'fade(#161b22, 90%)',
    '--bui-color-bg-alpha-light-7': 'fade(#161b22, 70%)',
    '--bui-color-bg-alpha-light-5': 'fade(#161b22, 50%)',
    '--bui-color-bg-alpha-light-3': 'fade(#161b22, 30%)',
    '--bui-color-bg-alpha-light-1': 'fade(#161b22, 10%)',
    '--bui-color-bg-alpha-dark-9': 'fade(#484f58, 90%)',
    '--bui-color-bg-alpha-dark-7': 'fade(#484f58, 70%)',
    '--bui-color-bg-alpha-dark-5': 'fade(#484f58, 50%)',
    '--bui-color-bg-alpha-dark-3': 'fade(#484f58, 30%)',
    '--bui-color-bg-alpha-dark-1': 'fade(#484f58, 10%)',

    // 分割线、边框
    '--bui-color-border-default': '#30363d',
  },
};
