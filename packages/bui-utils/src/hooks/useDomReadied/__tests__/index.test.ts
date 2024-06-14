import { renderHook } from '@testing-library/react-hooks';
import useDomReadied from '../index'; // Adjust the import path according to your file structure

describe('useDomReadiad', () => {
  test('should call callback after the component is mounted', () => {
    const callback = jest.fn();
    const { rerender } = renderHook(() => useDomReadied(callback));

    // Callback should be called once after the component mounts
    expect(callback).toHaveBeenCalledTimes(1);

    // Verify that re-rendering the component does not trigger the callback again
    // since our effect should only run once after the initial mount.
    rerender();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
