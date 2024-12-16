import { useEffect, useRef, useState } from 'react';

/**
 * 延迟更新state，且提供取消更新state的能力
 */
export default function useDelaySetState<T>(
  initialState: T = null,
  timeout = 10,
): [T, (val: T, callback?: () => void) => void, () => void] {
  const [internalState, setInternalState] = useState<T>(initialState);
  const delayRef = useRef(null);

  const cancelLatestSetState = () => {
    clearTimeout(delayRef.current);
  };

  useEffect(() => cancelLatestSetState, []);

  const delaySetState = (value: T, callback: () => void) => {
    cancelLatestSetState();

    delayRef.current = setTimeout(() => {
      setInternalState(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [internalState, delaySetState, cancelLatestSetState];
}
