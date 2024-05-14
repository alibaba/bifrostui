import {
  CircleOutlinedIcon as RadioButtonUncheckedIcon,
  ISvgIconProps,
  RadioCheckedFilledIcon as RadioButtonCheckedIcon,
} from '@bifrostui/icons';
import clsx from 'clsx';
import React from 'react';

export interface IRadioButtonIconProps extends ISvgIconProps {
  checked?: boolean;
}

const prefixCls = 'bui-radio-btn-icon';

function RadioButtonIcon(props: IRadioButtonIconProps) {
  const { checked, size = 'medium', color, htmlColor = '#959aa5' } = props;

  return (
    <span
      className={clsx(prefixCls, {
        [`${prefixCls}-checked`]: checked,
      })}
    >
      <RadioButtonUncheckedIcon
        size={size}
        color={checked ? 'primary' : color}
        htmlColor={htmlColor}
        className={`${prefixCls}-outline`}
      />
      <RadioButtonCheckedIcon
        size={size}
        color={checked ? 'primary' : color}
        htmlColor={htmlColor}
        className={`${prefixCls}-contained`}
      />
    </span>
  );
}

RadioButtonIcon.defaultProps = {
  checked: false,
};

export default RadioButtonIcon;
