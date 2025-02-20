import Taro from '@tarojs/taro';
import { isTt, isWeapp } from '../isMini';

// 导出一个默认函数，用于获取元素的位置信息
export default function getBoundingClientRect(ele): Promise<DOMRect> {
  return new Promise(async (resolve) => {
    if (isWeapp || isTt) {
      resolve(await ele.getBoundingClientRect());
    } else {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${ele.uid}`)
        .boundingClientRect()
        .exec(([res]) => {
          resolve(res);
        });
    }
  });
}
