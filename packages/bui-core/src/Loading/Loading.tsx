import React from 'react';
import clsx from 'clsx';
import { LoadingThreeQuartersOutlinedIcon } from '@bifrostui/icons';
import { LoadingProps } from './Loading.types';
import './index.less';

const prefixCls = 'bui-loading';

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>((props, ref) => {
  const {
    className,
    icon,
    IconProps,
    children,
    direction = 'vertical',
    ...otherProps
  } = props;

  const renderIcon = () => {
    return (
      icon ?? (
        <LoadingThreeQuartersOutlinedIcon
          className={clsx(`${prefixCls}-icon`)}
          {...IconProps}
        />
      )
    );
  };

  return (
    <div
      ref={ref}
      className={clsx(prefixCls, className, `${prefixCls}-${direction}`)}
      {...otherProps}
    >
      {renderIcon()}
      <div className={`${prefixCls}-text`}>{children}</div>
    </div>
  );
});

Loading.displayName = 'BuiLoading';

export default Loading;
