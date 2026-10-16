import * as React from 'react';
import { Context, ContextValue } from './types';

/**
 * Utility hook for contexts created by createContext from this package
 * to determine if a parent context exists.
 *
 * WARNING: This hook will not work for native React contexts
 *
 * @param context - Context created by createContext from this package
 * @returns Whether the hook is wrapped by a parent context provider
 *
 * @example
 * ```tsx
 * const MyContext = createContext({ value: 'default' });
 *
 * function MyComponent() {
 *   const hasContext = useHasParentContext(MyContext);
 *
 *   if (hasContext) {
 *     return <div>I am inside context provider</div>;
 *   } else {
 *     return <div>I can only use default context value</div>;
 *   }
 * }
 * ```
 */
export function useHasParentContext<Value>(context: Context<Value>): boolean {
  const contextValue = React.useContext(
    context as unknown as Context<ContextValue<Value>>,
  );

  if (contextValue.version) {
    return contextValue.version.current !== -1;
  }

  return false;
}
