import clsx from 'clsx';
import React from 'react';
import { CardProps } from './Card.types';
import './Card.less';

const prefixCls = 'bui-card';

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, onClick, children, ...others } = props;
  return (
    <div
      className={clsx(prefixCls, className)}
      onClick={onClick}
      ref={ref}
      {...others}
    >
      {children}
    </div>
  );
});

Card.displayName = 'BuiCard';

export default Card;
