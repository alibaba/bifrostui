import { debounce, isMini, throttle, useEventCallback } from '@bifrostui/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Tab from './Tab';
import { TabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';
import scrollLeftTo from './utils/scroll';
import './Tabs.less';

const prefixCls = 'bui-tabs';
const duration = 300;

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, className, value, tabs = [], onChange, ...others } = props;
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const [indicatorData, setIndicatorData] = useState({
    x: 0,
    hasActiveTab: false,
  });
  const [maskData, setMaskData] = useState({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
  });

  const getActiveTabElement = () => {
    const container = tabsRef.current;
    if (!container) return undefined;

    const activeIndex =
      !!tabs.length && tabs.findIndex((item) => item.index === value);

    let activeTab;

    if (tabs.length) {
      activeTab =
        activeIndex > -1
          ? (container.childNodes[activeIndex + 1] as HTMLDivElement)
          : undefined;
    } else {
      activeTab = [...container.childNodes].find((child: any) => {
        if (isMini) {
          return [...child.classList.tokenList].includes(
            'bui-tab-miniapp-active',
          );
        }
        return [...child.classList].includes('bui-tab-active');
      }) as HTMLDivElement;
    }

    return activeTab;
  };

  const scrollIntoView = () => {
    const tabsContainer = tabsRef.current;
    const activeTab = getActiveTabElement();
    if (!tabsContainer || !activeTab) {
      return;
    }

    const to =
      activeTab.offsetLeft -
      (tabsContainer.offsetWidth - activeTab.offsetWidth) / 2;
    scrollLeftTo(tabsContainer, to, duration);
  };

  const animate = useEventCallback(() => {
    const container = tabsRef.current;
    if (!container) return;

    const activeLine = activeLineRef.current;
    if (!activeLine) return;

    const activeTab = getActiveTabElement();

    let activeTabLeft = 0;
    let activeTabWidth = 0;
    let containerWidth = 0;
    let containerScrollWidth = 0;
    let activeLineWidth = 0;
    let x = 0;
    if (activeTab) {
      activeTabLeft = activeTab.offsetLeft;
      activeTabWidth = activeTab.offsetWidth;
      containerWidth = container.offsetWidth;
      containerScrollWidth = container.scrollWidth;
      activeLineWidth = activeLine.offsetWidth;
      x = activeTabLeft + (activeTabWidth - activeLineWidth) / 2;
    }
    setIndicatorData({
      x,
      hasActiveTab: !!activeTab,
    });

    const maxScrollDistance = containerScrollWidth - containerWidth;
    if (maxScrollDistance <= 0 || !activeTab) return;

    if (!isMini) {
      scrollIntoView();
    }
  });

  const updateMask = useMemo(
    () =>
      throttle(
        () => {
          const container = tabsRef.current;
          if (!container) return;

          const scrollLeft = container?.scrollLeft;
          const showLeftMask = scrollLeft > 0;
          const rightRange = Math.abs(
            container.scrollWidth - (scrollLeft + container.offsetWidth),
          );
          // 右侧遮罩rightRange在0-1范围内即可隐藏，处理浏览器兼容问题
          const showRightMask = rightRange > 1;

          setMaskData({
            leftMaskOpacity: showLeftMask ? 1 : 0,
            rightMaskOpacity: showRightMask ? 1 : 0,
          });
        },
        100,
        {
          trailing: true,
          leading: true,
        },
      ),
    [],
  );

  useEffect(() => {
    // value变化，或value没变但tab数量变化时，indicator位置要更新
    animate();
  }, [value, tabs.length, React.Children.toArray(children).length]);

  useEffect(() => {
    const handleResize = debounce(() => {
      animate();
      updateMask();
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    updateMask();
  }, []);

  const handleClick = (e, item) => {
    const { index, disabled = false } = item;
    if (disabled) return;
    if (index === undefined || index === null) {
      return;
    }

    if (index !== value) {
      onChange?.(e, { index });
    }
  };

  const providerValue = useMemo(() => {
    return { value, triggerChange: handleClick };
  }, [value, children, handleClick]);

  return (
    <div ref={ref} className={clsx(prefixCls, className)} {...others}>
      <div
        className={clsx(`${prefixCls}-mask`, `${prefixCls}-mask-left`)}
        style={{
          opacity: maskData.leftMaskOpacity,
        }}
      />
      <div
        className={clsx(`${prefixCls}-mask`, `${prefixCls}-mask-right`)}
        style={{
          opacity: maskData.rightMaskOpacity,
        }}
      />

      <div className={`${prefixCls}-tabs`} ref={tabsRef} onScroll={updateMask}>
        <div
          ref={activeLineRef}
          className={clsx(`${prefixCls}-indicator`, {
            'bui-indicator-invisible': isMini || !indicatorData.hasActiveTab,
          })}
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: `translate(${indicatorData.x}px, 0px)`,
          }}
        />

        <TabsContextProvider value={providerValue}>
          {/* 支持通过tabs生成Tab */}
          {!!tabs.length &&
            tabs.map((item) => {
              return (
                <Tab
                  key={item.index}
                  index={item?.index}
                  disabled={item?.disabled}
                >
                  {item.title}
                </Tab>
              );
            })}

          {children}
        </TabsContextProvider>
      </div>
    </div>
  );
});

Tabs.displayName = 'BuiTabs';

export default Tabs;
