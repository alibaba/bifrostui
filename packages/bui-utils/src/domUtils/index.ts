export const getClientRect = () => {
  const width = window.innerWidth || document.documentElement.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return Promise.resolve({
    width,
    height,
    left: 0,
    top: 0,
    right: width,
    bottom: height,
  });
};

export const getScrollRect = () => {
  return Promise.resolve({
    top:
      (window.scrollY >= 0 && window.scrollY) ||
      document.documentElement.scrollTop,
    left:
      (window.scrollX >= 0 && window.scrollX) ||
      document.documentElement.scrollLeft,
  });
};
