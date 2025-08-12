import React from 'react';
import clsx from 'clsx';
import BreadcrumbItem from './BreadcrumbItem';
import { BreadcrumbProps } from './Breadcrumb.types';
import './index.less';

const prefixCls = 'bui-breadcrumb';

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (props, ref) => {
    const {
      className,
      style,
      items,
      separator = '/',
      children,
      ...others
    } = props;

    const renderList = () => {
      if (items && items.length > 0) {
        return items.map((item, index) => {
          const { title, ...otherItemProps } = item;
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem
              key={index}
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
              const itemSeparator = child.props.separator || separator;
              const newProps = {
                separator: index === childrenLength - 1 ? '' : itemSeparator,
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

    if (items == null && children == null) {
      return null;
    }

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

export default Breadcrumb;
