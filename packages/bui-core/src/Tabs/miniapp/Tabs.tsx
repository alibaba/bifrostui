/* eslint-disable consistent-return */
import React, { useMemo, useState } from 'react';
import clsx from 'clsx';
import Taro from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import { useValue, useEventCallback } from '@bifrostui/utils';
import type { BaseEventOrig } from '@tarojs/components';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import TabMask from '../TabMask';
import { TabsProps } from '../Tabs.types';
import { TabsContextProvider } from './TabsContext';
import {
  tabsRootClass,
  tabsScrollClass,
  tabsScrollWrapperClass,
} from '../classes';
import {
  batchQueryContainerSize,
  batchQueryForScroll,
} from './utils/queryBatch';
import '../Tabs.less';

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    className,
    value,
    defaultValue,
    tabs = [],
    onChange,
    style,
  } = props;

  const handleOnChange = useEventCallback(
    (e: React.SyntheticEvent, data: { value: string }) => {
      onChange?.(e, { index: data.value });
    },
  );

  const [currentValue, triggerValueChange] = useValue({
    value,
    defaultValue: defaultValue ?? '',
    onChange: handleOnChange,
    config: {
      name: 'Tabs',
      state: 'value',
    },
  });

  // 生成唯一的容器ID
  const tabsContainerId = useMemo(
    () => `bui-tabs-${Math.random().toString(36).slice(2, 11)}`,
    [],
  );
  const scrollViewId = `${tabsContainerId}-scroll`;
  const wrapperId = `${tabsContainerId}-wrapper`;

  // 管理已注册的 tabs
  const [registeredTabValues, setRegisteredTabValues] = useState<string[]>([]);
  // Track registration changes to trigger indicator updates explicitly
  const [registrationVersion, setRegistrationVersion] = useState(0);

  // scroll-view 相关状态
  const [scrollLeft, setScrollLeft] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const lastScrollLeftRef = React.useRef(0);
  const isFirstScroll = React.useRef(true);
  const [scrollWithAnimation, setScrollWithAnimation] = React.useState(false);

  // 计算是否可滚动（用于显示 TabMask）
  // 处理浏览器兼容问题，同一个元素的scrollWidth和containerWidth可能存在误差
  const isScrollable = scrollWidth - containerWidth > 1;

  // 开发环境警告：tabs 和 children 不应该同时使用
  if (process.env.NODE_ENV !== 'production') {
    if (tabs.length > 0 && React.Children.count(children) > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        'BUI Warning: Tabs 组件不应该同时使用 tabs 属性和 children。请只使用其中一种方式。当前将优先使用 tabs 属性，children 将被忽略。',
      );
    }
  }

  // 注册和取消注册 Tab 的回调函数
  const onRegister = useEventCallback((data: { value: string }) => {
    if (data.value !== undefined && data.value !== null) {
      setRegisteredTabValues((prev) => {
        if (prev.includes(data.value)) return prev;
        const newValues = [...prev, data.value];
        return newValues;
      });
      // Increment version to signal registration change
      setRegistrationVersion((v) => v + 1);
    }
  });

  const onUnregister = useEventCallback((data: { value: string }) => {
    setRegisteredTabValues((prev) => {
      const newValues = prev.filter((v) => v !== data.value);
      return newValues;
    });
    setRegistrationVersion((v) => v + 1);
  });

  // 使用 useEventCallback 保持回调引用稳定，同时能访问最新的 currentValue 和 triggerValueChange
  const handleClick = useEventCallback(
    (e: React.SyntheticEvent, item: { index: string; disabled?: boolean }) => {
      const { index, disabled = false } = item;
      if (disabled || [undefined, null].includes(index)) return;
      if (index !== currentValue) {
        triggerValueChange(e, index);
      }
    },
  );

  const handleScroll = useEventCallback(
    (e: BaseEventOrig<{ scrollLeft: number; scrollWidth: number }>) => {
      const { scrollLeft: newScrollLeft, scrollWidth: newScrollWidth } =
        e.detail;

      // 只存储到 ref，不更新 state（避免触发 ScrollView 重新定位）
      lastScrollLeftRef.current = newScrollLeft;

      // 更新 scrollWidth（用于计算 isScrollable）
      if (newScrollWidth && newScrollWidth !== scrollWidth) {
        setScrollWidth(newScrollWidth);
      }
    },
  );

  // 初始化容器尺寸（优化：使用批量查询）
  React.useEffect(() => {
    if (!scrollViewId || registeredTabValues.length === 0) return;

    // 使用nextTick确保DOM已渲染
    Taro.nextTick(async () => {
      const { rect, fields } = await batchQueryContainerSize(scrollViewId);

      if (rect) {
        setContainerWidth(rect.width);
      }
      if (fields) {
        setScrollWidth(fields.scrollWidth || 0);
      }
    });
  }, [scrollViewId, registrationVersion, registeredTabValues.length]);

  // 滚动到选中的Tab（居中显示）
  const centerActiveTab = useEventCallback(async () => {
    if (!currentValue || registeredTabValues.length === 0) {
      return;
    }

    // 批量查询：一次性获取所有需要的DOM信息
    const { scrollView, scrollFields, wrapper, currentTab } =
      await batchQueryForScroll({
        scrollViewId,
        wrapperId,
        currentTabValue: currentValue,
      });

    // 验证查询结果
    if (
      !scrollView ||
      !scrollFields ||
      !wrapper ||
      !currentTab ||
      currentTab.width === 0
    ) {
      return;
    }

    // 计算Tab相对于wrapper的位置
    const tabLeftRelativeToWrapper = currentTab.left - wrapper.left;
    const tabWidth = currentTab.width;
    const containerViewWidth = scrollView.width;
    const currentScrollWidth = scrollFields.scrollWidth || scrollView.width;

    // 计算将Tab滚动到中心的位置
    const targetScrollLeft =
      tabLeftRelativeToWrapper - (containerViewWidth - tabWidth) / 2;

    // 限制在有效范围内
    const maxScrollDistance = currentScrollWidth - containerViewWidth;
    const finalScrollLeft = Math.max(
      0,
      Math.min(targetScrollLeft, maxScrollDistance),
    );

    // 设置scrollLeft，触发ScrollView滚动到居中位置
    setScrollLeft(finalScrollLeft);
    lastScrollLeftRef.current = finalScrollLeft;

    // 首次滚动后，启用滚动动画
    if (isFirstScroll.current) {
      Taro.nextTick(() => {
        setScrollWithAnimation(true);
      });
      isFirstScroll.current = false;
    }
  });

  // 当 currentValue 变化时滚动
  React.useEffect(() => {
    if (!currentValue || registeredTabValues.length === 0) {
      return;
    }

    // 使用 nextTick 确保 DOM 已更新
    Taro.nextTick(() => {
      centerActiveTab();
    });

    // ⚠️ 关键优化：只依赖 currentValue，不依赖其他会频繁变化的状态
    // - currentValue 变化 → 选择新Tab，触发居中 ✅
    // - 不依赖 scrollWidth、containerWidth、scrollLeft → 用户滚动不触发 ✅
    // - 不依赖 registrationVersion → 避免Tab注册时频繁触发 ✅
  }, [currentValue, centerActiveTab]);

  // 初始化时也需要滚动到选中的Tab
  React.useEffect(() => {
    if (!currentValue || registeredTabValues.length === 0) {
      return;
    }

    // 当所有Tab注册完成后，滚动到当前选中的Tab
    // 使用 nextTick 确保 DOM 渲染完成
    Taro.nextTick(() => {
      centerActiveTab();
    });
  }, [registrationVersion, centerActiveTab]);

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      triggerChange: handleClick,
      onRegister,
      onUnregister,
      tabsContainerId: wrapperId,
    }),
    [currentValue, handleClick, onRegister, onUnregister, wrapperId],
  );

  const renderedTabs = useMemo(() => {
    if (tabs.length > 0) {
      return tabs.map((item) => (
        <Tab key={item.index} index={item?.index} disabled={item?.disabled}>
          {item.title}
        </Tab>
      ));
    }
    return children;
  }, [tabs, children]);

  return (
    <div className={clsx(tabsRootClass, className)} style={style} ref={ref}>
      {isScrollable && (
        <>
          <TabMask position="left" />
          <TabMask position="right" />
        </>
      )}

      <ScrollView
        id={scrollViewId}
        className={tabsScrollClass}
        scrollX
        scrollWithAnimation={scrollWithAnimation}
        scrollLeft={scrollLeft}
        onScroll={handleScroll}
        enhanced
        showScrollbar={false}
        enablePassive
      >
        {/** `bottom: 0` 在小程序的 ScrollView 内不生效，所以引入了wrapper容器，让Indicator在wrapper内 */}
        <div id={wrapperId} className={tabsScrollWrapperClass}>
          <TabIndicator
            currentValue={currentValue}
            registeredTabValues={registeredTabValues}
            wrapperId={wrapperId}
            scrollViewId={scrollViewId}
            registrationVersion={registrationVersion}
          />

          <TabsContextProvider value={contextValue}>
            {renderedTabs}
          </TabsContextProvider>
        </div>
      </ScrollView>
    </div>
  );
});

Tabs.displayName = 'BuiTabs';

export default Tabs;
