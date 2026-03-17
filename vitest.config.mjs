/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

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

export default defineConfig({
  ...sharedConfig,
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    silent: true,
    testTimeout: 10000,
    // Per-package projects for package-level testing
    projects: [
      {
        ...sharedConfig,
        test: {
          name: 'bui-core',
          include: ['packages/bui-core/src/**/*.{test,spec}.{ts,tsx}'],
          css: true,
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          testTimeout: 10000,
        },
      },
      {
        ...sharedConfig,
        test: {
          name: 'bui-icons',
          include: ['packages/bui-icons/src/**/*.{test,spec}.{ts,tsx}'],
          css: true,
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          testTimeout: 10000,
        },
      },
      {
        ...sharedConfig,
        test: {
          name: 'bui-utils',
          include: ['packages/bui-utils/src/**/*.{test,spec}.{ts,tsx}'],
          css: true,
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./tests/setup.ts'],
          testTimeout: 10000,
        },
      },
    ],
    server: {
      deps: {
        inline: ['@tarojs/runtime', '@tarojs/taro'],
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'json', 'html'],
      reportsDirectory: './coverage',
      include: [
        'packages/bui-core/src/**/*.{ts,tsx}',
        'packages/bui-icons/src/**/*.{ts,tsx}',
        'packages/bui-utils/src/**/*.{ts,tsx}',
      ],
      exclude: [
        '**/*.d.ts',
        '**/*.{test,spec}.{ts,tsx}',
        '**/*.config.*',
        '**/*.setup.*',
        '**/*Demo*.{ts,tsx}',
      ],
    },
  },
});
