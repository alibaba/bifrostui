// useDomReady.test.ts
import Taro from '@tarojs/taro';
import { renderHook } from '@testing-library/react-hooks';
import useDomReady from '../index.miniapp'; // 根据实际路径调整

// Mock Taro的useReady和nextTick方法
jest.mock('@tarojs/taro', () => ({
  useReady: jest.fn((cb) => cb()),
  nextTick: jest.fn((cb) => cb()),
}));

describe('useDomReady', () => {
  it('应当在Taro组件ready之后调用callback', () => {
    const mockCallback = jest.fn();
    const spyUseReady = jest.spyOn(Taro, 'useReady');

    renderHook(() => useDomReady(mockCallback));

    // 确保Taro.useReady被调用
    expect(spyUseReady).toHaveBeenCalled();

    // 由于我们mock了Taro.nextTick来立即执行传入的回调
    // 我们可以断言传给useDomReadied的回调被调用了
    expect(mockCallback).toHaveBeenCalled();
  });
});
