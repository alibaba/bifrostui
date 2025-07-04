import clsx from 'clsx';
import React, { useContext } from 'react';
import ActionSheetContext from './ActionSheetContext';
import { ActionSheetItemProps } from './ActionSheetItem.types';
import './ActionSheetItem.less';

const prefixCls = 'bui-action-sheet-item';

const ActionSheetItem = React.forwardRef<HTMLDivElement, ActionSheetItemProps>(
  (props, ref) => {
    const {
      className,
      children,
      disabled = false,
      bold = false,
      color = 'neutral',
      description,
      onClick,
      index,
      ...others
    } = props;

    const context = useContext(ActionSheetContext);

    const handleAction = (ev) => {
      if (disabled) return;
      onClick?.(ev, { index });
      context.onSelect?.(ev, { index });
    };
    return (
      <div
        ref={ref}
        className={clsx(
          prefixCls,
          {
            [`${prefixCls}-${color}`]: color,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-bold`]: bold,
          },
          className,
        )}
        onClick={handleAction}
        {...others}
      >
        <div className={`${prefixCls}-content`}>{children}</div>
        {description && (
          <div className={`${prefixCls}-description`}>{description}</div>
        )}
      </div>
    );
  },
);

ActionSheetItem.displayName = 'BuiActionSheetItem';

export default ActionSheetItem;
