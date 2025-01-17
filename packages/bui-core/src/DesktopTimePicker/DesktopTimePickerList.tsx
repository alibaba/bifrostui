import React, { useEffect } from 'react';
import clsx from 'clsx';

import { DesktopTimePickerListProps } from './DesktopTimePicker.types';

const DesktopTimePickerList = React.forwardRef<
  HTMLDivElement,
  DesktopTimePickerListProps
>((props, ref) => {
  const {
    type,
    dataList,
    disabledTime,
    selectedValue,
    prefixCls,
    handleClick,
    handleScrollToSelected,
  } = props;

  useEffect(() => {
    const ulElement = document.querySelector(`.${prefixCls}-table-ul-${type}`);
    const selectedLi = document.querySelector(
      `.${prefixCls}-table-ul-${type}-li-active`,
    );

    if (!selectedLi) return;
    handleScrollToSelected(ulElement, selectedLi);
  }, []);

  return dataList.map((item, index) => {
    const { value, label } = item;
    const disabled = disabledTime?.includes(value);

    return (
      <li
        key={index}
        className={clsx(`${prefixCls}-table-ul-${type}-li`, {
          [`${prefixCls}-table-ul-${type}-li-active`]:
            // todo mui
            !disabled && value === selectedValue,
          [`${prefixCls}-table-ul-${type}-li-disabled`]: disabled,
        })}
        onClick={(e) => {
          handleClick(e, disabled, item);
        }}
      >
        {label}
      </li>
    );
  });
});

DesktopTimePickerList.displayName = 'BuiDesktopTimePickerList';

export default DesktopTimePickerList;
