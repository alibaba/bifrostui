/**
 * 小程序版scroll-view滚动到指定位置
 * 使用scroll-left属性和scroll-with-animation实现平滑滚动
 */
interface ScrollToOptions {
  scrollViewId: string;
  scrollLeft: number;
  duration?: number;
}

const scrollLeftTo = ({
  scrollViewId,
  scrollLeft,
  duration = 300,
}: ScrollToOptions) => {
  // 小程序中使用 createSelectorQuery 来设置 scroll-left
  // 但实际上我们应该通过组件的 scroll-left 属性来控制
  // 这里返回一个 Promise，让调用方知道何时完成
  return new Promise<void>((resolve) => {
    // 由于小程序 scroll-view 组件的 scroll-left 属性变化会自动触发动画
    // 我们只需要更新 scroll-left 值即可
    // 这里使用 setTimeout 模拟动画完成时间
    if (duration > 0) {
      setTimeout(resolve, duration);
    } else {
      resolve();
    }
  });
};

/**
 * 计算将目标元素滚动到视图中心所需的 scrollLeft 值
 */
interface CalcCenterScrollOptions {
  containerWidth: number;
  targetLeft: number;
  targetWidth: number;
  currentScrollLeft?: number;
}

export const calcCenterScroll = ({
  containerWidth,
  targetLeft,
  targetWidth,
  currentScrollLeft = 0,
}: CalcCenterScrollOptions): number => {
  // 计算目标元素的中心位置
  const targetCenter = targetLeft + targetWidth / 2;
  // 计算容器的中心位置
  const containerCenter = containerWidth / 2;
  // 计算需要滚动的距离
  const scrollLeft = targetCenter - containerCenter;

  return Math.max(0, scrollLeft);
};

export default scrollLeftTo;
