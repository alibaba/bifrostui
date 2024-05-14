import { renderHook } from '@testing-library/react-hooks';
import useEventCallback from '../hooks/useEventCallback';

describe('useEventCallback', () => {
  test('should return a function', () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useEventCallback(mockFn));
    expect(typeof result.current).toBe('function');
  });

  test('should invoke the provided function when the returned function is called', () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useEventCallback(mockFn));
    const eventCallback = result.current;

    eventCallback();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
