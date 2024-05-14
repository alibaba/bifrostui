import React from 'react';
import {
  act,
  fireEvent,
  isConformant,
  render,
  screen,
  userEvent,
} from 'testing';
import { Input } from '..';

describe('Input', () => {
  const rootClass = 'bui-input';

  isConformant({
    className: rootClass,
    displayName: 'BuiInput',
    Component: Input,
  });

  it('should show clear button when input has value and focus', () => {
    const { container } = render(<Input value="clear" clearable />);
    userEvent.click(screen.getByRole('textbox'));
    const clearBtn = container.querySelector(`.${rootClass}-clear`);
    expect(clearBtn).toBeVisible();
  });

  describe('Input Ref Event', () => {
    it('should bind clear,focus and blur event', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input value="123" inputRef={ref} />);
      expect(ref.current).toHaveProperty('focus');
      expect(ref.current).toHaveProperty('blur');
    });

    it('should focus when call ref focus event', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input inputRef={ref} />);
      act(() => {
        const input = screen.getByRole('textbox');
        ref.current.focus();
        expect(input).toHaveFocus();
      });
    });

    it('should blur when call ref blur event', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input inputRef={ref} />);
      act(() => {
        const input = screen.getByRole('textbox');
        ref.current.focus();
        expect(input).toHaveFocus();
        ref.current.blur();
        expect(input).not.toHaveFocus();
      });
    });
  });

  it('should render start icon', () => {
    const startIcon = <div className="test-start-icon">startIcon</div>;
    const { container } = render(<Input startIcon={startIcon} />);
    const inputWrapper = container.querySelector(`.${rootClass}`);
    const icon = screen.getByText('startIcon');
    expect(icon.innerHTML).toBe('startIcon');
    expect(inputWrapper).toMatchSnapshot();
  });

  it('should render end icon', () => {
    const endIcon = <div className="test-end-icon">endIcon</div>;
    const { container } = render(<Input endIcon={endIcon} />);
    const inputWrapper = container.querySelector(`.${rootClass}`);
    const icon = screen.getByText('endIcon');
    expect(icon.innerHTML).toBe('endIcon');
    expect(inputWrapper).toMatchSnapshot();
  });

  it('should render placeholder', () => {
    render(<Input placeholder="请输入内容" />);
    const inputWrapper = screen.getByPlaceholderText('请输入内容');
    expect(inputWrapper).toMatchSnapshot();
  });

  it('should disabled', () => {
    render(<Input disabled />);
    act(() => {
      const input = screen.getByRole('textbox');
      userEvent.click(input);
      expect(input).not.toHaveFocus();
    });
  });

  it('should clear input after `onClear` event has been called', () => {
    const fakeClear = jest.fn();
    const { container } = render(
      <Input defaultValue="123" clearable onClear={fakeClear} />,
    );
    const input: HTMLInputElement = screen.getByRole('textbox');
    userEvent.click(input);
    const clearBtn = container.querySelector(`.${rootClass}-clear`);
    fireEvent.click(clearBtn);
    expect(fakeClear).toHaveBeenCalled();
    expect(input.value).toBe('');
  });

  it('`onChange` event should be called when input value change', () => {
    const fakeChange = jest.fn();
    render(<Input onChange={fakeChange} defaultValue="" />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, '1234');
    expect(fakeChange).toHaveBeenCalled();
    expect(input).toHaveValue('1234');
  });

  describe('miniapp Input', () => {
    const originalModule = jest.requireActual('@bifrostui/utils');
    const restApi = jest.requireActual('react');
    it('`onChange` event should be called when input value change', async () => {
      jest.spyOn(console, 'error').mockImplementation();
      jest.resetModules();
      jest.doMock('@bifrostui/utils', () => ({
        ...originalModule,
        isMini: true,
      }));
      jest.doMock('react', () => ({
        ...restApi,
      }));
      const { default: MiniInput } = await import('../index');
      const fakeChange = jest.fn();
      render(<MiniInput onChange={fakeChange} defaultValue="" />);
      const input = screen.getByRole('textbox');
      userEvent.type(input, '1234');
      expect(fakeChange).toHaveBeenCalled();
      expect(input).toHaveValue('1234');
    });
  });
});
