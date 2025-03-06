import { ArrowForwardIcon } from '@bifrostui/icons';
import clsx from 'clsx';
import React from 'react';
import { CardHeaderProps } from './CardHeader.types';

import './CardHeader.less';

const prefixCls = 'bui-card-header';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => {
    const { title, subtitle, className, extra, endIcon, onClick, ...others } =
      props;

    // 右侧操作icon
    const chevron = (() => {
      if (typeof endIcon === 'boolean') {
        return endIcon ? (
          <ArrowForwardIcon size="small" color="disabled" />
        ) : null;
      }
      if (React.isValidElement(endIcon)) {
        return endIcon;
      }
      if (onClick) {
        return <ArrowForwardIcon size="small" color="disabled" />;
      }
      return null;
    })();

    return title || subtitle ? (
      <div
        className={clsx(prefixCls, className)}
        onClick={onClick}
        ref={ref}
        {...others}
      >
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {subtitle && (
          <div className={clsx(`${prefixCls}-subtitle`)}>{subtitle}</div>
        )}

        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {chevron && <div className={`${prefixCls}-end-icon`}>{chevron}</div>}
      </div>
    ) : null;
  },
);

CardHeader.displayName = 'BuiCardHeader';

export default CardHeader;
