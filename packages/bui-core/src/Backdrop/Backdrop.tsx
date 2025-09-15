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
      invisible = false,
      open = false,
      transitionDuration,
      timeout,
      ...others
    } = props;

    // 使用 timeout 或 transitionDuration，优先使用 timeout（与测试保持一致）
    const duration = timeout || transitionDuration;

    return (
      <Fade in={open} timeout={duration} {...others}>
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
