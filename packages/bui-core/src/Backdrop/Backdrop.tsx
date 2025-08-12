import clsx from 'clsx';
import React from 'react';
import Fade from '../Fade';
import { BackdropProps } from './Backdrop.types';
import './index.less';

const prefixCls = 'bui-backdrop';

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (props, ref) => {
    const {
      children,
      className,
      invisible,
      open,
      transitionDuration,
      ...others
    } = props;

    return (
      <Fade in={open} timeout={transitionDuration} {...others}>
        <div
          className={clsx(
            prefixCls,
            {
              [`${prefixCls}-invisible`]: invisible,
            },
            className,
          )}
          ref={ref}
        >
          {children}
        </div>
      </Fade>
    );
  },
);

Backdrop.displayName = 'Backdrop';

export default Backdrop;
