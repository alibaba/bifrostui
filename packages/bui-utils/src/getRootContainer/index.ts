const getRootContainer = (
  rootCon?: HTMLElement | (() => HTMLElement) | Window,
  defaultCon?: any,
) => {
  const rootElement = typeof rootCon === 'function' ? rootCon() : rootCon;
  const defaultRootElement = document.body;

  return rootElement || defaultCon || defaultRootElement;
};

export default getRootContainer;
