import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import {
  getStylesAndLocation,
  throttle,
  useUniqueId,
  useValue,
} from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Fade from '../Fade';
import Slide from '../Slide';
import { SelectProps } from './Select.types';
import BuiSelectContext from './selectContext';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import './Select.less';

const prefixCls = 'bui-select';
const defaultPlacement = 'bottom';

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
    scrollContainer,
    onChange,
    onClose,
    onOpen,
    onClick,
    ...others
  } = props;

  const [selectValue, selectValueChange] = useValue({
    value,
    defaultValue,
    onChange,
  });

  // 是否展开下拉框
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // 根选择器展示的内容
  const [renderValue, setRenderValue] = useState<string>('');
  const [placement, setPlacement] = useState<string>(defaultPlacement);
  const [optionStyle, setOptionStyle] = useState({});
  const locatorRef = useRef(null);
  const ttId = useUniqueId();
  const dataId = `${prefixCls}-tt-${ttId}`;
  const scrollRoot = scrollContainer();

  const updateOptionStyle = throttle(() => {
    const result = getStylesAndLocation({
      scrollRoot,
      childrenRef: locatorRef,
      arrowDirection: defaultPlacement,
      arrowLocation: 'left',
      selector: `[data-id="${dataId}"]`,
      offsetSpacing: 6,
    });
    if (!result) return;
    const { styles, childrenStyle, newArrowDirection } = result;
    if (newArrowDirection !== placement) {
      setPlacement(newArrowDirection);
    }
    setOptionStyle({ ...styles, width: childrenStyle.width });
  }, 100);

  // 点击根选择器的回调
  const handleSelectClick = (e) => {
    if (disabled) return;
    updateOptionStyle();
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

  const handleBackdropClick = () => {
    setIsOpen(false);
  };

  const selectContext = useMemo(
    () => ({ selectValue, setRenderValue, handleOptionClick }),
    [selectValue, onChange, setRenderValue],
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

  const defaultIcon = isOpen ? (
    <CaretUpIcon className={`${prefixCls}-selector-icon`} htmlColor="#9c9ca5" />
  ) : (
    <CaretDownIcon
      className={`${prefixCls}-selector-icon`}
      htmlColor="#9c9ca5"
    />
  );

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
        <div className={`${prefixCls}-selector-container`} ref={locatorRef}>
          <div className={`${prefixCls}-selector`}>
            {renderValue || placeholder}
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
      </div>
      <Portal onRootElementMouted={updateOptionStyle}>
        {/* 选项下拉框 */}
        <Fade
          in={isOpen}
          timeout={{
            enter: 150,
            exit: 150,
          }}
        >
          <div
            className={clsx(`${prefixCls}-option-container`, {
              [`${prefixCls}-option-container-hide`]: !isOpen,
            })}
            data-id={dataId}
            style={optionStyle}
          >
            <Slide
              in={isOpen}
              direction={placement === 'bottom' ? 'down' : 'up'}
              timeout={{
                enter: 150,
                exit: 150,
              }}
            >
              <div className={clsx(`${prefixCls}-option-main`)}>{children}</div>
            </Slide>
          </div>
        </Fade>
      </Portal>
      <Portal>
        <Backdrop
          open={isOpen}
          invisible
          // onTouchStart 解决滑动后仍需点击关闭蒙层，才能点击其它区域的问题
          onTouchStart={handleBackdropClick}
          onClick={handleBackdropClick}
          {...BackdropProps}
          className={clsx(`${prefixCls}-backdrop`, {
            [BackdropProps?.className]: BackdropProps?.className,
          })}
        />
      </Portal>
    </BuiSelectContext.Provider>
  );
});

Select.displayName = 'BuiSelect';
Select.defaultProps = {
  defaultValue: '',
  scrollContainer: () => document.body,
};

export default Select;
