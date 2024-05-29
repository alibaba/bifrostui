import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'BUI DESIGN',
  publicPath: '/bifrostui/',
  themeConfig: {
    nav: [
      { title: '指南', link: '/guide/introduce', activePath: '/guide' },
      { title: '设计语言', link: '/design/colors', activePath: '/design' },
      { title: '基础组件', link: '/cores/button', activePath: '/cores' },
      { title: '图标', link: '/icons' },
      { title: 'GitHub', link: 'https://github.com/' },
    ],
  },
  logo: 'https://gw.alicdn.com/imgextra/i4/O1CN01XWp8e31QbIi5YgLUw_!!6000000001994-2-tps-362-96.png',
  resolve: {
    atomDirs: [
      { type: 'core', dir: 'packages/bui-core/src' },
      { type: 'icon', dir: 'packages/bui-icons/src' },
    ],
    entryFile: './packages/bui/src/index.ts',
  },
  autoAlias: false,
  alias: {
    '@bifrostui/react': '/packages/bui-core/src',
    '@bifrostui/icons': '/packages/bui-icons/src',
    '@bifrostui/utils': '/packages/bui-utils/src',
  },
});
