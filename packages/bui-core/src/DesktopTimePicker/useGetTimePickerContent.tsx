import clsx from 'clsx';
import React, { useEffect } from 'react';
import {
  ViewTypeWithMeridiem,
  TimePickerContentProps,
} from './DesktopTimePicker.types';
import DesktopTimePickerList from './DesktopTimePickerList';

import {
  getdisabledTime,
  calculateValidMinTime,
  isDisabledTime,
} from './utils/utils';

const prefixCls = 'bui-desktop-time-picker';

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
      hour: () => [],
      minute: () => [],
      second: () => [],
    }),
    minTime,
    maxTime,
    timeValue,
    closeOnSelect,
    setIsOpen,
    triggerChange,
    timeRender,
    setIsInvalid,
  } = props;

  useEffect(() => {
    if (isDisabledTime(timeValue, minTime, maxTime, disabledTimeView)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [timeValue]);

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

    // 防止timeStep<=0
    if (timeStep <= 0) {
      timeStep = 1;
    }
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
      const disabledTime = getdisabledTime(
        type,
        timeValue,
        minTime,
        maxTime,
        dataList,
        disabledTimeView,
        timeSteps,
        ampm,
      );

      // 设置disabled
      dataList.forEach((item, idx) => {
        const { value } = item;
        const disabled = disabledTime?.includes(value);
        dataList[idx] = { ...item, disabled };
      });

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

      const handleClick = (e, disabled: boolean, item) => {
        // Keep the overlay open
        e.stopPropagation();
        // 禁用或点击当前值不处理
        if (disabled || selectedValue === item.value) return;

        // 获取符合条件的最小时间
        const validMinTime = calculateValidMinTime(disabledTimeView, minTime);
        // 兼容timeValue为空时，避免点击后值invalid
        const validTime = timeValue ?? validMinTime;

        const updateHour = (hour) =>
          validTime.format('A') === 'PM' ? hour + 12 : hour;

        const getValidTimeValue = (view, newTimeValue) => {
          // 计算每一列的disabledData
          let viewDisabledTime = getdisabledTime(
            view,
            newTimeValue,
            minTime,
            maxTime,
            getViewListData(view, timeSteps[view]),
            disabledTimeView,
            timeSteps,
            ampm,
          );

          // 每一列的data
          let viewDataList = getViewListData(view, timeSteps[view]);
          if (view === 'hour' && ampm && newTimeValue.format('A') === 'PM') {
            viewDataList = viewDataList.map((el) => ({
              ...el,
              value: el.value + 12,
            }));
            viewDisabledTime = viewDisabledTime.map(
              (el) => (el as number) + 12,
            );
          }

          // 过滤有效data
          const validValues = viewDataList
            .map((i) => i.value)
            .filter((el) => !viewDisabledTime.includes(el));

          const curViewValue = newTimeValue[view]?.() ?? 0;
          // 计算距离当前item最近的合理值
          const nearestValue = validValues.reduce(
            (prev, curr) =>
              Math.abs(curr - curViewValue) < Math.abs(prev - curViewValue)
                ? curr
                : prev,
            validValues[0],
          ); // 提供初始值

          // 存在无符合条件选项的情况，则维持当前
          return nearestValue !== undefined ? nearestValue : curViewValue;
        };

        const handleNewTimeValue = (newTimeValue, event) => {
          // 判断点击后的时间是否在有效值内
          const isDisabledNewTime = isDisabledTime(
            newTimeValue,
            minTime,
            maxTime,
            disabledTimeView,
          );

          // 如果不在有效时间内，找其余各列中符合时间条件并且距离现在最接近的选项
          if (isDisabledNewTime) {
            views.forEach((view) => {
              if (view !== type) {
                const validValue = getValidTimeValue(view, newTimeValue);
                newTimeValue = newTimeValue.set(view, validValue);
              }
            });
          }

          triggerChange(event, newTimeValue.toDate());
        };

        // 获取每一列新的值
        const calculateNewValue = (view, el) => {
          if (view === 'hour' && ampm) {
            return updateHour(item.value);
          }
          return el.value;
        };

        if (type === 'meridiem') {
          // 点击 ampm
          const newHour =
            item.value === 'PM' ? validTime.hour() + 12 : validTime.hour() - 12;
          const newTimeValue = validTime.set('hour', newHour);

          handleNewTimeValue(newTimeValue, e);
        } else {
          const newValue = calculateNewValue(type, item);
          const newTimeValue = validTime.set(type, newValue);

          handleNewTimeValue(newTimeValue, e);
        }

        if (isLastList && closeOnSelect) {
          setIsOpen(false);
        }
      };

      return (
        <DesktopTimePickerList
          timeValue={timeValue}
          type={type}
          dataList={dataList}
          selectedValue={selectedValue}
          prefixCls={prefixCls}
          handleClick={handleClick}
          key={type}
          timeRender={timeRender}
        />
      );
    });
  };

  const desktopTimePanel = () => {
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
    desktopTimePanel,
  };
};
export default useGetTimePickerContent;
