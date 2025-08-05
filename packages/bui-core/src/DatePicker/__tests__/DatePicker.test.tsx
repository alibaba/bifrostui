import React from 'react';
import { act, fireEvent, isConformant, render } from 'testing';
import DatePicker, { DatePickerOption } from '..';
import DatePickerType from '../constants';

const rootClass = 'bui-date-picker';
const currentDate = new Date(2025, 1, 26);
const minDate = new Date(2020, 7, 10);
const maxDate = new Date(2030, 4, 5);

function swipeUp(panel, roller) {
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
}

function createCaseByPickerType() {
  const expectValues = {
    [DatePickerType.YEAR]: new Date(2026, 1, 26),
    [DatePickerType.MONTH]: new Date(2025, 2, 26),
    [DatePickerType.DAY]: new Date(2025, 1, 27),
    [DatePickerType.HOUR]: new Date(2025, 1, 26, 1),
    [DatePickerType.MINUTE]: new Date(2025, 1, 26, 0, 1),
    [DatePickerType.SECOND]: new Date(2025, 1, 26, 0, 0, 1),
  };

  Object.values(DatePickerType).forEach((type) => {
    it(`should call onChange when the ${type} option is changed`, async () => {
      const onChange = vi.fn();
      render(
        <DatePicker
          open
          defaultValue={currentDate}
          views={[type]}
          onChange={onChange}
        />,
      );

      await act(async () => {
        await vi.runAllTimers();
      });

      const panel = document.querySelector('.bui-picker-panel');
      const roller = document.querySelector('.bui-picker-panel-roller');

      swipeUp(panel, roller);
      expect(onChange).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          value: expectValues[type],
        }),
      );
    });
  });
}

describe('DatePicker', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  isConformant({
    className: rootClass,
    displayName: 'BuiDatePicker',
    Component: DatePicker,
    requiredProps: {
      open: true,
    },
    getTargetElement: () => {
      return document.querySelector(`.${rootClass}`);
    },
  });

  createCaseByPickerType();

  it('should render correctly', () => {
    render(<DatePicker open />);
    expect(document.querySelector(`.${rootClass}`)).toBeInTheDocument();
    expect(
      document.querySelector('.bui-picker-panel-option'),
    ).toBeInTheDocument();
  });

  it('should render with default views', () => {
    render(<DatePicker open />);
    expect(document.querySelectorAll('.bui-picker-panel').length).toBe(3);
    expect(
      document.querySelector('.bui-picker-panel-option'),
    ).toBeInTheDocument();
  });

  it('should render with custom views', () => {
    render(
      <DatePicker
        open
        views={[
          DatePickerType.YEAR,
          DatePickerType.MONTH,
          DatePickerType.DAY,
          DatePickerType.HOUR,
          DatePickerType.MINUTE,
          DatePickerType.SECOND,
        ]}
      />,
    );
    expect(document.querySelectorAll('.bui-picker-panel').length).toBe(6);
    expect(
      document.querySelector('.bui-picker-panel-option'),
    ).toBeInTheDocument();
  });

  it('should render with minDate and maxDate', () => {
    render(
      <DatePicker
        open
        defaultValue={currentDate}
        minDate={minDate}
        maxDate={maxDate}
      />,
    );
    const panels = document.querySelectorAll('.bui-picker-panel');
    const options = panels[0].querySelectorAll('.bui-picker-panel-option');
    expect(panels.length).toBe(3);
    expect(options[0].textContent).toBe('2020');
    expect(options[options.length - 1].textContent).toBe('2030');
  });

  it('should call onConfirm when confirm button is clicked', () => {
    const onConfirm = vi.fn();
    render(
      <DatePicker open defaultValue={currentDate} onConfirm={onConfirm} />,
    );
    const confirmButton = document.querySelector('.bui-picker-confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        value: currentDate,
      }),
    );
  });

  it('should call onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<DatePicker open defaultValue={currentDate} onClose={onClose} />);
    const closeButton = document.querySelector('.bui-picker-cancel');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        value: currentDate,
      }),
    );
  });

  it('should render with disabled options', () => {
    const disableDateTimeView = {
      [DatePickerType.YEAR]: (values) =>
        values.filter((value) => value === 2025),
    };
    render(<DatePicker open disableDateTimeView={disableDateTimeView} />);
    const hiddenOption = document.querySelector(
      '.bui-picker-panel-option-disabled',
    );
    expect(hiddenOption).not.toBeNull();
    expect(hiddenOption.textContent).toBe('2025');
  });

  it('should render with dateTimeStep', () => {
    const dateTimeStep = {
      [DatePickerType.YEAR]: 2,
    };
    render(<DatePicker open dateTimeStep={dateTimeStep} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    const options = panels[0].querySelectorAll('.bui-picker-panel-option');
    expect(
      Number(options[0].textContent) - Number(options[1].textContent),
    ).toBe(-2);
  });

  it('should render with formatter', () => {
    const formatter = (type, option) => {
      if (type === DatePickerType.YEAR) {
        return {
          ...option,
          label: `${option.label}年`,
        };
      }
      return option;
    };
    render(
      <DatePicker
        open
        minDate={minDate}
        maxDate={maxDate}
        formatter={formatter}
      />,
    );
    const panels = document.querySelectorAll('.bui-picker-panel');
    const options = panels[0].querySelectorAll('.bui-picker-panel-option');
    expect(options[0].textContent).toBe('2020年');
  });

  it('should handle invalid date value', () => {
    const invalidDate = new Date('invalid');
    const onConfirm = vi.fn();
    render(
      <DatePicker
        open
        minDate={minDate}
        maxDate={maxDate}
        value={invalidDate}
        onConfirm={onConfirm}
      />,
    );
    const confirmButton = document.querySelector('.bui-picker-confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        value: minDate,
      }),
    );
  });

  it('should handle date value less than minDate', () => {
    const dateBeforeMinDate = new Date(minDate.getFullYear() - 1, 0, 1);
    const onConfirm = vi.fn();
    render(
      <DatePicker
        open
        value={dateBeforeMinDate}
        minDate={minDate}
        onConfirm={onConfirm}
      />,
    );
    const confirmButton = document.querySelector('.bui-picker-confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        value: minDate,
      }),
    );
  });

  it('should handle date value greater than maxDate', () => {
    const dateAfterMaxDate = new Date(maxDate.getFullYear() + 1, 0, 1);
    const onConfirm = vi.fn();
    render(
      <DatePicker
        open
        value={dateAfterMaxDate}
        maxDate={maxDate}
        onConfirm={onConfirm}
      />,
    );
    const confirmButton = document.querySelector('.bui-picker-confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        value: maxDate,
      }),
    );
  });

  it('should adjust the date if it exceeds the max day of the new month', () => {
    const date = new Date(2025, 0, 31);
    const onChange = vi.fn();
    render(
      <DatePicker
        open
        defaultValue={date}
        maxDate={maxDate}
        onChange={onChange}
      />,
    );

    const panels = document.querySelectorAll('.bui-picker-panel');
    const rollers = document.querySelectorAll('.bui-picker-panel-roller');

    swipeUp(panels[1], rollers[1]);
    expect(onChange).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        type: DatePickerType.MONTH,
        value: new Date(2025, 1, 28),
      }),
    );
  });

  it('should render with showUnit', () => {
    render(<DatePicker open showUnit minDate={minDate} maxDate={maxDate} />);
    const panels = document.querySelectorAll('.bui-picker-panel');
    const options = panels[0].querySelectorAll('.bui-picker-panel-option');
    expect(panels.length).toBe(3);
    expect(options[0].textContent).toBe('2020年');
  });

  it('should render with filter', () => {
    render(
      <DatePicker
        open
        views={[DatePickerType.HOUR]}
        filter={(type: DatePickerType, options: DatePickerOption[]) => {
          switch (type) {
            case DatePickerType.HOUR:
              return options.filter((option) => option.value % 2 === 0);
            default:
              return options;
          }
        }}
      />,
    );
    const panels = document.querySelectorAll('.bui-picker-panel');
    const options = panels[0].querySelectorAll('.bui-picker-panel-option');
    expect(options[1].textContent).toBe('02');
  });

  it('show throw error when views is invalid', () => {
    expect(() => {
      render(<DatePicker open views={['invalid' as DatePickerType]} />);
    }).toThrowError('错误的picker类型：invalid');
  });
});
