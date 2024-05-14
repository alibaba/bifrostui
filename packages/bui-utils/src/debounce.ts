export default function debounce(func: any, wait: number, immediate?: boolean) {
  let timeout;
  return function (...args) {
    if (immediate && !timeout) func.apply(this, args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }, wait);
  };
}
