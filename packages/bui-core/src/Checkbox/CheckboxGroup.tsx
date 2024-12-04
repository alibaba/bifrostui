import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { CheckboxGroupProps } from './Checkbox.types';
import { CheckboxContextProvider } from './CheckboxContext';
import './Checkbox.less';

const prefixCls = 'bui-checkbox-group';

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
    const {
      className,
      children,
      defaultValue,
      value,
      disabled,
      onChange,
      ...others
    } = props;
    const [groupValue, triggerChange] = useValue({
      defaultValue,
      value,
      onChange,
    });

    const select = (e: React.SyntheticEvent, v: string) => {
      const values = [...groupValue, v];
      triggerChange(e, values);
    };

    const unselect = (e: React.SyntheticEvent, v: string) => {
      const values = groupValue.filter((item) => item !== v);
      triggerChange(e, values);
    };

    return (
      <CheckboxContextProvider
        value={{
          defaultValue,
          value: groupValue,
          select,
          unselect,
          disabled,
        }}
      >
        <div ref={ref} className={clsx(prefixCls, className)} {...others}>
          {children}
        </div>
      </CheckboxContextProvider>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.defaultProps = {
  disabled: false,
};

export default CheckboxGroup;
