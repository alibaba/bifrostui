// code from https://github.com/reactjs/react-transition-group/blob/master/src/CSSTransition.js
import React, { useRef } from 'react';
import {
  addClass as addOneClass,
  removeClass as removeOneClass,
} from '@bifrostui/utils';
import Transition from '../Transition';
import { CSSTransitionProps } from './CSSTransition.types';

const forceReflow = (node) => node.scrollTop;

const benchAddClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => addOneClass(node, c));

const benchRemoveClass = (node, classes) =>
  node && classes && classes.split(' ').forEach((c) => removeOneClass(node, c));

const CSSTransition = React.forwardRef<HTMLElement, CSSTransitionProps>(
  (props, ref) => {
    const { classNames = '', ...others } = props;
    const appliedClasses = useRef({
      appear: {},
      enter: {},
      exit: {},
    });

    const getClassNames = (type) => {
      const isStringClassNames = typeof classNames === 'string';
      const prefix = isStringClassNames && classNames ? `${classNames}-` : '';

      if (isStringClassNames) {
        return {
          baseClassName: `${prefix}${type}`,
          activeClassName: `${prefix}${type}-active`,
          doneClassName: `${prefix}${type}-done`,
        };
      }

      // Handle object classNames
      return {
        baseClassName: classNames?.[type],
        activeClassName: classNames?.[`${type}Active`],
        doneClassName: classNames?.[`${type}Done`],
      };
    };

    const addClass = (node, type, phase) => {
      const className = getClassNames(type)[`${phase}ClassName`];

      // This is to force a repaint,
      // which is necessary in order to transition styles when adding a class name.
      if (phase === 'active') {
        if (node) forceReflow(node);
      }

      if (className) {
        appliedClasses.current[type][phase] = className;
        benchAddClass(node, className);
      }
    };

    const removeClasses = (node, type) => {
      const {
        base: baseClassName,
        active: activeClassName,
        done: doneClassName,
      } = appliedClasses.current[type];

      appliedClasses.current[type] = {};

      if (baseClassName) {
        benchRemoveClass(node, baseClassName);
      }
      if (activeClassName) {
        benchRemoveClass(node, activeClassName);
      }
      if (doneClassName) {
        benchRemoveClass(node, doneClassName);
      }
    };

    const onEnter = (node) => {
      removeClasses(node, 'exit');
      addClass(node, 'enter', 'base');

      if (props.onEnter) {
        props.onEnter(node);
      }
    };

    const onEntering = (node) => {
      addClass(node, 'enter', 'active');
      if (props.onEntering) {
        props.onEntering(node);
      }
    };

    const onEntered = (node) => {
      removeClasses(node, 'enter');
      addClass(node, 'enter', 'done');
      if (props.onEntered) {
        props.onEntered(node);
      }
    };

    const onExit = (node) => {
      removeClasses(node, 'enter');
      addClass(node, 'exit', 'base');
      if (props.onExit) {
        props.onExit(node);
      }
    };

    const onExiting = (node) => {
      addClass(node, 'exit', 'active');
      if (props.onExiting) {
        props.onExiting(node);
      }
    };

    const onExited = (node) => {
      removeClasses(node, 'exit');
      addClass(node, 'exit', 'done');
      if (props.onExited) {
        props.onExited(node);
      }
    };

    return (
      <Transition
        ref={ref}
        delay={0}
        {...others}
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      />
    );
  },
);

CSSTransition.displayName = 'BuiCSSTransition';

export default CSSTransition;
