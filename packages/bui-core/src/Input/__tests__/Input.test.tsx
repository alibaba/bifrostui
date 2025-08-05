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

  it('should show clear button when input has value and focus', async () => {
    const { container } = render(<Input value="clear" clearable />);
    await userEvent.click(screen.getByRole('textbox'));
    const clearBtn = container.querySelector(`.${rootClass}-clear`);
    expect(clearBtn).toBeInTheDocument();
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

  it('should clear input after `onClear` event has been called', async () => {
    const fakeClear = vi.fn();
    const { container } = render(
      <Input defaultValue="123" clearable onClear={fakeClear} />,
    );
    const input: HTMLInputElement = screen.getByRole('textbox');
    await userEvent.click(input);
    const clearBtn = container.querySelector(`.${rootClass}-clear`);
    expect(clearBtn).toBeInTheDocument();
    fireEvent.click(clearBtn);
    expect(fakeClear).toHaveBeenCalled();
    expect(input.value).toBe('');
  });

  it('`onChange` event should be called when input value change', async () => {
    const fakeChange = vi.fn();
    render(<Input onChange={fakeChange} defaultValue="" />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '1234');
    expect(fakeChange).toHaveBeenCalled();
    expect(input).toHaveValue('1234');
  });

  describe('miniapp Input', () => {
    it('`onChange` event should be called when input value change', async () => {
      vi.spyOn(console, 'error').mockImplementation();
      vi.resetModules();
      vi.doMock('@bifrostui/utils', async () => {
        const actual = await vi.importActual('@bifrostui/utils');
        return {
          ...actual,
          isMini: true,
        };
      });
      const { default: MiniInput } = await import('../index');
      const fakeChange = vi.fn();
      render(<MiniInput onChange={fakeChange} defaultValue="" />);
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1234');
      expect(fakeChange).toHaveBeenCalled();
      expect(input).toHaveValue('1234');
    });
  });
});
