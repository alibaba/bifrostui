---
group: 反馈
name: SwipeAction 滑动操作
---

# SwipeAction 滑动操作

常用于单元格左右滑删除等手势操作。

## 何时使用

通过滑动操作来展示隐藏的功能菜单。

## 代码演示

### 基础使用

```tsx
import {
  SwipeAction,
  Stack,
  List,
  Divider,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'delete-left',
      text: '删除',
      color: 'danger',
    },
  ];
  const rightActions = [
    {
      key: 'delete-right',
      color: 'info',
      text: '登录',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>基础使用</ListItem>}
      >
        <SwipeAction
          leftActions={leftActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>右滑</span>
        </SwipeAction>
        <Divider direction="horizontal" />
        <SwipeAction
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>左滑</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### 点击关闭

通过`closeOnClickContainer`属性来控制通过点击主体内容容器时关闭。

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import { DeleteOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: '删除',
      color: 'danger',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>点击关闭</ListItem>}
      >
        <SwipeAction
          closeOnClickContainer
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              <DeleteOutlinedIcon size="large" />
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>打开后点击主体这可关闭</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### 禁用滑动

通过`disabled`属性来禁用滑动功能。

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: '删除',
      color: 'danger',
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>禁用滑动</ListItem>}
      >
        <SwipeAction
          disabled
          rightActions={rightActions.map((item) => (
            <SwipeActionItem color={item.color} key={item.key} id={item.key}>
              {item.text}
            </SwipeActionItem>
          ))}
        >
          <span>禁用滑动</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### 事件处理

组件提供`onActionsReveal`回调，在操作按钮出现时触发。

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  Toast,
  Dialog,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'pin',
      text: '置顶',
      color: 'info',
    },
  ];
  const rightActions = [
    {
      key: 'right-delete',
      text: '删除',
      color: 'danger',
      onClick: () => {
        Toast({ message: '点击了删除' });
      },
    },
    {
      key: 'right-setting',
      text: '设置',
      color: 'success',
      onClick: () => {
        Toast({ message: '点击了设置' });
      },
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>事件处理</ListItem>}
      >
        <SwipeAction
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick?.();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
          onActionsReveal={(data) => {
            Toast({ message: data.side === 'left' ? '左侧打开' : '右侧打开' });
          }}
          leftActions={leftActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={(e, data) => {
                  console.log(data);
                  Toast({ message: '点击了置顶' });
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <span>滑动</span>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### 自定义事件处理

组件实例提供`show`方法，用于手动打开滑动操作按钮；`close`方法，用于手动关闭滑动操作按钮。

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  ListItemContent,
  Dialog,
  Toast,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  let swipeActionRef = React.createRef<SwipeAction>();
  const [dialog, contextHolder] = Dialog.useDialog();
  const leftActions = [
    {
      key: 'pin',
      text: '置顶',
      color: 'info',
      onClick: () => {
        dialog.confirm({
          message: '定要置顶吗？',
          onConfirm: async () => {
            swipeActionRef.current?.close();
          },
        });
      },
    },
  ];
  const rightActions = [
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
      onClick: async () => {
        const res = await dialog.confirm({
          message: '定要删除吗？',
          onConfirm: async () => {
            swipeActionRef.current?.close();
          },
        });
      },
    },
  ];

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>手动控制归位逻辑</ListItem>}
      >
        <SwipeAction
          style={{ '--bui-swipe-action-container-padding': '0px' }}
          disabled
          ref={swipeActionRef}
          closeOnClickActionItem={false}
          leftActions={leftActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem
                color={item.color}
                key={item.key}
                id={item.key}
                onClick={() => {
                  item.onClick();
                }}
              >
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <ListItem
            onClick={async (e) => {
              const res = await Dialog({
                header: '提示',
                message: '请选择操作',
                confirmText: '打开右侧',
                cancelText: '打开左侧',
              });
              if (res) {
                swipeActionRef.current?.show('right');
              } else {
                swipeActionRef.current?.show('left');
              }
            }}
          >
            <ListItemContent primary={<div>手动打开</div>} />
          </ListItem>
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

### 与其他组件组合使用

该组件允许根据你的业务场景需要搭配其他组件使用。下面将简单演示与`Image`、`List`组件的搭配使用。

#### 搭配`Image`组件使用

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  Image,
  SwipeActionItem,
} from '@bifrostui/react';
import { DeleteOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const rightActions = [
    {
      key: 'delete-left',
      text: '删除',
      color: 'danger',
    },
  ];
  const src =
    'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

  return (
    <Stack
      direction="row"
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>搭配图片使用</ListItem>}
      >
        <SwipeAction
          style={{ '--bui-swipe-action-container-padding': '0px' }}
          rightActions={rightActions.map((item) => {
            return (
              <SwipeActionItem color={item.color} key={item.key} id={item.key}>
                <DeleteOutlinedIcon size="large" />
                {item.text}
              </SwipeActionItem>
            );
          })}
        >
          <Image width={200} height={200} src={src} />
        </SwipeAction>
      </List>
    </Stack>
  );
};
```

#### 搭配`List`组件使用

```tsx
import {
  SwipeAction,
  Stack,
  List,
  ListItem,
  ListItemContent,
  Divider,
  SwipeActionItem,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const leftActions = [
    {
      key: 'pin',
      text: '置顶',
      color: 'info',
    },
  ];
  const rightActions = [
    {
      key: 'unsubscribe',
      text: '取消关注',
      color: 'warning',
    },
    {
      key: 'mute',
      text: '确定',
      color: 'success',
    },
  ];
  const items = ['A', 'B'];
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <List
        style={{ width: '350px' }}
        header={<ListItem disabled>搭配列表使用</ListItem>}
      >
        {items.map((item) => (
          <SwipeAction
            style={{ '--bui-swipe-action-container-padding': '0px' }}
            key={item}
            leftActions={leftActions.map((item) => {
              return (
                <SwipeActionItem
                  color={item.color}
                  key={item.key}
                  id={item.key}
                >
                  {item.text}
                </SwipeActionItem>
              );
            })}
            rightActions={rightActions.map((item) => {
              return (
                <SwipeActionItem
                  color={item.color}
                  key={item.key}
                  id={item.key}
                >
                  {item.text}
                </SwipeActionItem>
              );
            })}
          >
            <ListItem>{item}</ListItem>
            <Divider direction="horizontal" />
          </SwipeAction>
        ))}
      </List>
    </Stack>
  );
};
```

## API

### SwipeAction属性

| 属性                   | 说明                                          | 类型                                | 默认值 |
| ---------------------- | --------------------------------------------- | ----------------------------------- | ------ |
| closeOnClickActionItem | 是否在点击操作按钮时自动归位                  | boolean                             | true   |
| closeOnClickContainer  | 是否在点击主体区域时自动归位                  | boolean                             | false  |
| leftActions            | 左侧的操作按钮列表（搭配SwipeActionItem使用） | React.ReactNode                     | -      |
| rightActions           | 右侧的操作按钮列表（搭配SwipeActionItem使用） | React.ReactNode                     | -      |
| onActionsReveal        | 按钮完全出现时触发                            | ({side: 'left' \| 'right'}) => void | -      |
| disabled               | 是否禁用滑动                                  | boolean                             | false  |

### SwipeActionItem属性

| 属性    | 说明       | 类型                                                      | 默认值    |
| ------- | ---------- | --------------------------------------------------------- | --------- |
| color   | 颜色       | 'info' \| 'success' \| 'warning' \| 'danger' \| 'primary' | 'primary' |
| onClick | 点击时触发 | (e: React.MouseEvent) => void                             | -         |

### Ref

| 属性  | 说明                                  | 类型                              |
| ----- | ------------------------------------- | --------------------------------- |
| close | 让滑动条归位                          | () => void                        |
| show  | 滑动出操作按钮，side 参数默认为 right | (side?: 'left'\| 'right') => void |

## 样式变量

| 属性                | 说明          | 默认值 | 全局变量                             |
| ------------------- | ------------- | ------ | ------------------------------------ |
| --container-padding | container边距 | 10px   | --bui-swipe-action-container-padding |
