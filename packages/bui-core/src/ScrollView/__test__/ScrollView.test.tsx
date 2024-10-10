import React, { useEffect, useState } from 'react';
import { act, render, screen } from 'testing';
import { fireEvent, waitFor } from '@testing-library/react';
import ScrollView from '../ScrollView';

describe('ScrollView', () => {
  const rootClass = 'bui-scroll';

  it('renders correctly', () => {
    const { container } = render(
      <ScrollView scrollY>
        <div className="item" data-testid="item">
          test item
        </div>
      </ScrollView>,
    );
    expect(
      container.querySelector(`.${rootClass}-view-scroll-y`),
    ).not.toBeNull();
    expect(screen.getByTestId('item')).not.toBeNull();
  });
  it('can scrollX', () => {
    const { container } = render(
      <ScrollView scrollX>
        <div className="item" data-testid="item">
          test item
        </div>
      </ScrollView>,
    );
    expect(
      container.querySelector(`.${rootClass}-view-scroll-x`),
    ).not.toBeNull();
  });

  it('will trigger scrolling events and apply thresholds', () => {
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetHeight',
    );
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 2000,
    });

    const onScrollToUpper = jest.fn();
    const onScrollToLower = jest.fn();
    const onScroll = jest.fn();
    const { container } = render(
      <ScrollView
        scrollY
        style={{ height: '1000px' }}
        upperThreshold={300}
        lowerThreshold={300}
        {...{ onScrollToUpper, onScrollToLower, onScroll }}
      >
        <div className="item" data-testid="item" style={{ height: '2000px' }}>
          test item
        </div>
      </ScrollView>,
    );
    expect(onScrollToUpper).not.toHaveBeenCalled();
    expect(onScrollToLower).not.toHaveBeenCalled();
    expect(onScroll).not.toHaveBeenCalled();
    act(() => {
      fireEvent.scroll(container.querySelector(`.${rootClass}`), {
        target: { scrollTop: 800 },
      });
    });
    expect(onScrollToUpper).not.toHaveBeenCalled();
    expect(onScrollToLower).toHaveBeenCalled();
    expect(onScroll).toHaveBeenCalledTimes(1);

    act(() => {
      fireEvent.scroll(container.querySelector(`.${rootClass}`), {
        target: { scrollTop: 500 },
      });
    });
    expect(onScrollToUpper).not.toHaveBeenCalled();
    expect(onScroll).toHaveBeenCalledTimes(2);

    act(() => {
      fireEvent.scroll(container.querySelector(`.${rootClass}`), {
        target: { scrollTop: 200 },
      });
    });
    expect(onScrollToUpper).toHaveBeenCalled();
    expect(onScroll).toHaveBeenCalledTimes(3);

    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight,
    );
  });
  it('can scroll into view', async () => {
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetHeight',
    );
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
      configurable: true,
      value: 2000,
    });
    const App = () => {
      const [scrollIntoView, setScrollIntoView] = useState<
        string | undefined
      >();
      useEffect(() => {
        setScrollIntoView('item1');
      });
      return (
        <ScrollView
          scrollY
          style={{ height: '1000px' }}
          scrollIntoView={scrollIntoView}
          scrollIntoViewAlignment="start"
        >
          <div
            className="item"
            data-testid="item"
            id="item"
            style={{ height: '2000px' }}
          >
            test item
          </div>
          <div
            className="item1"
            data-testid="item1"
            id="item1"
            style={{ height: '2000px' }}
          >
            test item1
          </div>
        </ScrollView>
      );
    };
    const { container } = render(<App />);
    await act(async () =>
      waitFor(() => {
        expect(container.querySelector(`.${rootClass}`).scrollTop).toEqual(
          2000,
        );
      }),
    );

    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight,
    );
  });
  it('can scroll to scrollTop/scrollLeft', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    // eslint-disable-next-line react/prop-types
    const App = ({ x = false, isAnimated = false, isInit = false }) => {
      const [scrollTop, setScrollTop] = useState(isInit ? 3000 : 0);
      useEffect(() => {
        setTimeout(() => setScrollTop(3000), 10);
      });
      return (
        <ScrollView
          scrollY={!x}
          scrollX={x}
          style={{ height: '1000px', width: '1000px' }}
          scrollTop={x ? undefined : scrollTop}
          scrollLeft={!x ? undefined : scrollTop}
          scrollWithAnimation={isAnimated}
        >
          <div
            className="item"
            data-testid="item"
            id="item"
            style={{ height: '2000px', width: '2000px' }}
          >
            test item
          </div>
          <div
            className="item1"
            data-testid="item1"
            id="item1"
            style={{ height: '2000px', width: '2000px' }}
          >
            test item1
          </div>
        </ScrollView>
      );
    };
    const doTest = async (isAnimated, x, isInit) => {
      const { container } = render(
        <App isAnimated={isAnimated} x={x} isInit={isInit} />,
      );
      await waitFor(() => {
        expect(
          container.querySelector(`.${rootClass}`)[
            x ? 'scrollLeft' : 'scrollTop'
          ],
        ).toEqual(3000);
      });
    };
    await Promise.all([
      doTest(false, false, false),
      doTest(true, false, false),
      doTest(false, true, false),
      doTest(true, true, false),
      doTest(false, false, true),
      doTest(true, false, true),
      doTest(false, true, true),
      doTest(true, true, true),
    ]);
  });
});
