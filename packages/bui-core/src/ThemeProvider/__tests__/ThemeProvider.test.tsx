import * as React from 'react';
import { render, userEvent, screen, waitFor } from 'testing';
import dayjs from 'dayjs';
import {
  ThemeProvider,
  Calendar,
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

  it('should render function locale theme currently', async () => {
    const TestComponent = () => {
      const [dialog, contextHolder] = Dialog.useDialog();

      const handleClick = () => {
        dialog.confirm({ title: '测试' });
      };

      return (
        <ThemeProvider locale={EN}>
          {contextHolder}
          <Button onClick={handleClick}>Dialog</Button>
        </ThemeProvider>
      );
    };

    render(<TestComponent />);

    await userEvent.click(screen.getByText(/Dialog/));

    // 等待 Dialog 渲染完成，然后查找取消按钮
    await waitFor(() => {
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });
});
