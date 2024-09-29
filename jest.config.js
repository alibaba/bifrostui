/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleDirectories: ['node_modules', './tests'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '.history'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader',
    '^.+\\.(js|jsx)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env'],
        plugins: [['@babel/transform-runtime']],
      },
    ],
  },
  coveragePathIgnorePatterns: ['<rootDir>/scripts/', 'tests/'],
  coverageDirectory: './.ci/',
  coverageReporters: ['json', 'html'],
  moduleNameMapper: {
    '^@bifrostui/(styles.*)$': '<rootDir>/tests/mocks/styleMock.js',
    '^@bifrostui/react$': '<rootDir>/packages/bui-core/src',
    '^@bifrostui/([icons|utils|types].*)$': '<rootDir>/packages/bui-$1/src',
    '^testing$': '<rootDir>/tests',
    '\\.(css|less|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileTransformer.js',
    'swiper/react/swiper-react':
      '<rootDir>/node_modules/swiper/react/swiper-react',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(swiper|ssr-window|dom7|dayjs)(/|$)|(.pnpm/[^/]+/node_modules/\\1))',
  ],
};
