import dayjs from 'dayjs';
import React, { act } from 'react';
import { fireEvent, isConformant, render, userEvent } from 'testing';
import { DesktopDatePicker } from '..';

describe('DesktopDatePicker', () => {
  const rootClass = 'bui-date-picker';

  isConformant({
    classNames: rootClass,
    displayName: 'BUIDatePicker',
    Component: DesktopDatePicker,
    requiredProps: {
      value: dayjs(),
      minDate: dayjs('20230401').toDate(),
      maxDate: dayjs('20230429').toDate(),
    },
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-handles-style',
      'component-has-default-className',
    ],
  });

  it('should render date range in minDate to maxDate', async () => {
    const dateChange = jest.fn((e, res) => {
      return dayjs(res.value).format('YYYYMMDD');
    });
    const { container, getAllByText } = render(
      <DesktopDatePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    const dayNodes = container.querySelectorAll(
      `.bui-date-picker-table-td-content`,
    );
    // 遍历每个 div 节点，验证文本内容
    dayNodes.forEach((div) => {
      const yearText = div.textContent;
      const year = parseInt(yearText, 10);

      // 期望年份大于2020且小于2023
      expect(year).toBeGreaterThan(2019);
      expect(year).toBeLessThan(2024);
    });
    const year = getAllByText('2023');
    await act(async () => {
      fireEvent.click(year[0]);
    });
    expect(dateChange).toBeCalled();

    expect(getAllByText('4')[0].parentElement).toHaveClass(
      'bui-date-picker-table-td-active',
    );
    expect(getAllByText('5')[0].parentElement).toHaveClass(
      'bui-date-picker-table-td-disabled',
    );
    await act(async () => {
      fireEvent.click(getAllByText('4')[0]);
    });

    expect(dateChange).toBeCalled();

    expect(getAllByText('31')[0]).toHaveClass('bui-calendar-disabled');
    expect(getAllByText('30')[1]).toHaveClass('bui-calendar-disabled');
    const day = getAllByText('3');
    await act(async () => {
      fireEvent.click(day[0]);
    });
    expect(dateChange).toReturnWith('20230403');
  });

  it('should 2024 year', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        picker="year"
        format="YYYY"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20250529').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      userEvent.click(getAllByText('2024')[0]);
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-date-picker-content`,
    );
    expect(contentNodes?.value).toBe('2024');
  });

  it('should 2024/06', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        picker="month"
        format="YYYY/MM"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20250529').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      userEvent.click(getAllByText('2024')[0]);
    });
    await act(async () => {
      userEvent.click(getAllByText('6')[0]);
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-date-picker-content`,
    );
    expect(contentNodes.value).toBe('2024/06');
  });

  it('node length should be 30', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230529').toDate()}
        CalendarProps={{
          hideDaysOutsideCurrentMonth: true,
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      fireEvent.click(getAllByText('2023')[0]);
    });
    await act(async () => {
      fireEvent.click(getAllByText('4')[0]);
    });
    const elements = document.getElementsByClassName('bui-calendar-day');
    const enableDayNodes = [...elements].filter((item) => item.innerHTML);
    expect(enableDayNodes.length).toBe(30);
  });

  it('should render disabled year by `disabledDate` property', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        picker="year"
        format="YYYY"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230529').toDate()}
        disabledDate={(current) =>
          ['2021'].includes(dayjs(current).format('YYYY'))
        }
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    const disableDayNodes = getAllByText('2021')[0];
    userEvent.click(disableDayNodes);
    expect(disableDayNodes.parentElement).toHaveClass(
      'bui-date-picker-table-td-disabled',
    );
    expect(
      document.querySelector(`.bui-date-picker-handler-text`).innerHTML,
    ).toBe('2023');
  });

  it('should render disabled date by `disabledDate` property', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230529').toDate()}
        disabledDate={(current) =>
          ['0402', '0413'].includes(dayjs(current).format('MMDD'))
        }
        CalendarProps={{
          hideDaysOutsideCurrentMonth: true,
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      fireEvent.click(getAllByText('2023')[0]);
    });
    await act(async () => {
      fireEvent.click(getAllByText('4')[0]);
    });
    const dayNodes = document.querySelectorAll(`.bui-calendar-day`);
    const disableDayNodes = [...dayNodes].filter(
      (item) => item.className.includes('disable') && item.innerHTML,
    );
    expect(disableDayNodes.length).toBe(2);
    expect(disableDayNodes[0]).toHaveTextContent('2');
    expect(disableDayNodes[1]).toHaveTextContent('13');
  });

  it('should render high light today date', async () => {
    const { container } = render(
      <DesktopDatePicker
        value={dayjs().toDate()}
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        CalendarProps={{
          highlightDate: 'today',
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    const yearNode = document.getElementsByClassName(
      'bui-date-picker-table-td',
    );
    await act(async () => {
      fireEvent.click(yearNode[0]);
    });
    const monthNode = document.getElementsByClassName(
      'bui-date-picker-table-td',
    );
    const index = Number(dayjs().format('MM')) - 1;
    await act(async () => {
      fireEvent.click(monthNode[index]);
    });
    const today = document.querySelector(`.bui-calendar-start`);
    expect(today.innerHTML).toBe(dayjs().format('D'));
  });

  it('should render 今天 today date', async () => {
    const { container } = render(
      <DesktopDatePicker
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        value={dayjs().toDate()}
        CalendarProps={{
          highlightDate: 'today',
          dateRender: ({ day }) => {
            return dayjs().format('D') === dayjs(day).format('D') ? (
              <div className={`${rootClass}-today`}>今天</div>
            ) : (
              dayjs(day).format('D')
            );
          },
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    const yearNode = document.getElementsByClassName(
      'bui-date-picker-table-td',
    );
    await act(async () => {
      fireEvent.click(yearNode[0]);
    });
    const monthNode = document.getElementsByClassName(
      'bui-date-picker-table-td',
    );
    const index = Number(dayjs().format('MM')) - 1;
    await act(async () => {
      fireEvent.click(monthNode[index]);
    });

    const today = document.querySelector(`.${rootClass}-today`);
    expect(today.innerHTML).toBe('今天');
  });

  it('should render week item by `weekRender` property', async () => {
    const fakeWeekItemRender = jest.fn((item) => (
      <span className="week-custom-item" key={item}>
        周{item}
      </span>
    ));
    const { container, getAllByText } = render(
      <DesktopDatePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        CalendarProps={{
          weekRender: fakeWeekItemRender,
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      fireEvent.click(getAllByText(dayjs('20230401').format('YYYY'))[0]);
    });
    await act(async () => {
      fireEvent.click(getAllByText('4')[0]);
    });
    const weekItems = document.querySelectorAll('.week-custom-item');
    expect(fakeWeekItemRender).toBeCalledTimes(7);
    expect(weekItems.length).toBe(7);
  });

  it('should be called when change prev month', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      fireEvent.click(getAllByText(dayjs('20230602').format('YYYY'))[0]);
    });
    const btns = document.querySelectorAll(`.bui-date-picker-handler-btn`);
    await act(async () => {
      fireEvent.click(btns[0]);
    });
    expect(
      document.querySelector('.bui-date-picker-handler-text'),
    ).toHaveTextContent('2023/05');
  });

  it('should be called when change next month', async () => {
    const { container, getAllByText } = render(
      <DesktopDatePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}`));
    });
    await act(async () => {
      fireEvent.click(getAllByText(dayjs('20230602').format('YYYY'))[0]);
    });
    const btns = document.querySelectorAll(`.bui-date-picker-handler-btn`);
    await act(async () => {
      fireEvent.click(btns[1]);
    });
    expect(
      document.querySelector('.bui-date-picker-handler-text'),
    ).toHaveTextContent('2023/07');
  });
});
