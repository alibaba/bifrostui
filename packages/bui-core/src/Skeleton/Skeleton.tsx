import clsx from 'clsx';
import React from 'react';
import { SkeletonProps } from './Skeleton.types';
import './index.less';

const prefixCls = 'bui-skeleton';

const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      className,
      style,
      animation = 'wave',
      width,
      height,
      variant = 'text',
      children,
      ...others
    },
    ref,
  ) => {
    return (
      <span
        className={clsx(
          prefixCls,
          `${prefixCls}-${variant}`,
          {
            [`${prefixCls}-animation-${animation}`]: animation,
            [`${prefixCls}-with-children`]: Boolean(children),
          },
          className,
        )}
        ref={ref}
        style={{ width, height, ...style }}
        {...others}
      >
        {children}
      </span>
    );
  },
);

Skeleton.displayName = 'BuiSkeleton';

export default Skeleton;
