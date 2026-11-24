---
group: 布局
name: Steps 步骤条
---

# Steps 步骤条

步骤流程导航条。

## 基础用法

默认方向为纵向，若未指定 current，则默认为 0，即第一步

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <div style={{ width: '120px' }}>
        <Steps onChange={handleChange}>
          <Step key={1} title="选择活动" />
          <Step key={2} title="创建内容" />
          <Step key={3} title="发布上线" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## 横向展示

通过`direction`改变步骤条方向

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="选择活动" />
        <Step key={2} title="创建内容" />
        <Step key={3} title="发布上线" />
      </Steps>
    </Stack>
  );
};
```

## 改变副标题排列位置

若有副标题，可以通过`labelPlacement`改变其展示位置

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="选择活动" subtitle="选定目标受众" />
        <Step key={2} title="创建内容" subtitle="上传创意素材" />
        <Step key={3} title="发布上线" subtitle="审批活动" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="选择活动" subtitle="选定目标受众" />
        <Step key={2} title="创建内容" subtitle="上传创意素材" />
        <Step key={3} title="发布上线" subtitle="审批活动" />
      </Steps>
    </Stack>
  );
};
```

## 展示描述文案

传入`description`可添加描述说明。

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="选择活动"
          subtitle="选定目标受众"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={2}
          title="创建内容"
          subtitle="上传创意素材"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={3}
          title="审核确认"
          subtitle="审批活动"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={4}
          title="发布上线"
          subtitle="正式上线"
          description="配置当前步骤的详细项。"
        />
      </Steps>
    </Stack>
  );
};
```

## 控制步骤状态

可通过 status 控制步骤状态，`wait`为等待中， `active`为当前激活， `finish`为已完成， `error`为失败已完成

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="选择活动"
          subtitle="选定目标受众"
          status="error"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={2}
          title="创建内容"
          subtitle="上传创意素材"
          status="finish"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={3}
          title="审核确认"
          subtitle="审批活动"
          status="active"
          description="配置当前步骤的详细项。"
        />
        <Step
          key={4}
          title="发布上线"
          subtitle="正式上线"
          status="wait"
          description="配置当前步骤的详细项。"
        />
      </Steps>
    </Stack>
  );
};
```

## 自定义图标

通过`icon`可以自定义各个状态的图标。

```tsx
import * as React from 'react';
import { Stack, Step, Steps } from '@bifrostui/react';
import {
  AccessTimeCircleFilledIcon,
  ErrorCircleOutlinedIcon,
  HeartFilledIcon,
  LocationFilledIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="选择活动"
          subtitle="选定目标受众"
          icon={<HeartFilledIcon color="primary" />}
          description="配置当前步骤的详细项。"
        />
        <Step
          key={2}
          title="创建内容"
          subtitle="上传创意素材"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="配置当前步骤的详细项。"
        />
        <Step
          key={3}
          title="审核确认"
          subtitle="审批活动"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="配置当前步骤的详细项。"
        />
        <Step
          key={4}
          title="发布上线"
          subtitle="正式上线"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="配置当前步骤的详细项。"
        />
      </Steps>
    </Stack>
  );
};
```

## 禁用点击

通过`disabled`使步骤条不可点击

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <Steps direction="horizontal" current={1} onChange={handleChange}>
        <Step
          key={1}
          title="选择活动"
          status="error"
          description="配置当前步骤的详细项。"
          disabled
        />
        <Step key={2} title="创建内容" />
        <Step
          key={3}
          title="发布上线"
          subtitle="审批活动"
          description="配置当前步骤的详细项。"
          disabled
        />
      </Steps>
    </Stack>
  );
};
```

## 复杂布局

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

const detail = () => {
  return (
    <Stack style={{ '--align-items': 'flex-start' }}>
      <div
        style={{
          backgroundColor: 'var(--bui-color-bg-view)',
          width: '220px',
          height: '80px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5px 10px',
          margin: '5px 0 20px',
        }}
      >
        <div>
          <span style={{ color: '#5F6672' }}>退货商品</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            无线鼠标 × 3
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>退款金额</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>¥199.00</span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>手续费</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            ¥10.00（平台处理费）
          </span>
        </div>
      </div>
    </Stack>
  );
};

export default () => {
  return (
    <Steps labelPlacement="vertical">
      <Step
        key={1}
        title="退款申请已提交"
        subtitle="2024-04-29 19:00"
        description={detail()}
      />
      <Step
        key={2}
        title="退款处理中"
        subtitle="2024-04-29 19:08"
        description="正在处理退款申请，预计 1-3 个工作日原路返回付款账户。"
      />
      <Step
        key={3}
        title="退款完成"
        subtitle="2024-04-29 19:15"
        description="退款已到账，本次退款流程已结束。"
      />
    </Steps>
  );
};
```

## 使用 css 变量修改样式

可通过常用的 css 变量改变组件样式

```tsx
import { Stack, Step, Steps } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '176px' }}>
        <Steps
          style={{
            '--title-font-size': '30px',
            '--step-icon-margin': '12px 4px 0 0',
            '--step-line-padding': '36px 0 0 0',
          }}
        >
          <Step key={1} title="选择活动" />
          <Step key={2} title="创建内容" />
          <Step key={3} title="发布上线" />
        </Steps>
      </div>
    </Stack>
  );
};
```

## API

### Steps

| 属性           | 说明                                                                          | 类型                                                    | 默认值       |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ |
| current        | 指定当前步骤，从 0 开始记数，在子 Step 元素中，可以通过 status 属性覆盖该状态 | number                                                  | 0            |
| direction      | 步骤条方向                                                                    | `horizontal` \| `vertical`                              | `vertical`   |
| labelPlacement | 指定标签放置位置                                                              | `horizontal` \| `vertical`                              | `horizontal` |
| onChange       | 点击切换步骤时触发                                                            | (ev?: SyntheticEvent,data?: { current: number }) =>void | -            |

### Step

| 属性        | 说明           | 类型                                                    | 默认值   |
| ----------- | -------------- | ------------------------------------------------------- | -------- |
| title       | 标题           | React.ReactNode                                         | -        |
| subtitle    | 副标题         | React.ReactNode                                         | -        |
| description | 步骤的详情描述 | React.ReactNode                                         | -        |
| icon        | 步骤图标       | React.ReactNode                                         | -        |
| status      | 当前步骤的状态 | `wait` \| `active` \| `finish` \| `error`               | `active` |
| disabled    | 是否禁止点击   | boolean                                                 | false    |
| onClick     | 步骤图标       | (ev?: SyntheticEvent,data?: { current: number }) =>void | -        |

## 样式变量

| 全局变量                                | 说明             | 默认值                                            |
| --------------------------------------- | ---------------- | ------------------------------------------------- |
| --bui-steps-font-size                   | 步骤条字体大小   | `var(--bui-title-size-3)`                         |
| --bui-step-subtitle-font-size           | 副标题字体大小   | `var(--bui-text-size-2)`                          |
| --bui-step-line-padding                 | 线条内边距       | `20px 0 3px 0`                                    |
| --bui-step-line-width                   | 线条宽度         | `1px`                                             |
| --bui-step-line-height                  | 线条高度         | `100%`                                            |
| --bui-step-label-horizontal-line-height | 水平标签行高     | `1.8`                                             |
| --bui-step-icon-width                   | 图标宽度         | `28px`                                            |
| --bui-step-icon-active-width            | 激活状态图标宽度 | `12px`                                            |
| --bui-step-icon-active-height           | 激活状态图标高度 | `12px`                                            |
| --bui-step-icon-font-size               | 图标字体大小     | `var(--bui-title-size-4)`                         |
| --bui-step-icon-margin                  | 图标外边距       | `var(--bui-spacing-xs) var(--bui-spacing-xs) 0 0` |
| --bui-step-content-padding              | 内容内边距       | `3px 0`                                           |
| --bui-step-horizontal-line-padding      | 水平线条内边距   | `28px 0 6px`                                      |
