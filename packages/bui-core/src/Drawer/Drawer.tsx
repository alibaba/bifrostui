import clsx from 'clsx';
import React, { useState } from 'react';
import Modal from '../Modal';
import Slide from '../Slide';
import { DrawerProps } from './Drawer.types';
import './Drawer.less';

const prefixCls = 'bui-drawer';

const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up',
} as const;

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    anchor: anchorProp,
    container,
    children,
    className,
    hideBackdrop,
    onClose,
    SlideProps,
    open,
    disablePortal,
    contentProps,
    transitionDuration,
    ...others
  } = props;
  const anchorInvariant = oppositeDirection[anchorProp];
  const [keepMounted, setKeepMounted] = useState(open);

  return (
    <Modal
      container={container}
      open={open}
      onClose={onClose}
      hideBackdrop={hideBackdrop}
      ref={ref}
      className={clsx(prefixCls, className)}
      disablePortal={disablePortal}
      keepMounted={keepMounted}
      {...others}
    >
      <Slide
        in={open}
        direction={anchorInvariant}
        timeout={transitionDuration}
        onEnter={() => setKeepMounted(true)}
        onExited={() => setKeepMounted(false)}
        {...SlideProps}
      >
        <div
          {...contentProps}
          className={clsx(
            `${prefixCls}-content`,
            `${prefixCls}-content-${anchorProp}`,
            contentProps?.className,
          )}
        >
          {children}
        </div>
      </Slide>
    </Modal>
  );
});

Drawer.displayName = 'BuiDrawer';
Drawer.defaultProps = {
  anchor: 'bottom',
  hideBackdrop: false,
  open: false,
  disablePortal: false,
};

export default Drawer;
