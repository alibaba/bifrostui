import React from 'react';
import { fireEvent, renderHook, waitFor } from '@testing-library/react';
import { Button } from '@bifrostui/react';
import { render, screen, act } from 'testing';
import Dialog from '../FunctionalDialog';
import '@testing-library/jest-dom/extend-expect';

describe('Dialog Functional Calls', () => {
  const rootClass = 'bui-dialog';
  let dialogHook;

  beforeEach(() => {
    document.body.innerHTML = '';
    jest.useFakeTimers();
    renderHook(() => {
      dialogHook = Dialog.useDialog();
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
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
            header: 'Confirm Title',
            message: 'Are you sure?',
            confirmText: 'Yes',
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
    await waitFor(() => expect(confirmPromise).resolves.toBe(true));
  });

  it('should resolve with false when Dialog.confirm is cancelled', async () => {
    let confirmPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          confirmPromise = Dialog.confirm({
            header: 'Confirm Title',
            message: 'Are you sure?',
            confirmText: 'Yes',
            cancelText: 'Del',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    fireEvent.click(screen.getByText('Del'));
    await waitFor(() => expect(confirmPromise).resolves.toBe(false));
  });

  it('should resolve with the correct value when Dialog.prompt is confirmed', async () => {
    let promptPromise;
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          promptPromise = Dialog.prompt({
            header: 'Prompt Title',
            message: 'Please enter a value:',
            confirmText: 'Confirm',
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
    await waitFor(() => expect(promptPromise).resolves.toBe('Test Input'));
    await act(async () => {
      await jest.runAllTimers();
    });
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
            header: 'Prompt Title',
            message: 'Please enter a value:',
            confirmText: 'Confirm',
            cancelText: 'Delete',
          });
        }}
      >
        test
      </Button>,
    );
    fireEvent.click(getByTestId('emit-button'));
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => expect(promptPromise).resolves.toBe(false));
  });
  it('the default type of useDialog is confirm', async () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    const { getByTestId } = render(
      <Button
        data-testid="emit-button"
        onClick={() => {
          dialogHook[0]({
            header: '标题',
            message: '描述内容',
            onConfirm,
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
    await waitFor(async () => {
      expect(onCancel).toHaveBeenCalled();
      fireEvent.click(screen.getByText('确定'));
      await waitFor(() => {
        expect(onConfirm).toHaveBeenCalled();
      });
    });
  });

  it.each(['confirm', 'prompt'])(
    'should support basic api with useDialog',
    async (type) => {
      const dialog = dialogHook?.[0];
      const onConfirm = jest.fn();
      const onCancel = jest.fn();

      render(
        <Button
          onClick={() => {
            dialog[type]({
              message: `${type} message`,
              onConfirm,
              onCancel,
            });
          }}
        >
          dialog button
        </Button>,
      );
      fireEvent.click(screen.getByText('dialog button'));
      expect(screen.getByText(`${type} message`)).toBeInTheDocument();
      fireEvent.click(screen.getByText('取消'));
      await waitFor(async () => {
        expect(onCancel).toHaveBeenCalled();
        fireEvent.click(screen.getByText('确定'));
        await waitFor(() => {
          expect(onConfirm).toHaveBeenCalled();
        });
      });
    },
  );
});
