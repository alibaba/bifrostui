import React, { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { ItemSelectorProps } from './ItemSelector.types';
import ItemSelectorCore from './ItemSelectorCore';

const ItemSelector = React.forwardRef<HTMLDivElement, ItemSelectorProps>(
  (props, ref) => {
    const { items } = props;
    const containerTop = useRef(0);
    const codeHeight = useRef(0);
    const [height, setHeight] = useState('');

    const queryContainerTop = (cbk?) => {
      const query = Taro.createSelectorQuery();
      query.select('.bui-item-selector-index-container').boundingClientRect();
      query.exec((res) => {
        containerTop.current = res[0]?.top;
        cbk?.();
      });
    };

    useEffect(() => {
      if (items?.length === 0 || codeHeight.current) return;
      // 演示获取字母高度
      setTimeout(() => {
        const query = Taro.createSelectorQuery();
        query.select('.bui-item-selector-index-item').boundingClientRect();
        query.exec((res) => {
          codeHeight.current = res[0]?.height;
        });
      }, 300);
    }, [items, height]);

    useEffect(() => {
      if (!items?.length || height) return;
      const { screenHeight } = Taro.getSystemInfoSync();
      const query = Taro.createSelectorQuery();
      query
        .select('.bui-item-selector-scroll-view-container')
        .boundingClientRect();
      query.exec((codeRect: any) => {
        const domHeight = codeRect?.[0]?.height;
        setHeight(`${(domHeight / screenHeight) * 100}vh`);
      });
    }, [items]);

    const parseIndex = (length, index) => {
      if (index <= 0) return 0;
      if (index >= length - 1) return length - 1;
      return index;
    };

    const pxToCode = (clientY, scrollToCode, codeGroup) => {
      let index = Math.floor(
        (clientY - containerTop.current) / codeHeight.current,
      );
      index = parseIndex(codeGroup.length, index);
      const codeItem = codeGroup[index];
      scrollToCode(codeItem.code || codeItem);
    };

    const touchHandler = (event, scrollToCode, codeGroup) => {
      const { clientY } = event.changedTouches[0];
      queryContainerTop(() => {
        pxToCode(clientY, scrollToCode, codeGroup);
      });
    };

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
