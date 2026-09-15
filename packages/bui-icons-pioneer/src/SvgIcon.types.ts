import * as React from 'react';
import { ThemeColor } from '@bifrostui/types';

export interface ISvgIconProps {
  className?: string;
  /** 预定义的一些icon颜色 */
  color?: ThemeColor | 'disabled';
  /** 应用到SVG元素上的自定义色彩 */
  htmlColor?: string;
  /** 预置的图标大小，也可以通过元素的font-size来设置自定义的图标大小 */
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  /**
   * The viewBox attribute of the SVG tag.
   */
  viewBox?: string;
  /**
   * The classes string append to the component class attribute.
   */
  children?: React.ReactNode;
  /**
   * Element type of the component.
   */
  component?: React.ElementType;
  /**
   * onClick Event
   */
  onClick?: (event) => void;
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#EquivalentAlternatives
   * When titleAccess is provided, aria-hidden will be removed and role="img" will be added.
   */
  titleAccess?: string;
}
