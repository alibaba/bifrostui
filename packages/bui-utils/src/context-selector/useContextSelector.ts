/* eslint-disable no-console */
import * as React from 'react';
import useEventCallback from '../hooks/useEventCallback';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import {
  Context,
  ContextSelector,
  ContextValue,
  ContextVersion,
} from './types';

/**
 * This hook returns context selected value by selector.
 * It will only accept context created by `createContext` from this package.
 * It will trigger re-render only if the selected value is referentially changed.
 *
 * @param context - Context created by createContext from this package
 * @param selector - Function that selects a value from the context
 * @returns The selected value from the context
 *
 * @example
 * ```tsx
 * interface MyContextValue {
 *   count: number;
 *   name: string;
 * }
 *
 * const MyContext = createContext<MyContextValue>({ count: 0, name: '' });
 *
 * function Counter() {
 *   // Only re-renders when count changes, not when name changes
 *   const count = useContextSelector(MyContext, ctx => ctx.count);
 *   const increment = useContextSelector(MyContext, ctx => ctx.increment);
 *
 *   return <button onClick={increment}>{count}</button>;
 * }
 * ```
 */
export const useContextSelector = <Value, SelectedValue>(
  context: Context<Value>,
  selector: ContextSelector<Value, SelectedValue>,
): SelectedValue => {
  const contextValue = React.useContext(
    context as unknown as Context<ContextValue<Value>>,
  );

  const {
    value: { current: value },
    version: { current: version },
    listeners,
  } = contextValue;
  const selected = selector(value);

  const [state, setState] = React.useState<readonly [Value, SelectedValue]>([
    value,
    selected,
  ]);
  const dispatch = (
    payload:
      | undefined // undefined from render below
      | readonly [ContextVersion, Value], // from provider effect
  ) => {
    setState((prevState) => {
      if (!payload) {
        // early bail out when is dispatched during render
        return [value, selected] as const;
      }

      if (payload[0] <= version) {
        if (Object.is(prevState[1], selected)) {
          return prevState; // bail out
        }

        return [value, selected] as const;
      }

      try {
        if (Object.is(prevState[0], payload[1])) {
          return prevState; // do not update
        }

        const nextSelected = selector(payload[1]);

        if (Object.is(prevState[1], nextSelected)) {
          return prevState; // do not update
        }

        return [payload[1], nextSelected] as const;
      } catch (e) {
        // ignored (stale props or some other reason)
        console.error(e);
      }

      // explicitly spread to enforce typing
      return [prevState[0], prevState[1]] as const; // schedule update
    });
  };

  if (!Object.is(state[1], selected)) {
    // schedule re-render
    // this is safe because it's self contained
    dispatch(undefined);
  }

  const stableDispatch = useEventCallback(dispatch);

  useIsomorphicLayoutEffect(() => {
    listeners.push(stableDispatch);

    return () => {
      const index = listeners.indexOf(stableDispatch);
      listeners.splice(index, 1);
    };
  }, [stableDispatch, listeners]);

  return state[1] as SelectedValue;
};
