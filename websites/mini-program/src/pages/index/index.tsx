import menuGroups from '@/route.config';
import Taro, { useShareAppMessage, useShareTimeline } from '@tarojs/taro';
import './index.less';

const Index = () => {
  useShareAppMessage(() => {
    return {
      title: 'BUI小程序',
      path: 'pages/index/index',
    };
  });

  useShareTimeline(() => {
    return {
      title: 'BUI小程序',
      path: 'pages/index/index',
    };
  });

  const goDemo = (component) => {
    Taro.navigateTo({
      url: `/${component.path}`,
    });
  };

  return (
    <div className="home-wrapper ">
      <div className="header">
        <img
          className="logo"
          src="https://gw.alicdn.com/imgextra/i4/O1CN01XWp8e31QbIi5YgLUw_!!6000000001994-2-tps-362-96.png"
        />
        <div className="desc">
          <span className="desc-summary">
            BUI React-阿里影业风格的跨端组件库
          </span>
        </div>
      </div>
      <div className="group-wrapper">
        {menuGroups.map((group) => (
          <div className="group-item" key={group.groupEnName}>
            <div className="group-name">{group.groupName}</div>
            <div className="component-list">
              {(group.components || [])
                .sort((a, b) => b.order - a.order)
                .map((component) => (
                  <div
                    className="component-item"
                    key={component.enName}
                    onClick={() => goDemo(component)}
                  >
                    {component.zhName}({component.enName})
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
