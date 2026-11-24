import * as React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Modified `useCallback` that can be used when dependencies change too frequently.
 *
 * Can occur when:
 * - User props are dependencies which could change on every render
 * - Volatile values (i.e. useState/useDispatch) are dependencies which could change frequently
 *
 * This should not be used often, but can be a useful re-render optimization since the callback
 * is a ref and will not be invalidated between re-renders.
 *
 * @param fn - The callback function that will be used
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 */
export default function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const callbackRef = React.useRef<typeof fn>(() => {
    throw new Error('Cannot call an event handler while rendering');
  });

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  return React.useCallback(
    (...args: Args) => {
      const callback = callbackRef.current;
      return callback(...args);
    },
    [callbackRef],
  );
}
