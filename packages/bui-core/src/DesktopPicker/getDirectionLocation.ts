/**
 * 根据元素宽高判断是否超出边界，超出边界则重新定义方向
 */
const directionCssMap = {
  top: 'bottom',
  bottom: 'top',
};
export const directionMap = {
  top: 'up',
  bottom: 'down',
};
const getNewDirection = ({
  rootOffset,
  arrowDirection,
  tipOffset,
  containerOffset,
}) => {
  if (!rootOffset || !tipOffset) {
    return { newArrowDirection: arrowDirection || 'bottom' };
  }
  const { top: cTop, bottom: cBottom } = rootOffset;
  const { height } = tipOffset;
  const pgegHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  let newArrowDirection = arrowDirection;

  // 浮层所在位置 上下
  const isDirectionTop = arrowDirection === 'top';
  const isDirectionBottom = arrowDirection === 'bottom';

  if (containerOffset) {
    if (containerOffset.bottom - rootOffset.bottom > tipOffset.height) {
      newArrowDirection = 'bottom';
    } else {
      newArrowDirection = 'top';
    }
  } else if (
    (isDirectionTop && cTop - height < 0) ||
    (isDirectionBottom && cBottom + height > pgegHeight)
  ) {
    newArrowDirection = directionCssMap[arrowDirection];
  }

  return {
    newArrowDirection,
  };
};

export default getNewDirection;
