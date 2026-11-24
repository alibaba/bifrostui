import dayjs from 'dayjs';
import React, { act } from 'react';
import { fireEvent, isConformant, render, userEvent } from 'testing';
import { DesktopDateTimePicker } from '..';

// 辅助函数：创建延迟Promise
const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function findElementByInnerHTML(parent, targetHTML) {
  // 检查当前元素的 innerHTML 是否匹配
  if (parent.innerHTML === targetHTML) {
    return parent;
  }
  // 遍历子节点
  for (let i = 0; i < parent.children.length; i += 1) {
    const found = findElementByInnerHTML(parent.children[i], targetHTML);
    if (found) {
      return found;
    }
  }

  // 如果没有找到匹配的元素，返回 null
  return null;
}

describe('DesktopDateTimePicker', () => {
  const rootClass = 'bui-datetime-picker';

  isConformant({
    classNames: rootClass,
    displayName: 'BUIDesktopDateTimePicker',
    Component: DesktopDateTimePicker,
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

  it('should no container when disabled', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        disabled
      />,
    );

    // 等待组件渲染完成
    await act(async () => {
      await delay(50);
    });

    // 检查图标元素是否存在且可点击
    const iconElement = container.querySelector(`.${rootClass}-icon`);
    if (iconElement && !iconElement.hasAttribute('disabled')) {
      await act(async () => {
        try {
          await userEvent.click(iconElement);
        } catch (error) {
          // 忽略指针交互错误，因为元素可能被禁用
        }
      });
    }

    expect(
      document.getElementsByClassName('bui-d-date-picker-lay-main').length,
    ).toBe(0);
  });
  it('should no container when disableOpenPicker', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        disableOpenPicker
      />,
    );

    // 等待组件渲染完成
    await act(async () => {
      await delay(50);
    });

    // 检查图标元素是否存在且可点击
    const iconElement = container.querySelector(`.${rootClass}-icon`);
    if (iconElement && !iconElement.hasAttribute('disabled')) {
      await act(async () => {
        try {
          await userEvent.click(iconElement);
        } catch (error) {
          // 忽略指针交互错误，因为元素可能被禁用
        }
      });
    }

    expect(
      document.getElementsByClassName('bui-d-date-picker-lay-main').length,
    ).toBe(0);
  });
  it('should no container when readOnly and disableOpenPicker', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        inputProps={{
          readOnly: true,
        }}
        disableOpenPicker
      />,
    );

    // 等待组件渲染完成
    await act(async () => {
      await delay(50);
    });

    // 检查输入元素是否存在且可点击
    const inputElement = container.querySelector(`.${rootClass}-input`);
    if (inputElement && !inputElement.hasAttribute('disabled')) {
      await act(async () => {
        try {
          await userEvent.click(inputElement);
        } catch (error) {
          // 忽略指针交互错误，因为元素可能被禁用
        }
      });
    }

    expect(
      document.getElementsByClassName('bui-d-date-picker-lay-main').length,
    ).toBe(0);
  });
  it('should show placeholder when value is null', async () => {
    render(
      <DesktopDateTimePicker
        value={null}
        placeholder="YYYY-MM-DD"
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'YYYY-MM-DD',
    );
  });
  it('should show placeholder is YYYY/MM/DD when placeholder is null', async () => {
    render(
      <DesktopDateTimePicker
        value={null}
        placeholder={null}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'YYYY/MM/DD HH:mm:ss',
    );
  });
  it('should show placeholder is YYYY-MM-DD when format is YYYY-MM-DD', async () => {
    render(
      <DesktopDateTimePicker
        value={null}
        placeholder={null}
        format="YYYY-MM-DD"
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'YYYY-MM-DD',
    );
  });
  it('should render date range in minDate to maxDate', async () => {
    const dateChange = vi.fn((e, res) => {
      return dayjs(res.value).format('YYYYMMDD');
    });
    const { container } = render(
      <DesktopDateTimePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230429').toDate()}
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    // 切换到年份选择面板
    const yearText = document.getElementsByClassName(
      'bui-d-date-picker-lay-title-text',
    )[0];
    await act(async () => {
      fireEvent.click(yearText);
    });
    // 点击active年份
    const yearActive = document.getElementsByClassName(
      'bui-d-date-picker-lay-col-active',
    )[0];
    await act(async () => {
      fireEvent.click(yearActive);
    });
    expect(dateChange).toBeCalled();

    // 点击active月份
    const monthActive = document.getElementsByClassName(
      'bui-d-date-picker-lay-col-active',
    )[0];

    // 使用示例：从 document.body 开始查找
    const targetHTML =
      '<span class="bui-d-date-picker-lay-col-text">5月</span>';
    const element = findElementByInnerHTML(
      document.body,
      targetHTML,
    ).parentElement;

    expect(element).toHaveClass('bui-d-date-picker-lay-col-disabled');
    await act(async () => {
      fireEvent.click(monthActive);
    });

    const disabledDayLength = document.getElementsByClassName(
      'bui-calendar-disabled',
    ).length;
    expect(disabledDayLength).toBe(13);
    const day = document.getElementsByClassName('bui-calendar-day');
    await act(async () => {
      fireEvent.click(day[8]);
    });
    expect(dateChange).toReturnWith('20230403');
  });
  it('should 2024 year', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        views={['year', 'hour', 'minute', 'second']}
        format="YYYY"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20250529').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    await act(async () => {
      fireEvent.click(
        document.getElementsByClassName('bui-d-date-picker-lay-col')[4],
      );
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-datetime-picker-input`,
    );
    expect(contentNodes?.value).toBe('2024');
  });

  it('should 2023/05 month', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        views={['month', 'hour', 'minute', 'second']}
        format="YYYY/MM"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20250529').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    await act(async () => {
      fireEvent.click(
        document.getElementsByClassName('bui-d-date-picker-lay-col')[4],
      );
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-datetime-picker-input`,
    );
    expect(contentNodes?.value).toBe('2023/05');
  });
  it('node length should be 30', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        value={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230529').toDate()}
        CalendarProps={{
          hideDaysOutsideCurrentMonth: true,
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const elements = document.getElementsByClassName('bui-calendar-day');
    const enableDayNodes = [...elements].filter((item) => item.innerHTML);
    expect(enableDayNodes.length).toBe(30);
  });

  it('should render disabled year by `disabledDate` property', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        views={['year', 'hour', 'minute', 'second']}
        format="YYYY"
        defaultValue={dayjs('20230401').toDate()}
        minDate={dayjs('20200401').toDate()}
        maxDate={dayjs('20230529').toDate()}
        inputProps={{
          readOnly: true,
        }}
        disabledDate={(current) =>
          ['2021'].includes(dayjs(current).format('YYYY'))
        }
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });

    // 等待弹出层渲染
    await delay(100);

    const allNodes = document.getElementsByClassName(
      'bui-d-date-picker-lay-col',
    );
    expect(allNodes[1]).toHaveClass(
      'bui-d-date-picker-lay-col bui-d-date-picker-lay-col-disabled',
    );
  });

  it('should render disabled date by `disabledDate` property', async () => {
    const { container } = render(
      <DesktopDateTimePicker
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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const dayNodes = document.querySelectorAll(`.bui-calendar-day`);
    const disableDayNodes = [...dayNodes].filter(
      (item) => item.className.includes('disable') && item.innerHTML,
    );
    expect(disableDayNodes.length).toBe(2);
    expect(disableDayNodes[0]).toHaveTextContent('2');
    expect(disableDayNodes[1]).toHaveTextContent('13');
  });

  it('should render 今年 date', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        views={['year', 'hour', 'minute', 'second']}
        value={dayjs().toDate()}
        yearRender={(data) => {
          return (
            <span className="test-render-year">
              {dayjs().format('YYYY') === String(data.year)
                ? '今年'
                : data.year}
            </span>
          );
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const today = document.querySelector(`.test-render-year`);
    expect(today.innerHTML).toBe('今年');
  });
  it('should render 本月 date', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        minDate={dayjs().startOf('month').toDate()}
        maxDate={dayjs().endOf('month').toDate()}
        views={['month', 'hour', 'minute', 'second']}
        value={dayjs().toDate()}
        monthRender={(data) => {
          if (String(dayjs().format('M')) === String(data.month)) {
            return <span className="test-render-current-month">本月</span>;
          }
          return <span className="test-render-month">{data.month}</span>;
        }}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const today = document.querySelector(`.test-render-current-month`);
    expect(today.innerHTML).toBe('本月');
  });
  it('should render 今天 today date', async () => {
    const { container } = render(
      <DesktopDateTimePicker
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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const today = document.querySelector(`.${rootClass}-today`);
    expect(today.innerHTML).toBe('今天');
  });

  it('should be called when change prev month', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const btns = document.getElementsByClassName(
      `bui-d-date-picker-lay-handler-btn`,
    );
    await act(async () => {
      fireEvent.click(btns[0]);
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-datetime-picker-input`,
    );
    expect(contentNodes?.value).toBe('2023/05/02 00:00:00');
  });

  it('should be called when change next month', async () => {
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });

    // 等待弹出层渲染
    await delay(100);

    const btns = document.getElementsByClassName(
      `bui-d-date-picker-lay-handler-btn`,
    );
    await act(async () => {
      fireEvent.click(btns[1]);
    });
    const contentNodes: HTMLInputElement = container.querySelector(
      `.bui-datetime-picker-input`,
    );
    expect(contentNodes?.value).toBe('2023/07/02 00:00:00');
  });

  it('should be called when change input', async () => {
    const dateChange = vi.fn((e, res: { value }) => {
      return dayjs(res.value).format('YYYY/MM/DD');
    });
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        placeholder="YYYY/MM/DD"
        disabledDate={(current) =>
          ['2023/04/02', '2023/04/06'].includes(
            dayjs(current).format('YYYY/MM/DD'),
          )
        }
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });
    const inputDom = document.getElementsByClassName(
      'bui-datetime-picker-input',
    )[0];
    fireEvent.change(inputDom, { target: { value: '2023/07/03 00:00:00' } });
    fireEvent.blur(inputDom);
    expect(dateChange).toBeCalled();
  });
  it('should be not change when change disabledDate and value is notValid', async () => {
    const dateChange = vi.fn((e, res) => {
      return dayjs(res.value).format('YYYY/MM/DD');
    });
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        placeholder="YYYY/MM/DD"
        disabledDate={(current) =>
          ['2023/04/02'].includes(dayjs(current).format('YYYY/MM/DD'))
        }
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });
    const inputDom = document.getElementsByClassName(
      'bui-datetime-picker-input',
    )[0];
    fireEvent.change(inputDom, { target: { value: '123' } });
    fireEvent.blur(inputDom);
    fireEvent.change(inputDom, { target: { value: '2023/04/02' } });
    fireEvent.blur(inputDom);
    expect(dateChange).not.toHaveBeenCalled();
  });
  it('should be maxValue when change input is more than maxValue', async () => {
    const dateChange = vi.fn((e, res) => {
      return dayjs(res.value).format('YYYYMMDD');
    });
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        placeholder="YYYY/MM/DD"
        disabledDate={(current) =>
          ['2023/04/02'].includes(dayjs(current).format('YYYY/MM/DD'))
        }
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });
    const inputDom = document.getElementsByClassName(
      'bui-datetime-picker-input',
    )[0];
    fireEvent.change(inputDom, { target: { value: '2040/04/02 00:00:00' } });
    fireEvent.blur(inputDom);
    expect(dateChange).toReturnWith('20231001');
  });
  it('should be minValue when change input is more than minValue', async () => {
    const dateChange = vi.fn((e, res) => {
      return dayjs(res.value).format('YYYYMMDD');
    });
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        placeholder="YYYY/MM/DD"
        disabledDate={(current) =>
          ['2023/04/02'].includes(dayjs(current).format('YYYY/MM/DD'))
        }
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });
    const inputDom = document.getElementsByClassName(
      'bui-datetime-picker-input',
    )[0];
    fireEvent.change(inputDom, { target: { value: '2010/04/02 00:00:00' } });
    fireEvent.blur(inputDom);
    expect(dateChange).toReturnWith('20230401');
  });
  it('should be null when change input is null', async () => {
    const dateChange = vi.fn((e, res) => {
      return res.value;
    });
    const { container } = render(
      <DesktopDateTimePicker
        defaultValue={dayjs('20230602').toDate()}
        minDate={dayjs('20230401').toDate()}
        maxDate={dayjs('20231001').toDate()}
        placeholder="YYYY/MM/DD"
        disabledDate={(current) =>
          ['2023/04/02'].includes(dayjs(current).format('YYYY/MM/DD'))
        }
        onChange={dateChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-input`));
    });
    const inputDom = document.getElementsByClassName(
      'bui-datetime-picker-input',
    )[0];
    fireEvent.change(inputDom, { target: { value: '' } });
    fireEvent.blur(inputDom);
    expect(dateChange).toReturnWith(null);
  });
});
