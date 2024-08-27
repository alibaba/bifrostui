import React from 'react';
import { cityType } from '../CitySelector.types';
import './index.less';

type propsType = {
  city: cityType;
  onSelect: (e: React.SyntheticEvent, city: cityType) => void;
};

const Selector = (props: propsType) => {
  const { city, onSelect } = props;
  return (
    <span
      className="bui-city-selector-item"
      onClick={(e) => {
        onSelect?.(e, city);
      }}
    >
      {city.name}
    </span>
  );
};

export default Selector;
