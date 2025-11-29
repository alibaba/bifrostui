/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { generateTestProjects } from './scripts/generate-test-projects.mjs';

// Shared configuration for all projects
const sharedConfig = {
  plugins: [react()],
  resolve: {
    alias: {
      '@bifrostui/styles/registry': resolve(
        process.cwd(),
        './packages/bui-styles/registry/index.mjs',
      ),
      '@bifrostui/react': resolve(process.cwd(), './packages/bui-core/src'),
      '@bifrostui/icons': resolve(process.cwd(), './packages/bui-icons/src'),
      '@bifrostui/utils': resolve(process.cwd(), './packages/bui-utils/src'),
      '@bifrostui/types': resolve(process.cwd(), './packages/bui-types/src'),
      testing: resolve(process.cwd(), './tests'),
      'swiper/react/swiper-react': resolve(
        process.cwd(),
        './node_modules/swiper/react/swiper-react',
      ),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
};

// Generate per-component test projects dynamically
const testProjects = generateTestProjects();

export default defineConfig({
  ...sharedConfig,
  test: {
    // Shared test configuration for all workspace projects
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    silent: false,
    testTimeout: 10000,
    // Per-component projects for fine-grained testing
    projects: testProjects.map((project) => {
      return {
        ...sharedConfig,
        test: {
          name: project.name,
          include: project.include,
          css: true,
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          testTimeout: 10000,
        },
      };
    }),
    server: {
      deps: {
        inline: ['@tarojs/runtime', '@tarojs/taro'],
      },
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
});
