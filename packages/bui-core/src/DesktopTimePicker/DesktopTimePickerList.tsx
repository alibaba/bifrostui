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
    selectedValue,
    prefixCls,
    handleClick,
    timeRender,
  } = props;

  const ulRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (!ulRef.current) return;
    const elementName = `.${prefixCls}-${type}-active`;
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
      className={clsx(`${prefixCls}-${type}-ul`)}
      key={type}
      scrollTop={scrollTop}
      scrollAnimationDuration={300}
      ref={ulRef}
    >
      {dataList.map((item, index) => {
        const { value, label, disabled } = item;

        return (
          <div
            key={index}
            className={clsx(`${prefixCls}-${type}-li`, {
              [`${prefixCls}-${type}-active`]: value === selectedValue,
              [`${prefixCls}-${type}-disabled`]: disabled,
            })}
            onClick={(e) => {
              handleClick(e, disabled, item);
            }}
          >
            {timeRender?.({ ...item, disabled }) || label}
          </div>
        );
      })}
    </ScrollView>
  );
});

DesktopTimePickerList.displayName = 'BuiDesktopTimePickerList';

export default DesktopTimePickerList;
