---
group: 数据展示
name: List 列表组件
---

# List 列表组件

列表时一组连续的文本或者图像，由主要操作跟补充操作的项目组合成，常用于数据展示。

## 代码演示

### 基础用法

最基础的列表展示，可用于承载文字、图片、段落等。

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>回收站</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary={<div>设置</div>}
              secondary={<div>音量设置</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

列表组件提供`ListItem`组件，用来承载列表子项。
`ListItem`组件划分成 4 个区域：`ListItemHeader`、`ListItemContent`、`ListItemExtra`、`ListItemFooter`。

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  ListItemFooter,
  ListItemHeader,
  Stack,
  Switch,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent primary={<div>飞行模式</div>} />
            <ListItemFooter>{check ? '已开启飞行模式' : ''}</ListItemFooter>
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 可点击状态

列表组件提供`disabled`属性来控制列表的可点击态。
您可以通过`ListItem`组件传递`disabled`单独控制子项禁止点击。

```tsx
import {
  Alert,
  List,
  ListItem,
  ListItemContent,
  Stack,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        {isOpen && <Alert>点击清除回收站成功</Alert>}
        <List style={{ width: '100%' }}>
          <ListItem
            disabled
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={
                <div
                  onClick={() => {
                    setOpen(true);
                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                >
                  回收站
                </div>
              }
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={<div>设置</div>}
              secondary={<div>清除回收站</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置列表头部

列表组件可通过`header`、`subheader`设置列表头部。

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List
          header={<div>系统</div>}
          subheader={<div>系统设置</div>}
          style={{ width: '100%' }}
        >
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>主题设置</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>音量设置</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置列表子项左侧操作区

列表组件提供`ListItemHeader`子组件，用于定制列表项头部操作区，常用于定制列表项头部图标。

```tsx
import React from 'react';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemHeader,
  Stack,
} from '@bifrostui/react';
import { LocationFilledIcon, PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent>电话</ListItemContent>
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <LocationFilledIcon />
            </ListItemHeader>
            <ListItemContent>住址</ListItemContent>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置列表子项内容区域

列表组件提供`ListItemContent`子组件，用于定制列表子项内容区域。
您可以通过`primary`、`secondary`属性设置列表子项主内容区域与副内容区域。

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="设置" secondary="系统设置" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置列表子项尾部区域

列表组件提供`ListItemFooter`子组件，用于定制列表项尾部区域。

```tsx
import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemFooter,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent>头像</ListItemContent>
            <ListItemFooter>
              <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
            </ListItemFooter>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置列表子项右侧操作区

列表组件提供`ListItemExtra`子组件，用来定制列表项右侧操作区。
`ListItemExtra`子组件可以用来配置开关、用来单独控制列表子项。

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Stack,
  Switch,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem>
            <ListItemContent
              primary={<div>在优酷展示想看记录</div>}
              secondary={<div>影片可在线播放时会通知提醒你</div>}
            />
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 分割线

列表组件默认子项之前有分割线，通过提供`dividerProp`属性透传分割线组件属性。
您也可以通过`hideDivider`隐藏分割线。

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="蓝牙和设备连接"
              secondary="NFC、投射屏幕、触碰付款"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="显示" secondary="状态栏、息屏显示" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List hideDivider style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="蓝牙和设备连接"
              secondary="NFC、投射屏幕、触碰付款"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="显示" secondary="状态栏、息屏显示" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### 设置大小

列表组件提供`3`种大小尺寸：`small`、`medium`、`large`。您可以通过`size`属性定制这 3 种尺寸。

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div> 默认大小（medium）:</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
        <div>小一号（small）：</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
        <div>大一号（large）：</div>
        <List size="large" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### API

#### ListProps

| 属性        | 说明           | 类型                       | 默认值   |
| ----------- | -------------- | -------------------------- | -------- |
| header      | 列表头部内容   | ReactNode                  | -        |
| subheader   | 列表子头部内容 | ReactNode                  | -        |
| hideDivider | 是否隐藏分割线 | boolean                    | false    |
| size        | 列表尺寸       | `small`｜`medium`｜`large` | `medium` |
| component   | 列表节点标签   | React.ElementType          | -        |

#### ListItemProps

| 属性        | 说明                 | 类型                | 默认值 |
| ----------- | -------------------- | ------------------- | ------ |
| endIcon     | 列表子项右侧操作图标 | ReactNode ｜boolean | -      |
| disabled    | 列表是否不可点击     | boolean             | false  |
| hideDivider | 是否隐藏分割线       | boolean             | false  |
| component   | 根节点标签           | React.ElementType   | -      |

#### ListItemContentProps

| 属性      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| primary   | 主要内容   | ReactNode         | -      |
| secondary | 次要内容   | ReactNode         | -      |
| component | 根节点标签 | React.ElementType | -      |

#### ListItemHeaderProps、ListItemFooterProps、ListItemExtraProps

| 属性      | 说明       | 类型              | 默认值 |
| --------- | ---------- | ----------------- | ------ |
| component | 根节点标签 | React.ElementType | -      |

### 样式变量

| 属性                  | 说明           | 默认值    | 全局变量                       |
| --------------------- | -------------- | --------- | ------------------------------ |
| --small-item-padding  | 默认占位背景色 | 5px 12px  | --bui-list-small-item-padding  |
| --medium-item-padding | 默认占位背景色 | 18px 12px | --bui-list-medium-item-padding |
| --large-item-padding  | 默认占位背景色 | 20px 12px | --bui-list-large-item-padding  |
