import React from 'react';
import clsx from 'clsx';
import { useForkRef, useSize } from '@bifrostui/utils';
import { ArrowBackwardLargeIcon } from '@bifrostui/icons';
import { NavBarProps } from './NavBar.types';
import './index.less';

const prefixCls = 'bui-navbar';

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
  const {
    className,
    title,
    left,
    leftIcon,
    IconProps,
    right,
    fixed,
    placeholder,
    onClickLeft,
    ...otherProps
  } = props;

  // 计算内容区域高度，用来形成占位区域
  const containerRef = React.useRef(null);
  const handleForkRef = useForkRef(ref, containerRef);
  const { height } = useSize(containerRef);

  // 渲染左侧内容
  const renderLeft = () => {
    let icon: React.ReactNode;
    if (leftIcon === false) {
      icon = null;
    } else {
      icon = leftIcon ?? (
        <ArrowBackwardLargeIcon
          className={clsx(`${prefixCls}-icon`)}
          {...IconProps}
        />
      );
    }

    return (
      <div className={`${prefixCls}-left`} onClick={onClickLeft}>
        {icon}
        {left}
      </div>
    );
  };

  // 渲染右侧内容
  const renderRight = () => {
    return <div className={`${prefixCls}-right`}>{right}</div>;
  };

  // 渲染导航栏
  const renderNavBar = () => {
    return (
      <div
        ref={handleForkRef}
        className={clsx(className, prefixCls, {
          [`${prefixCls}-fixed`]: fixed,
        })}
        {...otherProps}
      >
        {renderLeft()}
        <div className={clsx(`${prefixCls}-title`, 'ellipsis')}>{title}</div>
        {renderRight()}
      </div>
    );
  };

  // 渲染占位块
  const renderPlaceholder = () => {
    if (fixed && placeholder) {
      return (
        <div
          className={`${prefixCls}-placeholder`}
          style={{ height: height ?? 0 }}
        />
      );
    }
    return null;
  };

  return (
    <>
      {/* 内容区域 */}
      {renderNavBar()}
      {/* 占位区域 */}
      {renderPlaceholder()}
    </>
  );
});

NavBar.displayName = 'BuiNavBar';
export default NavBar;
