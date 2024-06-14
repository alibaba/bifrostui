import useDomReadied from '../useDomReadied';
import { getTargetElement } from '../../domTarget';
import type { BasicTarget } from '../../domTarget';

function useDomCss(
  target: BasicTarget,
  computedStyle: string[],
  cb: (res: Record<string, any>) => void,
) {
  useDomReadied(() => {
    const ele = getTargetElement(target);
    const style = window.getComputedStyle(ele, null);

    const res = {};
    computedStyle.forEach((key) => {
      res[key] = style?.[key];
    });

    cb?.(res);
  });
}

export default useDomCss;
