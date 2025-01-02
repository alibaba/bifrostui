const root = window || global;
let rafId: number;
let prev = Date.now();

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
  cancelRaf(rafId);

  let count = 0;
  const from = scroller.scrollLeft;
  const frames = duration === 0 ? 1 : Math.round(duration / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;
    count += 1;
    if (count < frames) {
      rafId = raf(animate);
    }
  }

  animate();
};

export default scrollLeftTo;
