import React from 'react';
import { itemType } from '../ItemSelector.types';
import './index.less';

type propsType = {
  item: itemType;
  onSelect: (e: React.SyntheticEvent, item: itemType) => void;
};

const Selector = (props: propsType) => {
  const { item, onSelect } = props;
  return (
    <span
      className="bui-item-selector-item"
      onClick={(e) => {
        onSelect?.(e, item);
      }}
    >
      {item.name}
    </span>
  );
};

export default Selector;
