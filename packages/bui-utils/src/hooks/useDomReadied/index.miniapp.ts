import Taro from '@tarojs/taro';

function useDomReadied(cb: () => void) {
  Taro.useReady(() => {
    Taro.nextTick(() => {
      cb?.();
    });
  });
}

export default useDomReadied;
