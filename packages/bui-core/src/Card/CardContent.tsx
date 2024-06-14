import clsx from 'clsx';
import React from 'react';
import { CardContentProps } from './CardContent.types';

import './CardContent.less';

const prefixCls = 'bui-card-content';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => {
    const { className, children, ...others } = props;
    return (
      <div className={clsx(prefixCls, className)} ref={ref} {...others}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = 'BuiCardContent';

export default CardContent;
