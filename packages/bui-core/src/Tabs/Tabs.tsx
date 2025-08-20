import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { debounce, isMini, throttle, useEventCallback } from '@bifrostui/utils';
import scrollLeftTo from './utils/scroll';
import Tab from './Tab';
import { TabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';
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

  const getActiveTabElement = (): HTMLDivElement | undefined => {
    const tabsEl = tabsRef.current;
    if (!tabsEl) return;

    const activeIndex = tabs.findIndex((item) => item.index === value);

    if (tabs.length) {
      return activeIndex > -1
        ? (tabsEl.childNodes[activeIndex + 1] as HTMLDivElement)
        : undefined;
    }

    return [...tabsEl.childNodes].find((child: any) => {
      if (isMini) {
        return [...(child?.classList?.tokenList ?? [])].includes(
          'bui-tab-miniapp-active',
        );
      }
      return [...child.classList].includes('bui-tab-active');
    }) as HTMLDivElement;
  };

  const scrollIntoView = () => {
    const tabsEl = tabsRef.current;
    const activeTab = getActiveTabElement();
    if (!tabsEl || !activeTab) {
      return;
    }

    const to =
      activeTab.offsetLeft - (tabsEl.offsetWidth - activeTab.offsetWidth) / 2;
    scrollLeftTo(tabsEl, to, duration);
  };

  const animate = useEventCallback(() => {
    const tabsEl = tabsRef.current;
    if (!tabsEl) return;

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
      containerWidth = tabsEl.offsetWidth;
      containerScrollWidth = tabsEl.scrollWidth;
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
          const tabsEl = tabsRef.current;
          if (!tabsEl) return;

          const scrollLeft = tabsEl?.scrollLeft;
          const showLeftMask = scrollLeft > 0;
          const rightRange = Math.abs(
            tabsEl.scrollWidth - (scrollLeft + tabsEl.offsetWidth),
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
    // 页面渲染完毕后立即执行一次
    updateMask();

    const handleResize = debounce(() => {
      animate();
      updateMask();
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e, item) => {
    const { index, disabled = false } = item;
    if (disabled || [undefined, null].includes(index)) return;
    if (index !== value) {
      onChange?.(e, { index });
    }
  };

  return (
    <div ref={ref} className={clsx(prefixCls, className)} {...others}>
      <div
        className={clsx(`${prefixCls}-mask`, `${prefixCls}-mask-left`)}
        style={{
          opacity: maskData.leftMaskOpacity,
        }}
        aria-hidden="true"
      />
      <div
        className={clsx(`${prefixCls}-mask`, `${prefixCls}-mask-right`)}
        style={{
          opacity: maskData.rightMaskOpacity,
        }}
        aria-hidden="true"
      />

      <div
        className={`${prefixCls}-tabs`}
        ref={tabsRef}
        onScroll={updateMask}
        role="tablist"
        aria-orientation="horizontal"
      >
        <div
          ref={activeLineRef}
          className={clsx(`${prefixCls}-indicator`, {
            'bui-indicator-invisible': isMini || !indicatorData.hasActiveTab,
          })}
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: `translate(${indicatorData.x}px, 0px)`,
          }}
          aria-hidden="true"
        />

        <TabsContextProvider value={{ value, triggerChange: handleClick }}>
          {/* 支持通过tabs生成Tab */}
          {!!tabs.length &&
            tabs.map((item) => {
              return (
                <Tab
                  key={item.index}
                  index={item?.index}
                  disabled={item?.disabled}
                  role="tab"
                  aria-selected={value === item.index}
                  aria-disabled={item?.disabled}
                  tabIndex={value === item.index && !item?.disabled ? 0 : -1}
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
