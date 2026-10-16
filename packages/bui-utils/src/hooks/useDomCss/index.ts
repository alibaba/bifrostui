import useDomReady from '../useDomReady';
import { getTargetElement } from '../../domTarget';
import type { BasicTarget } from '../../domTarget';

function useDomCss(
  target: BasicTarget,
  computedStyle: string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cb: (res: Record<string, any>) => void,
) {
  useDomReady(() => {
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
