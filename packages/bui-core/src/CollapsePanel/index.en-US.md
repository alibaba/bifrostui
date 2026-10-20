---
group: Data Display
name: CollapsePanel
---

# CollapsePanel

A content area that can be collapsed/expanded.

## Basic Usage

Multiple panels can be expanded simultaneously; in this example, the first panel is expanded by default.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};
```

### Using CollapseItem

Use CollapseItem instead of items for rendering.

```tsx
import { CollapsePanel, CollapsePanelItem } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
  `;

  return (
    <CollapsePanel defaultActiveKeys={['1']}>
      <CollapsePanelItem key="1" label="This is panel header 1">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="2" label="This is panel header 2">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="3" label="This is panel header 3">
        {text}
      </CollapsePanelItem>
    </CollapsePanel>
  );
};
```

### Accordion Mode

In accordion mode, only one panel can be active at a time.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import * as React from 'react';

export default () => {
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      accordion
      items={[
        {
          key: '1',
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};
```

### Specifying Currently Expanded Panels with activeKeys

You can manually specify the currently expanded panels via activeKeys. Use onChange for controlled expansion and collapse.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
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
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### Implementing Accordion Mode with activeKeys

By setting activeKeys, you can manually specify the currently expanded panel, and by setting accordion, enable accordion mode.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
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
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};
```

### Custom Icons

Use arrowIcon to set custom icons. If it is a ReactNode, a rotation animation effect will be automatically added.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import { DoubleArrowDownTwoToneIcon } from '@bifrostui/icons';
import * as React from 'react';

export default () => {
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
  `;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={<DoubleArrowDownTwoToneIcon />}
    />
  );
};
```

### Custom Expand/Collapse Icons

The arrowIcon can take a function as a parameter to check if it's active and return a specific icon based on the state.

```tsx
import { CollapsePanel } from '@bifrostui/react';
import {
  DoubleArrowDownTwoToneIcon,
  DoubleArrowUpTwoToneIcon,
} from '@bifrostui/icons';
import * as React from 'react';

export default () => {
  const text = `
    Dogs are domesticated animals.
    They are known for their loyalty and fidelity,
    and they are popular guests in many households around the world.
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
          label: 'This is panel header 1',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: 'This is panel header 2',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: 'This is panel header 3',
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

| Property          | Description                                          | Type                                                      | Default |
| ----------------- | ---------------------------------------------------- | --------------------------------------------------------- | ------- |
| accordion         | Whether to enable accordion mode                     | boolean                                                   | false   |
| activeKeys        | The keys of the currently active panel               | string[]                                                  | -       |
| defaultActiveKeys | The keys of the default expanded panel               | string[]                                                  | -       |
| items             | Collapse item content                                | CollapsePanelItemProps[]                                  | -       |
| children          | Content of the body area, rendered with CollapseItem | React.ReactNode                                           | -       |
| arrowIcon         | Custom arrow icon                                    | React.ReactNode \| ((active: boolean) => React.ReactNode) | -       |
| onChange          | Callback when the panel is toggled                   | (activeKeys: string[]) => void                            | -       |

##### CollapsePanelItemProps

| Property | Description                                 | Type                                                      | Default |
| -------- | ------------------------------------------- | --------------------------------------------------------- | ------- |
| key      | Unique identifier, corresponds to activeKey | string                                                    | -       |
| label    | Panel title                                 | React.ReactNode                                           | -       |
| icon     | Custom icon, overrides arrowIcon            | React.ReactNode \| ((active: boolean) => React.ReactNode) | -       |
| children | Content of the body area                    | React.ReactNode                                           | -       |

## Style Variables

| Variable                             | Description          | Default                   |
| ------------------------------------ | -------------------- | ------------------------- |
| --bui-collapse-panel-width           | Collapse panel width | `100%`                    |
| --bui-collapse-panel-header-padding  | Panel header padding | `var(--bui-spacing-lg) 0` |
| --bui-collapse-panel-content-padding | Content area padding | `var(--bui-spacing-lg) 0` |

```

```
