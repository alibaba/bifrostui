// useDomCss.test.js
import { renderHook } from '@testing-library/react-hooks';
// import Taro from '@tarojs/taro';
// import { useDomReadied } from '@bifrostui/utils';
import useDomCss from '../index.miniapp'; // 调整路径以匹配你的文件位置

// 模拟@bifrostui/utils中的useDomReadied
jest.mock('@bifrostui/utils', () => ({
  useDomReadied: jest.fn((cb) => cb()),
}));

// 模拟@tarojs/taro中的createSelectorQuery和相关方法
jest.mock('@tarojs/taro', () => ({
  createSelectorQuery: jest.fn(() => ({
    select: jest.fn(() => ({
      fields: jest.fn(() => ({
        exec: jest.fn((cb) => cb([{ color: 'red' }])), // 假设的样式结果
      })),
    })),
  })),
}));

describe('useDomCss', () => {
  it('should call callback with computed style results', async () => {
    const mockCb = jest.fn();
    const mockTarget = () => ({ uid: 'testuid' }); // 假设的Taro元素
    const computedStyle = ['color'];

    // 渲染hook
    renderHook(() => useDomCss(mockTarget as any, computedStyle, mockCb));

    // 由于模拟的逻辑是同步的，我们不需要waitForNextUpdate
    expect(mockCb).toHaveBeenCalledWith({ color: 'red' }); // 校验css结果
  });
});
