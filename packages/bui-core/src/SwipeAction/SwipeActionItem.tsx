import React, { useContext } from 'react';
import clsx from 'clsx';
import { SwipeActionItemProps } from './SwipeAction.types';
import './SwipeActionItem.less';
import BuiSwipeActionContext from './SwipeActionContext';

const prefixCls = 'bui-btn';

const SwipeActionItem = React.forwardRef<HTMLLIElement, SwipeActionItemProps>(
  (props: SwipeActionItemProps, ref) => {
    const {
      className,
      style,
      children,
      onClick = () => {},
      color = 'primary',
      ...others
    } = props;
    const { closeOnAction, close } = useContext(BuiSwipeActionContext);

    const onClickHandle = (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      if (closeOnAction) {
        /* eslint-disable */
        close && close();
      }
      onClick?.(e);
    };

    return (
      <>
        <div
          className={clsx('bui-swipe-action-button', className, {
            [`${prefixCls}-${color}`]: color,
          })}
          style={style}
          ref={ref}
          onClick={onClickHandle}
          {...others}
        >
          {children}
        </div>
      </>
    );
  },
);

SwipeActionItem.displayName = 'SwipeActionItem';

export default SwipeActionItem;
