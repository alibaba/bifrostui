// useSize.test.js
import { renderHook, waitFor } from '@testing-library/react';
import useSize from '../useSize'; // 根据实际路径调整这里的导入

// 模拟从`@bifrostui/utils`导入的函数
vi.mock('../../getBoundingClientRect', () => ({
  default: vi.fn(() => {
    return new Promise((resolve) => {
      resolve({ width: 100, height: 100 });
    });
  }),
}));

describe('useSize', () => {
  it('should set size state after dom is readied with a ref as a target', async () => {
    // 创建一个包含DOM元素的ref对象
    const ref = { current: document.createElement('div') };

    // 渲染hook并等待异步操作完成
    const { result } = renderHook(() => useSize(ref));

    // 等待异步操作结果
    await waitFor(() => {
      expect(result.current.width).toBe(100);
      expect(result.current.height).toBe(100);
    });
  });
});
