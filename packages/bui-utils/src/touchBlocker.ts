/**
 * author: 辉宇
 * 为一个DOM元素添加滑动穿透防护
 * 返回一个函数，调用可解除滑动穿透防护
 *
 * **这里滑动穿透防护的定义为不允许root外部的元素被touch类事件滑动（overflow）**
 *
 * @param root: HTMLElement
 * @returns {(function(): void)|*}
 */
export default function blockTouch(root) {
  let lastTouch;
  let moveDirection;
  let moveAxis;

  const onTouchStart = (e) => {
    [lastTouch] = e.touches;
  };
  const shouldPrevent = (targetElement, axis, delta) => {
    let el = targetElement;
    let needPrevent = true;
    while (el) {
      const { overflowY, overflowX } = window.getComputedStyle(el);
      if (axis === 'y' && (overflowY === 'scroll' || overflowY === 'auto')) {
        const dir = moveDirection || delta;
        if (moveDirection === undefined) moveDirection = dir;

        if (el.scrollTop !== 0 && dir < 0) {
          needPrevent = false;
          break;
        }
        // 当内部滚动元素高度有小数时，可能会出现小于号左右差1的情况导致算法失效
        if (el.scrollTop + el.offsetHeight + 1 < el.scrollHeight && dir > 0) {
          needPrevent = false;
          break;
        }
      }
      if (axis === 'x' && (overflowX === 'scroll' || overflowX === 'auto')) {
        const dir = moveDirection || delta;
        if (moveDirection === undefined) moveDirection = dir;
        if (el.scrollLeft !== 0 && dir < 0) {
          needPrevent = false;
          break;
        }
        if (el.scrollLeft + el.offsetWidth < el.scrollWidth && dir > 0) {
          needPrevent = false;
          break;
        }
      }

      if (el === root) break;
      el = el.parentNode;
    }
    return needPrevent;
  };
  const onTouchMove = (e) => {
    const currentTouch = e.touches[0];
    // 如果单指在滑动的时候另一只手指碰到屏幕一次而滑动手指不放开，就会触发touchend清空lastTouch引发这个问题
    if (!lastTouch || !currentTouch) return;
    if (!moveAxis) {
      if (
        Math.abs(lastTouch.screenY - currentTouch.screenY) >
        Math.abs(lastTouch.screenX - currentTouch.screenX)
      )
        moveAxis = 'y';
      if (
        Math.abs(lastTouch.screenY - currentTouch.screenY) <
        Math.abs(lastTouch.screenX - currentTouch.screenX)
      )
        moveAxis = 'x';
    }

    if (
      shouldPrevent(
        e.target,
        moveAxis,
        moveAxis === 'x'
          ? lastTouch.screenX - currentTouch.screenX
          : lastTouch.screenY - currentTouch.screenY,
      ) &&
      !e.cancelable === false
    )
      e.preventDefault();
    // setLastTouch(e.touches[0]);
  };
  const onTouchEnd = (e) => {
    if (e.touches.length !== 0) return;
    lastTouch = undefined;
    moveDirection = undefined;
    moveAxis = undefined;
  };
  const onScroll = (e) => {
    if (
      shouldPrevent(
        e.target,
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? 'x' : 'y',
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY,
      ) &&
      !e.cancelable === false
    )
      e.preventDefault();

    moveDirection = undefined;
  };

  root.addEventListener('touchstart', onTouchStart);
  root.addEventListener('touchmove', onTouchMove);
  root.addEventListener('touchend', onTouchEnd);
  root.addEventListener('wheel', onScroll);
  return () => {
    root.removeEventListener('touchstart', onTouchStart);
    root.removeEventListener('touchmove', onTouchMove);
    root.removeEventListener('touchend', onTouchEnd);
    root.removeEventListener('wheel', onScroll);
  };
}
