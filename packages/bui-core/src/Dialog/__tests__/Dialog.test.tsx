import React from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { Button } from '@bifrostui/react';
import { render, screen, act } from 'testing';
import Dialog from '../FunctionalDialog';

describe('Dialog Functional Calls', () => {
  const rootClass = 'bui-dialog';
  let dialogHook;

  beforeEach(() => {
    document.body.innerHTML = '';
    vi.useFakeTimers({ shouldAdvanceTime: true });
    renderHook(() => {
      dialogHook = Dialog.useDialog();
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('The default type of dialog is confirm', async () => {
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          Dialog.prompt('Confirm title');
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(
      document.body.querySelector(`.${rootClass}-body-desc`),
    ).toBeInTheDocument();
  });

  it('should resolve with true when Dialog.confirm is confirmed', async () => {
    let confirmPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          confirmPromise = Dialog.confirm({
            title: 'Confirm Title',
            content: 'Are you sure?',
            okText: 'Yes',
            cancelText: 'No',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(screen.getByText('Confirm Title')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Yes'));
    await act(async () => {
      await vi.runAllTimers();
    });
    const result = await confirmPromise;
    expect(result).toBe(true);
  });

  it('should resolve with true when Dialog.alert is confirmed', async () => {
    let alertPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          alertPromise = Dialog.alert({
            title: 'Alert Title',
            content: 'This is an alert message',
            okText: 'OK',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('This is an alert message')).toBeInTheDocument();

    // Alert 模式应该只有一个确认按钮
    expect(screen.getByText('OK')).toBeInTheDocument();
    expect(screen.queryByText('取消')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('OK'));
    await act(async () => {
      await vi.runAllTimers();
    });
    const result = await alertPromise;
    expect(result).toBe(true);
  });

  it('should render in container', async () => {
    const { getByTestId } = render(
      <>
        <div id="render-container" data-testid="render-container" />
        <Button
          data-testid="emit-button"
          onClick={() => {
            Dialog.confirm({
              content: 'Are you sure?',
              container: document.getElementById('render-container'),
            });
          }}
        >
          test
        </Button>
      </>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(getByTestId('render-container')).toHaveTextContent('Are you sure?');
  });

  it('should resolve with false when Dialog.confirm is cancelled', async () => {
    let confirmPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          confirmPromise = Dialog.confirm({
            title: 'Confirm Title',
            content: 'Are you sure?',
            okText: 'Yes',
            cancelText: 'Del',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    fireEvent.click(screen.getByText('Del'));
    await act(async () => {
      await vi.runAllTimers();
    });
    const result = await confirmPromise;
    expect(result).toBe(false);
  });

  it('should resolve with the correct value when Dialog.prompt is confirmed', async () => {
    let promptPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          promptPromise = Dialog.prompt({
            title: 'Prompt Title',
            content: 'Please enter a value:',
            okText: 'Confirm',
            cancelText: 'Cancel',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(
      document.body.querySelector(`.${rootClass}-body-title`),
    ).toBeInTheDocument();
    expect(
      document.body.querySelector(`.${rootClass}-body-input`),
    ).toBeInTheDocument();
    expect(screen.getByText('Prompt Title')).toBeInTheDocument();
    expect(screen.getByText('Please enter a value:')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('请输入内容');
    fireEvent.change(input, { target: { value: 'Test Input' } });

    fireEvent.click(screen.getByText('Confirm'));
    await act(async () => {
      await vi.runAllTimers();
    });
    const result = await promptPromise;
    expect(result).toBe('Test Input');
    expect(
      document.body.querySelector(`.${rootClass}`),
    ).not.toBeInTheDocument();
  });

  it('should resolve with false when Dialog.prompt is cancelled', async () => {
    let promptPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          promptPromise = Dialog.prompt({
            title: 'Prompt Title',
            content: 'Please enter a value:',
            okText: 'Confirm',
            cancelText: 'Delete',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    fireEvent.click(screen.getByText('Delete'));
    await act(async () => {
      await vi.runAllTimers();
    });
    const result = await promptPromise;
    expect(result).toBe(false);
  });

  it('the default type of useDialog is confirm', async () => {
    const onOk = vi.fn();
    const onCancel = vi.fn();
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          dialogHook[0]({
            title: '标题',
            content: '描述内容',
            onOk,
            onCancel,
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    expect(
      document.body.querySelector(`.${rootClass}-body-desc`),
    ).toBeInTheDocument();
    expect(screen.getByText('描述内容')).toBeInTheDocument();
    fireEvent.click(screen.getByText('取消'));
    await act(async () => {
      await vi.runAllTimers();
    });
    expect(onCancel).toHaveBeenCalled();
  });

  it.each(['confirm', 'prompt', 'alert'])(
    'should support basic api with useDialog',
    async (type) => {
      const dialog = dialogHook?.[0];
      const onOk = vi.fn();
      const onCancel = vi.fn();

      render(
        <Button
          onClick={() => {
            dialog[type]({
              content: `${type} message`,
              onOk,
              onCancel,
            });
          }}
        >
          dialog button
        </Button>,
      );
      fireEvent.click(screen.getByText('dialog button'));
      expect(screen.getByText(`${type} message`)).toBeInTheDocument();

      if (type === 'alert') {
        // Alert 模式只有确认按钮
        expect(screen.queryByText('取消')).not.toBeInTheDocument();
        fireEvent.click(screen.getByText('确认'));
        await act(async () => {
          await vi.runAllTimers();
        });
        expect(onOk).toHaveBeenCalled();
      } else {
        // Confirm 和 Prompt 模式有取消按钮
        fireEvent.click(screen.getByText('取消'));
        await act(async () => {
          await vi.runAllTimers();
        });
        expect(onCancel).toHaveBeenCalled();
      }
    },
  );
});
