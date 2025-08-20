import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { SwitchProps } from './Switch.types';
import './index.less';

const prefixCls = 'bui-switch';

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      className,
      checked = false,
      defaultChecked = false,
      inputProps,
      inputRef,
      name,
      checkedChildren,
      unCheckedChildren,
      disabled = false,
      size = 'medium',
      color = 'primary',
      onChange,
      ...others
    },
    ref,
  ) => {
    const [switchChecked, triggerChange] = useValue({
      value: checked,
      defaultValue: !!defaultChecked,
    });

    const changeAction = (e, isChecked: boolean) => {
      // 同时支持defaultChecked和checked
      triggerChange(e, isChecked);
      onChange?.(e, { checked: isChecked });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = !switchChecked;
      changeAction(e, isChecked);
      inputProps?.onChange?.(e);
    };

    return (
      <div
        ref={ref}
        className={clsx(
          `${prefixCls}`,
          `${prefixCls}-${size}`,
          `${prefixCls}-${color}`,
          {
            [`${prefixCls}-checked`]: switchChecked,
            [`${prefixCls}-disabled`]: disabled,
          },
          className,
        )}
        {...others}
      >
        <input
          ref={inputRef}
          type="checkbox"
          name={name}
          checked={switchChecked}
          disabled={disabled}
          {...inputProps}
          onChange={handleChange}
          className={clsx(`${prefixCls}-input`, inputProps?.className)}
        />
        {(checkedChildren || unCheckedChildren) && (
          <span className={`${prefixCls}-inner`}>
            {switchChecked ? checkedChildren : unCheckedChildren}
          </span>
        )}
      </div>
    );
  },
);

Switch.displayName = 'BuiSwitch';

export default Switch;
