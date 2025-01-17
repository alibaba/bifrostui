import React from 'react';
import { act, userEvent, render, fireEvent } from 'testing';

describe('DesktopPicker', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render float dom', async () => {
    const { default: DesktopPicker } = await import('../index');
    const closeMock = jest.fn();
    const TestFn = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <DesktopPicker
            open={open}
            content={<div>float</div>}
            onClose={closeMock}
          >
            <div>
              <div onClick={() => setOpen(!open)}>testDemo</div>
            </div>
          </DesktopPicker>
          <div>close</div>
        </>
      );
    };

    const { getAllByText } = render(<TestFn />);
    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    expect(
      document.getElementsByClassName('bui-desktop-picker-container')[0],
    ).toHaveClass('bui-desktop-picker-container-bottom');
    await act(async () => {
      userEvent.click(getAllByText('close')[0]);
    });
    expect(closeMock).toBeCalled();

    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    setTimeout(() => {
      expect(closeMock).toBeCalled();
    }, 1000);
  });
});

describe('prop: miniBackdropInvisible', () => {
  const restApi = jest.requireActual('react');
  const originalModule = jest.requireActual('@bifrostui/utils');
  const closeMock = jest.fn();
  it('should render float dom', async () => {
    jest.resetModules();
    jest.doMock('@bifrostui/utils', () => ({
      ...originalModule,
      isMini: true,
    }));
    jest.doMock('react', () => ({
      ...restApi,
    }));
    const { default: DesktopPicker } = await import('../index');
    const component = (
      <DesktopPicker onClose={closeMock} open content={<div>test</div>}>
        <div>content</div>
      </DesktopPicker>
    );
    render(component);
    const button = document.querySelector('.bui-backdrop');
    await act(async () => {
      fireEvent.click(button);
    });
    setTimeout(() => {
      expect(closeMock).toBeCalled();
    }, 1000);
  });
});
