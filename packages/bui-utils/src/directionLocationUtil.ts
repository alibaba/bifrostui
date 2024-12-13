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
  rootOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
  offsetSpacing = 0,
}) => {
  const {
    left: cLeft,
    right: cRight,
    top: cTop,
    bottom: cBottom,
    width: cWidth,
    height: cHeight,
  } = rootOffset;
  const { width, height } = tipOffset;
  const pgegWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  const pgegHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  let newArrowDirection = arrowDirection;
  let newArrowLocation = arrowLocation;

  // 气泡所在位置 上下左右
  const isDirectionTop = arrowDirection === 'top';
  const isDirectionBottom = arrowDirection === 'bottom';
  const isDirectionLeft = arrowDirection === 'left';
  const isDirectionRight = arrowDirection === 'right';

  if (
    (isDirectionTop && cTop - height - offsetSpacing < 0) ||
    (isDirectionBottom && cBottom + height + offsetSpacing > pgegHeight) ||
    (isDirectionLeft && cLeft - width - offsetSpacing < 0) ||
    (isDirectionRight && cRight + width + offsetSpacing > pgegWidth)
  ) {
    // 计算气泡超过编辑之后 到反方向去
    newArrowDirection = directionCssMap[arrowDirection];
  }

  // 箭头靠边的情况，是否超过边界
  if (
    (arrowLocation === 'top' && cTop + height > pgegHeight) ||
    (arrowLocation === 'bottom' && cBottom - height < 0) ||
    (arrowLocation === 'left' && cLeft + width > pgegWidth) ||
    (arrowLocation === 'right' && cRight - width < 0)
  ) {
    newArrowLocation = directionCssMap[arrowLocation];
  }

  const isCenter = arrowLocation === 'center';
  // 箭头在中间的情况，是否超过边界
  if (isCenter && (isDirectionTop || isDirectionBottom)) {
    // cLeft + (cWidth - width) / 2 代表浮层最左侧的坐标
    if (cLeft + (cWidth - width) / 2 + width > pgegWidth) {
      newArrowLocation = directionCssMap.left;
    } else if (cLeft + (cWidth - width) / 2 < 0) {
      newArrowLocation = directionCssMap.right;
    }
  } else if (isCenter && (isDirectionLeft || isDirectionRight)) {
    // cTop + (cHeight - height) / 2 代表浮层最上侧的坐标
    if (cTop + (cHeight - height) / 2 + cHeight > pgegHeight) {
      newArrowLocation = directionCssMap.top;
    } else if (cTop + (cHeight - height) / 2 < 0) {
      newArrowLocation = directionCssMap.bottom;
    }
  }

  return {
    newArrowDirection,
    newArrowLocation,
  };
};

/**
 * 根据新的气泡位置和箭头位置 计算气泡位置以及箭头位置
 */
export const getDirectionLocationStyle = ({
  rootOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
  offsetSpacing = 0,
}) => {
  const scrollTop =
    (window.scrollY >= 0 && window.scrollY) ||
    document.documentElement.scrollTop;

  const scrollLeft =
    (window.scrollX >= 0 && window.scrollX) ||
    document.documentElement.scrollLeft;

  const styles: any = {};
  const {
    width: cWidth,
    height: cHeight,
    left: cLeft,
    right: cRight,
    top: cTop,
    bottom: cBottom,
  } = rootOffset;
  const childrenStyle = { width: `${cWidth}px`, height: `${cHeight}px` };
  const { width, height } = tipOffset;
  if (arrowDirection === 'top') {
    styles.top = cTop - offsetSpacing;
    styles.transform = `translateY(-100%)`;
    switch (arrowLocation) {
      case 'left':
        styles.left = cLeft;
        break;
      case 'center':
        styles.left = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styles.left = cRight;
        styles.transform = `translate(-100%, -100%)`;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'bottom') {
    styles.top = cBottom + offsetSpacing;
    switch (arrowLocation) {
      case 'left':
        styles.left = cLeft;
        break;
      case 'center':
        styles.left = cLeft + (cWidth - width) / 2;
        break;
      case 'right':
        styles.left = cRight;
        styles.transform = `translateX(-100%)`;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'left') {
    styles.left = cLeft - offsetSpacing;
    styles.transform = `translateX(-100%)`;
    switch (arrowLocation) {
      case 'top':
        styles.top = cTop;
        break;
      case 'center':
        styles.top = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styles.top = cBottom;
        styles.transform = `translate(-100%, -100%)`;
        break;
      default:
        break;
    }
  } else if (arrowDirection === 'right') {
    styles.left = cRight + offsetSpacing;
    switch (arrowLocation) {
      case 'top':
        styles.top = cTop;
        break;
      case 'center':
        styles.top = cTop + (cHeight - height) / 2;
        break;
      case 'bottom':
        styles.top = cBottom;
        styles.transform = `translateY(-100%)`;
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
  // 此处设置宽高是为了防止left和transform导致气泡宽度显示错误
  styles.width = `${width}px`;

  return { styles, childrenStyle };
};

/**
 * 获取气泡位置和箭头位置
 */
export const getStylesAndLocation = ({
  childrenRef,
  arrowDirection,
  arrowLocation,
  offsetSpacing,
  selector,
}) => {
  if (!childrenRef?.current) {
    console.error(
      '组件包裹的children可能是一个组件，您的当前写法可能导致ref没有绑定到children上，请尝试对children对应的组件使用React.forwardRef来解决',
    );
    return null;
  }
  const rootOffset = childrenRef.current.getBoundingClientRect();
  const $rtDom = document.querySelector(selector);
  if (!$rtDom) return null;
  const tipOffset = $rtDom.getBoundingClientRect();
  const { newArrowDirection, newArrowLocation } = getNewDirectionLocation({
    rootOffset,
    arrowDirection,
    tipOffset,
    arrowLocation,
    offsetSpacing,
  });

  const { styles, childrenStyle } = getDirectionLocationStyle({
    rootOffset,
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
