import { GripperBarVerticalIcon } from '@bifrostui/icons';
import {
  isMini,
  useForkRef,
  useTouchEmulator,
  useValue,
  getBoundingClientRect,
} from '@bifrostui/utils';
import clsx from 'clsx';
import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './Slider.less';
import { SliderProps, SliderValue } from './Slider.types';
import { formatValue, isSameValue, sortValue } from './utils';

const classes = {
  root: 'bui-slider',
  button: 'bui-slider-button',
  tooltip: 'bui-slider-tooltip',
  disabled: 'bui-slider-disabled',
};

const SLIDER_BUTTON = {
  FRONT: 0,
  END: 1,
};

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    className,
    defaultValue,
    value: valueProp,
    min,
    max,
    step,
    tipVisible,
    tooltipRender,
    disabled,
    startIcon,
    endIcon,
    disableSwap,
    onChange,
    ...others
  } = props;

  const initialDefaultValue = useRef(defaultValue);
  // 处理value/defaultValue都不传的异常场景
  const latestVal = useRef<any>(0);
  const shouldProtection =
    valueProp === undefined && defaultValue === undefined;
  const value = shouldProtection ? latestVal.current : valueProp;

  const [rootRef, setRootRef] = useState(null);
  const handleRef = useForkRef(ref, setRootRef);
  useTouchEmulator(rootRef);

  // Slider BoundingClientRect
  const sliderRect = useRef<Record<string, any>>();
  // 滑动开始距离文档X轴原点距离
  const touchStartPageX = useRef<number>();
  // 按钮在滑动开始时距离左边的距离
  const touchStartLeft = useRef<number>();
  // 记录操作按钮
  const buttonIndex = useRef(0);
  // 记录双滑块touchMove之前的值
  const beforeMoveValue = useRef([0, 0]);

  // 默认图标
  const defaultIcon = <GripperBarVerticalIcon htmlColor="#2e333e" />;
  // 根据初始化时的数据判断是否为双滑块
  const initialRange = useRef(
    (value !== undefined && Array.isArray(value)) ||
      (defaultValue !== undefined && Array.isArray(defaultValue)),
  );
  // 是否为双滑块
  const range = useMemo(() => {
    // defaultValue传state，且通过setState改变defaltValue类型，此时使用初始化时的range（initialRange）判断
    if (
      Array.isArray(defaultValue) &&
      !Array.isArray(initialDefaultValue.current)
    ) {
      return initialRange.current;
    }

    return (
      (value !== undefined && Array.isArray(value)) ||
      (defaultValue !== undefined && Array.isArray(defaultValue))
    );
  }, [value, defaultValue]);

  // 气泡提示显示与隐藏
  const [frontTooltipVisible, setFrontTooltipVisible] = useState(false);
  const [endTooltipVisible, setEndTooltipVisible] = useState(false);

  /**
   * 格式化value、defaultValue
   * @type undefined | number[]
   */
  const formattedValue = formatValue(value);
  const formattedDefaultValue = formatValue(defaultValue);

  /**
   * 使用格式化后的value、defaultValue初始化sliderValue，应始终使用triggerChange改变值
   * @type undefined | number[]
   */
  const [sliderValue, triggerChange] = useValue({
    value: formattedValue,
    defaultValue: formattedDefaultValue,
    onChange: (e, data) => {
      onChange?.(e, {
        value: data?.value,
        buttonIndex: buttonIndex.current,
      });
    },
    config: {
      name: 'Slider',
      state: 'value',
    },
  });

  // 内部状态值
  const internalValue = useMemo<[number, number]>(() => {
    return sliderValue === undefined
      ? [min, max]
      : (sliderValue as [number, number]);
  }, [sliderValue]);
  // 记录上一次值
  const preValueRef = useRef(internalValue[buttonIndex.current]);
  // 记录气泡值
  const tooltipRef = useRef(internalValue);

  // 最大最小值范围
  const scope = useMemo(() => Number(max) - Number(min), [max, min]);

  // 提示气泡展示逻辑
  const tooltipVisible = useMemo(() => {
    const startVisible =
      buttonIndex.current === SLIDER_BUTTON.FRONT && frontTooltipVisible;
    const endVisible =
      buttonIndex.current === SLIDER_BUTTON.END && endTooltipVisible;

    return tipVisible || (!tipVisible && (startVisible || endVisible));
  }, [tipVisible, frontTooltipVisible, endTooltipVisible]);

  // 着色条样式
  const lineStyle = useMemo(() => {
    const sortedValue = sortValue(internalValue);
    let width = `${((sortedValue[1] - sortedValue[0] - min) / scope) * 100}%`;
    // 单滑块模式但动态修改value为数组，此时按照数组最小值计算着色条宽度
    if (!range && Array.isArray(value)) {
      width = `${((sortedValue[0] - min) / scope) * 100}%`;
    }
    return {
      left: range ? `${((sortedValue[0] - min) / scope) * 100}%` : '0%',
      width,
    };
  }, [internalValue, scope, value]);

  const getLineWidth = useCallback(async () => {
    if (!rootRef) return;
    sliderRect.current = await getBoundingClientRect(rootRef);
  }, [rootRef]);

  useLayoutEffect(() => {
    // 处理小程序初始化获取不到dom的问题
    setTimeout(() => {
      getLineWidth();
    }, 100);
  }, [rootRef]);

  const onTouchStart = (e) => {
    if (disabled) return;
    beforeMoveValue.current = internalValue;
    tooltipRef.current = internalValue;
    // 补偿获取宽度，隐藏元素getBoundingClientRect获取不到dom信息
    if (!sliderRect.current.width) {
      getLineWidth();
    }
    // currentTarget只存在于事件触发到事件处理结束之间，须在异步操作之前保存下来
    const currentTarget = isMini ? e.mpEvent.currentTarget : e.currentTarget;
    touchStartPageX.current = e.touches[0].pageX;
    touchStartLeft.current = currentTarget?.offsetLeft;

    // 显示气泡提示
    if (buttonIndex.current === SLIDER_BUTTON.END) {
      setEndTooltipVisible(true);
    } else {
      setFrontTooltipVisible(true);
    }
  };

  const onTouchMove = (e) => {
    if (disabled) return;
    // 触碰点当前x坐标
    const currentX = e.touches[0].pageX;
    // X轴滑动距离
    const moveX = currentX - touchStartPageX.current;
    // 计算下一个值
    const posX =
      ((touchStartLeft.current + moveX) / sliderRect.current.width) * scope;
    // 兼容一位小数
    let nextPosition = step < 1 ? Math.round(posX * 10) / 10 : Math.round(posX);

    if (nextPosition <= 0) nextPosition = 0;
    if (nextPosition >= scope) nextPosition = scope;

    // 滑动最新值
    const nextValue = min + nextPosition;
    const inStep = nextValue % step === 0;

    // 滑动的最新值与上一次值不等时 & 符合当前步长，则更新sliderValue
    if (!isSameValue(nextValue, preValueRef.current) && inStep) {
      let latestValue: SliderValue = nextValue;
      preValueRef.current = nextValue;
      // 单滑块
      tooltipRef.current = [latestValue, 0];

      if (range) {
        latestValue = [...(beforeMoveValue.current as [number, number])];
        if (disableSwap) {
          // 滑动前按钮
          if (
            buttonIndex.current === SLIDER_BUTTON.FRONT &&
            nextValue >= latestValue[SLIDER_BUTTON.END]
          ) {
            latestValue[SLIDER_BUTTON.END] = nextValue;
          } else {
            latestValue[buttonIndex.current] = nextValue;
          }
          // 滑动后按钮
          if (
            buttonIndex.current === SLIDER_BUTTON.END &&
            nextValue <= latestValue[SLIDER_BUTTON.FRONT]
          ) {
            latestValue[SLIDER_BUTTON.FRONT] = nextValue;
          } else {
            latestValue[buttonIndex.current] = nextValue;
          }
          tooltipRef.current = latestValue;
        } else {
          latestValue[buttonIndex.current] = nextValue;
          // 气泡值不应sort排序
          tooltipRef.current = latestValue;
          latestValue = sortValue(latestValue);
        }

        preValueRef.current = latestValue[buttonIndex.current];
      }

      latestVal.current =
        defaultValue !== undefined ? formatValue(latestValue) : latestValue;

      triggerChange(e, latestVal.current);
    }
  };

  const onTouchEnd = () => {
    if (disabled) return;
    // 置为排序后的值
    tooltipRef.current = internalValue;
    // 隐藏左右气泡提示
    setFrontTooltipVisible(false);
    setEndTooltipVisible(false);
  };

  const renderButton = (index: number) => {
    const valuenow = internalValue[index];

    return (
      <div
        key={index}
        role="slider"
        className={clsx(classes.button, `${classes.button}-${index}`)}
        style={{
          left: `${((valuenow - min) / scope) * 100}%`,
        }}
        tabIndex={disabled ? -1 : 0}
        aria-valuemin={props.min}
        aria-valuenow={valuenow}
        aria-valuemax={props.max}
        aria-orientation="horizontal"
        onTouchStart={(event) => {
          buttonIndex.current = index;
          onTouchStart(event);
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        {index === SLIDER_BUTTON.FRONT
          ? startIcon || defaultIcon
          : endIcon || defaultIcon}
      </div>
    );
  };

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.disabled]: disabled,
      })}
      ref={handleRef}
      {...others}
    >
      {/* 底色条 */}
      <div className={`${classes.root}-rail`} />
      {/* 着色条 */}
      <div className={`${classes.root}-line`} style={lineStyle} />

      {/* 滑动按钮 */}
      {renderButton(SLIDER_BUTTON.FRONT)}
      {range && renderButton(SLIDER_BUTTON.END)}

      {/* 气泡提示 */}
      <div
        className={clsx(classes.tooltip, {
          [`${classes.tooltip}-hidden`]: !tooltipVisible,
        })}
        style={{
          left: `${
            ((tooltipRef.current[buttonIndex.current] - min) / scope) * 100
          }%`,
        }}
      >
        {tooltipRender(tooltipRef.current[buttonIndex.current])}
      </div>
    </div>
  );
});

Slider.displayName = 'BuiSlider';
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disableSwap: false,
  tipVisible: false,
  tooltipRender: (value) => value,
};

export default Slider;
