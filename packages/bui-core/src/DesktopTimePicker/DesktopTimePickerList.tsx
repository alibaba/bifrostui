import React, { useEffect, useRef, useState } from 'react';
import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';

import { ScrollView } from '../ScrollView';
import handleScroll from './utils/scrollUtil';

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
    renderItem,
  } = props;

  const ulRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (!ulRef.current) return;
    const elementName = `.${prefixCls}-table-${type}-ul-li-active`;

    if (!isMini) {
      handleScroll(elementName, setScrollTop);
    } else {
      const index = dataList.findIndex((item) => item.value === selectedValue);
      if (index === -1) return;
      handleScroll(elementName, setScrollTop, index);
    }
  }, [timeValue]);

  return (
    <ScrollView
      scrollY
      scrollWithAnimation
      className={clsx(`${prefixCls}-table-${type}-ul`)}
      key={type}
      scrollTop={scrollTop}
      scrollAnimationDuration={200}
      ref={ulRef}
    >
      {dataList.map((item, index) => {
        const { value, label } = item;
        const disabled = disabledTime?.includes(value);

        return (
          renderItem?.(item) || (
            <div
              key={index}
              className={clsx(`${prefixCls}-table-${type}-ul-li`, {
                [`${prefixCls}-table-${type}-ul-li-active`]:
                  value === selectedValue,
                [`${prefixCls}-table-${type}-ul-li-disabled`]: disabled,
              })}
              onClick={(e) => {
                handleClick(e, disabled, item);
              }}
            >
              {label}
            </div>
          )
        );
      })}
    </ScrollView>
  );
});

DesktopTimePickerList.displayName = 'BuiDesktopTimePickerList';

export default DesktopTimePickerList;
