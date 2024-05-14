import { useMemo, useRef } from 'react';
import isDev from '../isDev';
import { isFunction } from '../isType';

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

export default function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}
