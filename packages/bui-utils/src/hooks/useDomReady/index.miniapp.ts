import Taro from '@tarojs/taro';

function useDomReady(cb: () => void) {
  Taro.useReady(() => {
    Taro.nextTick(() => {
      cb?.();
    });
  });
}

export default useDomReady;
