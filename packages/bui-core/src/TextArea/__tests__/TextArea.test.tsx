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
});
