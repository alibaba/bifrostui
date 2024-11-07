import { CaretLeftIcon, CaretRightIcon } from '@bifrostui/icons';
import { useDidMountEffect, useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import React, {
  Suspense,
  lazy,
  SyntheticEvent,
  useMemo,
  useState,
} from 'react';
import './Calendar.less';
import { CalendarProps, ICalendarInstance } from './Calendar.types';
import { formatDate, isRange, isSame } from './utils';

const Picker = lazy(() => import('../Picker'));

dayjs.extend(isoWeek);

const SUNDAY_WEEK_DATA = ['日', '一', '二', '三', '四', '五', '六'];
const classes = {
  root: 'bui-calendar',
  handler: 'bui-calendar-handler',
  day: 'bui-calendar-day',
  week: 'bui-calendar-week',
  disabled: 'bui-calendar-disabled',
};

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      className,
      defaultValue,
      value,
      minDate,
      maxDate,
      mode,
      hideDaysOutsideCurrentMonth,
      disabledDate,
      enableSelectYear,
      highlightDate,
      dateRender,
      weekRender,
      onMonthChange,
      onYearChange,
      onChange,
      ...others
    } = props;

    const isRangeMode = mode === 'range';
    /** @type undefined | Array<Date|null> */
    const formattedValue = formatDate(mode, value, minDate, maxDate);
    /** @type undefined | Array<Date|null> */
    const formattedDefaultValue = formatDate(
      mode,
      defaultValue,
      minDate,
      maxDate,
    );

    // 控制年份选择picker
    const [openPicker, setOpenPicker] = useState<boolean>(false);
    // 头部操作栏月份
    const [renderMonth, setRenderMonth] = useState(() => {
      const initMonth =
        formattedValue === undefined
          ? formattedDefaultValue?.[0]
          : formattedValue?.[0];
      return dayjs(initMonth || minDate).toDate();
    });
    /**
     * 日历状态值
     * @type Array<Date|null>
     */
    const [calendarValue, triggerChange] = useValue({
      value: formattedValue,
      defaultValue: formattedDefaultValue,
      onChange,
    });
    // 根据calendarValue计算选中开始/结束日期
    const selectedStartDate = useMemo(() => {
      return calendarValue?.[0];
    }, [calendarValue]);
    const selectedEndDate = useMemo(() => {
      return calendarValue?.[1];
    }, [calendarValue]);

    const isMinMonth = dayjs(minDate).isSame(renderMonth, 'month');
    const isMaxMonth = dayjs(maxDate).isSame(renderMonth, 'month');

    useDidMountEffect(() => {
      const initMonth =
        formattedValue === undefined
          ? formattedDefaultValue?.[0]
          : formattedValue?.[0];
      setRenderMonth(dayjs(initMonth || minDate).toDate());
    }, [JSON.stringify(value), JSON.stringify(defaultValue)]);

    const getDaysInMonth = (args: Date) => {
      const m = dayjs(args).format('YYYY/MM');
      // 获取当前月份包含的天数
      const count = dayjs(m).daysInMonth();
      // 获取月初ISO星期几
      const week = dayjs(m).isoWeekday();
      // 获取月末ISO星期几
      const eneWeek = dayjs(m).endOf('month').isoWeekday();
      // 获取上月天数
      const prevMount = dayjs(m).subtract(1, 'month');

      const list = [];

      // 填补上月日期
      if (week !== 7) {
        const prevMountCount = prevMount.daysInMonth();
        [...Array(week)].forEach((_, i) => {
          const day = dayjs(
            `${prevMount.format('YYYY/MM')}/${prevMountCount - i}`,
          ).toDate();
          list.unshift({
            day: hideDaysOutsideCurrentMonth ? null : day,
            disabled: true,
          });
        });
      }

      [...Array(count)].forEach((_, i) => {
        const day = dayjs(`${m}/${i + 1}`).toDate();

        // 先判断是否minDate与maxDate之间，再判断传入的方法
        const defaultDisable = !isRange(day, minDate, maxDate);
        const propsDisable = disabledDate ? !!disabledDate?.(day) : false;

        list.push({
          day,
          disabled: defaultDisable ? true : propsDisable,
        });
      });

      // 填补下月日期
      const end = eneWeek === 7 ? 6 : 6 - eneWeek;
      [...Array(end)].forEach((_, i) => {
        const nextMonth = dayjs(m).add(1, 'month');
        const day = dayjs(
          `${dayjs(nextMonth).format('YYYY/MM')}/${i + 1}`,
        ).toDate();
        list.push({
          day: hideDaysOutsideCurrentMonth ? null : day,
          disabled: true,
        });
      });

      return list;
    };

    const getYearsList = () => {
      const result = [];
      // 使用传入参数的时间
      let startTime = new Date(minDate).getFullYear();
      const endTime = new Date(maxDate).getFullYear();
      while (endTime - startTime >= 0) {
        result.push({
          label: startTime,
          value: startTime,
        });
        startTime += 1;
      }
      return result;
    };

    const getDayClassName = ({ day: itemDate, disabled }) => {
      let result = '';
      if (disabled) return result;

      const isToday =
        dayjs(itemDate).diff(dayjs().format('YYYYMMDD'), 'day') === 0;

      if (selectedStartDate && isSame(selectedStartDate, itemDate)) {
        result = `${classes.root}-start`;
        // 此时endDate已选中
        if (selectedEndDate) {
          result += ` ${classes.root}-range`;
        }
      } else if (selectedEndDate && isSame(selectedEndDate, itemDate)) {
        result = `${classes.root}-end`;
      } else if (
        selectedStartDate &&
        selectedEndDate &&
        dayjs(itemDate).diff(selectedStartDate) > 0 &&
        dayjs(itemDate).diff(selectedEndDate) < 0
      ) {
        result = `${classes.root}-middle`;
      }

      if (highlightDate === 'today' && isToday && !result) {
        result = `${classes.root}-today`;
      }

      return result;
    };

    const defaultDateRender = (ins: ICalendarInstance) => {
      const dayClassName = getDayClassName(ins);

      return (
        <div
          className={clsx(
            classes.day,
            ins?.disabled && classes.disabled,
            dayClassName,
          )}
        >
          {ins.day && dayjs(ins.day).format('D')}
        </div>
      );
    };

    const onClickDay = (e: SyntheticEvent, ins: ICalendarInstance) => {
      if (ins?.disabled) return;

      if (isRangeMode) {
        // 都无值
        if (!selectedStartDate && !selectedEndDate) {
          triggerChange?.(e, [ins.day, null]);
        }
        // start有值，end无值
        else if (selectedStartDate && !selectedEndDate) {
          let result;
          // 选中了start，此时置空start
          if (isSame(ins.day, selectedStartDate)) {
            result = [null, null];
          } else {
            // 比较当前选中日期与start，重新赋值start、end
            result =
              dayjs(ins.day).diff(dayjs(selectedStartDate)) < 0
                ? [ins.day, selectedStartDate]
                : [selectedStartDate, ins.day];
          }
          triggerChange?.(e, result);
        }
        // start、end都有值，选中日期为start
        else if (selectedStartDate && selectedEndDate) {
          triggerChange?.(e, [ins.day, null]);
        }

        return;
      }

      // 单选模式使用selectedStartDate判断是否已选中
      const hasSelectedDate =
        selectedStartDate && isSame(ins.day, selectedStartDate);
      triggerChange?.(e, hasSelectedDate ? null : ins.day);
    };

    const renderDayList = () =>
      getDaysInMonth(renderMonth).map(
        (ins: ICalendarInstance, index: number) => {
          const dayStr = dayjs(ins.day).format('YYYYMMDD');
          return (
            <div
              className={clsx(`${classes.day}-box`, {
                [`${classes.root}-highlight-day`]:
                  highlightDate === 'weekend' &&
                  !ins.disabled &&
                  (index % 7 === 0 || index % 7 === 6),
              })}
              key={`${dayStr}-${index}`}
              onClick={(e) => onClickDay(e, ins)}
            >
              {dateRender ? dateRender(ins) : defaultDateRender(ins)}
            </div>
          );
        },
      );

    /**
     * 切换上一个月
     */
    const onClickPrev = (e) => {
      if (!isMinMonth) {
        const month = dayjs(renderMonth).subtract(1, 'month').toDate();
        setRenderMonth(month);
        onMonthChange?.(e, {
          type: 'prev',
          month: dayjs(month).format('YYYY/MM'),
        });
      }
    };

    /**
     * 切换下一个月
     */
    const onClickNext = (e) => {
      if (!isMaxMonth) {
        const month = dayjs(renderMonth).add(1, 'month').toDate();
        setRenderMonth(month);
        onMonthChange?.(e, {
          type: 'next',
          month: dayjs(month).format('YYYY/MM'),
        });
      }
    };

    /**
     * 点击顶部日期
     */
    const onClickDate = (e) => {
      if (!enableSelectYear) {
        return;
      }
      e.stopPropagation();
      setOpenPicker(true);
      getYearsList();
    };
    const onClosePicker = (e, data) => {
      const selectYear = data.value[0];
      e.stopPropagation();
      setRenderMonth(dayjs(renderMonth).set('year', selectYear).toDate());
      onYearChange?.(e, {
        year: selectYear,
      });
      setOpenPicker(false);
    };

    let data: Record<string, string> = {};
    if (isRangeMode) {
      data = {
        'data-start': dayjs(selectedStartDate).format('YYYYMMDD'),
        'data-end': dayjs(selectedEndDate).format('YYYYMMDD'),
      };
    } else {
      data = {
        'data-selected': dayjs(selectedStartDate).format('YYYYMMDD'),
      };
    }

    return (
      <div
        ref={ref}
        className={clsx(classes.root, className, {
          [`${classes.root}-highlight-weekend`]: highlightDate === 'weekend',
        })}
        {...others}
        data-mode={mode}
        {...data}
      >
        {/* 顶部操作栏 */}
        <div className={classes.handler}>
          <div onClick={onClickPrev} className={`${classes.handler}-btn`}>
            <CaretLeftIcon
              className={`${classes.handler}-btn-icon`}
              htmlColor={isMinMonth && '#cccccc'}
            />
          </div>
          <div className={`${classes.handler}-text`} onClick={onClickDate}>
            {dayjs(renderMonth).format('YYYY/MM')}
          </div>
          <div onClick={onClickNext} className={`${classes.handler}-btn`}>
            <CaretRightIcon
              className={`${classes.handler}-btn-icon`}
              htmlColor={isMaxMonth && '#cccccc'}
            />
          </div>
        </div>

        {/* 周横条 */}
        <div className={classes.week}>
          {SUNDAY_WEEK_DATA?.map((w) => {
            return weekRender ? (
              weekRender(w)
            ) : (
              <div key={w} className={`${classes.week}-item`}>
                {w}
              </div>
            );
          })}
        </div>

        <div className={clsx(`${classes.root}-month`)}>{renderDayList()}</div>
        {enableSelectYear && (
          <Suspense fallback={null}>
            <Picker
              options={[getYearsList()]}
              open={openPicker}
              value={[dayjs(renderMonth).year()]}
              onClose={onClosePicker}
            />
          </Suspense>
        )}
      </div>
    );
  },
);

Calendar.displayName = 'BuiCalendar';
Calendar.defaultProps = {
  hideDaysOutsideCurrentMonth: false,
  enableSelectYear: false,
  mode: 'single',
  minDate: dayjs(dayjs().format('YYYYMMDD')).add(0, 'month').toDate(),
  maxDate: dayjs(dayjs().format('YYYYMMDD')).add(11, 'month').toDate(),
  highlightDate: 'today',
};

export default Calendar;
