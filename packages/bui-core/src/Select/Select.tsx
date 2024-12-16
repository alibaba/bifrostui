import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import {
  useValue,
  useDelaySetState,
  throttle,
  getStylesAndLocation,
  useUniqueId,
} from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Fade from '../Fade';
import Slide from '../Slide';
import Portal from '../Portal';
import { SelectProps } from './Select.types';
import BuiSelectContext from './selectContext';
import './Select.less';

enum SELECT_PLACEMENT {
  BOTTOM = 'bottom',
  TOP = 'top',
}
const defaultPlacement = SELECT_PLACEMENT.BOTTOM;
const prefixCls = 'bui-select';

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    className,
    children,
    name,
    inputRef,
    inputProps,
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

  const [selectValue, selectValueChange] = useValue({
    value,
    defaultValue,
    onChange,
  });

  // 是否展开下拉框
  const [internalOpen, delaySetInternalOpen, cancelDelaySetInternalOpen] =
    useDelaySetState<boolean>(false);
  // 根选择器展示的内容
  const [renderValue, setRenderValue] = useState<string>('');
  const [placement, setPlacement] =
    useState<SELECT_PLACEMENT>(defaultPlacement);
  const [optionStyle, setOptionStyle] = useState({});
  const isOpen = open !== undefined ? open : internalOpen;
  const internalInputRef = useRef<HTMLInputElement>(null);
  const inputEleRef = inputRef || internalInputRef;
  const isFocusRef = useRef<boolean>(false);
  const locatorRef = useRef(null);
  const ttId = useUniqueId();
  const dataId = `${prefixCls}-tt-${ttId}`;

  const defaultIcon = isOpen ? (
    <CaretUpIcon className={`${prefixCls}-selector-icon`} htmlColor="#9c9ca5" />
  ) : (
    <CaretDownIcon
      className={`${prefixCls}-selector-icon`}
      htmlColor="#9c9ca5"
    />
  );

  const inputFocus = () => {
    inputEleRef.current?.focus();
    isFocusRef.current = true;
  };

  const inputBlur = () => {
    isFocusRef.current = false;
  };

  const updateOptionStyle = throttle(() => {
    const result = getStylesAndLocation({
      childrenRef: locatorRef,
      arrowDirection: placement,
      arrowLocation: 'left',
      initArrowDirection: defaultPlacement,
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

  const changeOpen = (newOpen: boolean) => {
    delaySetInternalOpen(newOpen, () => {
      if (newOpen) {
        updateOptionStyle();
        inputFocus();
        onOpen?.();
      } else {
        inputBlur();
        onClose?.();
      }
    });
  };

  // 点击根选择器的回调
  const handleSelectClick = (e) => {
    if (disabled) return;
    changeOpen(!isOpen);
    onClick?.(e);
  };

  // 点击某个选项的回调
  const handleOptionClick = (e, optionValue, label, optionDisabled) => {
    if (optionDisabled) {
      // 禁用的选项取消收起选择框
      cancelDelaySetInternalOpen();
      // 重新聚集，否则后续无法收起选择框
      inputFocus();
      return;
    }
    if (!value) {
      setRenderValue(label);
      selectValueChange(e, optionValue);
    } else {
      onChange?.(e, { value: optionValue });
    }
    changeOpen(false);
  };

  const handleFocus = (e) => {
    inputProps?.onFocus?.(e);
  };

  const handleBlur = (e) => {
    changeOpen(false);
    inputProps?.onBlur?.(e);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    props.onMouseDown?.(e);
  };

  const selectContextValue = useMemo(
    () => ({ selectValue, setRenderValue, handleOptionClick }),
    [selectValue, onChange, setRenderValue],
  );

  useEffect(() => {
    if (open) {
      inputFocus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateOptionStyle);
    return () => {
      window.removeEventListener('resize', updateOptionStyle);
    };
  }, []);

  return (
    <BuiSelectContext.Provider value={selectContextValue}>
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-active`]: isOpen,
        })}
        ref={ref}
        {...others}
        onClick={handleSelectClick}
        onMouseDown={handleMouseDown}
      >
        <div className={`${prefixCls}-selector-container`} ref={locatorRef}>
          <div className={`${prefixCls}-selector`}>
            {renderValue || placeholder}
          </div>
          <input
            name={name}
            readOnly
            ref={inputEleRef}
            value={selectValue}
            tabIndex={-1}
            {...inputProps}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={clsx(`${prefixCls}-input`, {
              [inputProps?.className]: inputProps?.className,
            })}
          />
          {icon || defaultIcon}
        </div>
      </div>
      {/* 选项下拉框 */}
      <Portal onRootElementMouted={updateOptionStyle}>
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
              direction={placement === SELECT_PLACEMENT.BOTTOM ? 'down' : 'up'}
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
    </BuiSelectContext.Provider>
  );
});

Select.displayName = 'BuiSelect';
Select.defaultProps = {
  defaultValue: '',
};

export default Select;
