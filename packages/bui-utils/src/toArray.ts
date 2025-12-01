import * as React from 'react';
import { isFragment } from 'react-is';

interface Option {
  keepEmpty?: boolean;
}

export default function toArray(
  children: React.ReactNode,
  option: Option = {},
): React.ReactElement[] {
  let ret: React.ReactElement[] = [];

  React.Children.forEach(children, (child: React.ReactNode) => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (isFragment(child) && React.isValidElement(child)) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child as React.ReactElement);
    }
  });

  return ret;
}
