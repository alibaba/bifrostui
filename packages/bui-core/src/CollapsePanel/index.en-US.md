---
group: Data Display
name: CollapsePanel
---

# CollapsePanel

The content area that can be folded/unfolded.

## Code demonstration

### Basic usage

Multiple panels can be expanded simultaneously, and this example defaults to expanding the first one.

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

### Using CollapseItem

Use CollapseItem instead of Items for rendering

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

### Accordion mode

In accordion mode, only one panel is always active.

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

### Specify the active keys for the current expansion panel

By setting ActiveKeys, you can manually specify the currently unfolded panel, which needs to be combined with oChange to achieve controlled unfolding and folding effects.

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

### Implementing accordion mode using ActiveKeys

By setting ActiveKeys, the currently unfolded panel can be manually specified, and accordion mode can be enabled by setting accordion

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

### Customize icons

By setting a custom icon through arrowIcon, if it is a ReactNode, it will automatically add a rotation animation effect for you.

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

### Customize unfolding and folding icons

ArrowIcon can pass in a function with the parameter being whether it is activated, and return the specific icon based on the input status.

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

| attribute         | explain                                        | type                                                     | Default value |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------- | ------------- |
| accordion         | Do you want to activate accordion mode         | boolean                                                  | false         |
| activeKeys        | The key of the current activation panel        | string[]                                                 | -             |
| defaultActiveKeys | Default key for expanding the panel            | string[]                                                 | -             |
| items             | Folding project content                        | CollapsePanelItemProps[]                                 | -             |
| children          | Body area content, rendered using CollapseItem | React.ReactNode                                          | -             |
| arrowIcon         | Customize arrow icon                           | React.ReactNode \|((active: boolean) => React.ReactNode) | -             |
| onChange          | Triggered when switching panels                | (activeKeys: string[]) => void                           | -             |

##### CollapsePanelItemProps

| attribute | explain                                       | type                                                     | Default value |
| --------- | --------------------------------------------- | -------------------------------------------------------- | ------------- |
| key       | Unique identifier, corresponding to ActiveKey | string                                                   | -             |
| label     | Panel Title                                   | React.ReactNode                                          | -             |
| icon      | Custom icon, overwrite arrowIcon              | React.ReactNode \|((active: boolean) => React.ReactNode) | -             |
| children  | Body area content                             | React.ReactNode                                          | -             |

### Style variables

| attribute         | explain                    | Default value           | global variable                      |
| ----------------- | -------------------------- | ----------------------- | ------------------------------------ |
| --width           | width                      | 100%                    | --bui-collapse-panel-width           |
| --header-padding  | Inner margin of panel head | var(--bui-spacing-lg) 0 | --bui-collapse-panel-header-padding  |
| --content-padding | Panel theme margin         | var(--bui-spacing-lg) 0 | --bui-collapse-panel-content-padding |
