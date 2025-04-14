import { StarFilledIcon } from '@bifrostui/icons';
import { useValue } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { RatingProps } from './Rating.types';
import './index.less';

const classes = {
  root: 'bui-rating',
  item: 'bui-rating-item',
  container: 'bui-rating-container',
};

const Rating = forwardRef<HTMLDivElement, RatingProps>((props, ref) => {
  const {
    className,
    size = 'medium',
    defaultValue,
    allowHalf = false,
    icon = <StarFilledIcon color="disabled" />,
    checkedIcon = <StarFilledIcon color="warning" />,
    count = 5,
    readOnly = false,
    disabled = false,
    value,
    onChange,
    name,
    disableClear = false,
    ...others
  } = props;
  const [rateValue, triggerChange] = useValue({
    value,
    defaultValue,
    onChange,
  });
  const rateItemList = [...new Array(count)];

  // 支付宝小程序的radio 无onChange、onClick事件，统一使用点击事件模拟
  const handleChange = (e: React.SyntheticEvent, v: number) => {
    if (readOnly || disabled) return;
    if (!disableClear && v === rateValue) {
      triggerChange(e, null);
    } else {
      triggerChange(e, v);
    }
  };

  const renderItem = (v: number, half?: boolean) => {
    const isActive = +rateValue >= v;
    return (
      <div
        className={clsx(classes.item, {
          [`${classes.item}-active`]: isActive,
          [`${classes.item}-half`]: half,
          [`${classes.item}-readonly`]: readOnly,
        })}
        onClick={(e) => handleChange(e, v)}
      >
        {!readOnly && (
          <input
            name={name}
            type="radio"
            checked={rateValue === v}
            disabled={disabled}
            value={v}
            onChange={(e) => handleChange(e, v)}
            className={`${classes.item}-input`}
          />
        )}
        {isActive ? checkedIcon : icon}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        classes.root,
        {
          [`${classes.root}-disabled`]: disabled,
        },
        className,
      )}
      ref={ref}
      {...others}
    >
      {rateItemList.map((_, i) => (
        <div
          key={i}
          className={clsx(classes.container, {
            [`${classes.container}-${size}`]: size,
          })}
        >
          {allowHalf && renderItem(i + 0.5, allowHalf)}
          {renderItem(i + 1)}
        </div>
      ))}
    </div>
  );
});

Rating.displayName = 'BuiRating';

export default Rating;
