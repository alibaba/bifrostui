import clsx from 'clsx';
import React from 'react';
import Drawer from '../Drawer';
import { ActionSheetProps } from './ActionSheet.types';
import ActionSheetContext from './ActionSheetContext';
import './ActionSheet.less';

const prefixCls = 'bui-action-sheet';

const ActionSheetCancel: React.FC<{
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ children, onClick }) => {
  return (
    <div className={`${prefixCls}-item ${prefixCls}-cancel`} onClick={onClick}>
      {children}
    </div>
  );
};

const ActionSheet = React.forwardRef<HTMLDivElement, ActionSheetProps>(
  (props, ref) => {
    const {
      open,
      onClose,
      cancelText,
      className,
      extra,
      children,
      onSelect,
      ...others
    } = props;

    const context = React.useMemo(() => {
      return {
        onSelect,
      };
    }, []);
    const onCancelClick = (event) => {
      onClose(event, { from: 'cancelText' });
    };
    return (
      <ActionSheetContext.Provider value={context}>
        <Drawer
          ref={ref}
          open={open}
          onClose={onClose}
          className={clsx(prefixCls, className)}
          contentProps={{ className: `${prefixCls}-content` }}
          {...others}
        >
          {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
          <div className={`${prefixCls}-item-wrapper`}>{children}</div>
          {cancelText && (
            <>
              <div className={`${prefixCls}-gap`} />
              <ActionSheetCancel onClick={onCancelClick}>
                {cancelText}
              </ActionSheetCancel>
            </>
          )}
        </Drawer>
      </ActionSheetContext.Provider>
    );
  },
);

ActionSheet.displayName = 'BuiActionSheet';

export default ActionSheet;
