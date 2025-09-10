import React from 'react';
import ScrollView from '../../ScrollView';

/**
 * 自定义 ScrollView 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 A11yDemos.tsx（固定约定）
 */

// Demo 1: 基础 ScrollView 组件
export const basicScrollViewDemo = () => {
  return (
    <div>
      <ScrollView scrollY style={{ height: '300px' }}>
        <div>基础滚动视图内容</div>
        <div>更多内容项目</div>
        <div>长列表项目</div>
      </ScrollView>
    </div>
  );
};

// Demo 2: 带 ARIA 标签的 ScrollView
export const ariaScrollViewDemo = () => {
  return (
    <div>
      <h3 id="scroll-title">新闻列表</h3>
      <ScrollView
        scrollY
        style={{ height: '300px' }}
        aria-label="新闻滚动区域"
        aria-labelledby="scroll-title"
        role="region"
      >
        <div role="article">新闻标题 1</div>
        <div role="article">新闻标题 2</div>
        <div role="article">新闻标题 3</div>
      </ScrollView>
    </div>
  );
};

// Demo 3: 键盘导航 ScrollView
export const keyboardNavigationDemo = () => {
  return (
    <div>
      <ScrollView
        scrollY
        style={{ height: '300px' }}
        tabIndex={0}
        aria-label="可键盘导航的滚动区域"
      >
        <div>使用箭头键进行滚动</div>
        <div>支持 Page Up/Page Down</div>
        <div>支持 Home/End 键</div>
        <div>支持 Space 键滚动</div>
      </ScrollView>
    </div>
  );
};

// Demo 4: 自动焦点 ScrollView
export const autoFocusScrollViewDemo = () => {
  return (
    <div>
      <ScrollView
        scrollY
        style={{ height: '300px' }}
        autoFocus
        aria-label="自动获取焦点的滚动区域"
      >
        <div>这个滚动视图会自动获取焦点</div>
        <div>便于键盘用户快速访问</div>
      </ScrollView>
    </div>
  );
};

// Demo 5: 水平滚动 ScrollView
export const horizontalScrollViewDemo = () => {
  return (
    <div>
      <ScrollView
        scrollX
        style={{ width: '300px' }}
        aria-label="水平滚动区域"
        tabIndex={0}
      >
        <div style={{ display: 'flex', width: '600px' }}>
          <div style={{ minWidth: '100px', marginRight: '10px' }}>项目 1</div>
          <div style={{ minWidth: '100px', marginRight: '10px' }}>项目 2</div>
          <div style={{ minWidth: '100px', marginRight: '10px' }}>项目 3</div>
          <div style={{ minWidth: '100px', marginRight: '10px' }}>项目 4</div>
        </div>
      </ScrollView>
    </div>
  );
};

// Demo 6: 复杂交互 ScrollView
export const complexInteractionDemo = () => {
  const ComplexInteractionDemo = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = (event: React.SyntheticEvent<HTMLDivElement>) => {
      setScrollPosition((event.target as HTMLDivElement).scrollTop);
    };

    return (
      <div>
        <p>当前滚动位置: {scrollPosition}px</p>
        <ScrollView
          scrollY
          style={{ height: '300px' }}
          onScroll={handleScroll}
          aria-label="交互式滚动区域"
          tabIndex={0}
        >
          <div>交互式滚动内容</div>
          <div>实时显示滚动位置</div>
          <div style={{ height: '200px' }}>长内容区域</div>
        </ScrollView>
      </div>
    );
  };

  return <ComplexInteractionDemo />;
};

// Demo 7: 双向滚动 ScrollView
export const bidirectionalScrollViewDemo = () => {
  return (
    <div>
      <ScrollView
        scrollX
        scrollY
        style={{ width: '300px', height: '200px' }}
        aria-label="双向滚动区域"
        tabIndex={0}
      >
        <div style={{ width: '500px', height: '400px', padding: '20px' }}>
          <p>这是一个可以双向滚动的区域</p>
          <p>内容宽度和高度都超出容器</p>
          <p>支持水平和垂直方向的键盘导航</p>
        </div>
      </ScrollView>
    </div>
  );
};

// Demo 8: 带回调的 ScrollView
export const callbackScrollViewDemo = () => {
  const CallbackScrollViewDemo = () => {
    const [message, setMessage] = React.useState('未触发滚动事件');

    const handleScrollToUpper = () => {
      setMessage('已滚动到顶部');
    };

    const handleScrollToLower = () => {
      setMessage('已滚动到底部');
    };

    return (
      <div>
        <p>状态: {message}</p>
        <ScrollView
          scrollY
          style={{ height: '200px' }}
          onScrollToUpper={handleScrollToUpper}
          onScrollToLower={handleScrollToLower}
          upperThreshold={50}
          lowerThreshold={50}
          aria-label="带回调的滚动区域"
          tabIndex={0}
        >
          <div style={{ height: '100px' }}>顶部内容</div>
          <div style={{ height: '200px' }}>中间内容</div>
          <div style={{ height: '100px' }}>底部内容</div>
        </ScrollView>
      </div>
    );
  };

  return <CallbackScrollViewDemo />;
};

// 默认导出所有 demo
export default {
  basicScrollViewDemo,
  ariaScrollViewDemo,
  keyboardNavigationDemo,
  autoFocusScrollViewDemo,
  horizontalScrollViewDemo,
  complexInteractionDemo,
  bidirectionalScrollViewDemo,
  callbackScrollViewDemo,
};
