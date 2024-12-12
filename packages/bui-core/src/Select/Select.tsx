import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import { useValue, useDelaySetState } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Fade from '../Fade';
import Slide from '../Slide';
import { SelectProps } from './Select.types';
import BuiSelectContext from './selectContext';
import './Select.less';

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
  const isOpen = open !== undefined ? open : internalOpen;
  const internalInputRef = useRef<HTMLInputElement>(null);
  const inputEleRef = inputRef || internalInputRef;
  const isFocusRef = useRef<boolean>(false);

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
    inputEleRef.current?.blur();
    isFocusRef.current = false;
  };

  const changeOpen = (newOpen: boolean) => {
    delaySetInternalOpen(newOpen, () => {
      if (newOpen) {
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
    if (!isFocusRef.current) {
      changeOpen(true);
    }
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
  };

  const handleInputFocus = (e) => {
    inputProps?.onFocus?.(e);
  };

  const handleInputBlur = (e) => {
    changeOpen(false);
    inputProps?.onBlur?.(e);
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
        onFocus={(e) => {
          handleInputFocus(e);
        }}
        onBlur={(e) => {
          handleInputBlur(e);
        }}
      >
        <div className={`${prefixCls}-selector-container`}>
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
    </BuiSelectContext.Provider>
  );
});

Select.displayName = 'BuiSelect';
Select.defaultProps = {
  defaultValue: '',
};

export default Select;
