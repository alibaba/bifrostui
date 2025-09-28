````markdown
---
group: Animation
name: CSSTransition CSS Transition
---

# CSSTransition CSS Transition

A style transition component based on the [Transition API](/cores/transition), it inherits all properties from the [Transition API](/cores/transition?#api).

## Code Examples

### Basic Usage

The `*-enter`, `*-exit`, and `*-done` class names denote the styles at the start of the animation, when exiting, and when the animation ends, respectively.

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
````

<code src="./demo/CSSTransitionDemo.tsx"></code>

## API

| Property   | Description           | Type                  | Default |
| ---------- | --------------------- | --------------------- | ------- |
| classNames | Animation class names | string \| IClassNames | -       |

### IClassNames

| State       | Description    | Type   | Default |
| ----------- | -------------- | ------ | ------- |
| enter       | Start entering | string | -       |
| enterActive | Entering       | string | -       |
| enterDone   | Enter complete | string | -       |
| exit        | Start exiting  | string | -       |
| exitActive  | Exiting        | string | -       |
| exitDone    | Exit complete  | string | -       |

`CSSTransition` inherits from `Transition`. For other properties, see [Transition API](/cores/transition?#api).

```

```
