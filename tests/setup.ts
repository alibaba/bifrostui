import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';
import { vi } from 'vitest';



// Mock CSS modules
vi.mock('*.less', () => ({}));
vi.mock('*.css', () => ({}));

// Mock static assets
vi.mock('*.svg', () => 'svg-mock');
vi.mock('*.png', () => 'png-mock');
vi.mock('*.jpg', () => 'jpg-mock');
vi.mock('*.jpeg', () => 'jpeg-mock');
vi.mock('*.gif', () => 'gif-mock');
vi.mock('*.webp', () => 'webp-mock');
vi.mock('*.mp4', () => 'mp4-mock');
vi.mock('*.webm', () => 'webm-mock');
vi.mock('*.wav', () => 'wav-mock');
vi.mock('*.mp3', () => 'mp3-mock');
vi.mock('*.m4a', () => 'm4a-mock');
vi.mock('*.aac', () => 'aac-mock');
vi.mock('*.oga', () => 'oga-mock');
vi.mock('*.ttf', () => 'ttf-mock');
vi.mock('*.woff', () => 'woff-mock');
vi.mock('*.woff2', () => 'woff2-mock');
vi.mock('*.eot', () => 'eot-mock');
vi.mock('*.otf', () => 'otf-mock');

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// 抑制各种警告
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Could not parse CSS stylesheet') ||
       args[0].includes('Warning: An update to') ||
       args[0].includes('React does not recognize the') ||
       args[0].includes('maxCount属性即将废弃') ||
       args[0].includes('BUI Tooltip: children must be') ||
       args[0].includes('检测到CSS变量循环引用') ||
       args[0].includes('ReactDOM.render is no longer supported') ||
       args[0].includes('unmountComponentAtNode is deprecated'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };

  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: An update to') ||
       args[0].includes('inside a test was not wrapped in act(...)'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
}); 