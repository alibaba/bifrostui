import React from 'react';
import clsx from 'clsx';
import { BreadcrumbItemProps } from './Breadcrumb.types';

const prefixCls = 'bui-breadcrumb-item';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (props: BreadcrumbItemProps, ref) => {
    const { className, style, href, separator, children } = props;

    return (
      <>
        <li className={clsx(`${prefixCls}`, className)} style={style} ref={ref}>
          {href ? <a href={href}>{children}</a> : <span>{children}</span>}
        </li>
        {separator && <li className={`${prefixCls}-separator`}>{separator}</li>}
      </>
    );
  },
);

BreadcrumbItem.displayName = 'BuiBreadcrumbItem';

export default BreadcrumbItem;
