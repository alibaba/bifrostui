import React from 'react';
import useDomReadied from './useDomReadied';
import getBoundingClientRect from '../getBoundingClientRect';
import { getTargetElement } from '../domTarget';
import type { BasicTarget } from '../domTarget';

type Size = { width: number; height: number };

function useSize(target: BasicTarget): Size {
  const [state, setState] = React.useState<Size>({} as Size);

  useDomReadied(() => {
    const el = getTargetElement(target);

    if (el) {
      getBoundingClientRect(el).then((res) => {
        setState({ width: res.width, height: res.height });
      });
    }
  });

  return state;
}

export default useSize;
