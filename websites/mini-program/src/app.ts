import { useLaunch } from '@tarojs/taro';
import { PropsWithChildren } from 'react';
import '../lib/lodash-fix';
// 删除会导致公共样式无法被引入
import './app.less';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
