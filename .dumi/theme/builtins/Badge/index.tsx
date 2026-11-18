import React, { type FC, type ReactNode } from 'react';
import './index.less';

const Badge: FC<{
  children: ReactNode;
  type: 'info' | 'warning' | 'error' | 'success';
}> = (props) => {
  const { key, ...restProps } = props as any;
  return <span className="dumi-default-badge" {...restProps} />;
};

export default Badge;