import { convertHexToRGBA } from '@bifrostui/utils';
import clsx from 'clsx';
import React from 'react';
import { TagProps } from './Tag.types';
import './Tag.less';

// 只支持 rgba rgb hex
// 处理rgb格式的颜色
const colorHandler = (color: string, opacity = 1) => {
  // rgba
  if (color.includes('rgba')) {
    const lastCommaIndex = color.lastIndexOf(',');
    return `${color.slice(0, lastCommaIndex)}, ${opacity})`;
  }

  // rgb
  if (color.includes('rgb')) {
    color = color.replace('rgb', 'rgba');
    const len = color.length;
    return `${color.slice(0, len - 1)}, ${opacity})`;
  }

  // hex
  return convertHexToRGBA(color, opacity);
};

const prefixCls = 'bui-tag';

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    className,
    style,
    color = 'neutral',
    htmlColor,
    variant = 'outlined',
    onClick,
    children,
    ...others
  } = props;

  let customStyles;
  if (htmlColor) {
    if (variant === 'outlined') {
      customStyles = {
        color: htmlColor,
        borderColor: colorHandler(htmlColor, 0.4),
      };
    } else if (variant === 'subtle') {
      customStyles = {
        color: htmlColor,
        backgroundColor: colorHandler(htmlColor, 0.3),
      };
    } else {
      customStyles = {
        backgroundColor: htmlColor,
      };
    }
  }

  return (
    <div
      className={clsx(
        prefixCls,
        {
          [`${prefixCls}-${variant}`]: variant,
          [`${prefixCls}-${color}`]: color,
        },
        className,
      )}
      ref={ref}
      style={{ ...style, ...customStyles }}
      onClick={onClick}
      {...others}
    >
      {children}
    </div>
  );
});

Tag.displayName = 'BuiTag';

export default Tag;
