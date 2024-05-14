import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import useForkRef from '../hooks/useForkRef';

describe('useForkRef', () => {
  test('should return null when both refs are null', () => {
    const { result } = renderHook(() => useForkRef(null, null));
    expect(result.current).toBeNull();
  });

  test('should return a function when either ref is defined', () => {
    const refA = React.createRef();
    const { result } = renderHook(() => useForkRef(refA, null));
    expect(typeof result.current).toBe('function');
  });

  test('should call setRef for each defined ref when the returned function is invoked', () => {
    const refA = React.createRef();
    const refB = React.createRef();
    const { result } = renderHook(() => useForkRef(refA, refB));
    const forkRef = result.current;
    const refValue = 'test value';
    forkRef(refValue);

    expect(refA.current).toBe(refValue);
    expect(refB.current).toBe(refValue);
  });
});
