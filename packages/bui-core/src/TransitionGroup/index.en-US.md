---
group: Animation

name: TransitionGroup
---

# TransitionGroup

Used for managing a group of `Transition` or `CSSTransition` components. Similar to transition components, it acts as a state machine to manage the mounting and unmounting of components over time.

## Code Demonstration

### Basic Usage

The following code demonstrates how to use `TransitionGroup` to manage a group of dynamically added and removed components.

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

| Property     | Description                                                                           | Type                                  | Default          |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------- | ---------------- |
| children     | A group of `<Transition>` components that toggle between `in` and `exit` when leaving | ReactNode                             | -                |
| appear       | Enable or disable the appearance animation for all child elements                     | boolean                               | false            |
| enter        | Enable or disable the enter animation for all children                                | boolean                               | true             |
| exit         | Enable or disable the exit animation for all child components                         | boolean                               | true             |
| childFactory | Factory function to update the child component upon exiting                           | (child: ReactElement) => ReactElement | (child) => child |
| component    | Component used for rendering the container                                            | elementType \| null                   | div              |
