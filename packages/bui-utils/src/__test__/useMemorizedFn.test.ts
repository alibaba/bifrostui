import { renderHook } from 'testing';
import useMemoizedFn from '../hooks/useMemoizedFn';
import isDev from '../isDev';

describe('useMemoizedFn', () => {
  test('should log an error if the parameter is not a function in development or test environment', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const nonFunctionParam = 'not a function';
    renderHook(() => {
      // @ts-ignore
      useMemoizedFn(nonFunctionParam);
    });

    if (isDev) {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        `useMemoizedFn expected parameter is a function, got ${typeof nonFunctionParam}`,
      );
    } else {
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    }

    consoleErrorSpy.mockRestore();
  });
  test('should return a function', () => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    const { result } = renderHook(() => useMemoizedFn(() => {}));
    expect(typeof result.current).toBe('function');
  });

  test('should return the same memoized function', () => {
    const fn = jest.fn();
    const { result, rerender } = renderHook(() => useMemoizedFn(fn));
    const memoizedFn1 = result.current;

    rerender();
    const memoizedFn2 = result.current;

    expect(memoizedFn1).toBe(memoizedFn2);
  });

  test('should invoke the original function with the correct context and arguments', () => {
    const context = { name: 'Test' };
    const fn = jest.fn(function (
      this: typeof context,
      arg1: number,
      arg2: string,
    ) {
      return `${this.name} - ${arg1} - ${arg2}`;
    });
    const { result } = renderHook(() => useMemoizedFn(fn));

    const memoizedFn = result.current;
    const resultValue = memoizedFn.call(context, 123, 'abc');

    expect(resultValue).toBe('Test - 123 - abc');
    expect(fn).toHaveBeenCalledWith(123, 'abc');
  });
});
