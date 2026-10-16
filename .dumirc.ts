import { defineConfig } from 'dumi';

// Register a custom plural rule so that dumi's atomDirs route generation
// maps type 'icon-pioneer' → URL prefix 'icons-pioneer' (matching nav links).
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pluralize = require('pluralize');
pluralize.addIrregularRule('icon-pioneer', 'icons-pioneer');

console.log('process.env.PUBLIC_PATH', process.env.PUBLIC_PATH);

export default defineConfig({
  outputPath: 'dist',
  title: 'bifrostui',
  base: `${process.env.PUBLIC_PATH}`,
  publicPath: `${process.env.PUBLIC_PATH}`,
  themeConfig: {
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide/introduce', activePath: '/guide' },
        { title: '设计语言', link: '/design/colors', activePath: '/design' },
        { title: '组件', link: '/cores/button', activePath: '/cores' },
        {
          title: '图标',
          link: '/icons',
          activePath: '/icons',
          children: [
            { title: '默认图标', link: '/icons' },
            { title: '先锋图标', link: '/icons-pioneer' },
          ],
        },
        { title: 'GitHub', link: 'https://github.com/alibaba/bifrostui' },
      ],
      'en-US': [
        { title: 'Guide', link: '/guide/introduce-en', activePath: '/guide' },
        { title: 'Design', link: '/design/colors-en', activePath: '/design' },
        { title: 'Components', link: '/cores/button-en', activePath: '/cores' },
        {
          title: 'Icons',
          link: '/icons-en',
          activePath: '/icons',
          children: [
            { title: 'Default Icons', link: '/icons-en' },
            { title: 'Pioneer Icons', link: '/icons-pioneer-en' },
          ],
        },
        { title: 'GitHub', link: 'https://github.com/alibaba/bifrostui' },
      ],
    },
  },
  resolve: {
    atomDirs: [
      { type: 'core', dir: 'packages/bui-core/src' },
      { type: 'icon', dir: 'packages/bui-icons/src' },
      { type: 'icon-pioneer', dir: 'packages/bui-icons-pioneer/src' },
    ],
    entryFile: './packages/bui/src/index.ts',
  },
  autoAlias: false,
  alias: {
    '@bifrostui/react': '/packages/bui-core/src',
    '@bifrostui/icons': '/packages/bui-icons/src',
    '@bifrostui/icons-pioneer': '/packages/bui-icons-pioneer/src',
    '@bifrostui/utils': '/packages/bui-utils/src',
  },
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
});
