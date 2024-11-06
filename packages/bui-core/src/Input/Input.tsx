import { ErrorCircleFilledIcon } from '@bifrostui/icons';
import { isMini, useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';
import { InputProps } from './index';
import './Input.less';
import { useTheme } from '../ThemeProvider';

const prefixCls = 'bui-input';

const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    className,
    defaultValue,
    value,
    inputProps,
    inputRef,
    name,
    type,
    clearable,
    startIcon,
    endIcon,
    placeholder,
    disabled,
    onClear,
    onChange,
    onFocus,
    onBlur,
    ...others
  } = props;

  const { locale } = useTheme();
  const [inputValue, triggerChange] = useValue({
    value,
    defaultValue,
    onChange,
  });
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = (e) => {
    setHasFocus(true);
    onFocus?.(e);
    inputProps?.onFocus?.(e);
  };

  const handleBlur = (e) => {
    // 解决H5/小程序清除按钮先失焦隐藏不到的问题
    setTimeout(() => {
      setHasFocus(false);
    }, 200);
    onBlur?.(e);
    inputProps?.onBlur?.(e);
  };

  const handleChange = (e) => {
    // 小程序中input有onChange事件，其他类型一般只有onInput事件
    if (isMini) return;
    triggerChange(e, e.target.value);
    inputProps?.onChange?.(e);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 小程序中input实际有onChange事件，但文档没有标明，故统一通过onInput模拟
    if (isMini) {
      triggerChange(e, e.target.value);
    }
    inputProps?.onInput?.(e);
  };

  const handleClear = (e) => {
    triggerChange(e, '');
    onClear?.(e);
  };

  let nativeProps: Record<string, any> = {};
  if (isMini) {
    nativeProps = {
      placeholderClass: 'bui-mini-placeholder',
    };
  }

  return (
    <div
      ref={ref}
      className={clsx(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
      })}
      {...others}
    >
      {/* 开始图标 */}
      {startIcon && (
        <div className={`${prefixCls}-icon ${prefixCls}-icon-start`}>
          {startIcon}
        </div>
      )}

      {/* 输入框 */}
      <input
        {...nativeProps}
        name={name}
        type={type}
        ref={inputRef}
        value={inputValue}
        disabled={disabled}
        placeholder={placeholder || locale?.input.placeholder}
        {...inputProps}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleInput}
        className={clsx(`${prefixCls}-input`, inputProps?.className)}
      />

      {/* 清除按钮 */}
      {clearable && !!inputValue && hasFocus && (
        <div className={`${prefixCls}-clear`} onClick={handleClear}>
          <ErrorCircleFilledIcon htmlColor="#959aa5" />
        </div>
      )}

      {/* 结束图标 */}
      {endIcon && (
        <div className={`${prefixCls}-icon ${prefixCls}-icon-end`}>
          {endIcon}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'BuiInput';
Input.defaultProps = {
  defaultValue: '',
  type: 'text',
  clearable: false,
  disabled: false,
};

export default Input;
