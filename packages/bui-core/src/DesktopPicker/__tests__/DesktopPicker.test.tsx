import React, { act, RefObject, useState } from 'react';
import { render, userEvent } from 'testing';
import { DesktopPicker } from '..';

describe('DesktopPicker', () => {
  it('should render float dom', async () => {
    const TestFn = () => {
      const rootRef: RefObject<HTMLDivElement> = React.createRef();
      const [open, setOpen] = useState(false);
      return (
        <DesktopPicker
          open={open}
          content={<div>float</div>}
          onClose={() => {
            console.log('close');
          }}
        >
          <div ref={rootRef}>
            <div onClick={() => setOpen(true)}>testDemo</div>
          </div>
        </DesktopPicker>
      );
    };

    const { getAllByText } = render(<TestFn />);
    await act(async () => {
      userEvent.click(getAllByText('testDemo')[0]);
    });
    expect(
      document.getElementsByClassName('bui-desktop-picker-container')[0],
    ).toHaveClass('bui-desktop-picker-container-bottom');
  });
});
