import clsx from 'clsx';
import React from 'react';
import Image from '../Image';
import { AvatarProps } from './Avatar.types';
import './Avatar.less';

const prefixCls = 'bui-avatar';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    onClick,
    onError,
    onLoad,
    children,
    src,
    lazy,
    variant = 'rounded',
    size = 'medium',
    alt,
    fit = 'cover',
    placeholder,
    ImageProps,
    ...others
  } = props;

  const AvatarImg = src ? (
    <Image
      src={src}
      lazy={lazy}
      alt={alt}
      fit={fit}
      placeholder={placeholder}
      onError={onError}
      onLoad={onLoad}
      {...ImageProps}
      className={clsx(ImageProps?.className, `${prefixCls}-img`)}
    >
      {children}
    </Image>
  ) : null;

  // flex布局容器直接设置超出省略不起效
  const createElement = (element) =>
    element ? <div className={`${prefixCls}-children`}>{element}</div> : null;

  return (
    <div
      className={clsx(
        prefixCls,
        className,
        `${prefixCls}-${size}`,
        `${prefixCls}-${variant}`,
      )}
      onClick={onClick}
      ref={ref}
      {...others}
    >
      {createElement(children) || AvatarImg}
    </div>
  );
});

Avatar.displayName = 'BuiAvatar';

export default Avatar;
