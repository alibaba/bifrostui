import React, { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { CitySelectorProps } from './CitySelector.types';
import CitySelectorCore from './CitySelectorCore';

const CitySelector = React.forwardRef<HTMLDivElement, CitySelectorProps>(
  (props, ref) => {
    const { cities } = props;
    const containerTop = useRef(0);
    const codeHeight = useRef(0);
    const [height, setHeight] = useState('');

    const queryContainerTop = (cbk?) => {
      const query = Taro.createSelectorQuery();
      query.select('.bui-city-selector-index-container').boundingClientRect();
      query.exec((res) => {
        containerTop.current = res[0]?.top;
        cbk?.();
      });
    };

    useEffect(() => {
      if (cities?.length === 0 || codeHeight.current) return;
      // 演示获取字母高度
      setTimeout(() => {
        const query = Taro.createSelectorQuery();
        query.select('.bui-city-selector-index-item').boundingClientRect();
        query.exec((res) => {
          codeHeight.current = res[0]?.height;
        });
      }, 300);
    }, [cities, height]);

    useEffect(() => {
      if (!cities?.length || height) return;
      const { screenHeight } = Taro.getSystemInfoSync();
      const query = Taro.createSelectorQuery();
      query
        .select('.bui-city-selector-scroll-view-container')
        .boundingClientRect();
      query.exec((codeRect: any) => {
        const domHeight = codeRect?.[0]?.height;
        setHeight(`${(domHeight / screenHeight) * 100}vh`);
      });
    }, [cities]);

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
      <CitySelectorCore
        {...props}
        ref={ref}
        touchHandler={touchHandler}
        height={height}
      />
    );
  },
);

CitySelector.displayName = 'BuiCitySelector';

export default CitySelector;
