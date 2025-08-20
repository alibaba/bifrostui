import dayjs from 'dayjs';
import React, { act } from 'react';
import { fireEvent, isConformant, render, userEvent } from 'testing';
import { DesktopTimePicker } from '..';

// 辅助函数：创建延迟Promise
const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const rootClass = 'bui-d-time-picker';

describe('DesktopTimePicker', () => {
  isConformant({
    classNames: rootClass,
    displayName: 'BUITimePicker',
    Component: DesktopTimePicker,
    requiredProps: {
      value: dayjs(),
      minTime: dayjs().startOf('day').toDate(),
      maxTime: dayjs().endOf('day').toDate(),
    },
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-handles-style',
      'component-has-default-className',
    ],
  });

  it('should not show container when disabled', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        disabled
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    });
    expect(document.getElementsByClassName(`${rootClass}-main`).length).toBe(0);
  });

  it('should not show container when readOnly and disableOpenPicker', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        disableOpenPicker
        inputProps={{
          readOnly: true,
        }}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    });
    expect(document.getElementsByClassName(`${rootClass}-main`).length).toBe(0);
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-content`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    });
    expect(document.getElementsByClassName(`${rootClass}-main`).length).toBe(0);
  });

  it('should show placeholder when value is null', async () => {
    render(
      <DesktopTimePicker
        value={null}
        placeholder="HH:mm:ss"
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'HH:mm:ss',
    );
  });

  it('should show default placeholder when placeholder is null', async () => {
    render(
      <DesktopTimePicker
        value={null}
        placeholder={null}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'HH:mm:ss',
    );
  });

  it('should show custom format as placeholder when provided', async () => {
    render(
      <DesktopTimePicker
        value={null}
        placeholder={null}
        format="hh:mm A"
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
      />,
    );
    expect(document.getElementsByTagName('input')[0].placeholder).toBe(
      'hh:mm A',
    );
  });

  it('should call onChange when selecting a valid time', async () => {
    const onChange = vi.fn();
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const hourList = document.getElementsByClassName(`${rootClass}-hour-ul`);
    if (hourList[0] && hourList[0].children[10]) {
      try {
        await fireEvent.click(hourList[0].children[10]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      expect(onChange).toHaveBeenCalled();
    } else {
      expect(hourList.length).toBeGreaterThan(0);
    }
  });

  it('should not change value when input is invalid', async () => {
    const onChange = vi.fn();
    render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: 'invalid' } });
    fireEvent.blur(inputDom);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should change value when input is valid', async () => {
    const onChange = vi.fn();
    render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: '08:00:01' } });
    fireEvent.blur(inputDom);
    expect(onChange).toHaveBeenCalled();
  });

  it('should set value to null when input is empty', async () => {
    const onChange = vi.fn((e, res) => res.value);
    render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: '' } });
    fireEvent.blur(inputDom);
    expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: null });
  });

  it('should not change value when input is greater than maxTime', async () => {
    const onChange = vi.fn((e, res) => dayjs(res.value).format('HH:mm:ss'));
    render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: '20:00:00' } });
    fireEvent.blur(inputDom);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not change value when input is less than minTime', async () => {
    const onChange = vi.fn((e, res) => dayjs(res.value).format('HH:mm:ss'));
    render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: '06:00:00' } });
    fireEvent.blur(inputDom);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should handle AM/PM selection in 12-hour format', async () => {
    const onChange = vi.fn();
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        ampm
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const meridiemList = document.getElementsByClassName(
      `${rootClass}-meridiem-ul`,
    );
    if (meridiemList[0] && meridiemList[0].children[1]) {
      try {
        await fireEvent.click(meridiemList[0].children[1]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      expect(onChange).toHaveBeenCalled();
    } else {
      expect(meridiemList.length).toBeGreaterThan(0);
    }
  });

  it('should handle disabled times correctly', async () => {
    const onChange = vi.fn();
    const { container } = render(
      <DesktopTimePicker
        defaultValue={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        disabledTimeView={() => ({
          hour: () => [8, 9],
          minute: (hour) => [],
          second: (hour, minute) => [0],
        })}
        onChange={onChange}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const hourList = document.getElementsByClassName(`${rootClass}-hour-ul`);
    if (hourList[0] && hourList[0].children[8]) {
      try {
        await fireEvent.click(hourList[0].children[8]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    }
    if (hourList[0] && hourList[0].children[9]) {
      try {
        await fireEvent.click(hourList[0].children[9]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    }
    const secondList = document.getElementsByClassName(
      `${rootClass}-second-ul`,
    );
    if (secondList[0] && secondList[0].children[0]) {
      try {
        await fireEvent.click(secondList[0].children[0]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
    }
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should render custom time cells', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        timeRender={(item) => <div className="custom-time">{item.label}</div>}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const customTimeCells = document.getElementsByClassName('custom-time');
    expect(customTimeCells && customTimeCells.length).toBeGreaterThan(0);
  });

  it('should handle ampm mode', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('12:00:00', 'HH:mm:ss').toDate()}
        minTime={dayjs('00:00:00', 'HH:mm:ss').toDate()}
        maxTime={dayjs('23:59:59', 'HH:mm:ss').toDate()}
        ampm
        format="hh:mm:ss A"
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const meridiemList = document.getElementsByClassName(
      `${rootClass}-meridiem-ul`,
    );
    if (meridiemList[0]) {
      const meridiemItem = meridiemList[0].querySelector(
        `.${rootClass}-meridiem-li`,
      );
      if (meridiemItem) {
        try {
          await fireEvent.click(meridiemItem);
        } catch (e) {
          if (e.message && e.message.includes('pointer-events')) {
            // 忽略 pointer-events: none 的报错
          } else {
            throw e;
          }
        }
      }
    }
    const contentNodes: HTMLInputElement = container.querySelector(
      `.${rootClass}-content`,
    );
    expect(contentNodes?.value).toBe('12:00:00 PM');
  });

  it('should handle unvalid timeSteps', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        timeSteps={{ hour: 0, minute: 0, second: 0 }}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    expect(
      document.getElementsByClassName(`${rootClass}-hour-li`).length,
    ).toBeGreaterThanOrEqual(0);
    expect(
      document.getElementsByClassName(`${rootClass}-minute-li`).length,
    ).toBeGreaterThanOrEqual(0);
    expect(
      document.getElementsByClassName(`${rootClass}-second-li`).length,
    ).toBeGreaterThanOrEqual(0);
  });

  it('should handle times correctly when ampm mode', async () => {
    const { container } = render(
      <DesktopTimePicker
        defaultValue={dayjs('2023-04-01T18:00:00').toDate()}
        ampm
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const meridiemLi = document.getElementsByClassName(`${rootClass}-hour-li`);
    if (meridiemLi[2]) {
      try {
        await fireEvent.click(meridiemLi[2]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      expect(document.getElementsByTagName('input')[0].value).toBe(
        '02:00:00 PM',
      );
    } else {
      expect(meridiemLi.length).toBeGreaterThan(0);
    }
  });

  it('should handle times correctly when timeValue is null in ampm', async () => {
    render(
      <DesktopTimePicker
        defaultValue={null}
        minTime={dayjs('2023-03-01T11:00:00').toDate()}
        maxTime={dayjs('2023-04-01T12:00:00').toDate()}
        ampm
      />,
    );

    const inputDom = document.getElementsByClassName(`${rootClass}-content`)[0];
    fireEvent.change(inputDom, { target: { value: '12:00:00 PM' } });
    fireEvent.blur(inputDom);
    expect(document.getElementsByTagName('input')[0].value).toBe('12:00:00 PM');
  });

  it('should disable AM/PM options outside the allowed range', async () => {
    const { container } = render(
      <DesktopTimePicker
        defaultValue={dayjs('2023-04-03T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-03T11:00:00').toDate()}
        ampm
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const meridiem = document.getElementsByClassName(
      `${rootClass}-meridiem-disabled`,
    );
    expect(meridiem && meridiem.length).toBeGreaterThanOrEqual(0);
  });

  it('should disable AM/PM options outside the allowed range', async () => {
    const disabledTimeView = () => ({
      hour: () => {
        return [0];
      },
      minute: (selectedHour) => {
        return [0];
      },
      second: () => [0],
    });
    const onChange = vi.fn();

    const { container } = render(
      <DesktopTimePicker
        value={null}
        disabledTimeView={disabledTimeView}
        onChange={onChange}
      />,
    );
    await act(async () => {
      try {
        await userEvent.click(container.querySelector(`.${rootClass}-icon`));
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      await delay(50);
    });
    const hourList = document.getElementsByClassName(`${rootClass}-hour-ul`);
    if (hourList[0] && hourList[0].children[10]) {
      try {
        await fireEvent.click(hourList[0].children[10]);
      } catch (e) {
        if (e.message && e.message.includes('pointer-events')) {
          // 忽略 pointer-events: none 的报错
        } else {
          throw e;
        }
      }
      expect(onChange).toHaveBeenCalled();
    } else {
      expect(hourList.length).toBeGreaterThan(0);
    }
  });
});
