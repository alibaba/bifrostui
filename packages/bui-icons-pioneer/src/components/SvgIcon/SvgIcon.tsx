/* eslint-disable no-console */
import clsx from 'clsx';
import * as React from 'react';
import { cssVarToValue } from '@bifrostui/utils';
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
    const parsedSvgColor =
      cssVarToValue({
        cssVar: svgColor,
      }) || svgColor;

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

export default React.forwardRef(SvgIcon);
