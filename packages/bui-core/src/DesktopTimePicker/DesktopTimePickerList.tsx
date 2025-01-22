import React, { useEffect } from 'react';
import clsx from 'clsx';

import { DesktopTimePickerListProps } from './DesktopTimePicker.types';

const DesktopTimePickerList = React.forwardRef<
  HTMLDivElement,
  DesktopTimePickerListProps
>((props, ref) => {
  const {
    timeValue,
    type,
    dataList,
    disabledTime,
    selectedValue,
    prefixCls,
    handleClick,
    handleScrollToSelected,
  } = props;

  useEffect(() => {
    const ulElement = document.querySelector(`.${prefixCls}-table-${type}-ul`);
    const selectedLi = document.querySelector(
      `.${prefixCls}-table-${type}-ul-li-active`,
    );

    if (!selectedLi) return;
    handleScrollToSelected(ulElement, selectedLi);
  }, [timeValue]);

  return dataList.map((item, index) => {
    const { value, label } = item;
    const disabled = disabledTime?.includes(value);

    return (
      <li
        key={index}
        className={clsx(`${prefixCls}-table-${type}-ul-li`, {
          [`${prefixCls}-table-${type}-ul-li-active`]: value === selectedValue,
          [`${prefixCls}-table-${type}-ul-li-disabled`]: disabled,
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
