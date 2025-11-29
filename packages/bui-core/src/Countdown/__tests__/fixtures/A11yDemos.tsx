import * as React from 'react';
import Countdown from '../../Countdown';

/**
 * 自定义 Countdown 组件 Demo 集合
 * 这个文件包含多个测试 demo，展示如何使用 getCustomDemoCodesFromFile 进行无障碍测试
 * 文件名必须是 customDemoComponent.tsx（固定约定）
 */

// Demo 1: 基础 Countdown 组件
export const basicCountdownDemo = () => {
  return (
    <div>
      <Countdown remainingTime={60 * 1000} />
    </div>
  );
};

// Demo 2: 带自定义 aria-label 的 Countdown
export const ariaLabelCountdownDemo = () => {
  return (
    <div>
      <Countdown remainingTime={120 * 1000} aria-label="促销活动结束倒计时" />
    </div>
  );
};

// Demo 3: 通过ID关联标题的 Countdown
export const ariaLabelledbyCountdownDemo = () => {
  return (
    <div>
      <h3 id="flash-sale-title">限时抢购</h3>
      <Countdown
        remainingTime={180 * 1000}
        aria-labelledby="flash-sale-title"
      />
    </div>
  );
};

// Demo 4: 带详细描述的 Countdown
export const ariaDescribedbyCountdownDemo = () => {
  return (
    <div>
      <Countdown
        remainingTime={240 * 1000}
        aria-describedby="countdown-description"
      />
      <p id="countdown-description">倒计时结束后，优惠价格将恢复为原价</p>
    </div>
  );
};

// Demo 5: 自定义渲染内容的 Countdown
export const customRenderCountdownDemo = () => {
  return (
    <div>
      <Countdown
        remainingTime={300 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              距离倒计时结束还剩{hours}小时{minutes}分钟{seconds}秒
            </span>
          );
        }}
      />
    </div>
  );
};

// Demo 6: 结束时间戳的 Countdown
export const endTimestampCountdownDemo = () => {
  return (
    <div>
      <Countdown endTimestamp={Date.now() + 360 * 1000} />
    </div>
  );
};

// Demo 7: 服务器时间戳的 Countdown
export const serverTimestampCountdownDemo = () => {
  return (
    <div>
      <Countdown
        serverTimestamp={Date.now() - 10 * 1000}
        endTimestamp={Date.now() + 420 * 1000}
      />
    </div>
  );
};

// 默认导出所有 demo
export default {
  basicCountdownDemo,
  ariaLabelCountdownDemo,
  ariaLabelledbyCountdownDemo,
  ariaDescribedbyCountdownDemo,
  customRenderCountdownDemo,
  endTimestampCountdownDemo,
  serverTimestampCountdownDemo,
};
