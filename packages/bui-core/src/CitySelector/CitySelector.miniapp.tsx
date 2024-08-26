import React, { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { CitySelectorProps } from './CitySelector.types';
import CitySelectorCore from './CitySelectorCore';
import './miniapp.less';

const CitySelector = React.forwardRef<HTMLDivElement, CitySelectorProps>(
  (props, ref) => {
    const { cities } = props;
    const containerTop = useRef(0);
    const codeHeight = useRef(0);
    const [height, setHeight] = useState('');

    useEffect(() => {
      if (cities?.length === 0 || codeHeight.current) return;
      Taro.createSelectorQuery()
        .select('.bui-city-selector-index-list')
        .boundingClientRect((rect: any) => {
          containerTop.current = rect?.top;
        })
        .exec();
      Taro.createSelectorQuery()
        .select('.bui-city-selector-index-item')
        .boundingClientRect((codeRect: any) => {
          codeHeight.current = codeRect?.height;
        })
        .exec();
    }, [cities, height]);

    useEffect(() => {
      if (!cities?.length || height) return;
      const { screenHeight } = Taro.getSystemInfoSync();

      Taro.createSelectorQuery()
        .select('.bui-city-selector-scroll-view-container')
        .boundingClientRect((codeRect: any) => {
          const domHeight = codeRect?.height;
          setHeight(`${(domHeight / screenHeight) * 100}vh`);
        })
        .exec();
    }, [cities]);

    const parseIndex = (length, index) => {
      if (index <= 0) return 0;
      if (index >= length - 1) return length - 1;
      return index;
    };

    const touchHandler = (event, scrollToCode, codeGroup) => {
      const { clientY } = event.changedTouches[0];
      let index = Math.floor(
        (clientY - containerTop.current) / codeHeight.current,
      );
      index = parseIndex(codeGroup.length, index);
      const codeItem = codeGroup[index];
      scrollToCode(codeItem.code || codeItem);
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
