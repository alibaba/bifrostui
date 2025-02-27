import { CaretLeftIcon, CaretRightIcon } from '@bifrostui/icons';
import clsx from 'clsx';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import Calendar from '../Calendar';
import './deskTopPickerContainer.less';
import { useLocaleText } from '../locales';

const prefixCls = 'bui-desktop-date-picker-container';
const useGetDatePickerContent = (props) => {
  const yPatterns = ['YYYY', 'YY'];
  const mPatterns = ['MM', 'M', 'MMM', 'MMMM'];
  const dPatterns = ['D', 'DD'];
  const { month: monthMap } = useLocaleText('desktopDatePicker');
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
    CalendarProps,
    ...others
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
  const validateAndAdjustDate = (value) => {
    const dateValue = dayjs(value);
    const minValue = dayjs(minDate);
    const maxValue = dayjs(maxDate);

    if (dateValue.isBefore(minValue)) {
      return minValue;
    }
    if (dateValue.isAfter(maxValue)) {
      return maxValue;
    }
    return dateValue;
  };

  /**
   * 切换上一个月
   */
  const onClickPrev = (e) => {
    e.stopPropagation();
    if (!isMinMonth) {
      const month = dayjs(calendarValue).subtract(1, 'month').toDate();
      triggerChange(e, validateAndAdjustDate(month).toDate());
    }
  };

  /**
   * 切换下一个月
   */
  const onClickNext = (e) => {
    e.stopPropagation();
    if (!isMaxMonth) {
      const month = dayjs(calendarValue).add(1, 'month').toDate();
      triggerChange(e, validateAndAdjustDate(month).toDate());
    }
  };
  // 日历选择回调
  const calendarChange = (e, data) => {
    e.stopPropagation();
    if (data.value) {
      const ymd = dayjs(data.value);
      const hms = dayjs(calendarValue);
      const newValue = ymd
        .hour(hms.hour())
        .minute(hms.minute())
        .second(hms.second());
      // 非受控需要更新value
      triggerChange(e, validateAndAdjustDate(newValue).toDate());
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
        validateAndAdjustDate(
          dayjs((calendarValue || new Date()) as Date).year(data),
        ).toDate(),
      );
      onYearChange?.(
        e,
        validateAndAdjustDate(
          dayjs((calendarValue || new Date()) as Date).year(data),
        ).toDate(),
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
        validateAndAdjustDate(
          dayjs((calendarValue || new Date()) as Date).month(data - 1),
        ).toDate(),
      );
      onMonthChange?.(
        e,
        validateAndAdjustDate(
          dayjs((calendarValue || new Date()) as Date).month(data - 1),
        ).toDate(),
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
      return (
        <div className={clsx(`${prefixCls}-table-td-content`)}>
          {yearRender({ year: its, currentData })}
        </div>
      );
    }
    if (monthRender && selectType === 'month') {
      return (
        <div className={clsx(`${prefixCls}-table-td-content`)}>
          {monthRender({ month: its, currentData })}
        </div>
      );
    }
    return (
      <div className={clsx(`${prefixCls}-table-td-content`)}>
        <span className={clsx(`${prefixCls}-table-td-content-text`)}>
          {selectType === 'month' ? monthMap[its] : its}
        </span>
      </div>
    );
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

  const handleClickTitle = (e, data) => {
    e.stopPropagation();
    if (yPatterns.indexOf(data) > -1) {
      setSelectType('year');
    }
    if (mPatterns.indexOf(data) > -1) {
      setSelectType('month');
    }
    if (dPatterns.indexOf(data) > -1) {
      setSelectType('day');
    }
  };

  const renderTitle = (formate, value) => {
    const allType = [...yPatterns, ...mPatterns, ...dPatterns];
    const formattingTokens =
      /(\[[^[]*\])|([-_?:/.,()\s{0-9}]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
    const matchArr = formate.match(formattingTokens);
    const domArr = [];
    let str = '';
    for (let i = 0; i <= matchArr.length; i += 1) {
      if (allType.indexOf(matchArr[i]) > -1) {
        if (str !== '') {
          domArr.push(str);
          str = '';
        }
        domArr.push(
          <div
            className={clsx(`${prefixCls}-handler-box-text`)}
            key={i}
            onClick={(e) => handleClickTitle(e, matchArr[i])}
          >
            {dayjs(value).format(matchArr[i])}
          </div>,
        );
      } else {
        str = `${matchArr[i]}${str}`;
      }
    }
    return domArr;
  };

  const desktopDatePicker = () => {
    return (
      <div
        className={clsx(`${prefixCls}-main`)}
        {...others}
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
                  htmlColor={isMinMonth && 'var(--bui-color-white)'}
                />
              )}
            </div>
          )}
          <div className={`${prefixCls}-handler-box`}>
            {calendarValue ? renderTitle(format, calendarValue) : format}
          </div>
          {selectType !== 'year' && (
            <div onClick={onClickNext} className={`${prefixCls}-handler-btn`}>
              {headerBarRightIcon ? (
                headerBarRightIcon({ isMaxMonth })
              ) : (
                <CaretRightIcon
                  className={`${prefixCls}-handler-btn-icon`}
                  htmlColor={isMaxMonth && 'var(--bui-color-white)'}
                />
              )}
            </div>
          )}
        </div>
        {selectType === 'day' ? (
          <Calendar
            headerVisible
            minDate={minDate}
            maxDate={maxDate}
            disabledDate={disabledDate}
            value={calendarValue}
            onChange={calendarChange}
            {...CalendarProps}
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
