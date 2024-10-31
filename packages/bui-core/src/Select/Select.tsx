import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import Fade from '../Fade';
import Slide from '../Slide';
import { SelectProps } from './Select.types';
import BuiSelectContext from './selectContext';
import Backdrop from '../Backdrop';
import './Select.less';
import { useTheme } from '../ThemeProvider';

const prefixCls = 'bui-select';

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    className,
    children,
    name,
    inputRef,
    inputProps,
    BackdropProps,
    value,
    defaultValue,
    disabled,
    placeholder,
    icon,
    open,
    onChange,
    onClose,
    onOpen,
    onClick,
    ...others
  } = props;

  const { locale } = useTheme();
  const [selectValue, selectValueChange] = useValue({
    value,
    defaultValue,
    onChange,
  });

  // 是否展开下拉框
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 根选择器展示的内容
  const [renderValue, setRenderValue] = useState<string>('');

  const defaultIcon = isOpen ? (
    <CaretUpIcon className={`${prefixCls}-selector-icon`} htmlColor="#9c9ca5" />
  ) : (
    <CaretDownIcon
      className={`${prefixCls}-selector-icon`}
      htmlColor="#9c9ca5"
    />
  );

  // 点击根选择器的回调
  const handleSelectClick = (e) => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (typeof onClick === 'function') onClick(e);
  };

  // 点击某个选项的回调
  const handleOptionClick = (e, optionValue, label) => {
    if (!value) {
      setRenderValue(label);
      selectValueChange(e, optionValue);
    } else {
      onChange?.(e, { value: optionValue });
    }
    setIsOpen(false);
  };

  const handleBackdropTouchStart = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const selectContext = useMemo(
    () => ({ selectValue, setRenderValue, handleOptionClick }),
    [selectValue],
  );

  // 监听外部open的改变
  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  // 折叠/展开时的处理
  useEffect(() => {
    // 非function情况，直接调用会报错
    if (isOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen]);

  return (
    <BuiSelectContext.Provider value={selectContext}>
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-active`]: isOpen,
        })}
        ref={ref}
        {...others}
        onClick={handleSelectClick}
      >
        <div className={`${prefixCls}-selector-container`}>
          <div className={`${prefixCls}-selector`}>
            {renderValue || placeholder || locale?.select}
          </div>
          <input
            name={name}
            readOnly
            ref={inputRef}
            value={selectValue}
            {...inputProps}
            className={clsx(`${prefixCls}-input`, {
              [inputProps?.className]: inputProps?.className,
            })}
          />
          {icon || defaultIcon}
        </div>
        {/* 选项下拉框 */}
        <Fade
          in={isOpen}
          timeout={{
            enter: 150,
            exit: 150,
          }}
        >
          <div className={clsx(`${prefixCls}-option-container`)}>
            <Slide
              in={isOpen}
              timeout={{
                enter: 150,
                exit: 150,
              }}
            >
              <div className={clsx(`${prefixCls}-option-main`)}>{children}</div>
            </Slide>
          </div>
        </Fade>
      </div>
      <Backdrop
        open={isOpen}
        invisible
        // onTouchStart 解决需滑动两次透明蒙层才会消失
        onTouchStart={handleBackdropTouchStart}
        onClick={handleBackdropTouchStart}
        {...BackdropProps}
        className={clsx(`${prefixCls}-backdrop`, {
          [BackdropProps?.className]: BackdropProps?.className,
        })}
      />
    </BuiSelectContext.Provider>
  );
});

Select.displayName = 'BuiSelect';
Select.defaultProps = {
  defaultValue: '',
};

export default Select;
