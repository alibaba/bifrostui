import React from 'react';
import clsx from 'clsx';
import { BreadcrumbItemProps } from './Breadcrumb.types';

const prefixCls = 'bui-breadcrumb-item';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (props: BreadcrumbItemProps, ref) => {
    const { className, style, separator, children, onClick, ...others } = props;

    return (
      <>
        <li
          className={clsx(`${prefixCls}`, className)}
          style={style}
          ref={ref}
          onClick={onClick}
          {...others}
        >
          {children}
        </li>
        {separator && <li className={`${prefixCls}-separator`}>{separator}</li>}
      </>
    );
  },
);

BreadcrumbItem.displayName = 'BuiBreadcrumbItem';

export default BreadcrumbItem;
