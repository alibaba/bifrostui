import React from 'react';
import { DrawerProps } from '../Drawer/Drawer.types';
import { ModalProps } from '../Modal/Modal.types';

export interface ActionSheetProps extends DrawerProps {
  /**
   *  取消按钮内容，如果设置为空则不显示取消按钮
   */
  cancelText?: React.ReactNode;
  /**
   *  顶部额外的内容展示
   */
  extra?: React.ReactNode;
  /**
   * 子项的点击选择回调
   * @param event
   * @param data
   */
  onSelect?: (
    event: React.MouseEvent<HTMLDivElement>,
    data?: { index: string | number },
  ) => void;
  /**
   * 关闭回调
   */
  onClose?: ModalProps['onClose'];
}

export interface ActionSheetContextValue {
  onSelect?: ActionSheetProps['onSelect'];
}
