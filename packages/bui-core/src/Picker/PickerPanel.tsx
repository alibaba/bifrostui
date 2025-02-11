import clsx from 'clsx';
import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import { useTouch, useForkRef, useTouchEmulator } from '@bifrostui/utils';
import { PickerPanelProps } from './Picker.types';
import './PickerPanel.less';

const prefixCls = 'bui-picker-panel';

const PickerPanel = React.forwardRef<HTMLDivElement, PickerPanelProps>(
  (props, ref) => {
    const {
      options = [],
      defaultValue,
      onSelect,
      columnIndex,
      pickerStyle,
      ...others
    } = props;

    const touch = useTouch();
    let timer;
    // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `INERTIA_TIME` 且 move 距离大于 `INERTIA_DISTANCE` 时，触发惯性滑动
    const INERTIA_TIME = 200;
    const INERTIA_DISTANCE = 15;

    const DEFAULT_DURATION = 200;
    const ROTATION = 20;
    const TOUCH_END = 'end';
    // 默认行高
    const DEFAULT_LINE_SPACING = 36;
    const LINE_SPACING_STR = (
      pickerStyle?.['--option-height']
        ? `${pickerStyle?.['--option-height']}`
        : `${DEFAULT_LINE_SPACING}`
    ).match(/\d+/)?.[0];
    const LINE_SPACING = parseInt(LINE_SPACING_STR, 10);
    const INDICATOR_OFFSET = (LINE_SPACING * 108) / DEFAULT_LINE_SPACING;

    const [startY, setStartY] = useState(0);
    const [currIndex, setCurrIndex] = useState(1);
    const [startTime, setStartTime] = useState(0);

    const [touchTime, setTouchTime] = useState(0);
    const [touchDeg, setTouchDeg] = useState('0deg');
    const [scrollDistance, setScrollDistance] = useState(0);

    const transformY = useRef(0);
    const isVerticalMoving = useRef(false);
    const rollerRef = useRef(null);
    const PickerPanelRef = useRef(null);
    const pickerPanelRef = useForkRef(PickerPanelRef, ref);
    useTouchEmulator(PickerPanelRef.current);

    const updateSelect = () => {
      let index = -1;
      if (defaultValue) {
        options.some((item, idx) => {
          if (item.value === defaultValue) {
            index = idx;
            return true;
          }
          return false;
        });
      }

      setCurrIndex(index === -1 ? 1 : index + 1);
      const move = index === -1 ? 0 : index * LINE_SPACING;
      setMove({ move: -move });
    };

    useEffect(() => {
      setScrollDistance(0);
      transformY.current = 0;
      updateSelect();
      return () => {
        clearTimeout(timer);
      };
    }, [options, defaultValue]);

    const setTransform = (
      type: string,
      deg: string,
      time = DEFAULT_DURATION,
      translateY = 0,
    ) => {
      let nTime = time;
      if (type !== TOUCH_END) {
        nTime = 0;
      }
      setTouchTime(nTime);
      setTouchDeg(deg);
      setScrollDistance(translateY);
    };

    const setMove = (config: {
      move: number;
      type?: string;
      time?: number;
    }) => {
      const { move, type, time } = config || {};

      let updateMove = move + transformY.current;
      if (type === TOUCH_END) {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(options.length - 1) * LINE_SPACING) {
          updateMove = -(options.length - 1) * LINE_SPACING;
        }

        // 设置滚动距离为LINE_SPACING的倍数值
        const endMove = Math.round(updateMove / LINE_SPACING) * LINE_SPACING;
        const deg = `${
          (Math.abs(Math.round(endMove / LINE_SPACING)) + 1) * ROTATION
        }deg`;

        setTransform(type, deg, time, endMove);
        setCurrIndex(Math.abs(Math.round(endMove / LINE_SPACING)) + 1);
      } else {
        let deg = 0;
        const currentDeg = (-updateMove / LINE_SPACING + 1) * ROTATION;

        // picker 滚动的最大角度
        const maxDeg = (options.length + 1) * ROTATION;
        const minDeg = 0;

        deg = Math.min(Math.max(currentDeg, minDeg), maxDeg);

        if (minDeg < deg && deg < maxDeg) {
          setTransform('', `${deg}deg`, undefined, updateMove);
          setCurrIndex(Math.abs(Math.round(updateMove / LINE_SPACING)) + 1);
        }
      }
    };

    // 惯性滚动距离
    const momentum = (distance: number, duration: number) => {
      let nDistance = distance;
      // 惯性滚动的速度
      const speed = Math.abs(nDistance / duration);
      // 惯性滚动的距离
      nDistance = (speed / 0.003) * (nDistance < 0 ? -1 : 1);
      return nDistance;
    };

    const panelTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      touch.start(event);
      setStartY(touch.deltaY.current);
      setStartTime(Date.now());
      transformY.current = scrollDistance;
    };

    const panelTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      touch.move(event);
      if (touch.isVertical) {
        isVerticalMoving.current = true;
        event.preventDefault();
        event.stopPropagation();
      }
      const move = touch.deltaY.current - startY;
      setMove({ move });
    };

    const panelTouchEnd = () => {
      if (!isVerticalMoving.current) return;
      const move = touch.deltaY.current - startY;
      const moveTime = Date.now() - startTime;
      if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        // 惯性滚动
        const distance = momentum(move, moveTime);
        setMove({
          move: distance,
          type: TOUCH_END,
          time: 1000,
        });
      } else {
        // 非惯性滚动
        setMove({
          move,
          type: TOUCH_END,
        });
      }
      timer = setTimeout(() => {
        touch.reset();
      }, 0);
    };

    useEffect(() => {
      PickerPanelRef.current?.addEventListener('touchstart', panelTouchStart);
      PickerPanelRef.current?.addEventListener('touchmove', panelTouchMove);
      PickerPanelRef.current?.addEventListener('touchend', panelTouchEnd);
      return () => {
        PickerPanelRef.current?.removeEventListener(
          'touchstart',
          panelTouchStart,
        );
        PickerPanelRef.current?.removeEventListener(
          'touchmove',
          panelTouchMove,
        );
        PickerPanelRef.current?.removeEventListener('touchend', panelTouchEnd);
      };
    });

    const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
      isVerticalMoving.current = false;
      setTouchTime(0);
      onSelect?.(e, {
        columnOption: options?.[Math.round(-scrollDistance / LINE_SPACING)],
        columnIndex,
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useImperativeHandle(ref, (): any => ({
      isMoving: isVerticalMoving.current,
    }));

    return (
      <div
        className={prefixCls}
        ref={pickerPanelRef}
        onTouchStart={panelTouchStart}
        onTouchMove={panelTouchMove}
        onTouchEnd={panelTouchEnd}
        {...others}
      >
        <div
          className={`${prefixCls}-roller`}
          ref={rollerRef}
          style={{
            transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
            transform: `rotate3d(1, 0, 0, ${touchDeg})`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {options.map((item, i) => (
            <div
              className={clsx(`${prefixCls}-option`, {
                [`${prefixCls}-option-hidden`]:
                  i + 1 <= currIndex - 8 || i + 1 >= currIndex + 8,
              })}
              key={`${item?.value}-${i}`}
              style={{
                transform: `rotate3d(1, 0, 0, ${
                  -ROTATION * (i + 1)
                }deg) translate3d(0px, 0px, ${INDICATOR_OFFSET}px)`,
              }}
            >
              {item?.label}
            </div>
          ))}
        </div>
        <div className={`${prefixCls}-mask`} />
        <div className={`${prefixCls}-indicator`} />
      </div>
    );
  },
);

PickerPanel.displayName = 'BuiPickerPanel';

export default PickerPanel;
