import { renderHook } from '@testing-library/react-hooks';
import useUniqueId from '../useUniqueId';

describe('useUniqueId', () => {
  it('should generate a unique ID', () => {
    const {
      result: { current: id1 },
    } = renderHook(() => useUniqueId());
    const {
      result: { current: id2 },
    } = renderHook(() => useUniqueId());
    expect(id1).not.toBe(id2);
  });

  it('should have a consistent format', () => {
    const { result } = renderHook(() => useUniqueId());
    const id = result.current;
    expect(id).toMatch(/^b[0-9a-z]+$/);
  });

  it('should return the same ID on multiple calls within the same render', () => {
    const { result } = renderHook(() => useUniqueId());
    const id1 = result.current;
    const id2 = result.current;
    expect(id1).toBe(id2);
  });
});
