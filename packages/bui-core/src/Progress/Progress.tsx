import clsx from 'clsx';
import React from 'react';
import {
  ProgressGradient,
  ProgressProps,
  ProgressStringGradients,
} from './Progress.types';
import './index.less';

const prefixCls = 'bui-progress';

// 校验进度值，确保在0-100区间
function validProgress(progress: number | undefined) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}

// 对渐变色对象按百分比排序，并格式化为CSS渐变字符串
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

// 处理渐变色strokeColor，生成linear-gradient样式对象
export const handleGradient = (strokeColor: ProgressGradient) => {
  const { from, to, direction = 'to right', ...rest } = strokeColor;
  // rest为自定义的渐变点，如{ '0%': '#fff', '100%': '#000' }
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest as ProgressStringGradients);
    return {
      backgroundImage: `linear-gradient(${direction}, ${sortedGradients})`,
    };
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` };
};

// 进度条主组件
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref) => {
    const {
      className,
      percent = 0, // 当前进度百分比
      strokeWidth, // 进度条高度
      strokeColor, // 进度条颜色或渐变
      trailColor, // 轨道颜色
      // 无障碍属性
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-busy': ariaBusy,
      'aria-readonly': ariaReadonly,
      'aria-required': ariaRequired,
      'aria-valuenow': ariaValueNow,
      'aria-valuemin': ariaValueMin = 0,
      'aria-valuemax': ariaValueMax = 100,
      'aria-valuetext': ariaValueText,
      ...others
    } = props;

    // 处理进度条颜色，支持渐变和纯色
    const backgroundProps =
      strokeColor && typeof strokeColor !== 'string'
        ? handleGradient(strokeColor)
        : {
            background: strokeColor,
          };

    // 进度条样式
    const percentStyle = {
      width: `${validProgress(percent)}%`,
      height: strokeWidth,
      ...backgroundProps,
    } as React.CSSProperties;

    // 轨道样式
    const trailStyle = {
      background: trailColor || undefined,
    } as React.CSSProperties;

    // 构建无障碍属性对象
    const accessibilityProps = {
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      'aria-details': ariaDetails,
      'aria-busy': ariaBusy,
      'aria-readonly': ariaReadonly,
      'aria-required': ariaRequired,
      'aria-valuenow':
        ariaValueNow !== undefined ? ariaValueNow : validProgress(percent),
      'aria-valuemin': ariaValueMin,
      'aria-valuemax': ariaValueMax,
      'aria-valuetext': ariaValueText,
      role: 'progressbar',
    };

    return (
      // 外层容器
      <div
        className={clsx(prefixCls, className)}
        ref={ref}
        {...accessibilityProps}
        {...others}
      >
        {/* 轨道 */}
        <div className={`${prefixCls}-inner`} style={trailStyle}>
          {/* 进度条 */}
          <div className={`${prefixCls}-bg`} style={percentStyle} />
        </div>
      </div>
    );
  },
);

Progress.displayName = 'BuiProgress';

export default Progress;
