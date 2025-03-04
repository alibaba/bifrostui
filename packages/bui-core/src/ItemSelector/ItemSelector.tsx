import React, { useEffect, useState } from 'react';
import { ItemSelectorProps } from './ItemSelector.types';
import ItemSelectorCore from './ItemSelectorCore';

const ItemSelector = React.forwardRef<HTMLDivElement, ItemSelectorProps>(
  (props, ref) => {
    const { items } = props;
    const [height, setHeight] = useState('');
    const touchHandler = (e, scrollToCode) => {
      const t: any = document.elementFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY,
      );
      const code = t?.dataset?.code;
      scrollToCode(code);
    };

    useEffect(() => {
      if (!items?.length || height) return;
      const screenHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const domHeight = document
        .querySelector('.bui-item-selector-scroll-view-container')
        ?.getBoundingClientRect().height;

      setHeight(`${(domHeight / screenHeight) * 100}vh`);
    }, [items]);

    return (
      <ItemSelectorCore
        {...props}
        ref={ref}
        touchHandler={touchHandler}
        height={height}
      />
    );
  },
);

ItemSelector.displayName = 'BuiItemSelector';
export default ItemSelector;
