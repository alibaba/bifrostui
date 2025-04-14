import { CircleOutlinedIcon, SuccessCircleFilledIcon } from '@bifrostui/icons';
import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import { CheckboxProps } from './Checkbox.types';
import CheckboxContext from './CheckboxContext';
import './index.less';

const prefixCls = 'bui-checkbox';

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    className,
    defaultChecked = false,
    checked,
    inputProps,
    inputRef,
    name,
    value,
    disabled,
    icon,
    checkedIcon,
    labelPlacement = 'right',
    onChange,
    children,
    ...others
  } = props;
  const groupContext = useContext(CheckboxContext);
  let validDefaultChecked = defaultChecked;
  let validChecked = checked;
  // 使用CheckboxGroup
  if (groupContext) {
    validChecked = groupContext?.value?.includes(value);
    validDefaultChecked = groupContext?.defaultValue?.includes(value);
  }

  const [checkboxChecked, triggerChange] = useValue({
    defaultValue: validDefaultChecked,
    value: validChecked,
  });
  if (groupContext && !value) {
    console.error('CheckboxGroup模式下Checkbox须传入value属性');
  }

  const checkboxCheckIcon = checkedIcon || (
    <SuccessCircleFilledIcon color="primary" />
  );
  const checkboxUncheckIcon = icon || <CircleOutlinedIcon color="neutral" />;
  const checkboxDisabled =
    disabled !== undefined ? disabled : groupContext?.disabled;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = !checkboxChecked;
    // Checkbox
    if (!groupContext) {
      triggerChange(e, isChecked);
      onChange?.(e, { checked: isChecked });
      inputProps?.onChange?.(e);
      return;
    }
    // CheckboxGroup
    if (isChecked) {
      groupContext?.select?.(e, value);
    } else {
      groupContext?.unselect?.(e, value);
    }
  };

  return (
    <div
      ref={ref}
      className={clsx(
        prefixCls,
        className,
        `${prefixCls}-label-${labelPlacement}`,
        {
          [`${prefixCls}-disabled`]: checkboxDisabled,
        },
      )}
      {...others}
    >
      <input
        ref={inputRef}
        type="checkbox"
        value={value}
        name={name}
        checked={checkboxChecked}
        disabled={checkboxDisabled}
        {...inputProps}
        onChange={handleChange}
        className={clsx(`${prefixCls}-input`, inputProps?.className)}
      />
      <div className={`${prefixCls}-icon`}>
        {checkboxChecked ? checkboxCheckIcon : checkboxUncheckIcon}
      </div>
      {children && <div className={`${prefixCls}-label`}>{children}</div>}
    </div>
  );
});

Checkbox.displayName = 'BuiCheckbox';

export default Checkbox;
