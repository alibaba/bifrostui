const getRootElement = (rootEle?: HTMLElement | (() => HTMLElement)) => {
  const rootElement = typeof rootEle === 'function' ? rootEle() : rootEle;
  const defaultRootElement = document.body;

  return rootElement || defaultRootElement;
};

export default getRootElement;
