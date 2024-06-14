import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  cjs: {
    transformer: 'babel',
  },
  plugins: ['../../scripts/father-build'],
});
