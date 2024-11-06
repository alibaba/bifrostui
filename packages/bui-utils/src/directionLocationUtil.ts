const directionCssMap = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

export const getNewDirectionLocation = ({
  rootOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
}) => {
  const { left: cLeft, right: cRight, top: cTop, bottom: cBottom } = rootOffset;
  const { width, height } = tipOffset;
  const pgegWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  const pgegHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  let newArrowDirection = arrowDirection;
  let newArrowLocation = arrowLocation;

  const isDirectionTop = arrowDirection === 'top';
  const isDirectionBottom = arrowDirection === 'bottom';
  const isDirectionLeft = arrowDirection === 'left';
  const isDirectionRight = arrowDirection === 'right';

  if (
    (isDirectionTop && cTop - height < 0) ||
    (isDirectionBottom && cBottom + height > pgegHeight) ||
    (isDirectionLeft && cLeft - width < 0) ||
    (isDirectionRight && cRight + width > pgegWidth)
  ) {
    newArrowDirection = directionCssMap[arrowDirection];
  }

  const isCenter = arrowLocation === 'center';
  // 箭头靠边的情况
  if (
    (arrowLocation === 'top' && cTop + height > pgegHeight) ||
    (arrowLocation === 'bottom' && cBottom - height < 0) ||
    (arrowLocation === 'left' && cLeft + width > pgegWidth) ||
    (arrowLocation === 'right' && cRight - width < 0)
  ) {
    newArrowLocation = directionCssMap[arrowLocation];
  }

  // 箭头在中间的情况
  if (isCenter && (isDirectionTop || isDirectionBottom)) {
    if (cLeft + width > pgegWidth) {
      newArrowLocation = directionCssMap.left;
    } else if (cRight - width < 0) {
      newArrowLocation = directionCssMap.right;
    }
  } else if (isCenter && (isDirectionLeft || isDirectionRight)) {
    if (cTop + height > pgegHeight) {
      newArrowLocation = directionCssMap.top;
    } else if (cBottom - height < 0) {
      newArrowLocation = directionCssMap.bottom;
    }
  }

  return {
    newArrowDirection,
    newArrowLocation,
  };
};

export const getDirectionLocationStyle = ({
  rootOffset,
  arrowDirection,
  tipOffset,
  arrowLocation,
}) => {
  const scrollTop =
    (window.scrollY >= 0 && window.scrollY) ||
    document.documentElement.scrollTop;

  const scrollLeft =
    (window.screenX >= 0 && window.screenX) ||
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
  const { width, height } = tipOffset;
  if (arrowDirection === 'top') {
    styles.top = cTop;
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
    styles.top = cBottom;
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
    styles.left = cLeft;
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
    styles.left = cRight;
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
  return styles;
};

export const getStylesAndLocation = ({
  childrenRef,
  arrowDirection,
  arrowLocation,
  selector,
}) => {
  console.log('childrenRef====', childrenRef.current);
  const rootOffset = childrenRef.current.getBoundingClientRect();
  console.log('childrenOffset===', rootOffset);

  const $rtDom = document.querySelector(selector);
  if (!$rtDom) return null;
  const tipOffset = $rtDom.getBoundingClientRect();

  console.log('offset====', tipOffset);
  const { newArrowDirection, newArrowLocation } = getNewDirectionLocation({
    rootOffset,
    arrowDirection,
    tipOffset,
    arrowLocation,
  });

  const styles = getDirectionLocationStyle({
    rootOffset,
    arrowDirection: newArrowDirection,
    tipOffset,
    arrowLocation: newArrowLocation,
  });
  styles.visibility = 'visible';

  return {
    styles,
    newArrowDirection,
    newArrowLocation,
  };
};

const onMouseEnter = 'onMouseEnter';
const onMouseLeave = 'onMouseLeave';
const onClick = 'onClick';

// enum eventNames {
//   onMouseEnter,
//   onMouseLeave,
//   onClick,
// }

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
    const eventNames = TriggerEvent[item];
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
