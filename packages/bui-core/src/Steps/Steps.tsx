import { toArray } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { cloneElement, forwardRef } from 'react';
import './Steps.less';
import { StepsProps } from './Steps.types';
import { StepsContextProvider } from './StepsContext';

const prefixCls = 'bui-steps';

const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const {
    className,
    children,
    direction,
    current,
    labelPlacement,
    onChange,
    ...others
  } = props;

  const renderStep = () => {
    return toArray(children).map((child, index) => {
      const childProps = {
        key: index,
        ...child.props,
      };

      if (!child.props.status) {
        if (index === current) {
          childProps.status = 'active';
        } else if (index < current) {
          childProps.status = 'finish';
        } else {
          childProps.status = 'wait';
        }
      }

      return cloneElement(child, childProps);
    });
  };

  return (
    <StepsContextProvider
      value={{
        direction,
        current,
        labelPlacement,
        onChange,
      }}
    >
      <div
        className={clsx(prefixCls, className, {
          [`${prefixCls}-${direction}`]: direction,
        })}
        ref={ref}
        {...others}
      >
        {renderStep()}
      </div>
    </StepsContextProvider>
  );
});

Steps.displayName = 'Steps';
Steps.defaultProps = {
  current: 0,
  direction: 'vertical',
  labelPlacement: 'horizontal',
};

export default Steps;
