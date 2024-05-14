import blockTouch from '../touchBlocker';

describe('touchBlocker', () => {
  let removeEventListeners;
  let root;

  beforeEach(() => {
    root = document.createElement('div');
    removeEventListeners = blockTouch(root);
  });

  afterEach(() => {
    removeEventListeners();
  });

  test('should not be prevented when cancelled', () => {
    const scrollContainer = document.createElement('div');
    scrollContainer.style.overflowY = 'scroll';
    root.appendChild(scrollContainer);

    const touchStart = new TouchEvent('touchstart', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchMove = new TouchEvent('touchmove', {
      touches: [
        // @ts-ignore
        { screenX: 1000, screenY: 1000 },
      ],
      cancelable: true,
      bubbles: true,
    });

    removeEventListeners();
    scrollContainer.dispatchEvent(touchStart);
    scrollContainer.dispatchEvent(touchMove);
    expect(touchMove.defaultPrevented).toBe(false);
  });
  test('touchmove event should be prevented when scrolling horizontally', () => {
    const scrollContainer = document.createElement('div');
    scrollContainer.style.overflowX = 'scroll';
    root.appendChild(scrollContainer);

    const touchStart = new TouchEvent('touchstart', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchMove = new TouchEvent('touchmove', {
      touches: [
        // @ts-ignore
        { screenX: 1000, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });

    scrollContainer.dispatchEvent(touchStart);
    scrollContainer.dispatchEvent(touchMove);
    expect(touchMove.defaultPrevented).toBe(true);
  });
  test('touchmove event should be prevented when scrolling vertically', () => {
    const scrollContainer = document.createElement('div');
    scrollContainer.style.overflowY = 'scroll';
    root.appendChild(scrollContainer);

    const touchStart = new TouchEvent('touchstart', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchMove = new TouchEvent('touchmove', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 1000 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchEnd = new TouchEvent('touchend', { touches: [] });

    scrollContainer.dispatchEvent(touchStart);
    scrollContainer.dispatchEvent(touchMove);
    root.dispatchEvent(touchEnd);

    expect(touchMove.defaultPrevented).toBe(true);
  });
  test('should not be prevented when scrollTop is not 0 and dir is less than 0', () => {
    const scrollContainer = document.createElement('div');
    scrollContainer.style.overflowY = 'scroll';
    scrollContainer.scrollTop = 10;
    root.appendChild(scrollContainer);

    const touchStart = new TouchEvent('touchstart', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchMove = new TouchEvent('touchmove', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 1000 },
      ],
      cancelable: true,
      bubbles: true,
    });
    scrollContainer.dispatchEvent(touchStart);
    scrollContainer.dispatchEvent(touchMove);

    expect(touchMove.defaultPrevented).toBe(false);
  });
  test('should not be prevented when scrollLeft is not 0 and dir is less than 0', () => {
    const scrollContainer = document.createElement('div');
    scrollContainer.style.overflowX = 'scroll';
    scrollContainer.scrollLeft = 10;

    root.appendChild(scrollContainer);

    const touchStart = new TouchEvent('touchstart', {
      touches: [
        // @ts-ignore
        { screenX: 0, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    const touchMove = new TouchEvent('touchmove', {
      touches: [
        // @ts-ignore
        { screenX: 1000, screenY: 0 },
      ],
      cancelable: true,
      bubbles: true,
    });
    scrollContainer.dispatchEvent(touchStart);
    scrollContainer.dispatchEvent(touchMove);

    expect(touchMove.defaultPrevented).toBe(false);
  });
});
