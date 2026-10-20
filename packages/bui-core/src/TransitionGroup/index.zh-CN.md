---
group: 动效
name: TransitionGroup 过渡组
---

# TransitionGroup 过渡组

用于管理一组`Transition`或`CSSTransition`组件，与过渡组件类似，是一个状态机，用于管理组件随时间推移的挂载和卸载。

## 代码演示

### 基础使用

如下代码展示了如何使用`TransitionGroup`来管理一组动态添加和删除的组件。

```css
.item-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 300ms ease-in;
}

.item-exit {
  opacity: 1;
  transform: translateX(0);
}

.item-exit-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 300ms ease-in;
}
```

<code src="./demo/TransitionGroupDemo.tsx"></code>

## API

| 属性         | 说明                                                          | 类型                                  | 默认值           |
| ------------ | ------------------------------------------------------------- | ------------------------------------- | ---------------- |
| children     | 一组 `<Transition>` 组件，它们在离开时会切换为 `in` 和 `exit` | ReactNode                             | -                |
| appear       | 启用或禁用所有子元素的出现动画                                | boolean                               | false            |
| enter        | 用于启用或禁用所有子级的进入动画                              | boolean                               | true             |
| exit         | 用于启用或禁用所有子组件的退出动画                            | boolean                               | true             |
| childFactory | 在子组件退出时对其进行更新的工厂函数                          | (child: ReactElement) => ReactElement | (child) => child |
| component    | 用于渲染容器的组件                                            | elementType \| null                   | div              |
