import React from 'react';
import { isConformant, render, act, screen } from 'testing';
import { Countdown } from '..';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe('Countdown', () => {
  const rootClass = 'bui-countdown';

  isConformant({
    className: rootClass,
    displayName: 'BuiCountdown',
    Component: Countdown,
  });

  it('renders correctly with remainingTime prop', () => {
    render(<Countdown remainingTime={10 * 1000} format="HH:mm:ss" />);
    const zeroItems = screen.queryAllByText('0');
    const oneItems = screen.queryAllByText('1');
    expect(zeroItems).toHaveLength(5);
    expect(oneItems).toHaveLength(1);
  });

  it('renders correctly with endTimestamp prop', () => {
    render(
      <Countdown endTimestamp={Date.now() + 10 * 1000} format="HH:mm:ss" />,
    );
    const zeroItems = screen.queryAllByText('0');
    const oneItems = screen.queryAllByText('1');
    expect(zeroItems).toHaveLength(5);
    expect(oneItems).toHaveLength(1);
  });

  it('renders correctly with endTimestamp and serverTimestamp prop', () => {
    render(
      <Countdown
        endTimestamp={Date.now() + 10 * 1000}
        serverTimestamp={Date.now() - 10 * 1000}
        format="HH:mm:ss"
      />,
    );
    const zeroItems = screen.queryAllByText('0');
    const twoItems = screen.queryAllByText('2');
    expect(zeroItems).toHaveLength(5);
    expect(twoItems).toHaveLength(1);
  });

  it('renders countdown with format prop', () => {
    render(
      <Countdown
        endTimestamp={Date.now() + 100 * 365 * 24 * 60 * 60 * 1000}
        format="YYYY年MM月DD日HH时mm分ss秒SSS毫秒"
      />,
    );
    expect(screen.queryAllByText('年')).toHaveLength(1);
    expect(screen.queryAllByText('月')).toHaveLength(1);
    expect(screen.queryAllByText('日')).toHaveLength(1);
    expect(screen.queryAllByText('时')).toHaveLength(1);
    expect(screen.queryAllByText('分')).toHaveLength(1);
    expect(screen.queryAllByText('秒')).toHaveLength(1);
    expect(screen.queryAllByText('毫秒')).toHaveLength(1);
  });

  it('onFinish prop has been trigger when countdown finished', () => {
    const fakeFinish = vi.fn();
    render(
      <Countdown endTimestamp={Date.now() + 10 * 1000} onFinish={fakeFinish} />,
    );
    act(() => {
      vi.advanceTimersByTime(10 * 1000);
    });
    expect(fakeFinish).toHaveBeenCalledTimes(1);
  });

  it('onChange prop has been trigger when countdown change', () => {
    const fakeChange = vi.fn();
    render(
      <Countdown endTimestamp={Date.now() + 10 * 1000} onChange={fakeChange} />,
    );
    act(() => {
      vi.advanceTimersByTime(1 * 1000);
    });
    expect(fakeChange).toBeCalled();
  });

  it('custom renders countdown with renderContent prop', () => {
    render(
      <Countdown
        endTimestamp={Date.now() + 15 * 1000}
        renderContent={(time) => {
          const { hours, minutes, seconds } = time;
          return (
            <div>
              <span>time</span> {`${hours}:${minutes}:${seconds}`}
            </div>
          );
        }}
      />,
    );
    expect(screen.queryByText('time')).toBeVisible();
  });
});
