const getRootContainer = (
  rootCon?: HTMLElement | (() => HTMLElement) | Window,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultCon?: any,
) => {
  const rootElement = typeof rootCon === 'function' ? rootCon() : rootCon;
  const defaultRootElement = document.body;

  return rootElement || defaultCon || defaultRootElement;
};

export default getRootContainer;
