import React from 'react';
import { act, fireEvent, isConformant, render, screen } from 'testing';
import Slider from '..';

describe('Slider', () => {
  const originalModule = jest.requireActual('@bifrostui/utils');
  const restApi = jest.requireActual('react');
  const rootClass = 'bui-slider';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  isConformant({
    className: rootClass,
    displayName: 'BuiSlider',
    Component: Slider,
  });

  it('should render with default properties', () => {
    const fakeFn = jest.fn();
    const { container } = render(<Slider value={10} onChange={fakeFn} />);
    const slider = container.querySelector(`.${rootClass}`);
    expect(slider).toMatchSnapshot();
  });

  it('minimum value should controled by `min` property', () => {
    const { container } = render(<Slider min={10} defaultValue={10} />);
    const tooltip = container.querySelector(`.${rootClass}-tooltip`);
    expect(tooltip).toHaveTextContent('10');
  });

  it('maximum value should controled by `max` property', () => {
    const { container } = render(<Slider max={90} defaultValue={90} />);
    const tooltip = container.querySelector(`.${rootClass}-tooltip`);
    expect(tooltip).toHaveTextContent('90');
  });

  it('should render default value by `defaultValue` property', () => {
    const { container } = render(
      <Slider min={20} max={40} defaultValue={30} />,
    );
    const slide = container.querySelector(`.${rootClass}-button-0`);
    expect(slide).toHaveStyle({ left: '50%' });
  });

  it('should render current by `value` property', () => {
    const { container } = render(<Slider min={20} max={40} value={30} />);
    const slide = container.querySelector(`.${rootClass}-button-0`);
    expect(slide).toHaveStyle({ left: '50%' });
  });

  it('tooltip should hidden', () => {
    const { container } = render(<Slider value={0} tipVisible={false} />);
    const tooltip = container.querySelector(`.${rootClass}-tooltip`);
    expect(tooltip).toHaveClass(`${rootClass}-tooltip-hidden`);
  });

  it('tooltip should be formatted by `tooltipRender`', () => {
    const { container } = render(
      <Slider
        value={90}
        tooltipRender={(value) => {
          return <div className="formatter-tips">{value}</div>;
        }}
      />,
    );
    const tooltip = container.querySelector(`.formatter-tips`);
    expect(tooltip).toHaveTextContent('90');
  });

  it('should be disabled', () => {
    const { container } = render(<Slider value={10} disabled />);
    const slider = container.querySelector(`.${rootClass}`);
    expect(slider).toHaveClass(`${rootClass}-disabled`);
  });

  it('should render range', () => {
    const { container } = render(<Slider value={[0, 18]} />);
    const handlers = container.querySelectorAll(`.${rootClass}-button`);
    expect(handlers[0]).toHaveStyle({ left: '0%' });
    expect(handlers[1]).toHaveStyle({ left: '18%' });
  });

  it('should render startIcon', () => {
    const fakeChange = jest.fn();
    const { container } = render(
      <Slider
        value={10}
        startIcon={<div className="icon-start">start</div>}
        onChange={fakeChange}
      />,
    );
    const icon = container.querySelector(`.icon-start`);
    expect(icon).toBeVisible();
  });

  it('should render endIcon', () => {
    const fakeChange = jest.fn();
    const { container } = render(
      <Slider
        value={[10, 20]}
        endIcon={<div className="icon-end">end</div>}
        onChange={fakeChange}
      />,
    );
    const icon = container.querySelector(`.icon-end`);
    expect(icon).toBeVisible();
  });

  it('should trigger touchmove event', async () => {
    render(
      <Slider
        defaultValue={0}
        tooltipRender={(value) => <div>tooltip {value}</div>}
      />,
    );
    await act(async () => {
      await jest.runAllTimers();
    });
    act(() => {
      const button = screen.getByRole('slider');
      const mousedown = new MouseEvent('mousedown', {
        cancelable: true,
        bubbles: true,
      });
      const mousemove = new MouseEvent('mousemove', {
        cancelable: true,
        bubbles: true,
      });
      const touchMove = jest.fn();
      button.addEventListener('touchmove', touchMove, false);

      button.dispatchEvent(mousedown);
      button.dispatchEvent(mousemove);

      expect(touchMove).toBeCalled();
    });
  });

  it('should trigger touchend event', async () => {
    render(
      <Slider
        step={2}
        defaultValue={0}
        tooltipRender={(value) => <div>tooltip {value}</div>}
      />,
    );
    await act(async () => {
      await jest.runAllTimers();
    });
    act(() => {
      const button = screen.getByRole('slider');
      const mousedown = new MouseEvent('mousedown', {
        cancelable: true,
        bubbles: true,
      });
      const mousemove = new MouseEvent('mousemove', {
        cancelable: true,
        bubbles: true,
      });
      const mouseup = new MouseEvent('mouseup', {
        cancelable: true,
        bubbles: true,
      });
      const touchEnd = jest.fn();
      button.addEventListener('touchend', touchEnd, false);

      button.dispatchEvent(mousedown);
      button.dispatchEvent(mousemove);
      button.dispatchEvent(mouseup);

      expect(touchEnd).toBeCalled();
    });
  });

  it('should trigger touchmove event with range mode', async () => {
    const pageX = 30;
    const totalWidth = 300;
    jest.resetModules();
    // mock getBoundingClientRect
    jest.doMock('@bifrostui/utils', () => ({
      ...originalModule,
      getBoundingClientRect: () => {
        return Promise.resolve({
          width: totalWidth,
        });
      },
    }));
    jest.doMock('react', () => ({
      ...restApi,
    }));

    const { default: FakeSlider } = await import('../index');

    render(<FakeSlider defaultValue={[0, 5]} />);
    await act(async () => {
      await jest.runAllTimers();
    });

    const [button1] = screen.getAllByRole('slider');

    fireEvent.touchStart(button1, {
      touches: [
        {
          pageX: 0,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(button1, {
      touches: [
        {
          pageX,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    // 因为双滑块可交错，第一个按钮移动30的距离后，第二个按钮会在左边，即变成第一个按钮
    // left计算逻辑详见源码
    expect(button1.style.left).toBe(`5%`);
  });

  it('should not swap end button', async () => {
    const pageX = 30;
    const totalWidth = 300;
    jest.resetModules();
    // mock getBoundingClientRect
    jest.doMock('@bifrostui/utils', () => ({
      ...originalModule,
      getBoundingClientRect: () => {
        return Promise.resolve({
          width: totalWidth,
        });
      },
    }));
    jest.doMock('react', () => ({
      ...restApi,
    }));

    const { default: FakeSlider } = await import('../index');

    render(<FakeSlider defaultValue={[0, 5]} disableSwap />);
    await act(async () => {
      await jest.runAllTimers();
    });

    const [button1, button2] = screen.getAllByRole('slider');

    fireEvent.touchStart(button1, {
      touches: [
        {
          pageX: 0,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(button1, {
      touches: [
        {
          pageX,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });

    expect(button2.style.left).toBe(`${(pageX / totalWidth) * 100}%`);
  });

  it('should not swap start button', async () => {
    const pageX = 60;
    const totalWidth = 300;
    jest.resetModules();
    // mock getBoundingClientRect
    jest.doMock('@bifrostui/utils', () => ({
      ...originalModule,
      getBoundingClientRect: () => {
        return Promise.resolve({
          width: totalWidth,
        });
      },
    }));
    jest.doMock('react', () => ({
      ...restApi,
    }));

    const { default: FakeSlider } = await import('../index');

    render(<FakeSlider defaultValue={[30, 60]} disableSwap />);
    await act(async () => {
      await jest.runAllTimers();
    });

    const [button1, button2] = screen.getAllByRole('slider');

    fireEvent.touchStart(button2, {
      touches: [
        {
          pageX: 0,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });
    fireEvent.touchMove(button2, {
      touches: [
        {
          pageX,
          pageY: 0,
        },
      ],
      cancelable: true,
      bubbles: true,
    });

    expect(button1.style.left).toBe(`${(pageX / totalWidth) * 100}%`);
  });
});
