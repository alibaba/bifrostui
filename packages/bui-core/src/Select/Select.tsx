import { CaretDownIcon, CaretUpIcon } from '@bifrostui/icons';
import {
  getStylesAndLocation,
  isMini,
  throttle,
  useForkRef,
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
import './index.less';

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
    defaultValue = '',
    disabled,
    placeholder,
    icon,
    open,
    scrollContainer = () => {
      return isMini ? null : document.body;
    },
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
  const optionContainerRef = useRef(null);
  const optionMainRef = useRef(null);

  const updateOptionStyle = async () => {
    const curScrollRoot = scrollContainer();
    const result = await getStylesAndLocation({
      scrollRoot: curScrollRoot,
      childrenRef: locatorRef,
      tipRef: optionContainerRef,
      arrowDirection: defaultPlacement,
      arrowLocation: 'none',
      offsetSpacing: 0,
    });
    if (!result) return;
    const { styles, childrenStyle, newArrowDirection } = result;
    optionMainRef.current.style.transition = 'none';
    optionMainRef.current.style.transform = `translateY(${newArrowDirection === 'bottom' ? '-100%' : '100%'})`;
    setPlacement(newArrowDirection);
    setOptionStyle({ ...styles, width: childrenStyle?.width });
  };

  const changeOpen = async (newOpen: boolean) => {
    if (newOpen) {
      await updateOptionStyle();
      // 第一次超出边界变化方向时，Slide的动画方向更新时序问题
      setInternalOpen(newOpen);
      onOpen?.();
    } else {
      onClose?.();
      setInternalOpen(newOpen);
    }
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
    const resizeCb = throttle(updateOptionStyle, 100);
    if (!isMini) {
      window.addEventListener('resize', resizeCb);
      return () => {
        window.removeEventListener('resize', resizeCb);
      };
    }
  }, []);

  const defaultIcon = isOpen ? (
    <CaretUpIcon className={`${prefixCls}-selector-icon`} color="neutral" />
  ) : (
    <CaretDownIcon className={`${prefixCls}-selector-icon`} color="neutral" />
  );

  const renderOptions = () => {
    return (
      <Fade
        in={isOpen}
        timeout={{
          enter: 167,
          exit: 167,
        }}
      >
        <div
          className={clsx(
            `${prefixCls}-option-container`,
            ...(className
              ?.split(/\s+/)
              ?.map((cls) => `${cls}-option-container`) || []),
            `${prefixCls}-option-container-${placement}`,
            {
              [`${prefixCls}-option-container-hide`]: !isOpen,
            },
          )}
          ref={optionContainerRef}
          style={optionStyle}
        >
          <Slide
            in={isOpen}
            direction={placement === 'bottom' ? 'down' : 'up'}
            timeout={{
              enter: 167,
              exit: 167,
            }}
          >
            <div
              className={clsx(`${prefixCls}-option-main`)}
              ref={optionMainRef}
            >
              {children}
            </div>
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
      </div>
      <Portal onRootElementMouted={updateOptionStyle}>{renderOptions()}</Portal>
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

export default Select;
