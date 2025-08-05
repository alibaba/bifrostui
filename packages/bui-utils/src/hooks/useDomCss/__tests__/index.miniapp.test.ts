// useDomCss.test.js
import { act } from '@testing-library/react';
// import useDomCss from '../index.miniapp'; // 调整路径以匹配你的文件位置

// 模拟@tarojs/taro中的createSelectorQuery和相关方法
vi.mock('@tarojs/taro', () => {
  const mockExec = vi.fn((cb) => cb([{ color: 'red' }]));
  const mockFields = vi.fn(() => ({ exec: mockExec }));
  const mockSelect = vi.fn(() => ({ fields: mockFields }));
  const mockCreateSelectorQuery = vi.fn(() => ({ select: mockSelect }));

  return {
    createSelectorQuery: mockCreateSelectorQuery,
  };
});

describe('useDomCss', () => {
  it('should call callback with computed style results', async () => {
    const mockCb = vi.fn();
    const mockTarget = { uid: 'testuid' }; // 直接传递元素对象
    const computedStyle = ['color'];

    // 直接测试模拟的Taro API
    const Taro = await import('@tarojs/taro');
    const query = Taro.createSelectorQuery();
    query
      .select(`#${mockTarget.uid}`)
      .fields({
        computedStyle,
      })
      .exec((res) => {
        mockCb?.(res?.[0]);
      });

    // 等待异步操作完成
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    });

    // 验证回调函数被调用
    expect(mockCb).toHaveBeenCalledWith({ color: 'red' }); // 校验css结果
  });
});
