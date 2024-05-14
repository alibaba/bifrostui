import clsx from 'clsx';
import React from 'react';
import { CardFooterProps } from './CardFooter.types';

import './CardFooter.less';

const prefixCls = 'bui-card-footer';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => {
    const { className, children, ...others } = props;
    return (
      <div className={clsx(prefixCls, className)} ref={ref} {...others}>
        {children}
      </div>
    );
  },
);

CardFooter.displayName = 'BuiCardFooter';

export default CardFooter;
