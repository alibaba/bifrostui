import { isMini } from './isMini';
import getScrollRect from './domUtils';

const directionCssMap = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

const isBodyScroll = (scrollRoot) => {
  return scrollRoot === document.body;
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

  // const pageWidth =
  //   document.documentElement.clientWidth || document.body.clientWidth;
  // const pageHeight =
  //   document.documentElement.clientHeight || document.body.clientHeight;
  const maxTop = isBodyScroll(scrollRoot) ? 0 : sTop;
  const maxBottom = isBodyScroll(scrollRoot) ? pageHeight : sBottom;
  const maxLeft = isBodyScroll(scrollRoot) ? 0 : sLeft;
  const maxRight = isBodyScroll(scrollRoot) ? pageWidth : sRight;

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

  const styles: any = {};
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
  if (arrowDirection === 'top') {
    // 浮层在上方
    styles.top = cTop - offsetSpacing - height;
    switch (arrowLocation) {
      case 'left':
        styles.left = cLeft;
        break;
      case 'center':
        styles.left = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styles.left = cRight - width;
        break;
      case 'none':
        styles.left = cLeft;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'bottom') {
    // 浮层在下方
    styles.top = cBottom + offsetSpacing;
    switch (arrowLocation) {
      case 'left':
        styles.left = cLeft;
        break;
      case 'center':
        styles.left = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styles.left = cRight - width;
        break;
      case 'none':
        styles.left = cLeft;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'left') {
    // 浮层在左方
    styles.left = cLeft - offsetSpacing - width;
    switch (arrowLocation) {
      case 'top':
        styles.top = cTop;
        break;
      case 'center':
        styles.top = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styles.top = cBottom - height;
        break;
      case 'none':
        styles.top = cTop;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'right') {
    // 浮层在右方
    styles.left = cRight + offsetSpacing;
    switch (arrowLocation) {
      case 'top':
        styles.top = cTop;
        break;
      case 'center':
        styles.top = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styles.top = cBottom - height;
        break;
      case 'none':
        styles.top = cTop;
        break;
      default:
        break;
    }
  }
  if (styles.top) {
    styles.top = `${styles.top + scrollTop}px`;
  }
  if (styles.left) {
    styles.left = `${styles.left + scrollLeft}px`;
  }
  return { styles, childrenStyle };
};

/**
 * 获取气泡位置和箭头位置
 */
export const getStylesAndLocation = async ({
  scrollRoot,
  childrenRef,
  tipRef,
  arrowDirection,
  arrowLocation,
  offsetSpacing,
}) => {
  if (!childrenRef?.current) {
    console.error(
      '组件包裹的children可能是一个组件，您的当前写法可能导致ref没有绑定到children上，请尝试对children对应的组件使用React.forwardRef来解决',
    );
    return null;
  }

  let newArrowDirection = arrowDirection;
  let newArrowLocation = arrowLocation;

  const childrenOffset = await childrenRef.current.getBoundingClientRect();
  const tipOffset = await tipRef.current.getBoundingClientRect();
  if (!tipOffset || !childrenOffset) {
    return {
      styles: {},
      childrenStyle: {},
      newArrowDirection,
      newArrowLocation,
    };
  }

  let sr = scrollRoot;
  // 在H5中进行默认赋值
  if (!sr && !isMini) {
    sr = document.body;
  }

  if (sr) {
    const scrollRootOffset = await sr.getBoundingClientRect();
    ({ newArrowDirection, newArrowLocation } = getNewDirectionLocation({
      scrollRoot: sr,
      scrollRootOffset,
      childrenOffset,
      arrowDirection,
      tipOffset,
      arrowLocation,
      offsetSpacing,
    }));
  }

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
