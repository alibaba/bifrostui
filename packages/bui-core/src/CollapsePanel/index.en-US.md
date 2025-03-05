---
group: Data Display
name: CollapsePanel Collapsible Panel
---

# CollapsePanel Collapsible Panel

A collapsible/expandable content area.

## Code Demos

### Basic Usage

Multiple panels can be expanded at the same time; this example defaults to expanding the first panel.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
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
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
  `;

  return (
    <CollapsePanel defaultActiveKeys={['1']}>
      <CollapsePanelItem key="1" label="This is Panel Title 1">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="2" label="This is Panel Title 2">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="3" label="This is Panel Title 3">
        {text}
      </CollapsePanelItem>
    </CollapsePanel>
  );
};
```

### Accordion Mode

In accordion mode, only one panel remains active at any time.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      accordion
      items={[
        {
          key: '1',
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};
```

### Specifying Currently Expanded Panels with activeKeys

By setting activeKeys, you can manually specify which panels are currently expanded. This needs to be used with onChange to achieve controlled expand/collapse effects.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
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
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### Implementing Accordion Mode with activeKeys

By setting activeKeys, you can manually specify which panels are currently expanded. By setting accordion to true, you enable accordion mode.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
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
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### Customizing Icons

Set custom icons using arrowIcon. If it's a ReactNode, it will automatically add a rotation animation effect.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import { DoubleArrowDownTwoToneIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={<DoubleArrowDownTwoToneIcon />}
    />
  );
};
```

### Customizing Expand/Collapse Icons

arrowIcon can accept a function that takes an activation state as a parameter and returns a specific icon based on that state.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import {
  DoubleArrowDownTwoToneIcon,
  DoubleArrowUpTwoToneIcon,
} from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = `
    A dog is a domesticated animal.
    It is known for its loyalty,
    and it is a welcome guest in many families around the world.
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
          label: 'This is Panel Title 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is Panel Title 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is Panel Title 3',
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

| Property          | Description                                    | Type                                                      | Default |
| ----------------- | ---------------------------------------------- | --------------------------------------------------------- | ------- |
| accordion         | Whether to enable accordion mode               | boolean                                                   | false   |
| activeKeys        | Keys of currently active panels                | string[]                                                  | -       |
| defaultActiveKeys | Keys of default expanded panels                | string[]                                                  | -       |
| items             | Collapsible item contents                      | CollapsePanelItemProps[]                                  | -       |
| children          | Body content area, rendered using CollapseItem | React.ReactNode                                           | -       |
| arrowIcon         | Custom arrow icon                              | React.ReactNode \| ((active: boolean) => React.ReactNode) | -       |
| onChange          | Triggered when switching panels                | (activeKeys: string[]) => void                            | -       |

##### CollapsePanelItemProps

| Property | Description                           | Type                                                      | Default |
| -------- | ------------------------------------- | --------------------------------------------------------- | ------- |
| key      | Unique identifier, matching activeKey | string                                                    | -       |
| label    | Panel title                           | React.ReactNode                                           | -       |
| icon     | Custom icon, overriding arrowIcon     | React.ReactNode \| ((active: boolean) => React.ReactNode) | -       |
| children | Body content area                     | React.ReactNode                                           | -       |

### Style Variables

| Property          | Description          | Default Value           | Global Variable                      |
| ----------------- | -------------------- | ----------------------- | ------------------------------------ |
| --width           | Width                | 100%                    | --bui-collapse-panel-width           |
| --header-padding  | Panel header padding | var(--bui-spacing-lg) 0 | --bui-collapse-panel-header-padding  |
| --content-padding | Panel body padding   | var(--bui-spacing-lg) 0 | --bui-collapse-panel-content-padding |
