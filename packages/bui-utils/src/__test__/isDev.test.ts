// your-module.test.js
import isDev from '../isDev';

describe('isDev', () => {
  let originalEnv;

  beforeAll(() => {
    originalEnv = process.env.NODE_ENV;
  });

  afterAll(() => {
    process.env.NODE_ENV = originalEnv;
  });

  test('should return true when NODE_ENV is "development"', () => {
    process.env.NODE_ENV = 'development';
    const result = isDev;
    expect(result).toBe(true);
  });

  test('should return true when NODE_ENV is "test"', () => {
    process.env.NODE_ENV = 'test';
    const result = isDev;
    expect(result).toBe(true);
  });
});
