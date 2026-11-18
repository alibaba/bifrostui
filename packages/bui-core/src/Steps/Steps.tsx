import { toArray } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { cloneElement, forwardRef } from 'react';
import { StepsProps } from './Steps.types';
import { StepsContextProvider } from './StepsContext';
import './Steps.less';

const prefixCls = 'bui-steps';

const Steps = forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      className,
      children,
      direction = 'vertical',
      current = 0,
      labelPlacement = 'horizontal',
      onChange,
      ...others
    },
    ref,
  ) => {
    const renderStep = () => {
      return toArray(children).map((child, index) => {
        const typedChild = child as React.ReactElement<any>;
        const childProps: Record<string, any> = {
          key: index,
          ...typedChild.props,
        };

        if (!typedChild.props.status) {
          if (index === current) {
            childProps.status = 'active';
          } else if (index < current) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }

        return cloneElement(typedChild, childProps);
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
  },
);

Steps.displayName = 'Steps';

export default Steps;
