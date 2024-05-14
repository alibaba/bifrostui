import React from 'react';
import { PortalProps } from './Portal.types';
import PortalCore from './PortalCore';

export const Portal = React.forwardRef<HTMLElement, PortalProps>(
  (props, ref) => {
    return <PortalCore {...props} ref={ref} rootElement={document.body} />;
  },
);

Portal.displayName = 'BuiPortal';
export default Portal;
