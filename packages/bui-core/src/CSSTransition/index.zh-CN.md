---
group: 动效
name: CSSTransition CSS过渡
---

# CSSTransition CSS过渡

基于 [Transition API](/cores/transition) 实现的样式过渡组件，它继承了 [Transition API](/cores/transition?#api) 的所有属性。

## 代码演示

### 基础使用

`*-enter`、`*-exit`、`*-done` 类名分别表示动画开始、动画退出、动画结束时的样式

```css
.slide-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-enter-active {
  will-change: transform;
  transform: translate3d(0%, 0, 0);
  transition: transform 12000ms ease 0ms;
}
.slide-enter-done {
  transform: translate3d(0%, 0, 0);
}
.slide-exit {
  transform: translate3d(0%, 0, 0);
}
.slide-exit-active {
  will-change: transform;
  transform: translate3d(-100%, 0, 0);
  transition: transform 12000ms ease 0ms;
}
.slide-exit-done {
  transform: translate3d(-100%, 0, 0);
}
```

<code src="./demo/CSSTransitionDemo.tsx"></code>

## API

| 属性       | 说明     | 类型                  | 默认值 |
| ---------- | -------- | --------------------- | ------ |
| classNames | 动效类名 | string \| IClassNames | -      |

### IClassNames

| 状态        | 说明     | 类型   | 默认值 |
| ----------- | -------- | ------ | ------ |
| enter       | 开始进入 | string | -      |
| enterActive | 进入中   | string | -      |
| enterDone   | 进入完成 | string | -      |
| exit        | 开始退出 | string | -      |
| exitActive  | 退出中   | string | -      |
| exitDone    | 退出结束 | string | -      |

`CSSTransition` 继承自 `Transition` 其他属性见 [Transition API](/cores/transition?#api)
