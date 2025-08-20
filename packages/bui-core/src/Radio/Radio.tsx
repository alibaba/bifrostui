import { isAlipay, useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import { RadioProps } from './Radio.types';
import RadioButtonIcon from './RadioButtonIcon';
import RadioContext from './RadioContext';
import './index.less';

const prefixCls = 'bui-radio';

const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    className,
    defaultChecked = false,
    checked = false,
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
  const groupContext = useContext(RadioContext);
  let validDefaultChecked = defaultChecked;
  let validChecked = checked;
  // 使用RadioGroup
  if (groupContext) {
    const groupControlled = groupContext?.value !== undefined;
    if (groupControlled) {
      validChecked = groupContext?.value === value;
    } else {
      validDefaultChecked = groupContext?.defaultValue === value;
    }
  }

  const [radioChecked, triggerChange] = useValue({
    defaultValue: validDefaultChecked,
    value: validChecked,
  });
  if (groupContext && !value) {
    // eslint-disable-next-line no-console
    console.error('RadioGroup模式下Radio须传入value属性');
  }

  const radioCheckIcon = checkedIcon || <RadioButtonIcon checked />;
  const radioUncheckIcon = icon || <RadioButtonIcon checked={false} />;
  const radioDisabled =
    disabled !== undefined ? disabled : groupContext?.disabled || false;

  const changeAction = (e, isChecked: boolean) => {
    // Radio
    if (!groupContext) {
      triggerChange(e, isChecked);
      onChange?.(e, { checked: isChecked });
      return;
    }

    // RadioGroup
    if (isChecked) {
      groupContext?.select?.(e, value);
    }
  };

  /**
   * 支付宝小程序label标签与radio配合使用时，无法响应onChange、onClick事件
   * 支付宝小程序改为div标签，并通过div标签上的onClick事件触发onChange
   * 微信小程序/H5使用input onChange
   */
  const handleChange = (e) => {
    if (radioChecked) return;
    changeAction(e, true);
    inputProps?.onChange?.(e);
  };

  return (
    <div
      ref={ref}
      className={clsx(
        prefixCls,
        className,
        `${prefixCls}-label-${labelPlacement}`,
        {
          [`${prefixCls}-disabled`]: radioDisabled,
        },
      )}
      {...others}
      onClick={(e) => {
        // radio disabled 会触发onClick事件
        others?.onClick?.(e);

        if (radioDisabled) return;
        if (isAlipay) {
          handleChange(e);
        }
      }}
    >
      <input
        ref={inputRef}
        type="radio"
        value={value}
        name={name}
        checked={radioChecked}
        disabled={radioDisabled}
        {...inputProps}
        onChange={handleChange}
        className={clsx(`${prefixCls}-input`, inputProps?.className)}
      />
      <div className={`${prefixCls}-icon`}>
        {radioChecked ? radioCheckIcon : radioUncheckIcon}
      </div>
      {children && <div className={`${prefixCls}-label`}>{children}</div>}
    </div>
  );
});

Radio.displayName = 'BuiRadio';

export default Radio;
