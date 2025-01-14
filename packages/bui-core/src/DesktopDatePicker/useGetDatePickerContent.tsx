import { CaretLeftIcon, CaretRightIcon } from '@bifrostui/icons';
import clsx from 'clsx';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import Calendar from '../Calendar';
import './deskTopPickerContainer.less';

const prefixCls = 'bui-date-picker-container';
const useGetDatePickerContent = (props) => {
  const {
    format,
    minDate,
    maxDate,
    picker,
    setIsOpen,
    disabledDate,
    calendarValue,
    setSelectType,
    selectType,
    headerBarLeftIcon,
    headerBarRightIcon,
    closeOnSelect,
    monthRender,
    yearRender,
    onMonthChange,
    onYearChange,
    triggerChange,
    calendarProps,
  } = props;
  // 判断是否是最小月份，最大月份
  const isMinMonth = dayjs(minDate).isSame(calendarValue, 'month');
  const isMaxMonth = dayjs(maxDate).isSame(calendarValue, 'month');
  // 年表格数据
  const yearList = useMemo(() => {
    const maxYear = dayjs(maxDate).year();
    const minYear = dayjs(minDate).year();
    const years = [];
    // 生成maxYear加10年，minYear减10年的所有数据
    for (let i = minYear; i <= maxYear; i += 1) {
      years.push(i);
    }

    const chunkedYears = [];
    for (let i = 0; i < years.length; i += 3) {
      chunkedYears.push(years.slice(i, i + 3));
    }
    return chunkedYears;
  }, [maxDate, minDate]);
  // 月份表格数据
  const mouthList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  /**
   * 切换上一个月
   */
  const onClickPrev = (e) => {
    e.stopPropagation();
    if (!isMinMonth) {
      const month = dayjs(calendarValue).subtract(1, 'month').toDate();
      triggerChange(e, month);
    }
  };

  /**
   * 切换下一个月
   */
  const onClickNext = (e) => {
    e.stopPropagation();
    if (!isMaxMonth) {
      const month = dayjs(calendarValue).add(1, 'month').toDate();
      triggerChange(e, month);
    }
  };
  // 日历选择回调
  const calendarChange = (e, data) => {
    e.stopPropagation();
    if (data.value) {
      // 非受控需要更新value
      triggerChange(e, dayjs(data.value).toDate());
    }
    if (closeOnSelect) {
      setIsOpen(false);
    }
  };
  // 点击年，月表格回调
  const handleTdClick = (e, data) => {
    e.stopPropagation();
    // 当前选择数据是年
    if (selectType === 'year') {
      triggerChange(
        e,
        dayjs((calendarValue || new Date()) as Date)
          .year(data)
          .toDate(),
      );
      onYearChange?.(
        e,
        dayjs((calendarValue || new Date()) as Date)
          .year(data)
          .toDate(),
      );
      // 仅支持到年份选择
      if (picker === 'year' && closeOnSelect) {
        setIsOpen(false);
        return;
      }
      setSelectType('month');
    }
    // 当前选择数据是月
    if (selectType === 'month') {
      triggerChange(
        e,
        dayjs((calendarValue || new Date()) as Date)
          .month(data - 1)
          .toDate(),
      );
      onMonthChange?.(
        e,
        dayjs((calendarValue || new Date()) as Date)
          .month(data - 1)
          .toDate(),
      );
      // 支持到日期选择
      if (picker === 'day') {
        setSelectType('day');
        return;
      }
      if (closeOnSelect) {
        setIsOpen(false);
      }
    }
  };
  // renderMonth
  const renderTd = (its, currentData) => {
    if (yearRender && selectType === 'year') {
      return yearRender(its, currentData);
    }
    if (monthRender && selectType === 'month') {
      return monthRender(its, currentData);
    }
    return <div className={clsx(`${prefixCls}-table-td-content`)}>{its}</div>;
  };
  // 渲染年，月表格
  const renderTable = () => {
    const dataList = selectType === 'year' ? yearList : mouthList;
    return dataList.map((item, index) => {
      return (
        <div key={index + 1} className={clsx(`${prefixCls}-table-tr`)}>
          {item.map((its, idx) => {
            let disabledClick = false;
            // 判断年份是否在合理区间
            if (selectType === 'year') {
              const currentData = dayjs(calendarValue).set('year', its);
              if (
                its < dayjs(minDate).year() ||
                its > dayjs(maxDate).year() ||
                disabledDate?.(currentData.toDate())
              ) {
                disabledClick = true;
              }
            }
            // 判断月份是否在合理区间
            if (selectType === 'month') {
              const currentData = dayjs(calendarValue).set('month', its - 1);
              disabledClick =
                currentData.isBefore(minDate, 'month') ||
                currentData.isAfter(maxDate, 'month');
              if (disabledDate) {
                disabledClick = disabledDate?.(currentData.toDate());
              }
            }
            return (
              <div
                key={idx + 1}
                className={clsx(`${prefixCls}-table-td`, {
                  [`${prefixCls}-table-td-active`]:
                    (selectType === 'year'
                      ? dayjs(calendarValue).year()
                      : dayjs(calendarValue).month() + 1) === its &&
                    !disabledClick,
                  [`${prefixCls}-table-td-disabled`]: disabledClick,
                })}
                onClick={(e) => {
                  if (!disabledClick) {
                    handleTdClick(e, its);
                  }
                }}
              >
                {renderTd(its, calendarValue)}
              </div>
            );
          })}
        </div>
      );
    });
  };
  const desktopDatePicker = () => {
    return (
      <div
        className={clsx(`${prefixCls}-main`)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${prefixCls}-handler`}>
          {selectType !== 'year' && (
            <div onClick={onClickPrev} className={`${prefixCls}-handler-btn`}>
              {headerBarLeftIcon ? (
                headerBarLeftIcon({ isMinMonth })
              ) : (
                <CaretLeftIcon
                  className={`${prefixCls}-handler-btn-icon`}
                  htmlColor={isMinMonth && '#cccccc'}
                />
              )}
            </div>
          )}
          <div
            className={`${prefixCls}-handler-text`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectType('year');
            }}
          >
            {calendarValue
              ? dayjs(calendarValue as Date).format(format)
              : format}
          </div>
          {selectType !== 'year' && (
            <div onClick={onClickNext} className={`${prefixCls}-handler-btn`}>
              {headerBarRightIcon ? (
                headerBarRightIcon({ isMaxMonth })
              ) : (
                <CaretRightIcon
                  className={`${prefixCls}-handler-btn-icon`}
                  htmlColor={isMaxMonth && '#cccccc'}
                />
              )}
            </div>
          )}
        </div>
        {selectType === 'day' ? (
          <Calendar
            hiddenHeader
            minDate={minDate}
            maxDate={maxDate}
            disabledDate={disabledDate}
            value={calendarValue}
            onChange={calendarChange}
            {...calendarProps}
          />
        ) : (
          <div className={clsx(`${prefixCls}-list`)}>
            <div className={clsx(`${prefixCls}-list-table`)}>
              {renderTable()}
            </div>
          </div>
        )}
      </div>
    );
  };
  return {
    desktopDatePicker,
  };
};
export default useGetDatePickerContent;
