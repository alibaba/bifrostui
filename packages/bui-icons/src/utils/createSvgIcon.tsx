import { isMini } from '@bifrostui/utils';
import React from 'react';
import SvgIcon from '../components/SvgIcon';

export default function createSvgIcon(
  path: React.ReactNode | string,
  displayName: string,
): typeof SvgIcon {
  const Component = (props, ref) => (
    <SvgIcon ref={ref} component={isMini ? 'div' : 'svg'} {...props}>
      {path}
    </SvgIcon>
  );

  Component.displayName = `${displayName}Icon`;

  // @ts-ignore internal component
  return React.memo(React.forwardRef(Component));
}
