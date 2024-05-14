import clsx from 'clsx';
import React, { cloneElement, ReactElement } from 'react';
import Avatar from './Avatar';
import './AvatarGroup.less';
import { AvatarGroupProps } from './AvatarGroup.types';

const prefixCls = 'bui-avatar-group';
const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (props, ref) => {
    const {
      className,
      maxCount,
      variant,
      spacing,
      size,
      orientation,
      children,
      onClick,
      ...others
    } = props;
    const avatarChildrenCount = React.Children.count(children);
    const extraAvatarNum = avatarChildrenCount - Number(maxCount);

    const AvatarGroupItem = children
      ? React.Children.map(children, (child: ReactElement, index) => {
          if (maxCount && index > Number(maxCount)) return null;
          const zIndex =
            orientation === 'right' ? -index + avatarChildrenCount : index;

          if (maxCount && index === Number(maxCount)) {
            return (
              <Avatar
                variant={variant}
                size={size}
                className={`${prefixCls}-extra`}
                style={{ marginLeft: `-${spacing}`, zIndex }}
                onClick={onClick}
              >{`+${extraAvatarNum}`}</Avatar>
            );
          }

          const childStyle = {
            className: clsx(`${prefixCls}-avatar`, child?.props?.className),
            style: {
              ...child?.props?.style,
              marginLeft: `-${spacing}`,
              zIndex,
            },
            size,
            variant,
          };

          return React.isValidElement(child)
            ? cloneElement(child, { ...childStyle })
            : child;
        })
      : '';

    return AvatarGroupItem ? (
      <div className={clsx(prefixCls, className)} ref={ref} {...others}>
        {AvatarGroupItem}
      </div>
    ) : null;
  },
);

AvatarGroup.displayName = 'BuiAvatarGroup';
AvatarGroup.defaultProps = {
  size: 'medium',
  orientation: 'right',
};

export default AvatarGroup;
