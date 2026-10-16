import * as React from 'react';
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

  describe('Accessibility', () => {
    it('should have default timer role', () => {
      render(<Countdown remainingTime={10 * 1000} />);
      const timer = screen.getByRole('timer');
      expect(timer).toBeInTheDocument();
    });

    it('should support custom role', () => {
      render(<Countdown remainingTime={10 * 1000} role="status" />);
      const element = screen.getByRole('status');
      expect(element).toBeInTheDocument();
    });

    it('should support custom aria-label', () => {
      const customLabel = 'Custom countdown timer';
      render(<Countdown remainingTime={10 * 1000} aria-label={customLabel} />);
      const timer = screen.getByRole('timer');
      expect(timer).toHaveAttribute('aria-label', customLabel);
    });

    it('should contain screen reader accessible time description', () => {
      const { container } = render(<Countdown remainingTime={65 * 1000} />);
      const srText = container.querySelector('.bui-countdown-sr-only');
      expect(srText).toBeInTheDocument();
      expect(srText?.textContent).toContain('剩余时间');
    });

    it('should have proper ARIA live region attributes', () => {
      render(<Countdown remainingTime={10 * 1000} />);
      const timer = screen.getByRole('timer');
      // Root timer keeps aria-live off to avoid double announcements;
      // live updates are announced via the sr-only region instead.
      expect(timer).toHaveAttribute('aria-live', 'off');
      expect(timer).toHaveAttribute('aria-atomic', 'true');
    });

    it('should support aria-labelledby attribute', () => {
      const labelId = 'countdown-label';
      render(
        <div>
          <h2 id={labelId}>Sale ends in:</h2>
          <Countdown remainingTime={10 * 1000} aria-labelledby={labelId} />
        </div>,
      );
      const timer = screen.getByRole('timer');
      expect(timer).toHaveAttribute('aria-labelledby', labelId);
    });

    it('should support aria-describedby attribute', () => {
      const descId = 'countdown-desc';
      render(
        <div>
          <Countdown remainingTime={10 * 1000} aria-describedby={descId} />
          <p id={descId}>
            This countdown shows the remaining time for the sale
          </p>
        </div>,
      );
      const timer = screen.getByRole('timer');
      expect(timer).toHaveAttribute('aria-describedby', descId);
    });

    it('should generate default aria-label with timer description', () => {
      render(<Countdown remainingTime={65 * 1000} />);
      const timer = screen.getByRole('timer');
      const ariaLabel = timer.getAttribute('aria-label');
      expect(ariaLabel).toContain('倒计时器');
      expect(ariaLabel).toContain('剩余时间');
    });

    it('should hide visual countdown elements from screen readers', () => {
      const { container } = render(<Countdown remainingTime={10 * 1000} />);
      const visualElements = container.querySelectorAll('.bui-countdown-slice');
      visualElements.forEach((element) => {
        expect(element).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('should update screen reader text when countdown changes', () => {
      const { container } = render(<Countdown remainingTime={65 * 1000} />);
      const srText = container.querySelector('.bui-countdown-sr-only');

      // Initial state should show 1 minute and 5 seconds
      expect(srText?.textContent).toContain('1分钟');
      expect(srText?.textContent).toContain('5秒');

      // Advance time by 5 seconds
      act(() => {
        vi.advanceTimersByTime(5 * 1000);
      });

      // Should now show 1 minute only
      expect(srText?.textContent).toContain('1分钟');
      expect(srText?.textContent).not.toContain('5秒');
    });

    it('should show "即将结束" when time is very low', () => {
      const { container } = render(<Countdown remainingTime={500} />);
      const srText = container.querySelector('.bui-countdown-sr-only');
      expect(srText?.textContent).toContain('即将结束');
    });

    it('should show "倒计时已结束" when countdown finishes', () => {
      const { container } = render(<Countdown remainingTime={1000} />);
      const srText = container.querySelector('.bui-countdown-sr-only');

      // Advance time to finish countdown
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(srText?.textContent).toContain('倒计时已结束');
    });

    it('should have proper live region for screen reader updates', () => {
      const { container } = render(<Countdown remainingTime={10 * 1000} />);
      const srText = container.querySelector('.bui-countdown-sr-only');
      expect(srText).toHaveAttribute('aria-live', 'polite');
      expect(srText).toHaveAttribute('aria-atomic', 'true');
    });

    it('should work with custom renderContent and maintain accessibility', () => {
      render(
        <Countdown
          remainingTime={65 * 1000}
          aria-label="Custom timer"
          renderContent={(time) => (
            <div>
              Custom: {time.minutes}:{time.seconds}
            </div>
          )}
        />,
      );

      const timer = screen.getByRole('timer');
      expect(timer).toHaveAttribute('aria-label', 'Custom timer');
      expect(timer).toHaveAttribute('aria-live', 'off');
      expect(timer).toHaveAttribute('aria-atomic', 'true');

      // Should still contain accessible content even with custom render
      expect(screen.getByText(/Custom:/)).toBeInTheDocument();
    });

    it('should handle complex time formats in screen reader text', () => {
      // Test with a time that has years, months, days, hours, minutes, seconds
      const complexTime =
        365 * 24 * 60 * 60 * 1000 + // 1 year
        30 * 24 * 60 * 60 * 1000 + // 1 month
        24 * 60 * 60 * 1000 + // 1 day
        60 * 60 * 1000 + // 1 hour
        60 * 1000 + // 1 minute
        1000; // 1 second

      const { container } = render(<Countdown remainingTime={complexTime} />);
      const srText = container.querySelector('.bui-countdown-sr-only');

      expect(srText?.textContent).toContain('1年');
      expect(srText?.textContent).toContain('13个月');
      expect(srText?.textContent).toContain('396天');
      expect(srText?.textContent).toContain('1小时');
      expect(srText?.textContent).toContain('1分钟');
      expect(srText?.textContent).toContain('1秒');
    });
  });
});
