import clsx from 'clsx';
import React from 'react';
import {
  ViewTypeWithMeridiem,
  TimePickerContentProps,
} from './DesktopTimePicker.types';
import DesktopTimePickerList from './DesktopTimePickerList';

// import './deskTopTimePickerContainer.less';

import { getdisabledTime, calculateValidMinTime } from './utils';

const prefixCls = 'bui-time-picker';

const useGetTimePickerContent = (props: TimePickerContentProps) => {
  const {
    views = ['hour', 'minute', 'second'],
    timeSteps = {
      hour: 1,
      minute: 1,
      second: 1,
    },
    ampm = false,
    disabledTimeView = () => ({
      hour: () => {
        return [];
      },
      minute: () => {
        return [];
      },
      second: () => [],
    }),
    minTime,
    maxTime,
    timeValue,
    closeOnSelect,
    setIsOpen,
    triggerChange,
  } = props;

  // 获取时间面板数据
  const getViewListData = (type: ViewTypeWithMeridiem, timeStep = 1) => {
    if (type === 'meridiem') {
      return [
        { label: 'AM', value: 'AM' },
        { label: 'PM', value: 'PM' },
      ];
    }

    let maxNum: number;
    if (type === 'hour') {
      maxNum = ampm ? 12 : 24;
    } else {
      maxNum = 60;
    }

    const list = [];
    for (let i = 0; i < maxNum; i += timeStep) {
      const value = i;
      let label = value < 10 ? `0${value}` : `${value}`;
      if (type === 'hour' && ampm && value === 0) {
        label = '12';
      }
      list.push({ label, value });
    }
    return list;
  };

  // 渲染时间面板
  const renderViewsFunc = () => {
    const lists = ampm ? [...views, 'meridiem'] : views;
    return lists.map((type: ViewTypeWithMeridiem, index) => {
      const dataList = getViewListData(type, timeSteps[type]);
      const isLastList = index === lists.length - 1;

      // 当timeValue存在时，渲染选中的时间
      let selectedValue;
      if (timeValue) {
        if (type === 'meridiem') {
          selectedValue = timeValue.format('A');
        } else if (type === 'hour' && ampm) {
          selectedValue = timeValue.hour() % 12;
        } else {
          selectedValue = timeValue[type]?.();
        }
      }

      const disabledTime = getdisabledTime(
        type,
        timeValue,
        minTime,
        maxTime,
        dataList,
        disabledTimeView,
        ampm,
      );

      const handleClick = (e, disabled: boolean, item) => {
        // Keep the overlay open
        e.stopPropagation();
        if (disabled || selectedValue === item.value) return;

        const ulElement = e.currentTarget.parentElement;
        if (!ulElement) return;

        // 获取符合条件的最小时间
        const validMinTime = calculateValidMinTime(disabledTimeView, minTime);
        // 兼容timeValue为空时，避免点击后值invalid
        const validTime = timeValue ?? validMinTime;

        if (type !== 'meridiem') {
          const updateHour = (hour: number) => {
            return validTime.format('A') === 'PM' ? hour + 12 : hour;
          };

          const newValue =
            type === 'hour' && ampm ? updateHour(item.value) : item.value;
          const newTimeValue = validTime.set(type, newValue);

          triggerChange(e, newTimeValue);
        } else {
          // 点击ampm
          const newHour =
            item.value === 'PM' ? validTime.hour() + 12 : validTime.hour() - 12;
          const newTimeValue = validTime.set('hour', newHour);
          triggerChange(e, newTimeValue);
        }

        if (isLastList && closeOnSelect) {
          setIsOpen(false);
        }
      };

      // 初次滚动到选中位置
      const handleScrollToSelected = (ulElement, selectedLi) => {
        ulElement?.scrollTo?.({
          top:
            (selectedLi as HTMLDivElement).offsetTop -
            (ulElement as HTMLDivElement).offsetTop,
          behavior: 'smooth',
        });
      };

      return (
        <ul className={clsx(`${prefixCls}-table-${type}-ul`)} key={type}>
          <DesktopTimePickerList
            timeValue={timeValue}
            type={type}
            dataList={dataList}
            disabledTime={disabledTime}
            selectedValue={selectedValue}
            prefixCls={prefixCls}
            handleClick={handleClick}
            handleScrollToSelected={handleScrollToSelected}
          />
        </ul>
      );
    });
  };

  const desktopTimePicker = () => {
    return (
      <div
        className={clsx(`${prefixCls}-main`)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={clsx(`${prefixCls}-table`)}>{renderViewsFunc()}</div>
      </div>
    );
  };

  return {
    desktopTimePicker,
  };
};
export default useGetTimePickerContent;
