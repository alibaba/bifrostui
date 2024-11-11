import React from 'react';
import { render, userEvent, screen } from 'testing';
import {
  ThemeProvider,
  Input,
  EN,
  CN,
  TW,
  Dialog,
  Button,
} from '@bifrostui/react';

describe('ThemeProvider', () => {
  it.each([
    { locale: EN, type: 'EN' },
    { locale: CN, type: 'CN' },
    { locale: TW, type: 'TW' },
  ])('should render Component locale theme currently', (theme) => {
    const placeHolder = {
      EN: 'placeholder',
      CN: '请输入内容',
      TW: '請輸入內容',
    };
    render(
      <ThemeProvider locale={theme.locale}>
        <Input />
      </ThemeProvider>,
    );
    expect(screen.getByText(placeHolder[theme.type])).toBeTruthy();
  });

  it('should render function locale theme currently', () => {
    const [dialog, contextHolder] = Dialog.useDialog();
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
