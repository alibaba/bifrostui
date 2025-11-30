/* eslint-disable no-param-reassign */

const root = window || global;
let prev = Date.now();

// 用于存储每个元素的 rafId，避免多个 Tabs 实例相互干扰
const rafIdMap = new WeakMap<HTMLElement, number>();

const rafPolyfill = (fn: FrameRequestCallback) => {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
};

const cancelRaf = (id: number) => {
  const cancelAnimationFrame =
    root?.cancelAnimationFrame || root?.clearTimeout || clearTimeout;
  cancelAnimationFrame.call(root, id);
};

const raf = (fn: FrameRequestCallback): number => {
  const requestAnimationFrame = root?.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fn);
};

const scrollLeftTo = (scroller: HTMLElement, to: number, duration: number) => {
  // 取消当前元素正在进行的滚动动画
  const existingRafId = rafIdMap.get(scroller);
  if (existingRafId !== undefined) {
    cancelRaf(existingRafId);
  }

  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round(duration / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    count += 1;
    if (count < frames) {
      const newRafId = raf(animate);
      rafIdMap.set(scroller, newRafId);
    } else {
      rafIdMap.delete(scroller);
    }
  }

  animate();
};

export default scrollLeftTo;
