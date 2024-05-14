import { OverrideProps } from '@bifrostui/types';
import React, { SyntheticEvent } from 'react';
import { BackdropProps } from '../Backdrop/Backdrop.types';
import { PortalProps } from '../Portal/Portal.types';

export type CloseDetail = {
  from?: string;
};

export type ModalProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P & {
      open?: boolean;
      container?: PortalProps['container'];
      hideBackdrop?: boolean;
      BackdropProps?: Partial<BackdropProps>;
      onClose?: (e: SyntheticEvent, detail: CloseDetail) => void;
      disableScrollLock?: boolean;
      disablePortal?: PortalProps['disablePortal'];
      keepMounted?: boolean;
    };
    defaultComponent: D;
  },
  D
>;
