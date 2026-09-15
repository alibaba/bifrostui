import {
  CircleOutlinedIcon,
  ErrorCircleFilledIcon,
  SuccessCircleFilledIcon,
} from '@bifrostui/icons';
import clsx from 'clsx';
import React, { forwardRef, useContext } from 'react';
import './Step.less';
import { StepProps } from './Step.types';
import StepsContext from './StepsContext';

const classes = {
  root: 'bui-step',
  icon: 'bui-step-icon',
  line: 'bui-step-line',
  title: 'bui-step-title',
  subtitle: 'bui-step-subtitle',
};

const Step = forwardRef<HTMLDivElement, StepProps>(
  (
    {
      className,
      description,
      icon,
      title,
      subtitle,
      status,
      disabled = false,
      onClick,
      ...others
    },
    ref,
  ) => {
    const stepsContext = useContext(StepsContext);
    const { direction, labelPlacement, current, onChange } = stepsContext;
    const isTitleVertical = labelPlacement === 'vertical';

    const handleClick = (e) => {
      if (disabled) return;
      onClick?.(e, { current });
      onChange?.(e, { current });
    };

    const renderIcon = () => {
      const icons = {
        active: <div className={`${classes.icon}-active`} />,
        wait: <CircleOutlinedIcon color="disabled" />,
        finish: <SuccessCircleFilledIcon color="primary" />,
        error: <ErrorCircleFilledIcon color="primary" />,
      };

      if (icon) return icon;

      return icons[status];
    };

    return (
      <div
        className={clsx(classes.root, className, {
          [`${classes.root}-${direction}`]: direction,
          [`${classes.root}-label-${labelPlacement}`]: labelPlacement,
          [`${classes.root}-disabled`]: disabled,
        })}
        ref={ref}
        onClick={handleClick}
        {...others}
      >
        <div
          className={clsx(classes.line, {
            [`${classes.line}-${status}`]: status,
          })}
        />

        <div className={classes.icon}>{renderIcon()}</div>
        <div className={`${classes.root}-content`}>
          <div
            className={clsx(`${classes.title}-wrapper`, {
              [`${classes.title}-wrapper-vertical`]: isTitleVertical,
              [`${classes.title}-wrapper-line-${status}`]: status,
            })}
          >
            {!!title && (
              <div
                className={clsx(classes.title, `${classes.title}-${status}`, {
                  [`${classes.title}-${labelPlacement}`]: labelPlacement,
                })}
              >
                {title}
              </div>
            )}
            {!!subtitle && (
              <div
                className={clsx(classes.subtitle, {
                  [`${classes.subtitle}-${labelPlacement}`]: labelPlacement,
                })}
              >
                {subtitle}
              </div>
            )}
          </div>
          {!!description && (
            <div className={`${classes.root}-desc`}>{description}</div>
          )}
        </div>
      </div>
    );
  },
);

Step.displayName = 'Step';

export default Step;
