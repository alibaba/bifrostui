import React from 'react';
import { fireEvent, isConformant, render, screen, userEvent } from 'testing';
import { TextArea } from '..';

describe('TextArea', () => {
  const rootClass = 'bui-textarea';

  isConformant({
    className: rootClass,
    displayName: 'BuiTextArea',
    Component: TextArea,
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-handles-style',
    ],
  });

  it('should render with value', () => {
    render(<TextArea value="123" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('123');
  });

  it('should controlled by value', async () => {
    const handleChange = vi.fn((e, data) => data.value);
    render(<TextArea placeholder="textarea" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, '1234');
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveReturnedWith('1234');
    expect(textarea).toHaveValue('1234');
  });

  it('should render with defaultValue', () => {
    render(<TextArea defaultValue="234" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('234');
  });

  it('should render placeholder', () => {
    render(<TextArea placeholder="place input content" />);
    const textarea = screen.getByRole('textbox');
    expect((textarea as HTMLTextAreaElement).placeholder).toBe(
      'place input content',
    );
  });

  it('should render by rows', () => {
    render(<TextArea rows={3} />);
    const textarea = screen.getByRole('textbox');
    expect((textarea as HTMLTextAreaElement).rows).toBe(3);
  });

  it('should have max length', () => {
    render(<TextArea maxLength={10} />);
    const textarea = screen.getByRole('textbox');
    expect((textarea as HTMLTextAreaElement).maxLength).toBe(10);
  });

  it('can auto size', () => {
    render(
      <TextArea
        autoSize
        value="test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize."
      />,
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toMatchSnapshot();
  });

  it('can auto size', () => {
    render(<TextArea autoSize={{ minHeight: 50, maxHeight: 100 }} />);
    const textarea = screen.getByRole('textbox');

    Object.defineProperty(textarea, 'scrollHeight', {
      value: 30,
      configurable: true,
    });
    fireEvent.change(textarea, { target: { value: '1' } });
    expect(textarea.style.height).toBe(`30px`);

    Object.defineProperty(textarea, 'scrollHeight', {
      value: 200,
    });
    fireEvent.change(textarea, {
      target: {
        value:
          'test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.test autoSize.',
      },
    });
    expect(textarea.style.height).toBe(`100px`);
  });

  it('should auto focus', () => {
    render(<TextArea autoFocus />);
    const textarea = screen.getByRole('textbox');
    expect(document.activeElement).toBe(textarea);
  });

  it('should show input count', () => {
    const { container } = render(<TextArea value="test" showCount />);
    const count = container.querySelector(`.${rootClass}-count`);
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent('4');
  });

  it('trigger on change', async () => {
    const fakeChange = vi.fn((e, v) => v.value);
    render(<TextArea onChange={fakeChange} />);
    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, '1234');
    expect(fakeChange).toHaveBeenCalled();
    expect(fakeChange).toHaveReturnedWith('1234');
  });

  it('trigger focus', () => {
    render(<TextArea value="test" />);

    const textarea = screen.getByRole('textbox');
    textarea.focus();
    expect(textarea).toHaveFocus();
  });

  it('trigger blur', () => {
    render(<TextArea value="test" />);

    const textarea = screen.getByRole('textbox');
    textarea.focus();
    expect(textarea).toHaveFocus();
    textarea.blur();
    expect(textarea).not.toHaveFocus();
  });

  // 无障碍功能测试
  describe('Accessibility', () => {
    it('should have correct role', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });

    it('should support aria-label', () => {
      render(<TextArea aria-label="User feedback" />);
      const textarea = screen.getByLabelText('User feedback');
      expect(textarea).toBeInTheDocument();
      expect(textarea).toHaveAttribute('aria-label', 'User feedback');
    });

    it('should support aria-hidden', () => {
      render(<TextArea aria-hidden />);
      const textarea = screen.getByRole('textbox', { hidden: true });
      expect(textarea).toHaveAttribute('aria-hidden', 'true');
    });

    it('should support aria-details', () => {
      render(<TextArea aria-details="detailed-info" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-details', 'detailed-info');
    });

    it('should support aria-required', () => {
      render(<TextArea aria-required />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-required', 'true');
      expect(textarea).toBeRequired();
    });

    it('should support aria-readonly', () => {
      render(<TextArea aria-readonly />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-readonly', 'true');
    });

    it('should support aria-rowindex', () => {
      render(<TextArea aria-rowindex={2} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-rowindex', '2');
    });

    it('should support aria-colcount', () => {
      render(<TextArea aria-colcount={80} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-colcount', '80');
    });

    it('should support multiple aria attributes', () => {
      render(
        <TextArea
          aria-label="Feedback form"
          aria-required
          aria-colcount={50}
        />,
      );
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-label', 'Feedback form');
      expect(textarea).toHaveAttribute('aria-required', 'true');
      expect(textarea).toHaveAttribute('aria-colcount', '50');
    });

    it('should be accessible via keyboard navigation', async () => {
      render(<TextArea placeholder="Type here" />);
      const textarea = screen.getByRole('textbox');

      // Tab 键聚焦
      await userEvent.tab();
      expect(textarea).toHaveFocus();

      // 输入文本
      await userEvent.type(textarea, 'Hello World');
      expect(textarea).toHaveValue('Hello World');

      // Shift+Tab 失去焦点
      await userEvent.tab({ shift: true });
      expect(textarea).not.toHaveFocus();
    });

    it('should announce character count when showCount is enabled', async () => {
      render(<TextArea showCount maxLength={10} />);
      const textarea = screen.getByRole('textbox');

      await userEvent.type(textarea, 'test');

      // 检查是否有字符计数显示
      const { container } = render(
        <TextArea value="test" showCount maxLength={10} />,
      );
      const count = container.querySelector(`.${rootClass}-count`);
      expect(count).toHaveTextContent('4/10');
    });

    it('should work with screen readers when disabled', () => {
      render(<TextArea disabled aria-label="Disabled textarea" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeDisabled();
      expect(textarea).toHaveAttribute('aria-label', 'Disabled textarea');
    });

    it('should maintain accessibility when autoSize is enabled', () => {
      render(
        <TextArea
          autoSize
          aria-label="Auto-sizing textarea"
          value="This is a long text that should cause the textarea to auto-resize"
        />,
      );
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-label', 'Auto-sizing textarea');
      expect(textarea).toHaveValue(
        'This is a long text that should cause the textarea to auto-resize',
      );
    });

    it('should have default aria-label when no custom label is provided', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');

      // 现在组件默认提供 aria-label，所以应该期望有这个属性
      expect(textarea).toHaveAttribute('aria-label', '文本区域');
    });

    it('should not render undefined aria attributes', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');

      // 确保未定义的 aria 属性不会被渲染
      expect(textarea).not.toHaveAttribute('aria-hidden');
      expect(textarea).not.toHaveAttribute('aria-details');
      expect(textarea).not.toHaveAttribute('aria-required');
      expect(textarea).not.toHaveAttribute('aria-readonly');
      expect(textarea).not.toHaveAttribute('aria-rowindex');
      expect(textarea).not.toHaveAttribute('aria-colcount');
    });

    it('should override default aria-label when custom label is provided', () => {
      render(<TextArea aria-label="Custom label" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-label', 'Custom label');
    });
  });
});
