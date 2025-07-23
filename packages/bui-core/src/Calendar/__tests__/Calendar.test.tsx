import dayjs from 'dayjs';
import React from 'react';
import { screen, fireEvent, isConformant, render } from 'testing';
import { Calendar } from '..';

describe('Calendar', () => {
  const rootClass = 'bui-calendar';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  isConformant({
    className: rootClass,
    displayName: 'BuiCalendar',
    Component: Calendar,
    requiredProps: {
      mode: 'single',
      value: dayjs(),
      minDate: dayjs('20230401').toDate(),
      maxDate: dayjs('20230429').toDate(),
    },
    skip: ['component-has-root-ref'],
  });

  it('should render date range in minDate to maxDate', () => {
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230429').toDate()}
      />,
    );
    const dayNodes = container.querySelectorAll(`.${rootClass}-day`);
    const enableDayNodes = [...dayNodes].filter(
      (item) => !item.className.includes('disable'),
    );
    const start = enableDayNodes[0];
    const end = enableDayNodes[enableDayNodes.length - 1];
    expect(enableDayNodes.length).toBe(29);
    expect(start).toHaveTextContent('1');
    expect(end).toHaveTextContent('29');
  });

  it('should not fill last or next month', () => {
    const { container } = render(
      <Calendar
        mode="range"
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230501').toDate()}
        value={[null, null]}
        hideDaysOutsideCurrentMonth
      />,
    );
    const calendar = container.querySelector(`.${rootClass}`);
    const dayNodes = container.querySelectorAll(`.${rootClass}-day`);
    const enableDayNodes = [...dayNodes].filter((item) => item.innerHTML);
    expect(enableDayNodes.length).toBe(30);
    expect(calendar).toMatchSnapshot();
  });

  it('should render disabled date by `disabledDate` property', () => {
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230430').toDate()}
        disabledDate={(current) =>
          ['0401', '0413'].includes(dayjs(current).format('MMDD'))
        }
        hideDaysOutsideCurrentMonth
      />,
    );
    const calendar = container.querySelector(`.${rootClass}`);
    const dayNodes = container.querySelectorAll(`.${rootClass}-day`);
    const disableDayNodes = [...dayNodes].filter(
      (item) => item.className.includes('disable') && item.innerHTML,
    );
    expect(disableDayNodes.length).toBe(2);
    expect(disableDayNodes[0]).toHaveTextContent('1');
    expect(disableDayNodes[1]).toHaveTextContent('13');
    expect(calendar).toMatchSnapshot();
  });

  it('should render high light today date', () => {
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs().toDate()}
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        highlightDate="today"
      />,
    );
    const today = container.querySelector(`.${rootClass}-start`);
    expect(today.innerHTML).toBe(dayjs().format('D'));
  });

  it('should render headerVisible', () => {
    const { container } = render(
      <Calendar
        mode="single"
        headerVisible
        value={dayjs().toDate()}
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
      />,
    );
    const header = container.querySelector(`.${rootClass}-handler`);
    expect(header).toBe(null);
  });

  it('should render high light today date', () => {
    const { container } = render(
      <Calendar
        mode="single"
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        value={dayjs().toDate()}
        highlightDate="today"
        dateRender={({ day }) => {
          return dayjs().format('D') === dayjs(day).format('D') ? (
            <div className={`${rootClass}-today`}>今天</div>
          ) : (
            dayjs(day).format('D')
          );
        }}
      />,
    );
    const today = container.querySelector(`.${rootClass}-today`);
    expect(today.innerHTML).toBe('今天');
  });

  it('should render week item by `weekRender` property', () => {
    const fakeWeekItemRender = jest.fn((item) => (
      <span className="week-custom-item" key={item}>
        周{item}
      </span>
    ));
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        weekRender={fakeWeekItemRender}
      />,
    );
    const weekItems = container.querySelectorAll('.week-custom-item');
    expect(fakeWeekItemRender).toBeCalledTimes(7);
    expect(weekItems.length).toBe(7);
  });

  it('should be called when change prev month', () => {
    const fakeMonthChange = jest.fn((e, data) => data.type);
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        onMonthChange={fakeMonthChange}
      />,
    );
    const btns = container.querySelectorAll(`.${rootClass}-handler-btn`);
    fireEvent.click(btns[0]);
    expect(fakeMonthChange).toReturnWith('prev');
  });

  it('should be called when change next month', () => {
    const fakeMonthChange = jest.fn((e, data) => data.type);
    const { container } = render(
      <Calendar
        mode="single"
        value={dayjs('20230402').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        onMonthChange={fakeMonthChange}
      />,
    );
    const btns = container.querySelectorAll(`.${rootClass}-handler-btn`);
    fireEvent.click(btns[1]);
    expect(fakeMonthChange).toReturnWith('next');
  });

  it('should render handler bar by `headerBarFormat`', () => {
    const { container } = render(
      <Calendar
        headerBarFormat="YYYY年MM月"
        mode="range"
        minDate={dayjs('20230701').toDate()}
        maxDate={dayjs('20230731').toDate()}
        defaultValue={[
          dayjs('20230701').toDate(),
          dayjs('20230701').add(3, 'day').toDate(),
        ]}
      />,
    );
    const headerTextContainer = container.querySelector(
      `.${rootClass}-handler-text`,
    );
    expect(headerTextContainer.innerHTML).toContain('2023年07月');
  });

  it('should render handler bar icons by `headerBarLeftIcon` or `headerBarRightIcon`', () => {
    const fakeMonthChange = jest.fn((e, data) => data.type);
    const { container } = render(
      <Calendar
        headerBarLeftIcon={({ isMinMonth }) => {
          return (
            <div
              style={{
                color: isMinMonth && '#cccccc',
              }}
            >
              prev-icon
            </div>
          );
        }}
        headerBarRightIcon={({ isMaxMonth }) => {
          return (
            <div
              style={{
                color: isMaxMonth && '#cccccc',
              }}
            >
              next-icon
            </div>
          );
        }}
        mode="single"
        value={dayjs('20230402').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230501').toDate()}
        onMonthChange={fakeMonthChange}
      />,
    );
    const leftIcon = screen.getByText('prev-icon');
    const rightIcon = screen.getByText('next-icon');
    expect(leftIcon).toHaveStyle('color: #cccccc');
    expect(rightIcon).not.toHaveStyle('color: #cccccc');

    const btns = container.querySelectorAll(`.${rootClass}-handler-btn`);
    fireEvent.click(btns[1]);
    expect(fakeMonthChange).toReturnWith('next');
    expect(leftIcon).not.toHaveStyle('color: #cccccc');
    expect(rightIcon).toHaveStyle('color: #cccccc');
  });

  describe('single mode', () => {
    it('should selected date by `value` property', () => {
      const { container } = render(
        <Calendar
          mode="single"
          minDate={dayjs('20230401').toDate()}
          maxDate={dayjs('20230501').toDate()}
          value={dayjs('20230418').toDate()}
        />,
      );
      const calendar = container.querySelector(`.${rootClass}`);
      const selected = container.querySelector(`.${rootClass}-start`);
      expect(selected).toHaveTextContent('18');
      expect(calendar).toMatchSnapshot();
    });

    it('onChange should be called when click date item', () => {
      const fakeChange = jest.fn((e, data) => dayjs(data.value).format('D'));
      const { container } = render(
        <Calendar
          mode="single"
          minDate={dayjs('20230401').toDate()}
          maxDate={dayjs('20230501').toDate()}
          value={dayjs('20230418').toDate()}
          onChange={fakeChange}
          hideDaysOutsideCurrentMonth={false}
        />,
      );
      const dayBoxList = container.querySelectorAll(`.${rootClass}-day-box`);
      const enableList = [...dayBoxList].filter(
        (item) =>
          !(item as Element)?.innerHTML?.includes('bui-calendar-disabled'),
      );
      fireEvent.click(enableList[14]);
      expect(fakeChange).toReturnWith('15');
    });
  });

  describe('range mode', () => {
    it('value should be a range date', () => {
      const { container } = render(
        <Calendar
          mode="range"
          minDate={dayjs('20230401').toDate()}
          maxDate={dayjs('20230501').toDate()}
          value={[dayjs('20230418').toDate(), dayjs('20230422').toDate()]}
        />,
      );
      const calendar = container.querySelector(`.${rootClass}`);
      const start = container.querySelector(`.${rootClass}-start`);
      const end = container.querySelector(`.${rootClass}-end`);
      const middle = container.querySelectorAll(`.${rootClass}-middle`);
      expect(start).toHaveTextContent('18');
      expect(end).toHaveTextContent('22');
      expect(middle.length).toBe(3);
      expect(calendar).toMatchSnapshot();
    });

    it('should be cancel when start date is same', () => {
      const { getByText } = render(
        <Calendar
          mode="range"
          minDate={dayjs('20230401').toDate()}
          maxDate={dayjs('20230501').toDate()}
          defaultValue={[dayjs('20230418').toDate(), null]}
        />,
      );
      const start = getByText('18');
      expect(start).toHaveClass(`${rootClass}-start`);
      fireEvent.click(start);
      expect(start).not.toHaveClass(`${rootClass}-start`);
    });

    it('onChange should be called when change date range', () => {
      const fakeChange = jest.fn((e, data) => {
        return Array.isArray(data.value);
      });
      const { container } = render(
        <Calendar
          mode="range"
          minDate={dayjs('20230701').toDate()}
          maxDate={dayjs('20230731').toDate()}
          defaultValue={[
            dayjs('20230701').toDate(),
            dayjs('20230701').add(3, 'day').toDate(),
          ]}
          onChange={fakeChange}
          hideDaysOutsideCurrentMonth={false}
        />,
      );
      const dayBoxList = container.querySelectorAll(`.${rootClass}-day-box`);
      const enableList = [...dayBoxList].filter(
        (item) =>
          !(item as Element)?.innerHTML?.includes('bui-calendar-disabled'),
      );
      fireEvent.click(enableList[1]);
      expect(fakeChange).toReturnWith(true);
    });
  });
});
