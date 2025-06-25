import React from 'react';
import {
  isConformant,
  render,
  screen,
  userEvent,
  fireEvent,
  act,
} from 'testing';
import Tooltip from '../index';

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
const rootClass = 'bui-tooltip';

describe('Tooltip', () => {
  // isConformant({
  //   Component: Tooltip,
  //   displayName: 'BuiTooltip',
  //   className: rootClass,
  //   skip: [
  //     'component-has-root-ref',
  //     'component-handles-classNames',
  //     'component-has-default-className',
  //     'component-handles-style',
  //   ],
  // });

  it('test open props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Tooltip title="This is a tooltip2" open onOpenChange={onOpenChange}>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    expect(screen.getByText('This is a tooltip2')).toBeInTheDocument();

    const $childrenDom = screen.getByTestId('tooltipTestid');
    await act(async () => {
      userEvent.click($childrenDom);
    });
    expect(onOpenChange).toHaveBeenCalledTimes(0);
  });

  directions.forEach((placement) => {
    it(`test placement props the ${placement}`, async () => {
      render(
        // @ts-ignore
        <Tooltip title="This is a tooltip3" defaultOpen placement={placement}>
          <div>children</div>
        </Tooltip>,
      );
      await act(async () => {
        const direction = placement.split(/[A-Z]/)[0];
        const $dom = document.querySelector('.bui-tooltip');
        expect($dom).toHaveClass(`tooltip-${direction}`);
      });
    });
  });

  it('test trigger onOpenChange props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        defaultOpen
        trigger={['click', 'hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    await act(async () => {
      const $childrenDom = screen.getByTestId('tooltipTestid');
      setTimeout(() => {
        userEvent.click($childrenDom);
        expect(onOpenChange).toHaveBeenCalled();
      }, 100);
    });
  });

  it('test trigger click anywhere hide props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        defaultOpen
        trigger="click"
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    await act(async () => {
      setTimeout(() => {
        userEvent.click(document.body);
        expect(onOpenChange).toHaveBeenCalled();
      }, 100);
    });
  });

  it('test trigger hover onOpenChange props', async () => {
    const onOpenChange = jest.fn();
    render(
      <Tooltip
        title="This is a tooltip4"
        // defaultOpen
        trigger={['hover']}
        onOpenChange={onOpenChange}
      >
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );
    await act(async () => {
      const $childrenDom = screen.getByTestId('tooltipTestid');
      fireEvent.mouseEnter($childrenDom);
      fireEvent.mouseLeave($childrenDom);
      expect(onOpenChange).toBeCalledTimes(2);
      // 代表不触发隐藏
      userEvent.click(document.body);
      expect(onOpenChange).toBeCalledTimes(2);
    });
  });
});

describe('Tooltip', () => {
  isConformant({
    Component: Tooltip,
    displayName: 'BuiTooltip',
    className: rootClass,
    skip: [
      'component-has-root-ref',
      'component-handles-classNames',
      'component-has-default-className',
      'component-handles-style',
    ],
  });

  it('renders correctly', () => {
    // mock位置
    const mockGetBoundingClientRect = jest.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 0,
      right: 100,
      bottom: 50,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );
    render(
      <Tooltip title="This is a tooltip" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });

  it('renders correctly offset cacl topCenter', () => {
    // mock位置
    const mockGetBoundingClientRect = jest.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 50,
      right: 50,
      bottom: 50,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );

    Object.defineProperty(document.documentElement, 'clientWidth', {
      get: () => {
        return 375;
      },
    });

    render(
      <Tooltip title="This is a tooltip" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });

  it('renders correctly offset cacl leftCenter', () => {
    // mock位置
    const mockGetBoundingClientRect = jest.fn().mockReturnValue({
      width: 100,
      height: 50,
      top: 10,
      left: 50,
      right: 50,
      bottom: 20,
    });
    Object.defineProperty(
      window.HTMLElement.prototype,
      'getBoundingClientRect',
      {
        configurable: true,
        value: mockGetBoundingClientRect,
      },
    );

    Object.defineProperty(document.documentElement, 'clientHeight', {
      get: () => {
        return 667;
      },
    });

    render(
      <Tooltip title="This is a tooltip" placement="left" defaultOpen>
        <div data-testid="tooltipTestid">children</div>
      </Tooltip>,
    );

    expect(screen.getByText('This is a tooltip')).toBeInTheDocument();
  });
});
