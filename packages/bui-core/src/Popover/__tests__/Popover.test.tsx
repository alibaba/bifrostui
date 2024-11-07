import React from 'react';
import { isConformant, render, screen, userEvent, fireEvent } from 'testing';
import Popover from '../index';

const directions = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
];

describe('Popover', () => {
  const rootClass = 'bui-popover';

  isConformant({
    Component: Popover,
    displayName: 'BuiPopover',
    className: rootClass,
    skip: [
      'PortalProps',
      'component-has-root-ref',
      'component-handles-classNames',
      'component-has-default-className',
      'component-handles-style',
    ],
  });
  it('test content defaultOpen props', () => {
    render(
      <Popover
        title="This is a popover title"
        content="This is a popover content"
        defaultOpen
      >
        <div>children</div>
      </Popover>,
    );
    expect(screen.getByText('This is a popover title')).toBeInTheDocument();
    expect(screen.getByText('This is a popover content')).toBeInTheDocument();
  });

  it('test hideArrow props', () => {
    render(
      <Popover title="This is a popover title" hideArrow defaultOpen>
        <div>children</div>
      </Popover>,
    );
    expect(
      document.querySelector('.bui-popover-arrow'),
    ).not.toBeInTheDocument();
  });

  it('test open onOpenChange props', () => {
    const onOpenChange = jest.fn();
    render(
      <Popover title="This is a popover2" open>
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    expect(screen.getByText('This is a popover2')).toBeInTheDocument();

    const $childrenDom = screen.getByTestId('popoverTestid');
    userEvent.click($childrenDom);
    expect(onOpenChange).toHaveBeenCalledTimes(0);
  });

  directions.forEach((placement) => {
    it(`test placement props the ${placement}`, () => {
      render(
        // @ts-ignore
        <Popover title="This is a popover3" defaultOpen placement={placement}>
          <div>children</div>
        </Popover>,
      );
      const direction = placement.split(/[A-Z]/)[0];
      const $dom = document.querySelector('.bui-popover');
      expect($dom).toHaveClass(`popover-${direction}`);
    });
  });

  // it('test placement props', () => {
  //   render(
  //     <Popover title="This is a popover3" defaultOpen placement="bottomLeft">
  //       <div>children</div>
  //     </Popover>,
  //   );
  //   const $dom = document.querySelector('.bui-popover');
  //   expect($dom).toHaveClass(`popover-bottom`);
  // });

  it('test trigger onOpenChange props', () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover4"
        defaultOpen
        trigger={['click', 'hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    const $childrenDom = screen.getByTestId('popoverTestid');
    userEvent.click($childrenDom);
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('test trigger hover onOpenChange props', () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        title="This is a popover4"
        defaultOpen
        trigger="hover"
        onOpenChange={onOpenChange}
      >
        <div data-testid="popoverTestid">children</div>
      </Popover>,
    );
    const $childrenDom = screen.getByTestId('popoverTestid');
    fireEvent.mouseEnter($childrenDom);
    fireEvent.mouseLeave($childrenDom);
    expect(onOpenChange).toBeCalledTimes(2);
  });
});
