import debounce from '../debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  test('should debounce the function and execute it after the specified wait time', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    vi.advanceTimersByTime(50);
    debouncedFn();
    vi.advanceTimersByTime(50);
    debouncedFn();

    expect(mockFn).not.toBeCalled();

    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should debounce the function and immediately execute it when `immediate` is true', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100, true);

    debouncedFn();

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(50);

    debouncedFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);

    debouncedFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should preserve the context and arguments of the debounced function', () => {
    const mockFn = vi.fn();
    const context = { name: 'test' };
    const args = [1, 2, 3];
    const debouncedFn = debounce(function testFn() {
      mockFn.apply(this, args);
    }, 100);

    debouncedFn.apply(context, args);

    vi.advanceTimersByTime(100);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    expect(mockFn.mock.instances[0]).toBe(context);
  });
});
