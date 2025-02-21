module.exports = {
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
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
};
