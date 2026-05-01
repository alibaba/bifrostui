import React, { SyntheticEvent, useMemo, useState, useRef } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CaretLeftIcon, CaretRightIcon } from '@bifrostui/icons';
import { useDidMountEffect, useValue } from '@bifrostui/utils';
import CSSTransition from '../CSSTransition';
import TransitionGroup from '../TransitionGroup';
import { useLocaleText } from '../locales';
import { CalendarProps, ICalendarInstance } from './Calendar.types';
import { formatDate, isDateInRange, isSame, isEqualVal } from './utils';
import './index.less';

dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

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
      minDate = dayjs(dayjs().format('YYYYMMDD')).add(0, 'month').toDate(),
      maxDate = dayjs(dayjs().format('YYYYMMDD')).add(11, 'month').toDate(),
      mode = 'single',
      hideDaysOutsideCurrentMonth = false,
      headerBarFormat = 'YYYY/MM',
      headerBarLeftIcon,
      headerBarRightIcon,
      disabledDate,
      highlightDate = 'today',
      headerVisible = false,
      enableTransition = false,
      CSSTransitionProps,
      dateRender,
      weekRender,
      onMonthChange,
      onChange,
      ...others
    } = props;
    const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } =
      useLocaleText('calendar');
    const SUNDAY_WEEK_DATA = [
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    ];
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
    const [selectedStartDate, selectedEndDate] = useMemo(() => {
      return [calendarValue?.[0], calendarValue?.[1]];
    }, [calendarValue]);
    const slideDirection = useRef<'left' | 'right' | ''>('');

    const isMinMonth = dayjs(minDate).isSame(renderMonth, 'month');
    const isMaxMonth = dayjs(maxDate).isSame(renderMonth, 'month');

    // 头部操作栏左右图标
    const headerBarIcon = {
      left: headerBarLeftIcon ? (
        headerBarLeftIcon({ isMinMonth })
      ) : (
        <CaretLeftIcon
          className={`${classes.handler}-btn-icon`}
          htmlColor={isMinMonth && 'var(--bui-color-fg-disabled)'}
        />
      ),
      right: headerBarRightIcon ? (
        headerBarRightIcon({ isMaxMonth })
      ) : (
        <CaretRightIcon
          className={`${classes.handler}-btn-icon`}
          htmlColor={isMaxMonth && 'var(--bui-color-fg-disabled)'}
        />
      ),
    };

    const prevValueRef = useRef(value);
    useDidMountEffect(() => {
      // 受控时，只有当value中的日期不在当前显示的月份中，才更新renderMonth，避免用户点击日期时不必要的re-render
      if (!isEqualVal(prevValueRef.current, value)) {
        // 受控时点击日期的最新值
        const latestDate = formattedValue?.[0];
        // 上一次渲染传入的value初始值
        const lastInitialValue = renderMonth;

        // 如果 latestDate 为空（即取消选中的情况），不需要更新月份
        // 当选择日期范围时，如果两次点击同一天（第一次选中，第二次取消），保持在当前月份
        if (!latestDate) {
          prevValueRef.current = value;
          return;
        }

        // 最新一次的value与上一次渲染传入的value初始值是否在同一月份
        // 对于范围模式：检查开始日期或结束日期是否在当前月份（任一在即可）
        // 对于单选模式：检查选中日期是否在当前月份
        const inSameMonth = isRangeMode
          ? (selectedStartDate &&
              dayjs(selectedStartDate).isSame(lastInitialValue, 'month')) ||
            (selectedEndDate &&
              dayjs(selectedEndDate).isSame(lastInitialValue, 'month'))
          : latestDate && dayjs(latestDate).isSame(lastInitialValue, 'month');

        if (!inSameMonth) {
          const latestBeforeThanLast = dayjs(latestDate).isBefore(
            lastInitialValue,
            'month',
          );
          slideDirection.current = latestBeforeThanLast ? 'right' : 'left';
          setRenderMonth(dayjs(latestDate || minDate).toDate());
        }
        prevValueRef.current = value;
      }
    }, [JSON.stringify(value)]);

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
        const defaultDisable = !isDateInRange(day, minDate, maxDate);
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
          aria-disabled={ins?.disabled}
          aria-current={
            dayjs(ins.day).isSame(dayjs(), 'day') ? 'date' : undefined
          }
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
          let result: [Date | null, Date | null];
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

    const renderDayList = () => {
      const days = getDaysInMonth(renderMonth);
      return days.map((ins: ICalendarInstance, index: number) => {
        const dayStr = dayjs(ins.day).format('YYYYMMDD');
        const isSelected =
          (selectedStartDate && isSame(selectedStartDate, ins.day)) ||
          (selectedEndDate && isSame(selectedEndDate, ins.day));

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
            aria-selected={isSelected}
            aria-disabled={ins.disabled}
            tabIndex={ins.disabled ? -1 : 0}
          >
            {dateRender ? dateRender(ins) : defaultDateRender(ins)}
          </div>
        );
      });
    };

    /**
     * 切换上一个月
     */
    const onClickPrev = (e: SyntheticEvent) => {
      if (!isMinMonth) {
        const month = dayjs(renderMonth).subtract(1, 'month').toDate();
        setRenderMonth(month);
        slideDirection.current = 'right';
        onMonthChange?.(e, {
          type: 'prev',
          month: dayjs(month).format(headerBarFormat),
        });
      }
    };

    /**
     * 切换下一个月
     */
    const onClickNext = (e: SyntheticEvent) => {
      if (!isMaxMonth) {
        const month = dayjs(renderMonth).add(1, 'month').toDate();
        setRenderMonth(month);
        slideDirection.current = 'left';
        onMonthChange?.(e, {
          type: 'next',
          month: dayjs(month).format(headerBarFormat),
        });
      }
    };

    const data: Record<string, string> = isRangeMode
      ? {
          'data-start': dayjs(selectedStartDate).format('YYYYMMDD'),
          'data-end': dayjs(selectedEndDate).format('YYYYMMDD'),
        }
      : {
          'data-selected': dayjs(selectedStartDate).format('YYYYMMDD'),
        };

    const renderMonthDate = () => {
      const hasSlideDirection = !!slideDirection.current;
      const monthDateDom = (
        <div
          className={clsx(`${classes.root}-month`, {
            'enable-transition': enableTransition,
            visible: enableTransition && !hasSlideDirection,
          })}
          aria-label="date select"
        >
          {renderDayList()}
        </div>
      );
      if (!enableTransition) {
        return monthDateDom;
      }

      const transitionClasses = {
        exit: hasSlideDirection && 'slide-exit',
        exitActive: hasSlideDirection && `slide-exit-${slideDirection.current}`,
        enter: hasSlideDirection && `slide-enter-${slideDirection.current}`,
        enterActive: hasSlideDirection && 'slide-active',
        enterDone: 'slide-enter-done',
      };
      return (
        <TransitionGroup
          className={clsx(`${classes.root}-transition-group`)}
          childFactory={(element: React.ReactElement) => {
            return React.cloneElement(element as React.ReactElement<any>, {
              classNames: transitionClasses,
            });
          }}
        >
          <CSSTransition
            timeout={300}
            {...CSSTransitionProps}
            in
            appear={hasSlideDirection}
            mountOnEnter
            unmountOnExit
            key={renderMonth.toString()}
            classNames={transitionClasses}
          >
            {monthDateDom}
          </CSSTransition>
        </TransitionGroup>
      );
    };

    return (
      <div
        ref={ref}
        className={clsx(classes.root, className, {
          [`${classes.root}-highlight-weekend`]: highlightDate === 'weekend',
        })}
        {...others}
        data-mode={mode}
        {...data}
        role="application"
        aria-label="Calendar"
      >
        {/* 顶部操作栏 */}
        {!headerVisible && (
          <div className={classes.handler}>
            <div
              role="button"
              onClick={onClickPrev}
              className={`${classes.handler}-btn`}
              aria-label="prev month"
              tabIndex={0}
            >
              {headerBarIcon.left}
            </div>
            <div className={`${classes.handler}-text`} aria-live="polite">
              {dayjs(renderMonth).format(headerBarFormat)}
            </div>
            <div
              role="button"
              onClick={onClickNext}
              className={`${classes.handler}-btn`}
              aria-label="next month"
              tabIndex={0}
            >
              {headerBarIcon.right}
            </div>
          </div>
        )}

        {/* 周横条 */}
        <div className={classes.week}>
          {SUNDAY_WEEK_DATA?.map((w, idx) => {
            return weekRender ? (
              weekRender(w)
            ) : (
              <div key={w} className={`${classes.week}-item`}>
                {w}
              </div>
            );
          })}
        </div>

        {renderMonthDate()}
      </div>
    );
  },
);

Calendar.displayName = 'BuiCalendar';

export default Calendar;
