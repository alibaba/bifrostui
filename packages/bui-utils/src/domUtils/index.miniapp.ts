import Taro from '@tarojs/taro';

export const getClientRect = () => {
  return new Promise((resolve, reject) => {
    try {
      const res = Taro.getSystemInfoSync();
      const clientInfo = {
        ...res,
        left: 0,
        top: 0,
        right: res.windowWidth,
        bottom: res.windowHeight,
      };
      resolve(clientInfo);
    } catch (error) {
      reject(error);
    }
  });
};

export const getScrollRect = () => {
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
