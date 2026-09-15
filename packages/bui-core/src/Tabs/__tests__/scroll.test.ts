import scrollLeftTo from '../utils/scroll';

// 创建一个自定义的 HTML 元素用于测试
const createScroller = (scrollLeft = 0) => {
  const scroller = document.createElement('div');
  scroller.style.overflowX = 'scroll';
  scroller.style.width = '100px';
  scroller.style.height = '100px';

  // 创建一个内嵌的宽度大于 scroller 的子元素
  const content = document.createElement('div');
  content.style.width = '200px';
  content.style.height = '100%';

  scroller.appendChild(content);
  scroller.scrollLeft = scrollLeft;

  return scroller;
};

describe('scrollLeftTo', () => {
  let scroller: HTMLElement;

  beforeEach(() => {
    scroller = createScroller();
    document.body.appendChild(scroller);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.clearAllTimers(); // 清除所有定时器
  });

  test('should scroll left to the correct position over the specified duration', () => {
    scroller.scrollLeft = 0;
    scrollLeftTo(scroller, 160, 160);

    expect(scroller.scrollLeft).toBe(16);
  });

  test('should handle zero duration', () => {
    scrollLeftTo(scroller, 100, 0);
    expect(scroller.scrollLeft).toBe(100);
  });

  test('should work currrently when requestAnimationFrame is not available', () => {
    window.requestAnimationFrame = undefined;
    scroller.scrollLeft = 0;
    scrollLeftTo(scroller, 160, 160);

    expect(scroller.scrollLeft).toBe(16);
  });
});
