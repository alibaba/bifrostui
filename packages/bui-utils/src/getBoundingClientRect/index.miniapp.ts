import Taro from '@tarojs/taro';
import { isTT, isWeapp } from '../isMini';

// 导出一个默认函数，用于获取元素的位置信息
export default async function getBoundingClientRect(ele): Promise<DOMRect> {
  let result;
  if (isWeapp || isTT) {
    result = await ele.getBoundingClientRect();
  } else {
    const query = Taro.createSelectorQuery();
    result = await new Promise((resolve) => {
      query
        .select(`#${ele.uid}`)
        .boundingClientRect()
        .exec(([res]) => {
          resolve(res);
        });
    });
  }
  return result;
}
