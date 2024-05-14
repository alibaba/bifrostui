import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { StackProps } from './Stack.types';
import './Stack.less';

const prefixCls = 'bui-stack';

const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    className,
    children,
    direction,
    spacing,
    divider,
    justifyContent,
    alignItems,
    flexWrap,
    style,
    ...others
  } = props;

  /**
   * js写css变量方式
   * 可通过css直接覆盖，不需要通过style
   * */
  const cssProperties = {
    '--align-items': alignItems || 'center',
    '--justify-content': justifyContent || 'center',
    '--flex-direction': direction || 'column',
    '--spacing': spacing || '0',
    '--flex-wrap': flexWrap || 'nowrap',
  } as React.CSSProperties;

  return (
    <div
      className={clsx(prefixCls, className)}
      style={{ ...cssProperties, ...style }}
      ref={ref}
      {...others}
    >
      {/* React.Children.toArray 是 React 提供的操作children的api
      参考 https://legacy.reactjs.org/docs/react-api.html#reactchildren */}
      {divider
        ? React.Children.map(children, (child: ReactElement, index) => {
            if (index < React.Children.toArray(children).length - 1) {
              return (
                <>
                  {child}
                  {divider}
                </>
              );
            }
            return child;
          })
        : children}
    </div>
  );
});

Stack.displayName = 'BuiStack';
export default Stack;
