module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'packages/', 'test/'],
      },
      typescript: {},
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '**/demo/*', '**/docs/**/*.{ts,tsx}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['**/*.types.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0,
      },
    },
    // .md文档使用markdown处理器
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    // 每个markdown文档中的代码块都有个虚拟文件名，针对[```tsx,```ts,```jsx,```js]代码块配置校验规则
    {
      files: ['**/*.md/*.tsx', '**/*.md/*.ts', '**/*.md/*.jsx', '**/*.md/*.js'],
      rules: {
        'import/newline-after-import': 0,
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'no-console': 0,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'prettier',
    'markdown',
    'jsx-a11y',
  ],
  rules: {
    'import/extensions': 0,
    'prettier/prettier': 2,
    'no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: true },
    ],
    'no-shadow': 'error',
    'no-redeclare': 'error',
    'no-multi-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'no-var': 'warn',
    'no-undef': 'warn',
    'no-inner-declarations': 'warn',
    'default-param-last': 'warn',
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'draft', // for immer
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.config.js',
          '**/*.md',
          '**/builder.js',
        ],
      },
    ],
    'no-setter-return': 'warn',
    'guard-for-in': 'warn',
    'no-eval': 'warn',
    'no-debugger': 'warn',
    'valid-typeof': ['warn', { requireStringLiterals: true }],
    'import/no-cycle': ['warn', { maxDepth: Infinity }],
    'import/prefer-default-export': 'off',
    'no-extra-boolean-cast': 'warn',
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    // 'no-unused-vars': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/no-this-in-sfc': 'error',
    'react/require-render-return': 'warn',
    'react/no-children-prop': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.tsx', '.ts', '.vue'] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'no-restricted-exports': 0,
    // **********
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    // ===== 可访问性 (a11y) 规则 =====
    // 1. 键盘交互规则
    'jsx-a11y/click-events-have-key-events': 'warn', // 确保可点击元素有对应的键盘事件处理
    'jsx-a11y/no-static-element-interactions': 'warn', // 禁止在静态元素上添加事件处理器
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // 禁止在非交互元素上添加事件处理器
    'jsx-a11y/no-autofocus': 'warn', // 禁止使用自动聚焦，除非必要

    // 2. 表单和标签规则
    'jsx-a11y/label-has-associated-control': 'warn', // 确保每个 label 标签都有对应的表单控件
    'jsx-a11y/anchor-is-valid': 'warn', // 确保锚点标签有有效的 href 属性

    // 3. ARIA 角色和属性规则
    'jsx-a11y/role-has-required-aria-props': 'warn', // 确保具有 ARIA 角色的元素包含该角色所需的所有属性
    'jsx-a11y/role-supports-aria-props': 'warn', // 确保 ARIA 属性与元素的 ARIA 角色兼容
    'jsx-a11y/aria-role': 'warn', // 确保 ARIA 角色有效
    'jsx-a11y/aria-props': 'warn', // 确保 ARIA 属性有效
    'jsx-a11y/aria-proptypes': 'warn', // 确保 ARIA 属性值有效
    'jsx-a11y/aria-unsupported-elements': 'warn', // 确保 ARIA 属性不被用于不支持它的元素

    // 4. 图片可访问性规则
    'jsx-a11y/alt-text': 'warn', // 确保图片有替代文本
    'jsx-a11y/img-redundant-alt': 'warn', // 避免图片的 alt 文本与图片内容重复
  },
};
