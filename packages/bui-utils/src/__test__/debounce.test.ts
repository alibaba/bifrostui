import debounce from '../debounce';

describe('debounce', () => {
  jest.useFakeTimers();
  test('should debounce the function and execute it after the specified wait time', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    jest.advanceTimersByTime(50);
    debouncedFn();
    jest.advanceTimersByTime(50);
    debouncedFn();

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(100);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should debounce the function and immediately execute it when `immediate` is true', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100, true);

    debouncedFn();

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(50);

    debouncedFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);

    debouncedFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test('should preserve the context and arguments of the debounced function', () => {
    const mockFn = jest.fn();
    const context = { name: 'test' };
    const args = [1, 2, 3];
    const debouncedFn = debounce(function () {
      mockFn.apply(this, args);
    }, 100);

    debouncedFn.apply(context, args);

    jest.advanceTimersByTime(100);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    expect(mockFn.mock.instances[0]).toBe(context);
  });
});
