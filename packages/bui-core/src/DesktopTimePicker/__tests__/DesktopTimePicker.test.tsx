import dayjs from 'dayjs';
import React, { act } from 'react';
import { fireEvent, isConformant, render, userEvent } from 'testing';
import { DesktopTimePicker } from '..';

const rootClass = 'bui-desktop-time-picker';

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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });
    expect(document.getElementsByClassName(`${rootClass}-main`).length).toBe(0);
  });

  it('should not show container when disableOpenPicker', async () => {
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        disableOpenPicker
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
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
    const onChange = jest.fn();
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
        minTime={dayjs('2023-04-01T08:00:00').toDate()}
        maxTime={dayjs('2023-04-01T18:00:00').toDate()}
        onChange={onChange}
      />,
    );
    await act(async () => {
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });
    const hourList = document.getElementsByClassName(
      `${rootClass}-table-hour-ul`,
    );
    fireEvent.click(hourList[0].children[10]);
    expect(onChange).toHaveBeenCalled();
  });

  it('should not change value when input is invalid', async () => {
    const onChange = jest.fn();
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

  it('should set value to null when input is empty', async () => {
    const onChange = jest.fn((e, res) => res.value);
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
    const onChange = jest.fn((e, res) => dayjs(res.value).format('HH:mm:ss'));
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
    const onChange = jest.fn((e, res) => dayjs(res.value).format('HH:mm:ss'));
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
    const onChange = jest.fn();
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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });
    const meridiemList = document.getElementsByClassName(
      `${rootClass}-table-meridiem-ul`,
    );
    fireEvent.click(meridiemList[0].children[1]);
    expect(onChange).toHaveBeenCalled();
  });

  it('should handle disabled times correctly', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <DesktopTimePicker
        value={dayjs('2023-04-01T08:00:00').toDate()}
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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });
    const hourList = document.getElementsByClassName(
      `${rootClass}-table-hour-ul`,
    );
    fireEvent.click(hourList[0].children[8]); // 8
    fireEvent.click(hourList[0].children[9]); // 9
    const secondList = document.getElementsByClassName(
      `${rootClass}-table-second-ul`,
    );
    fireEvent.click(secondList[0].children[0]); // 0
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
      userEvent.click(container.querySelector(`.${rootClass}-icon`));
    });
    const customTimeCells = document.getElementsByClassName('custom-time');
    expect(customTimeCells.length).toBeGreaterThan(0);
  });
});
