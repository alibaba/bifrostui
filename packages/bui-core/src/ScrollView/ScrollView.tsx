import clsx from 'clsx';
import React, { forwardRef } from 'react';
import './index.less';
import { ScrollViewProps } from './ScrollView.types';
import { useScrollView } from './useScrollView';

const classes = {
  root: 'bui-scroll',
};

const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  (props: ScrollViewProps, ref) => {
    const {
      className,
      style = {},
      scrollX,
      scrollY,
      children,
      ...otherProps
    } = props;

    const { getRootProps } = useScrollView({
      ...otherProps,
      scrollX,
      scrollY,
      ref,
    });

    const cls = clsx(
      classes.root,
      {
        [`${classes.root}-view-scroll-x`]: scrollX,
        [`${classes.root}-view-scroll-y`]: scrollY,
      },
      className,
    );

    const rootProps = getRootProps({
      style,
      className: cls,
    });

    return <div {...rootProps}>{children}</div>;
  },
);

ScrollView.displayName = 'BuiScrollView';

export default ScrollView;
