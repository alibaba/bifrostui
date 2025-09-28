import { OverrideProps } from '@bifrostui/types';
import React, { ReactElement, ReactNode } from 'react';

export interface TransitionGroupBaseProps {
  /**
   * 一组 `<Transition>` 组件，它们在离开时会切换为 `in` 和 `out`。`<TransitionGroup>` 会注入特定的过渡属性，因此，
   * 如果您像我们的 `<Fade>` 示例一样包装 `<Transition>`，请记住将它们分散开来。
   * 虽然此组件适用于多个 `Transition` 或 `CSSTransition`子组件，但有时您可能希望只有一个过渡子组件，
   * 其中包含您希望在更改其内容时过渡出和入的内容（例如，路由、图像等）。在这种情况下，您可以在更改过渡子组件的内容时更改其 `key` 属性，
   * 这将导致`TransitionGroup` 将该子组件过渡出和入。
   */
  children?: ReactNode;
  /**
   * 启用或禁用所有子元素的出现动画
   * 请注意，指定此项将覆盖单个子组件 Transitions 上设置的任何默认设置
   */
  appear?: boolean;
  /**
   * 用于启用或禁用所有子级的进入动画
   * 请注意，指定此项将覆盖单个子组件 Transitions 上设置的任何默认设置
   */
  enter?: boolean;
  /**
   * 用于启用或禁用所有子组件的退出动画。
   * 请注意，指定此项将覆盖单个子组件 Transitions 上设置的任何默认设置
   */
  exit?: boolean;
  /**
   * 您可能需要在子组件退出时对其进行响应式更新。
   * 这通常通过使用 `cloneElement` 来实现，但是，如果子组件退出，该元素已被移除，消费者无法访问。
   * 如果您确实需要在子组件退出时对其进行更新，则可以提供一个 `childFactory`
   * 来包装每个子组件，即使是即将退出的子组件。
   * @default (child) => child
   */
  childFactory?: (child: ReactElement) => ReactElement;
}

export type TransitionGroupProps<
  D extends React.ElementType = 'div',
  P = {},
> = OverrideProps<
  {
    props: P &
      TransitionGroupBaseProps & {
        /**
         * `<TransitionGroup>` 默认渲染一个 `<div>`。您可以通过提供 `component` 属性来更改此行为。
         * 如果您使用的是 React v16+，并且希望避免使用包裹的 `<div>` 元素，
         * 您可以传入 `component={null}`。如果包裹的 div 破坏了您的 CSS 样式，这将非常有用。
         * @default div
         */
        component?: D | null;
      };
    defaultComponent: D;
  },
  D
>;
