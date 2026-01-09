import { OverrideProps } from '@bifrostui/types';
import React, { SyntheticEvent } from 'react';
import { BackdropProps } from '../Backdrop/Backdrop.types';
import { PortalProps } from '../Portal/Portal.types';

export type ModalCloseDetail = {
  from?: string;
};

export type ModalProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      /**
       * 是否打开Modal
       */
      open?: boolean;
      /**
       * Portal容器
       */
      container?: PortalProps['container'];
      /**
       * 是否隐藏背景遮罩
       */
      hideBackdrop?: boolean;
      /**
       * 背景遮罩属性
       */
      BackdropProps?: Partial<BackdropProps>;
      /**
       * 关闭回调
       */
      onClose?: (e: SyntheticEvent, detail?: ModalCloseDetail) => void;
      /**
       * 是否禁用滚动锁定
       */
      disableScrollLock?: boolean;
      /**
       * 是否禁用Portal
       */
      disablePortal?: PortalProps['disablePortal'];
      /**
       * 是否保持挂载状态
       */
      keepMounted?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
