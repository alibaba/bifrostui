/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

function getModulePath(modlue: string) {
  return resolve(__dirname, `./modules/${modlue}/src/index.ts`);
}

export default defineConfig({
  plugins: [react()] as any,
  test: {
    // css作用是设置是否支持CSS，这里设置为true，表示支持CSS
    css: true,
    // environment作用是设置测试环境，这里设置为jsdom，因为我们的组件是React组件，需要模拟浏览器环境
    environment: 'jsdom',
    // globals作用是设置全局变量，这里设置为true，表示所有的测试文件都可以使用全局变量
    globals: true,
    // setupFiles作用是设置测试文件的初始化文件，这里设置为tests/setup.ts，表示所有的测试文件都会先执行tests/setup.ts中的代码
    setupFiles: ['./tests/setup.ts'],
    // 启用动态导入支持
    // deps: {
    //   inline: [
    //     "@tarojs/runtime",
    //     "@tarojs/taro"
    //   ]
    // },
    // 减少控制台输出
    silent: false,
    // 设置测试超时时间
    testTimeout: 10000,
    server: {
      deps: {
        inline: [
          "@tarojs/runtime",
          "@tarojs/taro"
        ]
      }
    },
    coverage: {
      // provider作用是设置覆盖率报告的提供者，这里设置为v8，表示使用v8引擎来计算覆盖率
      provider: 'v8',
      // reporter作用是设置覆盖率报告的格式，这里设置为text、json和html，表示生成文本、JSON和HTML格式的覆盖率报告
      reporter: ['text', 'json', 'html'],
      // exclude作用是设置需要排除的文件，这里设置为node_modules、scripts、tests、*.d.ts、*.config.*和*.setup.*，表示这些文件不需要计算覆盖率
      exclude: [
        'node_modules/',
        'scripts/',
        'tests/',
        'websites/',
        '.dumi/',
        '.ci/',
        'docs/',
        'kstop_data/',
        'backstop_data/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/*.setup.*',
        '**/*Demo*.tsx',
        '**/*Demo*.ts',
      ],
    },
  },
  resolve: {
    // alias作用是设置路径别名，这里设置了@bifrostui/styles、@bifrostui/react、@bifrostui/icons、@bifrostui/utils、@bifrostui/types、testing和swiper/react/swiper-react的别名
    alias: {
      '@bifrostui/styles/registry': resolve(
        __dirname,
        './packages/bui-styles/registry/index.mjs',
      ),
      '@bifrostui/react': resolve(__dirname, './packages/bui-core/src'),
      '@bifrostui/icons': resolve(__dirname, './packages/bui-icons/src'),
      '@bifrostui/utils': resolve(__dirname, './packages/bui-utils/src'),
      '@bifrostui/types': resolve(__dirname, './packages/bui-types/src'),
      testing: resolve(__dirname, './tests'),
      'swiper/react/swiper-react': resolve(
        __dirname,
        './node_modules/swiper/react/swiper-react',
      ),
    },
  },
  css: {
    modules: {
      // localsConvention作用是设置本地变量的命名规则，这里设置为camelCase，表示使用驼峰命名规则
      localsConvention: 'camelCase',
    },
  },
});
