import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'bifrostui',
  themeConfig: {
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide/introduce', activePath: '/guide' },
        { title: '设计语言', link: '/design/colors', activePath: '/design' },
        { title: '组件', link: '/cores/button', activePath: '/cores' },
        { title: '图标', link: '/icons' },
        { title: 'GitHub', link: 'https://github.com/alibaba/bifrostui' },
      ],
      'en-US': [
        { title: 'Guide', link: '/guide/introduce', activePath: '/guide' },
        { title: 'Design', link: '/design/colors', activePath: '/design' },
        { title: 'Components', link: '/cores/button', activePath: '/cores' },
        { title: 'Icons', link: '/icons' },
        { title: 'GitHub', link: 'https://github.com/alibaba/bifrostui' },
      ],
    },
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
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
});
