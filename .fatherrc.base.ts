import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'dist',
  },
  esm: {
    output: 'es',
  }
});