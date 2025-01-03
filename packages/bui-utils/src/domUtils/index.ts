const getScrollRect = () => {
  return Promise.resolve({
    top:
      (window.scrollY >= 0 && window.scrollY) ||
      document.documentElement.scrollTop,
    left:
      (window.scrollX >= 0 && window.scrollX) ||
      document.documentElement.scrollLeft,
  });
};

export default getScrollRect;
