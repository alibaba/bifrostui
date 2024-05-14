import React from 'react';
import { ModalProps } from '../Modal/Modal.types';
import { SlideProps } from '../Slide/Slide.types';
import { TransitionProps } from '../Transition';

export interface DrawerProps extends ModalProps {
  /**
   * Drawer出现的位置 'left' | 'top' | 'right' | 'bottom'
   * @default 'bottom'
   */
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * 是否显示
   * @default false
   */
  open?: boolean;
  /**
   * 是否隐藏遮罩层
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * 抽屉挂载的节点
   * @default 页面根节点
   */
  container?: ModalProps['container'];
  /**
   * Slide组件的Props
   */
  SlideProps?: Partial<SlideProps>;
  /**
   * 动态效果延时设置
   * @default {
   *    enter: duration.enteringScreen, // 225
   *    exit: duration.leavingScreen,  // 195
   *  }
   */
  transitionDuration?: TransitionProps['timeout'];
  /**
   * 抽屉关闭回调事件
   */
  onClose?: ModalProps['onClose'];
  /**
   * 是否禁用Portal
   * @default false
   */
  disablePortal?: boolean;
  /**
   * 抽屉内容节点的Props
   */
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
}
