import clsx from 'clsx';
import React from 'react';
import { TagGroupProps } from './TagGroup.types';

import './TagGroup.less';

const prefixCls = 'bui-tag-group';

const Tag = React.forwardRef<HTMLDivElement, TagGroupProps>((props, ref) => {
  const { className, onClick, children, ...others } = props;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(prefixCls, className)}
      {...others}
    >
      {children}
    </div>
  );
});

Tag.displayName = 'BuiTagGroup';

export default Tag;
