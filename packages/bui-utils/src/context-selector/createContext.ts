import * as React from 'react';
import {
  unstable_NormalPriority as NormalPriority,
  unstable_runWithPriority as runWithPriority,
} from 'scheduler';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { Context, ContextValue } from './types';

const createProvider = <Value>(
  Original: React.Provider<ContextValue<Value>>,
) => {
  const Provider: React.FC<React.ProviderProps<Value>> = (props) => {
    // Holds an actual "props.value"
    const valueRef = React.useRef(props.value);
    // Used to sync context updates and avoid stale values, can be considered as render/effect counter of Provider.
    const versionRef = React.useRef(0);

    // A stable object, is used to avoid context updates via mutation of its values.
    const contextValue = React.useRef<ContextValue<Value>>(null);

    if (!contextValue.current) {
      contextValue.current = {
        value: valueRef,
        version: versionRef,
        listeners: [],
      };
    }

    useIsomorphicLayoutEffect(() => {
      valueRef.current = props.value;
      versionRef.current += 1;

      // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberNewContext.js#L247
      runWithPriority(NormalPriority, () => {
        (contextValue.current as ContextValue<Value>).listeners.forEach(
          (listener) => {
            listener([versionRef.current, props.value]);
          },
        );
      });
    }, [props.value]);

    return React.createElement(
      Original,
      { value: contextValue.current },
      props.children,
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    Provider.displayName = 'ContextSelector.Provider';
  }

  return Provider as unknown as React.Provider<ContextValue<Value>>;
};

/**
 * Creates a context that supports selective subscriptions.
 * This allows components to subscribe to only specific parts of the context value
 * and re-render only when those parts change.
 *
 * @param defaultValue - The default value for the context
 * @returns A context object that can be used with useContextSelector
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
 * function MyComponent() {
 *   // Only re-renders when count changes, not when name changes
 *   const count = useContextSelector(MyContext, ctx => ctx.count);
 *   return <div>{count}</div>;
 * }
 * ```
 */
export const createContext = <Value>(defaultValue: Value): Context<Value> => {
  const context = React.createContext<ContextValue<Value>>({
    value: { current: defaultValue },
    version: { current: -1 },
    listeners: [],
  });

  context.Provider = createProvider<Value>(context.Provider);

  // We don't support Consumer API
  delete (context as unknown as Context<Value>).Consumer;

  return context as unknown as Context<Value>;
};
