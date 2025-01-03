import Taro from '@tarojs/taro';

const getScrollRect = () => {
  return new Promise((resolve) => {
    Taro.createSelectorQuery()
      .selectViewport() // 选择整个视口
      .scrollOffset() // 获取滚动条距离顶部的距离等信息
      .exec((res) => {
        resolve({
          top: res[0].scrollTop,
          left: res[0].scrollLeft,
        });
      });
  });
};

export default getScrollRect;
