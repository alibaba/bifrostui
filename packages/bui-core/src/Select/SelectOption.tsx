import clsx from 'clsx';
import React, { SetStateAction, useContext, useEffect } from 'react';
import { SelectOptionProps } from './Select.types';
import BuiSelectContext from './selectContext';

import './Select.less';

const prefixCls = 'bui-select-option';

const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>(
  (props, ref) => {
    const { value, label, disabled, className, children, ...others } = props;

    const { selectValue, setRenderValue, handleOptionClick } =
      useContext(BuiSelectContext);

    // 自定义label值+defaultValue初始化时，传递自定义label值到select
    useEffect(() => {
      if (value === selectValue) {
        setRenderValue(label as SetStateAction<string>);
      }
      return () => {
        setRenderValue('');
      };
    }, [selectValue, label, value]);

    return (
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-active`]: !disabled && value === selectValue,
          [`${prefixCls}-disabled`]: disabled,
        })}
        ref={ref}
        {...others}
        onClick={(e) => {
          // 传递当前选中选项的value、label
          handleOptionClick(e, value, label, disabled);
        }}
      >
        {children || label}
      </div>
    );
  },
);

SelectOption.displayName = 'BuiSelectOption';

export default SelectOption;
