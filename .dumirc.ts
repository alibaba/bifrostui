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
  headScripts: [
    `
    (function () {
      function isLocalStorageNameSupported() {
        const testKey = 'test';
        const storage = window.localStorage;
        try {
          storage.setItem(testKey, '1');
          storage.removeItem(testKey);
          return true;
        } catch (error) {
          return false;
        }
      }
      // 优先级提高到所有静态资源的前面，语言不对，加载其他静态资源没意义
      const pathname = location.pathname;

      function isZhCN(pathname) {
        return /-en\\/?$/.test(pathname);
      }
      function getLocalizedPathname(path, zhCN) {
        const pathname = path.indexOf('/') === 0 ? path : '/' + path;
        if (!zhCN) {
          // to enUS
          return /\\/?index(-en)?/.test(pathname) ? '/' : pathname.replace('-en', '');
        } else if (pathname === '/') {
          return '/index-en';
        } else if (pathname.indexOf('/') === pathname.length - 1) {
          return pathname.replace(/\\/$/, '-en/');
        }
        return pathname + '-en';
      }

      // 兼容旧的 URL， \`?locale=...\`
      const queryString = location.search;
      if (queryString) {
        const isZhCNConfig = queryString.indexOf('zh-CN') > -1;
        if (isZhCNConfig && !isZhCN(pathname)) {
          location.pathname = getLocalizedPathname(pathname, isZhCNConfig);
        }
      }

      // 首页无视链接里面的语言设置 https://github.com/ant-design/ant-design/issues/4552
      if (isLocalStorageNameSupported() && (pathname === '/' || pathname === '/index-en')) {
        const lang =
          (window.localStorage && localStorage.getItem('locale')) ||
          ((navigator.language || navigator.browserLanguage).toLowerCase() === 'zh-en'
            ? 'zh-CN'
            : 'en-US');
        // safari is 'zh-en', while other browser is 'zh-CN';
        if ((lang === 'zh-CN') !== isZhCN(pathname)) {
          location.pathname = getLocalizedPathname(pathname, lang === 'zh-CN');
        }
      }
      document.documentElement.className += isZhCN(pathname) ? 'zh-en' : 'en-us';
    })();
    `,
  ],
});
