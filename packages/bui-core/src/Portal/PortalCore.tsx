import { setRef, useForkRef } from '@bifrostui/utils';
import React, { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalCoreProps } from './Portal.types';

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
const PortalCore = React.forwardRef<Element, PortalCoreProps>(
  function Portal(props, ref) {
    const {
      children,
      container,
      disablePortal = false,
      rootElement,
      onRootElementMouted,
    } = props;
    const [mountNode, setMountNode] = React.useState(null);
    const handleRef = useForkRef(
      // @ts-expect-error will upstream fix
      React.isValidElement(children) ? children.ref : null,
      ref,
    );

    useLayoutEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer(container) || rootElement);
      }
    }, [container, disablePortal, rootElement]);

    useLayoutEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        onRootElementMouted?.(mountNode);
        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);
    if (disablePortal) {
      if (React.isValidElement(children)) {
        const newProps = {
          ref: handleRef,
        };
        return React.cloneElement(children, newProps);
      }
      return children;
    }
    return mountNode ? createPortal(children, mountNode) : mountNode;
  },
);

PortalCore.displayName = 'BuiPortalCore';

export default PortalCore;
