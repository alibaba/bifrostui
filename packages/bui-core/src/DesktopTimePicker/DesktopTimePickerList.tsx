import React, { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
// import useDomReady from '@bifrostui/utils/src/hooks/useDomReady/index';
import { isMini } from '@bifrostui/utils';
import clsx from 'clsx';

import { ScrollView } from '../ScrollView';

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
  } = props;

  const ulRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    if (!ulRef.current) return;
    if (!isMini) {
      const ulElement = document.querySelector(
        `.${prefixCls}-table-${type}-ul`,
      );
      const selectedLi = document.querySelector(
        `.${prefixCls}-table-${type}-ul-li-active`,
      );
      ulElement.scrollTo?.({
        top: (selectedLi as HTMLDivElement).offsetTop,
        behavior: 'smooth',
      });
      // setScrollTop((selectedLi as HTMLDivElement).offsetTop);
    } else {
      const index = dataList.findIndex((item) => item.value === selectedValue);
      if (index === -1) return;
      // 确保在dom渲染完成之后再滚动
      requestAnimationFrame(() => {
        const query = Taro.createSelectorQuery();
        query.select(`.${prefixCls}-table-${type}-ul-li`)?.boundingClientRect();
        query.exec((res) => {
          if (!res[0]) return;
          const { height } = res[0];
          console.log(height, 'inswz');
          setScrollTop(index * height);
        });
      });
    }
  }, [timeValue, ulRef.current]);

  return (
    <ScrollView
      scrollY
      scrollWithAnimation
      className={clsx(`${prefixCls}-table-${type}-ul`)}
      key={type}
      scrollTop={scrollTop}
      scrollAnimationDuration={100}
      ref={ulRef}
    >
      {dataList.map((item, index) => {
        const { value, label } = item;
        const disabled = disabledTime?.includes(value);

        return (
          <div
            key={index}
            id={`index-${index}`}
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
        );
      })}
    </ScrollView>
  );
});

DesktopTimePickerList.displayName = 'BuiDesktopTimePickerList';

export default DesktopTimePickerList;
