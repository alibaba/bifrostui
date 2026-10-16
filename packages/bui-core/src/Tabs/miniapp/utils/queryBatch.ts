import Taro from '@tarojs/taro';

/**
 * Fields查询结果（包含scrollWidth）
 */
export interface ScrollFieldsResult {
  scrollWidth?: number;
  scrollHeight?: number;
  scrollLeft?: number;
  scrollTop?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * 批量查询结果接口
 */
export interface BatchQueryResult {
  scrollView: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  scrollInfo: Taro.NodesRef.ScrollOffsetCallbackResult | null;
  scrollFields: ScrollFieldsResult | null; // 包含scrollWidth的fields查询结果
  wrapper: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  indicator: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  tabs: (Taro.NodesRef.BoundingClientRectCallbackResult | null)[];
}

/**
 * 批量查询Tab相关元素
 * 优化：一次性查询所有需要的DOM信息，减少查询次数
 *
 * @param scrollViewId - ScrollView的ID
 * @param wrapperId - Wrapper容器的ID
 * @param tabValues - 需要查询的Tab值数组
 * @returns Promise<BatchQueryResult>
 */
export const batchQueryTabs = (params: {
  scrollViewId: string;
  wrapperId: string;
  tabValues: string[];
}): Promise<BatchQueryResult> => {
  const { scrollViewId, wrapperId, tabValues } = params;

  return new Promise((resolve) => {
    const query = Taro.createSelectorQuery();

    // 1. 查询 ScrollView 的位置和尺寸
    query.select(`#${scrollViewId}`).boundingClientRect();
    // 2. 查询 ScrollView 的滚动信息
    query.select(`#${scrollViewId}`).scrollOffset();
    // 3. 查询 ScrollView 的 scrollWidth（通过fields获取）
    query
      .select(`#${scrollViewId}`)
      .fields({ scrollOffset: true, size: true }, null);
    // 4. 查询 Wrapper 容器的位置和尺寸
    query.select(`#${wrapperId}`).boundingClientRect();
    // 5. 查询 Indicator 的位置和尺寸
    query.select(`#${wrapperId}-indicator`).boundingClientRect();

    // 6. 批量查询所有Tab的位置和尺寸
    tabValues.forEach((value) => {
      query.select(`#${wrapperId}-tab-${value}`).boundingClientRect();
    });

    // 执行批量查询
    query.exec((res) => {
      resolve({
        scrollView: res[0] || null,
        scrollInfo: res[1] || null,
        scrollFields: res[2] || null,
        wrapper: res[3] || null,
        indicator: res[4] || null,
        tabs: res.slice(5),
      });
    });
  });
};

/**
 * 简化版批量查询（用于Tabs组件的居中滚动）
 * 只查询必要的元素：ScrollView、Wrapper、当前Tab
 *
 * @param scrollViewId - ScrollView的ID
 * @param wrapperId - Wrapper容器的ID
 * @param currentTabValue - 当前Tab的值
 * @returns Promise
 */
export const batchQueryForScroll = (params: {
  scrollViewId: string;
  wrapperId: string;
  currentTabValue: string;
}): Promise<{
  scrollView: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  scrollInfo: Taro.NodesRef.ScrollOffsetCallbackResult | null;
  scrollFields: ScrollFieldsResult | null;
  wrapper: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  currentTab: Taro.NodesRef.BoundingClientRectCallbackResult | null;
}> => {
  const { scrollViewId, wrapperId, currentTabValue } = params;

  return new Promise((resolve) => {
    const query = Taro.createSelectorQuery();

    // 查询ScrollView容器
    query.select(`#${scrollViewId}`).boundingClientRect();
    // 查询ScrollView的scrollOffset
    query.select(`#${scrollViewId}`).scrollOffset();
    // 查询ScrollView的scrollWidth（通过fields获取）
    query
      .select(`#${scrollViewId}`)
      .fields({ scrollOffset: true, size: true }, null);
    // 查询wrapper容器
    query.select(`#${wrapperId}`).boundingClientRect();
    // 查询当前选中的Tab
    query.select(`#${wrapperId}-tab-${currentTabValue}`).boundingClientRect();

    query.exec((res) => {
      resolve({
        scrollView: res[0] || null,
        scrollInfo: res[1] || null,
        scrollFields: res[2] || null,
        wrapper: res[3] || null,
        currentTab: res[4] || null,
      });
    });
  });
};

/**
 * 简化版批量查询（用于初始化容器尺寸）
 * 只查询ScrollView的尺寸和滚动信息
 *
 * @param scrollViewId - ScrollView的ID
 * @returns Promise
 */
export const batchQueryContainerSize = (
  scrollViewId: string,
): Promise<{
  rect: Taro.NodesRef.BoundingClientRectCallbackResult | null;
  scroll: Taro.NodesRef.ScrollOffsetCallbackResult | null;
  fields: ScrollFieldsResult | null;
}> => {
  return new Promise((resolve) => {
    const query = Taro.createSelectorQuery();

    query.select(`#${scrollViewId}`).boundingClientRect();
    query.select(`#${scrollViewId}`).scrollOffset();
    // 通过fields获取scrollWidth
    query
      .select(`#${scrollViewId}`)
      .fields({ scrollOffset: true, size: true }, null);

    query.exec((res) => {
      resolve({
        rect: res[0] || null,
        scroll: res[1] || null,
        fields: res[2] || null,
      });
    });
  });
};
