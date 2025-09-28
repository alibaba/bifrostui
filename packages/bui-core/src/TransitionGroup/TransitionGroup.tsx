import React, { useState, useEffect, useRef, ReactElement } from 'react';
import {
  getChildMapping,
  getInitialChildMapping,
  getNextChildMapping,
} from './utils/childMapping';
import { TransitionGroupProps } from './TransitionGroup.types';

const TransitionGroupContext = React.createContext<null | {
  isMounting: boolean;
}>(null);

const values = Object.values || ((obj) => Object.keys(obj).map((k) => obj[k]));

const TransitionGroup = (props: TransitionGroupProps) => {
  const {
    component: Component = 'div',
    children,
    appear,
    enter,
    exit,
    childFactory = (child: ReactElement) => child,
    ...restProps
  } = props;

  const [state, setState] = useState({
    contextValue: { isMounting: true },
    firstRender: true,
    children: {} as { [key: string]: ReactElement },
  });
  const mountedRef = useRef(false);

  // 将 handleExited 定义为 useRef，以保持引用稳定
  const handleExitedRef = useRef((child: ReactElement, node: any) => {
    const currentChildMapping = getChildMapping(children);

    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (mountedRef.current) {
      setState((prevState) => {
        const tempChildren = { ...prevState.children };
        delete tempChildren[child.key];
        return { ...prevState, children: tempChildren };
      });
    }
  });

  useEffect(() => {
    mountedRef.current = true;

    setState((prevState) => ({
      ...prevState,
      contextValue: { isMounting: false },
    }));

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setState((prevState) => {
      const { firstRender, children: prevChildMapping } = prevState;
      const handleExited = handleExitedRef.current;

      return {
        ...prevState,
        children: firstRender
          ? getInitialChildMapping(props, handleExited)
          : getNextChildMapping(props, prevChildMapping, handleExited),
        firstRender: false,
      };
    });
  }, [children, appear, enter, exit]);

  const { contextValue, children: mappedChildren } = state;
  const valuedChildren = values(mappedChildren).map(
    childFactory,
  ) as ReactElement[];

  if (Component === null) {
    return (
      <TransitionGroupContext.Provider value={contextValue}>
        {valuedChildren}
      </TransitionGroupContext.Provider>
    );
  }

  return (
    <TransitionGroupContext.Provider value={contextValue}>
      <Component {...restProps}>{valuedChildren}</Component>
    </TransitionGroupContext.Provider>
  );
};

TransitionGroup.displayName = 'BuiTransitionGroup';

export default TransitionGroup;
