import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { Button } from '@bifrostui/react';
import { render, screen } from 'testing';
import Dialog from '../FunctionalDialog';
import '@testing-library/jest-dom/extend-expect';

describe('Dialog Functional Calls', () => {
  const rootClass = 'bui-dialog';
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
      document.body.querySelector(`.${rootClass}-title`),
    ).toBeInTheDocument();
    expect(
      document.body.querySelector(`.${rootClass}-input`),
    ).toBeInTheDocument();
    expect(screen.getByText('Prompt Title')).toBeInTheDocument();
    expect(screen.getByText('Please enter a value:')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('请在此处输入');
    fireEvent.change(input, { target: { value: 'Test Input' } });

    fireEvent.click(screen.getByText('Confirm'));
    await waitFor(() => expect(promptPromise).resolves.toBe('Test Input'));
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
});
