import clsx from 'clsx';
import React from 'react';
import { ISvgIconProps } from '../../SvgIcon.types';
import './SvgIcon.less';

const classes = {
  root: 'bui-svg-icon',
};

function SvgIcon(props: ISvgIconProps, ref) {
  const {
    className,
    children,
    component: Component = 'div',
    color,
    htmlColor,
    size,
    viewBox = '0 0 96 96',
    style,
    ...rest
  } = props;

  const colorMap = {
    default: '#959aa5',
    primary: '#ff335c',
    info: '#148aff',
    danger: '#ff335c',
    success: '#00d68f',
    warning: '#ff8533',
    disabled: '#ced1d6',
  };

  const svgColor = colorMap[color] || htmlColor || style?.color;

  if (
    Component !== 'svg' &&
    !svgColor &&
    typeof children === 'string' &&
    !/fill/.test(children)
  ) {
    console.warn(
      'Inherit Bui icon color is not available in Miniapp(<div>). You may need to specify one.',
    );
  }

  if (Component === 'svg') {
    if (typeof children === 'string') {
      // 传入string，svg dom模式，使用dangerouslySetInnerHTML
      return (
        <Component
          ref={ref}
          className={clsx(classes.root, className, {
            [`icon-size-${size}`]: size,
          })}
          focusable="false"
          viewBox={viewBox}
          color={svgColor}
          dangerouslySetInnerHTML={{
            __html: children,
          }}
          style={style}
          {...rest}
        />
      );
    }
    // 传入ReactNode，直接丢进children
    return (
      <Component
        ref={ref}
        className={clsx(classes.root, className, {
          [`icon-size-${size}`]: size,
        })}
        focusable="false"
        viewBox={viewBox}
        color={svgColor || htmlColor}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  }
  if (typeof children === 'string') {
    // div背景色模式，组装data:image/svg+xml塞进内联样式
    return (
      <Component
        ref={ref}
        className={clsx(classes.root, className, {
          [`icon-size-${size}`]: size,
        })}
        style={{
          ...style,
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg viewBox='${viewBox}' xmlns='http://www.w3.org/2000/svg' ${
              svgColor ? `fill='${svgColor}'` : ''
            }>${children}</svg>`,
          )}")`,
        }}
        {...rest}
      />
    );
  }
  return null;
}

export default React.forwardRef(SvgIcon);
