import Taro from '@tarojs/taro';
import type { TaroElement } from '@tarojs/runtime';

export default function getBoundingClientRect(
  ele: TaroElement,
): Promise<DOMRect> {
  return new Promise((resolve) => {
    const query = Taro.createSelectorQuery();
    query
      .select(`#${ele.uid}`)
      .boundingClientRect()
      .exec(([res]) => {
        resolve(res);
      });
  });
}
