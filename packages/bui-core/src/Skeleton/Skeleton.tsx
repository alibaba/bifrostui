import clsx from 'clsx';
import React from 'react';
import './Skeleton.less';
import { SkeletonProps } from './Skeleton.types';

const prefixCls = 'bui-skeleton';

const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  (props, ref) => {
    const {
      className,
      style,
      animation,
      width,
      height,
      variant,
      children,
      ...others
    } = props;

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
Skeleton.defaultProps = {
  animation: 'wave',
  variant: 'text',
};
export default Skeleton;
