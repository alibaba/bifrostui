import Taro from '@tarojs/taro';
import type { TaroElement } from '@tarojs/runtime';

const getRootElement = (rootEle?: TaroElement | (() => TaroElement)) => {
  const currentPages = Taro.getCurrentPages() || [];
  const currentPage = currentPages[currentPages.length - 1];
  const pageElement = currentPage?.$taroPath;
  const defaultRootElement = document.getElementById(pageElement);

  const rootElement = typeof rootEle === 'function' ? rootEle() : rootEle;
  return rootElement || defaultRootElement;
};

export default getRootElement;
