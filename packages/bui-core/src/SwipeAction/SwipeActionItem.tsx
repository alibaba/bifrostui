import React, { useContext } from 'react';
import clsx from 'clsx';
import { SwipeActionItemProps } from './SwipeAction.types';
import BuiSwipeActionContext from './SwipeActionContext';
import './SwipeActionItem.less';
const prefixCls = 'bui-swipe-action-button';

const SwipeActionItem = React.forwardRef<HTMLDivElement, SwipeActionItemProps>(
  (props: SwipeActionItemProps, ref) => {
    const {
      className,
      children,
      onClick,
      color = 'primary',
      id = '',
      ...others
    } = props;
    const { closeOnClickActionItem, close } = useContext(BuiSwipeActionContext);

    const onClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (closeOnClickActionItem) {
        close?.();
      }
      onClick?.(e, {
        color,
        id,
        text: children,
      });
    };

    return (
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-${color}`]: color,
        })}
        ref={ref}
        onClick={onClickHandle}
        {...others}
      >
        {children}
      </div>
    );
  },
);

SwipeActionItem.displayName = 'SwipeActionItem';

export default SwipeActionItem;
