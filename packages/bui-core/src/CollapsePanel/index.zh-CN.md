---
group: 数据展示
name: CollapsePanel 折叠面板
---

# CollapsePanel 折叠面板

可以折叠/展开的内容区域。

## 基础用法

可以同时展开多个面板，这个例子默认展开了第一个。

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};
```

### 使用 CollapseItem

使用 CollapseItem 替代 Items 进行渲染

```tsx
import { CollapsePanel, CollapsePanelItem } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  return (
    <CollapsePanel defaultActiveKeys={['1']}>
      <CollapsePanelItem key="1" label="这是面板标题1">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="2" label="这是面板标题2">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="3" label="这是面板标题3">
        {text}
      </CollapsePanelItem>
    </CollapsePanel>
  );
};
```

### 手风琴模式

手风琴模式，始终只有一个面板处在激活状态。

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      accordion
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};
```

### 指定当前展开面板 activeKeys

通过设置 activeKeys 可以手动指定当前展开的面板，需配合 onChange 才能实现受控的展开折叠效果。

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  const handleChange = (event, params) => {
    setActiveKeys(params.activeKeys);
  };

  return (
    <CollapsePanel
      activeKeys={activeKeys}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### 使用 activeKeys 实现手风琴模式

通过设置 activeKeys 可以手动指定当前展开的面板，通过设置 accordion 开启手风琴模式

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  const handleChange = (event, params) => {
    setActiveKeys(params.activeKeys);
  };

  return (
    <CollapsePanel
      accordion
      activeKeys={activeKeys}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### 自定义图标

通过 arrowIcon 设置自定义图标，如果是 ReactNode，那么会自动为你增加旋转动画效果。

```tsx
import { CollapsePanel } from '@bifrostui/react';
import { DoubleArrowDownTwoToneIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={<DoubleArrowDownTwoToneIcon />}
    />
  );
};
```

### 自定义展开折叠图标

arrowIcon 可以传入一个 function，入参为是否激活，根据入参状态返回具体的 icon。

```tsx
import { CollapsePanel } from '@bifrostui/react';
import {
  DoubleArrowDownTwoToneIcon,
  DoubleArrowUpTwoToneIcon,
} from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = `
    狗是一种家养动物。
    它以忠诚和忠诚而闻名，
    在世界各地的许多家庭中，它都是受欢迎的客人。
  `;

  const renderArrowIcon = (active) => {
    if (active) {
      return <DoubleArrowUpTwoToneIcon />;
    }
    return <DoubleArrowDownTwoToneIcon />;
  };

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '这是面板标题1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '这是面板标题2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '这是面板标题3',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={renderArrowIcon}
    />
  );
};
```

### API

##### CollapsePanelProps

| 属性              | 说明                                      | 类型                                                      | 默认值 |
| ----------------- | ----------------------------------------- | --------------------------------------------------------- | ------ |
| accordion         | 是否开启手风琴模式                        | boolean                                                   | false  |
| activeKeys        | 当前激活面板的 key                        | string[]                                                  | -      |
| defaultActiveKeys | 默认展开面板的 key                        | string[]                                                  | -      |
| items             | 折叠项目内容                              | CollapsePanelItemProps[]                                  | -      |
| children          | body 区域内容，使用 CollapseItem 进行渲染 | React.ReactNode                                           | -      |
| arrowIcon         | 自定义箭头图标                            | React.ReactNode \| ((active: boolean) => React.ReactNode) | -      |
| onChange          | 切换面板时触发                            | (activeKeys: string[]) => void                            | -      |

##### CollapsePanelItemProps

| 属性     | 说明                        | 类型                                                      | 默认值 |
| -------- | --------------------------- | --------------------------------------------------------- | ------ |
| key      | 唯一标识，对应 activeKey    | string                                                    | -      |
| label    | 面板标题                    | React.ReactNode                                           | -      |
| icon     | 自定义 icon，覆盖 arrowIcon | React.ReactNode \| ((active: boolean) => React.ReactNode) | -      |
| children | body 区域内容               | React.ReactNode                                           | -      |

### 样式变量

| 属性              | 说明           | 默认值                  | 全局变量                             |
| ----------------- | -------------- | ----------------------- | ------------------------------------ |
| --width           | 宽度           | 100%                    | --bui-collapse-panel-width           |
| --header-padding  | 面板头部内边距 | var(--bui-spacing-lg) 0 | --bui-collapse-panel-header-padding  |
| --content-padding | 面板主题内边距 | var(--bui-spacing-lg) 0 | --bui-collapse-panel-content-padding |
