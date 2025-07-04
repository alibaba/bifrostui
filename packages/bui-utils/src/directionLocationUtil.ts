import { getScrollRect, getClientRect } from './domUtils';
import getBoundingClientRect from './getBoundingClientRect';

const directionCssMap = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

/**
 * 根据元素宽高判断是否超出边界，超出边界则重新定义方向
 */
export const getNewDirectionLocation = ({
  scrollRoot,
  scrollRootOffset,
  childrenOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
  offsetSpacing,
}) => {
  const {
    left: cLeft,
    right: cRight,
    top: cTop,
    bottom: cBottom,
    width: cWidth,
    height: cHeight,
  } = childrenOffset;
  const { width, height } = tipOffset;
  const {
    top: sTop,
    bottom: sBottom,
    left: sLeft,
    right: sRight,
    width: pageWidth,
    height: pageHeight,
  } = scrollRootOffset;

  // 是否是全局容器
  const isBodyRoot = !scrollRoot;

  const maxTop = isBodyRoot ? 0 : sTop;
  const maxBottom = isBodyRoot ? pageHeight : sBottom;
  const maxLeft = isBodyRoot ? 0 : sLeft;
  const maxRight = isBodyRoot ? pageWidth : sRight;

  let newArrowDirection = arrowDirection;
  let newArrowLocation = arrowLocation;

  // 气泡所在位置 上下左右
  const isDirectionTop = arrowDirection === 'top';
  const isDirectionBottom = arrowDirection === 'bottom';
  const isDirectionLeft = arrowDirection === 'left';
  const isDirectionRight = arrowDirection === 'right';

  if (
    (isDirectionTop && cTop - height - offsetSpacing < maxTop) ||
    (isDirectionBottom && cBottom + height + offsetSpacing > maxBottom) ||
    (isDirectionLeft && cLeft - width - offsetSpacing < maxLeft) ||
    (isDirectionRight && cRight + width + offsetSpacing > maxRight)
  ) {
    // 计算气泡超过编辑之后 到反方向去
    newArrowDirection = directionCssMap[arrowDirection];
  }

  // 箭头靠边的情况，是否超过边界
  if (
    (arrowLocation === 'top' && cTop + height > maxBottom) ||
    (arrowLocation === 'bottom' && cBottom - height < maxTop) ||
    (arrowLocation === 'left' && cLeft + width > maxRight) ||
    (arrowLocation === 'right' && cRight - width < maxLeft)
  ) {
    newArrowLocation = directionCssMap[arrowLocation];
  }

  const isCenter = arrowLocation === 'center';
  // 箭头在中间的情况，是否超过边界
  if (isCenter && (isDirectionTop || isDirectionBottom)) {
    // cLeft + (cWidth - width) / 2 代表浮层最左侧的坐标
    if (cLeft + (cWidth - width) / 2 + width > maxRight) {
      newArrowLocation = directionCssMap.left;
    } else if (cLeft + (cWidth - width) / 2 < maxLeft) {
      newArrowLocation = directionCssMap.right;
    }
  } else if (isCenter && (isDirectionLeft || isDirectionRight)) {
    // cTop + (cHeight - height) / 2 代表浮层最上侧的坐标
    if (cTop + (cHeight - height) / 2 + cHeight > maxBottom) {
      newArrowLocation = directionCssMap.top;
    } else if (cTop + (cHeight - height) / 2 < maxTop) {
      newArrowLocation = directionCssMap.bottom;
    }
  }

  if (arrowLocation === 'none') {
    newArrowLocation = 'none';
  }

  return {
    newArrowDirection,
    newArrowLocation,
  };
};

/**
 * 根据新的气泡位置和箭头位置 计算气泡位置以及箭头位置
 */
export const getDirectionLocationStyle = async ({
  childrenOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
  offsetSpacing,
}) => {
  const { top: scrollTop, left: scrollLeft } = await getScrollRect();
  const {
    width: cWidth,
    height: cHeight,
    left: cLeft,
    right: cRight,
    top: cTop,
    bottom: cBottom,
  } = childrenOffset;
  let childrenStyle: any = {};
  if (cWidth && cHeight) {
    childrenStyle = { width: `${cWidth}px`, height: `${cHeight}px` };
  }
  const { width, height } = tipOffset;
  let styleTop;
  let styleLeft;
  if (arrowDirection === 'top') {
    // 浮层在上方
    styleTop = cTop - offsetSpacing - height;
    switch (arrowLocation) {
      case 'left':
        styleLeft = cLeft;
        break;
      case 'center':
        styleLeft = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styleLeft = cRight - width;
        break;
      case 'none':
        styleLeft = cLeft;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'bottom') {
    // 浮层在下方
    styleTop = cBottom + offsetSpacing;
    switch (arrowLocation) {
      case 'left':
        styleLeft = cLeft;
        break;
      case 'center':
        styleLeft = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styleLeft = cRight - width;
        break;
      case 'none':
        styleLeft = cLeft;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'left') {
    // 浮层在左方
    styleLeft = cLeft - offsetSpacing - width;
    switch (arrowLocation) {
      case 'top':
        styleTop = cTop;
        break;
      case 'center':
        styleTop = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styleTop = cBottom - height;
        break;
      case 'none':
        styleTop = cTop;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'right') {
    // 浮层在右方
    styleLeft = cRight + offsetSpacing;
    switch (arrowLocation) {
      case 'top':
        styleTop = cTop;
        break;
      case 'center':
        styleTop = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styleTop = cBottom - height;
        break;
      case 'none':
        styleTop = cTop;
        break;
      default:
        break;
    }
  }
  if (styleTop) {
    styleTop = `${styleTop + scrollTop}px`;
  }
  if (styleLeft) {
    styleLeft = `${styleLeft + scrollLeft}px`;
  }
  const styles = {
    top: 0,
    left: 0,
    transform: `translate3d(${styleLeft}, ${styleTop}, 0)`,
    visibility: '',
  };
  return { styles, childrenStyle };
};

/**
 * 获取气泡位置和箭头位置
 */
export const getStylesAndLocation = async ({
  scrollRoot,
  childrenRef,
  tipRef,
  arrowDirection = 'top',
  arrowLocation = 'center',
  offsetSpacing = 0,
}: {
  scrollRoot?: Element;
  childrenRef?: React.RefObject<any>;
  tipRef?: React.RefObject<any>;
  arrowDirection: string;
  arrowLocation: string;
  offsetSpacing?: number;
}) => {
  if (!childrenRef?.current) {
    console.error(
      '组件包裹的children可能是一个组件，您的当前写法可能导致ref没有绑定到children上，请尝试对children对应的组件使用React.forwardRef来解决',
    );
    return null;
  }

  const childrenOffset = await getBoundingClientRect(childrenRef.current);
  const tipOffset = await getBoundingClientRect(tipRef.current);
  if (!tipOffset || !childrenOffset) {
    return {
      styles: {},
      childrenStyle: {},
      newArrowDirection: arrowDirection,
      newArrowLocation: arrowLocation,
    };
  }

  let scrollRootOffset;
  if (scrollRoot) {
    scrollRootOffset = await getBoundingClientRect(scrollRoot);
  } else {
    scrollRootOffset = await getClientRect();
  }

  const { newArrowDirection, newArrowLocation } = getNewDirectionLocation({
    scrollRoot,
    scrollRootOffset,
    childrenOffset,
    arrowDirection,
    tipOffset,
    arrowLocation,
    offsetSpacing,
  });

  const { styles, childrenStyle } = await getDirectionLocationStyle({
    childrenOffset,
    arrowDirection: newArrowDirection,
    tipOffset,
    arrowLocation: newArrowLocation,
    offsetSpacing,
  });
  styles.visibility = 'visible';

  return {
    styles,
    childrenStyle,
    newArrowDirection,
    newArrowLocation,
  };
};

const onMouseEnter = 'onMouseEnter';
const onMouseLeave = 'onMouseLeave';
const onClick = 'onClick';

const TriggerEvent = {
  hover: [onMouseEnter, onMouseLeave],
  click: [onClick],
};

export const triggerEventTransform = ({ trigger, click, show, hide }) => {
  let triggers = [];
  if (typeof trigger === 'string') {
    triggers = [trigger];
  } else if (Array.isArray(trigger)) {
    triggers = trigger;
  } else {
    triggers = ['click'];
  }
  const option = {};
  triggers.forEach((item) => {
    const eventNames = TriggerEvent[item] || [];
    eventNames.forEach((eventName) => {
      let cbk;
      if (eventName === onMouseEnter) {
        cbk = show;
      } else if (eventName === onMouseLeave) {
        cbk = hide;
      } else if (eventName === onClick) {
        cbk = click;
      }
      option[eventName] = cbk;
    });
  });

  return option;
};
/**
 * for example： placement = 'topLeft'， return { direction: 'top', location: 'left' }
 * @param placement
 * @returns
 */
export const parsePlacement = (placement) => {
  const positionArr = placement.split(/([A-Z])/);
  const direction = positionArr[0];
  let location;
  if (positionArr.length > 1) {
    positionArr.splice(0, 1);
    location = positionArr.join('').toLowerCase();
  }
  return {
    direction,
    location,
  };
};
