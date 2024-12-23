import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import {
  getStylesAndLocation,
  isMini,
  throttle,
  useForkRef,
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

  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  // 根选择器展示的内容
  const [renderValue, setRenderValue] = useState<string>('');
  const [placement, setPlacement] = useState<string>(defaultPlacement);
  const [optionStyle, setOptionStyle] = useState({});
  const isOpen = open !== undefined ? open : internalOpen;
  const locatorRef = useRef(null);
  const rootRef = useForkRef(ref, locatorRef);
  const ttId = useUniqueId();
  const dataId = `${prefixCls}-tt-${ttId}`;
  const scrollRoot = scrollContainer();

  const updateOptionStyle = throttle(() => {
    const curScrollRoot = scrollContainer();
    if (!isMini && curScrollRoot) {
      const result = getStylesAndLocation({
        scrollRoot: curScrollRoot,
        childrenRef: locatorRef,
        arrowDirection: defaultPlacement,
        arrowLocation: 'none',
        selector: `[data-id="${dataId}"]`,
        offsetSpacing: 0,
      });
      if (!result) return;
      const { styles, childrenStyle, newArrowDirection } = result;
      setPlacement(newArrowDirection);
      setOptionStyle({ ...styles, width: childrenStyle.width });
    }
  }, 100);

  const changeOpen = (newOpen: boolean) => {
    if (newOpen) {
      updateOptionStyle();
      onOpen?.();
    } else {
      onClose?.();
    }
    setInternalOpen(newOpen);
  };

  // 点击根选择器的回调
  const handleSelectClick = (e) => {
    if (disabled) return;
    changeOpen(!isOpen);
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
    changeOpen(false);
  };

  const handleBackdropClick = () => {
    changeOpen(false);
  };

  const selectContext = useMemo(
    () => ({ selectValue, setRenderValue, handleOptionClick }),
    [selectValue, onChange, setRenderValue],
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isMini) {
      window.addEventListener('resize', updateOptionStyle);
      return () => {
        window.removeEventListener('resize', updateOptionStyle);
      };
    }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isMini && scrollRoot) {
      const scrollEle = scrollRoot === document.body ? document : scrollRoot;
      scrollEle.addEventListener('scrollend', updateOptionStyle);
      return () => {
        scrollEle.removeEventListener('scrollend', updateOptionStyle);
      };
    }
  }, [scrollRoot]);

  const defaultIcon = isOpen ? (
    <CaretUpIcon className={`${prefixCls}-selector-icon`} htmlColor="#9c9ca5" />
  ) : (
    <CaretDownIcon
      className={`${prefixCls}-selector-icon`}
      htmlColor="#9c9ca5"
    />
  );

  const renderOptions = () => {
    return (
      <Fade
        in={isOpen}
        timeout={{
          enter: 150,
          exit: 150,
        }}
      >
        <div
          className={clsx(
            `${prefixCls}-option-container`,
            ...(className
              ?.split(/\s+/)
              ?.map((cls) => `${prefixCls}-option-container-${cls}`) || []),
            `${prefixCls}-option-container-${placement}`,
            {
              [`${prefixCls}-option-container-hide`]: !isOpen,
            },
          )}
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
    );
  };

  return (
    <BuiSelectContext.Provider value={selectContext}>
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-active`]: isOpen,
        })}
        ref={rootRef}
        {...others}
        onClick={handleSelectClick}
      >
        <div className={`${prefixCls}-selector-container`}>
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
        {isMini && renderOptions()}
      </div>
      {!isMini && (
        <Portal onRootElementMouted={updateOptionStyle}>
          {renderOptions()}
        </Portal>
      )}
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
    </BuiSelectContext.Provider>
  );
});

Select.displayName = 'BuiSelect';
Select.defaultProps = {
  defaultValue: '',
  scrollContainer: () => {
    return isMini ? null : document.body;
  },
};

export default Select;
