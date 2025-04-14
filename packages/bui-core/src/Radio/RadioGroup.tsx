import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { RadioGroupProps } from './Radio.types';
import { RadioContextProvider } from './RadioContext';
import './index.less';

const prefixCls = 'bui-radio-group';

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    className,
    defaultValue,
    value,
    onChange,
    disabled,
    children,
    ...others
  } = props;
  const [groupValue, triggerChange] = useValue({
    defaultValue,
    value,
    onChange,
  });

  const select = (e: React.SyntheticEvent, v: string) => {
    triggerChange(e, v);
  };

  return (
    <RadioContextProvider
      value={{
        defaultValue,
        value: groupValue,
        select,
        disabled,
      }}
    >
      <div ref={ref} className={clsx(prefixCls, className)} {...others}>
        {children}
      </div>
    </RadioContextProvider>
  );
});

RadioGroup.displayName = 'BuiRadioGroup';

export default RadioGroup;
