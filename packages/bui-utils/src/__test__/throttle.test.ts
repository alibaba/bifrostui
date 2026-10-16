// 引入需要测试的函数
import throttle from '../throttle';

describe('throttle', () => {
  // 模拟需要执行的函数
  const mockFn = vi.fn();

  beforeEach(() => {
    // 在每个测试之前重置模拟函数的状态
    mockFn.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should support leading option to execute the function immediately', () => {
    const throttledFn = throttle(mockFn, 300, {
      leading: true,
    });

    // 第一次调用，立即执行函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // 等待 100 毫秒后再次调用
    vi.advanceTimersByTime(100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数不再执行

    // 等待 200 毫秒后再次调用
    vi.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2); // 函数再次执行
  });

  it('should support trailing option to execute the function after the interval', () => {
    const throttledFn = throttle(mockFn, 400, {
      trailing: true,
    });

    // 第一次调用，立即执行函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // 等待 200 毫秒后再次调用
    vi.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数不再执行

    // 等待 300 毫秒后再次调用
    vi.advanceTimersByTime(300);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2); // 函数再次执行
  });

  it('should work correctly when leading and trailing are set to false and true, respectively', () => {
    const throttledFn = throttle(mockFn, 500, {
      leading: false,
      trailing: true,
    });

    // 第一次调用，立即执行函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(0);

    // 等待 200 毫秒后再次调用
    vi.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(0); // 函数不再执行

    // 等待 400 毫秒后再次调用
    vi.advanceTimersByTime(400);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数再次执行
  });

  it('should work correctly when leading and trailing are set to false', () => {
    const throttledFn = throttle(mockFn, 200, {
      leading: false,
      trailing: false,
    });

    // 第一次调用，立即执行函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(0);

    // 等待 200 毫秒后再次调用
    vi.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数不再执行

    // 等待 400 毫秒后再次调用
    vi.advanceTimersByTime(100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数再次执行
  });

  it('should support default params', () => {
    const throttledFn = throttle(mockFn);

    // 第一次调用，立即执行函数
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // 等待 100 毫秒后再次调用
    vi.advanceTimersByTime(100);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // 函数不再执行

    // 等待 200 毫秒后再次调用
    vi.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2); // 函数再次执行
  });
});
