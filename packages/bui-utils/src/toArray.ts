import * as React from 'react';

interface Option {
  keepEmpty?: boolean;
}

function isReactFragment(child: unknown): child is React.ReactElement {
  return (
    React.isValidElement(child) &&
    (child as React.ReactElement).type === React.Fragment
  );
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
    } else if (isReactFragment(child)) {
      ret = ret.concat(toArray((child.props as any).children, option));
    } else {
      ret.push(child as unknown as React.ReactElement);
    }
  });

  return ret;
}
