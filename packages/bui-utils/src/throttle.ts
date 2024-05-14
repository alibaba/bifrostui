interface OptionsThrottle {
  leading?: boolean;
  trailing?: boolean;
}

export default function throttle(
  fn: any,
  interval = 200,
  options: OptionsThrottle = { leading: true, trailing: false },
) {
  // 1.记录上一次的开始时间
  const { leading = true, trailing = false } = options;

  let lastTime = 0;
  let timer = null;

  // 2.事件触发时, 真正执行的函数
  /* eslint no-underscore-dangle: 0 */
  const _throttle = function (...args) {
    // 2.1.获取当前事件触发时的时间
    const nowTime = new Date().getTime();
    if (!lastTime && !leading) lastTime = nowTime;

    // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      // 2.3.真正触发函数
      fn.apply(this, args);
      // 2.4.保留上次触发的时间
      lastTime = nowTime;
      return;
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
        fn.apply(this, args);
      }, remainTime);
    }
  };

  return _throttle;
}
