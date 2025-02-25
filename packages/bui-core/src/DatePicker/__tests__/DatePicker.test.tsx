import React from 'react';
import { act, fireEvent, render } from 'testing';
import DatePicker, { DatePickerType } from '..';

describe('DatePicker', () => {
  const rootClass = '.bui-date-picker';
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear() - 10, 0, 1);
  const maxDate = new Date(currentDate.getFullYear() + 10, 11, 31);

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<DatePicker open />);
    expect(document.querySelector(rootClass)).toBeInTheDocument();
  });

  it('should render with default views', () => {
    render(<DatePicker open />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should render with custom views', () => {
    render(
      <DatePicker
        open
        views={[DatePickerType.YEAR, DatePickerType.MONTH, DatePickerType.DAY]}
      />,
    );
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should render with minDate and maxDate', () => {
    render(<DatePicker open minDate={minDate} maxDate={maxDate} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should call onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    render(<DatePicker open onConfirm={onConfirm} />);
    const confirmButton = document.querySelector('.bui-picker-confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });

  it('should call onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<DatePicker open onClose={onClose} />);
    const closeButton = document.querySelector('.bui-picker-cancel');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('should call onChange when option is changed', async () => {
    const onChange = jest.fn();
    render(<DatePicker open onChange={onChange} />);

    await act(async () => {
      await jest.runAllTimers();
    });

    const [panel] = document.querySelectorAll('.bui-picker-panel');
    const [roller] = document.querySelectorAll('.bui-picker-panel-roller');
    fireEvent.touchStart(panel, {
      touches: [
        {
          clientX: 0,
          clientY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(panel, {
      touches: [
        {
          clientX: 0,
          clientY: -36,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.transitionEnd(roller);

    expect(onChange).toHaveBeenCalled();
  });

  it('should render with disabled options', () => {
    const disableDateTimeView = {
      [DatePickerType.YEAR]: (options) => options.slice(0, 5),
    };
    render(<DatePicker open disableDateTimeView={disableDateTimeView} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should render with dateTimeStep', () => {
    const dateTimeStep = {
      [DatePickerType.YEAR]: 2,
    };
    render(<DatePicker open dateTimeStep={dateTimeStep} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should render with formatter', () => {
    const formatter = (type, option) => ({
      ...option,
      label: `${option.label}年`,
    });
    render(<DatePicker open formatter={formatter} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });

  it('should handle invalid date value', () => {
    const invalidDate = new Date('invalid');
    render(<DatePicker open value={invalidDate} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    expect(panels.length).toBe(3);
  });
});
