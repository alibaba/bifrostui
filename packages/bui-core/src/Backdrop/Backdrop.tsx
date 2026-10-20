import clsx from 'clsx';
import * as React from 'react';
import Fade from '../Fade';
import { BackdropProps } from './Backdrop.types';
import './index.less';

const prefixCls = 'bui-backdrop';

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (props, ref) => {
    const {
      children,
      className,
      invisible = false,
      open = false,
      transitionDuration,
      ...others
    } = props;

    return (
      <Fade in={open} timeout={transitionDuration} {...others}>
        <div
          aria-hidden="true"
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
