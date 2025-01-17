import clsx from 'clsx';
import dayjs from 'dayjs';
import React from 'react';
import {
  ViewTypeWithMeridiem,
  TimePickerContentProps,
} from './DesktopTimePicker.types';
import DesktopTimePickerList from './DesktopTimePickerList';

// import './deskTopTimePickerContainer.less';

import { getdisabledTime, isDisabledViewTime, isDisabledTime } from './utils';

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
    format = 'HH:mm:ss',
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

    let list = [];
    list = Array.from({ length: maxNum }, (_, i) => {
      const value = type === 'hour' && ampm && i === 0 ? 12 : i;
      const label = value < 10 ? `0${value}` : `${value}`;
      return { label, value };
    });

    return list;
  };

  // 渲染时间面板
  const renderViewsFunc = () => {
    const lists = ampm ? [...views, 'meridiem'] : views;
    return lists.map((type: ViewTypeWithMeridiem, index) => {
      const dataList = getViewListData(type, timeSteps[type]);
      const isLastList = index === lists.length - 1;
      const disabledTime = getdisabledTime(
        type,
        timeValue,
        minTime,
        maxTime,
        dataList,
        disabledTimeView,
      );

      const parsedTime = dayjs(timeValue, format);

      let selectedValue;
      if (type === 'meridiem') {
        selectedValue = parsedTime.format('A');
      } else if (type === 'hour' && ampm) {
        selectedValue = parsedTime.hour() % 12 || 12;
      } else {
        selectedValue = parsedTime[type]?.();
      }

      const handleClick = (e, disabled, item) => {
        // Keep the overlay open
        e.stopPropagation();
        if (disabled || selectedValue === item.value) return;

        const ulElement = e.currentTarget.parentElement;
        if (!ulElement) return;

        requestAnimationFrame(() => {
          ulElement.scrollTo({
            top: e.target.offsetTop - ulElement.offsetTop,
            behavior: 'smooth',
          });

          const onScroll = () => {
            if (
              ulElement.scrollTop ===
              e.target.offsetTop - ulElement.offsetTop
            ) {
              ulElement.removeEventListener('scroll', onScroll);
              if (isLastList && closeOnSelect) setIsOpen(false);
            }
          };

          const updateHour = (hour) => {
            const newHour = hour === 12 ? 0 : hour;
            return parsedTime.format('A') === 'PM' ? newHour + 12 : newHour;
          };

          if (type !== 'meridiem') {
            const newValue =
              type === 'hour' && ampm ? updateHour(item.value) : item.value;

            const newTimeValue = parsedTime.set(type, newValue);

            // 在时间面板内点击时，进行校验：如果时间值在disabled区间内，则到符合要求的最小时间；如果没有可选择的时间，保持原状
            if (
              isDisabledTime(newTimeValue, minTime, maxTime, disabledTimeView)
            ) {
              if (
                minTime &&
                !isDisabledViewTime(newTimeValue, disabledTimeView)
              ) {
                triggerChange(e, minTime);
              }
            } else {
              triggerChange(e, newTimeValue);
            }
          } else {
            const newHour =
              item.value === 'PM'
                ? parsedTime.hour() + 12
                : parsedTime.hour() - 12;
            triggerChange(e, parsedTime.set('hour', newHour));
          }

          if (ulElement.scrollHeight > ulElement.clientHeight) {
            ulElement.addEventListener('scroll', onScroll);
          } else if (isLastList && closeOnSelect) {
            setIsOpen(false);
          }
        });
      };

      // 初次滚动到选中位置
      const handleScrollToSelected = (ulElement, selectedLi) => {
        console.log(ulElement, selectedLi, 'handleScrollToSelected');
        ulElement.scrollTo({
          top:
            (selectedLi as HTMLDivElement).offsetTop -
            (ulElement as HTMLDivElement).offsetTop,
          behavior: 'auto',
        });
        ulElement.style.overflow = 'hidden';
        setTimeout(() => {
          ulElement.style.overflow = 'auto';
        }, 0);
      };

      return (
        <ul className={clsx(`${prefixCls}-table-ul-${type}`)} key={type}>
          <DesktopTimePickerList
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
