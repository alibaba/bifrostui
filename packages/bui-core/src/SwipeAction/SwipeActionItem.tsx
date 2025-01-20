import React, { useContext } from 'react';
import clsx from 'clsx';
import { SwipeActionItemProps } from './SwipeAction.types';
import BuiSwipeActionContext from './SwipeActionContext';
import './SwipeActionItem.less';

// TODO 修改
const prefixCls = 'bui-btn';

// TODO HTMLDivElement 类型错误
const SwipeActionItem = React.forwardRef<HTMLDivElement, SwipeActionItemProps>(
  (props: SwipeActionItemProps, ref) => {
    const {
      className,
      children,
      // TODO 需要回调 （e, {...item}),增加编码灵活性，删除默认赋值
      onClick = () => {},
      color = 'primary',
      ...others
    } = props;
    const { closeOnAction, close } = useContext(BuiSwipeActionContext);

    const onClickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (closeOnAction) {
        close?.();
      }
      onClick?.(e);
    };

    return (
      <div
        className={clsx('bui-swipe-action-button', className, {
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
