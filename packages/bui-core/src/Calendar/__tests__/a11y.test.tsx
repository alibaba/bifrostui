import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '../Calendar';

describe('Calendar Accessibility', () => {
  it('Calendar role should be "application"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    expect(calendar).toHaveAttribute('role', 'application');
  });

  it('Calendar aria-label should be "Calendar"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    expect(calendar).toHaveAttribute('aria-label', 'Calendar');
  });

  it('Calendar prev month button role should be "button"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[0]).toHaveAttribute('role', 'button');
  });

  it('Calendar prev month button aria-label should be "prev month"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[0]).toHaveAttribute('aria-label', 'prev month');
  });

  it('Calendar prev month button tabindex should be "0"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[0]).toHaveAttribute('tabindex', '0');
  });

  it('Calendar next month button role should be "button"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[1]).toHaveAttribute('role', 'button');
  });

  it('Calendar next month button aria-label should be "next month"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[1]).toHaveAttribute('aria-label', 'next month');
  });

  it('Calendar next month button tabindex should be "0"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerBtns = calendarHandler.querySelectorAll(
      '.bui-calendar-handler-btn',
    );
    expect(handlerBtns[1]).toHaveAttribute('tabindex', '0');
  });

  it('Calendar handler text aria-live should be "polite"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarHandler = calendar.querySelector('.bui-calendar-handler');
    const handlerText = calendarHandler.querySelector(
      '.bui-calendar-handler-text',
    );
    expect(handlerText).toHaveAttribute('aria-live', 'polite');
  });

  it('Calendar week role should be "row"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarWeek = calendar.querySelector('.bui-calendar-week');
    expect(calendarWeek).toHaveAttribute('role', 'row');
  });

  it('Calendar week item role should be "columnheader"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarWeek = calendar.querySelector('.bui-calendar-week');
    const weekItems = calendarWeek.querySelectorAll('.bui-calendar-week-item');
    weekItems.forEach((weekItem) => {
      expect(weekItem).toHaveAttribute('role', 'columnheader');
    });
  });

  it('Calendar week item aria-colindex should be a number', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarWeek = calendar.querySelector('.bui-calendar-week');
    const weekItems = calendarWeek.querySelectorAll('.bui-calendar-week-item');
    weekItems.forEach((weekItem, index) => {
      expect(weekItem).toHaveAttribute('aria-colindex', `${index + 1}`);
    });
  });

  it('Calendar day role should be "gridcell"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarMonth = calendar.querySelector('.bui-calendar-month');
    const days = calendarMonth.querySelectorAll('.bui-calendar-day-box');
    days.forEach((day) => {
      if (day.getAttribute('aria-disabled') === 'true') {
        expect(day).toHaveAttribute('role', 'gridcell');
      }
    });
  });

  it('Calendar day aria-disabled="true" should not have tabindex="-1"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarMonth = calendar.querySelector('.bui-calendar-month');
    const days = calendarMonth.querySelectorAll('.bui-calendar-day-box');
    days.forEach((day) => {
      if (day.getAttribute('aria-disabled') === 'true') {
        expect(day).toHaveAttribute('tabindex', '-1');
      }
    });
  });

  it('Calendar day aria-disabled="true" should not have tabindex="-1"', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector('.bui-calendar');
    const calendarMonth = calendar.querySelector('.bui-calendar-month');
    const days = calendarMonth.querySelectorAll('.bui-calendar-day-box');
    days.forEach((day) => {
      if (day.getAttribute('aria-disabled') === 'false') {
        expect(day).toHaveAttribute('tabindex', '0');
      }
    });
  });
});
