import clsx from 'clsx';
import React from 'react';
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
    renderItem,
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
      const disabledTime = getdisabledTime(
        type,
        timeValue,
        minTime,
        maxTime,
        dataList,
        disabledTimeView,
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

        if (type !== 'meridiem') {
          const updateHour = (hour: number) => {
            return validTime.format('A') === 'PM' ? hour + 12 : hour;
          };

          const newValue =
            type === 'hour' && ampm ? updateHour(item.value) : item.value;
          let newTimeValue = validTime.set(type, newValue);

          // 判断click后的timeValue是否在有效时间内
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
                const viewDisabledTime = getdisabledTime(
                  view,
                  newTimeValue,
                  minTime,
                  maxTime,
                  getViewListData(view, timeSteps[view]),
                  disabledTimeView,
                  ampm,
                );

                const viewDataList = getViewListData(view, timeSteps[view]);

                const validValues = viewDataList
                  .map((i) => i.value)
                  .filter((el) => !viewDisabledTime.includes(el));
                const nearestValue = validValues.reduce((prev, curr) => {
                  const curValue = newTimeValue[view]?.() ?? 0; // 提供默认值，以防止 NaN 问题
                  return Math.abs(curr - curValue) < Math.abs(prev - curValue)
                    ? curr
                    : prev;
                }, validValues[0]); // 提供初始值

                newTimeValue = newTimeValue.set(view, nearestValue);
              }
            });

            triggerChange(e, newTimeValue.toDate());
          } else {
            triggerChange(e, newTimeValue.toDate());
          }
        } else {
          // 点击ampm
          const newHour =
            item.value === 'PM' ? validTime.hour() + 12 : validTime.hour() - 12;
          let newTimeValue = validTime.set('hour', newHour);
          const isDisabledNewTime = isDisabledTime(
            newTimeValue,
            minTime,
            maxTime,
            disabledTimeView,
          );
          if (isDisabledNewTime) {
            views.forEach((view) => {
              const viewDisabledTime = getdisabledTime(
                view,
                newTimeValue,
                minTime,
                maxTime,
                getViewListData(view, timeSteps[view]),
                disabledTimeView,
                ampm,
              );

              const viewDataList = getViewListData(view, timeSteps[view]);

              const validValues = viewDataList
                .map((i) => i.value)
                .filter((el) => !viewDisabledTime.includes(el));
              let nearestValue = validValues.reduce((prev, curr) => {
                // click后，timeValue在该view的值
                const curValue =
                  view === 'hour' ? newHour : newTimeValue[view]?.();
                return Math.abs(curr - curValue) < Math.abs(prev - curValue)
                  ? curr
                  : prev;
              }, validValues[0]); // 提供初始值

              // 点击pm时，hour要+12
              if (view === 'hour') {
                if (item.value === 'PM') {
                  nearestValue += 12;
                }
              }
              newTimeValue = newTimeValue.set(view, nearestValue);

              triggerChange(e, newTimeValue.toDate());
            });
          } else {
            triggerChange(e, newTimeValue.toDate());
          }
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
          renderItem={renderItem}
        />
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
