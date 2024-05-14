import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { DividerProps } from './Divider.types';
import './Divider.less';

const prefixCls = 'bui-divider';

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const { className, style, direction, dashed, size, children } = props;
  const isVertical = direction === 'vertical';
  const hasChildren = !!React.Children.toArray(children).length;
  let propsStyle = {};
  let contentStyle = {};
  if (hasChildren) {
    contentStyle = {
      width: size,
    };
  } else if (size) {
    propsStyle = isVertical ? { height: size } : { width: size };
  }

  return (
    <div
      ref={ref}
      className={clsx(className, prefixCls, {
        [`${prefixCls}-${direction}`]: direction,
        [`${prefixCls}-content`]: !isVertical && hasChildren,
        [`${prefixCls}-${direction}-dashed`]: dashed,
      })}
      style={{ ...propsStyle, ...style }}
    >
      {!isVertical && hasChildren && (
        <>
          <span style={contentStyle} className={`${prefixCls}-line`} />
          <span className={`${prefixCls}-text`}>{children}</span>
          <span style={contentStyle} className={`${prefixCls}-line`} />
        </>
      )}
    </div>
  );
});

Divider.displayName = 'BuiDivider';
Divider.defaultProps = {
  direction: 'vertical',
  dashed: false,
};

export default Divider;
