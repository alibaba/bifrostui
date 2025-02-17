import Taro from '@tarojs/taro';
import type { TaroElement } from '@tarojs/runtime';

const getRootContainer = (
  rootCon?: TaroElement | (() => TaroElement),
  defaultCon?: any,
) => {
  const currentPages = Taro.getCurrentPages() || [];
  const currentPage = currentPages[currentPages.length - 1];
  const pageElement = currentPage?.$taroPath;
  const defaultRootElement = document.getElementById(pageElement);

  const rootElement = typeof rootCon === 'function' ? rootCon() : rootCon;
  return rootElement || defaultCon || defaultRootElement;
};

export default getRootContainer;
