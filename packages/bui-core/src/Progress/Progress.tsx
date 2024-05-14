import clsx from 'clsx';
import React from 'react';
import {
  ProgressGradient,
  ProgressProps,
  ProgressStringGradients,
} from './Progress.types';
import './Progress.less';

const prefixCls = 'bui-progress';

function validProgress(progress: number | undefined) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
const sortGradient = (gradients: ProgressStringGradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!Number.isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key],
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({ key, value }) => `${value} ${key}%`).join(', ');
};
export const handleGradient = (strokeColor: ProgressGradient) => {
  const { from, to, direction = 'to right', ...rest } = strokeColor;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest as ProgressStringGradients);
    return {
      backgroundImage: `linear-gradient(${direction}, ${sortedGradients})`,
    };
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` };
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      className,
      percent,
      strokeWidth,
      strokeColor,
      trailColor,
      ...others
    } = props;

    const backgroundProps =
      strokeColor && typeof strokeColor !== 'string'
        ? handleGradient(strokeColor)
        : {
            background: strokeColor,
          };

    const percentStyle = {
      width: `${validProgress(percent)}%`,
      height: strokeWidth,
      ...backgroundProps,
    } as React.CSSProperties;

    const trailStyle = {
      background: trailColor || undefined,
    } as React.CSSProperties;

    return (
      <div className={clsx(prefixCls, className)} ref={ref} {...others}>
        <div className={`${prefixCls}-inner`} style={trailStyle}>
          <div className={`${prefixCls}-bg`} style={percentStyle} />
        </div>
      </div>
    );
  },
);

Progress.displayName = 'BuiProgress';

export default Progress;
