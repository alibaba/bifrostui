import { renderHook } from '@testing-library/react-hooks';
import setRef from '../setRef';

describe('setRef', () => {
  test('should set value to ref when ref is a function', () => {
    const refFn = vi.fn();
    const value = 'test value';

    renderHook(() => setRef(refFn, value));
    expect(refFn).toHaveBeenCalledWith(value);
  });

  test('should set value to ref.current when ref is a mutable ref object', () => {
    const ref = { current: null };
    const value = 'test value';

    renderHook(() => setRef(ref, value));
    expect(ref.current).toBe(value);
  });

  test('should not set value to ref when ref is null or undefined', () => {
    const refNull = null;
    const refUndefined = undefined;
    const value = 'test value';

    renderHook(() => setRef(refNull, value));
    renderHook(() => setRef(refUndefined, value));

    expect(refNull).toBeNull();
    expect(refUndefined).toBeUndefined();
  });
});
