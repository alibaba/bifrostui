import React from 'react';
import clsx from 'clsx';
import { cityType } from '../CitySelector.types';
import './index.less';

type propsType = {
  className: string;
  city: cityType;
  onSelect: (e: React.SyntheticEvent, city: cityType) => void;
};

const Selector = (props: propsType) => {
  const { className, city, onSelect } = props;
  return (
    <span
      className={clsx(className, 'bui-city-selector-item')}
      onClick={(e) => {
        onSelect?.(e, city);
      }}
    >
      {city.name}
    </span>
  );
};

export default Selector;
