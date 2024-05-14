import React, { useLayoutEffect } from 'react';

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */
export default function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });

  // @ts-ignore
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}
