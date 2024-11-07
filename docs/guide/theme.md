# 定制主题

BUI 的样式使用了 [less](https://lesscss.org/) 和 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 相结合做为开发语言，并定义了一系列全局/组件的样式变量，我们称之为Tokens，你可以根据需求调整Tokens的值，实现定制主题的能力。

相比于粗暴的 CSS 样式覆盖，CSS 变量让我们可以更加优雅地自定义组件的样式。

## BUI Tokens 概念

### 层级

BUI的Tokens分为三个层面：

1. **BUI内置Tokens：** 包括 `defaultLightToken`（默认高亮模式的全局Token）、`defaultDarkToken`（默认暗黑模式的全局Token）、`dmLightToken`（大麦高亮模式的全局Token）、`dmDarkToken`（大麦暗黑模式的全局Token）。
2. **响应式Tokens：** BUI默认是移动端优先的响应式方案，使用者可以通过 `responsive` 属性自定义响应式Tokens。
3. **组件的Tokens：** BUI在实现组件时，允许使用者通过 `token` 属性能够比较灵活地自定义组件样式。

### 优先级

通常情况下，从局部高于通用的角度来看，三种Tokens的优先级是： **组件的Tokens > 响应式Tokens > BUI内置Tokens** 。但对于暗黑模式这种特殊场景，**BUI内置的两种暗黑模式Tokens的优先级要高于响应式Tokens**。

## 如何定制

在浏览器环境下，针对不同需求，可以选择不同的定制方式。如：

- 你的主题定制需求比较宽泛，仅需要定制内置Tokens即可完成。
- 你的主题定制需求比较细致，需要将内置Tokens和组件Tokens结合，进行统一的定制。
- 你的主题定制需要考虑响应式，且颗粒度比较细，则可能需要将内置Tokens、响应式Tokens和组件Tokens三者结合，进行定制。

在小程序中，由于小程序无法动态插入代码的限制，在定制主题时没有在浏览器中那般灵活。目前小程序支持以下两种方式来修改小程序主题：

- 在样式文件中自行书写对应选择器下的Tokens，全局样式文件的主题配置会被页面级样式文件覆盖。
- 局部主题只能在使用组件时通过内联的方式传入css变量。

### 内置Tokens有哪些

我们可以通过组件文档的 "样式变量" 表格中，查到每个组件都暴露了都哪些 CSS 变量。

以 Button 组件为例，我们可以在它的文档上找到类似于下面这样的表格：

| 属性                      | 说明           | 默认值                     | 全局变量                             |
| ------------------------- | -------------- | -------------------------- | ------------------------------------ |
| --border-radius           | 圆角大小       | 100px                      | --bui-button-border-radius           |
| --bg-color                | 背景颜色       | --bui-color-neutral-5      | --bui-button-default-bg-color        |
| --border-color            | 边框颜色       | --bui-color-border-default | --bui-button-border-color            |
| --height                  | 按钮默认高度   | 27px                       | --bui-button-height                  |
| --icon-start-margin-right | 前置标签右边距 | --bui-spacing-xs           | --bui-button-icon-start-margin-right |
| --icon-end-margin-left    | 前置标签左边距 | --bui-spacing-xs           | --bui-button-icon-end-margin-left    |
| --disabled-opacity        | 禁用状态透明度 | 0.5                        | --bui-button-disabled-opacity        |
| --small-padding           | 小按钮内边距   | 0 11px                     | --bui-button-small-padding           |
| --small-height            | 小按钮高度     | 24px                       | --bui-button-small-height            |
| --medium-padding          | 中按钮内边距   | 0 14px                     | --bui-button-medium-padding          |
| --large-padding           | 大按钮内边距   | 0 14px                     | --bui-button-large-padding           |
| --large-height            | 大按钮高度     | 33px                       | --bui-button-large-height            |
| --full-font-size          | 满屏按钮字号   | --bui-title-size-4         | --bui-button-full-font-size          |
| --full-height             | 满屏按钮高度   | 42px                       | --bui-button-full-height             |

这表示了Button组件支持了 `--border-radius` 、 `--bg-color`等一系列变量，且对应全局css变量为 `--bui-button-border-radius` 、 `--bui-button-default-bg-color`等。

我们提供的默认主题相关CSS变量可以在@bifrostui/styles中查看

通过设置 CSS 变量的值定制主题，有三种方法：

### 方法一：在 CSS 文件中设置

给 Button 组件添加个自定义的 `className`：

```jsx | pure
<Button className="my-button" />
```

然后在 CSS 文件中通过选中自定义的className来设置 CSS 变量

```css
.my-button {
  --border-radius: 10px;
}
```

### 方法二：直接通过 style 属性设置

通过在组件的 `style` 属性设置CSS 变量，这种方式简单粗暴

```jsx | pure
<Button
  style={{
    '--border-radius': '2px',
  }}
/>
```

### 方法三：通过全局变量进行设置

如需对项目中所有的 Button 都进行统一的样式调整，这种情况下，可以通过设置"全局 CSS 变量"("样式变量"表格中的最后一列)进行统一的修改

```css
:root {
  --bui-button-border-radius: 10px;
}
```

通过上面方式对全局变量的设置，项目中所有的 Button 都会被自定义修改。
