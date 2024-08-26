import React, { useEffect, useState } from 'react';
import { CitySelectorProps } from './CitySelector.types';
import CitySelectorCore from './CitySelectorCore';

const CitySelector = React.forwardRef<HTMLDivElement, CitySelectorProps>(
  (props, ref) => {
    const { cities } = props;
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
      if (!cities?.length || height) return;
      const screenHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const domHeight = document
        .querySelector('.bui-city-selector-scroll-view-container')
        ?.getBoundingClientRect().height;

      setHeight(`${(domHeight / screenHeight) * 100}vh`);
    }, [cities]);

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
