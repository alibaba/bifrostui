import React from 'react';
import { render, userEvent, screen } from 'testing';
import dayjs from 'dayjs/esm/index';
import {
  ThemeProvider,
  Calendar,
  EN,
  CN,
  TW,
  Dialog,
  Button,
} from '@bifrostui/react';
import { renderHook } from '@testing-library/react';

describe('ThemeProvider', () => {
  let dialogHook;
  beforeEach(() => {
    renderHook(() => {
      dialogHook = Dialog.useDialog();
    });
  });
  it.each([
    { locale: EN, type: 'EN' },
    { locale: CN, type: 'CN' },
    { locale: TW, type: 'TW' },
  ])('should render Component locale theme currently', (theme) => {
    const placeHolder = {
      EN: 'Sat',
      CN: '六',
      TW: '六',
    };
    render(
      <ThemeProvider locale={theme.locale}>
        <Calendar value={dayjs().toDate()} />
      </ThemeProvider>,
    );
    expect(screen.getByText(placeHolder[theme.type])).toBeTruthy();
  });

  it('should render function locale theme currently', () => {
    const [dialog, contextHolder] = dialogHook;
    render(
      <ThemeProvider locale={EN}>
        {contextHolder}
        <Button
          onClick={() => {
            dialog.confirm({ message: '测试' });
          }}
        >
          Dialog
        </Button>
      </ThemeProvider>,
    );
    userEvent.click(screen.getByText(/Dialog/));
    expect(screen.getByText('Cancel')).toBeTruthy();
  });
});
