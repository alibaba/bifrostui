import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * 响应式：不同屏幕尺寸下自定义Tokens
 * 可配置响应式场景下的内置Tokens和组件的全局Tokens
 */
const responsive = {
  xs: {
    '--bui-btn-border-radius': '2px',
  },
  sm: {
    '--bui-btn-border-radius': '6px',
  },
  md: {
    '--bui-btn-border-radius': '10px',
  },
  lg: {
    '--bui-btn-border-radius': '14px',
  },
  xl: {
    '--bui-btn-border-radius': '16px',
  },
};

/**
 * 默认高亮模式自定义Tokens
 * 应配置BUI内置默认高亮模式全局Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#ff335c',
  '--bui-color-info-end': '#ff7600',
};

/**
 * 默认暗黑模式自定义Tokens
 * 应配置BUI内默认置暗黑模式全局Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#ff7600',
  '--bui-color-info-end': '#ff335c',
};

export default () => {
  return (
    <ThemeProvider
      isRoot
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button variant="contained" color="info">
        info
      </Button>
    </ThemeProvider>
  );
};