import Taro from '@tarojs/taro';
import type { TaroElement } from '@tarojs/runtime';
import useDomReadied from '../useDomReadied';
import { getTargetElement } from '../../domTarget';

function useDomCss(
  target: TaroElement,
  computedStyle: string[],
  cb: (res: Record<string, any>) => void,
) {
  useDomReadied(() => {
    const ele = getTargetElement(target);
    if (ele) {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${ele?.uid}`)
        .fields({
          computedStyle,
        })
        .exec((res) => {
          cb?.(res?.[0]);
        });
    }
  });
}

export default useDomCss;
