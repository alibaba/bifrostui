import {
  debounce,
  isMini,
  throttle,
  useDidMountEffect,
} from '@bifrostui/utils';
import clsx from 'clsx';
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Tab from './Tab';
import { TabsProps } from './Tabs.types';
import { TabsContextProvider } from './TabsContext';
import scrollLeftTo from './utils/scroll';
import './Tabs.less';

const prefixCls = 'bui-tabs';
const duration = 250;

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { children, className, value, tabs, align, onChange, ...others } =
    props;
  const [active, setActive] = useState('');
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const [lineData, setLineData] = useState({
    x: 0,
    transitionInUse: false,
  });
  const [maskData, setMaskData] = useState({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
  });

  const getActiveTabElement = () => {
    const container = tabsRef.current;
    if (!container) return undefined;

    const activeIndex =
      !!tabs.length && tabs.findIndex((item) => item.index === active);
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

  const animate = ({ transitionInUse }: { transitionInUse: boolean }) => {
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
    setLineData({
      x,
      transitionInUse,
    });

    const maxScrollDistance = containerScrollWidth - containerWidth;
    if (maxScrollDistance <= 0 || !activeTab) return;

    if (!isMini) {
      scrollIntoView();
    }
  };

  useEffect(() => {
    setActive(value);
  }, [value]);

  useLayoutEffect(() => {
    animate({ transitionInUse: false });
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      animate({ transitionInUse: true });
      updateMask();
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  useDidMountEffect(() => {
    animate({ transitionInUse: true });
  }, [active, tabs, children]);

  const updateMask = useMemo(
    () =>
      throttle(
        () => {
          const container = tabsRef.current;
          if (!container) return;

          const scrollLeft = container?.scrollLeft;
          const showLeftMask = scrollLeft > 0;
          const showRightMask =
            scrollLeft + container.offsetWidth < container.scrollWidth;

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

  useLayoutEffect(() => {
    updateMask();
  }, []);

  const handleClick = (e, item) => {
    const { index, disabled = false } = item;
    if (disabled) return;
    if (index === undefined || index === null) {
      return;
    }
    if (active !== value) {
      setActive(index);
    }
    if (index !== value) {
      onChange?.(e, { index });
    }
  };

  const providerValue = useMemo(() => {
    return { value, align, triggerChange: handleClick };
  }, [value, align, children, handleClick]);

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
          className={clsx(`${prefixCls}-tabline`, {
            'bui-tabline-invisible': isMini || !lineData.x,
          })}
          style={{
            transition: lineData.transitionInUse
              ? `transform ${duration / 1000}s ease`
              : undefined,
            transform: `translate3d(${lineData.x}px, 0px, 0px)`,
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
Tabs.defaultProps = {
  align: 'center',
  tabs: [],
};

export default Tabs;
