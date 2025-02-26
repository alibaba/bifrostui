import Taro from '@tarojs/taro';

export default (fn) => {
  Taro.nextTick(() => {
    fn();
  });
};
