// useDomCss.test.js
import { renderHook } from '@testing-library/react-hooks';
import useDomCss from '../index'; // 根据实际路径调整这里的导入

// 模拟`@bifrostui/utils`中的useDomReadied
jest.mock('@bifrostui/utils', () => ({
  useDomReady: jest.fn((cb) => cb()),
}));

beforeEach(() => {
  jest
    .spyOn(window, 'getComputedStyle')
    .mockImplementation(() => ({ color: 'black' }) as any);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('useDomCss', () => {
  const mockElement = document.createElement('div');
  const mockTarget = () => mockElement;

  it('should get computed CSS values and invoke callback with results', () => {
    const computedStyle = ['color'];
    const mockCallback = jest.fn();

    renderHook(() => useDomCss(mockTarget, computedStyle, mockCallback));

    // 验证window.getComputedStyle被调用
    expect(window.getComputedStyle).toHaveBeenCalledWith(mockElement, null);

    // 验证回调函数被含正确样式值调用
    expect(mockCallback).toHaveBeenCalledWith({
      color: 'black',
    });
  });
});
