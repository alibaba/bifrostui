import clsx from 'clsx';
import React from 'react';
import { cssVarToValue } from '@bifrostui/utils';
import { ISvgIconProps } from '../../SvgIcon.types';
import './SvgIcon.less';

const classes = {
  root: 'bui-svg-icon',
};

export default function SvgIcon(props: ISvgIconProps) {
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
    light: 'var(--bui-color-bg-view)',
    dark: 'var(--bui-color-fg-default)',
    neutral: 'var(--bui-color-fg-subtle)',
    primary: 'var(--bui-color-primary)',
    info: 'var(--bui-color-info)',
    danger: 'var(--bui-color-danger)',
    success: 'var(--bui-color-success)',
    warning: 'var(--bui-color-warning)',
    disabled: 'var(--bui-color-fg-disabled)',
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
    const parsedSvgColor =
      cssVarToValue({
        cssVar: svgColor,
      }) || svgColor;

    // div背景色模式，组装data:image/svg+xml塞进内联样式
    return (
      <Component
        className={clsx(classes.root, className, {
          [`icon-size-${size}`]: size,
        })}
        style={{
          ...style,
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg viewBox='${viewBox}' xmlns='http://www.w3.org/2000/svg' ${
              parsedSvgColor ? `fill='${parsedSvgColor}'` : ''
            }>${children}</svg>`,
          )}")`,
        }}
        {...rest}
      />
    );
  }
  return null;
}
