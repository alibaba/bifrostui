import React from 'react';
import clsx from 'clsx';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbProps } from './Breadcrumb.types';
import './Breadcrumb.less';

const prefixCls = 'bui-breadcrumb';

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { className, style, items, separator, children, ...others } = props;

    const renderList = () => {
      if (items && items.length > 0) {
        return items.map((item, index) => {
          const { key, title, ...otherItemProps } = item;
          const mergedKey = key ?? index;
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem
              key={mergedKey}
              separator={isLast ? '' : separator}
              {...otherItemProps}
            >
              {title}
            </BreadcrumbItem>
          );
        });
      }

      if (children) {
        const childrenLength = React.Children.count(children);
        const enhancedChildren = React.Children.map(
          children,
          (child, index) => {
            // 确保我们只处理 React 元素
            if (React.isValidElement(child)) {
              const newProps = {
                separator: index === childrenLength - 1 ? '' : separator,
              };
              return React.cloneElement(child, newProps);
            }
            return child;
          },
        );

        return enhancedChildren;
      }

      return null;
    };

    return (
      <nav
        className={clsx(prefixCls, className)}
        style={style}
        ref={ref}
        {...others}
      >
        <ol className={`${prefixCls}-list`}>{renderList()}</ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'BuiBreadcrumb';
Breadcrumb.defaultProps = {
  separator: '/',
};

export default Breadcrumb;
